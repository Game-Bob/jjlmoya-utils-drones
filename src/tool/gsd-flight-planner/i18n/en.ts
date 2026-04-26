import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gsd-flight-planner';
const title = 'GSD & Flight Planner Pro: Ground Sample Distance Calculator for Drones';
const description = 'Calculate Ground Sample Distance (GSD) for photogrammetry missions. Support for DJI, Autel, and custom cameras. Real-time flight planning with visual quality indicators.';

const faqItems = [
  {
    question: 'What is Ground Sample Distance (GSD)?',
    answer: 'GSD is the distance on the ground represented by one pixel in your image. Lower GSD means higher resolution and detail. For example, a 1 cm/px GSD can resolve details down to 1 centimeter, which is critical for topographic surveys.',
  },
  {
    question: 'How do I find my drone camera specifications?',
    answer: 'Check your drone manual for sensor dimensions and focal length. Alternatively, use our camera presets for popular models like DJI Mavic 3E or Autel EVO II. For custom cameras, measure the sensor size in your lens specifications.',
  },
  {
    question: 'What GSD do I need for different types of missions?',
    answer: 'High-precision topography: 1-2 cm/px. Standard mapping: 2-5 cm/px. Inspection and monitoring: 5-10 cm/px. Visual surveys: 10+ cm/px. Choose based on your project accuracy requirements.',
  },
  {
    question: 'What is image overlap and why does it matter?',
    answer: 'Overlap is the percentage of area that appears in consecutive photos. Higher overlap (60-80%) ensures complete coverage and improves 3D model quality. Forward overlap affects flight line spacing; lateral overlap affects the number of flight lines needed.',
  },
  {
    question: 'How do I calculate the ideal flight altitude?',
    answer: 'Use this calculator: desired GSD × focal length ÷ sensor width = altitude. The calculator does this automatically and shows the maximum safe altitude to maintain your desired precision and avoid motion blur.',
  },
];

const howToSteps = [
  {
    name: 'Select or Configure Camera',
    text: 'Choose from preset models (DJI Mavic 3E, Autel EVO II, etc.) or enter custom sensor dimensions and focal length. Presets load all parameters instantly.',
  },
  {
    name: 'Set Flight Altitude',
    text: 'Use the altitude slider to adjust height above ground (AGL). Watch the GSD update in real-time to see how altitude affects image resolution.',
  },
  {
    name: 'Define Overlap Requirements',
    text: 'Set forward and lateral overlap percentages. Higher overlap ensures complete coverage but increases mission time and image count.',
  },
  {
    name: 'Review Results and Export',
    text: 'Check GSD, coverage area, and precision classification. Generate a quick PDF report to attach to your official flight plan.',
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    // Camera Selection
    cameraSelection: 'Camera Selection',
    cameraPresets: 'Camera Presets',
    selectCamera: 'Select Camera Model',
    manualMode: 'Manual Configuration',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',

    // Sensor Configuration
    sensorConfig: 'Sensor Configuration',
    sensorWidth: 'Sensor Width',
    sensorHeight: 'Sensor Height',
    imageResolution: 'Image Resolution',
    imageWidth: 'Width (pixels)',
    imageHeight: 'Height (pixels)',
    focalLength: 'Focal Length',

    // Flight Parameters
    flightParameters: 'Flight Parameters',
    altitudeAgl: 'Altitude (AGL)',
    altitudeUnit: 'm',
    altitudeSlider: 'Adjust flight altitude',
    overlapSettings: 'Overlap Configuration',
    forwardOverlap: 'Forward Overlap (%)',
    lateralOverlap: 'Lateral Overlap (%)',

    // Results Section
    gsdResult: 'Ground Sample Distance',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    precisionLevel: 'Precision Classification',

    // Coverage Results
    coverageArea: 'Coverage Area per Photo',
    coverageUnit: 'm²',
    maxSpacing: 'Max Spacing Between Shots',
    spacingUnit: 'm',
    flightLines: 'Estimated Flight Lines',
    totalImages: 'Estimated Total Images',
    missionTime: 'Estimated Mission Time',
    timeUnit: 'minutes',

    // Precision Classifications
    precisionHighRes: 'High-Precision Topography',
    precisionMapping: 'Standard Mapping',
    precisionInspection: 'Inspection & Monitoring',
    precisionVisual: 'Visual Survey',

    // Warnings and Alerts
    warningMotionBlur: 'Warning: Risk of motion blur at current flight speed',
    warningAltitude: 'Warning: Altitude exceeds drone maximum safe altitude',
    warningOverlap: 'Warning: Overlap below recommended 60% for quality 3D models',

    // Action Buttons
    calculateButton: 'Calculate',
    exportPdf: 'Export Report',
    inverseCalc: 'Reverse Calculate',
    clearAll: 'Reset',

    // Inverse Calculation
    desiredGsd: 'Desired GSD (cm/px)',
    maxAltitude: 'Maximum Altitude',

    // Tooltips
    tooltipGsd: 'GSD is the ground distance (in cm) represented by one pixel. Lower values mean higher resolution.',
    tooltipOverlap: 'Overlap ensures complete coverage and improves 3D model quality. Use 60-80% for best results.',
    tooltipFocalLength: 'The focal length of your camera lens in millimeters.',
    tooltipMotionBlur: 'Higher flight speeds can cause motion blur. The calculator warns when your setup is at risk.',
  },
  seo: [
    {
      type: 'title',
      text: 'GSD Flight Planner: The Complete Photogrammetry Calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Ground Sample Distance (GSD)</strong> is the single most important metric in drone photogrammetry. One miscalculation can waste an entire day of flight time and cost thousands in lost productivity. This calculator eliminates that risk.',
    },
    {
      type: 'title',
      text: 'Why GSD Matters for Professionals',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Whether you\'re surveying land, creating 3D models, or monitoring infrastructure, GSD determines the level of detail you can resolve. A 1 cm/px mission captures details that a 5 cm/px mission misses. But flying too low wastes fuel and extends mission time unnecessarily.',
    },
    {
      type: 'title',
      text: 'GSD by Mission Type',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>High-Precision Topography (1-2 cm/px):</strong> Survey-grade accuracy for land parcels, mining sites, and engineering projects.',
        '<strong>Standard Mapping (2-5 cm/px):</strong> Orthomosaics, agricultural monitoring, and general-purpose maps.',
        '<strong>Inspection & Monitoring (5-10 cm/px):</strong> Building inspections, utility line checks, and change detection.',
        '<strong>Visual Surveys (10+ cm/px):</strong> Wide-area reconnaissance and visual assessment.',
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
      html: 'Low overlap (20-40%) saves battery but risks coverage gaps. High overlap (80%+) guarantees complete coverage but extends mission time. The <strong>60-80% range</strong> is the professional standard: it ensures complete 3D reconstruction without excessive redundancy.',
    },
    {
      type: 'title',
      text: 'Plan Better Missions with Real Data',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Before each flight, use this calculator to determine: the exact altitude for your required GSD, how many photos you\'ll need, total mission time, and whether motion blur is a risk. Armed with this data, you\'ll execute precise missions and avoid costly mistakes.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
