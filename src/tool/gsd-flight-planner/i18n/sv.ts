import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gsd-flygplanerare';
const title = 'GSD Flygplanerare: Markupplösnings kalkylator för drönare';
const description = 'Beräkna markupplösningsavstånd (GSD) för fotogrammetriuppdrag. Stöd för DJI, Autel och anpassade kameror. Flygplanering i realtid med visuella kvalitetsindikatorer.';

const faqItems = [
  {
    question: 'Vad är Ground Sample Distance (GSD)?',
    answer: 'GSD är avståndet på marken som representeras av en pixel i din bild. En lägre GSD innebär högre upplösning och detaljrikedom. Till exempel gör en GSD på 1 cm/px att du kan urskilja detaljer så små som 1 centimeter, vilket är kritiskt för mätningar.',
  },
  {
    question: 'Hur hittar jag min drönares kameraspecifikationer?',
    answer: 'Se din drönares manual för sensorstorlek och brännvidd. Alternativt kan du använda våra kameraförinställningar för populära modeller som DJI Mavic 3E eller Autel EVO II. För anpassade kameror, mät sensorstorleken från dina linsspecifikationer.',
  },
  {
    question: 'Vilken GSD behöver jag för olika typer av uppdrag?',
    answer: 'Högprecisions-topografi: 1-2 cm/px. Standardkartering: 2-5 cm/px. Inspektion och övervakning: 5-10 cm/px. Visuella undersökningar: 10+ cm/px. Välj baserat på ditt projekts precisionskrav.',
  },
  {
    question: 'Vad är bildöverlappning och varför är det viktigt?',
    answer: 'Överlappning är procentandelen av ytan som visas i på varandra följande foton. Hög överlappning (60-80%) säkerställer fullständig täckning och förbättrar 3D-modellens kvalitet. Framåtöverlappning påverkar fotoavståndet; sidoöverlappning påverkar antalet flyglinjer.',
  },
  {
    question: 'Hur beräknar jag den ideala flyghöjden?',
    answer: 'Använd denna kalkylator: Önskad GSD × brännvidd ÷ sensorbredd = höjd. Kalkylatorn gör detta automatiskt och visar den maximala säkra höjden för att bibehålla din målprecision och undvika rörelseoskärpa.',
  },
];

