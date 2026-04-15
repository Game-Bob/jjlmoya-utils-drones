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
    de: () => import('./i18n/de').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
  },
};

export const ANTENNA_LENGTH_CALCULATOR_TOOL: ToolDefinition = {
  entry: antennaLengthCalculator,
  Component: AntennaLengthCalculatorComponent,
  SEOComponent: AntennaLengthCalculatorSEO,
  BibliographyComponent: AntennaLengthCalculatorBibliography,
};
