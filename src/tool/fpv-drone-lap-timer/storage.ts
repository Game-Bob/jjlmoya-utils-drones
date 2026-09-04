import type { SessionConfig } from './logic';
import { DEFAULT_CONFIG } from './logic';

const STORAGE_KEY_CONFIG = 'fpv_drone_lap_timer_config_v1';
const STORAGE_KEY_LAPS = 'fpv_drone_lap_timer_laps_v1';

export function loadSessionConfig(): SessionConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (!raw) {
      return { ...DEFAULT_CONFIG };
    }
    const parsed = JSON.parse(raw);
    return {
      trackLengthM: Number(parsed.trackLengthM) || DEFAULT_CONFIG.trackLengthM,
      targetLaps: Number(parsed.targetLaps) || DEFAULT_CONFIG.targetLaps,
      batteryCapacityMah: Number(parsed.batteryCapacityMah) || DEFAULT_CONFIG.batteryCapacityMah,
      debounceMs: Number(parsed.debounceMs) || DEFAULT_CONFIG.debounceMs,
      soundEnabled: typeof parsed.soundEnabled === 'boolean' ? parsed.soundEnabled : DEFAULT_CONFIG.soundEnabled,
    };
  } catch {
    return { ...DEFAULT_CONFIG };
  }
}

export function saveSessionConfig(config: SessionConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
  } catch {}
}

export function loadSessionLaps(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LAPS);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter((n) => typeof n === 'number' && Number.isFinite(n) && n > 0);
  } catch {
    return [];
  }
}

export function saveSessionLaps(laps: number[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_LAPS, JSON.stringify(laps));
  } catch {}
}
