import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'pianificatore-riserva-batteria-missione-drone';
const title = 'Pianificatore Riserva Batteria Missione Drone';
const description = 'Calcola margini di sicurezza batteria per ritorno a casa, penali per vento contrario e raggio massimo di volo per droni UAV.';

const faqItems = [
  {
    question: 'Perché volare controvento consuma più energia?',
    answer: 'Volare controvento richiede un angolo di pitch più accentuato per vincere la resistenza aerodinamica e mantenere la velocità al suolo, aumentando la corrente in modo non lineare.',
  },
  {
    question: 'In che modo il tempo di stazionamento influisce sul punto di non ritorno?',
    answer: 'Il tempo trascorso in stazionamento sull obiettivo sottrae direttamente energia dalla batteria prima del calcolo del raggio di volo disponibile.',
  },
  {
    question: 'Cosa causa il calo di tensione LiPo sotto carico?',
    answer: 'Un elevato assorbimento di corrente aumenta le perdite per resistenza interna nelle celle al litio, riducendo i Watt-ora effettivamente utilizzabili.',
  },
];

const howToSteps = [
  {
    name: 'Inserisci le specifiche della batteria e della propulsione',
    text: 'Imposta la capacità in mAh, la tensione nominale e la corrente media di volo.',
  },
  {
    name: 'Imposta la distanza e il tempo sull obiettivo',
    text: 'Specifica la distanza di andata e il tempo previsto in hovering sull area di missione.',
  },
  {
    name: 'Configura la velocità e la direzione del vento',
    text: 'Seleziona la velocità del vento e la sua direzione rispetto alla tratta di andata.',
  },
  {
    name: 'Analizza il raggio sicuro e la telemetria',
    text: 'Esamina il punto di non ritorno calcolato, i consumi per tratta e la carica residua all atterraggio.',
  },
];

