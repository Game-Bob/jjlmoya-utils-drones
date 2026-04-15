import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'calcolatore-lunghezza-antenna';
const title = 'Calcolatore di Lunghezza Antenna RF per Dipoli e Stili FPV';
const description = 'Calcola la misura esatta per le tue antenne da 868MHz, 2.4GHz e 5.8GHz. Migliora la portata del tuo drone ed evita di bruciare il trasmettitore con un SWR ottimizzato.';

const faqItems = [
  {
    question: 'Perché il filo della mia antenna deve avere una lunghezza specifica?',
    answer: 'Le onde radio risuonano a multipli della loro lunghezza d\'onda. Se il filo non corrisponde a questa risonanza, l\'energia viene riflessa indietro al trasmettitore invece di essere irradiata, il che può bruciare l\'attrezzatura.',
  },
  {
    question: 'Qual è il Fattore di Velocità (Vf)?',
    answer: 'È il rapporto tra la velocità alla quale un segnale viaggia attraverso un conduttore e la velocità della luce. Nel rame, è tipicamente 0.95, il che significa che l\'onda, viaggiando il 5% più lenta, ha bisogno di un\'antenna più corta del 5%.',
  },
  {
    question: 'È meglio un dipolo o un\'antenna a stilo?',
    answer: 'Un dipolo (1/2 onda) è più efficiente e prevedibile, ma più ingombrante. Uno stilo (1/4 d\'onda) è compatto e ideale per piccoli ricevitori, sebbene richieda un piano di massa per funzionare bene.',
  },
  {
    question: 'Come influisce lo spessore del filo sull\'antenna?',
    answer: 'I fili più spessi hanno una larghezza di banda maggiore (sono meno critici riguardo alla frequenza esatta), ma il loro fattore di velocità cambia leggermente. Per la maggior parte dei droni FPV, un filo standard da 20-22AWG è l\'ideale.',
  },
];

const howToSteps = [
  {
    name: 'Seleziona Frequenza',
    text: 'Inserisci la frequenza esatta in MHz o usa uno dei pulsanti rapidi per 5.8GHz, 2.4GHz o 868MHz.',
  },
  {
    name: 'Scegli Tipo di Antenna',
    text: 'Decidi se farai un dipolo completo (1/2 onda) o un\'antenna verticale a stilo (1/4 onda).',
  },
  {
    name: 'Regola il Materiale',
    text: 'Scegli il tipo di filo che userai in modo che il calcolatore applichi il giusto fattore di velocità.',
  },
  {
    name: 'Taglia con Precisione',
    text: 'Usa la misura "Lunghezza per braccio" per tagliare ciascun elemento. Ricorda di misurare dal punto di saldatura.',
  },
];

