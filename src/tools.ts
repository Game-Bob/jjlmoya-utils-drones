import { DRONE_FLIGHT_TIME_TOOL } from './tool/drone-flight-time/index';
import { ANTENNA_LENGTH_CALCULATOR_TOOL } from './tool/antenna-length-calculator/index';
import { GPS_COORDINATES_CONVERTER_TOOL } from './tool/gps-coordinates-converter/index';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  DRONE_FLIGHT_TIME_TOOL,
  ANTENNA_LENGTH_CALCULATOR_TOOL,
  GPS_COORDINATES_CONVERTER_TOOL,
];

export {
  DRONE_FLIGHT_TIME_TOOL,
  ANTENNA_LENGTH_CALCULATOR_TOOL,
  GPS_COORDINATES_CONVERTER_TOOL,
};
