import type { SessionConfig, LapRecord, SessionMetrics } from './logic';
import { computeLapRecords, calculateSessionMetrics, formatLapTime, formatDelta } from './logic';

export function exportSessionCsv(durationsMs: number[], config: SessionConfig): void {
  const laps = computeLapRecords(durationsMs, config.trackLengthM, config.batteryCapacityMah);
  if (laps.length === 0) return;
  const headers = ['Lap', 'Time_Ms', 'Formatted_Time', 'Delta_Best_Ms', 'Speed_Kmh', 'Battery_Used_Mah', 'Split_Time_Ms'];
  const rows = laps.map((l) => [
    l.lapIndex, l.durationMs.toFixed(1), formatLapTime(l.durationMs),
    l.deltaBestMs.toFixed(1), l.speedKmh, l.batteryUsedMah, l.splitTimeMs.toFixed(1),
  ]);
  const blob = new Blob([[headers.join(','), ...rows.map((r) => r.join(','))].join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `fpv-drone-laps-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function buildSummaryLines(laps: LapRecord[], metrics: SessionMetrics, trackLengthM: number): string[] {
  return [
    'FPV DRONE RACE SESSION SUMMARY',
    `Track: ${trackLengthM}m | Laps: ${metrics.completedLaps} | Total: ${formatLapTime(metrics.totalDurationMs)}`,
    `Fastest: ${metrics.fastestLapMs > 0 ? formatLapTime(metrics.fastestLapMs) : '--'} | Speed: ${metrics.averageSpeedKmh} km/h`,
    `Consistency: ${metrics.consistencyIndex}% (${metrics.consistencyRating.toUpperCase()})`,
    ...laps.map((l) => `Lap ${l.lapIndex}: ${formatLapTime(l.durationMs)} (Delta: ${formatDelta(l.deltaBestMs, l.isBest)})`),
  ];
}

export async function copySessionSummary(durationsMs: number[], config: SessionConfig): Promise<boolean> {
  const laps = computeLapRecords(durationsMs, config.trackLengthM, config.batteryCapacityMah);
  const metrics = calculateSessionMetrics(durationsMs, config.trackLengthM, config.batteryCapacityMah);
  const lines = buildSummaryLines(laps, metrics, config.trackLengthM);
  try {
    await navigator.clipboard.writeText(lines.join('\n'));
    return true;
  } catch {
    return false;
  }
}
