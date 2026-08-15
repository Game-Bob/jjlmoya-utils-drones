import { describe, it, expect } from 'vitest';
import {
  calculateTotalMaxThrust,
  calculateTwr,
  calculateHoverThrottle,
  calculateCurrentThrust,
  calculateZeroToHundred,
  calculateRecommendedCamAngle,
  calculateWindResistance,
  calculateMaxPitchAngle,
  evaluateAgilityTier,
  evaluateBetaflightTune,
  calculateTwrMetrics,
  type DroneTwrInputs,
} from './logic';

describe('FPV Drone Flight Dynamics Logic', () => {
  it('calculates total max thrust', () => {
    expect(calculateTotalMaxThrust(4, 1950)).toBe(7800);
    expect(calculateTotalMaxThrust(0, 1950)).toBe(0);
  });

  it('calculates TWR ratio accurately', () => {
    expect(calculateTwr(7800, 680)).toBeCloseTo(11.47, 2);
  });

  it('calculates realistic exponential hover throttle', () => {
    const hover5in = calculateHoverThrottle(11.47);
    expect(hover5in).toBeGreaterThan(20);
    expect(hover5in).toBeLessThan(35);
  });

  it('calculates dynamic thrust from stick position', () => {
    expect(calculateCurrentThrust(7800, 0)).toBe(0);
    expect(calculateCurrentThrust(7800, 100)).toBe(7800);
    expect(calculateCurrentThrust(7800, 50)).toBeCloseTo(2239, -1);
  });

  it('calculates 0-100 km/h acceleration time', () => {
    const time5in = calculateZeroToHundred(11.47);
    expect(time5in).toBeGreaterThan(0.2);
    expect(time5in).toBeLessThan(0.4);
  });

  it('calculates recommended FPV camera angle', () => {
    const camAngle = calculateRecommendedCamAngle(11.47);
    expect(camAngle).toBeGreaterThan(30);
    expect(camAngle).toBeLessThanOrEqual(55);
  });

  it('calculates wind resistance rating', () => {
    const wind = calculateWindResistance(11.47);
    expect(wind).toBeGreaterThan(80);
    expect(wind).toBeLessThan(120);
  });

  it('calculates max pitch angle', () => {
    expect(calculateMaxPitchAngle(11.47)).toBeGreaterThan(80);
    expect(calculateMaxPitchAngle(1.0)).toBe(0);
  });

  it('evaluates flight agility tier', () => {
    expect(evaluateAgilityTier(1.5)).toBe('underpowered');
    expect(evaluateAgilityTier(3.0)).toBe('cinematic');
    expect(evaluateAgilityTier(6.5)).toBe('freestyle');
    expect(evaluateAgilityTier(10.0)).toBe('acro_pro');
    expect(evaluateAgilityTier(15.0)).toBe('racing_extreme');
  });

  it('evaluates Betaflight tune advice', () => {
    const tune5in = evaluateBetaflightTune(11.47, 680);
    expect(tune5in.tpaSetting).toContain('0.65');
    expect(tune5in.dynamicIdleSetting).toContain('5.5%');
  });

  it('computes full aggregate metrics on live inputs', () => {
    const inputs: DroneTwrInputs = {
      auwGrams: 680,
      motorCount: 4,
      thrustPerMotorGrams: 1950,
      propellerSizeInches: 5.1,
      propellerPitchInches: 4.3,
      bladeCount: 3,
      throttleStickPercent: 75,
    };
    const results = calculateTwrMetrics(inputs);
    expect(results.twrRatio).toBeCloseTo(11.47, 2);
    expect(results.currentThrustGrams).toBeGreaterThan(4000);
    expect(results.instantGForce).toBeGreaterThan(6);
    expect(results.agilityTier).toBe('acro_pro');
    expect(results.tuneAdvice.tpaSetting).toBeDefined();
  });
});
