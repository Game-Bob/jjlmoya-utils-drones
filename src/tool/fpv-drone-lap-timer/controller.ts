import {
  calculateSessionMetrics,
  computeLapRecords,
  formatLapTime,
  isDebounceLocked,
  PRESETS,
  type SessionConfig,
} from './logic';
import { loadSessionConfig, saveSessionConfig, loadSessionLaps, saveSessionLaps } from './storage';
import { RaceAudioSynthesizer } from './audio';
import { renderTelemetryScene, renderLapTable } from './dom-views';
import { exportSessionCsv, copySessionSummary } from './export';
import type { FpvDroneLapTimerUI } from './ui';

export class LapTimerSession {
  private config: SessionConfig;
  private audio: RaceAudioSynthesizer;
  private status: 'idle' | 'countdown' | 'running' | 'paused' | 'finished' = 'idle';
  private lapDurationsMs: number[] = [];
  private lapStartTime = 0;
  private lastRecordedTimestamp = 0;
  private animFrameId: number | null = null;
  private currentLapNumber = 1;

  constructor(private root: HTMLElement, private ui: FpvDroneLapTimerUI) {
    this.config = loadSessionConfig();
    this.lapDurationsMs = loadSessionLaps();
    this.currentLapNumber = Math.max(1, this.lapDurationsMs.length + 1);
    this.audio = new RaceAudioSynthesizer(this.config.soundEnabled);
    this.bindEvents();
    this.syncInputs();
    this.updateViews();
    if (this.lapDurationsMs.length > 0) {
      const display = this.query<HTMLElement>('.fpv-lap-timer-digits');
      if (display) {
        const lastLap = this.lapDurationsMs[this.lapDurationsMs.length - 1];
        if (lastLap !== undefined) {
          display.textContent = formatLapTime(lastLap);
        }
      }
    }
  }

  private query<T extends HTMLElement>(selector: string): T | null {
    return this.root.querySelector<T>(selector);
  }

  private syncInputs(): void {
    const fields: [string, number][] = [
      ['#fpv-lap-timer-track-length', this.config.trackLengthM],
      ['#fpv-lap-timer-target-laps', this.config.targetLaps],
      ['#fpv-lap-timer-battery', this.config.batteryCapacityMah],
      ['#fpv-lap-timer-debounce', this.config.debounceMs / 1000],
    ];
    fields.forEach(([id, val]) => {
      const el = this.query<HTMLInputElement>(id);
      if (el) el.value = String(val);
    });
    const sound = this.query<HTMLInputElement>('#fpv-lap-timer-sound');
    if (sound) sound.checked = this.config.soundEnabled;
    this.audio.setEnabled(this.config.soundEnabled);
  }

  private readInputs(): void {
    const getNum = (id: string, def: number, min: number) =>
      Math.max(min, Number(this.query<HTMLInputElement>(id)?.value) || def);
    this.config.trackLengthM = getNum('#fpv-lap-timer-track-length', 250, 10);
    this.config.targetLaps = getNum('#fpv-lap-timer-target-laps', 3, 0);
    this.config.batteryCapacityMah = getNum('#fpv-lap-timer-battery', 1300, 100);
    this.config.debounceMs = getNum('#fpv-lap-timer-debounce', 3, 1) * 1000;
    const sound = this.query<HTMLInputElement>('#fpv-lap-timer-sound');
    this.config.soundEnabled = sound?.checked ?? true;
    this.audio.setEnabled(this.config.soundEnabled);
    saveSessionConfig(this.config);
    this.updateViews();
  }

  private updateSidebarStats(completed: number, avgMs: number, avgKmh: number): void {
    const setText = (id: string, text: string) => {
      const el = this.query<HTMLElement>(id);
      if (el) el.textContent = text;
    };
    setText('#fpv-lap-timer-stat-completed', String(completed));
    setText('#fpv-lap-timer-stat-avg', avgMs > 0 ? formatLapTime(avgMs) : '--');
    setText('#fpv-lap-timer-stat-speed', avgKmh > 0 ? `${avgKmh} ${this.ui.speedUnitKmh || 'km/h'}` : '--');
  }

