export interface LapRecord {
  lapIndex: number;
  durationMs: number;
  splitTimeMs: number;
  speedKmh: number;
  speedMph: number;
  batteryUsedMah: number;
  deltaBestMs: number;
  isBest: boolean;
}

export interface SessionMetrics {
  totalDurationMs: number;
  completedLaps: number;
  fastestLapMs: number;
  fastestLapIndex: number;
  averageLapMs: number;
  standardDeviationMs: number;
  consistencyIndex: number;
  consistencyRating: 'elite' | 'pro' | 'club' | 'novice';
  totalBatteryUsedMah: number;
  batteryRemainingMah: number;
  averageSpeedKmh: number;
  averageSpeedMph: number;
}

export interface SessionConfig {
  trackLengthM: number;
  targetLaps: number;
  batteryCapacityMah: number;
  debounceMs: number;
  soundEnabled: boolean;
}

export const DEFAULT_CONFIG: SessionConfig = {
  trackLengthM: 250,
  targetLaps: 3,
  batteryCapacityMah: 1300,
  debounceMs: 3000,
  soundEnabled: true,
};

export const PRESETS: Record<'multigp' | 'whoop' | 'sprint', SessionConfig> = {
  multigp: {
    trackLengthM: 250,
    targetLaps: 3,
    batteryCapacityMah: 1300,
    debounceMs: 3000,
    soundEnabled: true,
  },
  whoop: {
    trackLengthM: 65,
    targetLaps: 5,
    batteryCapacityMah: 300,
    debounceMs: 2000,
    soundEnabled: true,
  },
  sprint: {
    trackLengthM: 400,
    targetLaps: 2,
    batteryCapacityMah: 1550,
    debounceMs: 4000,
    soundEnabled: true,
  },
};

export function calculateSpeed(trackLengthM: number, durationMs: number): { kmh: number; mph: number } {
  if (trackLengthM <= 0 || durationMs <= 0) {
    return { kmh: 0, mph: 0 };
  }
  const metersPerSecond = trackLengthM / (durationMs / 1000);
  const kmh = metersPerSecond * 3.6;
  const mph = kmh * 0.621371;
  return {
    kmh: Math.round(kmh * 10) / 10,
    mph: Math.round(mph * 10) / 10,
  };
}

export function estimateBatteryDrain(
  durationMs: number,
  batteryCapacityMah: number,
  usableCapacityRatio = 0.8,
  assumedFlightTimeMin = 3.5
): number {
  if (durationMs <= 0 || batteryCapacityMah <= 0 || assumedFlightTimeMin <= 0) {
    return 0;
  }
  const totalUsableMah = batteryCapacityMah * usableCapacityRatio;
  const totalAvailableMs = assumedFlightTimeMin * 60 * 1000;
  const estimatedDrain = (durationMs / totalAvailableMs) * totalUsableMah;
  return Math.round(estimatedDrain);
}

export function computeLapRecords(
  lapDurationsMs: number[],
  trackLengthM: number,
  batteryCapacityMah: number
): LapRecord[] {
  if (lapDurationsMs.length === 0) {
    return [];
  }

  const validDurations = lapDurationsMs.map((d) => Math.max(0, d));
  const minDuration = Math.min(...validDurations);
  let cumulativeSplitMs = 0;

  return validDurations.map((durationMs, idx) => {
    cumulativeSplitMs += durationMs;
    const isBest = durationMs === minDuration && durationMs > 0;
    const deltaBestMs = durationMs - minDuration;
    const speed = calculateSpeed(trackLengthM, durationMs);
    const batteryUsedMah = estimateBatteryDrain(durationMs, batteryCapacityMah);

    return {
      lapIndex: idx + 1,
      durationMs,
      splitTimeMs: cumulativeSplitMs,
      speedKmh: speed.kmh,
      speedMph: speed.mph,
      batteryUsedMah,
      deltaBestMs,
      isBest,
    };
  });
}

function getEmptySessionMetrics(batteryCapacityMah: number): SessionMetrics {
  return {
    totalDurationMs: 0,
    completedLaps: 0,
    fastestLapMs: 0,
    fastestLapIndex: 0,
    averageLapMs: 0,
    standardDeviationMs: 0,
    consistencyIndex: 100,
    consistencyRating: 'elite',
    totalBatteryUsedMah: 0,
    batteryRemainingMah: batteryCapacityMah,
    averageSpeedKmh: 0,
    averageSpeedMph: 0,
  };
}

function calculateConsistency(durations: number[], avgMs: number) {
  const count = durations.length;
  const variance = durations.reduce((sum, d) => sum + Math.pow(d - avgMs, 2), 0) / count;
  const stdDev = Math.round(Math.sqrt(variance));
  const rawScore = count > 1 && avgMs > 0 ? (1 - stdDev / avgMs) * 100 : 100;
  const index = Math.max(0, Math.min(100, Math.round(rawScore)));
  let rating: 'elite' | 'pro' | 'club' | 'novice' = 'novice';
  if (index >= 95) {
    rating = 'elite';
  } else if (index >= 88) {
    rating = 'pro';
  } else if (index >= 78) {
    rating = 'club';
  }
  return { index, rating, stdDev };
}

export function calculateSessionMetrics(
  lapDurationsMs: number[],
  trackLengthM: number,
  batteryCapacityMah: number
): SessionMetrics {
  const count = lapDurationsMs.length;
  if (count === 0) return getEmptySessionMetrics(batteryCapacityMah);

  const valid = lapDurationsMs.map((d) => Math.max(0, d));
  const totalDurationMs = valid.reduce((sum, d) => sum + d, 0);
  const fastestLapMs = Math.min(...valid);
  const averageLapMs = Math.round(totalDurationMs / count);
  const { index, rating, stdDev } = calculateConsistency(valid, averageLapMs);
  const totalBatteryUsedMah = estimateBatteryDrain(totalDurationMs, batteryCapacityMah);
  const avgSpeed = calculateSpeed(trackLengthM, averageLapMs);

  return {
    totalDurationMs,
    completedLaps: count,
    fastestLapMs,
    fastestLapIndex: valid.indexOf(fastestLapMs) + 1,
    averageLapMs,
    standardDeviationMs: stdDev,
    consistencyIndex: index,
    consistencyRating: rating,
    totalBatteryUsedMah,
    batteryRemainingMah: Math.max(0, batteryCapacityMah - totalBatteryUsedMah),
    averageSpeedKmh: avgSpeed.kmh,
    averageSpeedMph: avgSpeed.mph,
  };
}

export function formatLapTime(ms: number): string {
  if (!Number.isFinite(ms) || ms < 0) {
    return '00:00.000';
  }
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor(ms % 1000);

  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  const mmm = String(milliseconds).padStart(3, '0');

  return `${mm}:${ss}.${mmm}`;
}

export function formatDelta(deltaMs: number, isBest = false): string {
  if (isBest) {
    return 'BEST';
  }
  if (!Number.isFinite(deltaMs) || deltaMs === 0) {
    return '±0.000s';
  }
  const sign = deltaMs > 0 ? '+' : '-';
  const seconds = (Math.abs(deltaMs) / 1000).toFixed(3);
  return `${sign}${seconds}s`;
}

export function isDebounceLocked(lastRecordedTimestampMs: number, currentTimestampMs: number, debounceThresholdMs: number): boolean {
  if (lastRecordedTimestampMs <= 0 || currentTimestampMs <= 0) {
    return false;
  }
  const diff = Math.abs(currentTimestampMs - lastRecordedTimestampMs);
  return diff < debounceThresholdMs;
}
