import type { DronesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import GpsCoordinatesConverterComponent from './component.astro';
import GpsCoordinatesConverterSEO from './seo.astro';
import GpsCoordinatesConverterBibliography from './bibliography.astro';

export interface GpsCoordinatesConverterUI {
  [key: string]: string;
}

export type GpsCoordinatesConverterLocaleContent = ToolLocaleContent<GpsCoordinatesConverterUI>;

export const gpsCoordinatesConverter: DronesToolEntry<GpsCoordinatesConverterUI> = {
  id: 'gps-coordinates-converter',
  icons: { bg: 'mdi:map-marker', fg: 'mdi:crosshairs-gps' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const GPS_COORDINATES_CONVERTER_TOOL: ToolDefinition = {
  entry: gpsCoordinatesConverter,
  Component: GpsCoordinatesConverterComponent,
  SEOComponent: GpsCoordinatesConverterSEO,
  BibliographyComponent: GpsCoordinatesConverterBibliography,
};
