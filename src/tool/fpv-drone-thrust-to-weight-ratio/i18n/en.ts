import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-thrust-to-weight-ratio';
const title = 'FPV Drone Thrust to Weight Ratio and Flight Telemetry Simulator';
const description = 'Simulate static thrust, non-linear throttle response curve, instant vertical G-force, hover throttle point, and 0-100 acceleration for FPV quadcopters and multirotors.';

const ui = {
  title: 'FPV Drone Thrust to Weight Ratio and Flight Telemetry Simulator',
  subtitle: 'Analyze multirotor thrust curves, live throttle stick response, instant G force, and flight agility classification',
  presetsHeader: 'Quick Setup Presets',
  customPreset: 'Custom Setup',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S 3.5-Inch Freestyle',
  freestyle5Preset: '6S 5-Inch Freestyle Pro',
  longrange7Preset: '6S 7-Inch Mountain LR',
  cinelifter8Preset: '8S Heavy Cinelifter X8',
  specsHeader: 'Drone and Powertrain Specifications',
  auwGramsLabel: 'All-Up Weight with Battery (g)',
  motorCountLabel: 'Motor Configuration',
  thrustPerMotorLabel: 'Max Static Thrust per Motor (g)',
  propellerSizeLabel: 'Propeller Diameter (inches)',
  propellerPitchLabel: 'Propeller Pitch (inches)',
  bladeCountLabel: 'Propeller Blade Count',
  blade2Option: '2 Blades (Bipala - Max Efficiency)',
  blade3Option: '3 Blades (Tripala - Freestyle Standard)',
  blade4Option: '4 Blades (Cuatripala - High Grip)',
  throttleStickHeader: 'Live Throttle Stick Simulator',
  throttleStickLabel: 'Throttle Stick Position (%)',
  snapIdleLabel: 'Idle (0%)',
  snapHoverLabel: 'Hover Point',
  snapCruiseLabel: 'Cruise (50%)',
  snapPunchLabel: 'Punch (100%)',
  telemetryHeader: 'FPV Flight Telemetry and Performance Diagnosis',
  twrRatioLabel: 'Thrust to Weight Ratio',
  hoverThrottleLabel: 'Hover Throttle Point',
  currentThrustLabel: 'Current Stick Output Thrust',
  instantGForceLabel: 'Instant Vertical G-Force',
  zeroToHundredLabel: '0-100 km/h Punch-Out Time',
  recommendedCamAngleLabel: 'Recommended FPV Camera Tilt',
  windResistanceLabel: 'Wind Penetration Speed',
  totalMaxThrustLabel: 'Total Maximum Static Thrust',
  maxPitchAngleLabel: 'Max Sustainable Tilt Angle',
  tuningHeader: 'Betaflight PID and Firmware Recommendations',
  tpaRecommendationLabel: 'Throttle PID Attenuation (TPA)',
  dynamicIdleLabel: 'Recommended Dynamic Idle',
  propwashRiskLabel: 'Propwash Control Authority',
  tierUnderpoweredTitle: 'Underpowered or High Wind Drift Risk',
  tierUnderpoweredDesc: 'TWR below 2 to 1 provides insufficient authority for wind correction or rapid descent arrest. Suitable only for calm indoor flying.',
  tierCinematicTitle: 'Cinematic Smooth Cruise',
  tierCinematicDesc: 'TWR between 2 to 1 and 4 to 1 gives smooth throttle control and stable filming with minimal propwash sensitivity.',
  tierFreestyleTitle: 'Sport and Agile Freestyle',
  tierFreestyleDesc: 'TWR between 4 to 1 and 8 to 1 delivers crisp throttle response, clean split-S recovery, and strong acro maneuverability.',
  tierAcroProTitle: 'High-Performance Acro and Bando Freestyle',
  tierAcroProDesc: 'TWR between 8 to 1 and 13 to 1 delivers explosive vertical acceleration, instant propwash cancellation, and aggressive proximity agility.',
  tierRacingExtremeTitle: 'Extreme Spec Drone Racing',
  tierRacingExtremeDesc: 'TWR above 13 to 1 yields insane power and instantaneous corner exit speeds required for top-tier competitive multirotor racing.',
  hudThrustCurveTitle: 'Non-Linear Thrust Response Curve',
  hudHoverMarker: 'Hover Point',
  hudCurrentStickMarker: 'Current Stick',
  hudGForceLabel: 'Vertical Gs',
  hudTiltAngleLabel: 'Camera Angle',
  hudVectorPowerLabel: 'Live Powertrain Telemetry',
};

