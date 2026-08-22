import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'drone-battery-c-rating-calculator';
const title = 'Drone LiPo Battery C Rating and Continuous Discharge Calculator';
const description = 'Calculate continuous discharge current, realistic C rating, voltage sag, and flight safety for drone LiPo batteries based on internal resistance and quadcopter motor draw.';

const ui = {
  title: 'Drone LiPo Battery C Rating Calculator',
  subtitle: 'Analyze realistic continuous discharge, burst requirements, and voltage sag for quadcopters',
  lipoSpecsHeader: 'Battery Specifications',
  capacityLabel: 'Capacity (mAh)',
  claimedCRatingLabel: 'Claimed C Rating',
  cellCountLabel: 'Cell Count (Series)',
  chemistryLabel: 'Battery Chemistry',
  internalResistanceLabel: 'Internal Resistance per Cell (mΩ)',
  quadSpecsHeader: 'Quadcopter Power Draw',
  motorCountLabel: 'Motor Count',
  peakMotorCurrentLabel: 'Peak Motor Current (Amps)',
  auxCurrentLabel: 'Auxiliary Draw (VTX, FC, Cam) (Amps)',
  presetSelectLabel: 'Quick Setup Presets',
  customPreset: 'Custom Setup',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5-Inch Freestyle',
  cinewhoopPreset: '4S 3-Inch CineWhoop',
  longRange7Preset: '6S 7-Inch Long Range',
  racing5Preset: '6S 5-Inch Racing',
  resultsHeader: 'Power and Performance Analysis',
  claimedMaxCurrentLabel: 'Claimed Max Current',
  realisticCRatingLabel: 'Realistic Continuous C Rating',
  realisticMaxCurrentLabel: 'Realistic Continuous Current',
  totalPeakDrawLabel: 'Total Peak Power Draw',
  voltageSagLabel: 'Estimated Voltage Sag',
  sagNominalVoltageLabel: 'Nominal Voltage Under Load',
  flightTimeFullThrottleLabel: 'Full Throttle Runtime',
  flightTimeHoverLabel: 'Estimated Hover Runtime',
  safetyStatusLabel: 'Battery Safety Rating',
  statusOptimalTitle: 'Safe and Optimal Battery Match',
  statusOptimalDesc: 'Your battery can comfortably supply peak current with minimal heat generation and minimal voltage sag. Extended cell lifespan expected.',
  statusWarningTitle: 'Moderate Thermal and Voltage Stress',
  statusWarningDesc: 'Peak current draw is close to the realistic battery limit. Expect noticeable voltage sag under full throttle punches.',
  statusDangerTitle: 'High Overcurrent and Sag Risk',
  statusDangerDesc: 'Quadcopter peak draw exceeds realistic battery capabilities. High risk of heavy voltage sag, cell overheating, and premature battery degradation.',
  lipoVisualizerTitle: 'Live LiPo Status Visualizer',
  cellVoltageLabel: 'Cell Voltage',
  batteryHealthLabel: 'Battery Stress Status',
  burstRatingRequiredLabel: 'Required Burst C Rating',
  currentRatioLabel: 'Power Margin Load Ratio',
};

const faqItems = [
  {
    question: 'What is C rating in drone LiPo batteries?',
    answer: 'The C rating represents the maximum continuous discharge rate relative to the battery capacity. For example, a 1500mAh battery rated at 100C can theoretically supply 150 Amps.',
  },
  {
    question: 'Why is claimed C rating often higher than actual performance?',
    answer: 'Manufacturers frequently advertise burst or marketing C ratings measured under non-repeatable conditions. Actual continuous output depends heavily on internal resistance per cell.',
  },
  {
    question: 'How does internal resistance affect voltage sag and heat?',
    answer: 'Higher internal resistance acts as an unwanted resistor inside each cell. Under heavy current draw, this resistance causes voltage drop (sag) and dissipates heat, reducing power efficiency.',
  },
  {
    question: 'How can I prevent voltage sag during freestyle maneuvers?',
    answer: 'Use high-quality low-IR cells, select an appropriate C rating margin of at least 15 percent above peak quadcopter draw, and avoid flying below 3.5V per cell at rest.',
  },
];

