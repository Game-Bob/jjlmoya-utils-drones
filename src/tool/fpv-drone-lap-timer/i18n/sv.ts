import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-dronerace-varvtidtagare';
const title = 'FPV Drönarracing Varv och Splittidtagare';
const description = 'Interaktiv varvtidtagare för FPV drönarracing med FAI akustisk startsekvens, split-delta-analys, snabbaste varv-varningar, varvkonsistensindex och hastighetstelemetri.';

const ui = {
  setupHeading: 'Bane- och Sessionskonfiguration',
  trackLengthLabel: 'Banlängd',
  trackLengthUnit: 'meter',
  targetLapsLabel: 'Målvarv',
  targetLapsUnit: 'varv (0 för fri träning)',
  batteryCapacityLabel: 'Batterikapacitet',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Aktivera Ljudsignaler',
  debounceThresholdLabel: 'Filter mot Dubbelregistrering',
  debounceThresholdUnit: 'sekunder',
  presetMultiGpLabel: 'MultiGP Spec (250m / 3 Varv)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Varv)',
  presetSprintLabel: 'Höghastighetssprint (400m / 2 Varv)',
  startCountdownButton: 'Starta FAI Nedräkning',
  pauseTimerButton: 'Pausa Session',
  resumeTimerButton: 'Återuppta Tidtagning',
  resetTimerButton: 'Återställ Session',
  recordLapButton: 'REGISTRERA VARV',
  spacebarHint: 'Tryck på MELLANSLAG eller tryck på den stora knappen vid målgång',
  statusIdle: 'Redo för Start',
  statusCountdown: 'FAI Nedräkning Pågår',
  statusRunning: 'Tidtagning Aktiv',
  statusPaused: 'Session Pausad',
  statusFinished: 'Racet Avslutat',
  currentLapHeading: 'Aktuell Varvtid',
  lapNumberPrefix: 'Varv',
  lastLapHeading: 'Senaste Varvet',
  fastestLapHeading: 'Snabbaste Varv',
  averageLapHeading: 'Genomsnittligt Varv',
  deltaBestHeading: 'Skillnad mot Snabbaste',
  consistencyIndexHeading: 'Varvkonsistensindex',
  estimatedSpeedHeading: 'Uppskattad Medelhastighet',
  estimatedBatteryHeading: 'Uppskattad Batteriförbrukning',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh kvar',
  lapHistoryHeading: 'Varvtider och Tempofördelning',
  lapColumnHeader: 'Varv #',
  timeColumnHeader: 'Tid',
  splitColumnHeader: 'Delta mot Bästa',
  speedColumnHeader: 'Medelfart',
  batteryColumnHeader: 'Batteriåtkomst',
  noLapsRecordedNotice: 'Inga varv registrerade ännu. Starta nedräkningen och tryck på Mellanslag för att logga ditt första varv.',
  consistencyRatingElite: 'Elitkonsistens',
  consistencyRatingPro: 'Proffskonsistens',
  consistencyRatingClub: 'Klubbkonsistens',
  consistencyRatingNovice: 'Träningskonsistens',
  fastestLapBadge: 'SNABBASTE VARV',
  sessionSummaryHeading: 'Sessionsöversikt och Export',
  totalTimeLabel: 'Total Racetid',
  completedLapsLabel: 'Slutförda Varv',
  exportCsvButton: 'Exportera Varv till CSV',
  copySummaryButton: 'Kopiera Textöversikt',
  copiedNotice: 'Sessionsöversikt kopierad till urklipp!',
};

const faqItems = [
  {
    question: 'Hur fungerar FAI akustiska startsekvens i tidtagaren?',
    answer: 'Startsekvensen återspeglar officiella FAI CIAM F9U-regler för drönarracing. Fyra förberedande pipljud med en sekunds mellanrum varnar piloten, följt av en distinkt högfrekvent startsignal som sätter igång tidtagningen på exakt noll.',
  },
  {
    question: 'Hur beräknas Varvkonsistensindexet?',
    answer: 'Indexet mäter standardavvikelsen för dina slutförda varvtider i relation till sessionens genomsnittsvarv. Ett värde över 95 procent indikerar exceptionell flyglinje och gasreglering.',
  },
  {
    question: 'Kan man använda fotpedal eller en sändarknapp?',
    answer: 'Ja. Alla trådlösa tangentbord, Bluetooth-fotpedaler eller radiokontroller som skickar ett mellanslagskommando registrerar varvet direkt utan att du behöver släppa blicken från videoglasögonen.',
  },
  {
    question: 'Varför finns det ett skyddsintervall mot dubbelregistrering?',
    answer: 'Portarna passeras i hög fart, men oavsiktliga dubbeltryckningar kan skapa falska varv på bråkdelen av en sekund. Filtret avvisar tryckningar under den inställda tidsgränsen (standard 3 sekunder).',
  },
  {
    question: 'Hur tillförlitlig är den uppskattade medelhastigheten?',
    answer: 'Hastigheten baseras på den angivna banlängden delad med varvtiden. Faktisk hastighet i kurvor varierar beroende på vald flyglinje och lutningsvinkel.',
  },
];

