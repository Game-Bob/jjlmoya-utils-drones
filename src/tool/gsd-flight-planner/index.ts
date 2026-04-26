import { gsdFlightPlanner } from './entry';
export * from './entry';
export const GSD_FLIGHT_PLANNER_TOOL = {
  entry: gsdFlightPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
