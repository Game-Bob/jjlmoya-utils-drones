import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'drohne-motor-propeller-rechner';
const title = 'Drohnen Motor und Propeller Rechner';
const description = 'Schätzen Sie Schub, Drehzahl unter Last, Strahlgeschwindigkeit, Leistung und Stromstärke von Drohnenmotoren aus KV, Akkuspannung, Propellergeometrie und Fluggewicht.';

const ui = {
  presetsHeader: 'Flugprofil wählen',
  presetTinyCruiser: 'Leichter Micro Cruiser 3.5 Zoll',
  presetFreestyle: 'Five Inch Freestyle',
  presetLongRange: 'Seven Inch Long Range',
  presetCinelifter: 'Cinelifter 8 Motoren',
  unitHeader: 'Anzeigeeinheiten',
  metricUnit: 'Metrisch',
  imperialUnit: 'Imperial',
  setupHeader: 'Antrieb und Rahmen',
  motorKvLabel: 'Motor KV (U/min/V)',
  batteryVoltageLabel: 'Akkuspannung',
  propDiameterLabel: 'Propellerdurchmesser',
  propPitchLabel: 'Propellersteigung',
  bladeCountLabel: 'Blattanzahl',
  motorCountLabel: 'Motoranzahl',
  droneWeightLabel: 'Abfluggewicht (RTV)',
  benchDataHeader: 'Hersteller Messpunkt',
  benchThrustLabel: 'Schub pro Motor',
  benchVoltageLabel: 'Testspannung',
  optionalLabel: 'Optional',
  twoBlades: '2 Blätter',
  threeBlades: '3 Blätter',
  fourBlades: '4 Blätter',
  twoMotors: '2 Motoren',
  fourMotors: '4 Motoren',
  sixMotors: '6 Motoren',
  eightMotors: '8 Motoren',
  resultsHeader: 'Schub und Auftriebsbilanz',
  estimatedLabel: 'Reine Physikberechnung.',
  benchBasedLabel: 'Skaliert nach Messpunkt.',
  loadedRpmLabel: 'Drehzahl unter Last',
  pitchSpeedLabel: 'Theoretische Strahlgeschwindigkeit',
  thrustPerMotorLabel: 'Schub pro Motor',
  totalThrustLabel: 'Gesamter Statischer Schub',
  totalPowerLabel: 'Geschätzte Leistung',
  totalCurrentLabel: 'Geschätzte Stromstärke',
  thrustMarginLabel: 'Auftriebsreserve',
  hoverThrottleLabel: 'Schwebegas',
  sceneCaption: 'Propellerdrehzahl unter Last',
  underpoweredStatus: 'Geringe Reserve',
  workableStatus: 'Brauchbare Reserve',
  headroomStatus: 'Starke Reserve',
  underpoweredAdvice: 'Das Setup bietet weniger als das doppelte Fluggewicht an Schub. Erwarten Sie begrenzte Abfangfähigkeit und wenig Spielraum bei Wind oder Voltage Sag.',
  workableAdvice: 'Praktische Reserve für normalen Flug. Überprüfen Sie die Temperatur von Motor und ESC nach längerem Schwebeflug.',
  headroomAdvice: 'Großzügige statische Auftriebsreserve. Erhöht die Steuerautorität, kann jedoch höhere Ströme fordern.',
  sourceNote: 'Ein Messpunkt kalibriert nur den Schub. Leistung und Strom bleiben Modellwerte.',
  modelSourceNote: 'Kein Messpunkt. Schub nutzt das transparente Koeffizientenmodell.',
  manufacturerNote: 'Verwenden Sie nach Möglichkeit Messwerte desselben Motors mit Propeller und Spannung.',
  modelNote: 'Statischer Schub, Strom und Leistung sind Schätzungen. Reale Ergebnisse hängen von Luftdichte, Motorverlusten und Voltage Sag ab.',
  safetyNote: 'Nutzen Sie diesen Rechner nie als Ersatz für einen echten Schubprüfstand. Prüfen Sie Leistungsgrenzen vor dem Flug.',
  thrustAxisLabel: 'Schubrichtung',
  weightAxisLabel: 'Drohnengewicht',
  clearBenchData: 'Messpunkt löschen',
};

