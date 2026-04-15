import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'rf-antennenlaenge-rechner';
const title = 'RF Antennenlaenge Rechner fur FPV Dipole und Peitschen';
const description = 'Berechnen Sie die genaue Messung für Ihre 868-MHz-, 2,4-GHz- und 5,8-GHz-Antennen. Verbessern Sie die Reichweite Ihrer Drohne und vermeiden Sie, Ihren Sender mit optimiertem SWR zu verbrennen.';

const faqItems = [
  {
    question: 'Warum muss mein Antennendraht eine bestimmte Länge haben?',
    answer: 'Funkwellen resonieren bei Vielfachen ihrer Wellenlänge. Wenn der Draht nicht mit dieser Resonanz übereinstimmt, wird Energie an den Sender zurückreflektiert, anstatt abgestrahlt zu werden, was das Gerät verbrennen kann.',
  },
  {
    question: 'Was ist der Verkürzungsfaktor (Vf)?',
    answer: 'Das ist das Verhältnis zwischen der Geschwindigkeit, mit der sich ein Signal durch einen Leiter bewegt, und der Lichtgeschwindigkeit. Bei Kupfer liegt er typischerweise bei 0.95, was bedeutet, dass die Welle 5% langsamer ist und die Antenne 5% kürzer sein muss.',
  },
  {
    question: 'Ist ein Dipol oder eine Peitschenantenne besser?',
    answer: 'Ein Dipol (1/2 Welle) ist effizienter und vorhersehbarer, aber voluminöser. Eine Peitsche (1/4 Welle) ist kompakt und ideal für kleine Empfänger, erfordert aber eine Massefläche (Ground plane), um gut zu funktionieren.',
  },
  {
    question: 'Welchen Einfluss hat die Kabeldicke auf die Antenne?',
    answer: 'Dickere Drähte haben eine größere Bandbreite (sie sind weniger kritisch hinsichtlich der genauen Frequenz), aber ihr Verkürzungsfaktor ändert sich leicht. Für die meisten FPV-Drohnen ist handelsüblicher 20-22AWG-Draht ideal.',
  },
];

const howToSteps = [
  {
    name: 'Frequenz auswählen',
    text: 'Geben Sie die genaue Frequenz in MHz ein oder verwenden Sie einen der Schnellbuttons für 5.8GHz, 2.4GHz oder 868MHz.',
  },
  {
    name: 'Antennentyp wählen',
    text: 'Entscheiden Sie sich, ob sie einen vollen Dipol (1/2 Welle) oder eine vertikale Peitschenantenne (1/4 Welle) bauen.',
  },
  {
    name: 'Material anpassen',
    text: 'Wählen Sie den Drahttrakt aus, damit der Kalkulator den korrekten Verkürzungsfaktor anwenden kann.',
  },
  {
    name: 'Mit Präzision zuschneiden',
    text: 'Verwenden Sie das Maß "Länge pro Arm", um jedes Element zu schneiden. Vergessen Sie nicht, ab dem Lötpunkt zu messen.',
  },
];

