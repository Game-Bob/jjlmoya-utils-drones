import type { ToolDefinition } from '../../types';
import { droneMissionBatteryReservePlanner } from './entry';

export * from './entry';

export const DRONE_MISSION_BATTERY_RESERVE_PLANNER_TOOL: ToolDefinition = {
  entry: droneMissionBatteryReservePlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
