import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'convertitore-coordinate-gps';
const title = 'Convertitore di Coordinate GPS per Navigazione Waypoint';
const description = 'Converti le coordinate GPS tra Gradi Decimali (DD), Gradi Minuti Secondi (DMS) e formati hardware GPS. Essenziale per i waypoint ArduPilot e INAV.';

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
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Manuali di Riferimento',
  ui: {
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Manuali di Riferimento',
    latitude: 'Latitudine',
    longitude: 'Longitudine',
    decimalDegrees: 'Gradi Decimali (DD)',
    degreesMinutesSeconds: 'Gradi, Minuti, Secondi (DMS)',
    gpsHardware: 'Formato Hardware GPS (Raw)',
    copy: 'Copia',
    copied: 'Copiato!',
    invalidCoordinate: 'Coordinata non valida',
    pasteHardwareMapFormat: 'Incolla formato Raw (es. 404306300, -739981800)',
    validation: {
      latRange: 'La latitudine deve essere compresa tra -90 e 90.',
      lonRange: 'La longitudine deve essere compresa tra -180 e 180.',
      invalidFormat: 'Formato non riconosciuto. Per favore controlla l\'inserimento.',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Comprendere le Coordinate GPS: Uno Strumento Indispensabile per la Navigazione dei Droni',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando si tratta di volo autonomo con i droni, mappature aeree, o recupero del mezzo perso, la precisione e la chiarezza sono fondamentali. Le coordinate GPS sono la spina dorsale della navigazione, ma diversi sistemi (come Betaflight, INAV, ArduPilot, Google Maps) usano formati diversi. Il nostro <strong>Convertitore di Coordinate GPS</strong> fa da ponte, assicurandosi che i i tuoi waypoint atterrino esattamente dove tu intenda.',
    },
    {
      type: 'title',
      text: 'I Tre Formati GPS Chiave Da Conoscere',
      level: 3,
    },
    {
      type: 'title',
      text: '1. Gradi Decimali (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Oggi questo è lo standard più comune per gli esseri umani ed è impiegato universalmente su quasi tutto compreso <strong>Google Maps</strong>, dagli smartphone e portali web di cartografia georeferenziata. Esprime la posizione in uno stabile numero decimale, per intenderci come: (es. <code>40.7128, -74.0060</code>). Estremamente snello e compatto fa le gioie dei copia, incolla in vari sistemi a PC.',
    },
    {
      type: 'list',
      items: [
        'I gradi di Latitudine positivi sono situati nell\'Equatore Emisfero Nord (Boreale), invece al Sud avranno segno (negativo).',
        'I valori di Longitudine est si marcano al positivo invece, procedendo verso Ovest prendono le numerazioni al (negativo) partendo dal Meridiano (Zero).',
      ],
    },
    {
      type: 'title',
      text: '2. Gradi, Minuti, Secondi (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'La traccia del retaggio cartografico cartaceo classico tutt\'oggi molto usato nelle vecchie carte navali (es <code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code>).  È indubbiamente affascinante nella forma intuitiva ma le scritture comprendenti lettere " N " o "S" ne sfavorisce  l\'elaborazione di programmazioni al computer a differenza dei decimali (DD) a causa dei vari simbolismi astrusi.',
    },
    {
      type: 'title',
      text: '3. Formato Raw / Hardware (Utilizzato per Vettori su Ardupilot / INAV )',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Quando ci s\'immerge nella schermata a codice CLI , a scaricare una rotta Blackbox , o elaborare codifiche tra microprocessori con i software (tipo ArduPilot over MAVLink) si osservano delle  coordinate lunghissime di interi matematici.  es. <code>( 407128000 , -740060000 )</code>.',
    },
    {
      type: 'paragraph',
      html: 'Per via dell\'assenza delle potenze a numeri " in virgola mobile " vengono scalati moltiplicando al valore  <strong>10,000,000  volte di grandezze di un (1e7 ) </strong> il decimale dei gradi DD. Con tali interi i chip sono felici in fatto di calcoli molto precisi. Le automazioni della nostra utility in real-time evitano conversioni a mano.',
    },
    {
      type: 'title',
      text: 'Perché e A Cosa Serve Al Buon Pilota Di Droni Avere Un Formato in Conversione?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Elenco breve in tre momenti tipici a cui vi esorteremo nell\'avere questo alleato sottomano:',
    },
    {
      type: 'list',
      items: [
        '<strong>Ritrovarlo Al Volo (Lost Drone):</strong> A video su OSD l\'ultimazione o dalla TX RC potrete carpire DMS non decifrabili, convertite qua in numeri DD poi in un past past inseriteli in GPS Maps ed il drone è recuperato',
        '<strong>Tralasciare Il Privato - In Mission Planner O INAV </strong> Se si devono trasferire rilievi catastali a zone ristrette dalle coordinate su foglio in dms vi dovrete tramutarli qui. Se i numeri sbordano la rotta, la zona a Mappature del vostro  software di piano d\'ispezione ( Mission Planning, QGround etc...) sconfinerà illegalmente il vicinato o peggio su di te. Usarlo in fase di setup traccia un rientro Sicuro.',
        '<strong>Scritture in firmware : </strong> In impostazioni avanzatissime nel prompt su terminal CLI , in BetaFL non v\'è spazio in  memoria (RTH Rescue) ai punti fermi decimali e quindi dovete iniettargli le lunghezze a  Intero Grezzo formato Raw che quest\'interfaccia da in via subitanea.',
      ],
    },
    {
      type: 'title',
      text: 'L\'Elogio della Precisione, Decifrare le Matrici di Cifre',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando sono a chiedermi di che precisione al decimale e quale "numero di zeri far calcolo " guardiamo alla sua interpretazioni metrica terrena misurazioni prese all\'equatore:',
    },
    {
      type: 'list',
      items: [
        '<strong>Primo Decimale:</strong> (es. 40.1 ) , raggio scarto copre sui larghissimi confini territoriali di 111 Kilometri.',
        '<strong>Terza Cifra  :</strong> (esempio... 40.123), ci restringe sui ben visibili  scarti raggio a 110. ( Un parco di quartiere).',
        '<strong>Cifra a Cinque (5) decimali zero :</strong>  Saremo oramai atterrati nel range a misurazione del raggio in ca 1.1 o poco più metri. Ottimale la navigazione Droni consumer amatoriali  o i GPS modello a UBLOX (standard tipo M8n- o del chipset chip  M10 ).',
        '<strong>Fino ai 7 punti decimali e oltre... :</strong> ( 40.1234567 decimal) precisioni assolute inferiori anche a scarti di 11  millilitri per RTK base professionali.',
      ],
    },
    {
      type: 'paragraph',
      html: 'In un buon settaggio FPV che cattura  sui  vari  14 - oltre a  30 Satelliti vi riporterebbe misurazioni che  taglieranno sulle stime ottime a cinque punti (o il grezzo hardware per il sette / 7 e8  interi ). Perciò un bravo pilota di soccorso o d\'indagine aerofotogrammetria a droni copi le minime 6 o settime decimali ',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'Ardupilot Documentazioni ed integrazione in Volo Autonomo .', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: 'Spazio, Geografia in wikipedia gradi e forme decimale', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: 'Identificazione della Lingua / Formato Sorgente',
      text: 'Se ti imbatti in testi "  40°42\'46" N  74°00\'..   " capirai sùbito che son del gruppo DMS , a differenza della  solida intera mole da numeri quali (  407128000 , da FC / Hardware / raw ).',
    },
    {
      name: 'Digitazione Inseri Coordinate in Una a scelta dei 3 Testi input ',
      text: 'Ti basta porre a click da un campo dei menù di iniezione di input (DMS - HDW o Gradi) ed introdurre al primo.',
    },
    {
      name: 'Visiona e Controllo.',
      text: 'Magicamente questo applicativo farà i calcoli in live sui form in uscita non appenavrai finiti . ',
    },
    {
      name: 'Copia per uso.',
      text: 'Hai un piccolo click  sull iconcine blu ad  " Copia " per importare su taranis , su log Inav per rotta , etc il tipo che desideravi .',
    },
  ],
  schemas,
};
