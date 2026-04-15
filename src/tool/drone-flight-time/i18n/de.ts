import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'drohnen-flugzeit-rechner';
const title = 'Drohnen Flugzeit Rechner zur Schätzung der LiPo LiIon Autonomie';
const description = 'Berechnen Sie die Flugzeit Ihrer Drohne basierend auf mAh-Kapazität und Stromverbrauch. Optimieren Sie Ihre LiPo-Akkus für sichere Flüge.';

const faqItems = [
  {
    question: 'Warum ist die reale Zeit kürzer als berechnet?',
    answer: 'Der Rechner geht von einem konstanten Verbrauch aus. Abrupte Manöver, Gegenwind und Akkuverschleiß können die reale Zeit um bis zu 30 % reduzieren.',
  },
  {
    question: 'Bei welcher Spannung sollte ich meine Drohne landen?',
    answer: 'Im Idealfall landen Sie, wenn die Spannung (im Ruhezustand) auf 3,5V - 3,6V pro Zelle sinkt. Dies entspricht den empfohlenen 20 % Restkapazität.',
  },
  {
    question: 'Sind LiPo- oder Li-Ion-Akkus besser für Drohnen?',
    answer: 'LiPos bieten viel Sofortleistung (ideal für Rennen und Akrobatik). Li-Ion-Zellen haben eine längere Ausdauer, aber weniger Leistung (ideal für lange, ruhige Flüge).',
  },
  {
    question: 'Wie beeinflusst die Zellenzahl (S) die Flugzeit?',
    answer: 'Mehr Zellen erhöhen Spannung und Leistung, aber auch das Gewicht. Wenn die Motoren für diese Spannung optimiert sind, können sie effizienter sein, garantieren aber allein noch keine längere Zeit.',
  },
];

const howToSteps = [
  {
    name: 'Kapazität identifizieren',
    text: 'Prüfen Sie das Etikett Ihres Akkus und suchen Sie nach dem mAh-Wert (z. B. 1500, 2200, 4500).',
  },
  {
    name: 'Verbrauch schätzen',
    text: 'Geben Sie die durchschnittliche Amperezahl an, die Ihre Drohne verbraucht. Sie können diese nach einem Testflug in der Telemetrie sehen.',
  },
  {
    name: 'Marge anpassen',
    text: 'Wir empfehlen, 20 % übrig zu lassen (auf 80 % einstellen), um den Akku zu schützen und eine Landereserve zu haben.',
  },
  {
    name: 'Ergebnis erhalten',
    text: 'Lassen Sie sich die genaue Zeit in Minuten und Sekunden anzeigen, die Sie sicher in der Luft bleiben können.',
  },
];

