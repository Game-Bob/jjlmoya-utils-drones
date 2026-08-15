import type { BatteryInputs, BatteryChemistry } from './logic';
import { calculateBatteryMetrics } from './logic';
import { evaluateSafetyPresentation } from './evaluator';
import { updateDOMMetrics, updateDOMSafety, renderBatterySVG, type DOMResultElements } from './dom-views';
import { loadSavedInputs, saveInputs } from './storage';
import type { DroneBatteryCRatingCalculatorUI } from './ui';

export interface PresetConfig {
  capacitymAh: number;
  claimedCRating: number;
  cellCount: number;
  chemistry: BatteryChemistry;
  internalResistanceMOm: number;
  motorCount: number;
  peakMotorCurrentA: number;
  auxCurrentA: number;
}

export const PRESETS: Record<string, PresetConfig> = {
  whoop: { capacitymAh: 300, claimedCRating: 80, cellCount: 1, chemistry: 'lihv', internalResistanceMOm: 15, motorCount: 4, peakMotorCurrentA: 4, auxCurrentA: 0.5 },
  freestyle5: { capacitymAh: 1300, claimedCRating: 100, cellCount: 6, chemistry: 'lipo', internalResistanceMOm: 4, motorCount: 4, peakMotorCurrentA: 35, auxCurrentA: 1.5 },
  cinewhoop: { capacitymAh: 850, claimedCRating: 95, cellCount: 4, chemistry: 'lipo', internalResistanceMOm: 6, motorCount: 4, peakMotorCurrentA: 20, auxCurrentA: 2.0 },
  longrange7: { capacitymAh: 3000, claimedCRating: 35, cellCount: 6, chemistry: 'liion', internalResistanceMOm: 12, motorCount: 4, peakMotorCurrentA: 22, auxCurrentA: 2.5 },
  racing5: { capacitymAh: 1400, claimedCRating: 150, cellCount: 6, chemistry: 'lipo', internalResistanceMOm: 2.5, motorCount: 4, peakMotorCurrentA: 55, auxCurrentA: 1.2 },
};

export class DroneBatteryCRatingCalculatorController {
  private container: HTMLElement;
  private ui: DroneBatteryCRatingCalculatorUI;
  private elements!: DOMResultElements;
  private inputs!: BatteryInputs;
  private activePreset: string | null = 'freestyle5';

  constructor(container: HTMLElement, ui: DroneBatteryCRatingCalculatorUI) {
    this.container = container;
    this.ui = ui;
    this.initElements();
    this.initInputs();
    this.bindEvents();
    this.recalculate();
  }

  private initElements(): void {
    this.elements = {
      claimedMaxCurrent: this.container.querySelector('[data-metric="claimedMaxCurrent"]')!,
      realisticCRating: this.container.querySelector('[data-metric="realisticCRating"]')!,
      realisticMaxCurrent: this.container.querySelector('[data-metric="realisticMaxCurrent"]')!,
      totalPeakDraw: this.container.querySelector('[data-metric="totalPeakDraw"]')!,
      voltageSag: this.container.querySelector('[data-metric="voltageSag"]')!,
      sagNominalVoltage: this.container.querySelector('[data-metric="sagNominalVoltage"]')!,
      flightTimeFullThrottle: this.container.querySelector('[data-metric="flightTimeFullThrottle"]')!,
      flightTimeHover: this.container.querySelector('[data-metric="flightTimeHover"]')!,
      burstRatingRequired: this.container.querySelector('[data-metric="burstRatingRequired"]')!,
      safetyBadge: this.container.querySelector('[data-metric="safetyBadge"]')!,
      statusTitle: this.container.querySelector('[data-metric="statusTitle"]')!,
      statusDesc: this.container.querySelector('[data-metric="statusDesc"]')!,
      svgContainer: this.container.querySelector('[data-element="svgContainer"]')!,
    };
  }

  private initInputs(): void {
    const saved = loadSavedInputs();
    this.inputs = Object.assign({}, PRESETS.freestyle5, saved);
    this.syncInputElements();
  }

  private parseVal(selector: string): number {
    const el = this.container.querySelector(selector) as HTMLInputElement;
    if (!el || !el.value) return 0;
    const cleanStr = el.value.replace(',', '.');
    const val = parseFloat(cleanStr);
    return Number.isFinite(val) ? val : 0;
  }

  private syncInputElements(): void {
    this.setInputValue('#input-capacity', String(this.inputs.capacitymAh));
    this.setInputValue('#range-capacity', String(this.inputs.capacitymAh));
    this.setInputValue('#input-claimed-c', String(this.inputs.claimedCRating));
    this.setInputValue('#range-claimed-c', String(this.inputs.claimedCRating));
    this.setInputValue('#input-ir', String(this.inputs.internalResistanceMOm));
    this.setInputValue('#range-ir', String(this.inputs.internalResistanceMOm));
    this.setInputValue('#input-motor-count', String(this.inputs.motorCount));
    this.setInputValue('#input-peak-current', String(this.inputs.peakMotorCurrentA));
    this.setInputValue('#range-peak-current', String(this.inputs.peakMotorCurrentA));
    this.setInputValue('#input-aux-current', String(this.inputs.auxCurrentA));

    this.updateCustomSelect('cell-count', String(this.inputs.cellCount));
    this.updateCustomSelect('chemistry', this.inputs.chemistry);
    this.updatePresetChips();
  }

