export interface DroneMissionBatteryReservePlannerUI {
  [key: string]: unknown;
  title: string;
  subtitle: string;
  description: string;
  sections: {
    batteryPropulsion: string;
    flightAtmosphere: string;
  };
  inputs: {
    unitSystemLabel: string;
    metricLabel: string;
    imperialLabel: string;
    presetLabel: string;
    batteryCapacityLabel: string;
    batteryVoltageLabel: string;
    averageCurrentLabel: string;
    cruiseSpeedLabel: string;
    oneWayDistanceLabel: string;
    targetHoverTimeLabel: string;
    windSpeedLabel: string;
    windDirectionLabel: string;
    windHeadwindLabel: string;
    windTailwindLabel: string;
    windCrosswindLabel: string;
    reservePolicyLabel: string;
  };
  presets: {
    mappingSurvey: string;
    fpvRecon: string;
    cinematicInspection: string;
    microRecon: string;
    surveyMeta: string;
    scoutMeta: string;
    hoverMeta: string;
  };
  results: {
    totalCapacityEnergy: string;
    usableEnergy: string;
    reserveEnergyBuffer: string;
    totalAutonomyTime: string;
    maxSafeMissionRadius: string;
    outboundLegTime: string;
    targetHoverTime: string;
    returnLegTime: string;
    totalMissionTime: string;
    remainingEnergyLanding: string;
    feasibilityStatus: string;
    voltageSagSubLabel: string;
    maxRadiusSubLabel: string;
    powerSubLabel: string;
  };
  statusBadges: {
    optimalTitle: string;
    optimalSubtitle: string;
    tightTitle: string;
    tightSubtitle: string;
    criticalTitle: string;
    criticalSubtitle: string;
    exceededTitle: string;
    exceededSubtitle: string;
  };
  chart: {
    batteryProfileTitle: string;
    modelTitle: string;
    windLabel: string;
    homeNode: string;
    targetNode: string;
    landNode: string;
    launchPadLabel: string;
    surveyHoverLabel: string;
    safeRadiusLabel: string;
    outboundSegment: string;
    targetSegment: string;
    returnSegment: string;
    reserveSegment: string;
  };
}
