import type { LapRecord, SessionMetrics } from './logic';
import { formatLapTime, formatDelta } from './logic';
import type { FpvDroneLapTimerUI } from './ui';

export interface TelemetrySceneProps {
  metrics: SessionMetrics;
  laps: LapRecord[];
  currentLapNumber: number;
  targetLaps: number;
  status: 'idle' | 'countdown' | 'running' | 'paused' | 'finished';
  ui: FpvDroneLapTimerUI;
}

function renderPaceBarsSvg(laps: LapRecord[]): string {
  const maxDur = laps.length > 0 ? Math.max(...laps.map((l) => l.durationMs)) : 1;
  return laps
    .map((lap, idx) => {
      const barHeight = Math.max(12, Math.round((lap.durationMs / maxDur) * 52));
      const y = 80 - barHeight;
      const x = 16 + idx * 26;
      const fillClass = lap.isBest ? 'fpv-lap-timer-bar-best' : 'fpv-lap-timer-bar-normal';
      return `<g class="fpv-lap-timer-bar-group" data-lap="${lap.lapIndex}">
        <rect x="${x}" y="${y}" width="18" height="${barHeight}" rx="3" class="${fillClass}" />
        <text x="${x + 9}" y="95" class="fpv-lap-timer-bar-label">${lap.lapIndex}</text>
      </g>`;
    })
    .join('');
}

function renderDroneRacerSvg(status: 'idle' | 'countdown' | 'running' | 'paused' | 'finished'): string {
  const isRacing = status === 'running';
  const motionTag = isRacing
    ? `<animateMotion
        path="M 160 25 L 230 25 A 65 65 0 0 1 230 155 L 90 155 A 65 65 0 0 1 90 25 Z"
        dur="6s"
        repeatCount="indefinite"
        rotate="auto"
      />`
    : '';
  const initialTransform = isRacing ? '' : 'transform="translate(160, 25)"';

  return `
    <g class="fpv-lap-timer-drone-racer" ${initialTransform} filter="url(#fpvGlow)">
      ${motionTag}
      <line x1="-6" y1="-6" x2="6" y2="6" class="fpv-lap-timer-drone-arm" />
      <line x1="-6" y1="6" x2="6" y2="-6" class="fpv-lap-timer-drone-arm" />
      <circle cx="-6" cy="-6" r="2" class="fpv-lap-timer-drone-motor" />
      <circle cx="6" cy="-6" r="2" class="fpv-lap-timer-drone-motor" />
      <circle cx="-6" cy="6" r="2" class="fpv-lap-timer-drone-motor" />
      <circle cx="6" cy="6" r="2" class="fpv-lap-timer-drone-motor" />
      <circle cx="-6" cy="-6" r="4.2" class="fpv-lap-timer-drone-rotor-blur" />
      <circle cx="6" cy="-6" r="4.2" class="fpv-lap-timer-drone-rotor-blur" />
      <circle cx="-6" cy="6" r="4.2" class="fpv-lap-timer-drone-rotor-blur" />
      <circle cx="6" cy="6" r="4.2" class="fpv-lap-timer-drone-rotor-blur" />
      <rect x="-4" y="-3.5" width="8" height="7" rx="2" class="fpv-lap-timer-drone-body" />
      <circle cx="4" cy="0" r="1.5" class="fpv-lap-timer-drone-cam" />
      <circle cx="-4" cy="0" r="1.5" class="fpv-lap-timer-drone-led" />
    </g>
  `;
}

function renderGatesSvg(status: 'idle' | 'countdown' | 'running' | 'paused' | 'finished'): string {
  return `
    <rect x="148" y="19" width="24" height="12" rx="3" fill="none" class="fpv-lap-timer-gate fpv-lap-timer-gate-sf" />
    <text x="160" y="11" class="fpv-lap-timer-gate-label">GATE 1 [S/F]</text>
    <circle cx="295" cy="90" r="5" class="fpv-lap-timer-gate fpv-lap-timer-gate-sector" />
    <text x="305" y="94" class="fpv-lap-timer-gate-label">G2</text>
    <circle cx="160" cy="155" r="5" class="fpv-lap-timer-gate fpv-lap-timer-gate-sector" />
    <text x="160" y="174" class="fpv-lap-timer-gate-label">G3</text>
    <circle cx="25" cy="90" r="5" class="fpv-lap-timer-gate fpv-lap-timer-gate-sector" />
    <text x="15" y="94" class="fpv-lap-timer-gate-label">G4</text>
    ${renderDroneRacerSvg(status)}
  `;
}

