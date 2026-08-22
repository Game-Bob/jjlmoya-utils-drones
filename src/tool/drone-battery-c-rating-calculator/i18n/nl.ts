import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'lipo-c-waarde-rechner-drone';
const title = 'Drone LiPo Batterij C Waarde en Ontladings Rechner';
const description = 'Bereken de realistische continue ontladingsstroom, C-waarde, spanningsval en vliegveiligheid voor LiPo-batterijen van drones op basis van inwendige weerstand en motorverbruik.';

const ui = {
  title: 'Drone LiPo Batterij C Waarde Rechner',
  subtitle: 'Analyseer realistische ontlading, piekvereisten en spanningsval voor multirotors',
  lipoSpecsHeader: 'Batterij Specificaties',
  capacityLabel: 'Capaciteit (mAh)',
  claimedCRatingLabel: 'Opgegeven C-Waarde',
  cellCountLabel: 'Aantal Cellen (Serie S)',
  chemistryLabel: 'Batterij Chemie',
  internalResistanceLabel: 'Inwendige Weerstand per Cel (mΩ)',
  quadSpecsHeader: 'Stroomverbruik van de Drone',
  motorCountLabel: 'Aantal Motoren',
  peakMotorCurrentLabel: 'Piekstroom per Motor (Ampère)',
  auxCurrentLabel: 'Hulpverbruikers (VTX, FC, Camera) (Ampère)',
  presetSelectLabel: 'Snelle Instellingen',
  customPreset: 'Aangepast',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5-Inch Freestyle',
  cinewhoopPreset: '4S 3-Inch CineWhoop',
  longRange7Preset: '6S 7-Inch Long Range',
  racing5Preset: '6S 5-Inch Race',
  resultsHeader: 'Vermogens- en Prestatie-Analyse',
  claimedMaxCurrentLabel: 'Opgegeven Maximale Stroom',
  realisticCRatingLabel: 'Realistische Continue C-Waarde',
  realisticMaxCurrentLabel: 'Realistische Continue Stroom',
  totalPeakDrawLabel: 'Totale Piekstroom',
  voltageSagLabel: 'Geschatte Spanningsval',
  sagNominalVoltageLabel: 'Nominale Spanning onder Belasting',
  flightTimeFullThrottleLabel: 'Vliegtijd bij Volgas',
  flightTimeHoverLabel: 'Geschatte Zweeftijd',
  safetyStatusLabel: 'Veiligheidsdiagnose',
  statusOptimalTitle: 'Veilige en Optimale Batterij',
  statusOptimalDesc: 'De batterij levert de piekstroom gemakkelijk zonder overmatige hitte of sterke spanningsval. Hoge levensduur van de cellen gegarandeerd.',
  statusWarningTitle: 'Matige Thermische en Spannings-Belasting',
  statusWarningDesc: 'Het piekverbruik ligt dicht bij de realistische limiet van de batterij. Reken op een lichte spanningsval bij snelle accelelaties.',
  statusDangerTitle: 'Hoog Risico op Overbelasting en Spanningsval',
  statusDangerDesc: 'Het piekverbruik overschrijdt de realistische capaciteit van de batterij. Hoog risico op oververhitting, sterke spanningsval en snelle slijtage.',
  lipoVisualizerTitle: 'Live LiPo Status Visualisatie',
  cellVoltageLabel: 'Spanning per Cel',
  batteryHealthLabel: 'Batterij Belasting',
  burstRatingRequiredLabel: 'Vereiste Peak C-Waarde',
  currentRatioLabel: 'Vermogens Belastingsverhouding',
};

