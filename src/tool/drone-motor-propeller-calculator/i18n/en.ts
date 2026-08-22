import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'drone-motor-propeller-calculator';
const title = 'Drone Motor and Propeller Calculator';
const description = 'Estimate drone motor thrust, loaded RPM, propeller speed, power and current from KV, battery voltage, propeller geometry and aircraft weight.';

const ui = {
  presetsHeader: 'Start with a flight profile',
  presetTinyCruiser: 'Tiny cruiser',
  presetFreestyle: 'Five inch freestyle',
  presetLongRange: 'Seven inch long range',
  presetCinelifter: 'Eight motor cinelifter',
  unitHeader: 'Display units',
  metricUnit: 'Metric',
  imperialUnit: 'Imperial',
  setupHeader: 'Powertrain and airframe',
  motorKvLabel: 'Motor KV (RPM/V)',
  batteryVoltageLabel: 'Battery voltage',
  propDiameterLabel: 'Propeller diameter',
  propPitchLabel: 'Propeller pitch',
  bladeCountLabel: 'Blade count',
  motorCountLabel: 'Motor count',
  droneWeightLabel: 'Ready to fly weight',
  benchDataHeader: 'Manufacturer test point',
  benchThrustLabel: 'Thrust per motor',
  benchVoltageLabel: 'Test voltage',
  optionalLabel: 'Optional',
  twoBlades: '2 blades',
  threeBlades: '3 blades',
  fourBlades: '4 blades',
  twoMotors: '2 motors',
  fourMotors: '4 motors',
  sixMotors: '6 motors',
  eightMotors: '8 motors',
  resultsHeader: 'The lift picture',
  estimatedLabel: 'Physics estimate.',
  benchBasedLabel: 'Bench point scaled.',
  loadedRpmLabel: 'Loaded speed',
  pitchSpeedLabel: 'Ideal pitch speed',
  thrustPerMotorLabel: 'Thrust per motor',
  totalThrustLabel: 'Total static thrust',
  totalPowerLabel: 'Estimated power',
  totalCurrentLabel: 'Estimated current',
  thrustMarginLabel: 'Lift margin',
  hoverThrottleLabel: 'Hover throttle',
  sceneCaption: 'loaded propeller speed',
  underpoweredStatus: 'Low margin',
  workableStatus: 'Usable margin',
  headroomStatus: 'Strong headroom',
  underpoweredAdvice: 'The model leaves less than two times the aircraft weight available. Expect limited recovery authority and little room for wind or battery sag.',
  workableAdvice: 'This setup has a practical reserve for normal flight. Check the motor and ESC temperature after a sustained hover before trusting the estimate.',
  headroomAdvice: 'This setup has a generous static lift reserve. High reserve can improve control authority, but it can also demand more current and stress the powertrain.',
  sourceNote: 'A manufacturer point calibrates thrust only. Power and current remain model estimates.',
  modelSourceNote: 'No test point. Thrust uses the transparent coefficient model.',
  manufacturerNote: 'Use a test point from the same motor, propeller and voltage whenever possible.',
  modelNote: 'Static thrust, current and power are estimates. Real results depend on propeller design, air density, motor losses, ESC timing and battery sag.',
  safetyNote: 'Never use this estimate as a substitute for a real thrust stand test. Confirm motor, ESC, battery and propeller limits before flight.',
  thrustAxisLabel: 'Lift direction',
  weightAxisLabel: 'Aircraft weight',
  clearBenchData: 'Clear test point',
};

const faq = [
  {
    question: 'What does a drone motor thrust calculator estimate?',
    answer: 'It estimates loaded motor RPM, ideal propeller pitch speed, thrust per motor, total static thrust, power and current from motor KV, battery voltage, propeller geometry, motor count and aircraft weight.',
  },
  {
    question: 'How do I match a drone motor to a propeller?',
    answer: 'Start with the motor KV, battery voltage and propeller size recommended by the manufacturer. Then compare total static thrust with ready to fly weight and verify current and temperature on a real thrust stand before flight.',
  },
  {
    question: 'Why is a manufacturer thrust point better than a model estimate?',
    answer: 'A manufacturer test point includes the real motor, propeller and test conditions. The calculator scales that point to the selected voltage and loaded RPM, while the coefficient model is a useful first pass when no test data is available.',
  },
  {
    question: 'How does propeller size affect drone thrust?',
    answer: 'Static thrust depends strongly on propeller diameter and rotational speed. A larger propeller can move more air, but it also demands more torque and power from the motor and ESC.',
  },
  {
    question: 'Can this calculator confirm that a drone is safe to fly?',
    answer: 'No. It is a planning estimate, not a safety certification. Verify real current, temperature, thrust and battery performance with a suitable test stand and follow the limits published by the component manufacturers.',
  },
];

const howTo = [
  {
    name: 'Choose a flight profile',
    text: 'Select the closest preset to load sensible starting values for motor KV, battery voltage, propeller geometry, motor count and aircraft weight.',
  },
  {
    name: 'Enter the airframe and propeller data',
    text: 'Enter the ready to fly weight and the motor and propeller specifications. Switch between metric and imperial display units without changing the physical setup.',
  },
  {
    name: 'Add a measured test point',
    text: 'If you have manufacturer or thrust stand data, enter thrust per motor and its test voltage. The result will use that point instead of the generic thrust coefficient model.',
  },
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'How Drone Motor and Propeller Matching Works',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A motor and propeller pairing is a balance between rotational speed, propeller diameter, pitch, blade count, battery voltage and available torque. This drone motor thrust calculator turns those inputs into a readable first estimate of static lift and electrical demand. The lift picture compares total thrust with the ready to fly aircraft weight so you can see the reserve before buying or testing parts.',
  },
  {
    type: 'title',
    text: 'What the Calculator Shows',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Result', 'What it means'],
    rows: [
      ['Loaded speed', 'A no load KV estimate reduced by a simple loaded factor'],
      ['Static thrust', 'Thrust per motor and total lift across the selected motor count'],
      ['Lift margin', 'Total static thrust compared with ready to fly weight'],
      ['Power and current', 'Estimated electrical demand for the selected battery voltage'],
    ],
  },
  {
    type: 'title',
    text: 'How to Use the Drone Motor Calculator',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Enter motor KV and battery voltage to estimate loaded RPM and ideal pitch speed.',
      'Choose the propeller diameter, pitch, blade count, motor count and ready to fly weight.',
      'Add a thrust stand or manufacturer point from the same powertrain when available.',
      'Verify current, temperature and real thrust before flight because model outputs are not safety limits.',
    ],
  },
  {
    type: 'title',
    text: 'Why Test Data Matters',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Propeller thrust is commonly expressed with a thrust coefficient that depends on air density, rotational speed and propeller diameter. Real propeller geometry and motor losses still matter, so a measured manufacturer point from the same powertrain is the most useful input. Entering that point lets the tool show a calibrated estimate while keeping the assumptions visible.',
  },
  {
    type: 'tip',
    title: 'Use the result as a test plan',
    html: 'Start with the lowest risk preset, verify current and motor temperature on a thrust stand, then repeat the test with the battery fully charged and partly discharged. Treat any unexpected current spike or heat rise as a reason to stop.',
  },
];

const schemas: DroneMotorPropellerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
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
    step: howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMotorPropellerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography: BIBLIOGRAPHY_ITEMS,
  howTo,
  schemas,
};
