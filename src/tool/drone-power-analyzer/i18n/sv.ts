import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drona-kraft-analysator';
const title = 'Drone Power Analyzer: Kraft och vikt förhållande kalkylator för FPV';
const description = 'Beräkna det kritiska kraft-vikt-förhållandet för ditt FPV-drönarbygge. Få omedelbara rekommendationer för flygprofiler, visuell effektmätare och optimera för cinematic, freestyle eller racing.';

const faqItems = [
  {
    question: 'Vad är kraft-vikt-förhållande och varför är det viktigt?',
    answer: 'Kraft-vikt-förhållandet (Thrust-to-Weight ratio) är den totala dragkraften din drönare kan producera delat med dess totala startvikt (AUW). Det är det enskilt viktigaste mätvärdet som avgör hur din drönare känns att flyga - från långsam och stabil (cinematografi) till ultra-responsiv (racing).',
  },
  {
    question: 'Vad är det ideala förhållandet ("sweet spot") för freestyle-flygning?',
    answer: 'För smidig freestyle-flygning ligger det ideala förhållandet mellan 4:1 och 6:1. Ett 4:1-förhållande ger utmärkt rörlighet med god stabilitet, medan 6:1 är extremt responsivt men kräver mer finess med gasreglaget i trånga utrymmen.',
  },
  {
    question: 'Kan jag använda detta för cinematic-byggen?',
    answer: 'Ja. För mjuka, långsamma filmsekvenser bör du sikta på ett förhållande mellan 2:1 och 3:1. Detta håller drönaren stabil och förutsägbar. Allt lägre blir svårt att kontrollera; allt högre kommer att kännas för nervöst för långsamma rörelser.',
  },
  {
    question: 'Vad händer om mitt förhållande är över 8:1?',
    answer: 'Över 8:1 är din drönare i praktiken en racingmaskin - extremt reaktiv och krävande att flyga. Endast erfarna piloter bör försöka sig på dessa byggen. Utmärkt för racing-gates och hastighetskörningar, men farligt inomhus.',
  },
  {
    question: 'Ska jag inkludera batterivikten i AUW?',
    answer: 'Ja. AUW (All-Up Weight) är den totala vikten för din drönare med alla komponenter installerade: ram, motorer, ESC:er, flight controller, kamera, batteri, propellrar - allt. Använd batteri-presets för att lägga till vikt direkt.',
  },
];

