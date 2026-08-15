import type { DroneTwrInputs } from './logic';
import { calculateTwrMetrics } from './logic';
import { evaluateAgilityPresentation } from './evaluator';
import { updateDOMMetrics, updateDOMSafety, renderTwrSVG, type DOMResultElements } from './dom-views';
import { loadSavedInputs, saveInputs } from './storage';
import type { FpvDroneThrustToWeightRatioUI } from './ui';

export interface PresetConfig {
  auwGrams: number;
  motorCount: number;
  thrustPerMotorGrams: number;
  propellerSizeInches: number;
  propellerPitchInches: number;
  bladeCount: number;
  throttleStickPercent: number;
}

export const PRESETS: Record<string, PresetConfig> = {
  whoop1s: { auwGrams: 32, motorCount: 4, thrustPerMotorGrams: 38, propellerSizeInches: 1.6, propellerPitchInches: 1.5, bladeCount: 4, throttleStickPercent: 50 },
  freestyle35: { auwGrams: 250, motorCount: 4, thrustPerMotorGrams: 750, propellerSizeInches: 3.5, propellerPitchInches: 2.8, bladeCount: 3, throttleStickPercent: 65 },
  freestyle5: { auwGrams: 680, motorCount: 4, thrustPerMotorGrams: 1950, propellerSizeInches: 5.1, propellerPitchInches: 4.3, bladeCount: 3, throttleStickPercent: 70 },
  longrange7: { auwGrams: 1150, motorCount: 4, thrustPerMotorGrams: 2400, propellerSizeInches: 7.0, propellerPitchInches: 4.0, bladeCount: 2, throttleStickPercent: 45 },
  cinelifter8: { auwGrams: 4200, motorCount: 8, thrustPerMotorGrams: 3200, propellerSizeInches: 9.0, propellerPitchInches: 5.0, bladeCount: 3, throttleStickPercent: 55 },
};

export class FpvDroneThrustToWeightRatioController {
  private container: HTMLElement;
  private ui: FpvDroneThrustToWeightRatioUI;
  private elements!: DOMResultElements;
  private inputs!: DroneTwrInputs;
  private activePreset: string | null = 'freestyle5';

  constructor(container: HTMLElement, ui: FpvDroneThrustToWeightRatioUI) {
    this.container = container;
    this.ui = ui;
    this.initElements();
    this.initInputs();
    this.bindEvents();
    this.recalculate();
  }

  private initElements(): void {
    this.elements = {
      twrRatio: this.container.querySelector('[data-metric="twrRatio"]')!,
      hoverThrottle: this.container.querySelector('[data-metric="hoverThrottle"]')!,
      currentThrust: this.container.querySelector('[data-metric="currentThrust"]')!,
      instantGForce: this.container.querySelector('[data-metric="instantGForce"]')!,
      zeroToHundred: this.container.querySelector('[data-metric="zeroToHundred"]')!,
      recommendedCamAngle: this.container.querySelector('[data-metric="recommendedCamAngle"]')!,
      windResistance: this.container.querySelector('[data-metric="windResistance"]')!,
      totalMaxThrust: this.container.querySelector('[data-metric="totalMaxThrust"]')!,
      maxPitchAngle: this.container.querySelector('[data-metric="maxPitchAngle"]')!,
      tpaSetting: this.container.querySelector('[data-metric="tpaSetting"]') || undefined,
      dynamicIdleSetting: this.container.querySelector('[data-metric="dynamicIdleSetting"]') || undefined,
      propwashRisk: this.container.querySelector('[data-metric="propwashRisk"]') || undefined,
      agilityBadge: this.container.querySelector('[data-metric="agilityBadge"]')!,
      statusTitle: this.container.querySelector('[data-metric="statusTitle"]')!,
      statusDesc: this.container.querySelector('[data-metric="statusDesc"]')!,
      svgContainer: this.container.querySelector('[data-element="svgContainer"]')!,
      stickPercentBadge: this.container.querySelector('[data-metric="stickPercentBadge"]') || undefined,
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
    this.setInputValue('#input-auw', String(this.inputs.auwGrams));
    this.setInputValue('#range-auw', String(this.inputs.auwGrams));
    this.setInputValue('#input-thrust-motor', String(this.inputs.thrustPerMotorGrams));
    this.setInputValue('#range-thrust-motor', String(this.inputs.thrustPerMotorGrams));
    this.setInputValue('#input-prop-size', String(this.inputs.propellerSizeInches));
    this.setInputValue('#range-prop-size', String(this.inputs.propellerSizeInches));
    this.setInputValue('#input-prop-pitch', String(this.inputs.propellerPitchInches));
    this.setInputValue('#range-prop-pitch', String(this.inputs.propellerPitchInches));
    this.setInputValue('#range-throttle-stick', String(this.inputs.throttleStickPercent));

    this.updateCustomSelect('motor-count', String(this.inputs.motorCount));
    this.updateCustomSelect('blade-count', String(this.inputs.bladeCount));
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
    this.bindThrottleStick();
    this.bindQuickSnapButtons();
    document.addEventListener('click', () => this.closeAllSelects());
  }

  private bindNumberAndRangeInputs(): void {
    this.bindRangeSync('#input-auw', '#range-auw', (v) => { this.inputs.auwGrams = v; });
    this.bindRangeSync('#input-thrust-motor', '#range-thrust-motor', (v) => { this.inputs.thrustPerMotorGrams = v; });
    this.bindRangeSync('#input-prop-size', '#range-prop-size', (v) => { this.inputs.propellerSizeInches = v; });
    this.bindRangeSync('#input-prop-pitch', '#range-prop-pitch', (v) => { this.inputs.propellerPitchInches = v; });
  }

  private bindThrottleStick(): void {
    const stick = this.container.querySelector('#range-throttle-stick') as HTMLInputElement;
    stick?.addEventListener('input', () => {
      this.inputs.throttleStickPercent = parseFloat(stick.value) || 0;
      this.recalculate();
    });
  }

  private bindQuickSnapButtons(): void {
    this.container.querySelectorAll('[data-snap]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const snapType = btn.getAttribute('data-snap');
        const results = calculateTwrMetrics(this.inputs);
        if (snapType === 'idle') this.inputs.throttleStickPercent = 0;
        if (snapType === 'hover') this.inputs.throttleStickPercent = results.hoverThrottlePercent;
        if (snapType === 'cruise') this.inputs.throttleStickPercent = 50;
        if (snapType === 'punch') this.inputs.throttleStickPercent = 100;
        this.setInputValue('#range-throttle-stick', String(this.inputs.throttleStickPercent));
        this.recalculate();
      });
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
    if (name === 'motor-count') this.inputs.motorCount = parseInt(val, 10);
    if (name === 'blade-count') this.inputs.bladeCount = parseInt(val, 10);
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
    const results = calculateTwrMetrics(this.inputs);
    const agilityEval = evaluateAgilityPresentation(results.agilityTier, this.ui);
    updateDOMMetrics(this.elements, results);
    updateDOMSafety(this.elements, agilityEval);
    if (this.elements.svgContainer) {
      this.elements.svgContainer.innerHTML = renderTwrSVG(this.inputs, results, this.ui);
    }
    saveInputs(this.inputs);
  }
}
