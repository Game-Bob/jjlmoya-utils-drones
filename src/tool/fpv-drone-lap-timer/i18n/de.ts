import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drohnen-renn-rundenzaehler';
const title = 'FPV Drohnen Rennen Runden und Split Timer';
const description = 'Interaktiver Rundentimer für FPV-Drohnenrennen mit FAI-Akustikstartsequenz, Split-Delta-Pacing, Rundenbestzeit-Warnungen, Rundenkonsistenzindex und Geschwindigkeitstelemetrie.';

const ui = {
  setupHeading: 'Strecken- und Sitzungskonfiguration',
  trackLengthLabel: 'Streckenlänge',
  trackLengthUnit: 'Meter',
  targetLapsLabel: 'Zielrundenzahl',
  targetLapsUnit: 'Runden (0 für freies Training)',
  batteryCapacityLabel: 'Akkukapazität',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Akustische Signale aktivieren',
  debounceThresholdLabel: 'Rundenauslöser-Entprellung',
  debounceThresholdUnit: 'Sekunden',
  presetMultiGpLabel: 'MultiGP-Spezifikation (250m / 3 Runden)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Runden)',
  presetSprintLabel: 'Hochgeschwindigkeitssprint (400m / 2 Runden)',
  startCountdownButton: 'FAI-Startcountdown starten',
  pauseTimerButton: 'Sitzung pausieren',
  resumeTimerButton: 'Timer fortsetzen',
  resetTimerButton: 'Sitzung zurücksetzen',
  recordLapButton: 'RUNDE ERFASSEN',
  spacebarHint: 'LEERTASTE drücken oder Riesentaste antippen, um den Zieldurchgang zu markieren',
  statusIdle: 'Startbereit',
  statusCountdown: 'FAI-Countdown läuft',
  statusRunning: 'Renntimer aktiv',
  statusPaused: 'Sitzung pausiert',
  statusFinished: 'Rennen beendet',
  currentLapHeading: 'Aktuelle Rundenzeit',
  lapNumberPrefix: 'Runde',
  lastLapHeading: 'Letzte Runde',
  fastestLapHeading: 'Schnellste Runde',
  averageLapHeading: 'Durchschnittliche Runde',
  deltaBestHeading: 'Delta zur Bestzeit',
  consistencyIndexHeading: 'Rundenkonsistenzindex',
  estimatedSpeedHeading: 'Geschätzte Durchschnittsgeschwindigkeit',
  estimatedBatteryHeading: 'Geschätzter Akkuverbrauch',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh verbleibend',
  lapHistoryHeading: 'Rundenzeiten und Tempovergleich',
  lapColumnHeader: 'Runde #',
  timeColumnHeader: 'Rundenzeit',
  splitColumnHeader: 'Delta zur Bestzeit',
  speedColumnHeader: 'Durchschnittstempo',
  batteryColumnHeader: 'Akkubedarf',
  noLapsRecordedNotice: 'Noch keine Runden erfasst. Countdown starten und Leertaste oder Taste antippen, um die erste Runde zu protokollieren.',
  consistencyRatingElite: 'Elite-Konsistenz',
  consistencyRatingPro: 'Profi-Konsistenz',
  consistencyRatingClub: 'Vereinsfahrer-Konsistenz',
  consistencyRatingNovice: 'Trainings-Konsistenz',
  fastestLapBadge: 'SCHNELLSTE RUNDE',
  sessionSummaryHeading: 'Sitzungszusammenfassung & Export',
  totalTimeLabel: 'Gesamtrenndauer',
  completedLapsLabel: 'Absolvierte Runden',
  exportCsvButton: 'Runden als CSV exportieren',
  copySummaryButton: 'Textzusammenfassung kopieren',
  copiedNotice: 'Sitzungszusammenfassung in die Zwischenablage kopiert!',
};

const faqItems = [
  {
    question: 'Wie funktioniert die akustische FAI-Startsequenz in diesem Timer?',
    answer: 'Die Startsequenz bildet die offiziellen F9U-Drohnenrennregeln der Fédération Aéronautique Internationale (FAI) CIAM nach. Vier vorbereitende Signaltöne im Sekundenabstand bereiten den Piloten vor, gefolgt von einem hohen Startsignal, das den Renntimer bei t = 0 startet.',
  },
  {
    question: 'Wie wird der Rundenkonsistenzindex berechnet?',
    answer: 'Der Konsistenzwert bewertet die Standardabweichung der gefahrenen Rundenzeiten im Verhältnis zur Durchschnittsrunde der Sitzung. Ein Wert über 95 Prozent steht für hervorragende Linientreue und feinfühlige Gasdosierung.',
  },
  {
    question: 'Kann ein Fußschalter oder Schalter der Fernsteuerung genutzt werden?',
    answer: 'Ja. Jede kabellose Tastatur, jedes Bluetooth-Fußpedal oder gamepad-basierte Makro, das das Drücken der Leertaste sendet, löst die Rundenzeitnahme sofort aus, ohne dass der Bildschirm berührt werden muss.',
  },
  {
    question: 'Warum gibt es eine Entprellungszeit beim Auslösen?',
    answer: 'Renntore werden mit hoher Geschwindigkeit passiert. Eine versehentliche Doppelauslösung könnte Fehlmessungen im Millisekundenbereich auslösen. Der Entprellungsfilter ignoriert Impulse unterhalb der definierten Schwelle (standardmäßig 3 Sekunden).',
  },
  {
    question: 'Wie präzise ist die geschätzte Durchschnittsgeschwindigkeit?',
    answer: 'Die Berechnung teilt die deklarierte Mittellinienstrecke durch die gemessene Rundenzeit. Die tatsächliche Drohnengeschwindigkeit variiert in Kurven je nach geflogener Linie und Schräglage.',
  },
];

