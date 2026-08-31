export interface FpvDroneSpeedInputs {
  motorKv: number;
  batteryVoltage: number;
  propellerPitchInches: number;
  efficiencyPercent: number;
  aircraftMassGrams: number;
}

export type SpeedDiagnosis = 'overspeed' | 'high-slip' | 'heavy-load' | 'planning';

export interface SpeedSensitivityPoint {
  label: 'lower' | 'current' | 'higher';
  pitchInches: number;
  speedKmh: number;
}

export interface FpvDroneSpeedResults {
  noLoadRpm: number;
  loadedRpm: number;
  pitchSpeedKmh: number;
  estimatedSpeedKmh: number;
  slipPercent: number;
  loadPenaltyPercent: number;
  rpmPerVolt: number;
  diagnosis: SpeedDiagnosis;
  sensitivity: SpeedSensitivityPoint[];
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function validInputs(inputs: FpvDroneSpeedInputs): boolean {
  return inputs.motorKv > 0
    && inputs.batteryVoltage > 0
    && inputs.propellerPitchInches > 0
    && inputs.efficiencyPercent > 0
    && inputs.aircraftMassGrams > 0;
}

export function calculateNoLoadRpm(motorKv: number, batteryVoltage: number): number {
  if (motorKv <= 0 || batteryVoltage <= 0) return 0;
  return motorKv * batteryVoltage;
}

export function calculateLoadedRpm(inputs: FpvDroneSpeedInputs): number {
  if (!validInputs(inputs)) return 0;
  const noLoadRpm = calculateNoLoadRpm(inputs.motorKv, inputs.batteryVoltage);
  const efficiencyFactor = 0.82 + clamp(inputs.efficiencyPercent, 50, 98) / 1000;
  const loadFactor = clamp(0.98 - inputs.aircraftMassGrams / 12000, 0.78, 0.98);
  return Math.round(noLoadRpm * efficiencyFactor * loadFactor);
}

export function calculatePitchSpeedKmh(propellerPitchInches: number, rpm: number): number {
  if (propellerPitchInches <= 0 || rpm <= 0) return 0;
  return propellerPitchInches * rpm * 0.001524;
}

export function calculateEstimatedSpeedKmh(pitchSpeedKmh: number, efficiencyPercent: number): number {
  if (pitchSpeedKmh <= 0 || efficiencyPercent <= 0) return 0;
  return pitchSpeedKmh * clamp(efficiencyPercent, 50, 98) / 100;
}

export function calculateSlipPercent(pitchSpeedKmh: number, estimatedSpeedKmh: number): number {
  if (pitchSpeedKmh <= 0) return 0;
  return clamp((1 - estimatedSpeedKmh / pitchSpeedKmh) * 100, 0, 60);
}

export function calculateLoadPenaltyPercent(aircraftMassGrams: number): number {
  if (aircraftMassGrams <= 0) return 0;
  return (1 - clamp(0.98 - aircraftMassGrams / 12000, 0.78, 0.98)) * 100;
}

export function diagnoseSpeed(inputs: FpvDroneSpeedInputs, slipPercent: number): SpeedDiagnosis {
  const noLoadRpm = calculateNoLoadRpm(inputs.motorKv, inputs.batteryVoltage);
  if (noLoadRpm > 140000) return 'overspeed';
  if (slipPercent >= 28) return 'high-slip';
  if (inputs.aircraftMassGrams >= 2500) return 'heavy-load';
  return 'planning';
}

function makeSensitivity(inputs: FpvDroneSpeedInputs, loadedRpm: number): SpeedSensitivityPoint[] {
  const lowerPitch = Math.max(0.5, inputs.propellerPitchInches - 0.5);
  const higherPitch = inputs.propellerPitchInches + 0.5;
  return [
    { label: 'lower', pitchInches: lowerPitch, speedKmh: calculateEstimatedSpeedKmh(calculatePitchSpeedKmh(lowerPitch, loadedRpm), inputs.efficiencyPercent) },
    { label: 'current', pitchInches: inputs.propellerPitchInches, speedKmh: calculateEstimatedSpeedKmh(calculatePitchSpeedKmh(inputs.propellerPitchInches, loadedRpm), inputs.efficiencyPercent) },
    { label: 'higher', pitchInches: higherPitch, speedKmh: calculateEstimatedSpeedKmh(calculatePitchSpeedKmh(higherPitch, loadedRpm), inputs.efficiencyPercent) },
  ];
}

function emptyResults(): FpvDroneSpeedResults {
  return {
    noLoadRpm: 0,
    loadedRpm: 0,
    pitchSpeedKmh: 0,
    estimatedSpeedKmh: 0,
    slipPercent: 0,
    loadPenaltyPercent: 0,
    rpmPerVolt: 0,
    diagnosis: 'planning',
    sensitivity: [],
  };
}

export function calculateFpvDroneSpeed(inputs: FpvDroneSpeedInputs): FpvDroneSpeedResults {
  if (!validInputs(inputs)) return emptyResults();

  const noLoadRpm = calculateNoLoadRpm(inputs.motorKv, inputs.batteryVoltage);
  const loadedRpm = calculateLoadedRpm(inputs);
  const pitchSpeedKmh = calculatePitchSpeedKmh(inputs.propellerPitchInches, loadedRpm);
  const estimatedSpeedKmh = calculateEstimatedSpeedKmh(pitchSpeedKmh, inputs.efficiencyPercent);
  const slipPercent = calculateSlipPercent(pitchSpeedKmh, estimatedSpeedKmh);

  return {
    noLoadRpm,
    loadedRpm,
    pitchSpeedKmh,
    estimatedSpeedKmh,
    slipPercent,
    loadPenaltyPercent: calculateLoadPenaltyPercent(inputs.aircraftMassGrams),
    rpmPerVolt: inputs.motorKv,
    diagnosis: diagnoseSpeed(inputs, slipPercent),
    sensitivity: makeSensitivity(inputs, loadedRpm),
  };
}
