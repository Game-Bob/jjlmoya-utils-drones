import { describe, expect, it } from 'vitest';
import {
  calculateEstimatedSpeedKmh,
  calculateFpvDroneSpeed,
  calculateLoadedRpm,
  calculateNoLoadRpm,
  calculatePitchSpeedKmh,
  calculateSlipPercent,
  diagnoseSpeed,
  type FpvDroneSpeedInputs,
} from './logic';

const freestyle: FpvDroneSpeedInputs = {
  motorKv: 1950,
  batteryVoltage: 22.2,
  propellerPitchInches: 4.3,
  efficiencyPercent: 82,
  aircraftMassGrams: 700,
};

describe('FPV drone speed model', () => {
  it('converts KV and voltage into no-load RPM', () => {
    expect(calculateNoLoadRpm(1950, 22.2)).toBe(43290);
    expect(calculateNoLoadRpm(0, 22.2)).toBe(0);
  });

  it('reduces no-load RPM for efficiency and aircraft load', () => {
    expect(calculateLoadedRpm(freestyle)).toBeGreaterThan(30000);
    expect(calculateLoadedRpm(freestyle)).toBeLessThan(40000);
  });

  it('calculates geometric pitch speed in kilometres per hour', () => {
    expect(calculatePitchSpeedKmh(4.3, 35000)).toBeCloseTo(229.36, 1);
  });

  it('applies efficiency as a planning estimate', () => {
    expect(calculateEstimatedSpeedKmh(200, 80)).toBe(160);
    expect(calculateSlipPercent(200, 160)).toBeCloseTo(20, 10);
  });

  it('reports useful diagnosis states', () => {
    expect(diagnoseSpeed({ ...freestyle, efficiencyPercent: 65 }, 35)).toBe('high-slip');
    expect(diagnoseSpeed({ ...freestyle, motorKv: 7000, batteryVoltage: 24 }, 10)).toBe('overspeed');
    expect(diagnoseSpeed({ ...freestyle, aircraftMassGrams: 3000 }, 10)).toBe('heavy-load');
  });

  it('returns sensitivity points around the selected propeller pitch', () => {
    const results = calculateFpvDroneSpeed(freestyle);
    expect(results.sensitivity).toHaveLength(3);
    expect(results.sensitivity[0]!.speedKmh).toBeLessThan(results.sensitivity[1]!.speedKmh);
    expect(results.sensitivity[2]!.speedKmh).toBeGreaterThan(results.sensitivity[1]!.speedKmh);
  });
});
