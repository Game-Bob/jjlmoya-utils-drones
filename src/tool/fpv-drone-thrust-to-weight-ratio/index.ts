import { fpvDroneThrustToWeightRatio } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';

export const FPV_DRONE_THRUST_TO_WEIGHT_RATIO_TOOL: ToolDefinition = {
  entry: fpvDroneThrustToWeightRatio,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
