import { calculateDroneMotorMetrics, type BladeCount, type DroneMotorInputs, type MotorCount } from './logic';
import { evaluateSetup } from './evaluator';
import { formatInputValue, parseInputValue, renderResults, updateInputUnitLabels } from './dom-views';
import { readStoredState, writeStoredState, type DisplayUnit } from './storage';
import type { DroneMotorPropellerUI } from './ui';

interface Preset {
  id: string;
  inputs: DroneMotorInputs;
}

const DEFAULT_INPUTS: DroneMotorInputs = {
  motorKv: 1950,
  batteryVoltage: 22.2,
  propDiameterInches: 5.1,
  propPitchInches: 4.3,
  bladeCount: 3,
  motorCount: 4,
  droneWeightGrams: 700,
  benchThrustGrams: 1900,
  benchVoltage: 22.2,
};

const PRESETS: Preset[] = [
  { id: 'tiny-cruiser', inputs: { motorKv: 3500, batteryVoltage: 11.1, propDiameterInches: 3.5, propPitchInches: 3, bladeCount: 3, motorCount: 4, droneWeightGrams: 280, benchThrustGrams: 550, benchVoltage: 11.1 } },
  { id: 'freestyle', inputs: DEFAULT_INPUTS },
  { id: 'long-range', inputs: { motorKv: 1500, batteryVoltage: 22.2, propDiameterInches: 7, propPitchInches: 3.5, bladeCount: 2, motorCount: 4, droneWeightGrams: 1200, benchThrustGrams: 1800, benchVoltage: 22.2 } },
  { id: 'cinelifter', inputs: { motorKv: 700, batteryVoltage: 22.2, propDiameterInches: 8, propPitchInches: 4, bladeCount: 3, motorCount: 8, droneWeightGrams: 4200, benchThrustGrams: 1600, benchVoltage: 22.2 } },
];

function getInput(root: HTMLElement, field: string): HTMLInputElement | null {
  return root.querySelector<HTMLInputElement>(`[data-field="${field}"]`);
}

function getNumber(root: HTMLElement, field: string, kind: 'mass' | 'length' | 'plain', unit: DisplayUnit): number {
  const element = getInput(root, field);
  if (!element || element.value.trim() === '') return 0;
  return kind === 'plain' ? Number(element.value) : parseInputValue(element.value, kind, unit);
}

function getChoice(root: HTMLElement, field: string, fallback: number): number {
  const selected = root.querySelector<HTMLElement>(`[data-choice="${field}"].is-selected`);
  return Number(selected?.dataset.value ?? fallback);
}

function readInputs(root: HTMLElement, unit: DisplayUnit): DroneMotorInputs {
  return {
    motorKv: getNumber(root, 'motorKv', 'plain', unit),
    batteryVoltage: getNumber(root, 'batteryVoltage', 'plain', unit),
    propDiameterInches: getNumber(root, 'propDiameterInches', 'length', unit),
    propPitchInches: getNumber(root, 'propPitchInches', 'length', unit),
    bladeCount: getChoice(root, 'bladeCount', 3) as BladeCount,
    motorCount: getChoice(root, 'motorCount', 4) as MotorCount,
    droneWeightGrams: getNumber(root, 'droneWeightGrams', 'mass', unit),
    benchThrustGrams: getOptionalNumber(root, 'benchThrustGrams', 'mass', unit),
    benchVoltage: getOptionalNumber(root, 'benchVoltage', 'plain', unit),
  };
}

function getOptionalNumber(root: HTMLElement, field: string, kind: 'mass' | 'plain', unit: DisplayUnit): number | undefined {
  const value = getNumber(root, field, kind, unit);
  return value > 0 ? value : undefined;
}

function setInput(root: HTMLElement, field: string, value: string): void {
  const element = getInput(root, field);
  if (element) element.value = value;
}

function setPhysicalInputs(root: HTMLElement, inputs: DroneMotorInputs, unit: DisplayUnit): void {
  setInput(root, 'motorKv', String(inputs.motorKv));
  setInput(root, 'batteryVoltage', String(inputs.batteryVoltage));
  setInput(root, 'propDiameterInches', formatInputValue(inputs.propDiameterInches, 'length', unit));
  setInput(root, 'propPitchInches', formatInputValue(inputs.propPitchInches, 'length', unit));
  setInput(root, 'droneWeightGrams', formatInputValue(inputs.droneWeightGrams, 'mass', unit));
  setInput(root, 'benchThrustGrams', inputs.benchThrustGrams ? formatInputValue(inputs.benchThrustGrams, 'mass', unit) : '');
  setInput(root, 'benchVoltage', inputs.benchVoltage ? String(inputs.benchVoltage) : '');
  selectChoice(root, 'bladeCount', inputs.bladeCount);
  selectChoice(root, 'motorCount', inputs.motorCount);
}