const howToSteps = [
  {
    name: 'Streckenlänge und Rundenanzahl festlegen',
    text: 'Geben Sie die Rundenlänge in Metern und die Zielrundenzahl ein oder wählen Sie eine Vorlage wie MultiGP Spec.',
  },
  {
    name: 'Akustischen FAI-Startcountdown initiieren',
    text: 'Klicken Sie auf Countdown starten und lauschen Sie den 3 vorbereitenden Tönen und dem Startton.',
  },
  {
    name: 'Runden beim Zieldurchgang erfassen',
    text: 'Drücken Sie jedes Mal die Leertaste oder die Haupttaste, wenn die Drohne das Start-/Zieltor durchfliegt.',
  },
  {
    name: 'Telemetrie, Deltazeiten und Konsistenz auswerten',
    text: 'Überprüfen Sie das Balkendiagramm, die Rundenvergleiche und den Konsistenzwert und exportieren Sie nach CSV.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Grundlagen der hochpräzisen Rundenzeitnahme im FPV-Multirotor-Rennsport',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Wettbewerbsfähiges FPV-Drohnenracing verlangt Millisekunden-Präzision und außergewöhnliche Kurvenkonsistenz. 5-Zoll-Rennquads erreichen über 140 km/h zwischen 3D-Toren, Slalomstangen und Dive-Loops. Effektives Training erfordert sofortige akustische Rückmeldung am Start, exakte Rundenzeiten und Einblicke in den Leistungsabfall über mehrere Runden.',
  },
  {
    type: 'title',
    text: 'Vergleich gängiger Multirotor-Rennklassen und Timing-Parameter',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Klasse / Spezifikation', 'Typische Streckenlänge', 'Zielrunden', 'Durchschnittliche Rundenzeit', 'Spitzentempo', 'Empfohlene Entprellung'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m bis 80m', '5 Runden', '8.5s bis 13.0s', '35 bis 55 km/h', '2.0 Sekunden'],
      ['Micro 3.5-Zoll (4S)', '120m bis 180m', '4 Runden', '12.0s bis 18.0s', '70 bis 110 km/h', '2.5 Sekunden'],
      ['MultiGP Spec 5-Zoll (6S)', '200m bis 300m', '3 Runden', '14.0s bis 22.0s', '100 bis 150 km/h', '3.0 Sekunden'],
      ['Offenes Feldsprint (6S/8S)', '350m bis 500m', '2 Runden', '20.0s bis 32.0s', '130 bis 180 km/h', '4.0 Sekunden'],
    ],
  },
  {
    type: 'title',
    text: 'Akustische Startsequenzen und FAI F9U-Sportbestimmungen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Gemäß FAI CIAM Sektion 4 für Drohnenrennen starten Wertungsläufe mit standardisierten Tönen statt Sichtflaggen, um faire Reaktionszeiten über die Videobrillen sicherzustellen. Die Sequenz umfasst Signaltöne im Sekundenrhythmus, gefolgt vom hohen Startton zum Scharfschalten.',
  },
  {
    type: 'list',
    items: [
      'Vorbereitungstöne: Akustische Signale zum Stabilisieren der Gasstellung und vollen Konzentration.',
      'Startton (Go): Sofortiger Startimpuls für die Zeitnahme bei t = 0.',
      'Akustische Bestätigung: Klare Töne bestätigen den Rundenabschluss ohne Blickkontaktverlust.',
      'Rundenbestzeit-Signal: Harmonischer Ton, sobald der bestehende Streckenrekord unterboten wird.',
    ],
  },
  {
    type: 'title',
    text: 'Rundenkonsistenzindex und strategisches Rennmanagement',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Eine einzelne Bestzeit begeistert, Meisterschaften gewinnt jedoch die Rundenkonstanz. Piloten mit weniger als 0.3 Sekunden Rundenabweichung halten das Propwash-Risiko gering und schonen die Akkuspannung für den Schlusssprint.',
  },
  {
    type: 'tip',
    title: 'Praxistipp für das Flugfeld',
    html: 'Platzieren Sie das Timing-Tablet gut hörbar an der Pilotenstation. Ein Bluetooth-Fußtaster oder eine kleine Tastatur auf dem Koffer erlaubt das Auslösen per Fuß oder Daumen bei jedem Zieldurchflug.',
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
