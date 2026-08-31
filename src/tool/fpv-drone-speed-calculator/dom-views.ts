import type { FpvDroneSpeedResults } from './logic';
import type { FpvDroneSpeedUI } from './ui';

export type DisplayUnit = 'metric' | 'imperial';

interface RenderContext {
  root: HTMLElement;
  results: FpvDroneSpeedResults;
  ui: FpvDroneSpeedUI;
  unit: DisplayUnit;
}

function number(value: number, digits = 0): string {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: digits }).format(value);
}

function speed(value: number, unit: DisplayUnit): string {
  return `${number(unit === 'metric' ? value : value / 1.60934)} ${unit === 'metric' ? 'km/h' : 'mph'}`;
}

function mass(value: number, unit: DisplayUnit): string {
  return `${number(unit === 'metric' ? value : value / 28.3495, unit === 'metric' ? 0 : 1)} ${unit === 'metric' ? 'g' : 'oz'}`;
}

function setText(root: HTMLElement, key: string, value: string): void {
  root.querySelectorAll<HTMLElement>(`[data-output="${key}"]`).forEach((target) => {
    target.textContent = value;
  });
}

function diagnosisText(results: FpvDroneSpeedResults, ui: FpvDroneSpeedUI): [string, string] {
  if (results.diagnosis === 'overspeed') return [ui.diagnosisOverspeed, ui.diagnosisOverspeedAdvice];
  if (results.diagnosis === 'high-slip') return [ui.diagnosisHighSlip, ui.diagnosisHighSlipAdvice];
  if (results.diagnosis === 'heavy-load') return [ui.diagnosisHeavyLoad, ui.diagnosisHeavyLoadAdvice];
  return [ui.diagnosisPlanning, ui.diagnosisPlanningAdvice];
}

export function renderResults({ root, results, ui, unit }: RenderContext): void {
  const [diagnosis, advice] = diagnosisText(results, ui);
  setText(root, 'estimated-speed', speed(results.estimatedSpeedKmh, unit));
  setText(root, 'pitch-speed', speed(results.pitchSpeedKmh, unit));
  setText(root, 'loaded-rpm', `${number(results.loadedRpm)} rpm`);
  setText(root, 'no-load-rpm', `${number(results.noLoadRpm)} rpm`);
  setText(root, 'slip', `${number(results.slipPercent, 1)}%`);
  setText(root, 'load-effect', `${number(results.loadPenaltyPercent, 1)}%`);
  setText(root, 'speed-gap', speed(Math.max(0, results.pitchSpeedKmh - results.estimatedSpeedKmh), unit));
  setText(root, 'speed-axis-start', speed(0, unit));
  setText(root, 'speed-axis-end', speed(300, unit));
  setText(root, 'diagnosis', diagnosis);
  setText(root, 'diagnosis-advice', advice);
  results.sensitivity.forEach((point) => {
    setText(root, `${point.label}-pitch`, `${number(point.pitchInches, 1)} in`);
    setText(root, `${point.label}-speed`, speed(point.speedKmh, unit));
    const bar = root.querySelector<HTMLElement>(`[data-bar="${point.label}"]`);
    if (bar) bar.style.setProperty('--bar-width', `${Math.min(100, Math.max(4, point.speedKmh / Math.max(results.sensitivity[2]?.speedKmh ?? 1, 1) * 100))}%`);
  });
  root.dataset.diagnosis = results.diagnosis;
  const speedPosition = Math.min(92, Math.max(8, results.estimatedSpeedKmh / 300 * 84 + 8));
  const pitchPosition = Math.min(92, Math.max(8, results.pitchSpeedKmh / 300 * 84 + 8));
  root.style.setProperty('--speed-position', `${speedPosition}%`);
  root.style.setProperty('--pitch-position', `${pitchPosition}%`);
}

export function updateUnitLabels(root: HTMLElement, unit: DisplayUnit, ui: FpvDroneSpeedUI): void {
  root.querySelectorAll<HTMLElement>('[data-unit-label="mass"]').forEach((element) => { element.textContent = unit === 'metric' ? 'g' : 'oz'; });
  root.querySelectorAll<HTMLElement>('[data-unit-label="speed"]').forEach((element) => { element.textContent = unit === 'metric' ? ui.speedUnit : 'mph'; });
}

export function formatMassInput(grams: number, unit: DisplayUnit): string {
  return unit === 'metric' ? String(Math.round(grams)) : String(Math.round(grams / 28.3495 * 10) / 10);
}

export function parseMassInput(value: string, unit: DisplayUnit): number {
  const parsed = Number(value);
  return unit === 'metric' ? parsed : parsed * 28.3495;
}

export function formatMassLabel(grams: number, unit: DisplayUnit): string {
  return mass(grams, unit);
}