const howToSteps = [
  {
    name: 'Select Preset or Enter Battery Specifications',
    text: 'Input the battery capacity in mAh, claimed C rating, cell series count, and average internal resistance per cell.',
  },
  {
    name: 'Configure Quadcopter Power Draw',
    text: 'Enter the number of motors, maximum per-motor current draw at full throttle, and auxiliary system consumption.',
  },
  {
    name: 'Review Safety Status and Realistic Amperage',
    text: 'Compare the realistic continuous amperage against the quadcopter peak current draw to verify safe operation.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Understanding Drone LiPo C Rating and Real Power Output',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Choosing the correct LiPo battery for an FPV drone or RC aircraft requires understanding the relationship between battery capacity, C rating, and motor current consumption. While battery manufacturers frequently state C ratings of 100C or 150C, real-world continuous discharge capabilities are bounded by internal resistance and thermal dissipation limits. This calculator evaluates realistic continuous discharge amperage, providing drone pilots with accurate power headroom predictions.',
  },
  {
    type: 'title',
    text: 'Comparison of RC Battery Chemistries',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Chemistry', 'Nominal V', 'Max Cell V', 'Energy Density', 'Peak Discharge', 'Best Use Case'],
    rows: [
      ['LiPo (Standard)', '3.7V', '4.20V', 'High', '100C - 150C', '5-Inch Freestyle and Racing FPV'],
      ['LiHV (High Voltage)', '3.8V', '4.35V', 'Very High', '80C - 120C', 'TinyWhoops and Micro Quads'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Maximum', '15C - 35C', '7-Inch Long Range Endurance'],
      ['LiFePO4', '3.3V', '3.65V', 'Moderate', '30C - 50C', 'Ground Stations and Field Chargers'],
    ],
  },
  {
    type: 'title',
    text: 'Impact of Voltage Sag and Internal Resistance on Quadcopter Performance',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Voltage sag is the sudden drop in battery voltage experienced under heavy throttle acceleration. As current passes through the internal resistance of each cell, energy is converted into heat instead of thrust. A battery with higher internal resistance will suffer severe sag, triggering low voltage warnings on the FPV OSD telemetric display even when battery capacity remains high. Monitoring cell resistance in milliohms is essential for diagnosing aging or degraded LiPo packs.',
  },
  {
    type: 'list',
    items: [
      'Low Internal Resistance (1-4 mΩ per cell): Excellent punch, minimal sag, cool running temperatures.',
      'Moderate Internal Resistance (5-10 mΩ per cell): Standard freestyle performance, slight sag under full throttle.',
      'High Internal Resistance (>12 mΩ per cell): Noticeable power loss, severe sag, battery gets hot quickly.',
    ],
  },
  {
    type: 'title',
    text: 'Optimizing Battery Selection for Freestyle Racing and Long Range Drones',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Different quadcopter flight styles impose vastly different discharge requirements on LiPo cells. 5-inch FPV freestyle and racing rigs produce short, high-intensity current spikes exceeding 120 Amps total draw. In contrast, 7-inch long-range endurance drones rely on steady, low-amperage cruise profiles where energy density and battery weight take priority. Utilizing this calculator ensures that your power train matches your battery specs perfectly, extending pack life and preventing unexpected mid-air brownouts.',
  },
  {
    type: 'tip',
    title: 'LiPo Storage and Maintenance Guidelines',
    html: 'Always store your LiPo batteries at 3.80V to 3.85V per cell when not in use. Leaving packs fully charged for more than 48 hours permanently increases internal resistance, degrades capacity, and reduces peak discharge performance.',
  },
];

const schemas: DroneBatteryCRatingCalculatorLocaleContent['schemas'] = [
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
    description,
    step: howToSteps.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.name,
      text: s.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneBatteryCRatingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo: seoSections,
  faq: faqItems,
  howTo: howToSteps,
  bibliography: BIBLIOGRAPHY_ITEMS,
  schemas,
};
