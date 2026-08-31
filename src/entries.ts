export { antennaLengthCalculator } from './tool/antenna-length-calculator/entry';
export type { AntennaLengthCalculatorUI, AntennaLengthCalculatorLocaleContent } from './tool/antenna-length-calculator/entry';
export { droneFlightTime } from './tool/drone-flight-time/entry';
export type { DroneFlightTimeUI, DroneFlightTimeLocaleContent } from './tool/drone-flight-time/entry';
export { gpsCoordinatesConverter } from './tool/gps-coordinates-converter/entry';
export type { GpsCoordinatesConverterUI, GpsCoordinatesConverterLocaleContent } from './tool/gps-coordinates-converter/entry';
export { dronePowerAnalyzer } from './tool/drone-power-analyzer/entry';
export type { DronePowerAnalyzerUI, DronePowerAnalyzerLocaleContent } from './tool/drone-power-analyzer/entry';
export { gsdFlightPlanner } from './tool/gsd-flight-planner/entry';
export type { GsdFlightPlannerUI, GsdFlightPlannerLocaleContent } from './tool/gsd-flight-planner/entry';
export { droneBatteryCRatingCalculator } from './tool/drone-battery-c-rating-calculator/entry';
export type { DroneBatteryCRatingCalculatorUI, DroneBatteryCRatingCalculatorLocaleContent } from './tool/drone-battery-c-rating-calculator/entry';
export { fpvDroneThrustToWeightRatio } from './tool/fpv-drone-thrust-to-weight-ratio/entry';
export type { FpvDroneThrustToWeightRatioUI, FpvDroneThrustToWeightRatioLocaleContent } from './tool/fpv-drone-thrust-to-weight-ratio/entry';
export { droneMotorPropellerCalculator } from './tool/drone-motor-propeller-calculator/entry';
export type { DroneMotorPropellerUI, DroneMotorPropellerLocaleContent } from './tool/drone-motor-propeller-calculator/entry';
export { fpvDroneSpeedCalculator } from './tool/fpv-drone-speed-calculator/entry';
export type { FpvDroneSpeedUI, FpvDroneSpeedLocaleContent } from './tool/fpv-drone-speed-calculator/entry';
export { dronesCategory } from './category';

import { antennaLengthCalculator } from './tool/antenna-length-calculator/entry';
import { droneFlightTime } from './tool/drone-flight-time/entry';
import { gpsCoordinatesConverter } from './tool/gps-coordinates-converter/entry';
import { dronePowerAnalyzer } from './tool/drone-power-analyzer/entry';
import { gsdFlightPlanner } from './tool/gsd-flight-planner/entry';
import { droneBatteryCRatingCalculator } from './tool/drone-battery-c-rating-calculator/entry';
import { fpvDroneThrustToWeightRatio } from './tool/fpv-drone-thrust-to-weight-ratio/entry';
import { droneMotorPropellerCalculator } from './tool/drone-motor-propeller-calculator/entry';
import { fpvDroneSpeedCalculator } from './tool/fpv-drone-speed-calculator/entry';

export const ALL_ENTRIES = [
  antennaLengthCalculator,
  droneFlightTime,
  gpsCoordinatesConverter,
  dronePowerAnalyzer,
  gsdFlightPlanner,
  droneBatteryCRatingCalculator,
  fpvDroneThrustToWeightRatio,
  droneMotorPropellerCalculator,
  fpvDroneSpeedCalculator,
];
