import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'dron-uppdrag-batterireserv-planerare';
const title = 'Drönare Uppdrag Batterireserv Planerare';
const description = 'Beräkna säkra batterireserver för hemflight, motvindspåverkan och maximal aktionsradie för drönare.';

const faqItems = [
  {
    question: 'Varför drar flygning i motvind mer ström?',
    answer: 'Att flyga i motvind kräver en brantare lutningsvinkel för att övervinna luftmotståndet och bibehålla markhastigheten, vilket ökar motorströmmen icke-linjärt.',
  },
  {
    question: 'Hur påverkar hovringstiden vid målet point of no return?',
    answer: 'Hovringstiden över målområdet drar direkt användbar energi från batteriet innan den återstående säkra flygradien beräknas.',
  },
  {
    question: 'Vad orsakar spänningsfall under tung belastning på LiPo-batterier?',
    answer: 'Högt strömuttag ökar inre motståndsförluster i litiumcellerna, vilket minskar de effektivt användbara wattimmarna.',
  },
];

const howToSteps = [
  {
    name: 'Ange batteri- och drivlinespecifikationer',
    text: 'Fyll i batterikapacitet i mAh, nominell spänning och genomsnittlig strömförbrukning.',
  },
  {
    name: 'Ställ in avstånd och hovringstid',
    text: 'Ange enkel vägsträcka och planerad hovringstid över målområdet.',
  },
  {
    name: 'Konfigurera vindhastighet och vindriktning',
    text: 'Välj vindhastighet och vindvinkel i förhållande till utresan.',
  },
  {
    name: 'Granska säkerhetsradie och telemetri',
    text: 'Analysera den beräknade point of no return, strömförbrukning per sträcka och återstående laddning vid landning.',
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Drönare Uppdrag Batterireserv Planerare',
    subtitle: 'Beräkna säkra reserver för hemflygning och uppdragsradier',
    description: 'Noggrann drönarplanering med motvindskorrigering och point of no return gränsvärden.',
    sections: {
      batteryPropulsion: '1. Batteri & Drivlina',
      flightAtmosphere: '2. Flygprofil & Atmosfär',
    },
    inputs: {
      unitSystemLabel: 'Enhetssystem',
      metricLabel: 'Metrisk',
      imperialLabel: 'Imperial',
      presetLabel: 'Snabbkonfigurationer',
      batteryCapacityLabel: 'Batterikapacitet',
      batteryVoltageLabel: 'Nominell Spänning',
      averageCurrentLabel: 'Genomsnittlig Ström',
      cruiseSpeedLabel: 'Flyghastighet i Luften',
      oneWayDistanceLabel: 'Enkel Vägavstånd',
      targetHoverTimeLabel: 'Hovringstid vid Målet',
      windSpeedLabel: 'Vindhastighet',
      windDirectionLabel: 'Vindriktning Relativt Utresan',
      windHeadwindLabel: 'Motvind Utresa',
      windTailwindLabel: 'Medvind Utresa',
      windCrosswindLabel: 'Sidovind',
      reservePolicyLabel: 'Säkerhets-Reservbuffer',
    },
    presets: {
      mappingSurvey: 'Fotogrammetri & Kartering',
      fpvRecon: 'FPV Långdistansspaning',
      cinematicInspection: 'Konstruktionsinspektion',
      microRecon: 'Mikrodrönaruppdrag',
      surveyMeta: 'kartering',
      scoutMeta: 'spaning',
      hoverMeta: 'hovring',
    },
    results: {
      totalCapacityEnergy: 'Total Energikapacitet',
      usableEnergy: 'Användbar Uppdragsenergi',
      reserveEnergyBuffer: 'Reserv-energibuffer',
      totalAutonomyTime: 'Total Flygautonomi',
      maxSafeMissionRadius: 'Point of No Return Radie',
      outboundLegTime: 'Varaktighet Utresa',
      targetHoverTime: 'Varaktighet Hovring Mål',
      returnLegTime: 'Varaktighet Hemresa',
      totalMissionTime: 'Total Transitvaraktighet',
      remainingEnergyLanding: 'Beräknad Batterinivå vid Landning',
      feasibilityStatus: 'Bedömning av Uppdragsgenomförbarhet',
      voltageSagSubLabel: 'Spänningsfall',
      maxRadiusSubLabel: 'Max säker radie med hovring',
      powerSubLabel: 'Effekt',
    },
    statusBadges: {
      optimalTitle: 'OPTIMAL ENERGIRESERV MARGINAL',
      optimalSubtitle: 'Säker flygprofil med tillräcklig landningsreserv',
      tightTitle: 'SNÄV ENERGIRESERV MARGINAL',
      tightSubtitle: 'Låg landningsreserv, övervaka batterispänningen noga',
      criticalTitle: 'KRITISK ENERGIVARNING',
      criticalSubtitle: 'Reserv överskriden, påbörja hemflygning omedelbart',
      exceededTitle: 'UPPDRAGET ÖVERSKRIDER SÄKER KAPACITET',
      exceededSubtitle: 'Otillräcklig energi för att slutföra uppdraget säkert',
    },
    chart: {
      batteryProfileTitle: 'ICKE-LINJÄR ENERGIFÖRDELNINGSPROFIL',
      modelTitle: 'AERODYNAMISK EFFEKT- OCH VINDMODELL',
      windLabel: 'Vind',
      homeNode: 'HEM',
      targetNode: 'MÅL',
      landNode: 'LANDA',
      launchPadLabel: 'Startplats',
      surveyHoverLabel: 'Hovring vid mål',
      safeRadiusLabel: 'Säker radie',
      outboundSegment: 'Utresa',
      targetSegment: 'Hovring',
      returnSegment: 'Hemresa',
      reserveSegment: 'Reserv',
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
      html: 'Flygsäkerhet för drönare bygger på icke-linjära fysikaliska principer. Att flyga mot vinden kräver en brantare lutning för att övervinna motståndet och hålla hastigheten.',
    },
    {
      type: 'paragraph',
      html: 'Vår planerare beräknar dynamiskt effektförbrukningen för varje delsträcka under rådande vindförhållanden.',
    },
    {
      type: 'title',
      text: 'Beräkning av Hovringstid vid Målområdet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inspektions- och karteringsuppdrag kräver hovring över målet. Denna energiförbrukning dras av innan den maximala returradien beräknas.',
    },
    {
      type: 'list',
      items: [
        'Ange hovringstiden innan du beräknar gränserna.',
        'Ta hänsyn till effekttoppar i motvind.',
        'Övervaka spänningsfall i LiPo-celler under belastning.',
        'Inled returen så snart reservbufferten nås.',
      ],
    },
    {
      type: 'tip',
      title: 'Varning för Spänningsfall i LiPo Batterier',
      html: 'Höga strömmar orsakar tillfälliga spänningsfall på grund av inre motstånd, vilket minskar den användbara energin.',
    },
    {
      type: 'title',
      text: 'Formler för Beräkning av Drönarens Batterireserv',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parameter', 'Formel / Modell', 'Enhet'],
      rows: [
        ['Bruttoenergi', 'Kapacitet (mAh) x Spänning (V) / 1000', 'Wattimmar (Wh)'],
        ['Förlust från Sag', 'Bruttoenergi x Sag-faktor', 'Wattimmar (Wh)'],
        ['Effekt i Vind', 'Grundeffekt x (1 + 0.65 x WindRatio)^1.3', 'Watt (W)'],
        ['Max Säker Radie', '(Användbar Energi - Hovringsenergi) / Förbrukning per Km', 'Kilometer (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Bästa Praxis för Flygplanering med Drönare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jämför alltid uppmätt telemetri med förhandsberäkningar för högsta säkerhet under kommersiella uppdrag.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
