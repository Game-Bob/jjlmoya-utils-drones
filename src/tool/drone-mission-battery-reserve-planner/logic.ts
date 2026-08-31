export type UnitSystem = 'metric' | 'imperial';
export type WindDirection = 'headwind' | 'tailwind' | 'crosswind';
export type MissionStatusKey = 'optimal' | 'tight' | 'critical' | 'exceeded';

export interface MissionInputs {
  unitSystem: UnitSystem;
  batteryCapacityMah: number;
  voltageNominal: number;
  averageCurrentAmps: number;
  cruiseSpeedKmh: number;
  oneWayDistanceKm: number;
  targetHoverTimeMin: number;
  windSpeedKmh: number;
  windDirection: WindDirection;
  reservePolicyPercent: number;
}

export interface MissionResults {
  totalEnergyWh: number;
  usableEnergyWh: number;
  reserveEnergyWh: number;
  basePowerDrawWatts: number;
  outboundPowerWatts: number;
  returnPowerWatts: number;
  totalAutonomyMinutes: number;
  outboundSpeedKmh: number;
  returnSpeedKmh: number;
  outboundTimeMinutes: number;
  targetHoverTimeMinutes: number;
  returnTimeMinutes: number;
  totalMissionTimeMinutes: number;
  outboundEnergyWh: number;
  targetHoverEnergyWh: number;
  returnEnergyWh: number;
  missionEnergyUsedWh: number;
  remainingEnergyLandingWh: number;
  remainingEnergyLandingPercent: number;
  maxSafeRadiusKm: number;
  voltageSagWhLoss: number;
  statusKey: MissionStatusKey;
}

const KMH_TO_MPH = 0.621371;
const KM_TO_MILES = 0.621371;

