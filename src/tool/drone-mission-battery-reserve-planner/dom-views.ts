import type { MissionInputs, MissionResults } from './logic';
import { convertDistance } from './logic';
import type { DroneMissionBatteryReservePlannerUI } from './ui';

function getWindArrowRotation(dir: MissionInputs['windDirection']): number {
  if (dir === 'headwind') return 180;
  if (dir === 'tailwind') return 0;
  return 90;
}

function renderWindBanner(inputs: MissionInputs, speedUnit: string, chartUI?: DroneMissionBatteryReservePlannerUI['chart']): string {
  const rot = getWindArrowRotation(inputs.windDirection);
  const titleText = chartUI ? chartUI.modelTitle : 'AERODYNAMIC POWER & WIND MODEL';
  const windText = chartUI ? chartUI.windLabel : 'Wind';

  return `<g transform="translate(40, 30)">
      <rect x="0" y="0" width="520" height="42" rx="8" fill="var(--n-surface-card, #151d30)" stroke="var(--n-border, #2e3d5c)" stroke-dasharray="3,3" />
      <text x="16" y="26" font-size="11" font-weight="700" fill="var(--n-text-primary, #f8fafc)" letter-spacing="0.05em">${titleText}</text>
      <g transform="translate(350, 26)">
        <text x="0" y="0" font-size="10" fill="var(--n-text-secondary, #94a3b8)">${windText}: <tspan font-weight="700" fill="var(--n-text-primary, #f8fafc)">${inputs.windSpeedKmh} ${speedUnit}</tspan> (${inputs.windDirection})</text>
      </g>
      <g transform="rotate(${rot} 300 35)"><path d="M295 35 L300 27 L305 35 L301 35 L301 43 L299 43 L299 35 Z" fill="var(--n-brand, #3b82f6)" /></g>
    </g>`;
}

function renderDiagramNodes(c?: DroneMissionBatteryReservePlannerUI['chart']): string {
  const home = c ? c.homeNode : 'HOME';
  const target = c ? c.targetNode : 'TARGET';
  const land = c ? c.landNode : 'LAND';
  return `<circle cx="40" cy="30" r="18" fill="#151d30" stroke="#3b82f6" stroke-width="3" />
    <text x="40" y="34" font-size="10" font-weight="800" text-anchor="middle" fill="#ffffff">${home}</text>
    <circle cx="260" cy="30" r="18" fill="#151d30" stroke="#06b6d4" stroke-width="3" />
    <text x="260" y="34" font-size="10" font-weight="800" text-anchor="middle" fill="#ffffff">${target}</text>
    <circle cx="480" cy="30" r="18" fill="#151d30" stroke="#10b981" stroke-width="3" />
    <text x="480" y="34" font-size="10" font-weight="800" text-anchor="middle" fill="#ffffff">${land}</text>`;
}

function renderFlightDiagram(
  inputs: MissionInputs,
  results: MissionResults,
  distUnit: string,
  c?: DroneMissionBatteryReservePlannerUI['chart']
): string {
  const safeRad = convertDistance(results.maxSafeRadiusKm, inputs.unitSystem).toFixed(1);
  const curDist = convertDistance(inputs.oneWayDistanceKm, inputs.unitSystem).toFixed(1);
  const launchPad = c ? c.launchPadLabel : 'Launch Pad';
  const surveyHover = c ? c.surveyHoverLabel : 'Survey Hover';
  const safeRadius = c ? c.safeRadiusLabel : 'Safe Radius';

  return `<g transform="translate(40, 95)">
      <line x1="40" y1="30" x2="480" y2="30" stroke="var(--n-border, #334155)" stroke-width="3" stroke-dasharray="6,4" />
      <line x1="40" y1="30" x2="260" y2="30" stroke="url(#outboundGrad)" stroke-width="5" stroke-linecap="round" />
      <line x1="260" y1="30" x2="480" y2="30" stroke="url(#returnGrad)" stroke-width="5" stroke-linecap="round" />
      ${renderDiagramNodes(c)}
      <text x="40" y="65" font-size="11" font-weight="600" text-anchor="middle" fill="var(--n-text-primary, #f8fafc)">${launchPad}</text>
      <text x="40" y="78" font-size="10" text-anchor="middle" fill="var(--n-text-secondary, #94a3b8)">0.0 ${distUnit}</text>
      <text x="260" y="65" font-size="11" font-weight="600" text-anchor="middle" fill="var(--n-text-primary, #f8fafc)">${surveyHover}</text>
      <text x="260" y="78" font-size="10" text-anchor="middle" fill="#06b6d4">${inputs.targetHoverTimeMin} min @ ${curDist} ${distUnit}</text>
      <text x="480" y="65" font-size="11" font-weight="600" text-anchor="middle" fill="var(--n-text-primary, #f8fafc)">${safeRadius}</text>
      <text x="480" y="78" font-size="10" text-anchor="middle" fill="#10b981">${safeRad} ${distUnit}</text>
    </g>`;
}

