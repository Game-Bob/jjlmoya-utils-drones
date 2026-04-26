import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'pianificatore-volo-gsd';
const title = 'Pianificatore di Volo GSD: Calcolatore della Distanza di Campionamento al Suolo';
const description = 'Calcola la Distanza di Campionamento al Suolo (GSD) per missioni di fotogrammetria. Supporto per DJI, Autel e fotocamere personalizzate. Pianificazione del volo in tempo reale con indicatori di qualità visiva.';

const faqItems = [
  {
    question: 'Cos\'è la Distanza di Campionamento al Suolo (GSD)?',
    answer: 'La GSD è la distanza sul terreno rappresentata da un singolo pixel dell\'immagine. Una GSD inferiore significa maggiore risoluzione e dettaglio. Ad esempio, una GSD di 1 cm/px permette di distinguere dettagli fino a 1 centimetro, il che è fondamentale per i rilievi.',
  },
  {
    question: 'Come trovo le specifiche della fotocamera del mio drone?',
    answer: 'Controlla il manuale del tuo drone per le dimensioni del sensore e la lunghezza focale. In alternativa, usa i nostri predefiniti per modelli popolari come il DJI Mavic 3E o l\'Autel EVO II. Per fotocamere personalizzate, misura le dimensioni del sensore dalle specifiche dell\'obiettivo.',
  },
  {
    question: 'Di quale GSD ho bisogno per diversi tipi di missione?',
    answer: 'Topografia di alta precisione: 1-2 cm/px. Mappatura standard: 2-5 cm/px. Ispezione e monitoraggio: 5-10 cm/px. Rilievi visivi: 10+ cm/px. Scegli in base ai requisiti di precisione del tuo progetto.',
  },
  {
    question: 'Cos\'è la sovrapposizione delle immagini e perché è importante?',
    answer: 'La sovrapposizione è la percentuale di area che appare in foto consecutive. Un\'elevata sovrapposizione (60-80%) garantisce una copertura completa e migliora la qualità del modello 3D. La sovrapposizione frontale influisce sulla distanza tra le foto; quella laterale sul numero di linee di volo.',
  },
  {
    question: 'Come calcolo l\'altitudine di volo ideale?',
    answer: 'Usa questo calcolatore: GSD desiderata × lunghezza focale ÷ larghezza del sensore = altitudine. Il calcolatore esegue automaticamente il calcolo e mostra l\'altitudine massima di sicurezza per mantenere la precisione desiderata ed evitare l\'effetto mosso.',
  },
];

