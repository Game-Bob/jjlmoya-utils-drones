import { droneMotorPropellerCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const DRONE_MOTOR_PROPELLER_CALCULATOR_TOOL: ToolDefinition = {
  entry: droneMotorPropellerCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
