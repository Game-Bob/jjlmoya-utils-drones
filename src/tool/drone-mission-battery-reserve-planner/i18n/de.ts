import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drohnen-missions-akku-reserve-planer';
const title = 'Drohnen Missions Akku Reserve Planer';
const description = 'Berechnen Sie sichere Akku-Rückkehrreserven, Gegenwind-Leistungsverluste und maximale Einsatzradien für UAV-Flüge.';

const faqItems = [
  {
    question: 'Warum verbraucht das Fliegen gegen Gegenwind überproportional viel Energie?',
    answer: 'Gegenwind erfordert einen steileren Neigungswinkel zur Überwindung des Luftwiderstands, was den Motorstromverbrauch exponenziell ansteigen lässt.',
  },
  {
    question: 'Wie fließt die Verweilzeit am Zielort in den Point of No Return ein?',
    answer: 'Die Einsatzzeit am Ziel zieht direkt Energie aus der nutzbaren Akkukapazität ab, bevor der verbleibende Transitradius berechnet wird.',
  },
  {
    question: 'Was verursacht den Spannungsabfall unter Last bei LiPo-Akkus?',
    answer: 'Hohe Stromstärken erhöhen die Verluste am Innenwiderstand der Lithiumzellen und verringern die effektiv nutzbare Energie.',
  },
];

const howToSteps = [
  {
    name: 'Akku- und Antriebsdaten eingeben',
    text: 'Geben Sie Akkukapazität in Milliampere-Stunden, Nennspannung und durchschnittlichen Stromverbrauch ein.',
  },
  {
    name: 'Flugdistanz und Zielzeit festlegen',
    text: 'Bestimmen Sie die Einfachdistanz und die geplante Verweildauer über dem Zielgebiet.',
  },
  {
    name: 'Windgeschwindigkeit und Richtung konfigurieren',
    text: 'Wählen Sie Windgeschwindigkeit und Windrichtung bezogen auf den Hinflug.',
  },
  {
    name: 'Sicherheitsradius und Telemetrie prüfen',
    text: 'Analysieren Sie den berechneten Point of No Return, den Verbrauch pro Flugphase und den verbleibenden Akkustand.',
  },
];

const schemas: DroneMissionBatteryReservePlannerLocaleContent['schemas'] = [
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
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Drohnen Missions Akku Reserve Planer',
    subtitle: 'Berechnen Sie Sicherheitsreserven für die Rückkehr, Windeinflüsse und Flugradien',
    description: 'Präzise Berechnung der Akkureserve für Drohnenflüge mit Gegenwindanpassung und Point of No Return Schwellenwerten.',
    inputs: {
      unitSystemLabel: 'Einheitensystem',
      metricLabel: 'Metrisch',
      imperialLabel: 'Imperial',
      presetLabel: 'Schnellkonfigurationen',
      batteryCapacityLabel: 'Akkukapazität',
      batteryVoltageLabel: 'Nennspannung',
      averageCurrentLabel: 'Durchschnittlicher Reisestrom',
      cruiseSpeedLabel: 'Eigengeschwindigkeit in der Luft',
      oneWayDistanceLabel: 'Einfache Zielentfernung',
      targetHoverTimeLabel: 'Einsatzdauer am Zielort',
      windSpeedLabel: 'Windgeschwindigkeit',
      windDirectionLabel: 'Windrichtung relativ zum Hinflug',
      windHeadwindLabel: 'Gegenwind auf Hinflug',
      windTailwindLabel: 'Rückenwind auf Hinflug',
      windCrosswindLabel: 'Seitenwind',
      reservePolicyLabel: 'Sicherheits-Reservepuffer',
    },
    presets: {
      mappingSurvey: 'Fotogrammetrie & Vermessung',
      fpvRecon: 'FPV Langstrecken-Erkundung',
      cinematicInspection: 'Kineastische Bauwerksinspektion',
      microRecon: 'Mikro-Drohnen-Erkundung',
    },
    results: {
      totalCapacityEnergy: 'Gesamtkapazität Energie',
      usableEnergy: 'Nutzbare Missionsenergie',
      reserveEnergyBuffer: 'Reserve-Energiepuffer',
      totalAutonomyTime: 'Gesamte Flugautonomie',
      maxSafeMissionRadius: 'Point of No Return Radius',
      outboundLegTime: 'Dauer Hinflug',
      targetHoverTime: 'Dauer Zielverweilung',
      returnLegTime: 'Dauer Rückflug',
      totalMissionTime: 'Gesamte Transitdauer',
      remainingEnergyLanding: 'Geschätzter Akkustand bei Landung',
      feasibilityStatus: 'Bewertung der Einsatzdurchführbarkeit',
    },
    statusBadges: {
      optimal: 'Optimaler Energiereserve-Puffer',
      tight: 'Warnung Knappe Akkureserve',
      critical: 'Kritische Energiewarnung Ausgelöst',
      exceeded: 'Einsatz Überschreitet Sichere Kapazität',
    },
    chart: {
      batteryProfileTitle: 'Energieentladeprofil des Akkus',
      outboundSegment: 'Hinflug-Streckenabschnitt',
      targetSegment: 'Schwebeflug am Zielort',
      returnSegment: 'Rückflug zum Startort',
      reserveSegment: 'Sicherheits-Reservepuffer',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Aerodynamische Leistungsverluste bei Gegenwind',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Flugsicherheit unbemannter Luftfahrzeuge basiert auf nichtlinearen physikalischen Gesetzen. Das Fliegen gegen den Wind erfordert eine stärkere Neigung, um den Luftwiderstand zu überwinden und die Bodengeschwindigkeit zu halten.',
    },
    {
      type: 'title',
      text: 'Berücksichtigung der Verweilzeit im Zielgebiet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inspektions- und Vermessungsdrohnen verbringen viel Zeit im Schwebeflug über dem Ziel. Diese Phase verbraucht kontinuierlich Energie vor dem Rückflug.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
