import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'gps-koordinat-omvandlare';
const title = 'GPS Koordinat Omvandlare for ArduPilot och INAV Waypoints';
const description = 'Konvertera GPS-koordinater mellan decimalgrader (DD), grader minuter sekunder (DMS) och GPS-hårdvaruformat. Oumbärlig för ArduPilot- och INAV-waypoints.';

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
  faqTitle: 'Vanliga Frågor',
  bibliographyTitle: 'Referenser',
  ui: {
    faqTitle: 'Vanliga Frågor',
    bibliographyTitle: 'Referenser',
    latitude: 'Latitud',
    longitude: 'Longitud',
    decimalDegrees: 'Decimalgrader (DD)',
    degreesMinutesSeconds: 'Grader, Minuter, Sekunder (DMS)',
    gpsHardware: 'GPS-hårdvaruformat (Raw)',
    copy: 'Kopiera',
    copied: 'Kopierad!',
    invalidCoordinate: 'Ogiltig koordinat',
    pasteHardwareMapFormat: 'Klistra in raw hårdvarudata (t.ex. 404306300, -739981800)',
    validation: {
      latRange: 'Latitud måste vara mellan -90 och 90.',
      lonRange: 'Longitud måste vara mellan -180 och 180.',
      invalidFormat: 'Formatet känns inte igen. Kontrollera din inmatning.',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Förstå GPS-koordinater: Ett Oumbärligt Verktyg för Drönarnavigering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När det gäller autonom drönarflygning, flygfotografering eller återhämtning av förlorad utrustning är precision och enhetlighet avgörande. GPS-koordinater utgör ryggraden i navigeringen, men olika system (som Betaflight, INAV, ArduPilot och Google Maps) använder olika format. Vår <strong>GPS Koordinat Omvandlare</strong> överbryggar denna klyfta och ser till att dina waypoints alltid landar exakt där du har tänkt dig.',
    },
    {
      type: 'title',
      text: 'De Tre Viktigaste GPS-formaten att Känna Till',
      level: 3,
    },
    {
      type: 'title',
      text: '1. Decimalgrader (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Detta är idag det vanligaste formatet i världen och har i stor utsträckning antagits av <strong>Google Maps</strong>, moderna smartphones och de flesta webbaserade karttjänster. Formatet uttrycker positionen som en enkel decimal (t.ex. <code>40.7128, -74.0060</code>). Det är extremt enkelt att kopiera, klistra in och bearbeta på datorer.',
    },
    {
      type: 'list',
      items: [
        'Positiva latituder ligger på norra halvklotet; negativa på södra.',
        'Positiva longituder ligger öster om nollmeridianen; negativa är väster ut.',
      ],
    },
    {
      type: 'title',
      text: '2. Grader, Minuter, Sekunder (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Detta är det traditionella formatet som används i sjöfart, flyg och äldre topografiska kartor (t.ex. <code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code>). Det är mer intuitivt för mänsklig navigering på papperskartor genom att dela in jorden i 360 grader, där varje grad har 60 minuter och varje minut har 60 sekunder. Specifika symboler gör det dock besvärligt att mata in digitalt när man programmerar autonoma flygningar.',
    },
    {
      type: 'title',
      text: '3. GPS Hårdvaruformat / Raw Format (ArduPilot / INAV)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'När du hämtar loggar direkt från CLI (Command Line Interface), studerar råa Blackbox-flygloggar, eller interagerar med system som ArduPilot via MAVLink, kommer du ofta att se koordinater representerade som mycket stora heltal (t.ex. <code>407128000, -740060000</code>).',
    },
    {
      type: 'paragraph',
      html: 'Anledningen är att mikrokontroller kan beräkna hela tal mycket snabbare och med högre precision än flyttal (decimaler). Formatet skapas vanligtvis genom att multiplicera decimalgradsvärdet med <strong>10 000 000 (1e7)</strong>. Vårt verktyg konverterar smidigt från och till detta format, vilket gör det idealiskt för att analysera Blackbox-data.',
    },
    {
      type: 'title',
      text: 'Varför Drönarpiloter Behöver Denna Konvertering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det finns flera kritiska scenarier där denna omvandlare blir din bästa vän:',
    },
    {
      type: 'list',
      items: [
        '<strong>Hitta en förlorad drönare (Lost Drone Recovery):</strong> Din OSD (On-Screen Display) eller din Taranis/Radiomaster-sändare visar ofta senast kända koordinater i DD- eller DMS-format. Du kan snabbt omvandla detta format för att droppa en pin i Google Maps och hitta din utrustning.',
        '<strong>Waypoint-planering:</strong> Vid uppdragsplanering (missions) i mjukvara som Mission Planner eller QGroundControl krävs största precision. Genom att konvertera DMS-koordinater från en klassisk gränskarta säkerställer du att drönaren håller sig exakt där den ska, och inte flyger in över annans mark.',
        '<strong>Hårdkodning i Firmware:</strong> När du direkt ställer in RTH (Return to Home)-plats i CLI kräver vissa firmwares raw GPS hårdvaruformat, med en noggrannhet ner på tiomiljondels graden.',
      ],
    },
    {
      type: 'title',
      text: 'Att Förstå Koordinatprecision: Hur Många Decimaler Behöver Du Egentligen?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hur mycket påverkar dessa siffror ett faktiskt avstånd på marken (beräknat vid ekvatorn)?',
    },
    {
      type: 'list',
      items: [
        '<strong>1 decimal</strong> (t.ex. 40.1): Innebär en felmarginal på cirka 111 kilometer.',
        '<strong>3 decimaler</strong> (t.ex. 40.123): Exakt på ca 110 meter (En stor stadsdel).',
        '<strong>5 decimaler</strong> (t.ex. 40.12345): Marginell diff på 1,1 meter (Här är gränsen för säker "Return to Home" för en standard drönare).',
        '<strong>7 decimaler</strong> (t.ex. 40.1234567): En noggrannhet på ca 11 millimeter (Det professionella steget för RTK-mätningar).',
      ],
    },
    {
      type: 'paragraph',
      html: 'Utrymmet och förmågan under klar himmel ger de flesta standard M8N eller M10 GPS-moduler runt 5 till 6 decimaler att skryta med (vilket medför cirka 1-2 meters noggrannhet). Kopiera därför alltid minst sex decimaler när du räddar ut information från en loggfil.',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'ArduPilot Officiell GPS handbok.', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: 'Förstå decimala värden. DD wikipedia.', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: 'Börja Med Att Bestämma Indata Formatet.',
      text: 'Analysera texten framför dig. Talsnurra som 40.7128 = DD decimaler. Krokiga graderingsymboler 40°42\' = Skrivs som DMS . Extremt svårlästa långa nummer = HW maskinsystem Raw.',
    },
    {
      name: 'Droppa In Siffrorna. ',
      text: 'Med analysen klar - För din pil / skärm  och för in data till passande formulären ovan.',
    },
    {
      name: 'Live Visning Sker.',
      text: 'Oavsett vad du knappar kör kodningen igång process i samma mikrosekund med fyllnad ner till resterande alternativboxar. ',
    },
    {
      name: 'Copy O Paste O Klar.',
      text: 'Utnyttja the standard uttrycket att du sedan snabbt trycker "Kopiera" nere och smiter dit du behövde den till, tex Maps e CLI.',
    },
  ],
  schemas,
};
