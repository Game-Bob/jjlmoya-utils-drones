import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-mission-battery-reserve-planner';
const title = 'Drone Mission Battery Reserve Planner';
const description = 'Calculate safe return to home energy margins, aerodynamic wind power penalties, target hover duration and non-linear battery depletion for UAV operations.';

const faqItems = [
  {
    question: 'Why does flying against a headwind consume more power than just flying longer?',
    answer: 'Flying into a headwind requires a steeper pitch angle to overcome aerodynamic drag and maintain groundspeed, increasing total motor thrust and current draw non-linearly.',
  },
  {
    question: 'How is target area hover time factored into the point of no return?',
    answer: 'Operational hover time at the target area subtracts energy directly from the usable battery capacity before calculating the maximum remaining round-trip transit distance.',
  },
  {
    question: 'What causes LiPo voltage sag under heavy load?',
    answer: 'High current draw increases internal resistance losses within lithium cells, reducing effective usable Watt-hours compared to nominal capacity.',
  },
];

const howToSteps = [
  {
    name: 'Enter Battery & Propulsion Specs',
    text: 'Input battery capacity, nominal voltage and average hover cruise current draw.',
  },
  {
    name: 'Set Mission Distance & Target Hover Time',
    text: 'Specify one-way leg distance and expected operational hover duration over the target zone.',
  },
  {
    name: 'Configure Wind Speed & Vector',
    text: 'Select ambient wind speed and heading relative to the outbound leg to apply aerodynamic power penalties.',
  },
  {
    name: 'Review Non-Linear Telemetry & Safe Radius',
    text: 'Analyze the calculated point of no return, leg-by-leg power draw, voltage sag loss and touchdown battery level.',
  },
];

const schemas: DroneMissionBatteryReservePlannerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    step: howToSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Drone Mission Battery Reserve Planner',
    subtitle: 'Calculate safe return to home energy margins, wind legs and mission radii',
    description: 'Plan UAV flight missions with precision battery reserve calculations, headwind adjustments and point of no return safety thresholds.',
    inputs: {
      unitSystemLabel: 'Unit System',
      metricLabel: 'Metric',
      imperialLabel: 'Imperial',
      presetLabel: 'Quick Mission Presets',
      batteryCapacityLabel: 'Battery Capacity',
      batteryVoltageLabel: 'Nominal Voltage',
      averageCurrentLabel: 'Average Hover Cruise Current',
      cruiseSpeedLabel: 'Airspeed Cruise Speed',
      oneWayDistanceLabel: 'One-Way Transit Distance',
      targetHoverTimeLabel: 'Target Area Operational Duration',
      windSpeedLabel: 'Ambient Wind Speed',
      windDirectionLabel: 'Wind Heading Relative to Outbound',
      windHeadwindLabel: 'Headwind Outbound',
      windTailwindLabel: 'Tailwind Outbound',
      windCrosswindLabel: 'Crosswind',
      reservePolicyLabel: 'Safety Reserve Buffer',
    },
    presets: {
      mappingSurvey: 'Orthophoto Mapping Survey',
      fpvRecon: 'FPV Long Range Recon',
      cinematicInspection: 'Cinematic Structural Inspection',
      microRecon: 'Micro Scout Drone Mission',
    },
    results: {
      totalCapacityEnergy: 'Total Energy Capacity',
      usableEnergy: 'Usable Mission Energy',
      reserveEnergyBuffer: 'Reserve Buffer Energy',
      totalAutonomyTime: 'Total Flight Autonomy',
      maxSafeMissionRadius: 'Point of No Return Radius',
      outboundLegTime: 'Outbound Leg Duration',
      targetHoverTime: 'Target Hover Duration',
      returnLegTime: 'Return Leg Duration',
      totalMissionTime: 'Total Transit Duration',
      remainingEnergyLanding: 'Estimated Touchdown Battery Level',
      feasibilityStatus: 'Mission Feasibility Assessment',
    },
    statusBadges: {
      optimalTitle: 'OPTIMAL ENERGY RESERVE MARGIN',
      optimalSubtitle: 'Safe flight envelope with sufficient landing reserve margin',
      tightTitle: 'TIGHT ENERGY RESERVE MARGIN',
      tightSubtitle: 'Low landing reserve margin, monitor battery voltage closely',
      criticalTitle: 'CRITICAL ENERGY WARNING',
      criticalSubtitle: 'Battery reserve breached, initiate Return-to-Home immediately',
      exceededTitle: 'MISSION EXCEEDS SAFE BATTERY CAPACITY',
      exceededSubtitle: 'Insufficient battery energy to complete mission and land safely',
    },
    chart: {
      batteryProfileTitle: 'Battery Energy Depletion Profile',
      outboundSegment: 'Outbound Flight Leg',
      targetSegment: 'Target Operations Hover',
      returnSegment: 'Return to Home Transit',
      reserveSegment: 'Safety Energy Buffer',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Aerodynamic Power Penalties in Headwind Operations',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Flight safety in unmanned aerial vehicle operations relies heavily on non-linear aerodynamic physics. Flying outbound into a headwind requires a steeper pitch angle to overcome aerodynamic drag and maintain groundspeed. This increases motor thrust requirements and current draw exponentially, meaning an outbound headwind leg consumes substantially more Watt-hours per minute than a calm or tailwind return flight.',
    },
    {
      type: 'paragraph',
      html: 'Our planner dynamically computes leg-by-leg power variations, accounting for increased motor loading during headwinds and power reduction during tailwind legs.',
    },
    {
      type: 'title',
      text: 'Factoring Target Area Hover & Survey Duration',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Drones operate over target areas for mapping, photogrammetry, cinematic filming, or inspection tasks. Spending ten minutes hovering over a target area consumes a fixed slice of battery energy, directly reducing the maximum safe transit radius available for outbound and return legs. The point of no return formula subtracts target operational energy prior to solving for transit limits.',
    },
    {
      type: 'list',
      items: [
        'Input planned survey hover duration before calculating mission boundaries.',
        'Account for headwind power spikes on the outbound leg when flying against prevailing winds.',
        'Monitor battery cell voltage sag under load rather than relying solely on open-circuit voltage.',
        'Initiate Return to Home immediately upon reaching your pre-calculated reserve buffer.',
      ],
    },
    {
      type: 'tip',
      title: 'LiPo and LiHV Voltage Sag Warning',
      html: 'High current draw increases internal resistance heat losses inside lithium polymer cells, resulting in voltage sag. High C-rate discharge reduces total usable Watt-hours by five to twelve percent compared to static nominal ratings.',
    },
    {
      type: 'title',
      text: 'UAV Battery Reserve Calculation Formulas',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parameter', 'Formula / Model', 'Unit'],
      rows: [
        ['Gross Energy Capacity', 'Capacity (mAh) x Voltage (V) / 1000', 'Watt-hours (Wh)'],
        ['Voltage Sag Loss', 'Gross Energy x Sag Factor (C-Rate Dependent)', 'Watt-hours (Wh)'],
        ['Headwind Power Draw', 'Base Power x (1 + 0.65 x WindRatio)^1.3', 'Watts (W)'],
        ['Max Safe Radius', '(Usable Energy - Hover Energy) / EnergyPerKmRoundTrip', 'Kilometers (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Best Practices for UAV Flight Planning and Mission Execution',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Always cross-reference automated telemetry logs with pre-flight calculations. Maintaining a detailed log of battery discharge curves, internal resistance readings, and ambient wind conditions ensures high operational safety across all commercial UAV missions.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