const faqItems = [
  {
    question: 'What is a good thrust to weight ratio for an FPV freestyle quadcopter?',
    answer: 'For freestyle quadcopters, a TWR between 8 to 1 and 12 to 1 delivers the necessary explosive acceleration to arrest free-fall dives and power through high-G split-S turns.',
  },
  {
    question: 'How does the non-linear throttle curve affect drone hovering?',
    answer: 'Brushless motors produce aerodynamic thrust proportional to the square of rotational speed. Because of this non-linear response, hover throttle typically sits around 20 to 35 percent stick position on high-power builds.',
  },
  {
    question: 'Why does FPV camera angle depend on drone thrust to weight ratio?',
    answer: 'Higher TWR aircraft travel at higher cruising speeds with steeper forward tilt angles. To keep the horizon centered in the FPV goggles during fast forward flight, pilots tilt the camera upwards between 35 and 50 degrees.',
  },
  {
    question: 'How does propeller blade count change multirotor flight feel?',
    answer: 'Bipala propellers offer maximum flight endurance and high top speed. Tripala propellers provide the best balance of grip and cornering authority for freestyle. Cuatripala propellers deliver extreme low-end bite and braking power.',
  },
];

const howToSteps = [
  {
    name: 'Select Preset or Input Drone All-Up Weight',
    text: 'Enter the total weight of your drone including battery, HD camera, and accessories in grams.',
  },
  {
    name: 'Configure Powertrain and Propellers',
    text: 'Select the motor count, blade count, and manufacturer bench static thrust per motor.',
  },
  {
    name: 'Adjust the Live Throttle Stick',
    text: 'Drag the live throttle slider or click the quick snap buttons to observe thrust vector scaling, instantaneous G-force, and power output along the non-linear curve.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodynamics of Thrust to Weight Ratio in FPV Drone Flight Dynamics',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Thrust-to-weight ratio (TWR) defines the fundamental acceleration and control authority of multirotor aircraft. In FPV freestyle and drone racing, having adequate thrust headroom allows pilots to instantly recover from steep power loops, execute wall-rides, and punch out of terminal velocity dives. Understanding your power-to-weight profile is critical for motor selection, ESC sizing, and PID tuning.',
  },
  {
    type: 'title',
    text: 'FPV Drone Classification and Performance Benchmark Metrics',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Drone Platform', 'Typical AUW', 'Target TWR', 'Hover Stick %', '0-100 km/h Acceleration', 'FPV Cam Tilt'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 to 1', '35 percent', '1.20 s', '15 deg to 25 deg'],
      ['4S 3.5-Inch Freestyle', '250g', '12.0 to 1', '24 percent', '0.28 s', '35 deg to 45 deg'],
      ['6S 5-Inch Bando Pro', '680g', '11.5 to 1', '25 percent', '0.30 s', '35 deg to 50 deg'],
      ['6S 7-Inch Mountain LR', '1150g', '8.3 to 1', '30 percent', '0.45 s', '20 deg to 30 deg'],
      ['8S Heavy Cinelifter X8', '4200g', '6.1 to 1', '38 percent', '0.70 s', '15 deg to 25 deg'],
    ],
  },
  {
    type: 'title',
    text: 'Understanding Non-Linear Throttle Response and Motor Thrust Curves',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Electric brushless motors and propellers do not generate thrust linearly with PWM control signals. Dynamic airflow velocity and centrifugal blade loading yield an exponential power curve where the top 20 percent of throttle travel produces over 40 percent of total available thrust. Managing this non-linear response with Betaflight throttle expo (EXPO) and throttle mid-point (MID) calibration provides intuitive stick resolution during close-proximity flight.',
  },
  {
    type: 'list',
    items: [
      'Hover region (20-35% throttle): Fine resolution zone for steady position control and indoor maneuvering.',
      'Cruising zone (35-65% throttle): Balanced aerodynamic forward flight with sustainable battery current draw.',
      'Punch-out zone (70-100% throttle): High discharge burst yielding massive vertical G-forces and top speeds exceeding 150 km/h.',
    ],
  },
  {
    type: 'title',
    text: 'Propeller Blade Selection and Motor Stator Matching',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Propeller diameter, pitch, and blade count determine how motor torque translates into static thrust and top-end speed. Increasing blade count from bipala to tripala improves low-end grip and propwash recovery at the expense of slight aerodynamic drag. Choosing matching motor stator dimensions and KV ratings ensures efficient operation without excessive motor heat.',
  },
  {
    type: 'tip',
    title: 'Betaflight TPA and Feedforward Tuning Tip',
    html: 'For drones with TWR exceeding 10 to 1, configure Throttle PID Attenuation (TPA) starting at 1250 throttle with a 0.65 breakpoint. This prevents high-throttle D-term motor oscillations during aggressive full-throttle straightaways.',
  },
];

const schemas: FpvDroneThrustToWeightRatioLocaleContent['schemas'] = [
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

export const content: FpvDroneThrustToWeightRatioLocaleContent = {
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
