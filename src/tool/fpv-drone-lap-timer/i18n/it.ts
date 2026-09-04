import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'cronometro-giri-gare-droni-fpv';
const title = 'Cronometro Giri e Intertempi per Gare di Droni FPV';
const description = 'Cronometro interattivo per gare di droni FPV con sequenza di partenza acustica FAI, ritmo degli intertempi, avvisi sul giro veloce, indice di costanza e telemetria di velocità.';

const ui = {
  setupHeading: 'Configurazione Tracciato e Sessione',
  trackLengthLabel: 'Lunghezza del Circuito',
  trackLengthUnit: 'metri',
  targetLapsLabel: 'Giri Obiettivo',
  targetLapsUnit: 'giri (0 per prove libere)',
  batteryCapacityLabel: 'Capacità Batteria',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Attiva Segnali Acustici',
  debounceThresholdLabel: 'Filtro Anti-rimbalzo Giro',
  debounceThresholdUnit: 'secondi',
  presetMultiGpLabel: 'Specifica MultiGP (250m / 3 Giri)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Giri)',
  presetSprintLabel: 'Sprint ad Alta Velocità (400m / 2 Giri)',
  startCountdownButton: 'Avvia Conto alla Rovescia FAI',
  pauseTimerButton: 'Sospendi Sessione',
  resumeTimerButton: 'Riprendi Cronometro',
  resetTimerButton: 'Azzera Sessione',
  recordLapButton: 'REGISTRA GIRO',
  spacebarHint: 'Premi la BARRA SPAZIATRICE o tocca il pulsante gigante al passaggio sul traguardo',
  statusIdle: 'Pronto alla Partenza',
  statusCountdown: 'Conto alla Rovescia FAI in Corso',
  statusRunning: 'Cronometro di Gara Attivo',
  statusPaused: 'Sessione Sospesa',
  statusFinished: 'Gara Completata',
  currentLapHeading: 'Tempo Giro Attuale',
  lapNumberPrefix: 'Giro',
  lastLapHeading: 'Ultimo Giro',
  fastestLapHeading: 'Giro più Veloce',
  averageLapHeading: 'Giro Medio',
  deltaBestHeading: 'Distacco dal Miglior Giro',
  consistencyIndexHeading: 'Indice di Costanza',
  estimatedSpeedHeading: 'Velocità Media Stimata',
  estimatedBatteryHeading: 'Consumo Batteria Stimato',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh residui',
  lapHistoryHeading: 'Tempi sul Giro e Confronto del Passo',
  lapColumnHeader: 'Giro #',
  timeColumnHeader: 'Tempo',
  splitColumnHeader: 'Distacco Migliore',
  speedColumnHeader: 'Velocità Media',
  batteryColumnHeader: 'Consumo Batteria',
  noLapsRecordedNotice: 'Nessun giro registrato. Avvia il conto alla rovescia e premi la barra spaziatrice per salvare il primo passaggio.',
  consistencyRatingElite: 'Costanza Élite',
  consistencyRatingPro: 'Costanza Pilota Pro',
  consistencyRatingClub: 'Costanza Club',
  consistencyRatingNovice: 'Costanza in Addestramento',
  fastestLapBadge: 'GIRO PIÙ VELOCE',
  sessionSummaryHeading: 'Riepilogo Sessione ed Esportazione',
  totalTimeLabel: 'Durata Totale di Gara',
  completedLapsLabel: 'Giri Completati',
  exportCsvButton: 'Esporta Giri in CSV',
  copySummaryButton: 'Copia Riepilogo Testuale',
  copiedNotice: 'Riepilogo sessione copiato negli appunti!',
};

const faqItems = [
  {
    question: 'Come funziona la sequenza di partenza acustica FAI in questo cronometro?',
    answer: 'La sequenza riproduce le normative ufficiali di gara per droni F9U della Fédération Aéronautique Internationale (FAI). Vengono emessi quattro bip preparatori a intervalli di un secondo, seguiti da un tono acuto di partenza che azzera e attiva il cronometro al millisecondo.',
  },
  {
    question: 'Come viene calcolato l\'Indice di Costanza sul Giro?',
    answer: 'Il punteggio misura la deviazione standard dei giri percorsi rispetto al tempo medio della sessione. Un risultato superiore al 95 percento denota una precisione di traiettoria e gestione del gas di massimo livello.',
  },
  {
    question: 'È possibile utilizzare un pedale o un tasto del radiocomando per segnare i giri?',
    answer: 'Sì. Qualsiasi tastiera wireless, pedale Bluetooth o switch della radio mappato per inviare la barra spaziatrice registrerà istantaneamente il giro senza dover guardare o toccare lo schermo.',
  },
  {
    question: 'Perché è presente una soglia di sicurezza anti-rimbalzo?',
    answer: 'I gate vengono superati a velocità sostenute, ma doppi tocchi accidentali potrebbero causare false registrazioni di frazioni di secondo. Il filtro anti-rimbalzo respinge letture inferiori alla soglia (predefinita a 3 secondi).',
  },
  {
    question: 'Quanto è attendibile la velocità media stimata?',
    answer: 'La stima divide la lunghezza nominale dichiarata della linea centrale del tracciato per il tempo di percorrenza. La velocità reale in curva differirà in base alla traiettoria e all\'angolo di rollio.',
  },
];