const schemas: AntennaLengthCalculatorLocaleContent['schemas'] = [
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

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Literaturhinweise',
  ui: {
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Literaturhinweise',
    signalParameters: 'Signalparameter',
    antennaType: 'Antennentyp',
    dipole: 'Dipol (1/2 λ)',
    whip: 'Peitsche (1/4 λ)',
    conductorMedium: 'Leitermedium',
    totalLength: 'Gesamtlänge',
    branchLength: 'Zweiglänge',
    secondaryResonance: 'Sekundäre Resonanzpunkte',
    swrIdeal: 'Ideales SWR',
    impedance: 'Impedanz',
    criticalNotice: 'Wichtiger Hinweis',
    criticalNoticeText: 'Eine schlecht geschnittene Antenne erzeugt ein hohes SWR, das die Leistungsendstufen Ihres Senders in Sekunden überhitzen und zerstören kann.',
    dynamicScheme: 'Dynamisches Schema (mm)',
    harmonicLabel: 'Harmonische',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Blankes Kupfer (0.95)',
    materialPvcInsulated: 'PVC isoliertes Kabel (0.92)',
    materialSolidRod: 'Massivstab (0.97)',
    materialCoaxial: 'Koaxialkabel (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Warum ist die Länge Ihrer RF-Antenne so wichtig?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie sich jemals gefragt haben, warum Antennen von FPV-Renndrohnen, Long-Range-Fernsteuerungen oder sogar von Ihrem WLAN-Router so spezifische Längen aufweisen, liegt die Antwort in der Physik der Resonanz. Eine Antenne ist mehr als nur ein Stück leitfähiger Draht; es ist ein Bauteil, das mit der Frequenz der elektromagnetischen Welle "in Resonanz" stehen muss, die es empfängt oder abstrahlt.',
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie Ihre eigene Antenne bauen, sei es ein <strong>Dipol</strong> für 868 MHz oder eine <strong>Peitschenantenne</strong> für 5,8 GHz, wird die Genauigkeit in Millimetern gemessen. Ein Fehler von nur 2 oder 3 mm kann dazu führen, dass die Antenne ineffizient wird, was ein hohes Stehwellenverhältnis (SWR, Standing Wave Ratio) verursacht.',
    },
    {
      type: 'title',
      text: 'Grundkonzepte: Wellenlänge und Resonanz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hochfrequenz (RF) reist mit Lichtgeschwindigkeit (ca. 300.000 Kilometer pro Sekunde). Damit eine Antenne Energie optimal abgeben oder empfangen kann, muss ihre physische Größe in direktem Verhältnis zur Strecke stehen, die ein vollständiger Zyklus der Welle zurücklegt – der sogenannten <strong>Wellenlänge (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Die Grundformel zur Berechnung der Wellenlänge lautet λ = v / f, wobei \'v\' die Ausbreitungsgeschwindigkeit und \'f\' die Frequenz ist. In der realen Welt bewegt sich Strom durch Metalle jedoch etwas langsamer aus als im Vakuum. Hier kommt der <strong>Verkürzungsfaktor (Vf)</strong> ins Spiel.',
    },
    {
      type: 'list',
      items: [
        'Blankes Kupfer: Hat einen Vf von etwa 0.95.',
        'Isolierte Kabel (PVC): Die Isolierung verlangsamt die Welle und senkt den Faktor auf 0.92 oder weniger.',
        'Massiver Kupferstab: Da sie dicker und gut leitend sind, steigt der Faktor leicht auf 0.97.',
      ],
    },
    {
      type: 'title',
      text: 'Gängige Antennentypen für Drohnen und Maker-Projekte',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Halbwellen-Dipolantenne (1/2 λ):</strong> Dies ist der Goldstandard für viele Anwendungen. Sie besteht aus zwei Armen (strahlenden Elementen), die zusammen die Hälfte der Wellenlänge der Betriebsfrequenz ausmachen. Sie ist eine symmetrische Antenne, die ein "Donut"-förmiges Strahlungsmuster bietet und sehr einfach aus Koaxialkabel hergestellt werden kann.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Viertelwellen-Peitsche oder Monopolantenne (1/4 λ):</strong> Das ist es, was wir normalerweise an Funkempfängern oder kleinen Drohnen sehen. Sie hat nur ein Strahlerelement und nutzt das Chassis des Geräts oder eine Massefläche, um die andere Hälfte der Welle zu "reflektieren". Ihre Länge entspricht genau der Hälfte eines Dipols, daher der Name Viertelwelle.',
    },
    {
      type: 'title',
      text: 'Kritische Frequenzen und Anwendungen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jedes Frequenzband hat seine Eigenheiten. Mit unserem Rechner können Sie die Messungen für die am häufigsten im Hobby verwendeten Bänder anpassen:',
    },
    {
      type: 'list',
      items: [
        '5,8 GHz (FPV Video): Die Längen sind winzig (ca. 12-13 mm für den Strahler). Jedes bisschen zu viel Lötzinn kann die Leistung ruinieren.',
        '2,4 GHz (Steuerung und WLAN): Ein stark genutztes Band, bei dem die Antenneneffizienz der Schlüssel zur Vermeidung von Verbindungsverlusten (Failsafe) ist.',
        '868 MHz / 915 MHz (Long Range): Verwendet von Systemen wie Team BlackSheep Crossfire oder ExpressLRS. Hier sind die Antennen größer (ca. 8 cm pro Arm) und durchdringen Hindernisse leichter.',
        '433 MHz (UHF): Der alte Long-Range-Standard mit großen Antennen, ideal für Flüge über viele Kilometer.',
      ],
    },
    {
      type: 'title',
      text: 'Technische Referenz: SWR- und Verlusttabelle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Für eine optimale Leistung sollte das SWR so nah wie möglich bei 1.0 liegen. Hier ist eine Referenz, wie das SWR Ihre Übertragungsleistung beeinflusst:',
    },
    {
      type: 'table',
      headers: ['SWR', 'Rückflussdämpfung', 'Reflektierte Leistung', 'Status'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Perfekt</strong>'],
        ['1.2:1', '-21 dB', '0.8%', 'Exzellent'],
        ['1.5:1', '-14 dB', '4.0%', 'Gut'],
        ['2.0:1', '-9.5 dB', '11.1%', 'Akzeptables Limit'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>Gefährlich</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'Die Bedeutung der 50 Ohm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fast alle Funksysteme, die in Drohnen und RC-Modellen verwendet werden (VTx, Empfänger, Steuerungen), sind für eine <strong>charakteristische Impedanz von 50 Ohm</strong> ausgelegt. Eine perfekt resonante Dipolantenne hat im freien Raum typischerweise eine Impedanz nahe 73 Ohm, aber wenn sie auf einer Drohne installiert wird oder wenn der Armwinkel angepasst wird (Inverted-V), nähert sie sich den idealen 50 Ohm. Die Verwendung von 75-Ohm-Koaxialkabeln (wie bei alten TV-Kabeln) führt zu einer Fehlanpassung, die das Signal verschlechtert, egal wie gut Sie die Antenne zuschneiden.',
    },
    {
      type: 'title',
      text: 'Die Gefahr von hohem SWR: Schützen Sie Ihren VTx',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Warum bestehen wir so sehr auf Genauigkeit? Wenn die Antenne nicht die richtige Länge hat, kann sie nicht die gesamte Energie abstrahlen, die vom Videosender (VTx) gesendet wird. Diese Energie "prallt ab" und kehrt als Wärme zum Sender zurück.',
    },
    {
      type: 'paragraph',
      html: 'Ein hohes SWR ist die häufigste Ursache für verbrannte Sender. Wenn Sie ohne Antenne oder mit einer schlecht geschnittenen fliegen, überhitzen die internen Komponenten in Sekundenschnelle und machen Ihr Gerät unbrauchbar. Die Nutzung dieses Tools zur Überprüfung Ihrer Zuschnitte ist die beste Sicherheitsinvestition für Ihre Drohne.',
    },
    {
      type: 'title',
      text: 'Harmonische Oberwellen: Interferenz verstehen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine auf 868 MHz zugeschnittene Antenne resoniert nicht nur auf dieser Frequenz. Auf Grund der Natur von Sinuswellen wird sie auch Resonanzpunkte bei ihren ungeraden Vielfachen (3., 5., 7. Harmonische) haben.',
    },
    {
      type: 'paragraph',
      html: 'Das ist besonders wichtig zu wissen, denn selbst wenn Ihre Antenne auf 868 MHz sendet, könnten Sie "Rauschen" oder Interferenzen auf höheren Frequenzen erzeugen, falls der Sender nicht gut gefiltert ist. Der Harmonikarechner hilft Ihnen, vorherzusagen, wo diese Phantom-Signale auftreten könnten.',
    },
  ],
  faq: [
    {
      question: 'Warum muss mein Antennendraht eine bestimmte Länge haben?',
      answer: 'Funkwellen resonieren bei Vielfachen ihrer Wellenlänge. Wenn der Draht nicht mit dieser Resonanz übereinstimmt, wird Energie an den Sender zurückreflektiert, anstatt abgestrahlt zu werden, was das Gerät verbrennen kann.',
    },
    {
      question: 'Was ist der Verkürzungsfaktor (Vf)?',
      answer: 'Das ist das Verhältnis zwischen der Geschwindigkeit, mit der sich ein Signal durch einen Leiter bewegt, und der Lichtgeschwindigkeit. Bei Kupfer liegt er typischerweise bei 0.95, was bedeutet, dass die Welle 5% langsamer ist und die Antenne 5% kürzer sein muss.',
    },
    {
      question: 'Ist ein Dipol oder eine Peitschenantenne besser?',
      answer: 'Ein Dipol (1/2 Welle) ist effizienter und vorhersehbarer, aber voluminöser. Eine Peitsche (1/4 Welle) ist kompakt und ideal für kleine Empfänger, erfordert aber eine Massefläche (Ground plane), um gut zu funktionieren.',
    },
    {
      question: 'Welchen Einfluss hat die Kabeldicke auf die Antenne?',
      answer: 'Dickere Drähte haben eine größere Bandbreite (sie sind weniger kritisch hinsichtlich der genauen Frequenz), aber ihr Verkürzungsfaktor ändert sich leicht. Für die meisten FPV-Drohnen ist handelsüblicher 20-22AWG-Draht ideal.',
    },
  ],
  bibliography: [
    { name: 'Der Viertelwellen-Monopol', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Verkürzungsfaktor von Übertragungsleitungen', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Frequenz auswählen',
      text: 'Geben Sie die genaue Frequenz in MHz ein oder verwenden Sie einen der Schnellbuttons für 5.8GHz, 2.4GHz oder 868MHz.',
    },
    {
      name: 'Antennentyp wählen',
      text: 'Entscheiden Sie sich, ob sie einen vollen Dipol (1/2 Welle) oder eine vertikale Peitschenantenne (1/4 Welle) bauen.',
    },
    {
      name: 'Material anpassen',
      text: 'Wählen Sie den Drahttrakt aus, damit der Kalkulator den korrekten Verkürzungsfaktor anwenden kann.',
    },
    {
      name: 'Mit Präzision zuschneiden',
      text: 'Verwenden Sie das Maß "Länge pro Arm", um jedes Element zu schneiden. Vergessen Sie nicht, ab dem Lötpunkt zu messen.',
    },
  ],
  schemas,
};
