import { fpvDroneSpeedCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FPV_DRONE_SPEED_CALCULATOR_TOOL: ToolDefinition = {
  entry: fpvDroneSpeedCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
