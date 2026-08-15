import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'lipo-c-rate-rechner-drohne';
const title = 'Drohnen LiPo Akku C Rate und Dauerentladungs Rechner';
const description = 'Berechnen Sie den realistischen Dauerentladestrom, die C-Rate, den Spannungsabfall und die Flugsicherheit von LiPo-Akkus für Drohnen basierend auf Innenwiderstand und Motorverbrauch.';

const ui = {
  title: 'Drohnen LiPo Akku C Rate Rechner',
  subtitle: 'Analysieren Sie reale Dauerentladung Peak Anforderungen und Spannungsabfall für Multikopter',
  lipoSpecsHeader: 'Akkuspezifikationen',
  capacityLabel: 'Kapazität (mAh)',
  claimedCRatingLabel: 'Angegebene C Rate',
  cellCountLabel: 'Zellenzahl (Serie)',
  chemistryLabel: 'Akkuchemie',
  internalResistanceLabel: 'Innenwiderstand pro Zelle (mΩ)',
  quadSpecsHeader: 'Stromverbrauch des Kopters',
  motorCountLabel: 'Motoranzahl',
  peakMotorCurrentLabel: 'Spitzenstrom pro Motor (Ampere)',
  auxCurrentLabel: 'Zusatzverbraucher (VTX FC Kamera) (Ampere)',
  presetSelectLabel: 'Schnelleinstellungen',
  customPreset: 'Benutzerdefiniert',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5 Zoll Freestyle',
  cinewhoopPreset: '4S 3 Zoll CineWhoop',
  longRange7Preset: '6S 7 Zoll Long Range',
  racing5Preset: '6S 5 Zoll Racing',
  resultsHeader: 'Leistungs und Performance Analyse',
  claimedMaxCurrentLabel: 'Angegebener Maximalstrom',
  realisticCRatingLabel: 'Realistische Dauer C Rate',
  realisticMaxCurrentLabel: 'Realistischer Dauerstrom',
  totalPeakDrawLabel: 'Gesamter Spitzenstrom',
  voltageSagLabel: 'Geschätzter Spannungsabfall',
  sagNominalVoltageLabel: 'Nennspannung unter Last',
  flightTimeFullThrottleLabel: 'Vollgas Flugzeit',
  flightTimeHoverLabel: 'Geschätzte Schwebeflugzeit',
  safetyStatusLabel: 'Sicherheitsdiagnose',
  statusOptimalTitle: 'Sicherer und Optimaler Akku',
  statusOptimalDesc: 'Der Akku kann den Spitzenstrom ohne übermäßige Erwärmung oder starken Spannungsabfall problemlos liefern. Hohe Lebensdauer der Zellen garantiert.',
  statusWarningTitle: 'Moderate Thermische und Spannungs Belastung',
  statusWarningDesc: 'Der Spitzenstrom liegt nahe an der realistischen Akkugrenze. Bei schnellen Vollgas Punches ist mit leichtem Voltage Sag zu rechnen.',
  statusDangerTitle: 'Hohes Überlastungs und Sag Risiko',
  statusDangerDesc: 'Der Spitzenstrom übersteigt die reale Kapazität des Akkus. Hohes Risiko von Voltage Sag, Zellüberhitzung und vorzeitiger Alterung.',
  lipoVisualizerTitle: 'Live LiPo Status Visualisierung',
  cellVoltageLabel: 'Zellenspannung',
  batteryHealthLabel: 'Akkubelastung',
  burstRatingRequiredLabel: 'Erforderliche Peak C-Rate',
  currentRatioLabel: 'Strom-Lastverhältnis',
};

const faqItems = [
  {
    question: 'Was bedeutet die C-Rate bei LiPo-Akkus?',
    answer: 'Die C-Rate gibt die maximale kontinuierliche Entladerate im Verhältnis zur Akkukapazität an. Ein 1500-mAh-Akku mit 100C kann theoretisch 150 Ampere liefern.',
  },
  {
    question: 'Warum unterscheidet sich die beworbene von der realen C-Rate?',
    answer: 'Hersteller werben oft mit Peak-Werten unter Laborbedingungen. Die tatsächliche Dauerleistung hängt direkt vom Innenwiderstand der einzelnen Zellen ab.',
  },
  {
    question: 'Wie wirkt sich der Innenwiderstand auf Spannung und Hitze aus?',
    answer: 'Ein hoher Innenwiderstand wirkt wie ein störender Widerstand in der Zelle. Bei hoher Stromabgabe fällt die Spannung ab und Energie wird in Hitze umgewandelt.',
  },
  {
    question: 'Wie vermeide ich Voltage Sag beim Freestyle-Fliegen?',
    answer: 'Verwenden Sie Akkus mit niedrigem Innenwiderstand, wählen Sie eine Sicherheitsreserve von mindestens 15 Prozent über dem Spitzenverbrauch und fliegen Sie nicht unter 3.5V pro Zelle.',
  },
];

