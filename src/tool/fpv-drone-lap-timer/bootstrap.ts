import type { FpvDroneLapTimerUI } from './ui';
import { LapTimerSession } from './controller';

export function initializeLapTimer(root: HTMLElement, ui: FpvDroneLapTimerUI): () => void {
  const session = new LapTimerSession(root, ui);
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      const tag = document.activeElement?.tagName;
      if (tag !== 'INPUT' && tag !== 'BUTTON') {
        e.preventDefault();
        session.recordLap();
      }
    }
  };
  window.addEventListener('keydown', onKeyDown);
  return () => {
    session.destroy();
    window.removeEventListener('keydown', onKeyDown);
  };
}
