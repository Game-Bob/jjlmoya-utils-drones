import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'dron-missie-accureserve-planner';
const title = 'Drone Missie Accureserve Planner';
const description = 'Bereken veilige accureserves voor terugkeer, tegenwindverliezen en maximale vluchtradius voor UAV-missies.';

const faqItems = [
  {
    question: 'Waarom verbruikt vliegen tegen de wind in meer energie?',
    answer: 'Vliegen tegen de wind vereist een steilere hellingshoek om de luchtweerstand te overwinnen en de grondsnelheid te behouden, wat de motorstroom niet-lineair verhoogt.',
  },
  {
    question: 'Hoe beïnvloedt de zweeftijd boven het doel de point of no return?',
    answer: 'Zweeftijd boven de doelzone verbruikt direct bruikbare accu-energie voordat de resterende veilige vliegradius wordt berekend.',
  },
  {
    question: 'Wat veroorzaakt spanninginval bij LiPo-accu s onder zware belasting?',
    answer: 'Hoge stroomafname verhoogt de inwendige weerstandsverliezen in lithiumcellen, waardoor de effectief bruikbare watturen afnemen.',
  },
];

const howToSteps = [
  {
    name: 'Voer accu- en aandrijfspecificaties in',
    text: 'Voer de capaciteit in mAh, nominale spanning en gemiddelde stroomafname in.',
  },
  {
    name: 'Stel vluchtafstand en doelzweeftijd in',
    text: 'Bepaal de enkele reisafstand en de geplande zweeftijd boven de doelzone.',
  },
  {
    name: 'Configureer windsnelheid en richting',
    text: 'Selecteer de windsnelheid en de richting ten opzichte van de heenreis.',
  },
  {
    name: 'Controleer veiligheidsradius en telemetrie',
    text: 'Analyseer de berekende point of no return, het stroomverbruik per fase en de resterende lading bij landing.',
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
    title: 'Drone Missie Accureserve Planner',
    subtitle: 'Bereken veilige accureserves voor terugkeer, windinvloeden en vliegradia',
    description: 'Nauwkeurige planningssoftware voor dronevluchten met tegenwindcorrecties en point of no return drempels.',
    sections: {
      batteryPropulsion: '1. Accu & Aandrijving',
      flightAtmosphere: '2. Vluchtprofiel & Atmosfeer',
    },
    inputs: {
      unitSystemLabel: 'Eenhedensysteem',
      metricLabel: 'Metrisch',
      imperialLabel: 'Imperiaal',
      presetLabel: 'Snelle Missie Presets',
      batteryCapacityLabel: 'Accucapaciteit',
      batteryVoltageLabel: 'Nominale Spanning',
      averageCurrentLabel: 'Gemiddelde Kruisstroom',
      cruiseSpeedLabel: 'Luchtsnelheid Kruissnelheid',
      oneWayDistanceLabel: 'Enkele Reisafstand',
      targetHoverTimeLabel: 'Operationele Duur op Doel',
      windSpeedLabel: 'Windsnelheid',
      windDirectionLabel: 'Windrichting t.o.v. Heenreis',
      windHeadwindLabel: 'Tegenwind op Heenreis',
      windTailwindLabel: 'Mee-wind op Heenreis',
      windCrosswindLabel: 'Zijwind',
      reservePolicyLabel: 'Veiligheids-Reservebuffer',
    },
    presets: {
      mappingSurvey: 'Fotogrammetrie & Kartografie',
      fpvRecon: 'FPV Long Range Verkenning',
      cinematicInspection: 'Cinematografische Inspectie',
      microRecon: 'Micro Drone Missie',
      surveyMeta: 'kartografie',
      scoutMeta: 'verkenning',
      hoverMeta: 'zweven',
    },
    results: {
      totalCapacityEnergy: 'Totale Energiecapaciteit',
      usableEnergy: 'Bruikbare Missie-energie',
      reserveEnergyBuffer: 'Reserve-energiebuffer',
      totalAutonomyTime: 'Totale Vluchtautonomie',
      maxSafeMissionRadius: 'Point of No Return Radius',
      outboundLegTime: 'Duur Heenreis',
      targetHoverTime: 'Duur Zweven op Doel',
      returnLegTime: 'Duur Terugreis',
      totalMissionTime: 'Totale Transittijd',
      remainingEnergyLanding: 'Geschatte Acculading bij Landing',
      feasibilityStatus: 'Beoordeling Haalbaarheid Missie',
      voltageSagSubLabel: 'Spanninginval',
      maxRadiusSubLabel: 'Max veilige radius met zweven',
      powerSubLabel: 'Vermogen',
    },
    statusBadges: {
      optimalTitle: 'OPTIMALE ENERGIERESERVE MARGE',
      optimalSubtitle: 'Veilig vluchtprofiel met voldoende reserve bij landing',
      tightTitle: 'KRAPPE ENERGIERESERVE MARGE',
      tightSubtitle: 'Lage reserve bij landing, controleer de accuspanning nauwlettend',
      criticalTitle: 'KRITIEKE ENERGIEWAARSCHUWING',
      criticalSubtitle: 'Reserve overschreden, zet direct de terugkeer in',
      exceededTitle: 'MISSIE OVERSCHRIJDT VEILIGE CAPACITEIT',
      exceededSubtitle: 'Onvoldoende accu energie om de missie veilig af te ronden',
    },
    chart: {
      batteryProfileTitle: 'NIET-LINEAIR ENERGIEVERDELINGSPROFIEL',
      modelTitle: 'AERODYNAMISCH VERMOGENS- EN WINDMODEL',
      windLabel: 'Wind',
      homeNode: 'HOME',
      targetNode: 'DOEL',
      landNode: 'LANDING',
      launchPadLabel: 'Startplaats',
      surveyHoverLabel: 'Zweven op doel',
      safeRadiusLabel: 'Veilige radius',
      outboundSegment: 'Heenreis',
      targetSegment: 'Zweven',
      returnSegment: 'Terugreis',
      reserveSegment: 'Reserve',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Aerodynamische Vermogensverliezen bij Tegenwind',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De vliegveiligheid van onbemande luchtvaartuigen berust op niet-lineaire natuurkundige principes. Tegen de wind in vliegen vereist een steilere hellingshoek om de luchtweerstand te overwinnen en de grondsnelheid te behouden.',
    },
    {
      type: 'paragraph',
      html: 'Onze planner berekent dynamisch het vermogensverbruik per vluchtsegment rekening houdend met de windomstandigheden.',
    },
    {
      type: 'title',
      text: 'Berekening van Zweeftijd boven het Doelgebied',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inspectie- en kartografiedrones brengen tijd zwevend door boven het werkgebied. Deze fase verbruikt continu energie voor de terugreis.',
    },
    {
      type: 'list',
      items: [
        'Voer de zweeftijd in voordat u de vluchtgrenzen berekent.',
        'Houd rekening met vermogenspieken bij tegenwind.',
        'Monitort spanninginval bij LiPo-cellen onder zware belasting.',
        'Zet de terugkeer in zodra de reservebuffer wordt bereikt.',
      ],
    },
    {
      type: 'tip',
      title: 'Waarschuwing voor Spanninginval bij LiPo Accu s',
      html: 'Hoge stromen veroorzaken tijdelijke spanningsval door inwendige weerstand, wat de bruikbare energie vermindert.',
    },
    {
      type: 'title',
      text: 'Formules voor het Berekenen van de Accureserve',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parameter', 'Formule / Model', 'Eenheid'],
      rows: [
        ['Bruto Energie', 'Capaciteit (mAh) x Spanning (V) / 1000', 'Wattuur (Wh)'],
        ['Verlies door Inval', 'Bruto Energie x Sag Factor', 'Wattuur (Wh)'],
        ['Vermogen bij Wind', 'Basisvermogen x (1 + 0.65 x WindRatio)^1.3', 'Watt (W)'],
        ['Max Veilige Radius', '(Bruikbare Energie - Zweef-energie) / Verbruik per Km', 'Kilometer (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Best Practices voor Vluchtplanning met Drones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vergelijk automatische telemetrie altijd met vluchtberekeningen vooraf voor maximale operationele veiligheid.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