const howToSteps = [
  {
    name: 'Ställ in banlängd och önskat antal varv',
    text: 'Ange banans längd i meter och målet för antal varv eller välj en förinställning som MultiGP Spec.',
  },
  {
    name: 'Starta FAI akustisk nedräkning',
    text: 'Klicka på startknappen. Lyssna på förberedelsetonerna och den höga starttonen.',
  },
  {
    name: 'Registrera varv vid målporten',
    text: 'Tryck på mellanslagstangenten eller den stora knappen varje gång drönaren flyger igenom start/målporten.',
  },
  {
    name: 'Granska telemetri, deltatider och konsistens',
    text: 'Analysera stapeldiagrammet, jämför tider mot snabbaste varvet och exportera resultaten till CSV.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Principer för högprecisions tidtagning i FPV drönarracing',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Tävlingar i FPV drönarracing ställer hårda krav på millisekundprecision och exakta flyglinjer. 5-tums multikopterdrönare når över 140 km/h mellan portar och flaggor. Målmedveten träning kräver akustisk start, snabb varvregistrering och analys av tempoförluster över flera heat.',
  },
  {
    type: 'title',
    text: 'Jämförelse av racingklasser och tidtagningsparametrar',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Klass / Specifikation', 'Typisk Banlängd', 'Varv per Heat', 'Genomsnittlig Varvtid', 'Toppfart', 'Rekommenderat Filter'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m till 80m', '5 varv', '8.5s till 13.0s', '35 till 55 km/h', '2.0 sekunder'],
      ['Micro 3.5 Tum (4S)', '120m till 180m', '4 varv', '12.0s till 18.0s', '70 till 110 km/h', '2.5 sekunder'],
      ['MultiGP Spec 5 Tum (6S)', '200m till 300m', '3 varv', '14.0s till 22.0s', '100 till 150 km/h', '3.0 sekunder'],
      ['Öppet Fältsprint (6S/8S)', '350m till 500m', '2 varv', '20.0s till 32.0s', '130 till 180 km/h', '4.0 sekunder'],
    ],
  },
  {
    type: 'title',
    text: 'Akustiska startsekvenser och FAI F9U tävlingsregler',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Enligt FAI CIAM Sektion 4 för drönarracing inleds heat med standardiserade ljudsignaler istället för flaggor för att garantera rättvisa reaktionstider i videoglasögonen. Sekvensen innehåller 440 Hz toner med en sekunds mellanrum och avslutas med 880 Hz startton.',
  },
  {
    type: 'list',
    items: [
      'Förberedelsetoner: Ljudsignaler för att stabilisera gasreglaget och fokusera blicken på första svängen.',
      'Startsignal (Go): Direkt startimpuls då tidtagningen startar exakt vid t = 0.',
      'Akustisk bekräftelse: Ljudsignal som bekräftar varvet utan att man tappar fokus från FPV-bilden.',
      'Varvrekord-signal: Harmonisk ton när det aktuella varvet slår sessionens tidigare bästa tid.',
    ],
  },
  {
    type: 'title',
    text: 'Varvkonsistens och racestrategi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Ett enskilt snabbt varv är imponerande, men mästerskap vinns på jämnhet. Indexet belyser avvikelser: en pilot med under 0.3 sekunders spridning minskar risken för turbulens och sparar batterispänning till slutspurten.',
  },
  {
    type: 'tip',
    title: 'Praktiskt fälttips',
    html: 'Placera surfplattan på bra volym nära pilotstolen. Använd en Bluetooth-fotpedal eller ett litet trådlöst tangentbord för att registrera varv med foten utan att släppa spakarna.',
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
      priceCurrency: 'SEK',
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