const howToSteps = [
  {
    name: 'Configura lunghezza tracciato e giri',
    text: 'Inserisci la lunghezza del circuito in metri e il numero di giri previsti, o seleziona un profilo pronto come MultiGP Spec.',
  },
  {
    name: 'Avvia il conto alla rovescia acustico FAI',
    text: 'Fai clic su Avvia Conto alla Rovescia. Ascolta i toni di preparazione seguiti dal segnale acuto di partenza.',
  },
  {
    name: 'Segna ogni giro al passaggio sotto il gate',
    text: 'Tocca il pulsante grande o premi la barra spaziatrice della tastiera ogni volta che il drone attraversa il gate di arrivo.',
  },
  {
    name: 'Analizza telemetria, distacchi e costanza',
    text: 'Verifica il grafico del passo, i delta rispetto al miglior giro e la valutazione di costanza, quindi esporta in CSV.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Principi di cronometraggio ad alta precisione nelle gare di droni FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Nelle competizioni FPV con multirotori la precisione al millesimo di secondo e la costanza nelle linee di volo fanno la differenza tra vittoria e sconfitta. I droni da 5 pollici superano i 140 km/h affrontando gate tridimensionali, bandiere e dive loop. Allenarsi con metodo richiede un segnale acustico di partenza standardizzato, rilevamento istantaneo sul traguardo e report sull\'usura delle prestazioni giro dopo giro.',
  },
  {
    type: 'title',
    text: 'Confronto tra categorie di droni multirotore e parametri di timing',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Categoria / Specifica', 'Lunghezza Tipica Circuito', 'Giri di Manche', 'Tempo Giro Medio', 'Gamma Velocità Massima', 'Anti-rimbalzo Consigliato'],
    rows: [
      ['Tiny Whoop (65mm 1S)', 'da 50m a 80m', '5 giri', 'da 8.5s a 13.0s', 'da 35 a 55 km/h', '2.0 secondi'],
      ['Micro 3.5 Pollici (4S)', 'da 120m a 180m', '4 giri', 'da 12.0s a 18.0s', 'da 70 a 110 km/h', '2.5 secondi'],
      ['MultiGP Spec 5 Pollici (6S)', 'da 200m a 300m', '3 giri', 'da 14.0s a 22.0s', 'da 100 a 150 km/h', '3.0 secondi'],
      ['Sprint Aperto su Prato (6S/8S)', 'da 350m a 500m', '2 giri', 'da 20.0s a 32.0s', 'da 130 a 180 km/h', '4.0 secondi'],
    ],
  },
  {
    type: 'title',
    text: 'Sequenze sonore di partenza e regolamento sportivo FAI F9U',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'In base alle normative FAI CIAM Sezione 4 per il drone racing, le partenze adottano segnali sonori standardizzati invece di bandiere visive per assicurare pari condizioni di reazione nei visori video FPV. La sequenza include bip a 440 Hz a intervalli di un secondo, culminando nel tono a 880 Hz al quale i piloti armano e scattano.',
  },
  {
    type: 'list',
    items: [
      'Toni di preparazione: Avvisi acustici per calibrare l\'acceleratore e massimizzare la concentrazione.',
      'Tono di via (Go): Segnale acustico istantaneo che attiva il cronometro esattamente a t = 0.',
      'Conferma acustica: Suoni di riscontro che confermano la registrazione del giro senza togliere il visore.',
      'Suono giro record: Melodia armonica distintiva quando il giro attuale batte il record della sessione.',
    ],
  },
  {
    type: 'title',
    text: 'Importanza dell\'Indice di Costanza e gestione della strategia',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Segnare un giro record isolato è esaltante, ma i titoli si vincono con la costanza. L\'indice valuta le oscillazioni di tempo: un pilota che varia meno di 0.3 secondi controlla meglio l\'acceleratore, riduce le turbolenze e conserva voltaggio utile per la volata finale.',
  },
  {
    type: 'tip',
    title: 'Consiglio pratico per il campo di volo',
    html: 'Posiziona il dispositivo di cronometraggio a volume ben udibile vicino alla tua postazione. Un pedale Bluetooth o un tastierino wireless appoggiato sulla borsa permette di registrare i giri con il piede senza mai staccare le mani dagli stick.',
  },
];

const schemas: FpvDroneLapTimerLocaleContent['schemas'] = [
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

export const content: FpvDroneLapTimerLocaleContent = {
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
