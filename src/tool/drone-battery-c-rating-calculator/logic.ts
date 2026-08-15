export type BatteryChemistry = 'lipo' | 'lihv' | 'liion' | 'life';
export type SafetyStatus = 'optimal' | 'warning' | 'danger';

export interface BatteryInputs {
  capacitymAh: number;
  claimedCRating: number;
  cellCount: number;
  chemistry: BatteryChemistry;
  internalResistanceMOm: number;
  motorCount: number;
  peakMotorCurrentA: number;
  auxCurrentA: number;
}

export interface BatteryCalculationResults {
  claimedMaxCurrentA: number;
  realisticCRating: number;
  realisticMaxCurrentA: number;
  totalPeakDrawA: number;
  voltageSagV: number;
  sagNominalVoltageV: number;
  sagFullVoltageV: number;
  flightTimeFullThrottleSec: number;
  flightTimeHoverSec: number;
  burstRatingRequired: number;
  safetyStatus: SafetyStatus;
}

export function getNominalCellVoltage(chemistry: BatteryChemistry): number {
  if (chemistry === 'lihv') return 3.8;
  if (chemistry === 'liion') return 3.6;
  if (chemistry === 'life') return 3.3;
  return 3.7;
}

export function getFullyChargedCellVoltage(chemistry: BatteryChemistry): number {
  if (chemistry === 'lihv') return 4.35;
  if (chemistry === 'liion') return 4.2;
  if (chemistry === 'life') return 3.65;
  return 4.2;
}

export function calculateClaimedCurrent(capacitymAh: number, claimedCRating: number): number {
  if (capacitymAh <= 0 || claimedCRating <= 0) return 0;
  return (capacitymAh / 1000) * claimedCRating;
}

export function calculateRealisticCRating(internalResistanceMOm: number, claimedC: number, capacitymAh: number): number {
  if (internalResistanceMOm <= 0 || capacitymAh <= 0) return claimedC;
  const capacityAh = capacitymAh / 1000;
  const maxThermalAmps = Math.sqrt(18 / (internalResistanceMOm / 1000));
  const maxThermalC = Math.round(maxThermalAmps / capacityAh);
  return Math.min(claimedC, Math.max(10, maxThermalC));
}

export function calculateTotalPeakDraw(motorCount: number, peakMotorCurrentA: number, auxCurrentA: number): number {
  const motors = Math.max(0, motorCount);
  const perMotor = Math.max(0, peakMotorCurrentA);
  const aux = Math.max(0, auxCurrentA);
  return motors * perMotor + aux;
}

export function calculateVoltageSag(totalPeakDrawA: number, internalResistanceMOm: number, cellCount: number): number {
  if (totalPeakDrawA <= 0 || internalResistanceMOm <= 0 || cellCount <= 0) return 0;
  const packResistanceOm = (internalResistanceMOm / 1000) * cellCount;
  return totalPeakDrawA * packResistanceOm;
}

export function calculateFlightTimeSeconds(capacitymAh: number, currentA: number): number {
  if (capacitymAh <= 0 || currentA <= 0) return 0;
  return (capacitymAh / 1000 / currentA) * 3600 * 0.8;
}

export function evaluateSafetyStatus(realisticMaxCurrentA: number, totalPeakDrawA: number): SafetyStatus {
  if (totalPeakDrawA <= 0) return 'optimal';
  const burstCapacityA = realisticMaxCurrentA * 1.8;
  if (totalPeakDrawA <= realisticMaxCurrentA * 1.1) return 'optimal';
  if (totalPeakDrawA <= burstCapacityA) return 'warning';
  return 'danger';
}

function calculateVoltagesAndRuntimes(inputs: BatteryInputs, totalPeakDrawA: number, voltageSagV: number) {
  const nominalTotalV = getNominalCellVoltage(inputs.chemistry) * inputs.cellCount;
  const fullTotalV = getFullyChargedCellVoltage(inputs.chemistry) * inputs.cellCount;
  const sagNominalVoltageV = Math.max(0, nominalTotalV - voltageSagV);
  const sagFullVoltageV = Math.max(0, fullTotalV - voltageSagV);
  const flightTimeFullThrottleSec = calculateFlightTimeSeconds(inputs.capacitymAh, totalPeakDrawA);
  const flightTimeHoverSec = calculateFlightTimeSeconds(inputs.capacitymAh, Math.max(1, totalPeakDrawA * 0.25));
  return { sagNominalVoltageV, sagFullVoltageV, flightTimeFullThrottleSec, flightTimeHoverSec };
}

export function calculateBatteryMetrics(inputs: BatteryInputs): BatteryCalculationResults {
  const claimedMaxCurrentA = calculateClaimedCurrent(inputs.capacitymAh, inputs.claimedCRating);
  const realisticCRating = calculateRealisticCRating(inputs.internalResistanceMOm, inputs.claimedCRating, inputs.capacitymAh);
  const realisticMaxCurrentA = (inputs.capacitymAh / 1000) * realisticCRating;
  const totalPeakDrawA = calculateTotalPeakDraw(inputs.motorCount, inputs.peakMotorCurrentA, inputs.auxCurrentA);
  const voltageSagV = calculateVoltageSag(totalPeakDrawA, inputs.internalResistanceMOm, inputs.cellCount);
  const sub = calculateVoltagesAndRuntimes(inputs, totalPeakDrawA, voltageSagV);
  const burstRatingRequired = inputs.capacitymAh > 0 ? (totalPeakDrawA / (inputs.capacitymAh / 1000)) : 0;
  const safetyStatus = evaluateSafetyStatus(realisticMaxCurrentA, totalPeakDrawA);

  return {
    claimedMaxCurrentA,
    realisticCRating,
    realisticMaxCurrentA,
    totalPeakDrawA,
    voltageSagV,
    ...sub,
    burstRatingRequired,
    safetyStatus,
  };
}
