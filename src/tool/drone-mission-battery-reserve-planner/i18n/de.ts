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
    sections: {
      batteryPropulsion: '1. Akku & Antrieb',
      flightAtmosphere: '2. Flugprofil & Atmosphäre',
    },
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
      surveyMeta: 'Vermessung',
      scoutMeta: 'Erkundung',
      hoverMeta: 'Schwebeflug',
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
      voltageSagSubLabel: 'Spannungsabfall',
      maxRadiusSubLabel: 'Maximaler Sicherheitsradius mit Schwebeflug',
      powerSubLabel: 'Leistung',
    },
    statusBadges: {
      optimalTitle: 'OPTIMALER ENERGIERESERVE PUFFER',
      optimalSubtitle: 'Sicheres Flugprofil mit ausreichender Landereserve',
      tightTitle: 'KNAPPE AKKURESERVE WARNUNG',
      tightSubtitle: 'Geringe Landereserve, überwachen Sie die Akkuspannung genau',
      criticalTitle: 'KRITISCHE ENERGIEWARNUNG',
      criticalSubtitle: 'Reserve unterschritten, leiten Sie sofort die Rückkehr ein',
      exceededTitle: 'EINSATZ ÜBERSCHREITET SICHERE KAPAZITÄT',
      exceededSubtitle: 'Unzureichende Energie für sichere Fertigstellung und Landung',
    },
    chart: {
      batteryProfileTitle: 'NICHTLINEARES ENERGIE-VERTEILUNGSPROFIL',
      modelTitle: 'AERODYNAMISCHES LEISTUNGS- UND WINDMODELL',
      windLabel: 'Wind',
      homeNode: 'START',
      targetNode: 'ZIEL',
      landNode: 'LANDUNG',
      launchPadLabel: 'Startplatz',
      surveyHoverLabel: 'Ziel-Schwebeflug',
      safeRadiusLabel: 'Sicherheitsradius',
      outboundSegment: 'Hinflug',
      targetSegment: 'Schwebeflug',
      returnSegment: 'Rückflug',
      reserveSegment: 'Reserve',
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
      html: 'Die Flugsicherheit unbemannter Luftfahrzeuge basiert auf nichtlinearen physikalischen Gesetzen. Das Fliegen gegen den Wind erfordert eine stärkere Neigung, um den Luftwiderstand zu überwinden und die Bodengeschwindigkeit zu halten. Dies erhöht die erforderliche Schubleistung der Motoren und den Stromverbrauch exponentiell.',
    },
    {
      type: 'paragraph',
      html: 'Unser Planer berechnet dynamisch die Leistungsunterschiede für jeden Streckenabschnitt unter Berücksichtigung der Windverhältnisse.',
    },
    {
      type: 'title',
      text: 'Berücksichtigung der Verweilzeit im Zielgebiet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inspektions- und Vermessungsdrohnen verbringen viel Zeit im Schwebeflug über dem Ziel. Diese Phase verbraucht kontinuierlich Energie vor dem Rückflug. Die Point of No Return Formel zieht diese Energie vorab ab.',
    },
    {
      type: 'list',
      items: [
        'Geben Sie die geplante Verweildauer ein, bevor Sie Einsatzgrenzen berechnen.',
        'Berücksichtigen Sie Leistungsspitzen beim Hinflug gegen Gegenwind.',
        'Überwachen Sie den Spannungsabfall unter Last bei LiPo-Zellen.',
        'Leiten Sie die Rückkehr sofort bei Erreichen des Reservepuffers ein.',
      ],
    },
    {
      type: 'tip',
      title: 'Warnung vor Spannungsabfall bei LiPo Akkus',
      html: 'Hohe Entladeströme verursachen durch den Innenwiderstand von Lithium-Polymer-Zellen einen Spannungsabfall unter Last, was die nutzbare Energie verringert.',
    },
    {
      type: 'title',
      text: 'Formeln zur Berechnung der Akkureserve',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parameter', 'Formel / Modell', 'Einheit'],
      rows: [
        ['Brutto-Energie', 'Kapazität (mAh) x Spannung (V) / 1000', 'Wattstunden (Wh)'],
        ['Spannungsabfall-Verlust', 'Brutto-Energie x Sag-Faktor', 'Wattstunden (Wh)'],
        ['Gegenwind-Leistung', 'Basis-Leistung x (1 + 0.65 x WindRatio)^1.3', 'Watt (W)'],
        ['Maximaler Sicherheitsradius', '(Nutzbare Energie - Schwebe-Energie) / Verbrauch pro Km', 'Kilometer (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Bewährte Verfahren für die Flugplanung von Drohnen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vergleichen Sie stets automatische Telemetriedaten mit Vorflugberechnungen, um höchste Sicherheit bei allen gewerblichen UAV-Flügen zu gewährleisten.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
