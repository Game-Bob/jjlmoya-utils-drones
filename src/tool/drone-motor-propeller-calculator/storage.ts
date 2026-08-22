import type { DroneMotorInputs } from './logic';

export type DisplayUnit = 'metric' | 'imperial';

const STORAGE_KEY = 'jjlmoya-drone-motor-propeller-calculator';

interface StoredState {
  inputs: DroneMotorInputs;
  unit: DisplayUnit;
}

export function readStoredState(): Partial<StoredState> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Partial<StoredState>;
  } catch {
    return {};
  }
}

export function writeStoredState(state: StoredState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
