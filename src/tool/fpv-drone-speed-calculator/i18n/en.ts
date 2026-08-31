import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { FpvDroneSpeedLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-speed-calculator';
const title = 'FPV Drone Speed Calculator';
const description = 'Estimate an FPV drone propeller speed from motor KV, battery voltage, propeller pitch, efficiency and aircraft mass, with slip and sensitivity shown separately.';

const ui = {
  presetsLabel: 'Start with a flight setup', presetRacing: 'Racing 4S', presetFreestyle: 'Freestyle 6S', presetCruiser: 'Cruiser 7 inch',
  unitsLabel: 'Display units', metricUnit: 'Metric', imperialUnit: 'Imperial', inputsLabel: 'Flight recipe', motorKvLabel: 'Motor KV', batteryVoltageLabel: 'Battery voltage', propellerPitchLabel: 'Propeller pitch', efficiencyLabel: 'Efficiency estimate', aircraftMassLabel: 'Aircraft mass', calculateFromLabel: 'Build the estimate from five inputs', resultsLabel: 'Flight trace', estimatedSpeedLabel: 'Estimated forward speed', pitchSpeedLabel: 'No-slip pitch speed', loadedRpmLabel: 'Loaded motor speed', noLoadRpmLabel: 'No-load RPM', slipLabel: 'Speed left as slip', loadEffectLabel: 'Load correction', speedLaneLabel: 'Propeller speed lane', sensitivityLabel: 'One change at a time', lowerPitchLabel: 'Lower pitch', selectedPitchLabel: 'Selected pitch', higherPitchLabel: 'Higher pitch', diagnosisLabel: 'Reading', diagnosisPlanning: 'Planning estimate', diagnosisHighSlip: 'High slip', diagnosisHeavyLoad: 'Heavy load', diagnosisOverspeed: 'Check RPM', diagnosisPlanningAdvice: 'Use this as a first sizing estimate, then compare it with a manufacturer chart or a thrust-stand test.', diagnosisHighSlipAdvice: 'The selected efficiency leaves a wide gap between geometric pitch speed and forward speed. Check propeller loading, battery sag and motor temperature.', diagnosisHeavyLoadAdvice: 'The aircraft mass makes the load correction more influential. Treat the speed as a broad planning range and validate the complete powertrain.', diagnosisOverspeedAdvice: 'The no-load RPM is unusually high for this setup. Check the motor, battery and propeller limits before applying power.', assumptionsLabel: 'Model boundary.', assumptionsText: 'Pitch speed is geometric: pitch x loaded RPM. Efficiency is a user-entered proxy for slip; aircraft mass applies a small transparent load correction. The model has no propeller diameter, thrust curve or wind data.', safetyText: 'This is not a flight guarantee. Keep clear of the propeller and validate current, temperature, vibration and speed in a controlled test.', speedAxisStart: '0 km/h', speedAxisEnd: '300 km/h', noLoadCaption: 'no-load', loadedCaption: 'loaded', slipCaption: 'slip', massUnit: 'g', speedUnit: 'km/h',
} satisfies Record<string, string>;

const faq = [
  { question: 'How is FPV drone pitch speed calculated?', answer: 'The calculator multiplies propeller pitch by loaded revolutions per minute and converts inches per revolution into kilometres per hour. That is a geometric no-slip speed, not a promise of airspeed.' },
  { question: 'What does efficiency mean in this speed estimate?', answer: 'Efficiency is an explicit planning proxy for the gap between geometric pitch speed and estimated forward speed. It does not replace a propeller performance map or a flight test.' },
  { question: 'Why does aircraft mass affect the result?', answer: 'A heavier aircraft generally loads the powertrain more, so the tool applies a small bounded RPM correction. Without propeller diameter, thrust data and motor torque data, this correction is only a transparent heuristic.' },
  { question: 'Can this calculator confirm my drone is safe to fly?', answer: 'No. It cannot validate a motor, ESC, battery, propeller, frame or flight controller. Check manufacturer limits and verify the setup on a restrained test stand before flight.' },
  { question: 'Why is the real speed lower than pitch speed?', answer: 'Geometric pitch assumes the propeller advances its stated distance every revolution. Slip, blade shape, airflow, voltage sag, loading and installation losses reduce the useful forward speed.' },
];

const howTo = [
  { name: 'Enter the powertrain', text: 'Enter motor KV and the battery voltage you expect under load, not only the nominal pack label.' },
  { name: 'Describe the propeller and aircraft', text: 'Enter geometric pitch, a conservative efficiency estimate and ready-to-fly aircraft mass. Use the presets when you need a starting point.' },
  { name: 'Read the trace and validate it', text: 'Compare estimated speed with no-slip pitch speed, slip and the pitch sensitivity view. Treat the result as a test plan and verify the complete powertrain safely.' },
];

const seo: SEOSection[] = [
  { type: 'title', text: 'Estimate FPV Drone Speed from Propeller Pitch', level: 2 },
  { type: 'paragraph', html: 'An FPV drone speed estimate starts with the distance a fixed-pitch propeller would advance in one revolution. Motor KV and battery voltage provide a first RPM estimate, while efficiency and aircraft mass help frame a conservative planning number. This calculator keeps the geometric pitch speed and the estimated forward speed visible together so you can see the assumptions instead of confusing them with a measured result.' },
  { type: 'title', text: 'What the speed trace means', level: 2 },
  { type: 'table', headers: ['Signal', 'Interpretation'], rows: [['No-slip pitch speed', 'Pitch multiplied by loaded RPM. It assumes the propeller advances its nominal pitch every revolution.'], ['Estimated forward speed', 'The no-slip value multiplied by the efficiency proxy you entered.'], ['Speed left as slip', 'The percentage gap between geometric pitch speed and estimated forward speed.'], ['Pitch sensitivity', 'The result if the same setup used a propeller with 0.5 inch less or more pitch.']] },
  { type: 'title', text: 'A practical way to use the estimate', level: 2 },
  { type: 'list', items: ['Use the battery voltage expected under load rather than an optimistic full-charge value.', 'Start with a known motor and propeller combination or a manufacturer data point.', 'Treat a high slip reading as a prompt to inspect loading, voltage sag and propeller choice.', 'Validate current, temperature, vibration and actual speed in a controlled test before flight.'] },
  { type: 'title', text: 'Why the model has limits', level: 2 },
  { type: 'paragraph', html: 'Propeller performance changes across advance ratio, blade geometry, air density, inflow and operating angle. Research models for UAV propellers use measured or identified aerodynamic data across operating conditions. This lightweight calculator is deliberately narrower: it is useful for comparing a few setup assumptions, but it cannot replace a propeller chart, thrust stand or flight instrumentation.' },
  { type: 'tip', title: 'Use the gap as a decision signal', html: 'If a setup looks fast only because its no-slip number is high, inspect the gap to the efficiency-adjusted estimate. A lower-pitch propeller may trade headline speed for a more manageable load and better response, but that choice still needs a real powertrain check.' },
];

const schemas: FpvDroneSpeedLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } } as WithContext<SoftwareApplication>,
];

export const content: FpvDroneSpeedLocaleContent = { slug, title, description, ui, seo, faq, bibliography: BIBLIOGRAPHY_ITEMS, howTo, schemas };
