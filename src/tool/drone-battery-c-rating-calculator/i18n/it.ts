import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calcolatore-tasso-c-batteria-lipo-drone';
const title = 'Calcolatore Tasso C Batteria LiPo e Scarica Continua per Droni';
const description = 'Calcola la corrente di scarica continua reale, il tasso C reale, il voltage sag e la sicurezza di volo per batterie LiPo basandoti sulla resistenza interna e sul consumo dei motori.';

const ui = {
  title: 'Calcolatore Tasso C Batteria LiPo per Droni',
  subtitle: 'Analizza la scarica continua reale, le richieste di picco e il voltage sag per multirotori',
  lipoSpecsHeader: 'Specifiche della batteria',
  capacityLabel: 'Capacità (mAh)',
  claimedCRatingLabel: 'Tasso C dichiarato',
  cellCountLabel: 'Numero di celle (Serie)',
  chemistryLabel: 'Chimica della batteria',
  internalResistanceLabel: 'Resistenza interna per cella (mΩ)',
  quadSpecsHeader: 'Consumo del drone',
  motorCountLabel: 'Numero di motori',
  peakMotorCurrentLabel: 'Corrente di picco per motore (Ampere)',
  auxCurrentLabel: 'Consumo ausiliario (VTX FC Camera) (Ampere)',
  presetSelectLabel: 'Impostazioni rapide',
  customPreset: 'Personalizzato',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5 Pollici Freestyle',
  cinewhoopPreset: '4S 3 Pollici CineWhoop',
  longRange7Preset: '6S 7 Pollici Long Range',
  racing5Preset: '6S 5 Pollici Gara',
  resultsHeader: 'Analisi di potenza e prestazioni',
  claimedMaxCurrentLabel: 'Corrente massima dichiarata',
  realisticCRatingLabel: 'Tasso C continuo reale',
  realisticMaxCurrentLabel: 'Corrente continua reale',
  totalPeakDrawLabel: 'Consumo di picco totale',
  voltageSagLabel: 'Caduta di tensione stimata',
  sagNominalVoltageLabel: 'Tensione nominale sotto carico',
  flightTimeFullThrottleLabel: 'Autonomia a pieno gas',
  flightTimeHoverLabel: 'Autonomia stimata in stazionario',
  safetyStatusLabel: 'Diagnostica di sicurezza',
  statusOptimalTitle: 'Batteria sicura e ottimale',
  statusOptimalDesc: 'La batteria fornisce la corrente di picco senza surriscaldamento o cadute di tensione eccessive. Garantita una lunga durata delle celle.',
  statusWarningTitle: 'Stress termico e di tensione moderato',
  statusWarningDesc: 'Il consumo di picco è vicino al limite reale della batteria. Aspettati un leggero voltage sag nelle accelerazioni brusche.',
  statusDangerTitle: 'Alto rischio di sovracorrente e sag',
  statusDangerDesc: 'Il consumo supera la capacità reale della batteria. Alto rischio di surriscaldamento, forti cadute di tensione e degrado precoce.',
  lipoVisualizerTitle: 'Visualizzatore di stato LiPo in tempo reale',
  cellVoltageLabel: 'Tensione per cella',
  batteryHealthLabel: 'Stress della batteria',
  burstRatingRequiredLabel: 'Tasso C di picco richiesto',
  currentRatioLabel: 'Rapporto di carico di potenza',
};

const faqItems = [
  {
    question: "Che cos'è il tasso C in una batteria LiPo per droni?",
    answer: 'Il tasso C indica la velocità massima di scarica continua in rapporto alla capacità della batteria. Ad esempio, una batteria da 1500mAh con 100C può teoricamente erogare 150 Ampere.',
  },
  {
    question: 'Perché il tasso C dichiarato è spesso superiore a quello reale?',
    answer: 'I produttori pubblicizzano spesso valori di picco di marketing. La scarica continua reale dipende direttamente dalla resistenza interna delle singole celle.',
  },
  {
    question: 'In che modo la resistenza interna influisce su sag e calore?',
    answer: 'Una resistenza interna elevata funziona come un resistore indesiderato. Quando si richiede molta corrente, causa una caduta di tensione improvvisa e dissipa calore eccessivo.',
  },
  {
    question: 'Come posso evitare il voltage sag durante il freestyle?',
    answer: 'Utilizza celle a bassa resistenza interna, mantieni un margine di sicurezza di almeno il 15 percento sopra il consumo di picco e non volare sotto i 3.5V per cella a riposo.',
  },
];

