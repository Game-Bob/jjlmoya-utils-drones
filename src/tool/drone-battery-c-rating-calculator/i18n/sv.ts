import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'lipo-c-varde-raknare-dronare';
const title = 'Drönare LiPo Batteri C Värde och Urladdning Räknare';
const description = 'Beräkna realistisk kontinuerlig urpolariseringsström, C-värde, spänningsfall och flygsäkerhet för drönare LiPo-batterier baserat på inre resistans och motorförbrukning.';

const ui = {
  title: 'Drönare LiPo Batteri C Värde Räknare',
  subtitle: 'Analysera realistisk kontinuerlig urladdning, toppkrav och spänningsfall för drönare',
  lipoSpecsHeader: 'Batterispecifikationer',
  capacityLabel: 'Kapacitet (mAh)',
  claimedCRatingLabel: 'Angivet C-Värde',
  cellCountLabel: 'Antal Celler (Serie S)',
  chemistryLabel: 'Batterikemi',
  internalResistanceLabel: 'Inre Resistans per Cell (mΩ)',
  quadSpecsHeader: 'Drönarens Strömförbrukning',
  motorCountLabel: 'Antal Motorer',
  peakMotorCurrentLabel: 'Toppström per Motor (Ampere)',
  auxCurrentLabel: 'Hjälpförbrukning (VTX, FC, Kamera) (Ampere)',
  presetSelectLabel: 'Snabbinställningar',
  customPreset: 'Anpassad',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5 Tum Freestyle',
  cinewhoopPreset: '4S 3 Tum CineWhoop',
  longRange7Preset: '6S 7 Tum Long Range',
  racing5Preset: '6S 5 Tum Racing',
  resultsHeader: 'Effekt och Prestandaanalys',
  claimedMaxCurrentLabel: 'Angiven Maximal Ström',
  realisticCRatingLabel: 'Realistiskt Kontinuerligt C-Värde',
  realisticMaxCurrentLabel: 'Realistisk Kontinuerlig Ström',
  totalPeakDrawLabel: 'Total Toppströmförbrukning',
  voltageSagLabel: 'Uppskattat Spänningsfall',
  sagNominalVoltageLabel: 'Nominerad Spänning under Belastning',
  flightTimeFullThrottleLabel: 'Flygtid vid Full Gas',
  flightTimeHoverLabel: 'Uppskattad Hovringstid',
  safetyStatusLabel: 'Säkerhetsdiagnos',
  statusOptimalTitle: 'Säkert och Optimalt Batteri',
  statusOptimalDesc: 'Batteriet levererar toppströmmen enkelt utan överdriven värme eller kraftigt spänningsfall. Lång celllivslängd garanterad.',
  statusWarningTitle: 'Måttlig Termisk och Spännings-Belastning',
  statusWarningDesc: 'Toppförbrukningen ligger nära batteriets realistiska gräns. Räkna med ett visst spänningsfall vid snabba gaspådrag.',
  statusDangerTitle: 'Hög Risk för Överbelastning och Spänningsfall',
  statusDangerDesc: 'Toppförbrukningen överstiger batteriets realistiska kapacitet. Hög risk för överhettning, kraftigt spänningsfall och snabbt slitage.',
  lipoVisualizerTitle: 'Live LiPo Status Visualisering',
  cellVoltageLabel: 'Spänning per Cell',
  batteryHealthLabel: 'Batteribelastning',
  burstRatingRequiredLabel: 'Krävt Peak C-Värde',
  currentRatioLabel: 'Effektbelastningsförhållande',
};

const faqItems = [
  {
    question: 'Vad betyder C-värdet på drönarbatterier?',
    answer: 'C-värdet anger den maximala kontinuerliga urladdningshastigheten i förhållande till kapaciteten. Ett 1500mAh batteri med 100C kan teoretiskt ge 150 Ampere.',
  },
  {
    question: 'Varför skiljer sig angivet från realistiskt C-värde?',
    answer: 'Tillverkare marknadsför ofta toppvärden i laboratoriemiljö. Den verkliga kontinuerliga strömmen beror direkt på cellernas inre resistans.',
  },
  {
    question: 'Hur påverkar inre resistans spänningsfall och värme?',
    answer: 'Hög inre resistans fungerar som ett motstånd i cellen. Vid högt strömuttag faller spänningen och energi omvandlas till värme.',
  },
  {
    question: 'Hur undviker jag spänningsfall vid freestyleflygning?',
    answer: 'Använd batterier med låg inre resistans, håll en säkerhetsmarginal på minst 15 procent över toppförbrukningen och flyg inte under 3.5V per cell.',
  },
];

