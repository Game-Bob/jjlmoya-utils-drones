import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-dronare-dragkraft-vikt-forhallande-kalkylator';
const title = 'FPV Drönare Dragkraft Vikt Förhållande och Flygtelemetri Kalkylator';
const description = 'Beräkna maximal statisk dragkraft, icke-linjär gaskurva, vertikala G-krafter, hovringspunkt och acceleration 0 till 100 för FPV drönare.';

const ui = {
  title: 'FPV Drönare Dragkraft Vikt Förhållande Kalkylator',
  subtitle: 'Analysera dragkraftskurvor, gasrespons i realtid, vertikala G krafter och manövrerbarhet',
  presetsHeader: 'Snabbprofiler',
  customPreset: 'Anpassad',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Tum',
  freestyle5Preset: '6S Freestyle 5 Tum Pro',
  longrange7Preset: '6S Mountain LR 7 Tum',
  cinelifter8Preset: '8S Tung Cinelifter X8',
  specsHeader: 'Drönar och Drivlinjespecifikationer',
  auwGramsLabel: 'Total startvikt med batteri (g)',
  motorCountLabel: 'Motorkonfiguration',
  thrustPerMotorLabel: 'Max statisk dragkraft per motor (g)',
  propellerSizeLabel: 'Propellerdiameter (tum)',
  propellerPitchLabel: 'Propellerstigning (tum)',
  bladeCountLabel: 'Antal Blad',
  blade2Option: '2 Blad (Tvåblad - Maximal Effektivitet)',
  blade3Option: '3 Blad (Treblad - Freestyle Standard)',
  blade4Option: '4 Blad (Fyrblad - Maximalt Grepp)',
  throttleStickHeader: 'Live Gasspakssimulator',
  throttleStickLabel: 'Gasreglageposition (%)',
  snapIdleLabel: 'Tomgång (0%)',
  snapHoverLabel: 'Hovringspunkt',
  snapCruiseLabel: 'Marschfart (50%)',
  snapPunchLabel: 'Fullgas (100%)',
  telemetryHeader: 'FPV Flygtelemetri och Prestandadiagnos',
  twrRatioLabel: 'Dragkraft till Vikt Förhållande (TWR)',
  hoverThrottleLabel: 'Gaspådrag vid Hovring',
  currentThrustLabel: 'Aktuell Utvecklad Dragkraft',
  instantGForceLabel: 'Momentan Vertikal G-Kraft',
  zeroToHundredLabel: 'Tid 0 till 100 km/h i Punch',
  recommendedCamAngleLabel: 'Rekommenderad FPV Kameravinkel',
  windResistanceLabel: 'Vindmotståndsförmåga',
  totalMaxThrustLabel: 'Total Maximal Statisk Dragkraft',
  maxPitchAngleLabel: 'Maximal Lutningsvinkel',
  tuningHeader: 'Betaflight PID och Firmware Rekommendationer',
  tpaRecommendationLabel: 'Gas PID Dämpning (TPA)',
  dynamicIdleLabel: 'Rekommenderad Dynamic Idle',
  propwashRiskLabel: 'Kontrollauktoritet vid Turbulens',
  tierUnderpoweredTitle: 'Undermotoriserad eller Risk för Vinddrift',
  tierUnderpoweredDesc: 'TWR under 2 till 1 ger otillräcklig kraft för att häva snabba dykningar. Endast lämplig för lugn inomhusflygning.',
  tierCinematicTitle: 'Mjuk Kinematisk Flygning',
  tierCinematicDesc: 'TWR mellan 2 till 1 och 4 till 1 ger följsam gaskontroll och vibrationsfria videoinspelningar.',
  tierFreestyleTitle: 'Sportig och Snabb Freestyle',
  tierFreestyleDesc: 'TWR mellan 4 till 1 och 8 till 1 ger snabb respons och rena akrobatiska manövrer.',
  tierAcroProTitle: 'Högpresterande Akrobatik och Bando Freestyle',
  tierAcroProDesc: 'TWR mellan 8 till 1 och 13 till 1 ger explosiv vertikal acceleration och omedelbar dämpning av propwash.',
  tierRacingExtremeTitle: 'Extrem Drönarracing',
  tierRacingExtremeDesc: 'TWR över 13 till 1 levererar den råa kraft som krävs på professionella FPV racingbanor.',
  hudThrustCurveTitle: 'Icke-linjär Dragkraftskurva',
  hudHoverMarker: 'Hovringspunkt',
  hudCurrentStickMarker: 'Aktuell Gas',
  hudGForceLabel: 'G-Krafter',
  hudTiltAngleLabel: 'Kameravinkel',
  hudVectorPowerLabel: 'Drivlinjetelemetri i Realtid',
};

