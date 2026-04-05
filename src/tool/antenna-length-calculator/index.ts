import type { DronesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import AntennaLengthCalculatorComponent from './component.astro';
import AntennaLengthCalculatorSEO from './seo.astro';
import AntennaLengthCalculatorBibliography from './bibliography.astro';

export interface AntennaLengthCalculatorUI {
  [key: string]: string;
}

export type AntennaLengthCalculatorLocaleContent = ToolLocaleContent<AntennaLengthCalculatorUI>;

export const antennaLengthCalculator: DronesToolEntry<AntennaLengthCalculatorUI> = {
  id: 'antenna-length-calculator',
  icons: { bg: 'mdi:antenna', fg: 'mdi:sine-wave' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const ANTENNA_LENGTH_CALCULATOR_TOOL: ToolDefinition = {
  entry: antennaLengthCalculator,
  Component: AntennaLengthCalculatorComponent,
  SEOComponent: AntennaLengthCalculatorSEO,
  BibliographyComponent: AntennaLengthCalculatorBibliography,
};
