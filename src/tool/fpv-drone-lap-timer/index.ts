import { fpvDroneLapTimer } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';

export const FPV_DRONE_LAP_TIMER_TOOL: ToolDefinition = {
  entry: fpvDroneLapTimer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