const schemas: DroneFlightTimeLocaleContent['schemas'] = [
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

export const content: DroneFlightTimeLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Literaturhinweise',
  ui: {
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Literaturhinweise',
    batterySpecs: 'Akku-Spezifikationen',
    capacity: 'Kapazität',
    voltage: 'Spannung (S-Zellen)',
    safetyMargin: 'Sicherheitsmarge',
    landingHint: 'Landen bei 3,5V - 3,7V pro Zelle.',
    consumptionDynamics: 'Verbrauchsdynamik',
    averageConsumption: 'Durchschnittlicher Verbrauch',
    powerWatts: 'Leistung (Watt)',
    efficiencyHint: 'Bei Änderung der Ampere werden die Watt basierend auf der S-Spannung neu berechnet.',
    estimatedEfficiency: 'Geschätzte Effizienz',
    typicalEfficiencyHint: 'Typisch: 4-6 (Racing), 8-12 (Cinematic/Long Range).',
    safeFlight: 'Sicherer Flug',
    totalEnergy: 'Gesamtenergie',
    theoreticalTime: 'Theoretische Zeit (0%)',
    co2Footprint: 'CO2-Fußabdruck',
    autonomyChart: 'Autonomie-Diagramm',
    chartSubtitle: 'Ampere (A) vs. Zeit (min)',
    chartLabel: 'Minuten',
  },
  seo: [
    {
      type: 'title',
      text: 'Drohnen-Flugzeitrechner: Ein kompletter Leitfaden zur Autonomie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Autonomie ist wohl der kritischste Faktor bei der Konstruktion und dem Betrieb eines unbemannten Luftfahrzeugs. Egal, ob Sie ein FPV-Rennpilot, ein Profifotograf oder ein Long-Range-Enthusiast sind, das genaue Wissen darüber, wie lange Ihre Ausrüstung in der Luft bleiben kann, ist lebenswichtig für die Sicherheit und den Erfolg der Mission. Unser <strong>Flugzeitrechner</strong> nutzt die grundlegenden Variablen der Akkukapazität und der Stromaufnahme, um Ihnen eine realistische und sichere Einschätzung zu geben.',
    },
    {
      type: 'title',
      text: 'Akkukapazität: mAh erklärt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Kapazität eines Akkus wird üblicherweise in Milliamperestunden (mAh) gemessen. Diese Zahl gibt an, wie viel elektrische Ladung der Akku speichern kann. Zum Beispiel kann ein 1500-mAh-Akku theoretisch eine Stunde lang 1500 Milliampere liefern. In der Drohnenwelt, in der die Stromaufnahme extrem hoch ist, sprechen wir meist von Ampere (A). 1000 mAh entsprechen genau 1 Ah (Amperestunde).',
    },
    {
      type: 'paragraph',
      html: 'Die Bruttokapazität ist jedoch nicht der einzige Faktor. Die Spannung (bestimmt durch die Anzahl der Zellen oder \'S\') beeinflusst direkt die Gesamtleistung (Watt), aber für die Zeitberechnung basierend auf dem Motorverbrauch ist das Verhältnis Ah/Ampere die direkteste und am häufigsten genutzte Kennzahl.',
    },
    {
      type: 'title',
      text: 'Stromaufnahme: Stromstärke im Flug',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Verbrauch der Motoren ist die Variable, die während eines Fluges am stärksten schwankt. Das Halten einer Drohne im Schwebeflug (Hover) ist nicht dasselbe wie aggressive akrobatische Manöver. Jede Motor-Propeller-Kombination hat eine Effizienzkurve. Wenn Sie Vollgas geben, schnellt die Amperezahl in die Höhe, was die Lebensdauer des Akkus drastisch verkürzt.',
    },
    {
      type: 'list',
      items: [
        'Schwebeflug: Der Verbrauch ist minimal und konstant, ideal für die Fotografie.',
        'Reiseflug: Etwas erhöhter Verbrauch aufgrund des Luftwiderstands.',
        'Aggressiver/FPV-Flug: Stromspitzen können den Durchschnittsverbrauch in Sekundenschnelle verdreifachen.',
        'Gewicht der Drohne: Jedes zusätzliche Gramm erfordert höhere Motordrehzahlen, um Auftrieb zu erzeugen, was die Stromstärke erhöht.',
      ],
    },
    {
      type: 'title',
      text: '80 Prozent Sicherheitsregel: Schutz der LiPo Chemie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Entladen eines LiPo-Akkus (Lithium-Polymer) auf 0 % seiner Kapazität ist der schnellste Weg, ihn zu zerstören und, was noch schlimmer ist, einen Absturz zu verursachen. Chemisch gesehen erleiden die Zellen irreversible Schäden, wenn ihre Spannung unter einen kritischen Schwellenwert fällt (normalerweise 3,0V - 3,2V pro Zelle).',
    },
    {
      type: 'paragraph',
      html: 'Daher wenden wir immer eine <strong>Sicherheitsmargen-Regel</strong> an. Unser Rechner erlaubt es Ihnen, diesen Wert anzupassen, aber es wird empfohlen, zu landen, wenn noch 20 % der Ladung vorhanden sind. Dies verlängert nicht nur die Lebensdauer Ihrer teuren Akkus um hunderte von Zyklen, sondern garantiert Ihnen auch eine lebenswichtige Leistungsreserve im Falle unerwarteter Windböen oder falls Sie einen Landeanflug abbrechen und es erneut versuchen müssen.',
    },
    {
      type: 'tip',
      html: 'Drohnenakkus sind sehr kälteempfindlich. Im Winter steigt der Innenwiderstand des LiPos, was zu einem schnelleren Spannungsabfall führt. Wärmen Sie Ihre Akkus vor dem Start immer auf, wenn die Außentemperatur unter 15 Grad liegt.',
    },
    {
      type: 'title',
      text: 'Mathematische Flugformel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Obwohl unser Tool die schwere Arbeit für Sie erledigt, ist es interessant, die Logik hinter der Berechnung zu kennen. Die Grundformel lautet:',
    },
    {
      type: 'paragraph',
      html: '<strong>Zeit (min) = ((Kapazität mAh / 1000) * Sicherheitsfaktor) / Ampere-Aufnahme * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie zum Beispiel einen 2200-mAh-Akku haben, bei 20 % Restkapazität landen möchten (Sicherheitsfaktor 0,8) und Ihre Drohne durchschnittlich 15 Ampere verbraucht, lautet die Berechnung: (2,2 * 0,8) / 15 * 60 = 7,04 Minuten sichere Flugzeit.',
    },
    {
      type: 'title',
      text: 'Gewichtsoptimierung und Effizienz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es gibt einen Punkt abnehmender Erträge beim Hinzufügen größerer Akkus. Das Verdoppeln der Akkukapazität verdoppelt nicht die Flugzeit, da der Akku selbst an Gewicht gewinnt. Dieses Zusatzgewicht erfordert, dass die Motoren schneller drehen und somit mehr Strom verbrauchen. Ab einem gewissen Punkt verbraucht das zusätzliche Gewicht mehr Energie, als es liefert, was die Gesamteffizienz des Systems verringert.',
    },
    {
      type: 'paragraph',
      html: 'Erfahrene Piloten suchen nach dem perfekten Gleichgewicht zwischen <em>Disc Loading</em> (Propellerflächenbelastung) und Akkukapazität, um das zu maximieren, was wir "nutzbare Missionszeit" nennen.',
    },
    {
      type: 'title',
      text: 'Unterschiede zwischen Drohnentypen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Micro-Drohnen (Whoops):</strong> Verbrauchen nur 2-5 Ampere, aber ihre Akkus haben 300-500 mAh. Die Zeit ist meist kurz (3-4 Min.) aufgrund der geringen Trägheit und hohen Drehzahlen.',
    },
    {
      type: 'paragraph',
      html: '<strong>5 Zoll Racing-Drohnen:</strong> Enormer Verbrauch im Rennen (bis zu 120A Spitzen), was einen 1300-mAh-Akku in knapp 2 Minuten Adrenalin pur entlädt.',
    },
    {
      type: 'paragraph',
      html: '<strong>Long-Range-Drohnen:</strong> Auf Effizienz optimiert. Sie verwenden oft Lithium-Ionen-Zellen (Li-Ion), die eine höhere Energiedichte als LiPos haben und Flüge von 30 bis 60 Minuten bei sehr niedrigen Stromstärken ermöglichen.',
    },
    {
      type: 'tip',
      html: 'Der Wechsel zu Propellern mit weniger Steigung (Pitch) kann Ihre Flugzeit auf Kosten von Höchstgeschwindigkeit und Ansprechverhalten erhöhen. Dies ist die günstigste und effektivste Methode, um 10-15 % mehr Autonomie zu gewinnen.',
    },
    {
      type: 'title',
      text: 'Wartung und Lagerung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Damit die Berechnungen dieses Tools genau sind, müssen Ihre Akkus in gutem Zustand sein. Ein Akku mit hohem Innenwiderstand wird übermäßig heiß und "lügt" über seine tatsächliche Kapazität. Lagern Sie Ihre Akkus immer bei Lagerspannung (3,8V-3,85V pro Zelle), wenn Sie länger als 48 Stunden nicht fliegen.',
    },
    {
      type: 'paragraph',
      html: 'Zusammenfassend lässt sich sagen, dass Energiemanagement die Kunst ist, Physik, Chemie und Mathematik in Einklang zu bringen. Nutzen Sie unseren Rechner regelmäßig, um Ihre Flugstunden zu planen, und vergessen Sie nie, dass in der Luft Zeit die wertvollste Ressource ist. Guten Flug und sichere Landungen!',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'EASA - Drohnen-Regulierungen', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot Wiki', url: 'https://ardupilot.org/copter/' },
    { name: 'Battery University', url: 'https://batteryuniversity.com/' },
  ],
  howTo: howToSteps,
  schemas,
};