  private updateHud(completed: number): void {
    const targetStr = this.config.targetLaps > 0 ? String(this.config.targetLaps) : '∞';
    const lapNum = this.status === 'finished' ? completed : this.currentLapNumber;
    const hudLap = this.query<HTMLElement>('#fpv-lap-timer-hud-lap');
    if (hudLap) hudLap.textContent = `${this.ui.lapNumberPrefix || 'Lap'} ${lapNum} / ${targetStr}`;
    const statusText = this.query<HTMLElement>('#fpv-lap-timer-status-text');
    if (statusText) statusText.textContent = this.getStatusLabel();
    const statusChip = this.query<HTMLElement>('.fpv-lap-timer-status-chip');
    if (statusChip) statusChip.className = `fpv-lap-timer-chip fpv-lap-timer-status-chip fpv-lap-timer-status-${this.status}`;
  }

  private updateViews(): void {
    const laps = computeLapRecords(this.lapDurationsMs, this.config.trackLengthM, this.config.batteryCapacityMah);
    const metrics = calculateSessionMetrics(this.lapDurationsMs, this.config.trackLengthM, this.config.batteryCapacityMah);
    const telem = this.query<HTMLElement>('.fpv-lap-timer-telemetry-mount');
    if (telem) {
      telem.innerHTML = renderTelemetryScene({
        metrics, laps, currentLapNumber: this.currentLapNumber,
        targetLaps: this.config.targetLaps, status: this.status, ui: this.ui,
      });
    }
    const table = this.query<HTMLElement>('.fpv-lap-timer-table-mount');
    if (table) table.innerHTML = renderLapTable(laps, this.ui);
    this.updateSidebarStats(metrics.completedLaps, metrics.averageLapMs, metrics.averageSpeedKmh);
    this.updateHud(metrics.completedLaps);
    this.updateControlButtons();
  }

  private updateControlButtons(): void {
    const isBusy = this.status === 'running' || this.status === 'countdown';
    this.updatePrimaryButtons(isBusy);
    this.updateTriggerButton();
  }

  private updatePrimaryButtons(isBusy: boolean): void {
    const start = this.query<HTMLButtonElement>('#fpv-lap-timer-btn-start');
    if (start) {
      start.disabled = isBusy;
      start.style.display = this.status === 'paused' ? 'none' : 'inline-flex';
      if (this.status !== 'countdown') start.textContent = this.ui.startCountdownButton;
    }
    const pause = this.query<HTMLButtonElement>('#fpv-lap-timer-btn-pause');
    if (pause) {
      pause.style.display = isBusy || this.status === 'paused' ? 'inline-flex' : 'none';
      pause.textContent = this.status === 'paused' ? this.ui.resumeTimerButton : this.ui.pauseTimerButton;
    }
  }

  private updateTriggerButton(): void {
    const trigger = this.query<HTMLButtonElement>('.fpv-lap-timer-giant-btn');
    if (trigger) {
      trigger.disabled = this.status !== 'running';
      trigger.classList.toggle('fpv-lap-timer-btn-countdown-active', this.status === 'countdown');
      const caption = trigger.querySelector<HTMLElement>('.fpv-lap-timer-btn-caption');
      if (caption && this.status !== 'countdown') caption.textContent = this.ui.recordLapButton;
    }
  }

  private tick = (): void => {
    if (this.status === 'running') {
      const display = this.query<HTMLElement>('.fpv-lap-timer-digits');
      if (display) display.textContent = formatLapTime(performance.now() - this.lapStartTime);
      this.animFrameId = requestAnimationFrame(this.tick);
    }
  };

  public startCountdown(): void {
    if (this.status === 'running' || this.status === 'countdown') return;
    this.status = 'countdown';
    this.updateViews();
    this.audio.playFaiCountdown(
      (label) => this.paintCountdown(label),
      () => this.beginRace()
    );
  }

  private paintCountdown(label: string): void {
    const start = this.query<HTMLButtonElement>('#fpv-lap-timer-btn-start');
    if (start) start.textContent = label;
    const triggerCaption = this.query<HTMLElement>('.fpv-lap-timer-giant-btn .fpv-lap-timer-btn-caption');
    if (triggerCaption) triggerCaption.textContent = label;
    const display = this.query<HTMLElement>('.fpv-lap-timer-digits');
    if (display) display.textContent = label;
  }

  private beginRace(): void {
    this.status = 'running';
    this.lapStartTime = performance.now();
    this.lastRecordedTimestamp = 0;
    this.currentLapNumber = 1;
    this.updateViews();
    this.tick();
  }