function selectChoice(root: HTMLElement, field: string, value: number): void {
  root.querySelectorAll<HTMLElement>(`[data-choice="${field}"]`).forEach((item) => {
    item.classList.toggle('is-selected', Number(item.dataset.value) === value);
    item.setAttribute('aria-pressed', String(Number(item.dataset.value) === value));
  });
}

function selectPreset(root: HTMLElement, id: string): void {
  root.querySelectorAll<HTMLElement>('[data-preset]').forEach((item) => {
    item.classList.toggle('is-selected', item.dataset.preset === id);
  });
}

function clearBenchData(root: HTMLElement, ui: DroneMotorPropellerUI): void {
  setInput(root, 'benchThrustGrams', '');
  setInput(root, 'benchVoltage', '');
  selectPreset(root, '');
  recalculate(root, ui, root.dataset.unit === 'imperial' ? 'imperial' : 'metric');
}

function updateUnitButtons(root: HTMLElement, unit: DisplayUnit): void {
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((item) => {
    item.classList.toggle('is-selected', item.dataset.unit === unit);
    item.setAttribute('aria-pressed', String(item.dataset.unit === unit));
  });
}

function recalculate(root: HTMLElement, ui: DroneMotorPropellerUI, unit: DisplayUnit): void {
  const inputs = readInputs(root, unit);
  if (inputs.motorKv <= 0 || inputs.batteryVoltage <= 0 || inputs.propDiameterInches <= 0 || inputs.propPitchInches <= 0 || inputs.droneWeightGrams <= 0) return;
  const results = calculateDroneMotorMetrics(inputs);
  const evaluation = evaluateSetup(results);
  renderResults({ root, results, labels: ui, unit }, evaluation.status);
  writeStoredState({ inputs, unit });
}

function changeUnit(root: HTMLElement, ui: DroneMotorPropellerUI, from: DisplayUnit, to: DisplayUnit): void {
  if (from === to) return;
  const inputs = readInputs(root, from);
  setPhysicalInputs(root, inputs, to);
  updateUnitButtons(root, to);
  updateInputUnitLabels(root, to);
  root.dataset.unit = to;
  recalculate(root, ui, to);
}

function restoreState(root: HTMLElement): DisplayUnit {
  const stored = readStoredState();
  const unit = stored.unit === 'imperial' ? 'imperial' : 'metric';
  setPhysicalInputs(root, stored.inputs ?? DEFAULT_INPUTS, unit);
  return unit;
}

function readUi(root: HTMLElement): DroneMotorPropellerUI {
  const element = root.querySelector<HTMLScriptElement>('[data-drone-motor-ui]');
  return JSON.parse(element?.textContent ?? '{}') as DroneMotorPropellerUI;
}

function bindEvents(root: HTMLElement, ui: DroneMotorPropellerUI): void {
  root.querySelectorAll<HTMLElement>('[data-preset]').forEach((item) => item.addEventListener('click', () => {
    const preset = PRESETS.find((entry) => entry.id === item.dataset.preset);
    if (!preset) return;
    const unit = root.dataset.unit === 'imperial' ? 'imperial' : 'metric';
    setPhysicalInputs(root, preset.inputs, unit);
    selectPreset(root, preset.id);
    recalculate(root, ui, unit);
  }));
  root.querySelectorAll<HTMLElement>('[data-choice]').forEach((item) => item.addEventListener('click', () => {
    selectChoice(root, item.dataset.choice ?? '', Number(item.dataset.value));
    selectPreset(root, '');
    recalculate(root, ui, root.dataset.unit === 'imperial' ? 'imperial' : 'metric');
  }));
  root.querySelectorAll<HTMLElement>('[data-unit]').forEach((item) => item.addEventListener('click', () => {
    const from = root.dataset.unit === 'imperial' ? 'imperial' : 'metric';
    const to = item.dataset.unit === 'imperial' ? 'imperial' : 'metric';
    changeUnit(root, ui, from, to);
  }));
  root.querySelectorAll<HTMLInputElement>('input[data-field]').forEach((item) => item.addEventListener('input', () => {
    selectPreset(root, '');
    recalculate(root, ui, root.dataset.unit === 'imperial' ? 'imperial' : 'metric');
  }));
  root.querySelector<HTMLElement>('[data-action="clear-bench"]')?.addEventListener('click', () => clearBenchData(root, ui));
}

export function initDroneMotorPropellerCalculator(root: HTMLElement): void {
  const ui = readUi(root);
  const unit = restoreState(root);
  root.dataset.unit = unit;
  updateUnitButtons(root, unit);
  updateInputUnitLabels(root, unit);
  bindEvents(root, ui);
  recalculate(root, ui, unit);
}
