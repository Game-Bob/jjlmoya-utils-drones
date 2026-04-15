import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'gps-koordinaten-umrechner';
const title = 'GPS Koordinaten Umrechner fur Breitengrad und Laengengrad';
const description = 'Wandeln Sie GPS-Koordinaten zwischen Dezimalgrad (DD), Grad Minuten Sekunden (DMS) und GPS-Hardwareformaten um. Unverzichtbar für ArduPilot und INAV Wegpunkte.';

const faqItems = [
  {
    question: 'What is the difference between DD and DMS?',
    answer: `DD (Decimal Degrees) uses a single number with decimals (e.g., 51.50). DMS (Degrees, Minutes, Seconds) divides the degree into sexagesimal fractions (e.g., 51° 30' 0").`,
  },
  {
    question: 'Why are negative coordinates used?',
    answer: 'In the Decimal system (DD), latitudes south of the Equator and longitudes west of Greenwich are indicated with a negative sign to facilitate mathematical calculations.',
  },
  {
    question: 'How much precision do I lose when converting?',
    answer: 'Our tool uses double-precision floating point. With 6 decimals in DD, the precision is about 11 centimeters, which is more than enough for drones and civil navigation.',
  },
  {
    question: 'Does this tool work offline?',
    answer: 'Yes, once the page is loaded, all conversion logic is local (client-side). Only the map requires a connection to download new tiles.',
  },
];

const schemas: GpsCoordinatesConverterLocaleContent['schemas'] = [
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
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Input Coordinates',
        text: 'Enter your coordinates in either Decimal Degrees (DD) or Degrees, Minutes, Seconds (DMS) format.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Review Conversion',
        text: 'The tool instantly displays the converted coordinates in all supported formats.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify on Map',
        text: 'Check the map visualization to ensure the coordinates point to the correct location.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Copy Result',
        text: 'Copy the converted coordinates to your clipboard for use in navigation systems or mission planning.',
      },
    ],
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


