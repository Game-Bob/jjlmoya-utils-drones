import type { BatteryInputs } from './logic';

const STORAGE_KEY = 'jjl_drone_lipo_c_rating_inputs';

export function loadSavedInputs(): Partial<BatteryInputs> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Partial<BatteryInputs>;
  } catch {
    return {};
  }
}

export function saveInputs(inputs: BatteryInputs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {}
}
