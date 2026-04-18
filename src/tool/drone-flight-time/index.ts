export * from './entry';
export const DRONE_FLIGHT_TIME_TOOL: ToolDefinition = {
  entry: droneFlightTime,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
