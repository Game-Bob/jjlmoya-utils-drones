import { describe, it, expect } from 'vitest';
import { FPV_DRONE_LAP_TIMER_TOOL, fpvDroneLapTimer } from './index';

describe('fpv-drone-lap-timer contract suite', () => {
  it('exposes a valid tool definition with lazy component loaders', () => {
    expect(FPV_DRONE_LAP_TIMER_TOOL.entry).toBe(fpvDroneLapTimer);
    expect(typeof FPV_DRONE_LAP_TIMER_TOOL.Component).toBe('function');
    expect(typeof FPV_DRONE_LAP_TIMER_TOOL.SEOComponent).toBe('function');
    expect(typeof FPV_DRONE_LAP_TIMER_TOOL.BibliographyComponent).toBe('function');
  });

  it('loads English locale content without errors', async () => {
    expect(typeof fpvDroneLapTimer.i18n.en).toBe('function');
    const content = await fpvDroneLapTimer.i18n.en!();
    expect(content.slug).toBe('fpv-drone-lap-timer');
    expect(content.title).toBeDefined();
    expect(content.ui).toBeDefined();
    expect(content.seo.length).toBeGreaterThanOrEqual(4);
    expect(content.faq.length).toBeGreaterThanOrEqual(4);
    expect(content.howTo.length).toBeGreaterThanOrEqual(3);
    expect(content.bibliography.length).toBeGreaterThanOrEqual(2);
    expect(content.schemas.length).toBeGreaterThanOrEqual(3);
  });
});
