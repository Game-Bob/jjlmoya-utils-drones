import { dronePowerAnalyzer } from './entry';
export * from './entry';
export const DRONE_POWER_ANALYZER_TOOL = {
  entry: dronePowerAnalyzer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