const howToSteps = [
  {
    name: 'Välj motorkonfiguration',
    text: 'Välj om ditt bygge är en Quad (4), Hexa (6) eller Octo (8) motorkonfiguration. Denna multiplikator är avgörande för den totala dragkraften.',
  },
  {
    name: 'Ange motorkraft',
    text: 'Ange den maximala dragkraften varje motor kan producera (i gram). Du hittar detta i motorspecifikationerna eller använd snabbinställningarna.',
  },
  {
    name: 'Ställ in totalvikt',
    text: 'Ange din drönares totala startvikt (AUW) - ram, motorer, batteri, kamera, allt. Använd batteri-presets för omedelbar viktjustering.',
  },
  {
    name: 'Läs av dina resultat',
    text: 'Kalkylatorn visar omedelbart ditt kraft-vikt-förhållande, lämplighet för flygprofil (Cinematic, Freestyle, Racing) och en personlig rekommendation.',
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
    motorCount: 'Antal motorer',
    thrustPerMotor: 'Kraft per motor (max)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Snabbinställningar motor',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Viktkonfiguration',
    auwLabel: 'Total startvikt (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Växla till lbs',
    switchToGrams: 'Växla till g',
    batteryPresets: 'Lägg till batterivikt',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Total dragkraft',
    twRatio: 'Kraft-vikt-förhållande',
    powerMeter: 'Effektmätare',
    flightProfiles: 'Bedömning av flygprofil',
    cinematicLabel: 'Cinematic',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Racing',
    proRacingLabel: 'Pro Racing',
    suitable: 'Lämplig',
    notSuitable: 'Inte lämplig',
    recommendationLabel: 'Rekommendation av flygstil',
    recommendation_low: 'Med ett förhållande under 2:1 kommer din drönare att ha problem med stabiliteten. Överväg att minska vikten eller uppgradera motorerna för bättre prestanda.',
    recommendation_cinematic: 'Med ett förhållande på {ratio}:1 är detta idealiskt för tung cinematic-flygning med mjuka, kontrollerade rörelser. Perfekt för långsamt, medvetet kameraarbete.',
    recommendation_freestyle: 'Med ett förhållande på {ratio}:1 är detta det ideala läget för freestyle-flygning. Utmärkt rörlighet med bibehållen stabilitet för trick.',
    recommendation_racing: 'Med ett förhållande på {ratio}:1 befinner vi oss i prestanda-freestyle-territorium. Gasreglering är avgörande i trånga utrymmen och vid höghastighetsmanövrer.',
    recommendation_extreme: 'Med ett förhållande på {ratio}:1 är detta en racingmaskin. Extremt reaktiv - endast för erfarna piloter i öppna områden.',
    compareMode: 'Jämför byggen',
    scenario1: 'Bygge A',
    scenario2: 'Bygge B',
    addComparison: 'Lägg till jämförelse',
    tooltipTWRatio: 'Kraft-vikt-förhållandet är den totala dragkraften dividerat med drönarens vikt. Ett högre förhållande innebär snabbare acceleration och mer responsiv kontroll.',
    tooltipFreestyle: 'Det ideala förhållandet för freestyle-flygning är 4:1 till 6:1, vilket ger den bästa balansen mellan rörlighet och kontroll.',
    badge_unstable: 'Ostabil',
    badge_cinematic: 'Cinematic',
    badge_sweetSpot: 'Idealisk',
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
      text: 'Förstå kraft-vikt-förhållande för FPV-drönare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Kraft-vikt-förhållandet</strong> är kanske det enskilt viktigaste mätvärdet när man bygger FPV-drönare. Ändå förbises det av många piloter, vilket leder till byggen som inte beter sig som förväntat. Denna kalkylator reder ut begreppen och visar exakt hur ditt bygge kommer att kännas att flyga.',
    },
    {
      type: 'title',
      text: 'Varför kraft-vikt-förhållandet är viktigt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Din drönares förhållande avgör tre grundläggande saker: <strong>stabilitet</strong>, <strong>responsivitet</strong> och <strong>hastighet</strong>. Ett 2:1-förhållande känns trögt och stabilt. Ett 6:1-förhållande känns nervöst och rörligt. Ett 10:1-förhållande är en racingmaskin. Genom att förstå var ditt bygge hamnar på detta spektrum kan du välja rätt flygstil och sätta realistiska förväntningar.',
    },
    {
      type: 'title',
      text: 'Flygprofiler förklarade',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cinematic (2:1 - 4:1)</strong>: Tung, stabil, långsam. Idealiskt för mjuka kamerarörelser och byggen som bär tung last.',
        '<strong>Freestyle (3.5:1 - 6.5:1)</strong>: Det balanserade idealläget. Responsivt nog för trick, stabilt nog för kontroll.',
        '<strong>Racing (5:1 - 8:1)</strong>: Snabb och rörlig. Designad för racing-gates och aggressiva manövrer.',
        '<strong>Pro Racing (7:1+)</strong>: Extrem prestanda. Endast för expertpiloter i öppna områden.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man beräknar kraft-vikt-förhållandet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Formeln är enkel: <strong>förhållande = (Kraft per motor × Antal motorer) / Total startvikt</strong>. Till exempel, en Quad med 600g-motorer (2 400g total dragkraft) som väger 800g ger ett 3:1-förhållande. Detta är freestyle-territorium.',
    },
    {
      type: 'title',
      text: 'Välja rätt förhållande för ditt bygge',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fråga dig själv: <em>Hur ska jag flyga?</em> Långsamma cinematic-bilder? Aggressiva freestyle-trick? Höghastighetsracing? Ditt svar avgör ditt ideala förhållande. De flesta FPV-piloter hamnar mellan 4:1 och 6:1 eftersom det erbjuder den bästa kompromissen mellan kontroll och spänning.',
    },
    {
      type: 'paragraph',
      html: 'Kom ihåg: ett högre förhållande betyder inte "bättre". Det betyder "mer responsivt". På en racingdrönare är det nödvändigt. På ett cinematic-bygge är det en nackdel. Välj med omsorg.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