const howToSteps = [
  {
    name: 'Välj eller konfigurera kamera',
    text: 'Välj bland förkonfigurerade modeller (DJI Mavic 3E, Autel EVO II etc.) eller ange sensorstorlek och brännvidd manuellt. Förinställningar laddar alla parametrar direkt.',
  },
  {
    name: 'Ställ in flyghöjd',
    text: 'Använd höjdreglaget för att justera höjden över marken (AGL). Se GSD-uppdateringen i realtid för att se hur höjden påverkar bildupplösningen.',
  },
  {
    name: 'Definiera överlappningskrav',
    text: 'Ställ in procentandelen för framåt- och sidoöverlappning. Högre överlappning säkerställer fullständig täckning men ökar uppdragstiden och antalet bilder.',
  },
  {
    name: 'Granska resultat och exportera',
    text: 'Kontrollera GSD, täckningsområde och precisionsklassificering. Generera en snabb rapport att bifoga till din officiella flygplan.',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: 'Konfiguration',
    cameraSelection: 'Kameraval',
    manualMode: 'Manuellt läge',
    sensorConfig: 'Sensorkonfiguration',
    width: 'Bredd',
    height: 'Höjd',
    focalLength: 'Brännvidd',
    imageResolution: 'Bildupplösning',
    w: 'B',
    h: 'H',
    px: 'px',
    altitudeAgl: 'Höjd (AGL)',
    overlapSettings: 'Överlappningskonfiguration',
    forward: 'Framåt',
    lateral: 'Sida',
    missionArea: 'Uppdragsområde',
    totalAreaToSurvey: 'Total yta att mäta',
    hectareHint: '1 ha = 10 000 m²',
    inverseCalc: 'Omvänd beräkning',
    targetGsd: 'Mål-GSD',
    maxAltitude: 'Max höjd',
    reset: 'Återställ',
    results: 'Resultat',
    gsdResult: 'Markupplösning (GSD)',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Hög prec.',
    standard: 'Standard',
    inspection: 'Inspektion',
    visual: 'Visuell',
    coveragePerImage: 'Täckning per bild',
    area: 'Yta',
    spacing: 'Avstånd',
    flightDir: 'Flyg →',
    missionMetrics: 'Uppdragsdata',
    images: 'Bilder',
    shots: 'foton',
    flightLines: 'Flyglinjer',
    lines: 'linjer',
    flightTime: 'Flygtid',
    min: 'min',
    dataVolume: 'Datamängd',
    gb: 'GB',
    copyShareLink: 'Kopiera länk',
    downloadReport: 'Ladda ner rapport',
    copiedToClipboard: 'Kopierat!',
    metric: 'Metrisk',
    imperial: 'Imperial',
    classHighPrecision: 'Högprecisions-topografi',
    classStandard: 'Standardkartering',
    classInspection: 'Inspektion och övervakning',
    classVisual: 'Visuell undersökning',
    ultraHighResAlert: 'Ultrahög upplösning: säkerställ tillräckligt med lagring och processorkraft',
    lowOverlapAlert: 'Framåtöverlappning under 60%: kan påverka 3D-modellens kvalitet',
    largeDatasetAlert: 'Mycket stor datamängd: överväg att dela upp i flera flygningar',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'GSD Flygplanerare: Den kompletta fotogrammetri-kalkylatorn',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Markupplösning (GSD)</strong> är det viktigaste måttet inom drönarfotogrammetri. Ett beräkningsfel kan slösa bort en hel flygdag och kosta tusentals kronor i förlorad produktivitet. Denna kalkylator eliminerar den risken.',
    },
    {
      type: 'title',
      text: 'Varför GSD är avgörande för proffs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Oavsett om du mäter land, skapar 3D-modeller eller övervakar infrastruktur, avgör GSD detaljnivån du kan fånga. Ett uppdrag med 1 cm/px fångar detaljer som ett uppdrag med 5 cm/px missar. Men att flyga för lågt slösar batteri och förlänger uppdragstiden i onödan.',
    },
    {
      type: 'title',
      text: 'GSD efter uppdragstyp',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Högprecisions-topografi (1-2 cm/px):</strong> Topografisk noggrannhet för tomter, gruvområden och ingenjörsprojekt.',
        '<strong>Standardkartering (2-5 cm/px):</strong> Ortomosaiker, jordbruksövervakning och allmänna kartor.',
        '<strong>Inspektion och övervakning (5-10 cm/px):</strong> Byggnadsinpektioner, kontroll av elledningar och förändringsdetektion.',
        '<strong>Visuella undersökningar (10+ cm/px):</strong> Rekognosering av stora områden och visuell bedömning.',
      ],
    },
    {
      type: 'title',
      text: 'GSD-formeln',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Höjd × Sensorbredd) / (Brännvidd × Bildbredd) × 100</code><br/>Denna kalkylator sköter matematiken. Du fokuserar på uppdraget.',
    },
    {
      type: 'title',
      text: 'Överlappning: Varför 60-80% är den ideala nivån',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Låg överlappning (20-40%) sparar batteri men riskerar glapp i täckningen. Hög överlappning (80%+) garanterar fullständig täckning men förlänger uppdragstiden. <strong>Intervallet 60-80%</strong> är professionell standard: det säkerställer fullständig 3D-rekonstruktion utan onödig redundans.',
    },
    {
      type: 'title',
      text: 'Planera bättre uppdrag med verkliga data',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Före varje flygning, använd denna kalkylator för att bestämma: den exakta höjden för din önskade GSD, hur många foton du behöver, total uppdragstid och om rörelseoskärpa är en risk. Med dessa data kommer du att utföra exakta uppdrag och undvika kostsamma misstag.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
