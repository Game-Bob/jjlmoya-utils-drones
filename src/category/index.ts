import type { DronesCategoryEntry } from '../types';
import { droneFlightTime } from '../tool/drone-flight-time/index';
import { antennaLengthCalculator } from '../tool/antenna-length-calculator/index';
import { gpsCoordinatesConverter } from '../tool/gps-coordinates-converter/index';

export const dronesCategory: DronesCategoryEntry = {
  icon: 'mdi:drone',
  tools: [droneFlightTime, antennaLengthCalculator, gpsCoordinatesConverter],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

