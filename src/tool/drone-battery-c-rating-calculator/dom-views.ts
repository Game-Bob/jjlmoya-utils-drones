import type { BatteryCalculationResults, BatteryInputs, SafetyStatus } from './logic';
import type { SafetyEvaluation } from './evaluator';

export interface DOMResultElements {
  claimedMaxCurrent: HTMLElement;
  realisticCRating: HTMLElement;
  realisticMaxCurrent: HTMLElement;
  totalPeakDraw: HTMLElement;
  voltageSag: HTMLElement;
  sagNominalVoltage: HTMLElement;
  flightTimeFullThrottle: HTMLElement;
  flightTimeHover: HTMLElement;
  burstRatingRequired: HTMLElement;
  safetyBadge: HTMLElement;
  statusTitle: HTMLElement;
  statusDesc: HTMLElement;
  svgContainer: HTMLElement;
}

export function formatTimeSeconds(seconds: number): string {
  if (!seconds || seconds <= 0 || !Number.isFinite(seconds)) return '0s';
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs}s`;
}

function getSafetyColor(status: SafetyStatus): string {
  if (status === 'danger') return '#ef4444';
  if (status === 'warning') return '#f59e0b';
  return '#10b981';
}

function renderCellsSVG(cellCount: number, statusColor: string, sagNominalVoltageV: number): string {
  const cellWidth = Math.min(42, Math.floor(260 / cellCount));
  return Array.from({ length: cellCount }, (_, i) => {
    const x = 35 + i * (cellWidth + 5);
    const cellSagV = (sagNominalVoltageV / cellCount).toFixed(2);
    return `<g>
      <rect x="${x}" y="55" width="${cellWidth}" height="90" rx="6" fill="var(--n-svg-inner, #1e293b)" stroke="${statusColor}" stroke-width="2"/>
      <rect x="${x + 3}" y="61" width="${cellWidth - 6}" height="35" rx="3" fill="${statusColor}" fill-opacity="0.2"/>
      <circle cx="${x + cellWidth / 2}" cy="78" r="4" fill="${statusColor}"/>
      <text x="${x + cellWidth / 2}" y="112" fill="var(--n-text, #f8fafc)" font-size="11" font-weight="800" text-anchor="middle">S${i + 1}</text>
      <text x="${x + cellWidth / 2}" y="132" fill="var(--n-text-muted, #94a3b8)" font-size="10" font-weight="600" text-anchor="middle">${cellSagV}V</text>
    </g>`;
  }).join('');
}

function renderGaugeHUD(results: BatteryCalculationResults, statusColor: string): string {
  const maxCapA = Math.max(1, results.realisticMaxCurrentA);
  const ratio = Math.min(100, Math.round((results.totalPeakDrawA / maxCapA) * 100));
  const strokeDash = 251;
  const strokeOffset = strokeDash - (strokeDash * ratio) / 100;
  return `<g transform="translate(390, 20)">
    <rect x="0" y="0" width="150" height="160" rx="14" fill="var(--n-svg-card, #0f172a)" stroke="var(--n-svg-stroke, #334155)" stroke-width="2" />
    <text x="75" y="24" fill="var(--n-text-muted, #94a3b8)" font-size="10" font-weight="700" text-anchor="middle" letter-spacing="0.5">CURRENT STRESS</text>
    <circle cx="75" cy="85" r="40" fill="none" stroke="var(--n-svg-inner, #1e293b)" stroke-width="9" />
    <circle cx="75" cy="85" r="40" fill="none" stroke="${statusColor}" stroke-width="9" stroke-dasharray="${strokeDash}" stroke-dashoffset="${strokeOffset}" stroke-linecap="round" transform="rotate(-90 75 85)" />
    <text x="75" y="88" fill="var(--n-text, #f8fafc)" font-size="16" font-weight="900" text-anchor="middle">${ratio}%</text>
    <text x="75" y="102" fill="var(--n-text-muted, #94a3b8)" font-size="9" text-anchor="middle">PEAK LOAD</text>
    <rect x="15" y="125" width="120" height="24" rx="12" fill="${statusColor}" fill-opacity="0.2" stroke="${statusColor}" stroke-width="1"/>
    <text x="75" y="141" fill="${statusColor}" font-size="10" font-weight="800" text-anchor="middle" letter-spacing="0.5">${results.safetyStatus.toUpperCase()}</text>
  </g>`;
}

export function renderBatterySVG(inputs: BatteryInputs, results: BatteryCalculationResults): string {
  const statusColor = getSafetyColor(results.safetyStatus);
  const cellCount = Math.max(1, Math.min(8, inputs.cellCount));
  const cellsHtml = renderCellsSVG(cellCount, statusColor, results.sagNominalVoltageV);
  const gaugeHtml = renderGaugeHUD(results, statusColor);

  return `<svg viewBox="0 0 560 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path d="M 310 100 Q 340 70 370 100" stroke="#ef4444" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M 310 110 Q 340 140 370 110" stroke="var(--n-text, #000000)" stroke-width="5" fill="none" stroke-linecap="round"/>
    <rect x="365" y="95" width="22" height="20" rx="4" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
    <rect x="20" y="30" width="310" height="140" rx="14" fill="var(--n-svg-card, #0f172a)" stroke="var(--n-svg-stroke, #334155)" stroke-width="2"/>
    <rect x="20" y="30" width="310" height="140" rx="14" fill="none" stroke="${statusColor}" stroke-width="2" filter="url(#glowEffect)" opacity="0.4"/>
    <text x="35" y="48" fill="var(--n-primary, #0284c7)" font-size="12" font-weight="800" letter-spacing="1">${inputs.cellCount}S ${inputs.chemistry.toUpperCase()} PACK (${inputs.capacitymAh} mAh)</text>
    <g>${cellsHtml}</g>
    ${gaugeHtml}
    <text x="35" y="192" fill="${statusColor}" font-size="11" font-weight="700">Real Discharge: ${results.realisticMaxCurrentA.toFixed(1)}A (${results.realisticCRating}C)</text>
    <text x="330" y="192" fill="var(--n-text-muted, #94a3b8)" font-size="11" font-weight="600" text-anchor="end">Peak Draw: ${results.totalPeakDrawA.toFixed(1)}A</text>
  </svg>`;
}

function updatePrimaryMetrics(elements: DOMResultElements, results: BatteryCalculationResults): void {
  if (elements.claimedMaxCurrent) elements.claimedMaxCurrent.textContent = `${results.claimedMaxCurrentA.toFixed(1)} A`;
  if (elements.realisticCRating) elements.realisticCRating.textContent = `${results.realisticCRating} C`;
  if (elements.realisticMaxCurrent) elements.realisticMaxCurrent.textContent = `${results.realisticMaxCurrentA.toFixed(1)} A`;
  if (elements.totalPeakDraw) elements.totalPeakDraw.textContent = `${results.totalPeakDrawA.toFixed(1)} A`;
  if (elements.voltageSag) elements.voltageSag.textContent = `-${results.voltageSagV.toFixed(2)} V`;
}

function updateSecondaryMetrics(elements: DOMResultElements, results: BatteryCalculationResults): void {
  if (elements.sagNominalVoltage) elements.sagNominalVoltage.textContent = `${results.sagNominalVoltageV.toFixed(1)} V`;
  if (elements.flightTimeFullThrottle) elements.flightTimeFullThrottle.textContent = formatTimeSeconds(results.flightTimeFullThrottleSec);
  if (elements.flightTimeHover) elements.flightTimeHover.textContent = formatTimeSeconds(results.flightTimeHoverSec);
  if (elements.burstRatingRequired) elements.burstRatingRequired.textContent = `${results.burstRatingRequired.toFixed(0)} C`;
}

export function updateDOMMetrics(elements: DOMResultElements, results: BatteryCalculationResults): void {
  updatePrimaryMetrics(elements, results);
  updateSecondaryMetrics(elements, results);
}

export function updateDOMSafety(elements: DOMResultElements, evalData: SafetyEvaluation): void {
  if (elements.safetyBadge) {
    elements.safetyBadge.className = `sc-safety-badge ${evalData.badgeClass}`;
    elements.safetyBadge.textContent = evalData.title;
  }
  if (elements.statusTitle) elements.statusTitle.textContent = evalData.title;
  if (elements.statusDesc) elements.statusDesc.textContent = evalData.description;
}