  private setInputValue(selector: string, val: string): void {
    const el = this.container.querySelector(selector) as HTMLInputElement;
    if (el) el.value = val;
  }

  private updatePresetChips(): void {
    this.container.querySelectorAll('[data-preset]').forEach((btn) => {
      const key = btn.getAttribute('data-preset');
      btn.classList.toggle('active', key === this.activePreset);
    });
  }

  private updateCustomSelect(name: string, value: string): void {
    const wrapper = this.container.querySelector(`[data-custom-select="${name}"]`);
    if (!wrapper) return;
    const triggerText = wrapper.querySelector('.sc-select-trigger span');
    const options = wrapper.querySelectorAll('.sc-select-option');
    options.forEach((opt) => {
      const isSelected = opt.getAttribute('data-value') === value;
      opt.classList.toggle('active', isSelected);
      if (isSelected && triggerText) triggerText.textContent = opt.textContent;
    });
  }

  private bindEvents(): void {
    this.bindNumberAndRangeInputs();
    this.bindCustomSelects();
    this.bindPresets();
    document.addEventListener('click', () => this.closeAllSelects());
  }

  private bindNumberAndRangeInputs(): void {
    this.bindRangeSync('#input-capacity', '#range-capacity', (v) => { this.inputs.capacitymAh = v; });
    this.bindRangeSync('#input-claimed-c', '#range-claimed-c', (v) => { this.inputs.claimedCRating = v; });
    this.bindRangeSync('#input-ir', '#range-ir', (v) => { this.inputs.internalResistanceMOm = v; });
    this.bindRangeSync('#input-peak-current', '#range-peak-current', (v) => { this.inputs.peakMotorCurrentA = v; });

    const motorInput = this.container.querySelector('#input-motor-count');
    motorInput?.addEventListener('input', () => {
      this.inputs.motorCount = Math.max(1, parseInt((motorInput as HTMLInputElement).value, 10) || 1);
      this.onInputChanged();
    });

    const auxInput = this.container.querySelector('#input-aux-current');
    auxInput?.addEventListener('input', () => {
      this.inputs.auxCurrentA = this.parseVal('#input-aux-current');
      this.onInputChanged();
    });
  }

  private bindCustomSelects(): void {
    this.container.querySelectorAll('.sc-custom-select').forEach((wrapper) => {
      const trigger = wrapper.querySelector('.sc-select-trigger');
      trigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeAllSelects(wrapper);
        wrapper.classList.toggle('open');
      });

      wrapper.querySelectorAll('.sc-select-option').forEach((opt) => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          this.handleSelectOptionClick(wrapper, opt);
        });
      });
    });
  }

  private handleSelectOptionClick(wrapper: Element, opt: Element): void {
    const val = opt.getAttribute('data-value')!;
    const name = wrapper.getAttribute('data-custom-select')!;
    if (name === 'cell-count') this.inputs.cellCount = parseInt(val, 10);
    if (name === 'chemistry') this.inputs.chemistry = val as BatteryChemistry;
    this.updateCustomSelect(name, val);
    wrapper.classList.remove('open');
    this.onInputChanged();
  }

  private bindPresets(): void {
    this.container.querySelectorAll('[data-preset]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-preset')!;
        if (PRESETS[key]) {
          this.activePreset = key;
          this.inputs = { ...PRESETS[key] };
          this.syncInputElements();
          this.recalculate();
        }
      });
    });
  }

  private onInputChanged(): void {
    this.activePreset = null;
    this.updatePresetChips();
    this.recalculate();
  }

  private bindRangeSync(textSel: string, rangeSel: string, setter: (val: number) => void): void {
    const textEl = this.container.querySelector(textSel) as HTMLInputElement;
    const rangeEl = this.container.querySelector(rangeSel) as HTMLInputElement;

    textEl?.addEventListener('input', () => {
      const val = this.parseVal(textSel);
      if (rangeEl) rangeEl.value = String(val);
      setter(val);
      this.onInputChanged();
    });

    rangeEl?.addEventListener('input', () => {
      const val = parseFloat(rangeEl.value);
      if (textEl) textEl.value = String(val);
      setter(val);
      this.onInputChanged();
    });
  }

  private closeAllSelects(except?: Element): void {
    this.container.querySelectorAll('.sc-custom-select').forEach((w) => {
      if (w !== except) w.classList.remove('open');
    });
  }

  private recalculate(): void {
    const results = calculateBatteryMetrics(this.inputs);
    const safetyEval = evaluateSafetyPresentation(results.safetyStatus, this.ui);
    updateDOMMetrics(this.elements, results);
    updateDOMSafety(this.elements, safetyEval);
    if (this.elements.svgContainer) {
      this.elements.svgContainer.innerHTML = renderBatterySVG(this.inputs, results);
    }
    saveInputs(this.inputs);
  }
}