const howToSteps = [
  {
    name: 'Selezionare un preset o inserire i dati',
    text: 'Inserisci capacità mAh, tasso C dichiarato, numero di celle in serie e resistenza interna media per cella.',
  },
  {
    name: 'Configurare il consumo dei motori',
    text: 'Specifica il numero di motori, la corrente di picco per motore a pieno gas e il consumo ausiliario.',
  },
  {
    name: 'Esaminare la diagnostica di sicurezza',
    text: 'Confronta la corrente continua reale con il consumo di picco del drone per volare in totale sicurezza.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Comprendere il tasso C delle batterie LiPo e la potenza reale',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Scegliere la giusta batteria LiPo per un drone FPV richiede di correlare la capacità, il tasso C e il consumo di corrente dei motori. Anche se i produttori dichiarano tassi di 100C o superiori, la capacità reale di scarica continua è limitata dalla resistenza interna e dalla dissipazione termica. Questo calcolatore fornisce margini di sicurezza reali.',
  },
  {
    type: 'title',
    text: 'Tabella comparativa delle chimiche per batterie RC',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Chimica', 'Tensione nominale', 'Tensione max', 'Densità energetica', 'Scarica di picco', 'Uso consigliato'],
    rows: [
      ['LiPo (Standard)', '3.7V', '4.20V', 'Alta', '100C - 150C', 'Droni FPV Gara e Freestyle 5"'],
      ['LiHV (Alta Tensione)', '3.8V', '4.35V', 'Molto alta', '80C - 120C', 'TinyWhoop e Micro Quads'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Massima', '15C - 35C', 'Droni Long Range da 7"'],
      ['LiFePO4', '3.3V', '3.65V', 'Moderata', '30C - 50C', 'Stazioni di ricarica sul campo'],
    ],
  },
  {
    type: 'title',
    text: 'Impatto del voltage sag e della resistenza interna nei droni',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "L'improvviso calo di tensione (voltage sag) si verifica durante le accelerazioni. Quando la corrente attraversa la resistenza interna, parte dell'energia si trasforma in calore anziché in spinta. Una batteria deteriorata causerà avvisi prematuri di batteria scarica sull'OSD.",
  },
  {
    type: 'list',
    items: [
      'Bassa resistenza interna (1-4 mΩ per cella): Ottima risposta, sag minimo e temperature basse.',
      'Resistenza interna moderata (5-10 mΩ per cella): Prestazioni standard per il freestyle.',
      'Elevata resistenza interna (>12 mΩ per cella): Perdita di potenza evidente, sag forte e surriscaldamento rapido.',
    ],
  },
  {
    type: 'title',
    text: 'Ottimizzazione della batteria per Freestyle Gara e Long Range',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Stili di volo differenti richiedono caratteristiche di alimentazione diverse. I droni da 5 pollici per freestyle generano picchi superiori a 120 Ampere, mentre i droni da 7 pollici per lunghe distanze puntano sull'efficienza continua. Un abbinamento corretto previene spegnimenti improvvisi in volo.",
  },
  {
    type: 'tip',
    title: 'Consiglio sulla manutenzione LiPo',
    html: 'Conserva sempre le tue batterie LiPo a una tensione di storage di 3.80V - 3.85V per cella quando non le usi. Lasciare le batterie cariche al 100% per più di 48 ore aumenta la resistenza interna in modo permanente.',
  },
];

const schemas: DroneBatteryCRatingCalculatorLocaleContent['schemas'] = [
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
    description,
    step: howToSteps.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.name,
      text: s.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneBatteryCRatingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo: seoSections,
  faq: faqItems,
  howTo: howToSteps,
  bibliography: BIBLIOGRAPHY_ITEMS,
  schemas,
};
