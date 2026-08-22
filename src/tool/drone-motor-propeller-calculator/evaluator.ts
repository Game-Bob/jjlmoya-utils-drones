import type { DroneMotorResults } from './logic';

export type SetupStatus = 'underpowered' | 'workable' | 'headroom';

export interface SetupEvaluation {
  status: SetupStatus;
  score: number;
}

export function evaluateSetup(results: DroneMotorResults): SetupEvaluation {
  if (results.thrustToWeight < 2) return { status: 'underpowered', score: results.thrustToWeight };
  if (results.thrustToWeight < 3.5) return { status: 'workable', score: results.thrustToWeight };
  return { status: 'headroom', score: results.thrustToWeight };
}