const schemas: DroneMissionBatteryReservePlannerLocaleContent['schemas'] = [
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
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Pianificatore Riserva Batteria Missione Drone',
    subtitle: 'Calcola i margini di sicurezza per il ritorno e i raggi di volo',
    description: 'Pianifica le misiones UAV con calcolo preciso delle riserve e correzioni per il vento.',
    sections: {
      batteryPropulsion: '1. Batteria e Propulsione',
      flightAtmosphere: '2. Profilo di Volo e Atmosfera',
    },
    inputs: {
      unitSystemLabel: 'Sistema di Unità',
      metricLabel: 'Metrico',
      imperialLabel: 'Imperiale',
      presetLabel: 'Preset Rapidi di Missione',
      batteryCapacityLabel: 'Capacità Batteria',
      batteryVoltageLabel: 'Tensione Nominale',
      averageCurrentLabel: 'Corrente Media in Crociera',
      cruiseSpeedLabel: 'Velocità Aria in Crociera',
      oneWayDistanceLabel: 'Distanza Solo Andata',
      targetHoverTimeLabel: 'Tempo Operativo sull Obiettivo',
      windSpeedLabel: 'Velocità del Vento',
      windDirectionLabel: 'Direzione del Vento Rispetto all Andata',
      windHeadwindLabel: 'Vento Contro in Andata',
      windTailwindLabel: 'Vento a Favore in Andata',
      windCrosswindLabel: 'Vento Trasversale',
      reservePolicyLabel: 'Buffer Riserva di Sicurezza',
    },
    presets: {
      mappingSurvey: 'Fotogrammetria e Mappatura',
      fpvRecon: 'Ricognizione FPV Long Range',
      cinematicInspection: 'Ispezione Strutturale Cinematografica',
      microRecon: 'Esplorazione Micro Drone',
      surveyMeta: 'mappatura',
      scoutMeta: 'ricognizione',
      hoverMeta: 'stazionamento',
    },
    results: {
      totalCapacityEnergy: 'Energia Totale Capacità',
      usableEnergy: 'Energia Utile di Missione',
      reserveEnergyBuffer: 'Buffer Energia di Riserva',
      totalAutonomyTime: 'Autonomia Totale di Volo',
      maxSafeMissionRadius: 'Raggio Punto di Non Ritorno',
      outboundLegTime: 'Durata Tratta di Andata',
      targetHoverTime: 'Durata Stazionamento Obiettivo',
      returnLegTime: 'Durata Tratta di Ritorno',
      totalMissionTime: 'Durata Totale Transito',
      remainingEnergyLanding: 'Livello Batteria all Atterraggio',
      feasibilityStatus: 'Valutazione Fattibilità Missione',
      voltageSagSubLabel: 'Calo di tensione',
      maxRadiusSubLabel: 'Raggio max con stazionamento',
      powerSubLabel: 'Potenza',
    },
    statusBadges: {
      optimalTitle: 'MARGINE RISERVA ENERGIA OTTIMALE',
      optimalSubtitle: 'Profilo di volo sicuro con riserva sufficiente all atterraggio',
      tightTitle: 'MARGINE RISERVA RISICATO',
      tightSubtitle: 'Riserva bassa all atterraggio, monitora la tensione batteria',
      criticalTitle: 'ALLARME CRITICO ENERGIA',
      criticalSubtitle: 'Riserva superata, avvia il ritorno a casa immediatamente',
      exceededTitle: 'MISSIONE ECCEDE LA CAPACITÀ SICURA',
      exceededSubtitle: 'Energia insufficiente per completare la missione in sicurezza',
    },
    chart: {
      batteryProfileTitle: 'PROFILO NON LINEARE ALLOCAZIONE ENERGETICA',
      modelTitle: 'MODELLO POTENZA AERODINAMICA E VENTO',
      windLabel: 'Vento',
      homeNode: 'BASE',
      targetNode: 'TARGET',
      landNode: 'LAND',
      launchPadLabel: 'Punto di decollo',
      surveyHoverLabel: 'Stazionamento obiettivo',
      safeRadiusLabel: 'Raggio sicuro',
      outboundSegment: 'Andata',
      targetSegment: 'Stazionamento',
      returnSegment: 'Ritorno',
      reserveSegment: 'Riserva',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Penalità di Potenza Aerodinamica con Vento Contrario',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La sicurezza dei voli UAV si basa su leggi fisiche non lineari. Volare controvento richiede un inclinazione maggiore per vincere la resistenza e mantenere la velocità desiderata al suolo, aumentando l assorbimento di corrente.',
    },
    {
      type: 'paragraph',
      html: 'Il nostro strumento calcola le variazioni di potenza per ciascuna tratta di volo considerando il vettore vento.',
    },
    {
      type: 'title',
      text: 'Calcolo del Tempo di Stazionamento sull Obiettivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le misiones di fotogrammetria richiedono tempo in hovering sopra l area di lavoro. Questo consumo viene sottratto prima del calcolo del raggio massimo di ritorno.',
    },
    {
      type: 'list',
      items: [
        'Imposta la durata del lavoro sull obiettivo prima dei limiti di volo.',
        'Considera i picchi di potenza durante le tratte controvento.',
        'Monitora il calo di tensione LiPo sotto carico intenso.',
        'Ritorna alla base non appena raggiungi la riserva calcolata.',
      ],
    },
    {
      type: 'tip',
      title: 'Avviso sul Calo di Tensione delle Batterie LiPo',
      html: 'Correnti elevate generano cali di tensione temporanei per resistenza interna, riducendo l energia utile effettiva.',
    },
    {
      type: 'title',
      text: 'Formule per il Calcolo della Riserva Batteria UAV',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parametro', 'Formula / Modello', 'Unità'],
      rows: [
        ['Energia Lorda', 'Capacità (mAh) x Tensione (V) / 1000', 'Watt-ora (Wh)'],
        ['Perdita da Sag', 'Energia Lorda x Fattore di Sag', 'Watt-ora (Wh)'],
        ['Potenza con Vento', 'Potenza Base x (1 + 0.65 x RatioVento)^1.3', 'Watt (W)'],
        ['Raggio Sicuro Max', '(Energia Utile - Energia Hovering) / Consumo per Km', 'Chilometri (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Linee Guida per la Pianificazione dei Voli UAV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Confronta sempre la telemetria reale con i calcoli teorici prima del volo per garantire massima sicurezza in ogni operazione.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
