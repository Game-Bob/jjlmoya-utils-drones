import type { DronesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import DroneFlightTimeComponent from './component.astro';
import DroneFlightTimeSEO from './seo.astro';
import DroneFlightTimeBibliography from './bibliography.astro';

export interface DroneFlightTimeUI {
  [key: string]: string;
}

export type DroneFlightTimeLocaleContent = ToolLocaleContent<DroneFlightTimeUI>;

export const droneFlightTime: DronesToolEntry<DroneFlightTimeUI> = {
  id: 'drone-flight-time',
  icons: { bg: 'mdi:drone', fg: 'mdi:timer-sand' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const DRONE_FLIGHT_TIME_TOOL: ToolDefinition = {
  entry: droneFlightTime,
  Component: DroneFlightTimeComponent,
  SEOComponent: DroneFlightTimeSEO,
  BibliographyComponent: DroneFlightTimeBibliography,
};