function renderEnergyLegend(r: MissionResults, c?: DroneMissionBatteryReservePlannerUI['chart']): string {
  const o = c ? c.outboundSegment : 'Outbound';
  const t = c ? c.targetSegment : 'Hover';
  const ret = c ? c.returnSegment : 'Return';
  const res = c ? c.reserveSegment : 'Reserve';

  return `<g transform="translate(0, 48)">
      <rect x="0" y="0" width="8" height="8" rx="2" fill="#3b82f6" /><text x="12" y="8" font-size="9" font-weight="600" fill="var(--n-text-primary, #f8fafc)">${o} (${r.outboundEnergyWh.toFixed(1)}Wh)</text>
      <rect x="130" y="0" width="8" height="8" rx="2" fill="#06b6d4" /><text x="142" y="8" font-size="9" font-weight="600" fill="var(--n-text-primary, #f8fafc)">${t} (${r.targetHoverEnergyWh.toFixed(1)}Wh)</text>
      <rect x="240" y="0" width="8" height="8" rx="2" fill="#8b5cf6" /><text x="252" y="8" font-size="9" font-weight="600" fill="var(--n-text-primary, #f8fafc)">${ret} (${r.returnEnergyWh.toFixed(1)}Wh)</text>
      <rect x="360" y="0" width="8" height="8" rx="2" fill="#f59e0b" /><text x="372" y="8" font-size="9" font-weight="600" fill="var(--n-text-primary, #f8fafc)">${res} (${r.reserveEnergyWh.toFixed(1)}Wh)</text>
    </g>`;
}

function renderEnergyAllocation(results: MissionResults, c?: DroneMissionBatteryReservePlannerUI['chart']): string {
  const tot = Math.max(1, results.totalEnergyWh);
  const outW = Math.max(2, ((results.outboundEnergyWh / tot)) * 520);
  const hovW = Math.max(2, ((results.targetHoverEnergyWh / tot)) * 520);
  const retW = Math.max(2, ((results.returnEnergyWh / tot)) * 520);
  const resW = Math.max(2, ((results.reserveEnergyWh / tot)) * 520);
  const title = c ? c.batteryProfileTitle : 'NON-LINEAR ENERGY ALLOCATION PROFILE';

  return `<g transform="translate(40, 205)">
      <text x="0" y="0" font-size="11" font-weight="700" fill="var(--n-text-secondary, #94a3b8)" letter-spacing="0.04em">${title}</text>
      <rect x="0" y="10" width="520" height="24" rx="8" fill="#151d30" stroke="var(--n-border, #1e293b)" />
      <rect x="2" y="12" width="${Math.min(516, outW)}" height="20" rx="4" fill="url(#outboundGrad)" />
      <rect x="${2 + outW}" y="12" width="${Math.min(516, hovW)}" height="20" rx="4" fill="url(#hoverGrad)" />
      <rect x="${2 + outW + hovW}" y="12" width="${Math.min(516, retW)}" height="20" rx="4" fill="url(#returnGrad)" />
      <rect x="${518 - resW}" y="12" width="${Math.min(516, resW)}" height="20" rx="4" fill="url(#reserveGrad)" />
      ${renderEnergyLegend(results, c)}
    </g>`;
}

export function renderTelemetrySvg(inputs: MissionInputs, results: MissionResults, uiContent?: DroneMissionBatteryReservePlannerUI): string {
  const distUnit = inputs.unitSystem === 'imperial' ? 'mi' : 'km';
  const speedUnit = inputs.unitSystem === 'imperial' ? 'mph' : 'km/h';
  const c = uiContent?.chart;

  return `<svg viewBox="0 0 600 290" class="mission-telemetry-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="outboundGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#2563eb" /></linearGradient>
        <linearGradient id="hoverGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#06b6d4" /><stop offset="100%" stop-color="#0891b2" /></linearGradient>
        <linearGradient id="returnGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8b5cf6" /><stop offset="100%" stop-color="#7c3aed" /></linearGradient>
        <linearGradient id="reserveGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#f59e0b" /><stop offset="100%" stop-color="#d97706" /></linearGradient>
      </defs>
      <rect x="10" y="10" width="580" height="270" rx="16" fill="var(--n-surface-subtle, #0a0f1d)" stroke="var(--n-border, #1e293b)" stroke-width="1.5" />
      ${renderWindBanner(inputs, speedUnit, c)}
      ${renderFlightDiagram(inputs, results, distUnit, c)}
      ${renderEnergyAllocation(results, c)}
    </svg>`;
}
