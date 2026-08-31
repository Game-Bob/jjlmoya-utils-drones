import { calculateFpvDroneSpeed, type FpvDroneSpeedInputs } from './logic';
import { formatMassInput, parseMassInput, renderResults, updateUnitLabels, type DisplayUnit } from './dom-views';
import type { FpvDroneSpeedUI } from './ui';

interface Preset {
  id: string;
  inputs: FpvDroneSpeedInputs;
}

const PRESETS: Preset[] = [
  { id: 'racing', inputs: { motorKv: 2450, batteryVoltage: 16.8, propellerPitchInches: 4.3, efficiencyPercent: 84, aircraftMassGrams: 620 } },
  { id: 'freestyle', inputs: { motorKv: 1950, batteryVoltage: 22.2, propellerPitchInches: 4.3, efficiencyPercent: 82, aircraftMassGrams: 700 } },
  { id: 'cruiser', inputs: { motorKv: 1500, batteryVoltage: 22.2, propellerPitchInches: 3.5, efficiencyPercent: 78, aircraftMassGrams: 1200 } },
];

const DEFAULT_INPUTS = PRESETS[1]!.inputs;

function input(root: HTMLElement, field: string): HTMLInputElement | null {
  return root.querySelector<HTMLInputElement>(`[data-field="${field}"]`);
}

function setInput(root: HTMLElement, field: string, value: string): void {
  const element = input(root, field);
  if (element) element.value = value;
}

function readInputs(root: HTMLElement, unit: DisplayUnit): FpvDroneSpeedInputs {
  const read = (field: string): number => Number(input(root, field)?.value ?? 0);
  return {
    motorKv: read('motorKv'),
    batteryVoltage: read('batteryVoltage'),
    propellerPitchInches: read('propellerPitchInches'),
    efficiencyPercent: read('efficiencyPercent'),
    aircraftMassGrams: parseMassInput(input(root, 'aircraftMassGrams')?.value ?? '', unit),
  };
}

function setInputs(root: HTMLElement, values: FpvDroneSpeedInputs, unit: DisplayUnit): void {
  setInput(root, 'motorKv', String(values.motorKv));
  setInput(root, 'batteryVoltage', String(values.batteryVoltage));
  setInput(root, 'propellerPitchInches', String(values.propellerPitchInches));
  setInput(root, 'efficiencyPercent', String(values.efficiencyPercent));
  setInput(root, 'aircraftMassGrams', formatMassInput(values.aircraftMassGrams, unit));
}

function selectPreset(root: HTMLElement, id: string): void {
  root.querySelectorAll<HTMLElement>('[data-preset]').forEach((element) => {
    element.classList.toggle('is-selected', element.dataset.preset === id);
  });
}

function selectUnit(root: HTMLElement, unit: DisplayUnit): void {
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((element) => {
    const active = element.dataset.unit === unit;
    element.classList.toggle('is-selected', active);
    element.setAttribute('aria-pressed', String(active));
  });
}

function recalculate(root: HTMLElement, ui: FpvDroneSpeedUI, unit: DisplayUnit): void {
  const results = calculateFpvDroneSpeed(readInputs(root, unit));
  renderResults({ root, results, ui, unit });
}

function changeUnit(root: HTMLElement, ui: FpvDroneSpeedUI, from: DisplayUnit, to: DisplayUnit): void {
  if (from === to) return;
  const values = readInputs(root, from);
  setInputs(root, values, to);
  root.dataset.unit = to;
  selectUnit(root, to);
  updateUnitLabels(root, to, ui);
  recalculate(root, ui, to);
}

function readUi(root: HTMLElement): FpvDroneSpeedUI {
  const element = root.querySelector<HTMLScriptElement>('[data-fpv-speed-ui]');
  return JSON.parse(element?.textContent ?? '{}') as FpvDroneSpeedUI;
}

export function initFpvDroneSpeedCalculator(root: HTMLElement): void {
  const ui = readUi(root);
  let unit: DisplayUnit = 'metric';
  setInputs(root, DEFAULT_INPUTS, unit);
  updateUnitLabels(root, unit, ui);
  selectUnit(root, unit);
  root.dataset.unit = unit;

  root.querySelectorAll<HTMLElement>('[data-preset]').forEach((element) => element.addEventListener('click', () => {
    const preset = PRESETS.find((item) => item.id === element.dataset.preset);
    if (!preset) return;
    setInputs(root, preset.inputs, unit);
    selectPreset(root, preset.id);
    recalculate(root, ui, unit);
  }));
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((element) => element.addEventListener('click', () => {
    const next = element.dataset.unit === 'imperial' ? 'imperial' : 'metric';
    changeUnit(root, ui, unit, next);
    unit = next;
  }));
  root.querySelectorAll<HTMLInputElement>('input[data-field]').forEach((element) => element.addEventListener('input', () => {
    selectPreset(root, '');
    recalculate(root, ui, unit);
  }));
  recalculate(root, ui, unit);
}
