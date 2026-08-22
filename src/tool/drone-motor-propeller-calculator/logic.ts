export type BladeCount = 2 | 3 | 4;
export type MotorCount = 2 | 4 | 6 | 8;
export type ThrustSource = 'model' | 'bench';

export interface DroneMotorInputs {
  motorKv: number;
  batteryVoltage: number;
  propDiameterInches: number;
  propPitchInches: number;
  bladeCount: BladeCount;
  motorCount: MotorCount;
  droneWeightGrams: number;
  benchThrustGrams?: number | undefined;
  benchVoltage?: number | undefined;
}

export interface DroneMotorResults {
  loadedRpm: number;
  pitchSpeedKmh: number;
  thrustPerMotorGrams: number;
  totalThrustGrams: number;
  powerPerMotorWatts: number;
  totalPowerWatts: number;
  currentPerMotorAmps: number;
  totalCurrentAmps: number;
  thrustToWeight: number;
  thrustMarginPercent: number;
  hoverThrottlePercent: number;
  thrustSource: ThrustSource;
}

const AIR_DENSITY_KG_PER_M3 = 1.225;
const GRAM_FORCE_TO_NEWTON = 0.00980665;
const INCH_TO_METRE = 0.0254;
const LOADED_RPM_FACTOR = 0.85;
const MOTOR_EFFICIENCY = 0.87;

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum);
}

function getBladeFactor(bladeCount: BladeCount): number {
  const factors: Record<BladeCount, number> = { 2: 1, 3: 1.08, 4: 1.14 };
  return factors[bladeCount];
}

function getPitchFactor(inputs: DroneMotorInputs): number {
  const ratio = clamp(inputs.propPitchInches / inputs.propDiameterInches, 0.2, 1.2);
  return clamp(0.72 + ratio * 0.45, 0.75, 1.26);
}

export function calculateLoadedRpm(inputs: DroneMotorInputs): number {
  return inputs.motorKv * inputs.batteryVoltage * LOADED_RPM_FACTOR;
}

function calculateModelThrust(inputs: DroneMotorInputs, loadedRpm: number): number {
  const diameter = inputs.propDiameterInches * INCH_TO_METRE;
  const rotationsPerSecond = loadedRpm / 60;
  const thrustCoefficient = 0.105 * getBladeFactor(inputs.bladeCount) * getPitchFactor(inputs);
  const thrustNewtons = thrustCoefficient * AIR_DENSITY_KG_PER_M3 * rotationsPerSecond ** 2 * diameter ** 4;
  return Math.max(thrustNewtons / GRAM_FORCE_TO_NEWTON, 0);
}

function calculateBenchThrust(inputs: DroneMotorInputs, loadedRpm: number): number | undefined {
  if (!inputs.benchThrustGrams || !inputs.benchVoltage || inputs.benchVoltage <= 0) return undefined;
  const referenceRpm = inputs.motorKv * inputs.benchVoltage;
  const rpmRatio = loadedRpm / referenceRpm;
  return Math.max(inputs.benchThrustGrams * rpmRatio ** 2, 0);
}

function calculateThrust(inputs: DroneMotorInputs, loadedRpm: number): { grams: number; source: ThrustSource } {
  const benchThrust = calculateBenchThrust(inputs, loadedRpm);
  if (benchThrust !== undefined) return { grams: benchThrust, source: 'bench' };
  return { grams: calculateModelThrust(inputs, loadedRpm), source: 'model' };
}

function calculatePower(inputs: DroneMotorInputs, loadedRpm: number): number {
  const diameter = inputs.propDiameterInches * INCH_TO_METRE;
  const rotationsPerSecond = loadedRpm / 60;
  const pitchFactor = getPitchFactor(inputs);
  const powerCoefficient = 0.045 * getBladeFactor(inputs.bladeCount) * (0.86 + pitchFactor * 0.16);
  const shaftPower = powerCoefficient * AIR_DENSITY_KG_PER_M3 * rotationsPerSecond ** 3 * diameter ** 5;
  return Math.max(shaftPower / MOTOR_EFFICIENCY, 0);
}

export function calculateDroneMotorMetrics(inputs: DroneMotorInputs): DroneMotorResults {
  const loadedRpm = calculateLoadedRpm(inputs);
  const thrust = calculateThrust(inputs, loadedRpm);
  const totalThrustGrams = thrust.grams * inputs.motorCount;
  const powerPerMotorWatts = calculatePower(inputs, loadedRpm);
  const totalPowerWatts = powerPerMotorWatts * inputs.motorCount;
  const totalCurrentAmps = totalPowerWatts / inputs.batteryVoltage;
  const thrustToWeight = totalThrustGrams / inputs.droneWeightGrams;
  return {
    loadedRpm,
    pitchSpeedKmh: loadedRpm * inputs.propPitchInches * INCH_TO_METRE * 60 / 1000,
    thrustPerMotorGrams: thrust.grams,
    totalThrustGrams,
    powerPerMotorWatts,
    totalPowerWatts,
    currentPerMotorAmps: totalCurrentAmps / inputs.motorCount,
    totalCurrentAmps,
    thrustToWeight,
    thrustMarginPercent: (thrustToWeight - 1) * 100,
    hoverThrottlePercent: clamp(Math.sqrt(1 / thrustToWeight) * 100, 0, 100),
    thrustSource: thrust.source,
  };
}