const faqItems = [
  {
    question: 'Vilket förhållande mellan dragkraft och vikt är bäst för FPV freestyle?',
    answer: 'För freestyle rekommenderas ett TWR mellan 8 till 1 och 12 till 1 för att ge den acceleration som krävs för att häva dykningar och göra snabba svängar.',
  },
  {
    question: 'Hur påverkar den icke-linjära gaskurvan hovring?',
    answer: 'Borstlösa motorer genererar dragkraft proportionellt mot kvadraten på varvtalet. Hovringspunkten ligger vanligtvis mellan 20 och 35 procent på kraftfulla drönare.',
  },
  {
    question: 'Varför beror FPV kameravinkeln på dragkraftsförhållandet?',
    answer: 'Drönare med högre TWR flyger snabbare med en brantare framåtlutning. För att hålla horisonten centrerad i glasögonen vinklar piloter kameran 35 till 50 grader uppåt.',
  },
  {
    question: 'Hur förändrar antalet propellerblad flygkänslan?',
    answer: 'Tvåbladiga propellrar ger bäst flygtid och toppfart. Trebladiga är standard för freestyle, medan fyrbladiga ger maximalt grepp och bromsverkan i skarpa svängar.',
  },
];

const howToSteps = [
  {
    name: 'Ange drönarens vikt eller välj förinställning',
    text: 'Fyll i total startvikt i gram inklusive batteri och HD kamera.',
  },
  {
    name: 'Konfigurera motorer och propellrar',
    text: 'Välj antal motorer, blad och tillverkarens maximala bänkdragkraft vid fullgas.',
  },
  {
    name: 'Justera gasreglaget och läs av telemetri',
    text: 'Dra i gasreglaget för att se utvecklad dragkraft, G-krafter och position på effektkurvan.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodynamik kring Dragkraft till Vikt Förhållande för FPV Drönare',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Förhållandet mellan dragkraft och vikt (TWR) avgör acceleration och manöverförmåga hos multirotorer. Inom FPV freestyle ger tillräcklig effektreserv möjlighet att omedelbart avbryta dykningar och navigera precisionstighta passager.',
  },
  {
    type: 'title',
    text: 'Klassificering av FPV Drönare och Prestandadata',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Plattform', 'Typisk AUW Vikt', 'Mål TWR', 'Gas vid Hovring', '0 till 100 Acceleration', 'Kameravinkel'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 till 1', '35 procent', '1.20 s', '15 till 25 grader'],
      ['4S Freestyle 3.5"', '250g', '12.0 till 1', '24 procent', '0.28 s', '35 till 45 grader'],
      ['6S Freestyle 5" Pro', '680g', '11.5 till 1', '25 procent', '0.30 s', '35 till 50 grader'],
      ['6S Mountain LR 7"', '1150g', '8.3 till 1', '30 procent', '0.45 s', '20 till 30 grader'],
      ['8S Cinelifter X8', '4200g', '6.1 till 1', '38 procent', '0.70 s', '15 till 25 grader'],
    ],
  },
  {
    type: 'title',
    text: 'Icke-linjär Gasrespons och Motorkarakteristik',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Elmotorer utvecklar dragkraft exponentiellt. De sista 20 procenten av gasspaksrörelsen genererar mer än 40 procent av den totala tillgängliga kraften.',
  },
  {
    type: 'list',
    items: [
      'Hovringsområde (20 till 35 procent): Fin upplösning för precisionskontroll nära marken.',
      'Marschfartsområde (35 till 65 procent): Stabil framåtflygning med rimlig strömförbrukning.',
      'Fullgasområde (70 till 100 procent): Maximal vertikal acceleration med höga G-krafter.',
    ],
  },
  {
    type: 'title',
    text: 'Propellerval och Betaflight Inställningar',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'För drönare med TWR över 10 till 1 rekommenderas att aktivera Throttle PID Attenuation (TPA) i Betaflight för att eliminera vibrationer vid fullgas.',
  },
  {
    type: 'tip',
    title: 'Tips för Betaflight TPA Inställning',
    html: 'Ställ in TPA brytpunkt på 1250 eller 1350 med en dämpning på 0.65 för att säkerställa perfekt stabilitet på snabba raksträckor.',
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
      priceCurrency: 'SEK',
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
