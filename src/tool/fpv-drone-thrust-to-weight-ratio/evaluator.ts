import type { AgilityTier } from './logic';
import type { FpvDroneThrustToWeightRatioUI } from './ui';

export interface AgilityEvaluation {
  tier: AgilityTier;
  badgeClass: string;
  title: string;
  description: string;
}

const TIER_CONFIG: Record<AgilityTier, { badgeClass: string; titleKey: keyof FpvDroneThrustToWeightRatioUI; descKey: keyof FpvDroneThrustToWeightRatioUI }> = {
  underpowered: { badgeClass: 'status-danger', titleKey: 'tierUnderpoweredTitle', descKey: 'tierUnderpoweredDesc' },
  cinematic: { badgeClass: 'status-info', titleKey: 'tierCinematicTitle', descKey: 'tierCinematicDesc' },
  freestyle: { badgeClass: 'status-optimal', titleKey: 'tierFreestyleTitle', descKey: 'tierFreestyleDesc' },
  acro_pro: { badgeClass: 'status-accent', titleKey: 'tierAcroProTitle', descKey: 'tierAcroProDesc' },
  racing_extreme: { badgeClass: 'status-warning', titleKey: 'tierRacingExtremeTitle', descKey: 'tierRacingExtremeDesc' },
};

export function evaluateAgilityPresentation(
  tier: AgilityTier,
  ui: FpvDroneThrustToWeightRatioUI
): AgilityEvaluation {
  const cfg = TIER_CONFIG[tier] || TIER_CONFIG.freestyle;
  return {
    tier,
    badgeClass: cfg.badgeClass,
    title: ui[cfg.titleKey],
    description: ui[cfg.descKey],
  };
}
