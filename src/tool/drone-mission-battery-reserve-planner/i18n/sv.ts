import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'dron-uppdrag-batterireserv-planerare';
const title = 'Drönare Uppdrag Batterireserv Planerare';
const description = 'Beräkna säkra batterireserver för Return-to-Home, motvindspåverkan och maximal aktionsradie för drönare.';

const faqItems = [
  {
    question: 'Varför drar flygning i motvind avsevärt mer energi?',
    answer: 'Flygning i motvind kräver en brantare lutningsvinkel för att övervinna luftmotståndet och bibehålla markhastigheten, vilket ökar strömförbrukningen.',
  },
  {
    question: 'Hur påverkar tiden vid målområdet punkt utan återvändo?',
    answer: 'Hovringstid vid målområdet förbrukar batterienergi, vilket direkt minskar den maximala säkra tur-och-retur-radien.',
  },
  {
    question: 'Vad orsakar spänningsfall under belastning i LiPo-batterier?',
    answer: 'Hög strömförbrukning ökar inre motståndsförluster i litiumcellerna, vilket minskar antalet effektivt nyttjbara Wattimmar.',
  },
];

const howToSteps = [
  {
    name: 'Ange batteri- och framdrivningsdata',
    text: 'Fyll i batterikapacitet i mAh, nominell spänning och genomsnittlig strömförbrukning.',
  },
  {
    name: 'Ställ in avstånd och hovringstid',
    text: 'Ange enkel reseavstånd och förväntad hovringstid vid målområdet.',
  },
  {
    name: 'Konfigurera vindhastighet och riktning',
    text: 'Välj vindhastighet och vindriktning i förhållande till utresan.',
  },
  {
    name: 'Granska säker radie och telemetri',
    text: 'Kontrollera beräknad punkt utan återvändo, energiförbrukning per sträcka och batterinivå vid landning.',
  },
];

const schemas: DroneMissionBatteryReservePlannerLocaleContent['schemas'] = [
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
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Drönare Uppdrag Batterireserv Planerare',
    subtitle: 'Beräkna säkerhetsmarginaler för hemflygning, vindpåverkan och flygradie',
    description: 'Noggrann batterireservberäkning för drönare med motvindsjustering och gränsvärden för punkt utan återvändo.',
    inputs: {
      unitSystemLabel: 'Enhetssystem',
      metricLabel: 'Metrisk',
      imperialLabel: 'Imperial',
      presetLabel: 'Snabbinställningar för Uppdrag',
      batteryCapacityLabel: 'Batterikapacitet',
      batteryVoltageLabel: 'Nominell Spänning',
      averageCurrentLabel: 'Genomsnittlig Marschström',
      cruiseSpeedLabel: 'Lufthastighet i Marsch',
      oneWayDistanceLabel: 'Avstånd Enkel Resa',
      targetHoverTimeLabel: 'Hovringstid vid Målområde',
      windSpeedLabel: 'Vindhastighet',
      windDirectionLabel: 'Vindriktning i förhållande till Utresa',
      windHeadwindLabel: 'Motvind vid Utresa',
      windTailwindLabel: 'Medvind vid Utresa',
      windCrosswindLabel: 'Sidovind',
      reservePolicyLabel: 'Säkerhetsreserv Buffert',
    },
    presets: {
      mappingSurvey: 'Kartering och Fotogrammetri',
      fpvRecon: 'FPV Långdistansrekognosering',
      cinematicInspection: 'Kinematisk Byggnadsinspektion',
      microRecon: 'Mikrodrönaruppdrag',
    },
    results: {
      totalCapacityEnergy: 'Total Kapacitetsenergi',
      usableEnergy: 'Nyttjbar Uppdragsenergi',
      reserveEnergyBuffer: 'Reservenergibuffert',
      totalAutonomyTime: 'Total Flygautonomi',
      maxSafeMissionRadius: 'Radie för Punkt utan Återvändo',
      outboundLegTime: 'Tid för Utresa',
      targetHoverTime: 'Hovringstid vid Målet',
      returnLegTime: 'Tid för Hemresa',
      totalMissionTime: 'Total Transittid',
      remainingEnergyLanding: 'Beräknad Batterinivå vid Landning',
      feasibilityStatus: 'Genomförbarhetsbedömning',
    },
    statusBadges: {
      optimal: 'Optimal Batterireservmarginal',
      tight: 'Varning för Snäv Reserv',
      critical: 'Kritiskt Energilarm Utlöst',
      exceeded: 'Uppdraget Överskrider Säker Kapacitet',
    },
    chart: {
      batteryProfileTitle: 'Batteriets Energiförbrukningsprofil',
      outboundSegment: 'Utresesträcka',
      targetSegment: 'Hovring vid Målet',
      returnSegment: 'Hemresesträcka',
      reserveSegment: 'Säkerhetsreserv Buffert',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Aerodynamiska Effektförluster i Motvind',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Flygning i motvind kräver större lutning för att bibehålla markhastigheten och ökar motormotståndet.',
    },
    {
      type: 'title',
      text: 'Beräkning av Hovringstid vid Målet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inspektionsdrönare hovrar vid målet och förbrukar energi innan hemresan påbörjas.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
