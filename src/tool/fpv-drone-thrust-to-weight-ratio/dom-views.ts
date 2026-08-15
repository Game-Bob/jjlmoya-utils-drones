import type { DroneTwrInputs, DroneTwrResults, AgilityTier } from './logic';
import type { AgilityEvaluation } from './evaluator';
import type { FpvDroneThrustToWeightRatioUI } from './ui';

export interface DOMResultElements {
  twrRatio: HTMLElement;
  hoverThrottle: HTMLElement;
  currentThrust: HTMLElement;
  instantGForce: HTMLElement;
  zeroToHundred: HTMLElement;
  recommendedCamAngle: HTMLElement;
  windResistance: HTMLElement;
  totalMaxThrust: HTMLElement;
  maxPitchAngle: HTMLElement;
  tpaSetting?: HTMLElement;
  dynamicIdleSetting?: HTMLElement;
  propwashRisk?: HTMLElement;
  agilityBadge: HTMLElement;
  statusTitle: HTMLElement;
  statusDesc: HTMLElement;
  svgContainer: HTMLElement;
  stickPercentBadge?: HTMLElement;
}

export function getTierColor(tier: AgilityTier): string {
  if (tier === 'underpowered') return '#ef4444';
  if (tier === 'cinematic') return '#0284c7';
  if (tier === 'freestyle') return '#10b981';
  if (tier === 'acro_pro') return '#8b5cf6';
  return '#f59e0b';
}

function renderDroneVectors(stickPercent: number, tierColor: string, camAngle: number): string {
  const vHeight = Math.max(10, (stickPercent / 100) * 60);
  const opacity = Math.min(1, Math.max(0.25, stickPercent / 100));
  const tiltAngle = (camAngle - 20) * 0.4;
  return `<g transform="translate(130, 115) rotate(${tiltAngle})">
    <polygon points="0,-18 55,${-18 - camAngle * 0.6} 55,${-18 + camAngle * 0.6}" fill="var(--n-primary, #38bdf8)" fill-opacity="0.08" stroke="var(--n-primary, #38bdf8)" stroke-dasharray="2,2" stroke-width="1"/>
    <line x1="-80" y1="0" x2="80" y2="0" stroke="var(--n-svg-stroke, #334155)" stroke-width="4.5" stroke-linecap="round"/>
    <line x1="-35" y1="0" x2="0" y2="-18" stroke="var(--n-primary, #38bdf8)" stroke-width="3"/>
    <circle cx="0" cy="-18" r="8" fill="var(--n-primary, #38bdf8)" fill-opacity="0.35" stroke="var(--n-primary, #38bdf8)" stroke-width="2"/>
    <rect x="-24" y="-8" width="48" height="16" rx="4" fill="var(--n-svg-card, #0f172a)" stroke="var(--n-svg-stroke, #334155)" stroke-width="2"/>
    <circle cx="0" cy="0" r="4" fill="${tierColor}"/>
    
    <g transform="translate(-80, 0)">
      <ellipse cx="0" cy="-3" rx="20" ry="4" fill="${tierColor}" fill-opacity="0.2" stroke="${tierColor}" stroke-width="1"/>
      <rect x="-10" y="-4" width="20" height="8" rx="2" fill="var(--n-svg-inner, #1e293b)" stroke="${tierColor}" stroke-width="1.5"/>
      <line x1="0" y1="-4" x2="0" y2="${-4 - vHeight}" stroke="${tierColor}" stroke-width="3.5" stroke-linecap="round" opacity="${opacity}"/>
      <polygon points="-5,${-4 - vHeight + 5} 5,${-4 - vHeight + 5} 0,${-4 - vHeight}" fill="${tierColor}" opacity="${opacity}"/>
    </g>
    
    <g transform="translate(80, 0)">
      <ellipse cx="0" cy="-3" rx="20" ry="4" fill="${tierColor}" fill-opacity="0.2" stroke="${tierColor}" stroke-width="1"/>
      <rect x="-10" y="-4" width="20" height="8" rx="2" fill="var(--n-svg-inner, #1e293b)" stroke="${tierColor}" stroke-width="1.5"/>
      <line x1="0" y1="-4" x2="0" y2="${-4 - vHeight}" stroke="${tierColor}" stroke-width="3.5" stroke-linecap="round" opacity="${opacity}"/>
      <polygon points="-5,${-4 - vHeight + 5} 5,${-4 - vHeight + 5} 0,${-4 - vHeight}" fill="${tierColor}" opacity="${opacity}"/>
    </g>
  </g>`;
}