  public recordLap(): void {
    if (this.status !== 'running') return;
    const now = performance.now();
    if (isDebounceLocked(this.lastRecordedTimestamp, now, this.config.debounceMs)) return;

    const lapDuration = now - this.lapStartTime;
    const isNewFastest = this.lapDurationsMs.length === 0 || lapDuration < Math.min(...this.lapDurationsMs);
    this.lapDurationsMs.push(lapDuration);
    saveSessionLaps(this.lapDurationsMs);
    this.lastRecordedTimestamp = now;
    this.lapStartTime = now;
    this.currentLapNumber += 1;
    this.audio.playLapSound(isNewFastest);

    if (this.config.targetLaps > 0 && this.lapDurationsMs.length >= this.config.targetLaps) {
      this.finishRace();
    } else {
      this.updateViews();
    }
  }

  public pauseRace(): void {
    if (this.status === 'running') {
      this.status = 'paused';
      if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
      this.updateViews();
    } else if (this.status === 'paused') {
      this.status = 'running';
      this.lapStartTime = performance.now();
      this.updateViews();
      this.tick();
    }
  }

  public finishRace(): void {
    this.status = 'finished';
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    const display = this.query<HTMLElement>('.fpv-lap-timer-digits');
    if (display) {
      const total = this.lapDurationsMs.reduce((acc, d) => acc + d, 0);
      display.textContent = formatLapTime(total);
    }
    this.audio.playFinishFanfare();
    this.updateViews();
  }

  public resetSession(): void {
    this.status = 'idle';
    this.audio.cancelPendingTones();
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    this.lapDurationsMs = [];
    saveSessionLaps([]);
    this.currentLapNumber = 1;
    this.lapStartTime = 0;
    this.lastRecordedTimestamp = 0;
    const display = this.query<HTMLElement>('.fpv-lap-timer-digits');
    if (display) display.textContent = '00:00.000';
    this.updateViews();
  }

  public applyPreset(presetKey: 'multigp' | 'whoop' | 'sprint'): void {
    const p = PRESETS[presetKey];
    this.config.trackLengthM = p.trackLengthM;
    this.config.targetLaps = p.targetLaps;
    this.config.batteryCapacityMah = p.batteryCapacityMah;
    saveSessionConfig(this.config);
    this.syncInputs();
    this.root.querySelectorAll('.fpv-lap-timer-preset').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-preset') === presetKey);
    });
    this.updateViews();
  }

  public exportCsv(): void {
    exportSessionCsv(this.lapDurationsMs, this.config);
  }

  public async copySummary(): Promise<void> {
    const copied = await copySessionSummary(this.lapDurationsMs, this.config);
    if (copied) {
      const notice = this.query<HTMLElement>('#fpv-lap-timer-copy-notice');
      if (notice) {
        notice.style.display = 'inline-block';
        setTimeout(() => {
          notice.style.display = 'none';
        }, 3000);
      }
    }
  }

  private getStatusLabel(): string {
    const labels = { countdown: this.ui.statusCountdown, running: this.ui.statusRunning, paused: this.ui.statusPaused, finished: this.ui.statusFinished };
    return labels[this.status as keyof typeof labels] || this.ui.statusIdle || 'Ready for Start';
  }

  private bindEvents(): void {
    const clicks: [string, () => void][] = [
      ['#fpv-lap-timer-btn-start', () => this.startCountdown()],
      ['#fpv-lap-timer-btn-pause', () => this.pauseRace()],
      ['#fpv-lap-timer-btn-reset', () => this.resetSession()],
      ['.fpv-lap-timer-giant-btn', () => this.recordLap()],
      ['#fpv-lap-timer-export-csv', () => this.exportCsv()],
      ['#fpv-lap-timer-copy-summary', () => this.copySummary()],
    ];
    clicks.forEach(([sel, fn]) => this.query(sel)?.addEventListener('click', fn));
    ['#fpv-lap-timer-track-length', '#fpv-lap-timer-target-laps', '#fpv-lap-timer-battery', '#fpv-lap-timer-debounce', '#fpv-lap-timer-sound'].forEach((id) => {
      this.query(id)?.addEventListener('change', () => this.readInputs());
    });
    this.root.querySelectorAll('.fpv-lap-timer-preset').forEach((btn) => {
      btn.addEventListener('click', () => {
        const k = btn.getAttribute('data-preset') as 'multigp' | 'whoop' | 'sprint';
        if (k) this.applyPreset(k);
      });
    });
  }

  public destroy(): void {
    this.audio.cancelPendingTones();
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
  }
}

export { initializeLapTimer } from './bootstrap';
