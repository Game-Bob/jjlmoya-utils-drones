import { describe, it, expect } from 'vitest';
import {
  clampValue,
  computeEffectiveSpeeds,
  calculateWindPowerPenalty,
  calculateEnergyMetrics,
  determineMissionStatus,
  calculateMissionReserve,
  convertDistance,
  convertSpeed,
  type MissionInputs,
} from './logic';

describe('Drone Mission Battery Reserve Planner Logic Suite', () => {
  it('clamps values correctly within bounds', () => {
    expect(clampValue(50, 0, 100)).toBe(50);
    expect(clampValue(-10, 0, 100)).toBe(0);
    expect(clampValue(150, 0, 100)).toBe(100);
  });

  it('computes effective speeds for headwind, tailwind and crosswind', () => {
    const head = computeEffectiveSpeeds(50, 15, 'headwind');
    expect(head.outbound).toBe(35);
    expect(head.returnLeg).toBe(62.75);

    const tail = computeEffectiveSpeeds(50, 15, 'tailwind');
    expect(tail.outbound).toBe(62.75);
    expect(tail.returnLeg).toBe(35);

    const cross = computeEffectiveSpeeds(50, 15, 'crosswind');
    expect(cross.outbound).toBeGreaterThan(0);
    expect(cross.returnLeg).toBeGreaterThan(0);
  });

  it('calculates wind power penalty increasing outbound power during headwind', () => {
    const penalty = calculateWindPowerPenalty(400, 50, 15, 'headwind');
    expect(penalty.outboundPower).toBeGreaterThan(400);
    expect(penalty.returnPower).toBeLessThan(400);
  });

  it('calculates energy metrics and voltage sag loss correctly', () => {
    const inputs: MissionInputs = {
      unitSystem: 'metric',
      batteryCapacityMah: 10000,
      voltageNominal: 22.2,
      averageCurrentAmps: 20,
      cruiseSpeedKmh: 45,
      oneWayDistanceKm: 10,
      targetHoverTimeMin: 5,
      windSpeedKmh: 10,
      windDirection: 'headwind',
      reservePolicyPercent: 20,
    };

    const energy = calculateEnergyMetrics(inputs);
    expect(energy.basePowerDrawWatts).toBe(444);
    expect(energy.voltageSagWhLoss).toBeGreaterThan(0);
    expect(energy.totalEnergyWh).toBeLessThan(222);
  });

  it('calculates mission reserve including target hover time and wind power difference', () => {
    const inputs: MissionInputs = {
      unitSystem: 'metric',
      batteryCapacityMah: 10000,
      voltageNominal: 22.2,
      averageCurrentAmps: 20,
      cruiseSpeedKmh: 45,
      oneWayDistanceKm: 5,
      targetHoverTimeMin: 5,
      windSpeedKmh: 12,
      windDirection: 'headwind',
      reservePolicyPercent: 20,
    };

    const result = calculateMissionReserve(inputs);
    expect(result.targetHoverTimeMinutes).toBe(5);
    expect(result.targetHoverEnergyWh).toBeGreaterThan(0);
    expect(result.outboundPowerWatts).toBeGreaterThan(result.basePowerDrawWatts);
  });

  it('determines status correctly', () => {
    expect(determineMissionStatus(50, 40, 200)).toBe('optimal');
    expect(determineMissionStatus(30, 40, 200)).toBe('tight');
    expect(determineMissionStatus(15, 40, 200)).toBe('critical');
    expect(determineMissionStatus(-5, 40, 200)).toBe('exceeded');
  });

  it('converts distance and speed between metric and imperial', () => {
    expect(convertDistance(10, 'metric')).toBe(10);
    expect(convertDistance(10, 'imperial')).toBeCloseTo(6.21371, 3);
    expect(convertSpeed(100, 'metric')).toBe(100);
    expect(convertSpeed(100, 'imperial')).toBeCloseTo(62.1371, 3);
  });
});
