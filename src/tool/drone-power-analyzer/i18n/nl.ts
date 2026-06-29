import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-vermogen-analysator';
const title = 'Drone Power Analyzer: Stuwkracht en Gewichtsverhouding Calculator voor FPV';
const description = 'Bereken de cruciale stuwkracht-gewichtsverhouding voor je FPV-drone build. Ontvang direct aanbevelingen voor vluchtprofielen, een visuele powermeter en optimaliseer voor cinematic, freestyle of racing.';

const faqItems = [
  {
    question: 'Wat is de stuwkracht-gewichtsverhouding en waarom is het belangrijk?',
    answer: 'De stuwkracht-gewichtsverhouding is de totale stuwkracht die je drone kan produceren gedeeld door het totale startgewicht (AUW). Het is de belangrijkste metriek die bepaalt hoe je drone aanvoelt tijdens het vliegen - van traag en stabiel (cinematografie) tot ultra-reactief (racing).',
  },
  {
    question: 'Wat is de ideale verhouding ("sweet spot") voor freestyle vliegen?',
    answer: 'Voor vloeiend freestyle vliegen ligt de sweet spot tussen 4:1 en 6:1. Een verhouding van 4:1 biedt uitstekende wendbaarheid met goede stabiliteit, terwijl 6:1 extreem reactief is maar meer precisie vereist met het gas in krappe ruimtes.',
  },
  {
    question: 'Kan ik dit gebruiken voor cinematic builds?',
    answer: 'Ja. Voor vloeiende, trage cinematic beelden moet je mikken op een verhouding van 2:1 tot 3:1. Dit houdt de drone stabiel en voorspelbaar. Alles lager wordt moeilijk te besturen; alles hoger zal te nerveus aanvoelen voor trage bewegingen.',
  },
  {
    question: 'Wat gebeurt er als mijn verhouding boven de 8:1 ligt?',
    answer: 'Boven de 8:1 is je drone effectief een racemachine - extreem reactief en veeleisend om mee te vliegen. Alleen ervaren piloten zouden deze builds moeten proberen. Geweldig voor race-gates en speedruns, maar gevaarlijk binnenshuis.',
  },
  {
    question: 'Moet ik het batterijgewicht meerekenen in het AUW?',
    answer: 'Ja. AUW (All-Up Weight) is het totale gewicht van je drone met alle componenten geïnstalleerd: frame, motoren, ESC\'s, flight controller, camera, batterij, props - alles. Gebruik de batterij-presets voor directe gewichtstoevoeging.',
  },
];

const howToSteps = [
  {
    name: 'Selecteer Motornconfiguratie',
    text: 'Kies of je build een Quad (4), Hexa (6) of Octo (8) motorconfiguratie heeft. Deze vermenigvuldiger is cruciaal voor de totale stuwkracht.',
  },
  {
    name: 'Voer Motorstuwkracht in',
    text: 'Voer de maximale stuwkracht in die elke motor kan produceren (in grammen). Je kunt dit vinden in de motorspecificaties of gebruik de snelle presets.',
  },
  {
    name: 'Stel Totaal Gewicht in',
    text: 'Voer het totale startgewicht (AUW) van je drone in - frame, motoren, batterij, camera, alles. Gebruik de batterij-presets voor directe gewichtsaanpassing.',
  },
  {
    name: 'Lees je Resultaten',
    text: 'De calculator toont direct je stuwkracht-gewichtsverhouding, geschiktheid voor vluchtprofielen (Cinematic, Freestyle, Racing) en een persoonlijk advies voor je build.',
  },
];

