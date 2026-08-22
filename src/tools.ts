export { ALL_ENTRIES } from './entries';
import { DRONE_FLIGHT_TIME_TOOL } from './tool/drone-flight-time/index';
import { ANTENNA_LENGTH_CALCULATOR_TOOL } from './tool/antenna-length-calculator/index';
import { GPS_COORDINATES_CONVERTER_TOOL } from './tool/gps-coordinates-converter/index';
import { DRONE_POWER_ANALYZER_TOOL } from './tool/drone-power-analyzer/index';
import { GSD_FLIGHT_PLANNER_TOOL } from './tool/gsd-flight-planner/index';
import { DRONE_BATTERY_C_RATING_CALCULATOR_TOOL } from './tool/drone-battery-c-rating-calculator/index';
import { FPV_DRONE_THRUST_TO_WEIGHT_RATIO_TOOL } from './tool/fpv-drone-thrust-to-weight-ratio/index';
import { DRONE_MOTOR_PROPELLER_CALCULATOR_TOOL } from './tool/drone-motor-propeller-calculator/index';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  DRONE_FLIGHT_TIME_TOOL,
  ANTENNA_LENGTH_CALCULATOR_TOOL,
  GPS_COORDINATES_CONVERTER_TOOL,
  DRONE_POWER_ANALYZER_TOOL,
  GSD_FLIGHT_PLANNER_TOOL,
  DRONE_BATTERY_C_RATING_CALCULATOR_TOOL,
  FPV_DRONE_THRUST_TO_WEIGHT_RATIO_TOOL,
  DRONE_MOTOR_PROPELLER_CALCULATOR_TOOL,
];

export {
  DRONE_FLIGHT_TIME_TOOL,
  ANTENNA_LENGTH_CALCULATOR_TOOL,
  GPS_COORDINATES_CONVERTER_TOOL,
  DRONE_POWER_ANALYZER_TOOL,
  GSD_FLIGHT_PLANNER_TOOL,
  DRONE_BATTERY_C_RATING_CALCULATOR_TOOL,
  FPV_DRONE_THRUST_TO_WEIGHT_RATIO_TOOL,
  DRONE_MOTOR_PROPELLER_CALCULATOR_TOOL,
};
