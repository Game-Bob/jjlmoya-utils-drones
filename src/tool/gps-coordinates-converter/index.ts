export * from './entry';
export const GPS_COORDINATES_CONVERTER_TOOL: ToolDefinition = {
  entry: gpsCoordinatesConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
