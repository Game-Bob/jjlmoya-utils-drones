import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drohnen-schub-gewicht-verhaeltnis-rechner';
const title = 'FPV Drohnen Schub zu Gewicht Verhältnis und Flugtelemetrie Rechner';
const description = 'Berechnen Sie Maximalschub, nichtlineare Gaskurve, vertikale G-Kräfte, Schwebegas und 0 auf 100 Beschleunigung für FPV Drohnen und Multirotoren.';

const ui = {
  title: 'FPV Drohnen Schub zu Gewicht Verhältnis Rechner',
  subtitle: 'Analysieren Sie Schubkurven, Live Gashebel Reaktion, vertikale G Kräfte und Agilitätsklassen',
  presetsHeader: 'Schnellkonfigurationen',
  customPreset: 'Benutzerdefiniert',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Zoll',
  freestyle5Preset: '6S Freestyle 5 Zoll Pro',
  longrange7Preset: '6S Mountain LR 7 Zoll',
  cinelifter8Preset: '8S Schwerer Cinelifter X8',
  specsHeader: 'Drohnen und Antriebsdaten',
  auwGramsLabel: 'Abfluggewicht mit Akku (g)',
  motorCountLabel: 'Motorkonfiguration',
  thrustPerMotorLabel: 'Maximaler Standschub pro Motor (g)',
  propellerSizeLabel: 'Propellerdurchmesser (Zoll)',
  propellerPitchLabel: 'Propellersteigung (Zoll)',
  bladeCountLabel: 'Anzahl der Propellerblätter',
  blade2Option: '2 Blätter (Zweiblatt - Maximale Effizienz)',
  blade3Option: '3 Blätter (Dreiblatt - Freestyle Standard)',
  blade4Option: '4 Blätter (Vierblatt - Maximaler Grip)',
  throttleStickHeader: 'Live Gashebel Simulator',
  throttleStickLabel: 'Gashebelposition (%)',
  snapIdleLabel: 'Leerlauf (0%)',
  snapHoverLabel: 'Schwebepunkt',
  snapCruiseLabel: 'Reiseflug (50%)',
  snapPunchLabel: 'Vollgas (100%)',
  telemetryHeader: 'FPV Flugtelemetrie und Leistungsdiagnose',
  twrRatioLabel: 'Schub zu Gewicht Verhältnis (TWR)',
  hoverThrottleLabel: 'Schwebegas Punkt',
  currentThrustLabel: 'Aktueller Schubleistungs Wert',
  instantGForceLabel: 'Momentane vertikale G-Kraft',
  zeroToHundredLabel: '0 auf 100 km/h Punch Zeit',
  recommendedCamAngleLabel: 'Empfohlener FPV Kamerawinkel',
  windResistanceLabel: 'Windwiderstandsfähigkeit',
  totalMaxThrustLabel: 'Gesamter maximaler Standschub',
  maxPitchAngleLabel: 'Maximaler Neigungswinkel',
  tuningHeader: 'Betaflight PID und Firmware Empfehlungen',
  tpaRecommendationLabel: 'Gas PID Dämpfung (TPA)',
  dynamicIdleLabel: 'Empfohlenes Dynamic Idle',
  propwashRiskLabel: 'Propwash Kontrollreserve',
  tierUnderpoweredTitle: 'Untermotorisiert oder Winddrift Gefahr',
  tierUnderpoweredDesc: 'TWR unter 2 zu 1 bietet zu wenig Steuerreserve für schnelle Abfangmanöver. Nur für ruhige Innenräume geeignet.',
  tierCinematicTitle: 'Sanfter Cinematischer Flug',
  tierCinematicDesc: 'TWR zwischen 2 zu 1 und 4 zu 1 sorgt für gleichmäßige Gasannahme und verwacklungsfreie Videoaufnahmen.',
  tierFreestyleTitle: 'Sportlicher und Agiler Freestyle',
  tierFreestyleDesc: 'TWR zwischen 4 zu 1 und 8 zu 1 liefert knackige Reaktionen, saubere Split-S Manöver und gute Akrobatik.',
  tierAcroProTitle: 'Hochleistungs Acro und Bando Freestyle',
  tierAcroProDesc: 'TWR zwischen 8 zu 1 und 13 zu 1 ermöglicht explosive vertikale Beschleunigung und sofortiges Abfangen von Turbulenzen.',
  tierRacingExtremeTitle: 'Extremer Drohnenrennsport',
  tierRacingExtremeDesc: 'TWR über 13 zu 1 liefert brachiale Kraft für professionelle FPV Rennkurse und engste Kurvenausgänge.',
  hudThrustCurveTitle: 'Nichtlineare Schubverlaufskurve',
  hudHoverMarker: 'Schwebepunkt',
  hudCurrentStickMarker: 'Aktueller Hebel',
  hudGForceLabel: 'G-Kräfte',
  hudTiltAngleLabel: 'Kamerawinkel',
  hudVectorPowerLabel: 'Live Antriebstelemetrie',
};