const schemas: DronePowerAnalyzerLocaleContent['schemas'] = [
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

export const content: DronePowerAnalyzerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    motorConfiguration: 'Motorconfiguratie',
    motorCount: 'Aantal Motoren',
    thrustPerMotor: 'Stuwkracht per Motor (max)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Snelle Motor-presets',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Gewichtsconfiguratie',
    auwLabel: 'Totaal Startgewicht (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Wissel naar lbs',
    switchToGrams: 'Wissel naar g',
    batteryPresets: 'Batterijgewicht Toevoegen',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Totale Stuwkracht',
    twRatio: 'Stuwkracht-Gewichtsverhouding',
    powerMeter: 'Powermeter',
    flightProfiles: 'Beoordeling Vluchtprofiel',
    cinematicLabel: 'Cinematic',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Racing',
    proRacingLabel: 'Pro Racing',
    suitable: 'Geschikt',
    notSuitable: 'Niet Geschikt',
    recommendationLabel: 'Advies Vliegstijl',
    recommendation_low: 'Met een verhouding onder 2:1 zal je drone moeite hebben met stabiliteit. Overweeg gewicht te verminderen of motoren te upgraden voor betere prestaties.',
    recommendation_cinematic: 'Met een verhouding van {ratio}:1 is dit ideaal voor heavy-lift cinematografie met vloeiende, gecontroleerde bewegingen. Perfect voor traag, bewust camerawerk.',
    recommendation_freestyle: 'Met een verhouding van {ratio}:1 is dit de sweet spot voor freestyle vliegen. Uitstekende wendbaarheid met behoud van stabiliteit voor tricks.',
    recommendation_racing: 'Met een verhouding van {ratio}:1 bevinden we ons op het terrein van performance freestyle. Gasbeheersing is cruciaal in krappe ruimtes en bij manoeuvres op hoge snelheid.',
    recommendation_extreme: 'Met een verhouding van {ratio}:1 is dit een racemachine. Extreem reactief - alleen voor ervaren piloten in open gebieden.',
    compareMode: 'Builds Vergelijken',
    scenario1: 'Build A',
    scenario2: 'Build B',
    addComparison: 'Vergelijking Toevoegen',
    tooltipTWRatio: 'Stuwkracht-gewichtsverhouding is de totale stuwkracht gedeeld door het gewicht van de drone. Een hogere verhouding betekent snellere acceleratie en reactievere besturing.',
    tooltipFreestyle: 'De "sweet spot" voor freestyle vliegen is een verhouding van 4:1 tot 6:1, wat de beste balans biedt tussen wendbaarheid en controle.',
    badge_unstable: 'Onstabiel',
    badge_cinematic: 'Cinematic',
    badge_sweetSpot: 'Sweet Spot',
    badge_racing: 'Racing',
    badge_extreme: 'Extreem',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'Stuwkracht-Gewichtsverhouding voor FPV-drones Begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De <strong>stuwkracht-gewichtsverhouding</strong> is misschien wel de meest kritische metriek bij het bouwen van FPV-drones. Toch zien veel piloten dit over het hoofd, wat leidt tot builds die zich niet gedragen zoals verwacht. Deze calculator demystificeert de berekening en laat je precies zien hoe je build zal aanvoelen tijdens het vliegen.',
    },
    {
      type: 'title',
      text: 'Waarom Stuwkracht-Gewichtsverhouding Belangrijk is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De verhouding van je drone bepaalt drie fundamentele dingen: <strong>stabiliteit</strong>, <strong>reactievermogen</strong> en <strong>snelheid</strong>. Een 2:1 verhouding voelt traag en stabiel aan. Een 6:1 verhouding voelt nerveus en wendbaar aan. Een 10:1 verhouding is een racemachine. Begrijpen waar jouw build in dit spectrum valt, helpt je de juiste vliegstijl te kiezen.',
    },
    {
      type: 'title',
      text: 'Vluchtprofielen Uitgelegd',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cinematic (2:1 - 4:1)</strong>: Zwaar, stabiel, traag. Ideaal voor vloeiende camerabewegingen en builds die een payload dragen.',
        '<strong>Freestyle (3.5:1 - 6.5:1)</strong>: De gebalanceerde sweet spot. Reactief genoeg voor tricks, stabiel genoeg voor controle.',
        '<strong>Racing (5:1 - 8:1)</strong>: Snel en wendbaar. Ontworpen voor race-gates en agressieve manoeuvres.',
        '<strong>Pro Racing (7:1+)</strong>: Extreme prestaties. Alleen voor expert-piloten in open gebieden.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe de Stuwkracht-Gewichtsverhouding te Berekenen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De formule is simpel: <strong>verhouding = (Stuwkracht per Motor × Aantal Motoren) / Totaal Startgewicht</strong>. Bijvoorbeeld, een Quad met 600g motoren (2.400g totale stuwkracht) die 800g weegt, produceert een 3:1 verhouding. Dit is freestyle-terrein.',
    },
    {
      type: 'title',
      text: 'De Juiste Verhouding Kiezen voor Jouw Build',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vraag jezelf af: <em>Wat ga ik vliegen?</em> Trage cinematic shots? Agressieve freestyle tricks? High-speed racing? Jouw antwoord bepaalt je ideale verhouding. De meeste FPV-piloten komen uit tussen 4:1 en 6:1 omdat het de beste balans biedt tussen controle en spanning.',
    },
    {
      type: 'paragraph',
      html: 'Onthoud: een hogere verhouding betekent niet "beter". Het betekent "reactiever". Op een racing quad is dat essentieel. Op een cinematic build is het een belemmering. Kies bewust.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
