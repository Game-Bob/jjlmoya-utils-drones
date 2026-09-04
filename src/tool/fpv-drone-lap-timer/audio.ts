export class RaceAudioSynthesizer {
  private audioCtx: AudioContext | null = null;
  private enabled = true;
  private activeTimeouts: number[] = [];

  constructor(enabled = true) {
    this.enabled = enabled;
  }

  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      this.cancelPendingTones();
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') {
      return null;
    }
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  public playTone(frequency: number, durationSeconds: number, type: OscillatorType = 'sine', peakGain = 0.25): void {
    if (!this.enabled) {
      return;
    }
    const ctx = this.initContext();
    if (!ctx) {
      return;
    }

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(peakGain, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + durationSeconds);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + durationSeconds + 0.05);
    } catch {}
  }

  public playFaiCountdown(onTick: (label: string) => void, onGo: () => void): void {
    this.cancelPendingTones();
    const steps = ['3', '2', '1'];

    if (!this.enabled) {
      steps.forEach((label, idx) => {
        const tid = window.setTimeout(() => onTick(label), idx * 1000);
        this.activeTimeouts.push(tid);
      });
      const goTid = window.setTimeout(() => {
        onTick('Go');
        onGo();
      }, steps.length * 1000);
      this.activeTimeouts.push(goTid);
      return;
    }

    this.initContext();

    steps.forEach((label, idx) => {
      const tid = window.setTimeout(() => {
        this.playTone(440, 0.18, 'sine', 0.3);
        onTick(label);
      }, idx * 1000);
      this.activeTimeouts.push(tid);
    });

    const goTid = window.setTimeout(() => {
      this.playTone(880, 0.45, 'sawtooth', 0.4);
      onTick('Go');
      onGo();
    }, steps.length * 1000);
    this.activeTimeouts.push(goTid);
  }

  public playCountdownSequence(onGo: () => void, onTick?: (label: string) => void): void {
    this.playFaiCountdown(
      (label) => {
        onTick?.(label);
      },
      () => {
        onGo();
      }
    );
  }

  public playLapSound(isFastest = false): void {
    if (isFastest) {
      this.playFastestLapChime();
    } else {
      this.playLapChirp();
    }
  }

  public playLapChirp(): void {
    if (!this.enabled) {
      return;
    }
    this.playTone(660, 0.06, 'sine', 0.25);
    const tid = window.setTimeout(() => {
      this.playTone(880, 0.08, 'sine', 0.3);
    }, 70);
    this.activeTimeouts.push(tid);
  }

  public playFastestLapChime(): void {
    if (!this.enabled) {
      return;
    }
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const tid = window.setTimeout(() => {
        this.playTone(freq, 0.12, 'triangle', 0.35);
      }, idx * 75);
      this.activeTimeouts.push(tid);
    });
  }

  public playFinishFanfare(): void {
    if (!this.enabled) {
      return;
    }
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      const tid = window.setTimeout(() => {
        this.playTone(freq, 0.22, 'triangle', 0.3);
      }, idx * 110);
      this.activeTimeouts.push(tid);
    });
  }

  public cancelPendingTones(): void {
    this.activeTimeouts.forEach((tid) => clearTimeout(tid));
    this.activeTimeouts = [];
  }
}
