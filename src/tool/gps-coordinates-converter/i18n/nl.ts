import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gps-coordinaten-converter';
const title = 'GPS Coordinaten Converter voor ArduPilot en INAV Waypoints';
const description = 'Converteer GPS-coördinaten tussen Decimale Graden (DD), Graden Minuten Seconden (DMS) en GPS-hardwareformaten. Essentieel voor ArduPilot en INAV waypoints.';

const faqItems = [
  {
    question: 'Wat is het verschil tussen DD en DMS?',
    answer: `DD (Decimale Graden) gebruikt één getal met decimalen (bijv. 51.50). DMS (Graden, Minuten, Seconden) verdeelt de graad in sexagesimale fracties (bijv. 51° 30' 0").`,
  },
  {
    question: 'Waarom worden negatieve coördinaten gebruikt?',
    answer: 'In het decimale systeem (DD) worden breedtegraden ten zuiden van de evenaar en lengtegraden ten westen van Greenwich aangegeven met een minteken om wiskundige berekeningen te vergemakkelijken.',
  },
  {
    question: 'Hoeveel precisie verlies ik bij het converteren?',
    answer: 'Onze tool gebruikt dubbele precisie drijvende komma. Met 6 decimalen in DD is de precisie ongeveer 11 centimeter, wat meer dan genoeg is voor drones en civiele navigatie.',
  },
  {
    question: 'Werkt deze tool offline?',
    answer: 'Ja, zodra de pagina is geladen, is alle conversielogica lokaal (client-side). Alleen de kaart heeft een verbinding nodig om nieuwe tegels te downloaden.',
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
        name: 'Voer coördinaten in',
        text: 'Voer uw coördinaten in in het formaat Decimale Graden (DD) of Graden, Minuten, Seconden (DMS).',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Controleer conversie',
        text: 'De tool toont direct de geconverteerde coördinaten in alle ondersteunde formaten.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verifieer op kaart',
        text: 'Controleer de kaartvisualisatie om er zeker van te zijn dat de coördinaten naar de juiste locatie wijzen.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Kopieer resultaat',
        text: 'Kopieer de geconverteerde coördinaten naar uw klembord voor gebruik in navigatiesystemen of missieplanning.',
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
  ui: {
    decimalDD: 'Decimaal (DD)',
    degreesGMS: 'Graden (DMS)',
    useLocation: 'Gebruik mijn locatie',
    lat: 'Breedtegraad',
    lng: 'Lengtegraad',
    latGMS: 'Breedtegraad (DMS)',
    lngGMS: 'Lengtegraad (DMS)',
    gmsTraditional: 'Traditionele DMS',
    nauticalDM: 'Graden & Dec. Min. (Nautisch)',
    googleMapsFormat: 'Google Maps Formaat',
    copy: 'Kopiëren',
    copied: 'Gekopieerd!',
    recentHistory: 'Recente Geschiedenis',
    clear: 'Wissen',
    noHistory: 'Geen recente conversies.',
    load: 'Laden',
    delete: 'Verwijderen',
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
    { type: 'title', text: 'Geografische referentiesystemen', level: 2 },
    { type: 'paragraph', html: 'Elke coördinaat hoort bij een referentiesysteem. GPS gebruikt meestal WGS84; een ander datum moet je eerst omrekenen voordat je waarden vergelijkt.' },
    { type: 'title', text: 'Breedtegraad en lengtegraad controleren', level: 2 },
    { type: 'paragraph', html: 'De breedtegraad loopt van 90° zuid tot 90° noord en de lengtegraad van 180° west tot 180° oost. Gebruik een minteken en een windrichting nooit dubbel.' },
    { type: 'title', text: 'De juiste nauwkeurigheid', level: 2 },
    { type: 'paragraph', html: 'Meer decimalen betekenen niet automatisch een nauwkeurigere meting. De bruikbare nauwkeurigheid hangt af van apparaat, signaal en kaartdoel.' },
    { type: 'title', text: 'Het resultaat op een kaart gebruiken', level: 2 },
    { type: 'paragraph', html: 'Je kunt de uitkomst in kaartsoftware of GIS plakken. Controleer of het doelprogramma decimale graden of graden, minuten en seconden verwacht.' },
    { type: 'title', text: 'Tekens en windrichtingen', level: 2 },
    { type: 'paragraph', html: 'Noord en oost zijn meestal positief; zuid en west negatief. In een notatie met letters vervangt de windrichting het minteken.' },
    { type: 'title', text: 'Locatiegegevens beschermen', level: 2 },
    { type: 'paragraph', html: "Verwerk gevoelige coördinaten zo mogelijk lokaal en deel ze alleen met bevoegde personen. Controleer ook GPS-metadata in foto's." },
  ],
  faq: faqItems,
  bibliography,
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