function renderRacetrackCenterHud(timeStr: string, fastestHeading: string, speedStr: string): string {
  return `
    <g class="fpv-lap-timer-drone-center">
      <text x="160" y="78" class="fpv-lap-timer-center-time">${timeStr}</text>
      <text x="160" y="96" class="fpv-lap-timer-center-sub">${fastestHeading}</text>
      <text x="160" y="116" class="fpv-lap-timer-center-speed">${speedStr}</text>
    </g>
  `;
}

function renderRacetrackSvg(
  metrics: SessionMetrics,
  targetLaps: number,
  status: 'idle' | 'countdown' | 'running' | 'paused' | 'finished',
  ui: FpvDroneLapTimerUI
): string {
  const progress = targetLaps > 0 ? Math.min(100, Math.round((metrics.completedLaps / targetLaps) * 100)) : 100;
  const offset = 640 - (640 * progress) / 100;
  const timeStr = metrics.fastestLapMs > 0 ? formatLapTime(metrics.fastestLapMs) : '00:00.000';
  const speedStr = metrics.averageSpeedKmh > 0 ? `${metrics.averageSpeedKmh} ${ui.speedUnitKmh}` : '--';

  return `
    <div class="fpv-lap-timer-racetrack-box">
      <svg class="fpv-lap-timer-racetrack-svg" viewBox="0 0 320 180" role="img" aria-label="Racetrack layout">
        <defs>
          <linearGradient id="fpvTrackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="var(--fpv-cyan)" /><stop offset="100%" stop-color="var(--fpv-emerald)" />
          </linearGradient>
          <filter id="fpvGlow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
        </defs>
        <rect x="25" y="25" width="270" height="130" rx="65" fill="none" class="fpv-lap-timer-track-bg" />
        <rect x="25" y="25" width="270" height="130" rx="65" fill="none" stroke="url(#fpvTrackGrad)" class="fpv-lap-timer-track-active" stroke-dasharray="640" stroke-dashoffset="${offset}" />
        ${renderGatesSvg(status)}
        ${renderRacetrackCenterHud(timeStr, ui.fastestLapHeading, speedStr)}
      </svg>
    </div>
  `;
}

function renderPaceChart(metrics: SessionMetrics, laps: LapRecord[], ui: FpvDroneLapTimerUI): string {
  const badgeStr = metrics.fastestLapMs > 0 ? `${ui.fastestLapBadge}: ${formatLapTime(metrics.fastestLapMs)}` : '--';
  const chartWidth = Math.max(140, 16 + laps.length * 26 + 16);
  const axisWidth = Math.max(132, 16 + laps.length * 26 + 8);
  const chartInner = laps.length > 0
    ? `<svg class="fpv-lap-timer-bars-svg" viewBox="0 0 ${chartWidth} 104" role="img" aria-label="Lap times bar comparison">
        <line x1="8" y1="80" x2="${axisWidth}" y2="80" class="fpv-lap-timer-chart-axis" />
        ${renderPaceBarsSvg(laps)}
      </svg>`
    : `<div class="fpv-lap-timer-empty-notice">${ui.noLapsRecordedNotice}</div>`;

  return `
    <div class="fpv-lap-timer-pace-box">
      <div class="fpv-lap-timer-pace-header">
        <h4>${ui.lapHistoryHeading}</h4>
        <span class="fpv-lap-timer-fastest-pill">${badgeStr}</span>
      </div>
      <div class="fpv-lap-timer-pace-chart">${chartInner}</div>
    </div>
  `;
}

