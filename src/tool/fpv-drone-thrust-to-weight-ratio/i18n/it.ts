import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calcolatore-rapporto-spinta-peso-drone-fpv';
const title = 'Calcolatore Rapporto Spinta Peso e Telemetria di Volo Drone FPV';
const description = 'Calcola spinta statica massima, curva del gas non lineare, forze G verticali, punto di hovering ed accelerazione 0 a 100 per droni FPV e multirotori.';

const ui = {
  title: 'Calcolatore Rapporto Spinta Peso per Drone FPV',
  subtitle: 'Analizza curve di spinta, risposta del comando gas in tempo reale, forze G e categorie di volo',
  presetsHeader: 'Profili Rapidi',
  customPreset: 'Personalizzato',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Pollici',
  freestyle5Preset: '6S Freestyle 5 Pollici Pro',
  longrange7Preset: '6S Mountain LR 7 Pollici',
  cinelifter8Preset: '8S Cinelifter Pesante X8',
  specsHeader: 'Specifiche Drone e Propulsione',
  auwGramsLabel: 'Peso Totale con Batteria (g)',
  motorCountLabel: 'Configurazione Motori',
  thrustPerMotorLabel: 'Spinta Statica Massima per Motore (g)',
  propellerSizeLabel: 'Diametro Elica (pollici)',
  propellerPitchLabel: 'Passo Elica (pollici)',
  bladeCountLabel: 'Numero di Pale',
  blade2Option: '2 Pale (Bipala - Massima Efficienza)',
  blade3Option: '3 Pale (Tripala - Standard Freestyle)',
  blade4Option: '4 Pale (Quadripala - Massimo Grip)',
  throttleStickHeader: 'Simulatore Comando Gas in Tempo Reale',
  throttleStickLabel: 'Posizione Comando Gas (%)',
  snapIdleLabel: 'Minimo (0%)',
  snapHoverLabel: 'Hovering',
  snapCruiseLabel: 'Crociera (50%)',
  snapPunchLabel: 'Pieno Gas (100%)',
  telemetryHeader: 'Telemetria di Volo FPV e Diagnostica',
  twrRatioLabel: 'Rapporto Spinta Peso (TWR)',
  hoverThrottleLabel: 'Punto di Gas in Hovering',
  currentThrustLabel: 'Spinta Attuale Erogata',
  instantGForceLabel: 'Forza G Verticale Istantanea',
  zeroToHundredLabel: 'Tempo 0 a 100 km/h in Punch',
  recommendedCamAngleLabel: 'Inclinazione Telecamera FPV Consigliata',
  windResistanceLabel: 'Velocità di Penetrazione del Vento',
  totalMaxThrustLabel: 'Spinta Statica Totale Massima',
  maxPitchAngleLabel: 'Angolo Massimo di Inclinazione',
  tuningHeader: 'Raccomandazioni di Regolazione Betaflight e PID',
  tpaRecommendationLabel: 'Attenuazione PID del Gas (TPA)',
  dynamicIdleLabel: 'Minimo Dinamico Consigliato',
  propwashRiskLabel: 'Autorità Controllo Propwash',
  tierUnderpoweredTitle: 'Sottomotorizzato o Rischio Deriva da Vento',
  tierUnderpoweredDesc: 'TWR inferiore a 2 a 1 non garantisce autorità sufficiente per arrestare discese rapide. Consigliato solo per interni calmi.',
  tierCinematicTitle: 'Volo Cinematico Fluido',
  tierCinematicDesc: 'TWR tra 2 a 1 e 4 a 1 assicura un controllo morbido del gas e riprese video stabili.',
  tierFreestyleTitle: 'Freestyle Sportivo e Agile',
  tierFreestyleDesc: 'TWR tra 4 a 1 e 8 a 1 offre risposte scattanti e ottime manovre acrobatiche.',
  tierAcroProTitle: 'Acrobazia ad Alte Prestazioni e Freestyle Bando',
  tierAcroProDesc: 'TWR tra 8 a 1 e 13 a 1 garantisce accelerazioni verticali fulminee e annullamento istantaneo del propwash.',
  tierRacingExtremeTitle: 'Gare di Droni Estreme',
  tierRacingExtremeDesc: 'TWR superiore a 13 a 1 fornisce la potenza necessaria per i circuiti da competizione professionale FPV.',
  hudThrustCurveTitle: 'Curva di Risposta di Spinta Non Lineare',
  hudHoverMarker: 'Punto Hovering',
  hudCurrentStickMarker: 'Comando Attuale',
  hudGForceLabel: 'Forze G',
  hudTiltAngleLabel: 'Angolo Telecamera',
  hudVectorPowerLabel: 'Telemetria di Potenza in Tempo Reale',
};