const faqItems = [
  {
    question: 'Welches Schub zu Gewicht Verhältnis ist optimal für Freestyle FPV Drohnen?',
    answer: 'Für Freestyle Quads ist ein TWR von 8 zu 1 bis 12 zu 1 ideal, um sturzflugartige Abfangmanöver und schnelle Richtungswechsel präzise zu steuern.',
  },
  {
    question: 'Wie beeinflusst die nichtlineare Gaskurve das Schweben?',
    answer: 'Bürstenlose Motoren erzeugen Schub proportional zum Quadrat der Drehzahl. Daher liegt der Schwebepunkt bei leistungsstarken Drohnen meist bei 20 bis 35 Prozent Hebelweg.',
  },
  {
    question: 'Warum hängt der FPV Kamerawinkel vom Schubverhältnis ab?',
    answer: 'Drohnen mit hohem Schubverhältnis fliegen mit größerem Vorwärtsneigungswinkel. Um den Horizont in der Brille zentriert zu halten, neigen Piloten die Kamera um 35 bis 50 Grad nach oben.',
  },
  {
    question: 'Wie verändert die Anzahl der Propellerblätter das Flugverhalten?',
    answer: 'Zweiblattpropeller bieten maximale Flugzeit und Endgeschwindigkeit. Dreiblattpropeller bieten die beste Balance für Freestyle, während Vierblattpropeller extremen Halt in Kurven liefern.',
  },
];

const howToSteps = [
  {
    name: 'Drohnengewicht eingeben oder Voreinstellung wählen',
    text: 'Tragen Sie das gesamte Abfluggewicht inklusive LiPo Akku und HD Kamera in Gramm ein.',
  },
  {
    name: 'Antriebsdaten und Propeller konfigurieren',
    text: 'Wählen Sie die Motoranzahl, Blattanzahl und den Prüfstandsschub des Herstellers bei 100 Prozent Gas aus.',
  },
  {
    name: 'Live Gashebel anpassen und Telemetrie prüfen',
    text: 'Verschieben Sie den Live Gashebel, um Schubkraft, G-Kräfte und die Lage auf der Schubkurve zu analysieren.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodynamik des Schub zu Gewicht Verhältnisses bei FPV Drohnen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Das Schub zu Gewicht Verhältnis (TWR) ist die entscheidende aerodynamische Kennzahl für Beschleunigung und Steuerautorität von Multirotoren. Im FPV Freestyle und Renneinsatz ermöglicht ausreichender Leistungspuffer das blitzschnelle Abfangen nach freiem Fall und präzise Manöver an Hindernissen.',
  },
  {
    type: 'title',
    text: 'Klassifizierung von FPV Drohnen und Leistungsdaten',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Plattform', 'Typisches Abfluggewicht', 'Ziel TWR', 'Schwebegas Anteil', '0 auf 100 Beschleunigung', 'Kameraneigung'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 zu 1', '35 Prozent', '1.20 s', '15 Grad bis 25 Grad'],
      ['4S Freestyle 3.5"', '250g', '12.0 zu 1', '24 Prozent', '0.28 s', '35 Grad bis 45 Grad'],
      ['6S Freestyle 5" Pro', '680g', '11.5 zu 1', '25 Prozent', '0.30 s', '35 Grad bis 50 Grad'],
      ['6S Mountain LR 7"', '1150g', '8.3 zu 1', '30 Prozent', '0.45 s', '20 Grad bis 30 Grad'],
      ['8S Cinelifter X8', '4200g', '6.1 zu 1', '38 Prozent', '0.70 s', '15 Grad bis 25 Grad'],
    ],
  },
  {
    type: 'title',
    text: 'Nichtlineare Schubkennlinie und Motordynamik',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Elektromotoren und Propeller entfalten ihren Schub nicht linear zum PWM Signal. Die Strömungsdynamik erzeugt einen exponentiellen Verlauf, bei dem die oberen 20 Prozent des Gaswegs über 40 Prozent des Gesamtschubs erzeugen.',
  },
  {
    type: 'list',
    items: [
      'Schwebegas Bereich (20 bis 35 Prozent): Hohe Auflösung für feinfühlige Positionskorrekturen.',
      'Reiseflug Bereich (35 bis 65 Prozent): Ausgewogene Balance aus Vorwärtsfahrt und Akkueffizienz.',
      'Vollgas Bereich (70 bis 100 Prozent): Maximaler Kraftzuwachs mit hohen vertikalen G-Kräften.',
    ],
  },
  {
    type: 'title',
    text: 'Propellerwahl und Betaflight Tuning Empfehlungen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Für Drohnen mit einem TWR von über 10 zu 1 wird die Aktivierung der Throttle PID Attenuation (TPA) in Betaflight empfohlen, um Oszillationen bei Vollgaspassagen zuverlässig zu unterbinden.',
  },
  {
    type: 'tip',
    title: 'Tuninghinweis für Betaflight TPA',
    html: 'Setzen Sie den TPA Schwellenwert auf 1250 oder 1350 mit einem Faktor von 0.65, um Vibrationen im oberen Gasbereich zu eliminieren.',
  },
];

const schemas: FpvDroneThrustToWeightRatioLocaleContent['schemas'] = [
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

export const content: FpvDroneThrustToWeightRatioLocaleContent = {
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