export function renderTelemetryScene(props: TelemetrySceneProps): string {
  const { metrics, laps, targetLaps, ui } = props;
  const ratingLabel = getConsistencyRatingLabel(metrics.consistencyRating, ui);

  return `
    <div class="fpv-lap-timer-telemetry-deck" aria-label="FPV Race Telemetry Scene">
      <div class="fpv-lap-timer-telemetry-status-row">
        <div class="fpv-lap-timer-chip fpv-lap-timer-consistency-chip fpv-lap-timer-rating-${metrics.consistencyRating}">
          <span>${ui.consistencyIndexHeading}: <strong>${metrics.consistencyIndex}%</strong> (${ratingLabel})</span>
        </div>
      </div>
      <div class="fpv-lap-timer-telemetry-grid">
        ${renderRacetrackSvg(metrics, targetLaps, props.status, ui)}
        ${renderPaceChart(metrics, laps, ui)}
      </div>
    </div>
  `;
}

function getDeltaClass(deltaMs: number, isBest: boolean): string {
  if (isBest) return 'fpv-lap-timer-delta-best';
  if (deltaMs < 1000) return 'fpv-lap-timer-delta-good';
  return 'fpv-lap-timer-delta-slow';
}

function renderLapRow(lap: LapRecord, ui: FpvDroneLapTimerUI): string {
  const bestClass = lap.isBest ? 'fpv-lap-timer-row-best' : '';
  const deltaFormatted = formatDelta(lap.deltaBestMs, lap.isBest);
  const deltaClass = getDeltaClass(lap.deltaBestMs, lap.isBest);
  const fastestBadge = lap.isBest ? `<span class="fpv-lap-timer-best-mini">${ui.fastestLapBadge}</span>` : '';

  return `
    <tr class="fpv-lap-timer-tr ${bestClass}">
      <td class="fpv-lap-timer-td-lap">
        <span class="fpv-lap-timer-lap-tag">${ui.lapNumberPrefix} ${lap.lapIndex}</span>
        ${fastestBadge}
      </td>
      <td class="fpv-lap-timer-td-time font-mono">${formatLapTime(lap.durationMs)}</td>
      <td class="fpv-lap-timer-td-split"><span class="fpv-lap-timer-delta-pill ${deltaClass}">${deltaFormatted}</span></td>
      <td class="fpv-lap-timer-td-speed font-mono">${lap.speedKmh} ${ui.speedUnitKmh} <small class="fpv-lap-timer-subtle">(${lap.speedMph} ${ui.speedUnitMph})</small></td>
      <td class="fpv-lap-timer-td-battery font-mono">${lap.batteryUsedMah} ${ui.batteryUsedUnit}</td>
      <td class="fpv-lap-timer-td-total font-mono fpv-lap-timer-subtle">${formatLapTime(lap.splitTimeMs)}</td>
    </tr>
  `;
}

export function renderLapTable(laps: LapRecord[], ui: FpvDroneLapTimerUI): string {
  if (laps.length === 0) {
    return `<div class="fpv-lap-timer-table-empty">${ui.noLapsRecordedNotice}</div>`;
  }

  const rows = laps.map((lap) => renderLapRow(lap, ui)).join('');
  return `
    <div class="fpv-lap-timer-table-wrap">
      <table class="fpv-lap-timer-table">
        <thead>
          <tr>
            <th>${ui.lapColumnHeader}</th>
            <th>${ui.timeColumnHeader}</th>
            <th>${ui.splitColumnHeader}</th>
            <th>${ui.speedColumnHeader}</th>
            <th>${ui.batteryColumnHeader}</th>
            <th>Total Split</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function getConsistencyRatingLabel(rating: 'elite' | 'pro' | 'club' | 'novice', ui: FpvDroneLapTimerUI): string {
  if (rating === 'elite') return ui.consistencyRatingElite;
  if (rating === 'pro') return ui.consistencyRatingPro;
  if (rating === 'club') return ui.consistencyRatingClub;
  return ui.consistencyRatingNovice;
}
