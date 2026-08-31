import type { DronesCategoryEntry } from '../types';
import { droneFlightTime } from '../tool/drone-flight-time/entry';
import { antennaLengthCalculator } from '../tool/antenna-length-calculator/entry';
import { gpsCoordinatesConverter } from '../tool/gps-coordinates-converter/entry';
import { dronePowerAnalyzer } from '../tool/drone-power-analyzer/entry';
import { gsdFlightPlanner } from '../tool/gsd-flight-planner/entry';
import { droneBatteryCRatingCalculator } from '../tool/drone-battery-c-rating-calculator/entry';
import { fpvDroneThrustToWeightRatio } from '../tool/fpv-drone-thrust-to-weight-ratio/entry';
import { droneMotorPropellerCalculator } from '../tool/drone-motor-propeller-calculator/entry';
import { fpvDroneSpeedCalculator } from '../tool/fpv-drone-speed-calculator/entry';
import { droneMissionBatteryReservePlanner } from '../tool/drone-mission-battery-reserve-planner/entry';

export const dronesCategory: DronesCategoryEntry = {
  icon: 'mdi:drone',
  tools: [
    droneFlightTime,
    antennaLengthCalculator,
    gpsCoordinatesConverter,
    dronePowerAnalyzer,
    gsdFlightPlanner,
    droneBatteryCRatingCalculator,
    fpvDroneThrustToWeightRatio,
    droneMotorPropellerCalculator,
    fpvDroneSpeedCalculator,
    droneMissionBatteryReservePlanner,
  ],
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
