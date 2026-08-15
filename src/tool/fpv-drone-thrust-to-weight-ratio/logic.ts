export type AgilityTier = 'underpowered' | 'cinematic' | 'freestyle' | 'acro_pro' | 'racing_extreme';

export interface DroneTwrInputs {
  auwGrams: number;
  motorCount: number;
  thrustPerMotorGrams: number;
  propellerSizeInches: number;
  propellerPitchInches: number;
  bladeCount: number;
  throttleStickPercent: number;
}

export interface BetaflightTuneAdvice {
  tpaSetting: string;
  dynamicIdleSetting: string;
  propwashRisk: string;
}

export interface DroneTwrResults {
  totalMaxThrustGrams: number;
  twrRatio: number;
  hoverThrottlePercent: number;
  currentThrottlePercent: number;
  currentThrustGrams: number;
  instantGForce: number;
  zeroToHundredTimeSec: number;
  recommendedCamAngleDeg: number;
  windResistanceKmh: number;
  maxPitchAngleDeg: number;
  agilityTier: AgilityTier;
  tuneAdvice: BetaflightTuneAdvice;
}

export function calculateTotalMaxThrust(motorCount: number, thrustPerMotorGrams: number): number {
  if (motorCount <= 0 || thrustPerMotorGrams <= 0) return 0;
  return motorCount * thrustPerMotorGrams;
}

export function calculateTwr(totalThrustGrams: number, auwGrams: number): number {
  if (totalThrustGrams <= 0 || auwGrams <= 0) return 0;
  return totalThrustGrams / auwGrams;
}

export function calculateHoverThrottle(twr: number): number {
  if (twr <= 1) return 100;
  const linearFraction = 1 / twr;
  const throttlePercent = Math.pow(linearFraction, 1 / 1.8) * 100;
  return Math.min(100, Math.max(5, Math.round(throttlePercent * 10) / 10));
}

export function calculateCurrentThrust(maxThrust: number, throttlePercent: number): number {
  if (maxThrust <= 0 || throttlePercent <= 0) return 0;
  const normalized = Math.min(100, Math.max(0, throttlePercent)) / 100;
  const factor = Math.pow(normalized, 1.8);
  return Math.round(maxThrust * factor);
}

export function calculateZeroToHundred(twr: number): number {
  if (twr <= 1.05) return 0;
  const netAccelMps2 = (twr - 1) * 9.81;
  const targetVelocityMps = 100 / 3.6;
  const timeSec = targetVelocityMps / netAccelMps2;
  return Math.max(0.2, Math.round(timeSec * 100) / 100);
}

export function calculateRecommendedCamAngle(twr: number): number {
  if (twr <= 1.2) return 15;
  const cruiseTwr = Math.max(1.05, twr * 0.35);
  const radians = Math.acos(1 / cruiseTwr);
  const degrees = Math.round(radians * (180 / Math.PI));
  return Math.min(55, Math.max(15, degrees));
}

export function calculateWindResistance(twr: number): number {
  if (twr <= 0) return 0;
  const baseKmh = Math.sqrt(Math.max(0, twr - 0.5)) * 28;
  return Math.min(160, Math.round(baseKmh));
}

export function calculateMaxPitchAngle(twr: number): number {
  if (twr <= 1.05) return 0;
  const radians = Math.acos(1 / twr);
  return Math.min(85, Math.round(radians * (180 / Math.PI)));
}

export function evaluateAgilityTier(twr: number): AgilityTier {
  if (twr < 2.0) return 'underpowered';
  if (twr < 4.0) return 'cinematic';
  if (twr < 8.0) return 'freestyle';
  if (twr < 13.0) return 'acro_pro';
  return 'racing_extreme';
}

function getTpaSetting(twr: number): string {
  if (twr >= 12) return 'TPA 0.75 @ 1250';
  if (twr >= 8) return 'TPA 0.65 @ 1350';
  return 'TPA 0.45 @ 1500';
}

function getDynamicIdleSetting(auwGrams: number): string {
  if (auwGrams < 100) return 'Idle 4.0% (Micro)';
  if (auwGrams > 1000) return 'Idle 6.0% (Heavy)';
  return 'Idle 5.5% (Standard 5")';
}

function getPropwashRisk(twr: number): string {
  if (twr >= 10) return 'High Authority (Low Wash)';
  if (twr >= 5) return 'Moderate (Tune D-Term)';
  return 'High Wash Sensitivity';
}

export function evaluateBetaflightTune(twr: number, auwGrams: number): BetaflightTuneAdvice {
  return {
    tpaSetting: getTpaSetting(twr),
    dynamicIdleSetting: getDynamicIdleSetting(auwGrams),
    propwashRisk: getPropwashRisk(twr),
  };
}

export function calculateTwrMetrics(inputs: DroneTwrInputs): DroneTwrResults {
  const totalMaxThrustGrams = calculateTotalMaxThrust(inputs.motorCount, inputs.thrustPerMotorGrams);
  const twrRatio = calculateTwr(totalMaxThrustGrams, inputs.auwGrams);
  const hoverThrottlePercent = calculateHoverThrottle(twrRatio);
  const currentThrustGrams = calculateCurrentThrust(totalMaxThrustGrams, inputs.throttleStickPercent);
  const instantGForce = inputs.auwGrams > 0 ? Math.round((currentThrustGrams / inputs.auwGrams) * 100) / 100 : 0;
  const zeroToHundredTimeSec = calculateZeroToHundred(twrRatio);
  const recommendedCamAngleDeg = calculateRecommendedCamAngle(twrRatio);
  const windResistanceKmh = calculateWindResistance(twrRatio);
  const maxPitchAngleDeg = calculateMaxPitchAngle(twrRatio);
  const agilityTier = evaluateAgilityTier(twrRatio);
  const tuneAdvice = evaluateBetaflightTune(twrRatio, inputs.auwGrams);

  return {
    totalMaxThrustGrams,
    twrRatio,
    hoverThrottlePercent,
    currentThrottlePercent: inputs.throttleStickPercent,
    currentThrustGrams,
    instantGForce,
    zeroToHundredTimeSec,
    recommendedCamAngleDeg,
    windResistanceKmh,
    maxPitchAngleDeg,
    agilityTier,
    tuneAdvice,
  };
}