const faqItems = [
  {
    question: 'Wat betekent de C-waarde bij LiPo-batterijen?',
    answer: 'De C-waarde geeft de maximale continue ontladingssnelheid aan in verhouding tot de capaciteit. Een 1500mAh batterij met 100C kan theoretisch 150 Ampère leveren.',
  },
  {
    question: 'Waarom verschilt de opgegeven van de realistische C-waarde?',
    answer: 'Fabrikanten adverteren vaak met piekwaarden in laboratoriumomstandigheden. De werkelijke continue stroom hangt af van de inwendige weerstand van de cellen.',
  },
  {
    question: 'Hoe beïnvloedt inwendige weerstand de spanning en warmte?',
    answer: 'Een hoge inwendige weerstand werkt als een ongewenste weerstand in de cel. Bij hoge stroomzorg valt de spanning weg en ontstaat er hitte.',
  },
  {
    question: 'Hoe voorkom ik voltage sag tijdens freestyle vliegen?',
    answer: 'Gebruik batterijen met een lage inwendige weerstand, houd een veiligheidsmarge van minstens 15 procent boven de piekstroom en vlieg niet onder 3.5V per cel.',
  },
];

const howToSteps = [
  {
    name: 'Kies een preset of voer gegevens in',
    text: 'Voer de capaciteit in mAh, opgegeven C-waarde, aantal cellen en gemiddelde inwendige weerstand per cel in.',
  },
  {
    name: 'Stel het stroomverbruik in',
    text: 'Teken het aantal motoren, de piekstroom per motor bij volgas en het hulpverbruik in.',
  },
  {
    name: 'Bekijk de veiligheidsdiagnose',
    text: 'Vergelijk de realistische continue stroom met het piekverbruik van de drone om veilig te vliegen.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Begrip van LiPo C-Waarde en Reële Stroomlevering',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Het kiezen van de juiste LiPo-batterij voor een FPV-drone vereist inzicht in de relatie tussen capaciteit, C-waarde en motorverbruik. Hoewel fabrikanten vaak waarden van 100C of meer vermelden, wordt de werkelijke continue ontlading beperkt door inwendige weerstand en warmteafvoer. Deze rechner geeft realistische veiligheidsmarges.',
  },
  {
    type: 'title',
    text: 'Vergelijkingstabel voor RC Batterij Chemie',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Chemie', 'Nominale Spanning', 'Max. Spanning', 'Energiedichtheid', 'Piek Ontlading', 'Aanbevolen Gebruik'],
    rows: [
      ['LiPo (Standaard)', '3.7V', '4.20V', 'Hoog', '100C - 150C', '5-Inch FPV Race en Freestyle'],
      ['LiHV (High Voltage)', '3.8V', '4.35V', 'Zeer Hoog', '80C - 120C', 'TinyWhoops en Micro Quads'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Maximaal', '15C - 35C', '7-Inch Long Range Drones'],
      ['LiFePO4', '3.3V', '3.65V', 'Matig', '30C - 50C', 'Veld Laders en Accustations'],
    ],
  },
  {
    type: 'title',
    text: 'Impact van Voltage Sag en Inwendige Weerstand',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Voltage sag is de plotselinge spanningsval bij snelle accelelaties. Wanneer stroom door de inwendige weerstand stroomt, wordt energie omgezet in warmte in plaats van stuwkracht. Een verouderde batterij geeft vroegtijdige waarschuwingen voor lage spanning op de OSD.',
  },
  {
    type: 'list',
    items: [
      'Lage inwendige weerstand (1-4 mΩ per cel): Uitstekende respons, minimale sag en lage temperatuur.',
      'Matige inwendige weerstand (5-10 mΩ per cel): Standaard prestaties voor freestyle.',
      'Hoge inwendige weerstand (>12 mΩ per cel): Duidelijk krachtsverlies, sterke sag en snelle opwarming.',
    ],
  },
  {
    type: 'title',
    text: 'Batterij Optimalisatie voor Freestyle Race en Long Range',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Verschillende vliegstijlen vereisen verschillende stroomprofielen. 5-inch freestyle drones genereren pieken van meer dan 120 Ampère, terwijl 7-inch long range drones een constante efficiëntie eisen. De juiste afstemming voorkomt stroomuitval in de lucht.',
  },
  {
    type: 'tip',
    title: 'LiPo Onderhoudstip',
    html: 'Bewaar uw LiPo-batterijen altijd op een opslagspanning van 3.80V tot 3.85V per cel wanneer u ze niet gebruikt. Volledig geladen batterijen die langer dan 48 uur liggen, verhogen de inwendige weerstand permanent.',
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
      priceCurrency: 'EUR',
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
