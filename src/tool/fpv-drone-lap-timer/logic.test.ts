import { describe, it, expect } from 'vitest';
import {
  calculateSpeed,
  estimateBatteryDrain,
  computeLapRecords,
  calculateSessionMetrics,
  formatLapTime,
  formatDelta,
  isDebounceLocked,
  PRESETS,
} from './logic';

describe('fpv-drone-lap-timer logic suite', () => {
  describe('calculateSpeed', () => {
    it('returns zero for invalid or non-positive inputs', () => {
      expect(calculateSpeed(0, 10000)).toEqual({ kmh: 0, mph: 0 });
      expect(calculateSpeed(250, 0)).toEqual({ kmh: 0, mph: 0 });
      expect(calculateSpeed(-250, 10000)).toEqual({ kmh: 0, mph: 0 });
      expect(calculateSpeed(250, -5000)).toEqual({ kmh: 0, mph: 0 });
    });

    it('calculates correct speed for typical 250m track in 15 seconds', () => {
      const speed = calculateSpeed(250, 15000);
      expect(speed.kmh).toBe(60);
      expect(speed.mph).toBe(37.3);
    });

    it('calculates high-speed sprint accurately', () => {
      const speed = calculateSpeed(400, 12000);
      expect(speed.kmh).toBe(120);
      expect(speed.mph).toBe(74.6);
    });
  });

  describe('estimateBatteryDrain', () => {
    it('returns zero for non-positive values', () => {
      expect(estimateBatteryDrain(0, 1300)).toBe(0);
      expect(estimateBatteryDrain(15000, 0)).toBe(0);
      expect(estimateBatteryDrain(-15000, 1300)).toBe(0);
    });

    it('estimates linear drain proportional to total usable flight capacity', () => {
      const drain = estimateBatteryDrain(15000, 1300);
      expect(drain).toBeGreaterThan(0);
      expect(drain).toBeLessThan(1300);
      const drainDoubleTime = estimateBatteryDrain(30000, 1300);
      expect(Math.abs(drainDoubleTime - drain * 2)).toBeLessThanOrEqual(1);
    });
  });

  describe('computeLapRecords', () => {
    it('returns empty array when no laps recorded', () => {
      expect(computeLapRecords([], 250, 1300)).toEqual([]);
    });

    it('identifies fastest lap and computes deltas', () => {
      const laps = [18500, 16200, 17100];
      const records = computeLapRecords(laps, 250, 1300);

      expect(records).toHaveLength(3);

      expect(records[0]!.lapIndex).toBe(1);
      expect(records[0]!.durationMs).toBe(18500);
      expect(records[0]!.splitTimeMs).toBe(18500);
      expect(records[0]!.isBest).toBe(false);
      expect(records[0]!.deltaBestMs).toBe(2300);

      expect(records[1]!.lapIndex).toBe(2);
      expect(records[1]!.durationMs).toBe(16200);
      expect(records[1]!.splitTimeMs).toBe(34700);
      expect(records[1]!.isBest).toBe(true);
      expect(records[1]!.deltaBestMs).toBe(0);

      expect(records[2]!.lapIndex).toBe(3);
      expect(records[2]!.durationMs).toBe(17100);
      expect(records[2]!.splitTimeMs).toBe(51800);
      expect(records[2]!.isBest).toBe(false);
      expect(records[2]!.deltaBestMs).toBe(900);
    });
  });

  describe('calculateSessionMetrics', () => {
    it('handles empty session correctly', () => {
      const stats = calculateSessionMetrics([], 250, 1300);
      expect(stats.completedLaps).toBe(0);
      expect(stats.totalDurationMs).toBe(0);
      expect(stats.consistencyIndex).toBe(100);
      expect(stats.consistencyRating).toBe('elite');
      expect(stats.batteryRemainingMah).toBe(1300);
    });

    it('computes metrics for single lap', () => {
      const stats = calculateSessionMetrics([16500], 250, 1300);
      expect(stats.completedLaps).toBe(1);
      expect(stats.fastestLapMs).toBe(16500);
      expect(stats.fastestLapIndex).toBe(1);
      expect(stats.averageLapMs).toBe(16500);
      expect(stats.standardDeviationMs).toBe(0);
      expect(stats.consistencyIndex).toBe(100);
    });

    it('computes high consistency for close lap times', () => {
      const stats = calculateSessionMetrics([15000, 15100, 15050], 250, 1300);
      expect(stats.consistencyIndex).toBeGreaterThanOrEqual(95);
      expect(stats.consistencyRating).toBe('elite');
      expect(stats.fastestLapMs).toBe(15000);
      expect(stats.fastestLapIndex).toBe(1);
    });

    it('computes lower consistency for erratic lap times', () => {
      const stats = calculateSessionMetrics([14000, 22000, 15000, 31000], 250, 1300);
      expect(stats.consistencyIndex).toBeLessThan(80);
      expect(stats.consistencyRating).toBe('novice');
    });
  });

  describe('formatLapTime', () => {
    it('formats millisecond timestamps into mm:ss.mmm', () => {
      expect(formatLapTime(0)).toBe('00:00.000');
      expect(formatLapTime(14320)).toBe('00:14.320');
      expect(formatLapTime(75450)).toBe('01:15.450');
      expect(formatLapTime(-500)).toBe('00:00.000');
      expect(formatLapTime(NaN)).toBe('00:00.000');
    });
  });

  describe('formatDelta', () => {
    it('formats delta times cleanly', () => {
      expect(formatDelta(0, true)).toBe('BEST');
      expect(formatDelta(0, false)).toBe('±0.000s');
      expect(formatDelta(450, false)).toBe('+0.450s');
      expect(formatDelta(-320, false)).toBe('-0.320s');
    });
  });

  describe('isDebounceLocked', () => {
    it('prevents accidental triggers before debounce interval', () => {
      expect(isDebounceLocked(0, 1000, 3000)).toBe(false);
      expect(isDebounceLocked(1000, 2500, 3000)).toBe(true);
      expect(isDebounceLocked(1000, 4001, 3000)).toBe(false);
    });
  });

  describe('PRESETS', () => {
    it('provides valid presets', () => {
      expect(PRESETS.multigp.trackLengthM).toBe(250);
      expect(PRESETS.whoop.trackLengthM).toBe(65);
      expect(PRESETS.sprint.trackLengthM).toBe(400);
      expect(PRESETS.multigp.debounceMs).toBeGreaterThan(0);
    });
  });
});
