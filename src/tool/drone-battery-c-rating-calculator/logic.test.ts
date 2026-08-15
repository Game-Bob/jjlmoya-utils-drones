import { describe, it, expect } from 'vitest';
import {
  getNominalCellVoltage,
  getFullyChargedCellVoltage,
  calculateClaimedCurrent,
  calculateRealisticCRating,
  calculateTotalPeakDraw,
  calculateVoltageSag,
  calculateFlightTimeSeconds,
  evaluateSafetyStatus,
  calculateBatteryMetrics,
  type BatteryInputs,
} from './logic';

describe('Drone Battery C-Rating Logic', () => {
  it('should return correct nominal cell voltages', () => {
    expect(getNominalCellVoltage('lipo')).toBe(3.7);
    expect(getNominalCellVoltage('lihv')).toBe(3.8);
    expect(getNominalCellVoltage('liion')).toBe(3.6);
    expect(getNominalCellVoltage('life')).toBe(3.3);
  });

  it('should return correct fully charged cell voltages', () => {
    expect(getFullyChargedCellVoltage('lipo')).toBe(4.2);
    expect(getFullyChargedCellVoltage('lihv')).toBe(4.35);
    expect(getFullyChargedCellVoltage('liion')).toBe(4.2);
    expect(getFullyChargedCellVoltage('life')).toBe(3.65);
  });

  it('should calculate claimed continuous current', () => {
    expect(calculateClaimedCurrent(1300, 75)).toBe(97.5);
    expect(calculateClaimedCurrent(0, 75)).toBe(0);
    expect(calculateClaimedCurrent(1500, -10)).toBe(0);
  });

  it('should calculate realistic C-rating based on internal resistance', () => {
    expect(calculateRealisticCRating(4, 100, 1300)).toBe(52);
    expect(calculateRealisticCRating(15, 80, 300)).toBe(80);
    expect(calculateRealisticCRating(0, 80, 1300)).toBe(80);
    expect(calculateRealisticCRating(25, 100, 1300)).toBe(21);
  });

  it('should calculate total peak current draw', () => {
    expect(calculateTotalPeakDraw(4, 30, 1.5)).toBe(121.5);
    expect(calculateTotalPeakDraw(0, 30, 1.5)).toBe(1.5);
  });

  it('should calculate voltage sag', () => {
    expect(calculateVoltageSag(100, 5, 4)).toBe(2);
    expect(calculateVoltageSag(0, 5, 4)).toBe(0);
  });

  it('should calculate flight time in seconds', () => {
    expect(calculateFlightTimeSeconds(1000, 60)).toBeCloseTo(48);
    expect(calculateFlightTimeSeconds(1000, 0)).toBe(0);
  });

  it('should evaluate safety status correctly', () => {
    expect(evaluateSafetyStatus(100, 90)).toBe('optimal');
    expect(evaluateSafetyStatus(100, 150)).toBe('warning');
    expect(evaluateSafetyStatus(100, 250)).toBe('danger');
    expect(evaluateSafetyStatus(100, 0)).toBe('optimal');
  });

  it('should calculate complete battery metrics', () => {
    const inputs: BatteryInputs = {
      capacitymAh: 1300,
      claimedCRating: 100,
      cellCount: 4,
      chemistry: 'lipo',
      internalResistanceMOm: 5,
      motorCount: 4,
      peakMotorCurrentA: 25,
      auxCurrentA: 1.5,
    };

    const res = calculateBatteryMetrics(inputs);
    expect(res.claimedMaxCurrentA).toBe(130);
    expect(res.totalPeakDrawA).toBe(101.5);
    expect(res.voltageSagV).toBeCloseTo(2.03);
    expect(res.sagNominalVoltageV).toBeGreaterThan(0);
    expect(res.flightTimeFullThrottleSec).toBeGreaterThan(0);
  });
});