const howToSteps = [
  {
    name: 'Seleziona o configura la fotocamera',
    text: 'Scegli tra i modelli preconfigurati (DJI Mavic 3E, Autel EVO II, ecc.) o inserisci manualmente le dimensioni del sensore e la lunghezza focale. I predefiniti caricano istantaneamente tutti i parametri.',
  },
  {
    name: 'Imposta l\'altitudine di volo',
    text: 'Usa lo slider dell\'altitudine per regolare l\'altezza dal suolo (AGL). Osserva l\'aggiornamento della GSD in tempo reale per vedere come l\'altitudine influisce sulla risoluzione.',
  },
  {
    name: 'Definisci i requisiti di sovrapposizione',
    text: 'Imposta le percentuali di sovrapposizione frontale e laterale. Una maggiore sovrapposizione garantisce una copertura completa ma aumenta il tempo della missione e il numero di immagini.',
  },
  {
    name: 'Controlla i risultati ed esporta',
    text: 'Verifica la GSD, l\'area di copertura e la classificazione di precisione. Genera un report rapido da allegare al tuo piano di volo ufficiale.',
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: 'Configurazione',
    cameraSelection: 'Selezione Fotocamera',
    manualMode: 'Modalità Manuale',
    sensorConfig: 'Configurazione Sensore',
    width: 'Larghezza',
    height: 'Altezza',
    focalLength: 'Lunghezza Focale',
    imageResolution: 'Risoluzione Immagine',
    w: 'L',
    h: 'A',
    px: 'px',
    altitudeAgl: 'Altitudine (AGL)',
    overlapSettings: 'Configurazione Sovrapposizione',
    forward: 'Frontale',
    lateral: 'Laterale',
    missionArea: 'Area di Missione',
    totalAreaToSurvey: 'Area Totale del Rilievo',
    hectareHint: '1 ha = 10.000 m²',
    inverseCalc: 'Calcolo Inverso',
    targetGsd: 'GSD Obiettivo',
    maxAltitude: 'Altitudine Max',
    reset: 'Reset',
    results: 'Risultati',
    gsdResult: 'Distanza di Campionamento al Suolo',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Alta Prec.',
    standard: 'Standard',
    inspection: 'Ispezione',
    visual: 'Visuale',
    coveragePerImage: 'Copertura per Immagine',
    area: 'Area',
    spacing: 'Spaziatura',
    flightDir: 'Volo →',
    missionMetrics: 'Dati di Missione',
    images: 'Immagini',
    shots: 'scatti',
    flightLines: 'Linee di Volo',
    lines: 'linee',
    flightTime: 'Tempo di Volo',
    min: 'min',
    dataVolume: 'Volume Dati',
    gb: 'GB',
    copyShareLink: 'Copia Link',
    downloadReport: 'Scarica Report',
    copiedToClipboard: 'Copiato!',
    metric: 'Metrico',
    imperial: 'Imperiale',
    classHighPrecision: 'Topografia di Alta Precisione',
    classStandard: 'Mappatura Standard',
    classInspection: 'Ispezione e Monitoraggio',
    classVisual: 'Rilievo Visuale',
    ultraHighResAlert: 'Risoluzione ultra-alta: assicuratevi di avere spazio e potenza di calcolo sufficienti',
    lowOverlapAlert: 'Sovrapposizione frontale inferiore al 60%: può influire sulla qualità del modello 3D',
    largeDatasetAlert: 'Set di dati molto grande: valutate di dividerlo in più voli',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'Pianificatore di Volo GSD: Il Calcolatore Completo per Fotogrammetria',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>Distanza di Campionamento al Suolo (GSD)</strong> è il parametro più importante nella fotogrammetria con drone. Un errore di calcolo può sprecare un\'intera giornata di volo e costare migliaia di euro in perdita di produttività. Questo calcolatore elimina tale rischio.',
    },
    {
      type: 'title',
      text: 'Perché la GSD è fondamentale per i professionisti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sia che stiate effettuando rilievi di terreni, creando modelli 3D o monitorando infrastrutture, la GSD determina il livello di dettaglio catturato. Una missione a 1 cm/px cattura dettagli che una a 5 cm/px perde. Tuttavia, volare troppo bassi spreca batteria e prolunga inutilmente il tempo della missione.',
    },
    {
      type: 'title',
      text: 'GSD per tipo di missione',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Topografia di Alta Precisione (1-2 cm/px):</strong> Precisione di grado topografico per parcelle, siti minerari e progetti ingegneristici.',
        '<strong>Mappatura Standard (2-5 cm/px):</strong> Ortomosaici, monitoraggio agricolo e mappe per uso generale.',
        '<strong>Ispezione e Monitoraggio (5-10 cm/px):</strong> Ispezioni di edifici, controllo linee elettriche e rilevamento cambiamenti.',
        '<strong>Rilievi Visuali (10+ cm/px):</strong> Ricognizione di grandi aree e valutazione visiva.',
      ],
    },
    {
      type: 'title',
      text: 'La formula GSD',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Altitudine × Larghezza Sensore) / (Lunghezza Focale × Larghezza Immagine) × 100</code><br/>Questo calcolatore gestisce la matematica. Voi concentratevi sulla missione.',
    },
    {
      type: 'title',
      text: 'Sovrapposizione: Perché il 60-80% è il punto ideale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una bassa sovrapposizione (20-40%) risparmia batteria ma rischia di lasciare lacune nella copertura. Un\'alta sovrapposizione (80%+) garantisce una copertura completa ma allunga i tempi. Il <strong>range 60-80%</strong> è lo standard professionale: assicura una ricostruzione 3D completa senza eccessiva ridondanza.',
    },
    {
      type: 'title',
      text: 'Pianificate missioni migliori con dati reali',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prima di ogni volo, usate questo calcolatore per determinare: l\'esatta altitudine per la GSD richiesta, quante foto serviranno, il tempo totale della missione e se c\'è rischio di mosso. Con questi dati, eseguirete missioni precise ed eviterete errori costosi.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
