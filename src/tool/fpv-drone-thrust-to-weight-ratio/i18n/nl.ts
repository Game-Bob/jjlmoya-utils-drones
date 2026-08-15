import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-stuwkracht-gewicht-verhouding-calculator';
const title = 'FPV Drone Stuwkracht Gewicht Verhouding en Vluchttelemetrie Calculator';
const description = 'Bereken de maximale statische stuwkracht, niet-lineaire gasresponscurve, verticale G-krachten, hoverpunt en 0 naar 100 tijd voor FPV drones.';

const ui = {
  title: 'FPV Drone Stuwkracht Gewicht Verhouding Calculator',
  subtitle: 'Analyseer stuwkrachtcurven, live gashendel respons, verticale G krachten en vliegprestaties',
  presetsHeader: 'Snelle Voorinstellingen',
  customPreset: 'Aangepast',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Inch',
  freestyle5Preset: '6S Freestyle 5 Inch Pro',
  longrange7Preset: '6S Mountain LR 7 Inch',
  cinelifter8Preset: '8S Zware Cinelifter X8',
  specsHeader: 'Drone en Aandrijvingspecificaties',
  auwGramsLabel: 'Totaalgewicht met Accu (g)',
  motorCountLabel: 'Motorconfiguratie',
  thrustPerMotorLabel: 'Maximale Statische Stuwkracht per Motor (g)',
  propellerSizeLabel: 'Propellerdiameter (inch)',
  propellerPitchLabel: 'Propellerspoed (inch)',
  bladeCountLabel: 'Aantal Bladen',
  blade2Option: '2 Bladen (Tweeblads - Maximale Efficientie)',
  blade3Option: '3 Bladen (Drieblads - Freestyle Standaard)',
  blade4Option: '4 Bladen (Vierblads - Maximale Grip)',
  throttleStickHeader: 'Live Gashendel Simulator',
  throttleStickLabel: 'Gashendelpositie (%)',
  snapIdleLabel: 'Stationair (0%)',
  snapHoverLabel: 'Hoverpunt',
  snapCruiseLabel: 'Kruisvlucht (50%)',
  snapPunchLabel: 'Volgas (100%)',
  telemetryHeader: 'FPV Vluchttelemetrie en Diagnose',
  twrRatioLabel: 'Stuwkracht Gewicht Verhouding (TWR)',
  hoverThrottleLabel: 'Gasstand bij Zweven',
  currentThrustLabel: 'Actuele Geleverde Stuwkracht',
  instantGForceLabel: 'Directe Verticale G-Kracht',
  zeroToHundredLabel: '0 naar 100 km/u Punch Tijd',
  recommendedCamAngleLabel: 'Aanbevolen FPV Camerahoek',
  windResistanceLabel: 'Windweerstand Snelheid',
  totalMaxThrustLabel: 'Totale Maximale Statische Stuwkracht',
  maxPitchAngleLabel: 'Maximale Hellingshoek',
  tuningHeader: 'Betaflight PID en Firmware Aanbevelingen',
  tpaRecommendationLabel: 'Gas PID Verzwakking (TPA)',
  dynamicIdleLabel: 'Aanbevolen Dynamic Idle',
  propwashRiskLabel: 'Propwash Stuurkracht',
  tierUnderpoweredTitle: 'Ondermotoriseerd of Risico op Winddrift',
  tierUnderpoweredDesc: 'TWR onder 2 op 1 biedt onvoldoende stuurkracht voor snelle dalingen. Alleen geschikt voor rustig binnenshuis vliegen.',
  tierCinematicTitle: 'Vloeiende Cinematische Vlucht',
  tierCinematicDesc: 'TWR tussen 2 op 1 en 4 op 1 zorgt voor soepele gascontrole en trillingsvrije video-opnamen.',
  tierFreestyleTitle: 'Sportieve en Wendbare Freestyle',
  tierFreestyleDesc: 'TWR tussen 4 op 1 en 8 op 1 levert snelle reacties en schone acrobatische manoeuvres.',
  tierAcroProTitle: 'Krachtige Acro en Bando Freestyle',
  tierAcroProDesc: 'TWR tussen 8 op 1 en 13 op 1 biedt explosieve verticale acceleratie en snelle correctie van propwash.',
  tierRacingExtremeTitle: 'Extreme Drone Racing Competitie',
  tierRacingExtremeDesc: 'TWR boven 13 op 1 levert de brute kracht die nodig is voor professionele FPV racebanen.',
  hudThrustCurveTitle: 'Niet-lineaire Stuwkracht Responscurve',
  hudHoverMarker: 'Hoverpunt',
  hudCurrentStickMarker: 'Huidige Gashendel',
  hudGForceLabel: 'G-Krachten',
  hudTiltAngleLabel: 'Camerahoek',
  hudVectorPowerLabel: 'Live Aandrijvingstelemetrie',
};