export function clampValue(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

export function computeEffectiveSpeeds(
  cruiseKmh: number,
  windKmh: number,
  dir: WindDirection
): { outbound: number; returnLeg: number } {
  if (dir === 'headwind') {
    return { outbound: Math.max(1, cruiseKmh - windKmh), returnLeg: cruiseKmh + windKmh * 0.85 };
  }
  if (dir === 'tailwind') {
    return { outbound: cruiseKmh + windKmh * 0.85, returnLeg: Math.max(1, cruiseKmh - windKmh) };
  }
  const effective = Math.max(1, Math.sqrt(Math.max(0, cruiseKmh * cruiseKmh - windKmh * windKmh * 0.5)));
  return { outbound: effective, returnLeg: effective };
}

export function calculateWindPowerPenalty(
  basePowerWatts: number,
  cruiseKmh: number,
  windKmh: number,
  dir: WindDirection
): { outboundPower: number; returnPower: number } {
  const windRatio = windKmh / Math.max(10, cruiseKmh);

  if (dir === 'headwind') {
    return {
      outboundPower: basePowerWatts * Math.pow(1 + 0.65 * windRatio, 1.3),
      returnPower: basePowerWatts * Math.max(0.75, 1 - 0.35 * windRatio),
    };
  }
  if (dir === 'tailwind') {
    return {
      outboundPower: basePowerWatts * Math.max(0.75, 1 - 0.35 * windRatio),
      returnPower: basePowerWatts * Math.pow(1 + 0.65 * windRatio, 1.3),
    };
  }
  const crossPower = basePowerWatts * (1 + 0.25 * windRatio);
  return { outboundPower: crossPower, returnPower: crossPower };
}

export function calculateEnergyMetrics(inputs: MissionInputs): {
  totalEnergyWh: number;
  usableEnergyWh: number;
  reserveEnergyWh: number;
  basePowerDrawWatts: number;
  totalAutonomyMinutes: number;
  voltageSagWhLoss: number;
} {
  const cap = Math.max(1, inputs.batteryCapacityMah);
  const volt = Math.max(0.1, inputs.voltageNominal);
  const current = Math.max(0.1, inputs.averageCurrentAmps);
  const reservePct = clampValue(inputs.reservePolicyPercent, 5, 50) / 100;

  const grossWh = (cap * volt) / 1000;
  const sagLoss = grossWh * Math.min(0.12, 0.02 + 0.015 * (current / (cap / 1000)));
  const totalWh = Math.max(0.1, grossWh - sagLoss);
  const reserveWh = totalWh * reservePct;
  const usableWh = totalWh - reserveWh;
  const baseWatts = volt * current;

  return {
    totalEnergyWh: totalWh,
    usableEnergyWh: usableWh,
    reserveEnergyWh: reserveWh,
    basePowerDrawWatts: baseWatts,
    totalAutonomyMinutes: (usableWh / baseWatts) * 60,
    voltageSagWhLoss: sagLoss,
  };
}

export function determineMissionStatus(
  remainingWh: number,
  reserveWh: number,
  _totalEnergyWh: number
): MissionStatusKey {
  if (remainingWh < 0) return 'exceeded';
  if (remainingWh < reserveWh * 0.5) return 'critical';
  if (remainingWh < reserveWh) return 'tight';
  return 'optimal';
}

interface LegParams {
  distKm: number;
  hoverMin: number;
  baseWatts: number;
  outboundSpeed: number;
  returnSpeed: number;
  outboundPower: number;
  returnPower: number;
}

function calculateTransitLegs(p: LegParams) {
  const outboundTimeMin = (p.distKm / p.outboundSpeed) * 60;
  const returnTimeMin = (p.distKm / p.returnSpeed) * 60;
  const outboundEnergyWh = (outboundTimeMin / 60) * p.outboundPower;
  const hoverEnergyWh = (p.hoverMin / 60) * p.baseWatts;
  const returnEnergyWh = (returnTimeMin / 60) * p.returnPower;

  return {
    outboundTimeMin, returnTimeMin, hoverTimeMin: p.hoverMin,
    totalMissionTimeMin: outboundTimeMin + p.hoverMin + returnTimeMin,
    outboundEnergyWh, hoverEnergyWh, returnEnergyWh,
    totalUsedWh: outboundEnergyWh + hoverEnergyWh + returnEnergyWh,
  };
}

interface SafeRadiusParams {
  usableWh: number;
  hoverWh: number;
  outboundPower: number;
  returnPower: number;
  outboundSpeed: number;
  returnSpeed: number;
}

function calculateSafeRadius(p: SafeRadiusParams): number {
  const transitWh = Math.max(0, p.usableWh - p.hoverWh);
  const perKm = (p.outboundPower / p.outboundSpeed) + (p.returnPower / p.returnSpeed);
  return perKm > 0 ? Math.max(0, transitWh / perKm) : 0;
}

export function calculateMissionReserve(inputs: MissionInputs): MissionResults {
  const e = calculateEnergyMetrics(inputs);
  const s = computeEffectiveSpeeds(Math.max(1, inputs.cruiseSpeedKmh), Math.max(0, inputs.windSpeedKmh), inputs.windDirection);
  const p = calculateWindPowerPenalty(e.basePowerDrawWatts, Math.max(1, inputs.cruiseSpeedKmh), Math.max(0, inputs.windSpeedKmh), inputs.windDirection);
  const legs = calculateTransitLegs({
    distKm: Math.max(0, inputs.oneWayDistanceKm), hoverMin: Math.max(0, inputs.targetHoverTimeMin),
    baseWatts: e.basePowerDrawWatts, outboundSpeed: s.outbound, returnSpeed: s.returnLeg,
    outboundPower: p.outboundPower, returnPower: p.returnPower,
  });
  const maxSafeRadiusKm = calculateSafeRadius({
    usableWh: e.usableEnergyWh, hoverWh: legs.hoverEnergyWh, outboundPower: p.outboundPower,
    returnPower: p.returnPower, outboundSpeed: s.outbound, returnSpeed: s.returnLeg,
  });

  const remWh = e.totalEnergyWh - legs.totalUsedWh;
  return {
    totalEnergyWh: e.totalEnergyWh, usableEnergyWh: e.usableEnergyWh, reserveEnergyWh: e.reserveEnergyWh,
    basePowerDrawWatts: e.basePowerDrawWatts, outboundPowerWatts: p.outboundPower, returnPowerWatts: p.returnPower,
    totalAutonomyMinutes: e.totalAutonomyMinutes, outboundSpeedKmh: s.outbound, returnSpeedKmh: s.returnLeg,
    outboundTimeMinutes: legs.outboundTimeMin, targetHoverTimeMinutes: legs.hoverTimeMin, returnTimeMinutes: legs.returnTimeMin,
    totalMissionTimeMinutes: legs.totalMissionTimeMin, outboundEnergyWh: legs.outboundEnergyWh, targetHoverEnergyWh: legs.hoverEnergyWh,
    returnEnergyWh: legs.returnEnergyWh, missionEnergyUsedWh: legs.totalUsedWh, remainingEnergyLandingWh: remWh,
    remainingEnergyLandingPercent: (remWh / e.totalEnergyWh) * 100, maxSafeRadiusKm, voltageSagWhLoss: e.voltageSagWhLoss,
    statusKey: determineMissionStatus(remWh, e.reserveEnergyWh, e.totalEnergyWh),
  };
}

export function convertDistance(km: number, unit: UnitSystem): number {
  return unit === 'imperial' ? km * KM_TO_MILES : km;
}

export function convertSpeed(kmh: number, unit: UnitSystem): number {
  return unit === 'imperial' ? kmh * KMH_TO_MPH : kmh;
}
