import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drohnen-leistungs-analysator';
const title = 'Drohnen Leistungsanalysator: Schub und Gewichts Verhältnis Rechner für FPV';
const description = 'Berechnen Sie das kritische Schub-Gewichts-Verhältnis für Ihren FPV-Drohnenbau. Erhalten Sie sofortige Flugprofil-Empfehlungen, eine visuelle Leistungsanzeige und optimieren Sie für Cinematic, Freestyle oder Racing.';

const faqItems = [
  {
    question: 'Was ist das Schub-Gewichts-Verhältnis und warum ist es wichtig?',
    answer: 'Das Schub-Gewichts-Verhältnis ist der Gesamtschub, den Ihre Drohne erzeugen kann, geteilt durch ihr Abfluggewicht (AUW). Es ist die wichtigste Kennzahl, die bestimmt, wie sich Ihre Drohne beim Fliegen anfühlt – von langsam und stabil (Cinematography) bis hin zu ultra-reaktiv (Racing).',
  },
  {
    question: 'Was ist das ideale Verhältnis ("Sweet Spot") für Freestyle-Flüge?',
    answer: 'Für flüssige Freestyle-Flüge liegt der Sweet Spot zwischen 4:1 und 6:1. Ein Verhältnis von 4:1 bietet exzellente Agilität bei guter Stabilität, während 6:1 extrem reaktiv ist, aber mehr Feingefühl am Gashebel in engen Räumen erfordert.',
  },
  {
    question: 'Kann ich dies für Cinematography-Builds verwenden?',
    answer: 'Ja. Für flüssige, langsame Cinematography-Aufnahmen sollten Sie ein Verhältnis von 2:1 bis 3:1 anstreben. Dies hält die Drohne stabil und berechenbar. Alles darunter wird schwer zu kontrollieren; alles darüber fühlt sich für langsame Bewegungen zu nervös an.',
  },
  {
    question: 'Was passiert, wenn mein Verhältnis über 8:1 liegt?',
    answer: 'Über 8:1 ist Ihre Drohne faktisch eine Rennmaschine – extrem reaktiv und anspruchsvoll zu fliegen. Nur erfahrene Piloten sollten solche Builds versuchen. Ideal für Renntore und Speed-Runs, aber gefährlich in Innenräumen.',
  },
  {
    question: 'Muss ich das Batteriegewicht in das AUW einbeziehen?',
    answer: 'Ja. Das AUW (All-Up Weight) ist das Gesamtgewicht Ihrer Drohne mit allen installierten Komponenten: Rahmen, Motoren, ESCs, Flugsteuerung, Kamera, Batterie, Propeller – alles. Nutzen Sie die Batterie-Presets für eine sofortige Gewichtshinzufügung.',
  },
];