export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Referenzhandbücher',
  ui: {
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Referenzhandbücher',
    latitude: 'Breitengrad',
    longitude: 'Längengrad',
    decimalDegrees: 'Dezimalgrad (DD)',
    degreesMinutesSeconds: 'Grad, Minuten, Sekunden (DMS)',
    gpsHardware: 'GPS Hardware Format (Roh)',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    invalidCoordinate: 'Ungültige Koordinate',
    pasteHardwareMapFormat: 'Hardware-Rohdaten einfügen (z.B. 404306300, -739981800)',
    validation: {
      latRange: 'Der Breitengrad muss zwischen -90 und 90 liegen.',
      lonRange: 'Der Längengrad muss zwischen -180 und 180 liegen.',
      invalidFormat: 'Das Format wird nicht erkannt. Bitte überprüfen Sie Ihre Eingabe.',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'GPS-Koordinaten verstehen: Das unerlässliche Tool für die Drohnennavigation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn es um den autonomen Drohnenflug, Luftbildvermessung oder die Wiederbeschaffung von verlorenen Geräten geht, sind Präzision und Einheitlichkeit der Schlüssel. GPS-Koordinaten bilden das Rückgrat der Navigation, jedoch verwenden unterschiedliche Systeme (wie Betaflight, INAV, ArduPilot und Google Maps) verschiedene Formate. Unser <strong>GPS Koordinaten Umrechner</strong> überbrückt diese Lücke und stellt sicher, dass Ihre Wegpunkte immer genau dort liegen, wo Sie sie beabsichtigen.',
    },
    {
      type: 'title',
      text: 'Die drei wesentlichen GPS-Formate',
      level: 3,
    },
    {
      type: 'title',
      text: '1. Dezimalgrad (DD - Decimal Degrees)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Dies ist heute das weltweit gebräuchlichste Format, das weithin von <strong>Google Maps</strong>, modernen Smartphones und den meisten Web-Mapping-Diensten übernommen wurde. Es drückt die Position als einfache Dezimalzahl aus (z.B. <code>40.7128, -74.0060</code>). Es ist extrem einfach zu kopieren, einzufügen und von Computern zu verarbeiten.',
    },
    {
      type: 'list',
      items: [
        'Positive Breitengrade liegen in der nördlichen Hemisphäre, negative in der südlichen.',
        'Positive Längengrade liegen östlich des Nullmeridians, negative westlich.',
      ],
    },
    {
      type: 'title',
      text: '2. Grad, Minuten, Sekunden (DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Dies ist das traditionelle Format, das in der Seefahrt, Luftfahrt und in älteren Topografiekarten verwendet wird (z.B. <code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code>). Es ist für menschliche Navigation auf gedruckten Karten intuitiver, da es die Erde in 360 Grad unterteilt, wobei jeder Grad 60 Minuten und jede Minute 60 Sekunden hat. Bei der Programmierung von Flügen kann es aufgrund der speziellen Symbole jedoch lästig einzugeben sein.',
    },
    {
      type: 'title',
      text: '3. GPS Hardware / Rohformat (ArduPilot / INAV)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie direkt CLI-Dumps ansehen, Flugprotokolle (Blackbox) im Rohformat studieren oder mit Systemen wie ArduPilot über MAVLink interagieren, werden Sie oft sehen, dass Koordinaten als große ganze Zahlen dargestellt werden (z.B. <code>407128000, -740060000</code>).',
    },
    {
      type: 'paragraph',
      html: 'Dies wird durchgeführt, indem der Dezimalgrad mit <strong>10.000.000 (1e7)</strong> multipliziert wird. Der Grund dafür ist, dass Mikrocontroller ganze Zahlen viel schneller und präziser verarbeiten können als Fließkommazahlen (Dezimalzahlen). Dieses Tool konvertiert nahtlos in dieses Format und daraus zurück, was es ideal für die Analyse von Blackbox-Daten macht.',
    },
    {
      type: 'title',
      text: 'Wofür Drohnenpiloten diese Konvertierung benötigen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es gibt mehrere kritische Szenarien, in denen dieser Konverter Ihr bester Freund wird:',
    },
    {
      type: 'list',
      items: [
        '<strong>Lost Drone Recovery:</strong> Ihr OSD (On-Screen Display) oder Taranis/Radiomaster-Sender zeigt oft die letzten bekannten Koordinaten im DD- oder DMS-Format an. Sie können diese schnell umwandeln, um in Google Maps eine Nadel zu setzen, um Ihre teure Drohne zu finden.',
        '<strong>Wegpunkt-(Waypoint)-Planung:</strong> Die Missionsplanung in Software wie Mission Planner oder QGroundControl erfordert höchste Genauigkeit. Durch die Umwandlung von DMS-Koordinaten einer klassischen Vermessungskarte für diese Systeme stellen Sie sicher, dass Ihr Drohnen-Mäh- oder Kartierungsflug nicht auf Privatgrundstücken stattfindet.',
        '<strong>Firmware-Konfiguration:</strong> Das direkte Festlegen einer Rettungsposition (Return to Home) in CLI erfordert bei manchen Firmware-Typen das rohe GPS-Format, auf den zehntausendsten Grad genau.',
      ],
    },
    {
      type: 'title',
      text: 'Entschlüsselung der Koordinatengenauigkeit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wie viele Dezimalstellen benötigen Sie wirklich? Eine kleine Änderung bei GPS-Koordinaten entspricht folgenden Distanzen in der realen Welt (am Äquator):',
    },
    {
      type: 'list',
      items: [
        '<strong>1 Dezimalstelle</strong> (z.B. 40.1): Etwa 111 Kilometer.',
        '<strong>3 Dezimalstellen</strong> (z.B. 40.123): Etwa 110 Meter. (Dorf / Nachbarschaft)',
        '<strong>5 Dezimalstellen</strong> (z.B. 40.12345): Etwa 1,1 Meter. (Ausreichend für die Drohnen-Rückkehr)',
        '<strong>7 Dezimalstellen</strong> (z.B. 40.1234567): Etwa 11 Millimeter. (Professionelle RTK-Vermessung)',
      ],
    },
    {
      type: 'paragraph',
      html: 'Die meisten Standard-M8N- oder M10-GPS-Module für FPV-Drohnen liefern unter freiem Himmel eine Genauigkeit auf die 5. oder 6. Dezimalstelle (ca. 1-2 Meter). Geben Sie beim Kopieren nach Möglichkeit immer mindestens 6 Stellen an, um eine genaue Wiederauffindung zu gewährleisten.',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'ArduPilot GPS Integration', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: 'Dezimalgrad vs DMS (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: 'Format identifizieren',
      text: 'Bestimmen Sie das Format der Koordinaten, die Sie umwandeln möchten. Sehen sie aus wie 40.7128, -74.0060 (DD)? Enthalten sie Grade, Minuten, Sekunden (z. B. 40°42\'46"N 74°00\'21"W)? Oder sind es große Zahlen wie 407128000 (Hardware)?',
    },
    {
      name: 'Koordinaten eingeben',
      text: 'Fügen oder tippen Sie Ihre Koordinate in das entsprechende der drei Felder (Dezimal, DMS oder Hardware) ein. Die Umrechnung erfolgt automatisch in Echtzeit.',
    },
    {
      name: 'Ergebnisse prüfen',
      text: 'Kontrollieren Sie die anderen zwei Felder. Die Software wandelt Ihre Eingabe sofort in die zwei anderen Formate um.',
    },
    {
      name: 'Kopieren und verwenden',
      text: 'Nutzen Sie die Kopieren-Schaltfläche (Copy) neben dem gewünschten Format, um den Wert der Koordinate im neuen Format in die Zwischenablage zu befördern. Füge sie in Maps, Ihren CLI-Terminal oder Ihr Missions-Tool ein.',
    },
  ],
  schemas,
};
