import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-race-rondetimer';
const title = 'FPV Drone Race Ronden en Splittimer';
const description = 'Interactieve rondetimer voor FPV drone racing met FAI akoestische startsequentie, split-delta analyse, snelste ronde waarschuwingen, rondeconsistentie-index en snelheidstelemetrie.';

const ui = {
  setupHeading: 'Circuit- en Sessieconfiguratie',
  trackLengthLabel: 'Circuitlengte',
  trackLengthUnit: 'meter',
  targetLapsLabel: 'Doelaantal Ronden',
  targetLapsUnit: 'ronden (0 voor vrije training)',
  batteryCapacityLabel: 'Accucapaciteit',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Akoestische Tonen Inschakelen',
  debounceThresholdLabel: 'Ronde-ontdemping Drempel',
  debounceThresholdUnit: 'seconden',
  presetMultiGpLabel: 'MultiGP Spec (250m / 3 Ronden)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Ronden)',
  presetSprintLabel: 'Hogesnelheidssprint (400m / 2 Ronden)',
  startCountdownButton: 'Start FAI Countdown',
  pauseTimerButton: 'Pauzeer Sessie',
  resumeTimerButton: 'Hervat Timer',
  resetTimerButton: 'Reset Sessie',
  recordLapButton: 'RONDE REGISTREREN',
  spacebarHint: 'Druk op SPATIEBALK of tik op de grote knop om finishpassage te markeren',
  statusIdle: 'Klaar voor Start',
  statusCountdown: 'FAI Countdown Bezig',
  statusRunning: 'Racetimer Actief',
  statusPaused: 'Sessie Gepauzeerd',
  statusFinished: 'Race Voltooid',
  currentLapHeading: 'Huidige Rondetijd',
  lapNumberPrefix: 'Ronde',
  lastLapHeading: 'Laatste Ronde',
  fastestLapHeading: 'Snelste Ronde',
  averageLapHeading: 'Gemiddelde Ronde',
  deltaBestHeading: 'Delta t.o.v. Snelste',
  consistencyIndexHeading: 'Rondeconsistentie-index',
  estimatedSpeedHeading: 'Geschatte Gemiddelde Snelheid',
  estimatedBatteryHeading: 'Geschat Accuverbruik',
  speedUnitKmh: 'km/u',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh resterend',
  lapHistoryHeading: 'Rondetijden en Tempovergelijking',
  lapColumnHeader: 'Ronde #',
  timeColumnHeader: 'Rondetijd',
  splitColumnHeader: 'Delta t.o.v. Best',
  speedColumnHeader: 'Gemiddelde Snelheid',
  batteryColumnHeader: 'Accuverbruik',
  noLapsRecordedNotice: 'Nog geen ronden geregistreerd. Start de countdown en druk op Spatiebalk om je eerste ronde vast te leggen.',
  consistencyRatingElite: 'Elite Consistentie',
  consistencyRatingPro: 'Pro Racer Consistentie',
  consistencyRatingClub: 'Clubcoureur Consistentie',
  consistencyRatingNovice: 'Training Consistentie',
  fastestLapBadge: 'SNELSTE RONDE',
  sessionSummaryHeading: 'Sessieoverzicht en Export',
  totalTimeLabel: 'Totale Raceduur',
  completedLapsLabel: 'Voltooide Ronden',
  exportCsvButton: 'Exporteer Ronden naar CSV',
  copySummaryButton: 'Kopieer Tekstoverzicht',
  copiedNotice: 'Sessieoverzicht naar klembord gekopieerd!',
};

const faqItems = [
  {
    question: 'Hoe werkt de FAI akoestische startsequentie in deze timer?',
    answer: 'De startsequentie simuleert de officiële F9U droneracing-voorschriften van de Fédération Aéronautique Internationale (FAI). Vier voorbereidende pieptonen met tussenpozen van één seconde bereiden de piloot voor, gevolgd door een hoge startzoemer die de timer op exact nul activeert.',
  },
  {
    question: 'Hoe wordt de Rondeconsistentie-index berekend?',
    answer: 'De score toetst de standaardafwijking van je voltooide rondetijden aan het gemiddelde van de sessie. Een score boven 95 procent wijst op een uiterst strakke racelijn en nauwkeurige gasbeheersing.',
  },
  {
    question: 'Kan ik een voetpedaal of zenderschakelaar gebruiken?',
    answer: 'Ja. Elk draadloos toetsenbord, bluetooth-pedaal of zender-switch die het indrukken van de spatiebalk simuleert registreert de ronde direct, zonder dat je het scherm hoeft aan te raken.',
  },
  {
    question: 'Waarom is er een ontdempingsbeveiliging op de rondeknop?',
    answer: 'FPV-poorten worden op hoge snelheid gepasseerd. Een onbedoelde dubbele klik zou valse rondetijden kunnen registreren. De ontdempingsfilter negeert signalen binnen de ingestelde tijd (standaard 3 seconden).',
  },
  {
    question: 'Hoe nauwkeurig is de geschatte gemiddelde snelheid?',
    answer: 'De snelheid is berekend op basis van de ingevoerde hartlijnafstand van het circuit gedeeld door de rondeduur. De werkelijke snelheid in bochten wijkt af afhankelijk van de gevlogen radius en hellingshoek.',
  },
];