const howToSteps = [
  {
    name: 'Välj inställning eller ange data',
    text: 'Ange kapacitet i mAh, angivet C-värde, antal celler och genomsnittlig inre resistans per cell.',
  },
  {
    name: 'Ställ in drönarens förbrukning',
    text: 'Ange antal motorer, toppström per motor vid full gas samt hjälpförbrukning.',
  },
  {
    name: 'Granska säkerhetsdiagnosen',
    text: 'Jämför den realistiska kontinuerliga strömmen med drönarens toppförbrukning för säker flygning.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Förståelse för LiPo C-Värde och Verklig Effekt',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Att välja rätt LiPo-batteri för en FPV-drönare kräver förståelse för sambandet mellan kapacitet, C-värde och motorförbrukning. Även om tillverkare uppger 100C eller mer, begränsas den verkliga kontinuerliga urladdningen av inre resistans och värmeavledning. Denna räknare ger realistiska säkerhetsmarginaler.',
  },
  {
    type: 'title',
    text: 'Jämförelsetabell för RC Batterikemi',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Kemi', 'Nominell Spänning', 'Max Spänning', 'Energidensitet', 'Peak Urladdning', 'Rekommenderad Användning'],
    rows: [
      ['LiPo (Standard)', '3.7V', '4.20V', 'Hög', '100C - 150C', '5 Tum FPV Race och Freestyle'],
      ['LiHV (Högspänning)', '3.8V', '4.35V', 'Mycket Hög', '80C - 120C', 'TinyWhoop och Mikrodrönare'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Maximal', '15C - 35C', '7 Tum Long Range Drönare'],
      ['LiFePO4', '3.3V', '3.65V', 'Måttlig', '30C - 50C', 'Fältladdare och Kraftstationer'],
    ],
  },
  {
    type: 'title',
    text: 'Effekt av Spänningsfall och Inre Resistans',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Spänningsfall (voltage sag) är det plötsliga spänningsfallet vid snabba gaspådrag. När ström passerar genom inre resistans omvandlas energi till värme istället för lyftkraft. Ett gammalt batteri ger tidiga varningar om låg spänning på OSD.',
  },
  {
    type: 'list',
    items: [
      'Låg inre resistans (1-4 mΩ per cell): Utmärkt respons, minimalt sag och sval drift.',
      'Måttlig inre resistans (5-10 mΩ per cell): Standardprestanda för freestyle.',
      'Hög inre resistans (>12 mΩ per cell): Tydlig effektförlust, kraftigt sag och snabb upphettning.',
    ],
  },
  {
    type: 'title',
    text: 'Batterioptimering för Freestyle Race och Long Range',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Olika flygstilar kräver olika strömprofiler. 5-tums freestyle-drönare skapar toppar på över 120 Ampere, medan 7-tums long range-drönare kräver jämn effektivitet. Rätt anpassning förhindrar plötsliga strömavbrott i luften. Jämför det beräknade C-värdet med den verkliga strömmen i din modell och ta hänsyn till batteriets ålder, temperatur och kabellängd. Resultatet hjälper dig att välja ett rimligt belastningsområde, men gör alltid ett kontrollerat test och övervaka cellernas temperatur före flygning.',
  },
  {
    type: 'tip',
    title: 'LiPo Skötseltips',
    html: 'Förvara alltid dina LiPo-batterier vid en lagringsspänning på 3.80V till 3.85V per cell när de inte används. Att lämna batterier fulladdade i mer än 48 timmar ökar den inre resistansen permanent.',
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
      priceCurrency: 'SEK',
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
