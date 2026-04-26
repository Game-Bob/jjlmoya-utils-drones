import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gsd-vluchtplanner';
const title = 'GSD Vluchtplanner: Grondmonster Afstand Calculator';
const description = 'Bereken de Grondmonster Afstand (GSD) voor fotogrammetrie missies. Ondersteuning voor DJI, Autel en aangepaste camera\'s. Real-time vluchtplanning met visuele kwaliteitsindicatoren.';

const faqItems = [
  {
    question: 'Wat is Grondmonster Afstand (GSD)?',
    answer: 'GSD is de afstand op de grond die wordt vertegenwoordigd door één pixel in uw afbeelding. Een lagere GSD betekent een hogere resolutie en meer detail. Bijvoorbeeld, een 1 cm/px GSD stelt u in staat om details tot 1 centimeter groot te onderscheiden, wat cruciaal is voor landmetingen.',
  },
  {
    question: 'Hoe vind ik de specificaties van mijn drone camera?',
    answer: 'Raadpleeg de handleiding van uw drone voor de sensorafmetingen en brandpuntsafstand. U kunt ook onze camera-presets gebruiken voor populaire modellen zoals de DJI Mavic 3E of Autel EVO II. Voor aangepaste camera\'s meet u de sensorgrootte aan de hand van uw lensspecificaties.',
  },
  {
    question: 'Welke GSD heb ik nodig voor verschillende soorten missies?',
    answer: 'Hoge precisie topografie: 1-2 cm/px. Standaard kartering: 2-5 cm/px. Inspectie en monitoring: 5-10 cm/px. Visuele verkenningen: 10+ cm/px. Kies op basis van de nauwkeurigheidseisen van uw project.',
  },
  {
    question: 'Wat is overlap en waarom is het belangrijk?',
    answer: 'Overlap is het percentage van het gebied dat in opeenvolgende foto\'s verschijnt. Hoge overlap (60-80%) zorgt voor volledige dekking en verbetert de kwaliteit van het 3D-model. Frontale overlap beïnvloedt de foto-afstand; laterale overlap beïnvloedt het aantal vluchtlijnen.',
  },
  {
    question: 'Hoe bereken ik de ideale vlieghoogte?',
    answer: 'Gebruik deze calculator: Gewenste GSD × brandpuntsafstand ÷ sensorbreedte = hoogte. De calculator doet dit automatisch en toont de maximale veilige hoogte om uw doelprecisie te behouden en bewegingsonscherpte te voorkomen.',
  },
];

