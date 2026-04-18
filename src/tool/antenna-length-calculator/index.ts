export * from './entry';
export const ANTENNA_LENGTH_CALCULATOR_TOOL: ToolDefinition = {
  entry: antennaLengthCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
