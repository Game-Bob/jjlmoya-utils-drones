import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'gps-coordinaten-converter';
const title = 'GPS Coordinaten Converter voor ArduPilot en INAV Waypoints';
const description = 'Converteer GPS-coördinaten tussen Decimale Graden (DD), Graden Minuten Seconden (DMS) en GPS-hardwareformaten. Essentieel voor ArduPilot en INAV waypoints.';

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
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Referentiehandleidingen',
  ui: {
    faqTitle: 'Veelgestelde Vragen',
    bibliographyTitle: 'Referentiehandleidingen',
    latitude: 'Breedtegraad',
    longitude: 'Lengtegraad',
    decimalDegrees: 'Decimale Graden (DD)',
    degreesMinutesSeconds: 'Graden, Minuten, Seconden (DMS)',
    gpsHardware: 'GPS-hardwareformaat (Raw)',
    copy: 'Kopiëren',
    copied: 'Gekopieerd!',
    invalidCoordinate: 'Ongeldige coördinaat',
    pasteHardwareMapFormat: 'Plak hardwareformaat (bijv. 404306300, -739981800)',
    validation: {
      latRange: 'Breedtegraad moet tussen -90 en 90 liggen.',
      lonRange: 'Lengtegraad moet tussen -180 en 180 liggen.',
      invalidFormat: 'Formaat niet herkend. Controleer uw invoer.',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Het Begrijpen van GPS-coördinaten: Een Onmisbaar Hulpmiddel voor Dronenavigatie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij autonome dronevluchten, luchtbeeldsurveys of het terughalen van verloren apparatuur draaien zaken altijd om uniformiteit en uiterste precisie. GPS-coördinaten vormen dan de echte ruggengraat van die navigatie, maar er doen zich echter complicaties voor wanneer verschillende systemen (onder meer Betaflight, INAV, ArduPilot of zelfs direct op Google Maps) met hun eigen specifiek toegesneden basisformaat rekenen. Onze online verwerker of <strong>GPS Coördinaten Converter</strong> overbrugt die kloof en garandeert dat uw waypoints precies landen waar u ze bedoelde.',
    },
    {
      type: 'title',
      text: 'De Drie Voornaamste GPS Formaten Uitgelegd',
      level: 3,
    },
    {
      type: 'title',
      text: '1. Decimale Graden (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Dit is tegenwoordig de meest universele standaard op nagenoeg alle digitale systemen: op een doorsnee smartphone, maar vooral op <strong>Google Maps</strong> en web-mapping tools. Je vertaalt je posities puur en bondig in zuivere decimale getallen (bijv. <code>40.7128, -74.0060</code>). Extreem goed bestand tegen interpretatiefouten en kopieert perfect.',
    },
    {
      type: 'list',
      items: [
        'Breedtegraden zijn positief ten noorden van de evenaar; negatief in het zuiden.',
        'Lengtegraden zijn positief oostelijk van de nulmeridiaan; negatief in het westen.',
      ],
    },
    {
      type: 'title',
      text: '2. Graden, Minuten, Seconden (DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Een historische standaard die in scheepvaartnavigatie, luchtvaart en gedrukt topografisch materiaal veel gebruikt wordt (bijv. <code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code>). Het is extreem intuïtief op een geprint raster omdat het de aarde opdeelt in 360 graden, met minuten en seconden per 60. Het gebruik van speciale symbolen creëert echter vaak moeilijkheden bij het kopiëren naar computertoepassingen.',
    },
    {
      type: 'title',
      text: '3. Ruwe GPS / Hardware Data (ArduPilot / INAV)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Wanneer je de ruwe logbestanden (Blackbox) in duikt, via de Command Line Interface (CLI) kijkt, of je verdiept in protocolverbindingen (bijv. MAVLink), kom je formaten tegen die eruitzien als grote niet-gedecimeerde getallen (bijv. <code>407128000, -740060000</code>).',
    },
    {
      type: 'paragraph',
      html: 'Dat komt doordat hardware-microcontrollers sneller draaien met pure gehele getallen (integers). Software vermenigvuldigt daarom vaak de decimale graad met <strong>10.000.000 (1e7)</strong>. Deze converter helpt u vakkundig om deze immense loggetallen perfect naar het mensvriendelijk decimale Google Maps-formaat terug te zetten.',
    },
    {
      type: 'title',
      text: 'Veelvoorkomende Drone Vliegscenario\'s',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Praktijkvoorbeelden waar dit conversietooltje u een immense helpende hand reikt:',
    },
    {
      type: 'list',
      items: [
        '<strong>Verloren Drone Terughalen (Recovery):</strong> OSD (On-Screen Display) en telemetriezenders (zoals Taranis of Radiomaster) vangen soms op met formaten in DMS. U typt het vlot om in Decimale Graden voor uw Google Maps pin zodat u niets kwijtraakt.',
        '<strong>Surveying & Waypoints plannen:</strong> Op programma\'s als Mission Planner neemt men weleens landmetersplannen in DMS over. De foutloze vertaalslag naar DD garandeert dat u perfect om bewoond gebied vliegt en veilig de opdracht doet.',
        '<strong>CLI RTH Coördinaten Vastpinnen:</strong> Rescue Home point settings via terminal-protocollen verlangen data strak in Raw Formaat (Integer). De omgerekende waarden uit onze tabel passen daar perfect tussen.',
      ],
    },
    {
      type: 'title',
      text: 'Nauwkeurigheidsniveaus Vertalen: Het Decimale Huis Spel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hoe belangrijk is elke specifieke decimaal eigenlijk voor nauwkeurigheid? Een blik op de betekenis per decimaal (gemeten op de evenaar):',
    },
    {
      type: 'list',
      items: [
        '<strong>1 Decimale Plaats</strong> (bijv. 40.1): Geen goed idee. Ligt met ruime marges meer dan 111 kilometer verkeerd.',
        '<strong>3 Decimale Plaatsen</strong> (bijv. 40.123): Ongeveer 110 meter afstand. (Een heel groot wijkblok).',
        '<strong>5 Decimale Plaatsen</strong> (bijv. 40.12345): Accuraat tot ong. 1.1 meter. Standaard en perfect voldoende voor FPV vluchten en drone RTL\'s (Return to Launch).',
        '<strong>7 Decimale Plaatsen</strong> (bijv. 40.1234567): Tot op de 11 millimeter veilig! Voor RTK precisie in professionele toepassingen of landbouw.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Moderne GPS chips (zoals M8N en M10) bereiken met goed zicht 5 tot 6 decimalen. Noteer of kopieer in het verwerkveld daarom steeds zoveel decimaal-aanduidingen als mogelijk voor een veilige omrekening.',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'Ardupilot Documentatie en Integratie Informatie.', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: 'Naslag over Decimalen en Graden (Wikipedia).', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: 'Onderken Formaat',
      text: 'Onderzoek wat u hebt. Bevat the reeks °,\' of N tekens? (DMS). Een grote groep als 404306300 zonder interpunctie is Hardware.',
    },
    {
      name: 'Voeg Data in Veld',
      text: 'Kies het bijhorende invoer kader uit die overeen lijkt te komen met je ontdekte gegevenslijn.',
    },
    {
      name: 'Zie Vertaling Live Werken',
      text: 'De vertaler is zodanig krachtig online meelopend ingesteld en schotelt u in ogenblik je waarden in de corresponderende overige formats voor.',
    },
    {
      name: 'Zet de Copy-Paste Actie In',
      text: 'Sla uw vertaling om met Copy voor de gewenste eindformat en sla uw map wegwaarts of upload op naar de Drone software.',
    },
  ],
  schemas,
};