const howToSteps = [
  {
    name: 'Selecteer of configureer de camera',
    text: 'Kies uit voorgeconfigureerde modellen (DJI Mavic 3E, Autel EVO II, enz.) of voer handmatig de sensorafmetingen en brandpuntsafstand in. Presets laden alle parameters direct.',
  },
  {
    name: 'Stel de vlieghoogte in',
    text: 'Gebruik de hoogteschuifregelaar om de hoogte boven het maaiveld (AGL) aan te passen. Bekijk de GSD-update in real-time om te zien hoe de hoogte de beeldresolutie beïnvloedt.',
  },
  {
    name: 'Definieer overlap-eisen',
    text: 'Stel de percentages voor frontale und laterale overlap in. Hogere overlap zorgt voor volledige dekking maar verhoogt de missietijd en het aantal beelden.',
  },
  {
    name: 'Resultaten bekijken en exporteren',
    text: 'Controleer de GSD, het dekkingsgebied en de precisieclassificatie. Genereer een snel rapport om bij uw officiële vluchtplan te voegen.',
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
    configuration: 'Configuratie',
    cameraSelection: 'Cameraselectie',
    manualMode: 'Handmatige Modus',
    sensorConfig: 'Sensorconfiguratie',
    width: 'Breedte',
    height: 'Hoogte',
    focalLength: 'Brandpuntsafstand',
    imageResolution: 'Beeldresolutie',
    w: 'B',
    h: 'H',
    px: 'px',
    altitudeAgl: 'Hoogte (AGL)',
    overlapSettings: 'Overlapconfiguratie',
    forward: 'Frontaal',
    lateral: 'Lateraal',
    missionArea: 'Missiegebied',
    totalAreaToSurvey: 'Totaal te Meten Gebied',
    hectareHint: '1 ha = 10.000 m²',
    inverseCalc: 'Omgekeerde Berekening',
    targetGsd: 'Doel-GSD',
    maxAltitude: 'Max Hoogte',
    reset: 'Resetten',
    results: 'Resultaten',
    gsdResult: 'Grondmonster Afstand (GSD)',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Hoge Prec.',
    standard: 'Standaard',
    inspection: 'Inspectie',
    visual: 'Visueel',
    coveragePerImage: 'Dekking per Beeld',
    area: 'Oppervlakte',
    spacing: 'Afstand',
    flightDir: 'Vlucht →',
    missionMetrics: 'Missiegegevens',
    images: 'Beelden',
    shots: 'foto\'s',
    flightLines: 'Vluchtlijnen',
    lines: 'lijnen',
    flightTime: 'Vliegtijd',
    min: 'min',
    dataVolume: 'Datavolume',
    gb: 'GB',
    copyShareLink: 'Link Kopiëren',
    downloadReport: 'Rapport Downloaden',
    copiedToClipboard: 'Gekopieerd!',
    metric: 'Metrisch',
    imperial: 'Imperiaal',
    classHighPrecision: 'Hoge Precisie Topografie',
    classStandard: 'Standaard Kartering',
    classInspection: 'Inspectie & Monitoring',
    classVisual: 'Visuele Verkenning',
    ultraHighResAlert: 'Ultra-hoge resolutie: zorg voor voldoende opslag en rekenkracht',
    lowOverlapAlert: 'Frontale overlap onder 60%: kan de kwaliteit van het 3D-model beïnvloeden',
    largeDatasetAlert: 'Zeer grote dataset: overweeg om de vlucht op te splitsen',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'GSD Vluchtplanner: De Complete Fotogrammetrie Calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Grondmonster Afstand (GSD)</strong> is de belangrijkste waarde in drone fotogrammetrie. Een rekenfout kan een hele vliegdag verspillen en duizenden euro\'s aan verloren productiviteit kosten. Deze calculator elimineert dat risico.',
    },
    {
      type: 'title',
      text: 'Waarom GSD cruciaal is voor professionals',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Of u nu land meet, 3D-modellen maakt of infrastructuur monitort, de GSD bepaalt het detailniveau dat u kunt vastleggen. Een missie met 1 cm/px legt details vast die een missie met 5 cm/px mist. Maar te laag vliegen verspilt de accu en verlengt de missietijd onnodig.',
    },
    {
      type: 'title',
      text: 'GSD per missietype',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Hoge Precisie Topografie (1-2 cm/px):</strong> Landmeetkundige nauwkeurigheit voor percelen, mijnbouwlocaties en technische projecten.',
        '<strong>Standaard Kartering (2-5 cm/px):</strong> Orthomozaïeken, landbouwmonitoring en algemene kaarten.',
        '<strong>Inspectie en Monitoring (5-10 cm/px):</strong> Gebouwinspecties, controle van hoogspanningslijnen en veranderingsdetectie.',
        '<strong>Visuele Verkenning (10+ cm/px):</strong> Verkenning van grote gebieden en visuele beoordeling.',
      ],
    },
    {
      type: 'title',
      text: 'De GSD-formule',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Hoogte × Sensorbreedte) / (Brandpuntsafstand × Beeldbreedte) × 100</code><br/>Deze calculator regelt de wiskunde. U concentreert zich op de missie.',
    },
    {
      type: 'title',
      text: 'Overlap: Waarom 60-80% optimaal is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lage overlap (20-40%) bespaart de accu maar riskeert gaten in de dekking. Hoge overlap (80%+) garandeert volledige dekking maar verlengt de missietijd. Het <strong>bereik van 60-80%</strong> is de professionele standaard: het zorgt voor een volledige 3D-reconstructie zonder overbodige redundantie.',
    },
    {
      type: 'title',
      text: 'Plan betere missies met echte data',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gebruik voor elke vlucht deze calculator om te bepalen: de exacte hoogte voor uw benodigde GSD, hoeveel foto\'s u nodig heeft, de totale missietijd en of er risico is op bewegingsonscherpte. Met deze gegevens voert u nauwkeurige missies uit en voorkomt u kostbare fouten.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