const faqItems = [
  {
    question: 'Quale rapporto spinta peso è ideale per un drone FPV freestyle?',
    answer: 'Per droni freestyle, un TWR compreso tra 8 a 1 e 12 a 1 offre l accelerazione necessaria per arrestare tuffi in caduta libera e superare virate strette.',
  },
  {
    question: 'Come influisce la curva non lineare del gas sul volo stazionario?',
    answer: 'I motori brushless erogano spinta proporzionale al quadrato della velocità di rotazione. Il punto di hovering si colloca solitamente tra il 20 e il 35 per cento di corsa del gas.',
  },
  {
    question: 'Perché l inclinazione della telecamera FPV dipende dalla spinta?',
    answer: 'I droni più veloci volano con un assetto inclinato in avanti. Per mantenere l orizzonte centrato nel visore FPV, i piloti inclinano la telecamera tra 35 e 50 gradi.',
  },
  {
    question: 'In che modo il numero di pale modifica il comportamento di volo?',
    answer: 'Le eliche bipala massimizzano l autonomia e la velocità massima. Le tripala offrono il miglior equilibrio per il freestyle, mentre le quadripala aumentano l aderenza in curva.',
  },
];

const howToSteps = [
  {
    name: 'Inserire il peso del drone o scegliere un profilo',
    text: 'Immetti il peso totale in ordine di volo inclusa la batteria e la telecamera in grammi.',
  },
  {
    name: 'Configurare motori ed eliche',
    text: 'Specifica il numero di motori, di pale e la spinta statica al banco dichiarata dal produttore.',
  },
  {
    name: 'Regolare il comando gas in tempo reale',
    text: 'Sposta il cursore del gas per visualizzare la spinta, le forze G e la posizione sulla curva di risposta.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodinamica del Rapporto Spinta Peso nei Droni FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il rapporto spinta peso (TWR) determina l accelerazione e la precisione di controllo nei droni multirotore. Nel volo acrobatico FPV, una riserva di potenza adeguata consente di recuperare manovre complesse con totale sicurezza.',
  },
  {
    type: 'title',
    text: 'Classificazione dei Droni FPV e Metriche di Riferimento',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Piattaforma', 'Peso AUW Tipico', 'TWR Obiettivo', 'Gas in Hovering', 'Accelerazione 0 a 100', 'Inclinazione Telecamera'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 a 1', '35 per cento', '1.20 s', '15 deg a 25 deg'],
      ['4S Freestyle 3.5"', '250g', '12.0 a 1', '24 per cento', '0.28 s', '35 deg a 45 deg'],
      ['6S Freestyle 5" Pro', '680g', '11.5 a 1', '25 per cento', '0.30 s', '35 deg a 50 deg'],
      ['6S Mountain LR 7"', '1150g', '8.3 a 1', '30 per cento', '0.45 s', '20 deg a 30 deg'],
      ['8S Cinelifter X8', '4200g', '6.1 a 1', '38 per cento', '0.70 s', '15 deg a 25 deg'],
    ],
  },
  {
    type: 'title',
    text: 'Curva di Risposta Non Lineare e Dinamica dei Motori',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'I motori elettrici generano spinta con andamento esponenziale rispetto al comando. L ultimo 20 per cento di escursione del gas sviluppa oltre il 40 per cento della forza totale.',
  },
  {
    type: 'list',
    items: [
      'Zona di hovering (20 a 35 per cento): Controllo fine per passaggi ravvicinati.',
      'Zona di crociera (35 a 65 per cento): Volo rettilineo equilibrato con consumi contenuti.',
      'Zona di pieno gas (70 a 100 per cento): Massima spinta verticale con forze G elevate.',
    ],
  },
  {
    type: 'title',
    text: 'Scelta delle Eliche e Sintonizzazione Betaflight',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Per droni con TWR superiore a 10 a 1 è opportuno abilitare la funzione Throttle PID Attenuation (TPA) in Betaflight per prevenire oscillazioni a pieno gas.',
  },
  {
    type: 'tip',
    title: 'Consiglio di Regolazione Betaflight TPA',
    html: 'Imposta la soglia TPA a 1250 o 1350 con fattore 0.65 per garantire stabilità e assenza di vibrazioni ad alta velocità.',
  },
];

const schemas: FpvDroneThrustToWeightRatioLocaleContent['schemas'] = [
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

export const content: FpvDroneThrustToWeightRatioLocaleContent = {
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
