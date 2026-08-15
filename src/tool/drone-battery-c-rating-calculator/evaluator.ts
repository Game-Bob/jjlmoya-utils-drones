import type { SafetyStatus } from './logic';
import type { DroneBatteryCRatingCalculatorUI } from './ui';

export interface SafetyEvaluation {
  status: SafetyStatus;
  badgeClass: string;
  title: string;
  description: string;
}

export function evaluateSafetyPresentation(
  status: SafetyStatus,
  ui: DroneBatteryCRatingCalculatorUI
): SafetyEvaluation {
  if (status === 'optimal') {
    return {
      status,
      badgeClass: 'status-optimal',
      title: ui.statusOptimalTitle,
      description: ui.statusOptimalDesc,
    };
  }
  if (status === 'warning') {
    return {
      status,
      badgeClass: 'status-warning',
      title: ui.statusWarningTitle,
      description: ui.statusWarningDesc,
    };
  }
  return {
    status,
    badgeClass: 'status-danger',
    title: ui.statusDangerTitle,
    description: ui.statusDangerDesc,
  };
}
