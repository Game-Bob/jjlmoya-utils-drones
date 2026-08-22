import type { DroneMotorResults } from './logic';
import type { DisplayUnit } from './storage';
import type { DroneMotorPropellerUI } from './ui';

interface RenderContext {
  root: HTMLElement;
  results: DroneMotorResults;
  labels: DroneMotorPropellerUI;
  unit: DisplayUnit;
}

function formatNumber(value: number, digits = 0): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);
}

function formatMass(grams: number, unit: DisplayUnit): string {
  return unit === 'metric' ? `${formatNumber(grams)} g` : `${formatNumber(grams / 28.3495, 1)} oz`;
}

function formatSpeed(kmh: number, unit: DisplayUnit): string {
  return unit === 'metric' ? `${formatNumber(kmh)} km/h` : `${formatNumber(kmh / 1.60934)} mph`;
}

function setText(root: HTMLElement, key: string, value: string): void {
  const element = root.querySelector<HTMLElement>(`[data-output="${key}"]`);
  if (element) element.textContent = value;
}

function getStatusText(status: string, labels: DroneMotorPropellerUI): string {
  if (status === 'underpowered') return labels.underpoweredStatus;
  if (status === 'workable') return labels.workableStatus;
  return labels.headroomStatus;
}

function getStatusAdvice(status: string, labels: DroneMotorPropellerUI): string {
  if (status === 'underpowered') return labels.underpoweredAdvice;
  if (status === 'workable') return labels.workableAdvice;
  return labels.headroomAdvice;
}

export function renderResults(context: RenderContext, status: string): void {
  const { root, results, labels, unit } = context;
  setText(root, 'loaded-rpm', `${formatNumber(results.loadedRpm)} rpm`);
  setText(root, 'pitch-speed', formatSpeed(results.pitchSpeedKmh, unit));
  setText(root, 'thrust-per-motor', formatMass(results.thrustPerMotorGrams, unit));
  setText(root, 'total-thrust', formatMass(results.totalThrustGrams, unit));
  setText(root, 'total-power', `${formatNumber(results.totalPowerWatts)} W`);
  setText(root, 'total-current', `${formatNumber(results.totalCurrentAmps, 1)} A`);
  setText(root, 'thrust-margin', `${formatNumber(results.thrustMarginPercent)}%`);
  setText(root, 'hover-throttle', `${formatNumber(results.hoverThrottlePercent)}%`);
  setText(root, 'status', getStatusText(status, labels));
  setText(root, 'status-advice', getStatusAdvice(status, labels));
  const sourceLabel = results.thrustSource === 'bench'
    ? `${labels.benchBasedLabel} ${labels.sourceNote}`
    : `${labels.estimatedLabel} ${labels.modelSourceNote}`;
  setText(root, 'source-note', sourceLabel);
  root.dataset.status = status;
  root.style.setProperty('--lift-ratio', String(Math.min(results.totalThrustGrams / (results.totalThrustGrams + 1), 1)));
  root.style.setProperty('--rotor-speed', `${Math.max(80, 90000 / Math.max(results.loadedRpm, 1))}ms`);
}

export function updateInputUnitLabels(root: HTMLElement, unit: DisplayUnit): void {
  const massUnit = unit === 'metric' ? 'g' : 'oz';
  const lengthUnit = unit === 'metric' ? 'cm' : 'in';
  root.querySelectorAll<HTMLElement>('[data-unit-label="mass"]').forEach((item) => { item.textContent = massUnit; });
  root.querySelectorAll<HTMLElement>('[data-unit-label="length"]').forEach((item) => { item.textContent = lengthUnit; });
}

export function formatInputValue(value: number, kind: 'mass' | 'length', unit: DisplayUnit): string {
  if (kind === 'mass') return unit === 'metric' ? String(Math.round(value)) : String(Math.round(value / 28.3495 * 10) / 10);
  return unit === 'metric' ? String(Math.round(value * 2.54 * 10) / 10) : String(value);
}

export function parseInputValue(value: string, kind: 'mass' | 'length', unit: DisplayUnit): number {
  const parsed = Number(value);
  if (kind === 'mass') return unit === 'metric' ? parsed : parsed * 28.3495;
  return unit === 'metric' ? parsed / 2.54 : parsed;
}