const howToSteps = [
  {
    name: 'Voreinstellung wählen oder Akkudaten eingeben',
    text: 'Geben Sie Kapazität in mAh, angegebene C-Rate, Zellenzahl und den durchschnittlichen Innenwiderstand pro Zelle ein.',
  },
  {
    name: 'Motoren und Elektronik konfigurieren',
    text: 'Tragen Sie die Anzahl der Motoren, den Spitzenstrom pro Motor bei Vollgas sowie den Zusatzverbrauch ein.',
  },
  {
    name: 'Sicherheitsdiagnose und Realamperestrom prüfen',
    text: 'Vergleichen Sie den realistischen Dauerstrom mit dem Spitzenverbrauch des Kopters für einen sicheren Flug.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Verständnis von LiPo C-Rate und Realleistung bei Drohnen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Die Auswahl des richtigen LiPo-Akkus für eine FPV-Drohne erfordert das Verständnis der Zusammenhänge zwischen Kapazität, C-Rate und Stromverbrauch. Während Hersteller oft Werte von 100C oder mehr angeben, wird die reale Dauerentladung durch den Innenwiderstand und die Wärmeableitung begrenzt. Dieser Rechner ermittelt die realistische Dauerstromabgabe mit echten Sicherheitsreserven.',
  },
  {
    type: 'title',
    text: 'Vergleichstabelle für RC Akku Chemien',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Chemie', 'Nennspannung', 'Max. Spannung', 'Energiedichte', 'Peak Entladung', 'Empfohlener Einsatz'],
    rows: [
      ['LiPo (Standard)', '3.7V', '4.20V', 'Hoch', '100C - 150C', '5 Zoll FPV Freestyle und Racing'],
      ['LiHV (High Voltage)', '3.8V', '4.35V', 'Sehr hoch', '80C - 120C', 'TinyWhoops und Mikro-Kopter'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Maximum', '15C - 35C', '7 Zoll Long Range Kopter'],
      ['LiFePO4', '3.3V', '3.65V', 'Moderat', '30C - 50C', 'Ladestationen auf dem Feld'],
    ],
  },
  {
    type: 'title',
    text: 'Einfluss von Voltage Sag und Innenwiderstand auf die Performance',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Voltage Sag bezeichnet den plötzlichen Spannungseinbruch unter hoher Last. Wenn Strom durch den Innenwiderstand fließt, entsteht Wärme statt Schub. Ein gealterter Akku führt zu frühzeitigen Niedrigspannungswarnungen im OSD der FPV-Brille.',
  },
  {
    type: 'list',
    items: [
      'Niedriger Innenwiderstand (1-4 mΩ pro Zelle): Maximale Leistung, minimaler Sag und kühle Temperaturen.',
      'Moderater Innenwiderstand (5-10 mΩ pro Zelle): Solide Standard-Performance für Freestyle.',
      'Hoher Innenwiderstand (>12 mΩ pro Zelle): Deutlicher Leistungsverlust, starker Sag und rasche Erwärmung.',
    ],
  },
  {
    type: 'title',
    text: 'Akkuoptimierung für Freestyle Racing und Long Range',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Jeder Flugstil stellt unterschiedliche Anforderungen an die Energieversorgung. 5-Zoll-Freestyle-Kopter erzeugen Stromspitzen von über 120 Ampere, während 7-Zoll-Long-Range-Kopter gleichmäßige Effizienz benötigen. Die passende Abstimmung schützt vor Stromausfällen im Flug.',
  },
  {
    type: 'tip',
    title: 'Tipp zur Akkupflege',
    html: 'Lagern Sie Ihre LiPo-Akkus bei Nichtgebrauch stets bei 3.80V bis 3.85V pro Zelle. Voll geladene Akkus, die länger als 48 Stunden liegen gelassen werden, verringern dauerhaft ihre Leistungsfähigkeit.',
  },
];

const schemas: DroneBatteryCRatingCalculatorLocaleContent['schemas'] = [
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

export const content: DroneBatteryCRatingCalculatorLocaleContent = {
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
