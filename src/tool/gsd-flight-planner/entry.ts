import type { DronesToolEntry, ToolLocaleContent } from '../../types';

export interface GsdFlightPlannerUI {
  [key: string]: string;
}

export type GsdFlightPlannerLocaleContent = ToolLocaleContent<GsdFlightPlannerUI>;

export const gsdFlightPlanner: DronesToolEntry<GsdFlightPlannerUI> = {
  id: 'gsd-flight-planner',
  icons: { bg: 'mdi:drone', fg: 'mdi:map-marker-distance' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
  },
};
