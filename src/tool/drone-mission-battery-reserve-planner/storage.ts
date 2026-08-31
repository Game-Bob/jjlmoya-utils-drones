import type { MissionInputs, UnitSystem, WindDirection } from './logic';

const STORAGE_KEY = 'jjlmoya_drone_mission_battery_reserve_planner_state';

export const DEFAULT_MISSION_INPUTS: MissionInputs = {
  unitSystem: 'metric',
  batteryCapacityMah: 10000,
  voltageNominal: 22.2,
  averageCurrentAmps: 18,
  cruiseSpeedKmh: 45,
  oneWayDistanceKm: 6,
  targetHoverTimeMin: 5,
  windSpeedKmh: 12,
  windDirection: 'headwind',
  reservePolicyPercent: 20,
};

function parseNumberField(val: unknown, fallback: number): number {
  return typeof val === 'number' && !Number.isNaN(val) ? val : fallback;
}

function parseUnitSystem(val: unknown): UnitSystem {
  return val === 'imperial' ? 'imperial' : 'metric';
}

function parseWindDirection(val: unknown): WindDirection {
  if (val === 'tailwind' || val === 'crosswind') return val;
  return 'headwind';
}

export function loadSavedInputs(): MissionInputs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_MISSION_INPUTS;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return DEFAULT_MISSION_INPUTS;

    return {
      unitSystem: parseUnitSystem(parsed.unitSystem),
      batteryCapacityMah: parseNumberField(parsed.batteryCapacityMah, DEFAULT_MISSION_INPUTS.batteryCapacityMah),
      voltageNominal: parseNumberField(parsed.voltageNominal, DEFAULT_MISSION_INPUTS.voltageNominal),
      averageCurrentAmps: parseNumberField(parsed.averageCurrentAmps, DEFAULT_MISSION_INPUTS.averageCurrentAmps),
      cruiseSpeedKmh: parseNumberField(parsed.cruiseSpeedKmh, DEFAULT_MISSION_INPUTS.cruiseSpeedKmh),
      oneWayDistanceKm: parseNumberField(parsed.oneWayDistanceKm, DEFAULT_MISSION_INPUTS.oneWayDistanceKm),
      targetHoverTimeMin: parseNumberField(parsed.targetHoverTimeMin, DEFAULT_MISSION_INPUTS.targetHoverTimeMin),
      windSpeedKmh: parseNumberField(parsed.windSpeedKmh, DEFAULT_MISSION_INPUTS.windSpeedKmh),
      windDirection: parseWindDirection(parsed.windDirection),
      reservePolicyPercent: parseNumberField(parsed.reservePolicyPercent, DEFAULT_MISSION_INPUTS.reservePolicyPercent),
    };
  } catch {
    return DEFAULT_MISSION_INPUTS;
  }
}

export function saveInputs(inputs: MissionInputs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {}
}
