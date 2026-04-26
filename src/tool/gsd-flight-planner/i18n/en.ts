import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gsd-flight-planner';
const title = 'GSD Flight Planner: Ground Sample Distance Calculator';
const description = 'Calculate the Ground Sample Distance (GSD) for photogrammetry missions. Support for DJI, Autel, and custom cameras. Real-time flight planning with visual quality indicators.';

const faqItems = [
  {
    question: 'What is Ground Sample Distance (GSD)?',
    answer: 'GSD is the distance on the ground represented by one pixel in your image. A lower GSD means higher resolution and detail. For example, a 1 cm/px GSD allows you to resolve details as small as 1 centimeter, which is critical for surveying.',
  },
  {
    question: 'How do I find my drone\'s camera specifications?',
    answer: 'Check your drone\'s manual for sensor dimensions and focal length. Alternatively, use our camera presets for popular models like the DJI Mavic 3E or Autel EVO II. For custom cameras, measure the sensor size from your lens specifications.',
  },
  {
    question: 'What GSD do I need for different mission types?',
    answer: 'High-precision topography: 1-2 cm/px. Standard mapping: 2-5 cm/px. Inspection and monitoring: 5-10 cm/px. Visual surveys: 10+ cm/px. Choose based on your project\'s accuracy requirements.',
  },
  {
    question: 'What is image overlap and why is it important?',
    answer: 'Overlap is the percentage of area that appears in consecutive photos. High overlap (60-80%) ensures complete coverage and improves 3D model quality. Frontal overlap affects photo spacing; lateral overlap affects the number of flight lines.',
  },
  {
    question: 'How do I calculate the ideal flight altitude?',
    answer: 'Use this calculator: Desired GSD × focal length ÷ sensor width = altitude. The calculator does this automatically and shows the maximum safe altitude to maintain your target precision and avoid motion blur.',
  },
];

const howToSteps = [
  {
    name: 'Select or Configure Camera',
    text: 'Choose from pre-configured models (DJI Mavic 3E, Autel EVO II, etc.) or enter sensor dimensions and focal length manually. Presets load all parameters instantly.',
  },
  {
    name: 'Set Flight Altitude',
    text: 'Use the altitude slider to adjust the height above ground level (AGL). Watch the GSD update in real-time to see how altitude affects image resolution.',
  },
  {
    name: 'Define Overlap Requirements',
    text: 'Set frontal and lateral overlap percentages. Higher overlap ensures complete coverage but increases mission time and number of images.',
  },
  {
    name: 'Review Results and Export',
    text: 'Check the GSD, coverage area, and precision classification. Generate a quick report to attach to your official flight plan.',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: 'Configuration',
    cameraSelection: 'Camera Selection',
    manualMode: 'Manual Mode',
    sensorConfig: 'Sensor Configuration',
    width: 'Width',
    height: 'Height',
    focalLength: 'Focal Length',
    imageResolution: 'Image Resolution',
    w: 'W',
    h: 'H',
    px: 'px',
    altitudeAgl: 'Altitude (AGL)',
    overlapSettings: 'Overlap Configuration',
    forward: 'Forward',
    lateral: 'Lateral',
    missionArea: 'Mission Area',
    totalAreaToSurvey: 'Total Area to Survey',
    hectareHint: '1 ha = 10,000 m²',
    inverseCalc: 'Reverse Calculation',
    targetGsd: 'Target GSD',
    maxAltitude: 'Max Altitude',
    reset: 'Reset',
    results: 'Results',
    gsdResult: 'Ground Sample Distance',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'High Prec.',
    standard: 'Standard',
    inspection: 'Inspection',
    visual: 'Visual',
    coveragePerImage: 'Coverage per Image',
    area: 'Area',
    spacing: 'Spacing',
    flightDir: 'Flight →',
    missionMetrics: 'Mission Metrics',
    images: 'Images',
    shots: 'shots',
    flightLines: 'Flight Lines',
    lines: 'lines',
    flightTime: 'Flight Time',
    min: 'min',
    dataVolume: 'Data Volume',
    gb: 'GB',
    copyShareLink: 'Copy Share Link',
    downloadReport: 'Download Report',
    copiedToClipboard: 'Copied!',
    metric: 'Metric',
    imperial: 'Imperial',
    classHighPrecision: 'High-Precision Topography',
    classStandard: 'Standard Mapping',
    classInspection: 'Inspection & Monitoring',
    classVisual: 'Visual Survey',
    ultraHighResAlert: 'Ultra-high resolution: Ensure sufficient storage and processing power',
    lowOverlapAlert: 'Forward overlap below 60%: May affect 3D model quality',
    largeDatasetAlert: 'Very large dataset: Consider splitting into multiple flights',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'GSD Flight Planner: The Complete Photogrammetry Calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Ground Sample Distance (GSD)</strong> is the most important metric in drone photogrammetry. A calculation error can waste an entire day of flight and cost thousands in lost productivity. This calculator eliminates that risk.',
    },
    {
      type: 'title',
      text: 'Why GSD Matters for Professionals',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Whether you are surveying land, creating 3D models, or monitoring infrastructure, GSD determines the level of detail you can capture. A 1 cm/px mission captures details that a 5 cm/px mission misses. But flying too low wastes battery and extends mission time unnecessarily.',
    },
    {
      type: 'title',
      text: 'GSD by Mission Type',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>High-Precision Topography (1-2 cm/px):</strong> Survey-grade accuracy for parcels, mine sites, and engineering projects.',
        '<strong>Standard Mapping (2-5 cm/px):</strong> Orthomosaics, agricultural monitoring, and general-purpose maps.',
        '<strong>Inspection and Monitoring (5-10 cm/px):</strong> Building inspections, power line reviews, and change detection.',
        '<strong>Visual Surveys (10+ cm/px):</strong> Large-area reconnaissance and visual assessment.',
      ],
    },
    {
      type: 'title',
      text: 'The GSD Formula',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Altitude × Sensor Width) / (Focal Length × Image Width) × 100</code><br/>This calculator handles the math. You focus on the mission.',
    },
    {
      type: 'title',
      text: 'Overlap: Why 60-80% is the Sweet Spot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Low overlap (20-40%) saves battery but risks gaps in coverage. High overlap (80%+) guarantees complete coverage but extends mission time. The <strong>60-80% range</strong> is the professional standard: it ensures complete 3D reconstruction without excessive redundancy.',
    },
    {
      type: 'title',
      text: 'Plan Better Missions with Real Data',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Before every flight, use this calculator to determine: the exact altitude for your required GSD, how many photos you will need, total mission time, and if motion blur is a risk. With this data, you will execute precise missions and avoid costly mistakes.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
