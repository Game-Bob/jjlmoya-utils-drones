import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'pianificatore-riserva-batteria-missione-drone';
const title = 'Pianificatore di Riserva Batteria per Missioni Drone';
const description = 'Calcola i margini di sicurezza della batteria per il ritorno a casa, l impatto del vento contrario e il raggio massimo di volo dei droni.';

const faqItems = [
  {
    question: 'Perché volare controvento consuma più energia del previsto?',
    answer: 'Il volo controvento richiede un angolo di inclinazione maggiore per vincere la resistenza dell aria e mantenere la velocità al suolo, aumentando la corrente consumata.',
  },
  {
    question: 'Come influisce il tempo di stazionamento sull obiettivo sul punto di non ritorno?',
    answer: 'Il tempo di volo stazionario nell area obiettivo consuma energia utile della batteria, riducendo direttamente il raggio massimo di percorrenza.',
  },
  {
    question: 'Cosa causa il calo di tensione sotto carico nelle batterie LiPo?',
    answer: 'Elevate correnti di scarica aumentano le perdite per resistenza interna nelle celle al litio, riducendo i Wattora effettivi.',
  },
];

const howToSteps = [
  {
    name: 'Inserisci le specifiche di batteria e propulsione',
    text: 'Inserisci la capacità della batteria in milliampere-ora, la tensione nominale e la corrente media.',
  },
  {
    name: 'Imposta la distanza e il tempo di stazionamento',
    text: 'Specifica la distanza di andata e il tempo di volo stazionario nell area obiettivo.',
  },
  {
    name: 'Configura la velocità e la direzione del vento',
    text: 'Seleziona la velocità del vento e la sua direzione rispetto alla tratta di andata.',
  },
  {
    name: 'Analizza il raggio sicuro e la telemetria',
    text: 'Esamina il punto di non ritorno calcolato, la potenza assorbita per tratta e la carica residua all atterraggio.',
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
    title: 'Pianificatore di Riserva Batteria per Missioni Drone',
    subtitle: 'Calcola i margini di sicurezza per il ritorno a casa, effetti del vento e raggi di volo',
    description: 'Pianificazione di volo per droni con calcolo preciso delle riserve della batteria e soglie del punto di non ritorno.',
    inputs: {
      unitSystemLabel: 'Sistema di Unità',
      metricLabel: 'Metrico',
      imperialLabel: 'Imperiale',
      presetLabel: 'Preset Rapidi di Missione',
      batteryCapacityLabel: 'Capacità Batteria',
      batteryVoltageLabel: 'Tensione Nominale',
      averageCurrentLabel: 'Corrente Media in Crociera',
      cruiseSpeedLabel: 'Velocità dell Aria in Crociera',
      oneWayDistanceLabel: 'Distanza di Andata',
      targetHoverTimeLabel: 'Tempo di Operazione sull Obiettivo',
      windSpeedLabel: 'Velocità del Vento',
      windDirectionLabel: 'Direzione del Vento Rispetto all Andata',
      windHeadwindLabel: 'Vento Contro in Andata',
      windTailwindLabel: 'Vento a Favore in Andata',
      windCrosswindLabel: 'Vento Traverso',
      reservePolicyLabel: 'Buffer di Riserva di Sicurezza',
    },
    presets: {
      mappingSurvey: 'Fotogrammetria e Mappatura',
      fpvRecon: 'Ricognizione FPV Long Range',
      cinematicInspection: 'Ispezione Strutturale Cinematografica',
      microRecon: 'Missione di Micro Drone',
    },
    results: {
      totalCapacityEnergy: 'Energia Totale di Capacità',
      usableEnergy: 'Energia Utile di Missione',
      reserveEnergyBuffer: 'Buffer di Energia di Riserva',
      totalAutonomyTime: 'Autonomia Totale di Volo',
      maxSafeMissionRadius: 'Raggio del Punto di Non Ritorno',
      outboundLegTime: 'Durata Tratta di Andata',
      targetHoverTime: 'Durata Stazionamento sull Obiettivo',
      returnLegTime: 'Durata Tratta di Ritorno',
      totalMissionTime: 'Durata Totale di Transito',
      remainingEnergyLanding: 'Livello Batteria Stimato all Atterraggio',
      feasibilityStatus: 'Valutazione di Fattibilità della Missione',
    },
    statusBadges: {
      optimal: 'Margine Ottimale di Riserva Energetica',
      tight: 'Avviso di Riserva Risicata',
      critical: 'Allarme Critico Energia Attivato',
      exceeded: 'La Missione Supera la Capacità Sicura',
    },
    chart: {
      batteryProfileTitle: 'Profilo di Scarica della Batteria',
      outboundSegment: 'Tratta di Volo di Andata',
      targetSegment: 'Stazionamento sull Obiettivo',
      returnSegment: 'Volo di Ritorno a Casa',
      reserveSegment: 'Buffer di Riserva di Sicurezza',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Penalizzazioni di Potenza Aerodinamica con Vento Contrario',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La sicurezza dei voli con droni si basa su principi fisici non lineari. Volare controvento richiede un inclinazione maggiore per mantenere la velocità al suolo.',
    },
    {
      type: 'title',
      text: 'Calcolo del Tempo di Stazionamento nell Area Obiettivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le missioni di rilievo e ispezione richiedono tempo in volo stazionario sopra la zona di lavoro, consumando energia prima di intraprendere il ritorno.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