const howToSteps = [
  {
    name: 'Motorkonfiguration auswählen',
    text: 'Wählen Sie, ob Ihr Build eine Quad (4), Hexa (6) oder Octo (8) Motorkonfiguration ist. Dieser Multiplikator ist entscheidend für den Gesamtschub.',
  },
  {
    name: 'Motorschub eingeben',
    text: 'Geben Sie den maximalen Schub ein, den jeder Motor erzeugen kann (in Gramm). Sie finden dies in den Motorspezifikationen oder nutzen Sie die Schnell-Presets.',
  },
  {
    name: 'Gesamtgewicht festlegen',
    text: 'Geben Sie das Abfluggewicht (AUW) Ihrer Drohne ein – Rahmen, Motoren, Batterie, Kamera, alles. Nutzen Sie die Batterie-Presets für eine sofortige Gewichtsanpassung.',
  },
  {
    name: 'Ergebnisse ablesen',
    text: 'Der Rechner zeigt sofort Ihr Schub-Gewichts-Verhältnis, die Eignung des Flugprofils (Cinematic, Freestyle, Racing) und eine persönliche Empfehlung für Ihren Build.',
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
    motorConfiguration: 'Motorkonfiguration',
    motorCount: 'Motoranzahl',
    thrustPerMotor: 'Schub pro Motor (max)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Schnelle Motor-Presets',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Gewichtskonfiguration',
    auwLabel: 'Abfluggewicht (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Auf lbs umstellen',
    switchToGrams: 'Auf g umstellen',
    batteryPresets: 'Batteriegewicht hinzufügen',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Gesamtschub',
    twRatio: 'Schub-Gewichts-Verhältnis',
    powerMeter: 'Leistungsanzeige',
    flightProfiles: 'Flugprofil-Bewertung',
    cinematicLabel: 'Cinematic',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Racing',
    proRacingLabel: 'Pro Racing',
    suitable: 'Geeignet',
    notSuitable: 'Nicht geeignet',
    recommendationLabel: 'Flugstil-Empfehlung',
    recommendation_low: 'Mit einem Verhältnis unter 2:1 wird Ihre Drohne Stabilitätsprobleme haben. Erwägen Sie eine Gewichtsreduzierung oder stärkere Motoren für eine bessere Leistung.',
    recommendation_cinematic: 'Mit einem Verhältnis von {ratio}:1 ist dies ideal für Heavy-Lift-Cinematography mit sanften, kontrollierten Bewegungen. Perfekt für langsame, bewusste Kameraarbeit.',
    recommendation_freestyle: 'Mit einem Verhältnis von {ratio}:1 ist dies der Sweet Spot für Freestyle-Flüge. Exzellente Agilität bei gleichbleibender Stabilität für Tricks und Manöver.',
    recommendation_racing: 'Mit einem Verhältnis von {ratio}:1 befinden wir uns im Bereich von Performance-Freestyle. Die Gaskontrolle ist in engen Räumen und bei Hochgeschwindigkeitsmanövern entscheidend.',
    recommendation_extreme: 'Mit einem Verhältnis von {ratio}:1 ist dies eine Rennmaschine. Extrem reaktiv – nur für erfahrene Piloten in offenen Gebieten.',
    compareMode: 'Builds vergleichen',
    scenario1: 'Build A',
    scenario2: 'Build B',
    addComparison: 'Vergleich hinzufügen',
    tooltipTWRatio: 'Das Schub-Gewichts-Verhältnis ist der Gesamtschub geteilt durch das Gewicht der Drohne. Ein höheres Verhältnis bedeutet schnellere Beschleunigung und reaktivere Steuerung.',
    tooltipFreestyle: 'Der "Sweet Spot" für Freestyle-Flüge liegt bei einem Verhältnis von 4:1 bis 6:1 und bietet die beste Balance zwischen Agilität und Kontrolle.',
    badge_unstable: 'Instabil',
    badge_cinematic: 'Cinematic',
    badge_sweetSpot: 'Sweet Spot',
    badge_racing: 'Racing',
    badge_extreme: 'Extrem',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'Das Schub-Gewichts-Verhältnis bei FPV-Drohnen verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das <strong>Schub-Gewichts-Verhältnis</strong> ist vielleicht die kritischste Kennzahl beim Bau von FPV-Drohnen. Dennoch übersehen viele Piloten dies, was zu Builds führt, die sich nicht wie erwartet verhalten. Dieser Rechner entmystifiziert die Berechnung und zeigt Ihnen genau, wie sich Ihr Build beim Fliegen anfühlen wird.',
    },
    {
      type: 'title',
      text: 'Warum das Schub-Gewichts-Verhältnis wichtig ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Verhältnis Ihrer Drohne bestimmt drei grundlegende Dinge: <strong>Stabilität</strong>, <strong>Reaktionsfähigkeit</strong> und <strong>Geschwindigkeit</strong>. Ein 2:1-Verhältnis fühlt sich träge und stabil an. Ein 6:1-Verhältnis fühlt sich nervös und agil an. Ein 10:1-Verhältnis ist eine Rennmaschine. Zu verstehen, wo Ihr Build in diesem Spektrum landet, hilft Ihnen, den richtigen Flugstil zu wählen und realistische Erwartungen zu setzen.',
    },
    {
      type: 'title',
      text: 'Flugprofile erklärt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cinematic (2:1 – 4:1)</strong>: Schwer, stabil, langsam. Ideal für sanfte Kamerabewegungen und Builds, die Lasten tragen.',
        '<strong>Freestyle (3,5:1 – 6,5:1)</strong>: Der ausgewogene Sweet Spot. Reaktionsschnell genug für Tricks, stabil genug für Kontrolle.',
        '<strong>Racing (5:1 – 8:1)</strong>: Schnell und agil. Entwickelt für Renntore und aggressive Manöver.',
        '<strong>Pro Racing (7:1+)</strong>: Extreme Leistung. Nur für Expertenpiloten in offenen Gebieten.',
      ],
    },
    {
      type: 'title',
      text: 'So berechnen Sie das Schub-Gewichts-Verhältnis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Formel ist einfach: <strong>Verhältnis = (Schub pro Motor × Motoranzahl) / Abfluggewicht</strong>. Zum Beispiel erzeugt ein Quad mit 600g-Motoren (2.400g Gesamtschub) bei einem Gewicht von 800g ein Verhältnis von 3:1. Das ist Freestyle-Territorium.',
    },
    {
      type: 'title',
      text: 'Wahl des richtigen Verhältnisses für Ihren Build',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fragen Sie sich: <em>Was werde ich fliegen?</em> Langsame Cinematic-Aufnahmen? Aggressive Freestyle-Tricks? Hochgeschwindigkeits-Rennen? Ihre Antwort bestimmt Ihr ideales Verhältnis. Die meisten FPV-Piloten landen zwischen 4:1 und 6:1, da dies den besten Kompromiss zwischen Kontrolle und Spannung bietet.',
    },
    {
      type: 'paragraph',
      html: 'Denken Sie daran: Ein höheres Verhältnis bedeutet nicht "besser". Es bedeutet "reaktionsfreudiger". Auf einem Racing-Quad ist das essenziell. Bei einem Cinematic-Build ist es hinderlich. Wählen Sie bewusst.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
