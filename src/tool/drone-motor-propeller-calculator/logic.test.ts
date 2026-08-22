import { describe, expect, it } from 'vitest';
import {
  calculateDroneMotorMetrics,
  calculateLoadedRpm,
  type DroneMotorInputs,
} from './logic';

const baseInputs: DroneMotorInputs = {
  motorKv: 1950,
  batteryVoltage: 22.2,
  propDiameterInches: 5.1,
  propPitchInches: 4.3,
  bladeCount: 3,
  motorCount: 4,
  droneWeightGrams: 700,
};

describe('Drone motor and propeller calculator logic', () => {
  it('estimates loaded RPM from KV and voltage', () => {
    expect(calculateLoadedRpm(baseInputs)).toBeCloseTo(36796.5, 0);
  });

  it('uses the transparent physics model without a bench point', () => {
    const results = calculateDroneMotorMetrics(baseInputs);
    expect(results.thrustSource).toBe('model');
    expect(results.thrustPerMotorGrams).toBeGreaterThan(900);
    expect(results.totalThrustGrams).toBeGreaterThan(results.thrustPerMotorGrams);
    expect(results.totalPowerWatts).toBeGreaterThan(100);
    expect(results.totalCurrentAmps).toBeGreaterThan(5);
  });

  it('scales a manufacturer bench point at the selected voltage', () => {
    const results = calculateDroneMotorMetrics({ ...baseInputs, batteryVoltage: 18.5, benchThrustGrams: 1900, benchVoltage: 22.2 });
    expect(results.thrustSource).toBe('bench');
    expect(results.thrustPerMotorGrams).toBeCloseTo(953, 0);
  });

  it('supports two, three and four blade setups', () => {
    const twoBlade = calculateDroneMotorMetrics({ ...baseInputs, bladeCount: 2 });
    const fourBlade = calculateDroneMotorMetrics({ ...baseInputs, bladeCount: 4 });
    expect(twoBlade.thrustPerMotorGrams).toBeLessThan(fourBlade.thrustPerMotorGrams);
  });

  it('calculates lift margin and hover throttle', () => {
    const results = calculateDroneMotorMetrics({ ...baseInputs, motorCount: 8, droneWeightGrams: 400 });
    expect(results.thrustToWeight).toBeGreaterThan(2);
    expect(results.thrustMarginPercent).toBeGreaterThan(100);
    expect(results.hoverThrottlePercent).toBeLessThan(71);
  });

  it('keeps hover throttle within a usable range for a heavy setup', () => {
    const results = calculateDroneMotorMetrics({ ...baseInputs, droneWeightGrams: 50000, motorCount: 2 });
    expect(results.hoverThrottlePercent).toBe(100);
    expect(results.thrustMarginPercent).toBeLessThan(0);
  });
});