const faq = [
  {
    question: 'Was berechnet dieser Drohnenmotor und Propeller Rechner?',
    answer: 'Er schätzt Drehzahl unter Last, Strahlgeschwindigkeit, Schub pro Motor, Gesamt Statikschub, Leistung und Stromverbrauch basierend auf KV, Akkuspannung, Propellermaßen, Motoranzahl und Fluggewicht.',
  },
  {
    question: 'Wie passe ich Drohnenmotor und Propeller optimal aneinander an?',
    answer: 'Starten Sie mit den Herstellempfehlungen für KV und Propellergröße. Vergleichen Sie den Gesamtschub mit dem Abfluggewicht und prüfen Sie Strom und Temperatur auf dem Prüfstand.',
  },
  {
    question: 'Warum ist ein Hersteller Messpunkt genauer als das reine Physikmodell?',
    answer: 'Ein Messpunkt berücksichtigt die reale Propellergeometrie und Verluste. Der Rechner skaliert diesen Wert auf die gewählte Spannung.',
  },
  {
    question: 'Wie wirkt sich die Propellergröße auf den Schub aus?',
    answer: 'Der statische Schub hängt stark vom Durchmesser und der Drehzahl ab. Ein größerer Propeller bewegt mehr Luft, erfordert jedoch mehr Drehmoment vom Motor.',
  },
  {
    question: 'Ersetzt der Rechner einen realen Teststand?',
    answer: 'Nein. Er dient als Planungshilfe. Prüfen Sie Strom, Temperatur und Schub auf einem Teststand vor dem Erstflug.',
  },
];

const howTo = [
  {
    name: 'Flugprofil auswählen',
    text: 'Wählen Sie eine Voreinstellung, um passende Startwerte für KV, Spannung, Propeller und Gewicht zu laden.',
  },
  {
    name: 'Antriebs und Rahmendaten eingeben',
    text: 'Geben Sie Abfluggewicht sowie Motor und Propellerspezifikationen ein. Wechseln Sie nach Bedarf zwischen metrisch und imperial.',
  },
  {
    name: 'Messpunkt hinzufügen',
    text: 'Wenn Messdaten vorliegen, tragen Sie Schub und Testspannung ein, um das Modell zu kalibrieren.',
  },
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Funktionsweise der Abstimmung von Drohnenmotor und Propeller',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Die Abstimmung von Motor und Propeller ist ein Balanceakt zwischen Drehzahl, Durchmesser, Steigung, Blattanzahl und Akkuspannung. Dieser Rechner ermittelt den statischen Schub und die elektrische Belastung, um die Reserve vor dem Kauf zu bewerten.',
  },
  {
    type: 'title',
    text: 'Angezeigte Ergebnisse',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Ergebnis', 'Bedeutung'],
    rows: [
      ['Drehzahl unter Last', 'KV Leerlaufschätzung reduziert um einen Lastfaktor'],
      ['Statischer Schub', 'Schub pro Motor und Gesamtschub aller Motoren'],
      ['Auftriebsreserve', 'Gesamtschub im Vergleich zum Abfluggewicht'],
      ['Leistung und Strom', 'Geschätzter elektrischer Bedarf für die gewählte Akkuspannung'],
    ],
  },
  {
    type: 'title',
    text: 'So nutzen Sie den Rechner',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Motor KV und Akkuspannung eingeben.',
      'Propellerdurchmesser, Steigung, Blatt und Motoranzahl festlegen.',
      'Optional Messpunkte vom Prüfstand hinzufügen.',
      'Ströme und Temperaturen vor dem Flug am Teststand überprüfen.',
    ],
  },
  {
    type: 'title',
    text: 'Bedeutung von Messdaten',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Propellerschub hängt von der Luftdichte und Geometrie ab. Reale Prüfstandsdaten des Herstellers ermöglichen die genaueste Kalibrierung des Rechners. Vergleichen Sie mehrere Motor-Propeller-Kombinationen unter denselben Bedingungen. Gesamtgewicht, Spannung unter Last und tatsächlicher Wirkungsgrad verändern Schub und Stromaufnahme. Nutzen Sie die Berechnung nicht ungeprüft für ein anderes Modell: Messen Sie Strom und Temperatur am Prüfstand und lassen Sie vor dem Erstflug ausreichend Reserve.',
  },
  {
    type: 'tip',
    title: 'Testplan erstellen',
    html: 'Starten Sie mit konservativen Werten, prüfen Sie Strom und Temperatur am Prüfstand bei voller und teilentladener Batterie.',
  },
];

const schemas: DroneMotorPropellerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
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
    step: howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMotorPropellerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography: BIBLIOGRAPHY_ITEMS,
  howTo,
  schemas,
};