function renderDroneStage(inputs: DroneTwrInputs, results: DroneTwrResults, ui: FpvDroneThrustToWeightRatioUI): string {
  const tierColor = getTierColor(results.agilityTier);
  const vectorsHtml = renderDroneVectors(inputs.throttleStickPercent, tierColor, results.recommendedCamAngleDeg);
  return `<g transform="translate(15, 15)">
    <rect x="0" y="0" width="250" height="180" rx="14" fill="var(--n-svg-card, #0f172a)" stroke="var(--n-svg-stroke, #334155)" stroke-width="2" />
    <text x="15" y="24" fill="var(--n-text-muted, #94a3b8)" font-size="10" font-weight="700" letter-spacing="0.5">${ui.hudVectorPowerLabel.toUpperCase()}</text>
    <text x="235" y="24" fill="${tierColor}" font-size="11" font-weight="800" text-anchor="end">${results.instantGForce.toFixed(2)}G</text>
    ${vectorsHtml}
    <text x="125" y="152" fill="var(--n-text, #f8fafc)" font-size="15" font-weight="900" text-anchor="middle">${results.currentThrustGrams.toLocaleString()} g</text>
    <text x="125" y="168" fill="var(--n-text-muted, #94a3b8)" font-size="9" font-weight="600" text-anchor="middle">STICK @ ${inputs.throttleStickPercent}% | CAM ${results.recommendedCamAngleDeg}°</text>
  </g>`;
}

function renderCurvePoints(results: DroneTwrResults, inputs: DroneTwrInputs): string {
  const hoverX = 25 + (results.hoverThrottlePercent / 100) * 190;
  const hoverY = 145 - Math.pow(results.hoverThrottlePercent / 100, 1.8) * 105;
  const stickX = 25 + (inputs.throttleStickPercent / 100) * 190;
  const stickY = 145 - Math.pow(inputs.throttleStickPercent / 100, 1.8) * 105;
  return `<g>
    <rect x="${25 + 0.25 * 190}" y="40" width="${0.35 * 190}" height="105" fill="var(--n-primary, #38bdf8)" fill-opacity="0.06"/>
    <rect x="${25 + 0.70 * 190}" y="40" width="${0.30 * 190}" height="105" fill="#f59e0b" fill-opacity="0.08"/>
    <line x1="${hoverX}" y1="40" x2="${hoverX}" y2="145" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.7"/>
    <circle cx="${hoverX}" cy="${hoverY}" r="4.5" fill="#38bdf8" stroke="#fff" stroke-width="1.5"/>
    <circle cx="${stickX}" cy="${stickY}" r="6" fill="#f59e0b" stroke="#fff" stroke-width="2"/>
    <circle cx="${stickX}" cy="${stickY}" r="11" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.4"/>
  </g>`;
}

