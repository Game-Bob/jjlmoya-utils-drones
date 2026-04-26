import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-power-analyzer';
const title = 'Drone Power Analyzer: Thrust to Weight Ratio Calculator for FPV';
const description = 'Calculate the critical thrust-to-weight ratio for your FPV drone build. Get instant flight profile recommendations, visual power gauge, and optimize for cinematic, freestyle, or racing.';

const faqItems = [
  {
    question: 'What is the thrust-to-weight ratio and why does it matter?',
    answer: 'The thrust-to-weight ratio is the total thrust your drone can produce divided by its all-up weight (AUW). It\'s the single most important metric that determines how your drone will feel to fly — from slow and stable (cinematography) to ultra-responsive (racing).',
  },
  {
    question: 'What is the "sweet spot" ratio for freestyle flying?',
    answer: 'For smooth freestyle flying, the sweet spot is between 4:1 and 6:1. A 4:1 ratio gives excellent agility with good stability, while 6:1 is extremely responsive but requires more throttle finesse in tight spaces.',
  },
  {
    question: 'Can I use this for cinematography builds?',
    answer: 'Yes. For smooth, slow cinematography shots, aim for a 2:1 to 3:1 ratio. This keeps the drone stable and predictable. Anything lower becomes difficult to control; anything higher will feel too twitchy for slow movements.',
  },
  {
    question: 'What happens if my ratio is above 8:1?',
    answer: 'Above 8:1, your drone is effectively a racing machine — extremely reactive and demanding to fly. Only experienced pilots should attempt these builds. Great for racing gates and speed runs, but dangerous indoors.',
  },
  {
    question: 'Do I include the battery weight in AUW?',
    answer: 'Yes. AUW (All-Up Weight) is the total weight of your drone with all components installed: frame, motors, ESCs, flight controller, camera, battery, props — everything. Use the battery preset buttons for instant weight addition.',
  },
];

const howToSteps = [
  {
    name: 'Select Motor Configuration',
    text: 'Choose whether your build is a Quad (4), Hexa (6), or Octo (8) motor configuration. This multiplier is crucial to total thrust.',
  },
  {
    name: 'Input Motor Thrust',
    text: 'Enter the maximum thrust each motor can produce (in grams). You can find this in motor specifications or use the quick presets.',
  },
  {
    name: 'Set Total Weight',
    text: 'Input your drone\'s all-up weight (AUW) — frame, motors, battery, camera, everything. Use battery presets for instant weight adjustment.',
  },
  {
    name: 'Read Your Results',
    text: 'The calculator instantly shows your thrust-to-weight ratio, flight profile suitability (Cinematic, Freestyle, Racing), and a personalized recommendation for your build.',
  },
];

const schemas: DronePowerAnalyzerLocaleContent['schemas'] = [
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
    applicationCategory: 'OtherApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DronePowerAnalyzerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    motorConfiguration: 'Motor Configuration',
    motorCount: 'Motor Count',
    thrustPerMotor: 'Thrust per Motor (max)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Quick Motor Presets',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Weight Configuration',
    auwLabel: 'All-Up Weight (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Switch to lbs',
    switchToGrams: 'Switch to g',
    batteryPresets: 'Add Battery Weight',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Total Thrust',
    twRatio: 'Thrust-to-Weight Ratio',
    powerMeter: 'Power Meter',
    flightProfiles: 'Flight Profile Assessment',
    cinematicLabel: 'Cinematic',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Racing',
    proRacingLabel: 'Pro Racing',
    suitable: 'Suitable',
    notSuitable: 'Not Suitable',
    recommendationLabel: 'Flying Style Recommendation',
    recommendation_low: 'With a ratio under 2:1, your drone will struggle with stability. Consider reducing weight or upgrading motors for better performance.',
    recommendation_cinematic: 'With a {ratio}:1 ratio, this is ideal for heavy-lift cinematography with smooth, controlled movements. Perfect for slow, deliberate camera work.',
    recommendation_freestyle: 'With a {ratio}:1 ratio, this is the sweet spot for freestyle flying. Excellent agility with maintained stability for tricks and tricks.',
    recommendation_racing: 'With a {ratio}:1 ratio, this is performance freestyle territory. Throttle management is critical in tight spaces and high-speed maneuvers.',
    recommendation_extreme: 'With a {ratio}:1 ratio, this is a racing machine. Extremely reactive — only for experienced pilots in open areas.',
    compareMode: 'Compare Builds',
    scenario1: 'Build A',
    scenario2: 'Build B',
    addComparison: 'Add Comparison',
    tooltipTWRatio: 'Thrust-to-Weight ratio is the total thrust divided by the drone\'s weight. A higher ratio means faster acceleration and more responsive control.',
    tooltipFreestyle: 'The "sweet spot" for freestyle flying is 4:1 to 6:1 ratio, providing the best balance between agility and control.',
    badge_unstable: 'Unstable',
    badge_cinematic: 'Cinematic',
    badge_sweetSpot: 'Sweet Spot',
    badge_racing: 'Racing',
    badge_extreme: 'Extreme',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'Understanding Thrust-to-Weight Ratio for FPV Drones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The <strong>thrust-to-weight ratio</strong> is perhaps the single most critical metric in FPV drone building. Yet many pilots overlook it, leading to builds that don\'t behave as expected. This calculator demystifies the calculation and shows you exactly how your build will feel to fly.',
    },
    {
      type: 'title',
      text: 'Why Thrust-to-Weight Matters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Your drone\'s ratio determines three fundamental things: <strong>stability</strong>, <strong>responsiveness</strong>, and <strong>speed</strong>. A 2:1 ratio feels sluggish and stable. A 6:1 ratio feels twitchy and agile. A 10:1 ratio is a racing machine. Understanding where your build lands on this spectrum helps you choose the right flying style and set realistic expectations.',
    },
    {
      type: 'title',
      text: 'Flight Profiles Explained',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cinematic (2:1 – 4:1)</strong>: Heavy, stable, slow. Ideal for smooth camera movements and payload-carrying builds.',
        '<strong>Freestyle (3.5:1 – 6.5:1)</strong>: The balanced sweet spot. Responsive enough for tricks, stable enough for control.',
        '<strong>Racing (5:1 – 8:1)</strong>: Fast and agile. Designed for speed gates and aggressive maneuvers.',
        '<strong>Pro Racing (7:1+)</strong>: Extreme performance. Only for expert pilots in open areas.',
      ],
    },
    {
      type: 'title',
      text: 'How to Calculate Thrust-to-Weight Ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The formula is simple: <strong>ratio = (Thrust per Motor × Motor Count) / All-Up Weight</strong>. For example, a Quad with 600g motors (2,400g total thrust) weighing 800g produces a 3:1 ratio. This is freestyle territory.',
    },
    {
      type: 'title',
      text: 'Choosing the Right Ratio for Your Build',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ask yourself: <em>What will I fly?</em> Slow cinematic shots? Aggressive freestyle tricks? High-speed racing? Your answer determines your ideal ratio. Most FPV pilots end up between 4:1 and 6:1 because it offers the best compromise between control and excitement.',
    },
    {
      type: 'paragraph',
      html: 'Remember: a higher ratio doesn\'t mean "better." It means "more responsive." On a racing quad, that\'s essential. On a cinematic build, it\'s a liability. Choose deliberately.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
