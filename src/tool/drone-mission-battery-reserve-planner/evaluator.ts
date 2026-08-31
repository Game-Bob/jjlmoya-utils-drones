import type { MissionResults } from './logic';
import type { DroneMissionBatteryReservePlannerUI } from './ui';

export interface EvaluatorBadge {
  label: string;
  className: string;
}

export function evaluateMissionStatus(
  results: MissionResults,
  uiBadges: DroneMissionBatteryReservePlannerUI['statusBadges']
): EvaluatorBadge {
  switch (results.statusKey) {
    case 'optimal':
      return { label: uiBadges.optimal, className: 'status-badge--optimal' };
    case 'tight':
      return { label: uiBadges.tight, className: 'status-badge--tight' };
    case 'critical':
      return { label: uiBadges.critical, className: 'status-badge--critical' };
    case 'exceeded':
      return { label: uiBadges.exceeded, className: 'status-badge--exceeded' };
  }
}
