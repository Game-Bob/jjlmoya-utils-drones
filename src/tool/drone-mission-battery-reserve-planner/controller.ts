import type { MissionInputs, MissionResults } from './logic';
import { calculateMissionReserve, convertDistance } from './logic';
import { renderTelemetrySvg } from './dom-views';
import { saveInputs } from './storage';
import type { DroneMissionBatteryReservePlannerUI } from './ui';

function setElementsText(
  container: HTMLElement,
  selectors: { speedUnit: string; distUnit: string }
): void {
  container.querySelectorAll<HTMLElement>('.unit-label-speed').forEach((el) => {
    el.textContent = selectors.speedUnit;
  });
  container.querySelectorAll<HTMLElement>('.unit-label-dist').forEach((el) => {
    el.textContent = selectors.distUnit;
  });
}

function updateStatusBanner(
  container: HTMLElement,
  statusKey: string,
  uiBadges?: DroneMissionBatteryReservePlannerUI['statusBadges']
): void {
  const statusBanner = container.querySelector<HTMLElement>('#res-status-banner');
  const statusTitle = container.querySelector<HTMLElement>('#res-status-title');
  const statusSubtitle = container.querySelector<HTMLElement>('#res-status-subtitle');
  if (!statusBanner || !statusTitle) return;

  statusBanner.className = `status-banner status-banner--${statusKey}`;
  if (statusKey === 'optimal') {
    statusTitle.textContent = uiBadges?.optimalTitle || 'OPTIMAL ENERGY RESERVE MARGIN';
    if (statusSubtitle) statusSubtitle.textContent = uiBadges?.optimalSubtitle || 'Safe flight envelope with sufficient landing reserve margin';
  } else if (statusKey === 'tight') {
    statusTitle.textContent = uiBadges?.tightTitle || 'TIGHT ENERGY RESERVE MARGIN';
    if (statusSubtitle) statusSubtitle.textContent = uiBadges?.tightSubtitle || 'Low landing reserve margin, monitor battery voltage closely';
  } else if (statusKey === 'critical') {
    statusTitle.textContent = uiBadges?.criticalTitle || 'CRITICAL ENERGY WARNING';
    if (statusSubtitle) statusSubtitle.textContent = uiBadges?.criticalSubtitle || 'Battery reserve breached, initiate Return-to-Home immediately';
  } else {
    statusTitle.textContent = uiBadges?.exceededTitle || 'MISSION EXCEEDS SAFE BATTERY CAPACITY';
    if (statusSubtitle) statusSubtitle.textContent = uiBadges?.exceededSubtitle || 'Insufficient battery energy to complete mission and land safely';
  }
}

function updateMetricCards(
  container: HTMLElement,
  results: MissionResults,
  unitSystem: MissionInputs['unitSystem'],
  resultsUI?: DroneMissionBatteryReservePlannerUI['results']
): void {
  const distUnit = unitSystem === 'imperial' ? 'mi' : 'km';
  const elAutonomy = container.querySelector<HTMLElement>('#res-autonomy');
  const elSagLoss = container.querySelector<HTMLElement>('#res-sag-loss');
  const elMaxRadius = container.querySelector<HTMLElement>('#res-max-radius');
  const elOutboundTime = container.querySelector<HTMLElement>('#res-outbound-time');
  const elOutboundPower = container.querySelector<HTMLElement>('#res-outbound-power');
  const elReturnTime = container.querySelector<HTMLElement>('#res-return-time');
  const elReturnPower = container.querySelector<HTMLElement>('#res-return-power');

  if (elAutonomy) elAutonomy.textContent = `${results.totalAutonomyMinutes.toFixed(1)} min`;
  const sagText = resultsUI?.voltageSagSubLabel || 'Voltage sag';
  if (elSagLoss) elSagLoss.textContent = `${sagText}: -${results.voltageSagWhLoss.toFixed(1)} Wh`;

  const displayRadius = convertDistance(results.maxSafeRadiusKm, unitSystem);
  if (elMaxRadius) elMaxRadius.textContent = `${displayRadius.toFixed(1)} ${distUnit}`;

  const powerText = resultsUI?.powerSubLabel || 'Power';
  if (elOutboundTime) elOutboundTime.textContent = `${results.outboundTimeMinutes.toFixed(1)} min`;
  if (elOutboundPower) elOutboundPower.textContent = `${powerText}: ${Math.round(results.outboundPowerWatts)} W`;

  if (elReturnTime) elReturnTime.textContent = `${results.returnTimeMinutes.toFixed(1)} min`;
  if (elReturnPower) elReturnPower.textContent = `${powerText}: ${Math.round(results.returnPowerWatts)} W`;
}

