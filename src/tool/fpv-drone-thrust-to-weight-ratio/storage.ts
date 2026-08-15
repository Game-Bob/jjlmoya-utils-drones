import type { DroneTwrInputs } from './logic';

const STORAGE_KEY = 'jjl_drone_twr_inputs';

export function loadSavedInputs(): Partial<DroneTwrInputs> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Partial<DroneTwrInputs>;
  } catch {
    return {};
  }
}

export function saveInputs(inputs: DroneTwrInputs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {}
}
