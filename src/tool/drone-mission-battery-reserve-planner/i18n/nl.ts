import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'dron-missie-accureserve-planner';
const title = 'Drone Missie Accureserve Planner';
const description = 'Bereken veilige accureserves voor Return-to-Home, tegenwindbelasting en maximale actieradius van drones.';

const faqItems = [
  {
    question: 'Waarom verbruikt vliegen tegen de wind in meer energie?',
    answer: 'Vliegen tegen de wind vereist een steilere hellingshoek om luchtweerstand te overwinnen en grondsnelheid te behouden, wat het stroomverbruik verhoogt.',
  },
  {
    question: 'Hoe beïnvloedt de werkduur op de doelchoek het Point of No Return?',
    answer: 'Zweeftijd op de doellocatie verbruikt direct bruikbare accu-energie, waardoor de maximale heen-en-weerafstand afneemt.',
  },
  {
    question: 'Wat veroorzaakt spanningsval onder belasting bij LiPo-accu s?',
    answer: 'Hoge ontlaadstromen verhogen interne weerstandsverliezen in lithiumcellen, wat het aantal effectief bruikbare Wattuur vermindert.',
  },
];

const howToSteps = [
  {
    name: 'Voer accu- en aandrijfspecificaties in',
    text: 'Voer accucapaciteit in mAh, nominale spanning en gemiddeld stroomverbruik in.',
  },
  {
    name: 'Stel afstand en doelduur in',
    text: 'Bepaal de enkele reisafstand en de verwachte zweeftijd op de doellocatie.',
  },
  {
    name: 'Stel windsnelheid en windrichting in',
    text: 'Kies windsnelheid en koers ten opzichte van de heenreis.',
  },
  {
    name: 'Bekijk actieradius en telemetrie',
    text: 'Analyseer het berekende Point of No Return, energieverbruik per traject en accuniveau bij landing.',
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
    subtitle: 'Bereken veiligheidsmarges voor de terugvlucht, windinvloeden en vliegradius',
    description: 'Nauwkeurige accureserveberekening voor dronevluchten met tegenwindcorrectie en Point of No Return drempels.',
    inputs: {
      unitSystemLabel: 'Eenhedenstelsel',
      metricLabel: 'Metrisch',
      imperialLabel: 'Imperiaal',
      presetLabel: 'Snelle Missie-instellingen',
      batteryCapacityLabel: 'Accucapaciteit',
      batteryVoltageLabel: 'Nominale Spanning',
      averageCurrentLabel: 'Gemiddelde Kruisstroom',
      cruiseSpeedLabel: 'Luchtsnelheid Kruisvlucht',
      oneWayDistanceLabel: 'Afstand Enkele Reis',
      targetHoverTimeLabel: 'Werkduur op Doellocatie',
      windSpeedLabel: 'Windsnelheid',
      windDirectionLabel: 'Windrichting t.o.v. Heenvlucht',
      windHeadwindLabel: 'Tegenwind Heenvlucht',
      windTailwindLabel: 'Mee-wind Heenvlucht',
      windCrosswindLabel: 'Zijwind',
      reservePolicyLabel: 'Veiligheidsreserve Puffer',
    },
    presets: {
      mappingSurvey: 'Fotogrammetrie & Kartografie',
      fpvRecon: 'FPV Long Range Verkenning',
      cinematicInspection: 'Cinematografische Inspectie',
      microRecon: 'Micro Drone Verkenning',
    },
    results: {
      totalCapacityEnergy: 'Totale Energiecapaciteit',
      usableEnergy: 'Bruikbare Missie-energie',
      reserveEnergyBuffer: 'Reserve-energie Puffer',
      totalAutonomyTime: 'Totale Vliegtijd Autonomie',
      maxSafeMissionRadius: 'Point of No Return Straal',
      outboundLegTime: 'Duur Heenvlucht',
      targetHoverTime: 'Duur Zweefvlucht op Doel',
      returnLegTime: 'Duur Terugvlucht',
      totalMissionTime: 'Totale Transittijd',
      remainingEnergyLanding: 'Geschat Accuniveau bij Landing',
      feasibilityStatus: 'Beoordeling van Haalbaarheid',
    },
    statusBadges: {
      optimal: 'Optimale Accureserve Marge',
      tight: 'Waarschuwing Krappe Reserve',
      critical: 'Kritieke Energiewaarschuwing',
      exceeded: 'Missie Overschrijdt Veilige Capaciteit',
    },
    chart: {
      batteryProfileTitle: 'Energieverbruiksprofiel van de Accu',
      outboundSegment: 'Heenvlucht Traject',
      targetSegment: 'Zweefvlucht op Doellocatie',
      returnSegment: 'Terugvlucht naar Basis',
      reserveSegment: 'Veiligheidsreserve Puffer',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Aerodynamische Belasting bij Tegenwind',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vliegen tegen de wind vereist een grotere hellingshoek om de luchtweerstand te overwinnen en de grondsnelheid op peil te houden.',
    },
    {
      type: 'title',
      text: 'Berekening van Zweeftijd op de Doellocatie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inspectie- en kartografiedrones verblijven tijd zwevend boven het werkgebied, wat energie verbruikt voordat de terugvlucht begint.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
