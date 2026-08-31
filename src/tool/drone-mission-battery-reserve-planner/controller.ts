import type { MissionInputs, MissionResults } from './logic';
import { calculateMissionReserve, convertDistance } from './logic';
import { renderTelemetrySvg } from './dom-views';
import { saveInputs } from './storage';
import type { DroneMissionBatteryReservePlannerUI } from './ui';

function setElementsText(container: HTMLElement, s: { speedUnit: string; distUnit: string }): void {
  container.querySelectorAll<HTMLElement>('.unit-label-speed').forEach((el) => { el.textContent = s.speedUnit; });
  container.querySelectorAll<HTMLElement>('.unit-label-dist').forEach((el) => { el.textContent = s.distUnit; });
}

function getBannerTitle(statusKey: string, b?: DroneMissionBatteryReservePlannerUI['statusBadges']): string {
  if (statusKey === 'tight') return b ? b.tightTitle : 'TIGHT ENERGY RESERVE MARGIN';
  if (statusKey === 'critical') return b ? b.criticalTitle : 'CRITICAL ENERGY WARNING';
  if (statusKey === 'exceeded') return b ? b.exceededTitle : 'MISSION EXCEEDS SAFE BATTERY CAPACITY';
  return b ? b.optimalTitle : 'OPTIMAL ENERGY RESERVE MARGIN';
}

function getBannerSubtitle(statusKey: string, b?: DroneMissionBatteryReservePlannerUI['statusBadges']): string {
  if (statusKey === 'tight') return b ? b.tightSubtitle : 'Low landing reserve';
  if (statusKey === 'critical') return b ? b.criticalSubtitle : 'Reserve breached';
  if (statusKey === 'exceeded') return b ? b.exceededSubtitle : 'Insufficient battery energy';
  return b ? b.optimalSubtitle : 'Safe flight envelope';
}

function updateStatusBanner(
  container: HTMLElement,
  statusKey: string,
  uiBadges?: DroneMissionBatteryReservePlannerUI['statusBadges']
): void {
  const banner = container.querySelector<HTMLElement>('#res-status-banner');
  const title = container.querySelector<HTMLElement>('#res-status-title');
  const subtitle = container.querySelector<HTMLElement>('#res-status-subtitle');
  if (!banner || !title) return;

  banner.className = `status-banner status-banner-${statusKey}`;
  title.textContent = getBannerTitle(statusKey, uiBadges);
  if (subtitle) subtitle.textContent = getBannerSubtitle(statusKey, uiBadges);
}

function setCardText(container: HTMLElement, id: string, text: string): void {
  const el = container.querySelector<HTMLElement>(id);
  if (el) el.textContent = text;
}

function updateMetricCards(
  container: HTMLElement,
  results: MissionResults,
  unitSystem: MissionInputs['unitSystem'],
  resultsUI?: DroneMissionBatteryReservePlannerUI['results']
): void {
  const distUnit = unitSystem === 'imperial' ? 'mi' : 'km';
  const displayRadius = convertDistance(results.maxSafeRadiusKm, unitSystem);
  const powerText = resultsUI ? resultsUI.powerSubLabel : 'Power';
  const sagText = resultsUI ? resultsUI.voltageSagSubLabel : 'Voltage sag';

  setCardText(container, '#res-autonomy', `${results.totalAutonomyMinutes.toFixed(1)} min`);
  setCardText(container, '#res-sag-loss', `${sagText}: -${results.voltageSagWhLoss.toFixed(1)} Wh`);
  setCardText(container, '#res-max-radius', `${displayRadius.toFixed(1)} ${distUnit}`);
  setCardText(container, '#res-outbound-time', `${results.outboundTimeMinutes.toFixed(1)} min`);
  setCardText(container, '#res-outbound-power', `${powerText}: ${Math.round(results.outboundPowerWatts)} W`);
  setCardText(container, '#res-return-time', `${results.returnTimeMinutes.toFixed(1)} min`);
  setCardText(container, '#res-return-power', `${powerText}: ${Math.round(results.returnPowerWatts)} W`);
}

function updateTouchdownBar(container: HTMLElement, results: MissionResults): void {
  const elLandingEnergy = container.querySelector<HTMLElement>('#res-landing-energy');
  const elLandingBar = container.querySelector<HTMLElement>('#res-landing-bar');
  const remWh = Math.max(0, results.remainingEnergyLandingWh);
  const remPct = Math.max(0, results.remainingEnergyLandingPercent);

  if (elLandingEnergy) elLandingEnergy.textContent = `${remPct.toFixed(1)}% (${remWh.toFixed(1)} Wh)`;
  if (elLandingBar) {
    elLandingBar.style.width = `${Math.min(100, remPct)}%`;
    const colorMap: Record<string, string> = { optimal: '#10b981', tight: '#f59e0b', critical: '#ef4444', exceeded: '#ef4444' };
    elLandingBar.style.backgroundColor = colorMap[results.statusKey] ?? '#10b981';
  }
}

function bindDual(container: HTMLElement, sliderId: string, inputId: string, onChange: (v: number) => void): void {
  const slider = container.querySelector<HTMLInputElement>(sliderId);
  const numInput = container.querySelector<HTMLInputElement>(inputId);
  slider?.addEventListener('input', () => { const v = parseFloat(slider.value) || 0; if (numInput) numInput.value = String(v); onChange(v); });
  numInput?.addEventListener('input', () => { const v = parseFloat(numInput.value) || 0; if (slider) slider.value = String(v); onChange(v); });
}

function bindAllInputs(container: HTMLElement, state: MissionInputs, update: () => void): void {
  bindDual(container, '#slider-capacity', '#input-capacity', (v) => { state.batteryCapacityMah = Math.max(100, v); update(); });
  bindDual(container, '#slider-voltage', '#input-voltage', (v) => { state.voltageNominal = Math.max(1, v); update(); });
  bindDual(container, '#slider-current', '#input-current', (v) => { state.averageCurrentAmps = Math.max(0.1, v); update(); });
  bindDual(container, '#slider-speed', '#input-speed', (v) => { state.cruiseSpeedKmh = state.unitSystem === 'imperial' ? Math.max(1, v) / 0.621371 : Math.max(1, v); update(); });
  bindDual(container, '#slider-distance', '#input-distance', (v) => { state.oneWayDistanceKm = state.unitSystem === 'imperial' ? Math.max(0.1, v) / 0.621371 : Math.max(0.1, v); update(); });
  bindDual(container, '#slider-target-hover', '#input-target-hover', (v) => { state.targetHoverTimeMin = Math.max(0, v); update(); });
  bindDual(container, '#slider-wind-speed', '#input-wind-speed', (v) => { state.windSpeedKmh = state.unitSystem === 'imperial' ? Math.max(0, v) / 0.621371 : Math.max(0, v); update(); });
  bindDual(container, '#slider-reserve', '#input-reserve', (v) => { state.reservePolicyPercent = Math.min(50, Math.max(5, v)); update(); });
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
  bindAllInputs(container, state, update);
  container.querySelectorAll<HTMLButtonElement>('.wind-seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.dir as MissionInputs['windDirection'];
      if (dir) { state.windDirection = dir; container.querySelectorAll('.wind-seg-btn').forEach((b) => b.classList.toggle('active', b === btn)); update(); }
    });
  });
  update();
}