const howToSteps = [
  {
    name: 'Stel circuitlengte en rondedoel in',
    text: 'Voer de circuitafstand in meters en het gewenste aantal ronden in of kies een preset zoals MultiGP Spec.',
  },
  {
    name: 'Start de FAI akoestische countdown',
    text: 'Klik op Start Countdown. Luister naar de voorbereidende tonen en het startsignaal bij vertrek.',
  },
  {
    name: 'Registreer elke ronde bij de finishpoort',
    text: 'Druk op de spatiebalk of klik op de grote knop wanneer de drone door de start/finish-poort vliegt.',
  },
  {
    name: 'Analyseer telemetrie, splits en consistentie',
    text: 'Bekijk de tempografiek, deltaverschillen en consistentiescore en exporteer de data naar een CSV-bestand.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Principes van uiterst nauwkeurige tijdwaarneming bij FPV multirotor drone racing',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Competitieve FPV-droneraces vereisen millisecondenprecisie en onberispelijke lijnconsistentie. 5-inch quads bereiken snelheden boven 140 km/u door 3D-poorten en vlaggen. Doeltreffend trainen vraagt om akoestische startsignalen, directe ronderegistratie en inzicht in het tempo over meerdere ronden.',
  },
  {
    type: 'title',
    text: 'Vergelijking van raceklassen en timingparameters',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Klasse / Specificatie', 'Typische Circuitlengte', 'Aantal Ronden', 'Gemiddelde Rondetijd', 'Topsnelheidsbereik', 'Aanbevolen Ontdemping'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m tot 80m', '5 ronden', '8.5s tot 13.0s', '35 tot 55 km/u', '2.0 seconden'],
      ['Micro 3.5-inch (4S)', '120m tot 180m', '4 ronden', '12.0s tot 18.0s', '70 tot 110 km/u', '2.5 seconden'],
      ['MultiGP Spec 5-inch (6S)', '200m tot 300m', '3 ronden', '14.0s tot 22.0s', '100 tot 150 km/u', '3.0 seconden'],
      ['Open Veld Sprint (6S/8S)', '350m tot 500m', '2 ronden', '20.0s tot 32.0s', '130 tot 180 km/u', '4.0 seconden'],
    ],
  },
  {
    type: 'title',
    text: 'Akoestische starttonen en FAI F9U sportreglementen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Onder FAI CIAM Sectie 4 regels voor droneracing starten heats met gestandaardiseerde geluidssignalen in plaats van visuele vlaggen om gelijke reactietijden in FPV-videobrillen te waarborgen. De sequentie gebruikt 440 Hz tonen met één seconde tussenpauze en een 880 Hz starttoon.',
  },
  {
    type: 'list',
    items: [
      'Voorbereidingstonen: Signalen om gasstand af te stemmen en focus op het circuit te richten.',
      'Starttoon (Go): Direct signaal waarmee de tijdwaarneming precies op t = 0 aanvangt.',
      'Akoestische bevestiging: Duidelijke feedbackpiep bij het passeren van de poort.',
      'Snelste ronde melodie: Onderscheidend akkoord wanneer het sessie-record verbroken wordt.',
    ],
  },
  {
    type: 'title',
    text: 'De Consistentie-index en tactisch racemanagement',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Een losse snelle ronde is mooi, maar kampioenschappen worden beslist op consistentie. De index toont schommelingen aan: een piloot die binnen 0.3 seconden blijft behoudt controle en spaart accuspanning voor de eindsprint.',
  },
  {
    type: 'tip',
    title: 'Praktijktip voor het vliegveld',
    html: 'Plaats je timingapparaat op goed hoorbaar volume nabij je stoel. Gebruik een bluetooth-knop of klein toetsenbordje op de grond om met je voet ronden te registreren zonder de zendersticks los te laten.',
  },
];

const schemas: FpvDroneLapTimerLocaleContent['schemas'] = [
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

export const content: FpvDroneLapTimerLocaleContent = {
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