function updateTouchdownBar(container: HTMLElement, results: MissionResults): void {
  const elLandingEnergy = container.querySelector<HTMLElement>('#res-landing-energy');
  const elLandingBar = container.querySelector<HTMLElement>('#res-landing-bar');
  const remainingWh = Math.max(0, results.remainingEnergyLandingWh);
  const remainingPct = Math.max(0, results.remainingEnergyLandingPercent);

  if (elLandingEnergy) {
    elLandingEnergy.textContent = `${remainingPct.toFixed(1)}% (${remainingWh.toFixed(1)} Wh)`;
  }
  if (elLandingBar) {
    elLandingBar.style.width = `${Math.min(100, remainingPct)}%`;
    if (results.statusKey === 'optimal') elLandingBar.style.backgroundColor = '#10b981';
    else if (results.statusKey === 'tight') elLandingBar.style.backgroundColor = '#f59e0b';
    else elLandingBar.style.backgroundColor = '#ef4444';
  }
}

function bindDualInputs(
  slider: HTMLInputElement | null,
  numberInput: HTMLInputElement | null,
  onChange: (val: number) => void
): void {
  slider?.addEventListener('input', () => {
    const val = parseFloat(slider.value) || 0;
    if (numberInput) numberInput.value = String(val);
    onChange(val);
  });
  numberInput?.addEventListener('input', () => {
    const val = parseFloat(numberInput.value) || 0;
    if (slider) slider.value = String(val);
    onChange(val);
  });
}

export function bindPlannerController(
  container: HTMLElement,
  initialInputs: MissionInputs,
  uiContent?: DroneMissionBatteryReservePlannerUI
): void {
  const state: MissionInputs = { ...initialInputs };

  const update = () => {
    const results = calculateMissionReserve(state);
    saveInputs(state);
    const speedUnit = state.unitSystem === 'imperial' ? 'mph' : 'km/h';
    const distUnit = state.unitSystem === 'imperial' ? 'mi' : 'km';

    setElementsText(container, { speedUnit, distUnit });
    updateStatusBanner(container, results.statusKey, uiContent?.statusBadges);
    updateMetricCards(container, results, state.unitSystem, uiContent?.results);
    updateTouchdownBar(container, results);

    const svgWrapper = container.querySelector<HTMLElement>('#res-svg-wrapper');
    if (svgWrapper) svgWrapper.innerHTML = renderTelemetrySvg(state, results, uiContent);
  };

  bindDualInputs(container.querySelector('#slider-capacity'), container.querySelector('#input-capacity'), (v) => {
    state.batteryCapacityMah = Math.max(100, v);
    update();
  });

  bindDualInputs(container.querySelector('#slider-voltage'), container.querySelector('#input-voltage'), (v) => {
    state.voltageNominal = Math.max(1, v);
    update();
  });

  bindDualInputs(container.querySelector('#slider-current'), container.querySelector('#input-current'), (v) => {
    state.averageCurrentAmps = Math.max(0.1, v);
    update();
  });

  bindDualInputs(container.querySelector('#slider-speed'), container.querySelector('#input-speed'), (v) => {
    const raw = Math.max(1, v);
    state.cruiseSpeedKmh = state.unitSystem === 'imperial' ? raw / 0.621371 : raw;
    update();
  });

  bindDualInputs(container.querySelector('#slider-distance'), container.querySelector('#input-distance'), (v) => {
    const raw = Math.max(0.1, v);
    state.oneWayDistanceKm = state.unitSystem === 'imperial' ? raw / 0.621371 : raw;
    update();
  });

  bindDualInputs(container.querySelector('#slider-target-hover'), container.querySelector('#input-target-hover'), (v) => {
    state.targetHoverTimeMin = Math.max(0, v);
    update();
  });

  bindDualInputs(container.querySelector('#slider-wind-speed'), container.querySelector('#input-wind-speed'), (v) => {
    const raw = Math.max(0, v);
    state.windSpeedKmh = state.unitSystem === 'imperial' ? raw / 0.621371 : raw;
    update();
  });

  bindDualInputs(container.querySelector('#slider-reserve'), container.querySelector('#input-reserve'), (v) => {
    state.reservePolicyPercent = Math.min(50, Math.max(5, v));
    update();
  });

  container.querySelectorAll<HTMLButtonElement>('.wind-seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.dir as MissionInputs['windDirection'];
      if (dir) {
        state.windDirection = dir;
        container.querySelectorAll('.wind-seg-btn').forEach((b) => b.classList.toggle('active', b === btn));
        update();
      }
    });
  });

  update();
}
