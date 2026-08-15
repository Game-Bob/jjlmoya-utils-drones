import { droneBatteryCRatingCalculator } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';

export const DRONE_BATTERY_C_RATING_CALCULATOR_TOOL: ToolDefinition = {
  entry: droneBatteryCRatingCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