const faqItems = [
  {
    question: 'Wat is een goede stuwkracht gewicht verhouding voor een freestyle FPV drone?',
    answer: 'Voor freestyle drones biedt een TWR tussen 8 op 1 en 12 op 1 de nodige versnelling om vrije val duiken op te vangen en scherpe bochten te maken.',
  },
  {
    question: 'Hoe beinvloedt de niet-lineaire gascurve het zweefgedrag?',
    answer: 'Borstelloze motoren leveren stuwkracht evenredig met het kwadraat van het toerental. Het hoverpunt ligt bij krachtige drones meestal rond 20 tot 35 procent gas.',
  },
  {
    question: 'Waarom hangt de FPV camerahoek af van de stuwkracht?',
    answer: 'Drones met een hogere verhouding vliegen met een steilere voorwaartse hoek. Piloten kantelen de camera 35 tot 50 graden om de horizon in beeld te houden.',
  },
  {
    question: 'Wat is het effect van het aantal propellerbladen op het sturen?',
    answer: 'Tweebladige propellers bieden maximale vliegtijd en topsnelheid. Driebladige propellers leveren de ideale balans voor freestyle, terwijl vierbladige propellers zorgen voor extra grip in bochten.',
  },
];

const howToSteps = [
  {
    name: 'Voer het dronegewicht in of kies een profiel',
    text: 'Vul het totale startgewicht in grammen in inclusief LiPo accu en HD camera.',
  },
  {
    name: 'Stel motoren en propellers in',
    text: 'Selecteer het aantal motoren, bladen en de maximale statische stuwkracht per motor.',
  },
  {
    name: 'Bedien de live gashendel',
    text: 'Verschuif de gashendel om de opgewekte stuwkracht, G-krachten en de positie op de stuwkrachtcurve te bekijken.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodynamica van Stuwkracht Gewicht Verhouding bij FPV Drones',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'De stuwkracht gewicht verhouding (TWR) bepaalt de acceleratie en het reactievermogen van multirotors. Bij FPV freestyle en racing zorgt voldoende overcapaciteit ervoor dat piloten steile duikvluchten direct kunnen afremmen.',
  },
  {
    type: 'title',
    text: 'Classificatie van FPV Drones en Prestatiewaarden',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Platform', 'Typisch AUW Gewicht', 'Doel TWR', 'Hover Gasstand', '0 naar 100 Acceleratie', 'Camerahoek'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 op 1', '35 procent', '1.20 s', '15 deg naar 25 deg'],
      ['4S Freestyle 3.5"', '250g', '12.0 op 1', '24 procent', '0.28 s', '35 deg naar 45 deg'],
      ['6S Freestyle 5" Pro', '680g', '11.5 op 1', '25 procent', '0.30 s', '35 deg naar 50 deg'],
      ['6S Mountain LR 7"', '1150g', '8.3 op 1', '30 procent', '0.45 s', '20 deg naar 30 deg'],
      ['8S Cinelifter X8', '4200g', '6.1 op 1', '38 procent', '0.70 s', '15 deg naar 25 deg'],
    ],
  },
  {
    type: 'title',
    text: 'Niet-lineaire Gasrespons en Motordynamiek',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Elektromotoren leveren vermogen met een exponentieel verloop. De bovenste 20 procent van de gashendelslag levert meer dan 40 procent van de totale beschikbare stuwkracht.',
  },
  {
    type: 'list',
    items: [
      'Hoverbereik (20 tot 35 procent): Fijne resolutie voor nauwkeurige controle vlak boven de grond.',
      'Kruisvluchtbereik (35 tot 65 procent): Stabiele voorwaartse vlucht met beheersbaar stroomverbruik.',
      'Volgasbereik (70 tot 100 procent): Maximale stuwkracht met hoge verticale G-krachten.',
    ],
  },
  {
    type: 'title',
    text: 'Propellerkeuze en Betaflight Afstelling',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Voor drones met een TWR hoger dan 10 op 1 is het verstandig om Throttle PID Attenuation (TPA) in te stellen in Betaflight om trillingen bij volgas te voorkomen.',
  },
  {
    type: 'tip',
    title: 'Afsteltip voor Betaflight TPA',
    html: 'Stel TPA in vanaf 1250 of 1350 met een factor van 0.65 om trillingen op topsnelheid te dempen.',
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
      priceCurrency: 'EUR',
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