const schemas: AntennaLengthCalculatorLocaleContent['schemas'] = [
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

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Riferimenti Bibliografici',
  ui: {
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti Bibliografici',
    signalParameters: 'Parametri del Segnale',
    antennaType: 'Tipo di Antenna',
    dipole: 'Dipolo (1/2 λ)',
    whip: 'Stilo (1/4 λ)',
    conductorMedium: 'Mezzo Conduttore',
    totalLength: 'Lunghezza Totale',
    branchLength: 'Lunghezza per Braccio',
    secondaryResonance: 'Punti di Risonanza Secondari',
    swrIdeal: 'SWR Ideale',
    impedance: 'Impedenza',
    criticalNotice: 'Avviso Critico',
    criticalNoticeText: 'Un\'antenna tagliata male genera un SWR alto che può surriscaldare e distruggere gli stadi di potenza del trasmettitore in pochi secondi.',
    dynamicScheme: 'Schema Dinamico (mm)',
    harmonicLabel: 'Armonica',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Rame Nudo (0.95)',
    materialPvcInsulated: 'Cavo Isolato PVC (0.92)',
    materialSolidRod: 'Asta Piena (0.97)',
    materialCoaxial: 'Cavo Coassiale (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Perché la Lunghezza della tua Antenna a Radiofrequenza è Critica?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se ti sei mai chiesto perché le antenne dei droni da corsa (FPV), dei controller a lungo raggio (ELRS/Crossfire) o persino del tuo router Wi-Fi hanno lunghezze così specifiche, la risposta risiede nella fisica della risonanza. Un\'antenna non è solo un pezzo di filo conduttore; è un componente che deve essere in "sintonia" con la frequenza dell\'onda elettromagnetica che sta gestendo.',
    },
    {
      type: 'paragraph',
      html: 'Quando costruisci la tua antenna, che sia un <strong>dipolo</strong> per gli 868MHz o un\'<strong>antenna a stilo</strong> per i 5.8GHz, la precisione si misura in millimetri. Un errore di soli 2 o 3 mm può rendere l\'antenna inefficiente, causando ciò che è noto come un elevato ROS (Rapporto di Onda Stazionaria) o SWR.',
    },
    {
      type: 'title',
      text: 'Concetti Fondamentali: Lunghezza d\'Onda e Risonanza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La radiofrequenza (RF) viaggia alla velocità della luce (circa 300.000 chilometri al secondo). Affinché un\'antenna possa emettere o ricevere energia in modo ottimale, le sue dimensioni fisiche devono essere direttamente correlate alla distanza percorsa da un ciclo completo dell\'onda, chiamata <strong>lunghezza d\'onda (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'La formula di base per il calcolo della lunghezza d\'onda è λ = v / f, dove \'v\' è la velocità di propagazione e \'f\' è la frequenza. Tuttavia, nel mondo reale, l\'elettricità viaggia leggermente più lentamente attraverso i metalli rispetto al vuoto. È qui che entra in gioco il <strong>Fattore di Velocità (Vf)</strong>.',
    },
    {
      type: 'list',
      items: [
        'Rame nudo: Ha un Vf di circa 0.95.',
        'Cavi isolati (PVC): L\'isolamento rallenta l\'onda, abbassando il fattore a 0.92 o meno.',
        'Aste di rame piene: Essendo più spesse e altamente conduttive, il fattore sale leggermente a 0.97.',
      ],
    },
    {
      type: 'title',
      text: 'Tipi di Antenne Comuni nei Droni e nei Progetti Maker',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Antenna a Dipolo a Mezz\'Onda (1/2 λ):</strong> Questo è il gold standard per molte applicazioni. Consiste di due bracci (elementi radianti) che insieme formano metà della lunghezza d\'onda della frequenza operativa. È un\'antenna bilanciata che offre un diagramma di radiazione a forma di "ciambella" ed è molto facile da realizzare con un cavo coassiale.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Antenna a Stilo (Monopolo) a Quarto d\'Onda (1/4 λ):</strong> Questo è ciò che tipicamente vediamo sui ricevitori radio o sui piccoli droni. Ha solo un elemento radiante e utilizza il telaio del dispositivo o un piano di massa per "riflettere" l\'altra metà dell\'onda. La sua lunghezza è esattamente la metà di quella di un dipolo, da cui il nome quarto d\'onda.',
    },
    {
      type: 'title',
      text: 'Frequenze Critiche e Applicazioni',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ogni banda di frequenza ha le sue peculiarità. Con il nostro calcolatore, puoi regolare le misurazioni per le bande più comunemente usate in questo hobby:',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (Video FPV): Le lunghezze sono minuscole (circa 12-13 mm per il radiatore). Qualsiasi eccesso di saldatura può rovinare le prestazioni.',
        '2.4 GHz (Controllo e Wi-Fi): Una banda satura in cui l\'efficienza dell\'antenna è fondamentale per evitare la perdita di collegamento (failsafe).',
        '868 MHz / 915 MHz (Longo Raggio): Utilizzato da sistemi come Team BlackSheep Crossfire o ExpressLRS. Le antenne qui sono più grandi (circa 8cm per braccio) e permettono una più facile penetrazione degli ostacoli.',
        '433 MHz (UHF): Il vecchio standard a lungo raggio, con antenne di grandi dimensioni ideali per voli di molti chilometri.',
      ],
    },
    {
      type: 'title',
      text: 'Riferimento Tecnico: Tabella SWR e Perdite',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per prestazioni ottimali, l\'SWR dovrebbe essere il più vicino possibile a 1.0. Ecco un riferimento su come l\'SWR influisce sulla potenza di trasmissione:',
    },
    {
      type: 'table',
      headers: ['SWR', 'Perdita di Ritorno', 'Potenza Riflessa', 'Stato'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Perfetto</strong>'],
        ['1.2:1', '-21 dB', '0.8%', 'Eccellente'],
        ['1.5:1', '-14 dB', '4.0%', 'Buono'],
        ['2.0:1', '-9.5 dB', '11.1%', 'Limite Accettabile'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>Pericoloso</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'L\'Importanza dei 50 Ohm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quasi tutti i sistemi radio utilizzati nei droni e nell\'RC (VTx, ricevitori, controller) sono progettati per un\'<strong>impedenza caratteristica di 50 Ohm</strong>. Un\'antenna a dipolo perfettamente risonante in genere ha un\'impedenza di circa 73 Ohm nello spazio libero, ma quando installata su un drone o regolando l\'angolo dei bracci (V-Invertita), si avvicina all\'ideale di 50 Ohm. L\'uso di cavi coassiali da 75 Ohm (come i vecchi cavi TV) provocherà un disadattamento che degrada il segnale, indipendentemente da quanto bene hai tagliato l\'antenna.',
    },
    {
      type: 'title',
      text: 'Il Pericolo dell\'SWR Alto: Proteggi il tuo VTx',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Perché insistiamo così tanto sulla precisione? Se l\'antenna non è della lunghezza corretta, non può irradiare tutta l\'energia inviata dal trasmettitore video (VTx). Quell\'energia "rimbalza" indietro al trasmettitore sotto forma di calore.',
    },
    {
      type: 'paragraph',
      html: 'L\'SWR alto è la causa numero uno per i trasmettitori bruciati. Se voli senza un\'antenna o con una tagliata male, i componenti interni si surriscalderanno in pochi secondi, rendendo inutilizzabile il tuo equipaggiamento. Utilizzare questo strumento per verificare i tuoi tagli è il miglior investimento in sicurezza per il tuo drone.',
    },
    {
      type: 'title',
      text: 'Armoniche: Comprendere le Interferenze',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un\'antenna tagliata per gli 868MHz non risuona solo a quella frequenza. A causa della natura delle onde sinusoidali, avrà anche punti di risonanza ai suoi multipli dispari (3a, 5a, 7a armonica).',
    },
    {
      type: 'paragraph',
      html: 'È vitale saperlo perché anche se la tua antenna sta emettendo a 868MHz, potresti generare "rumore" o interferenze a frequenze più alte se il trasmettitore non è ben filtrato. Il calcolatore delle armoniche ti aiuta a prevedere dove potrebbero apparire questi segnali fantasma.',
    },
  ],
  faq: [
    {
      question: 'Perché il filo della mia antenna deve avere una lunghezza specifica?',
      answer: 'Le onde radio risuonano a multipli della loro lunghezza d\'onda. Se il filo non corrisponde a questa risonanza, l\'energia viene riflessa indietro al trasmettitore invece di essere irradiata, il che può bruciare l\'attrezzatura.',
    },
    {
      question: 'Qual è il Fattore di Velocità (Vf)?',
      answer: 'È il rapporto tra la velocità alla quale un segnale viaggia attraverso un conduttore e la velocità della luce. Nel rame, è tipicamente 0.95, il che significa che l\'onda, viaggiando il 5% più lenta, ha bisogno di un\'antenna più corta del 5%.',
    },
    {
      question: 'È meglio un dipolo o un\'antenna a stilo?',
      answer: 'Un dipolo (1/2 onda) è più efficiente e prevedibile, ma più ingombrante. Uno stilo (1/4 d\'onda) è compatto e ideale per piccoli ricevitori, sebbene richieda un piano di massa per funzionare bene.',
    },
    {
      question: 'Come influisce lo spessore del filo sull\'antenna?',
      answer: 'I fili più spessi hanno una larghezza di banda maggiore (sono meno critici riguardo alla frequenza esatta), ma il loro fattore di velocità cambia leggermente. Per la maggior parte dei droni FPV, un filo standard da 20-22AWG è l\'ideale.',
    },
  ],
  bibliography: [
    { name: 'Il Monopolo Quarto d\'Onda', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Fattore di Velocità nelle Linee di Trasmissione', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Seleziona Frequenza',
      text: 'Inserisci la frequenza esatta in MHz o usa uno dei pulsanti rapidi per 5.8GHz, 2.4GHz o 868MHz.',
    },
    {
      name: 'Scegli Tipo di Antenna',
      text: 'Decidi se farai un dipolo completo (1/2 onda) o un\'antenna verticale a stilo (1/4 onda).',
    },
    {
      name: 'Regola il Materiale',
      text: 'Scegli il tipo di filo che userai in modo che il calcolatore applichi il giusto fattore di velocità.',
    },
    {
      name: 'Taglia con Precisione',
      text: 'Usa la misura "Lunghezza per braccio" per tagliare ciascun elemento. Ricorda di misurare dal punto di saldatura.',
    },
  ],
  schemas,
};