function renderCurveStage(inputs: DroneTwrInputs, results: DroneTwrResults, ui: FpvDroneThrustToWeightRatioUI): string {
  const pointsHtml = renderCurvePoints(results, inputs);
  return `<g transform="translate(280, 15)">
    <rect x="0" y="0" width="265" height="180" rx="14" fill="var(--n-svg-card, #0f172a)" stroke="var(--n-svg-stroke, #334155)" stroke-width="2" />
    <text x="15" y="24" fill="var(--n-text-muted, #94a3b8)" font-size="10" font-weight="700" letter-spacing="0.5">${ui.hudThrustCurveTitle.toUpperCase()}</text>
    <path d="M 25 145 L 215 145" stroke="var(--n-svg-stroke, #334155)" stroke-width="1.5" />
    <path d="M 25 40 L 25 145" stroke="var(--n-svg-stroke, #334155)" stroke-width="1.5" />
    <path d="M 25 145 Q 120 135 215 40" fill="none" stroke="var(--n-primary, #38bdf8)" stroke-width="3.5" stroke-linecap="round" />
    ${pointsHtml}
    <text x="25" y="165" fill="var(--n-text-muted, #94a3b8)" font-size="8" font-weight="700">0% IDLE</text>
    <text x="120" y="165" fill="#38bdf8" font-size="8" font-weight="700" text-anchor="middle">HOVER ${results.hoverThrottlePercent}%</text>
    <text x="215" y="165" fill="#f59e0b" font-size="8" font-weight="700" text-anchor="end">PUNCH ${results.twrRatio.toFixed(1)}:1</text>
  </g>`;
}

export function renderTwrSVG(inputs: DroneTwrInputs, results: DroneTwrResults, ui: FpvDroneThrustToWeightRatioUI): string {
  const droneSvg = renderDroneStage(inputs, results, ui);
  const curveSvg = renderCurveStage(inputs, results, ui);
  return `<svg viewBox="0 0 560 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    ${droneSvg}
    ${curveSvg}
  </svg>`;
}

function updateCoreTelemetry(elements: DOMResultElements, results: DroneTwrResults): void {
  if (elements.twrRatio) elements.twrRatio.textContent = `${results.twrRatio.toFixed(2)} : 1`;
  if (elements.hoverThrottle) elements.hoverThrottle.textContent = `${results.hoverThrottlePercent.toFixed(1)} %`;
  if (elements.currentThrust) elements.currentThrust.textContent = `${results.currentThrustGrams.toLocaleString()} g`;
  if (elements.instantGForce) elements.instantGForce.textContent = `${results.instantGForce.toFixed(2)} G`;
}

function updateFlightDynamics(elements: DOMResultElements, results: DroneTwrResults): void {
  if (elements.zeroToHundred) elements.zeroToHundred.textContent = `${results.zeroToHundredTimeSec.toFixed(2)} s`;
  if (elements.recommendedCamAngle) elements.recommendedCamAngle.textContent = `${results.recommendedCamAngleDeg}°`;
  if (elements.windResistance) elements.windResistance.textContent = `${results.windResistanceKmh} km/h`;
  if (elements.totalMaxThrust) elements.totalMaxThrust.textContent = `${results.totalMaxThrustGrams.toLocaleString()} g`;
  if (elements.maxPitchAngle) elements.maxPitchAngle.textContent = `${results.maxPitchAngleDeg}°`;
  if (elements.stickPercentBadge) elements.stickPercentBadge.textContent = `${results.currentThrottlePercent}%`;
}

function updateTuningMetrics(elements: DOMResultElements, results: DroneTwrResults): void {
  if (elements.tpaSetting) elements.tpaSetting.textContent = results.tuneAdvice.tpaSetting;
  if (elements.dynamicIdleSetting) elements.dynamicIdleSetting.textContent = results.tuneAdvice.dynamicIdleSetting;
  if (elements.propwashRisk) elements.propwashRisk.textContent = results.tuneAdvice.propwashRisk;
}

export function updateDOMMetrics(elements: DOMResultElements, results: DroneTwrResults): void {
  updateCoreTelemetry(elements, results);
  updateFlightDynamics(elements, results);
  updateTuningMetrics(elements, results);
}

export function updateDOMSafety(elements: DOMResultElements, evalData: AgilityEvaluation): void {
  if (elements.agilityBadge) {
    elements.agilityBadge.className = `sc-safety-badge ${evalData.badgeClass}`;
    elements.agilityBadge.textContent = evalData.title;
  }
  if (elements.statusTitle) elements.statusTitle.textContent = evalData.title;
  if (elements.statusDesc) elements.statusDesc.textContent = evalData.description;
}
