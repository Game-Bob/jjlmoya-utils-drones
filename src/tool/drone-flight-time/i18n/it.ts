import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'calcolatore-tempo-volo-drone';
const title = 'Calcolatore Tempo di Volo Drone per Stima Autonomia LiPo LiIon';
const description = 'Calcola quanto tempo può volare il tuo drone in base alla capacità mAh e al consumo. Ottimizza le tue batterie LiPo per voli sicuri e massima durata.';

const faqItems = [
  {
    question: 'Perché il tempo reale è inferiore a quello calcolato?',
    answer: 'Il calcolatore stima un consumo costante. Manovre brusche, vento contrario e usura della batteria possono ridurre il tempo reale fino al 30%.',
  },
  {
    question: 'A quale voltaggio dovrei far atterrare il mio drone?',
    answer: 'L\'ideale è atterrare quando il voltaggio scende a 3.5V - 3.6V per cella (a riposo). Questo equivale approssimativamente al 20% di capacità residua consigliata.',
  },
  {
    question: 'Sono migliori le batterie LiPo o Li-Ion per i droni?',
    answer: 'Le LiPo offrono molta potenza istantanea (ideale per corse e acrobazie). Le Li-Ion hanno più durata ma meno potenza (ideale per voli lunghi e tranquilli).',
  },
  {
    question: 'Come influisce il numero di celle (S) sul tempo di volo?',
    answer: 'Più celle aumentano il voltaggio e la potenza, ma anche il peso. Se i motori sono ottimizzati per quel voltaggio, possono essere più efficienti, ma il solo numero di celle non garantisce più tempo.',
  },
];

const howToSteps = [
  {
    name: 'Identifica la capacità',
    text: 'Guarda l\'etichetta della tua batteria e cerca il valore in mAh (es. 1500, 2200, 4500).',
  },
  {
    name: 'Stima il consumo',
    text: 'Inserisci l\'amperaggio medio che consuma il tuo drone. Puoi vederlo nella telemetria OSD dopo un volo di prova.',
  },
  {
    name: 'Regola il margine',
    text: 'Consigliamo di lasciare il 20% (impostare all\'80%) per proteggere la batteria e avere margine di atterraggio.',
  },
  {
    name: 'Ottieni il risultato',
    text: 'Visualizza il tempo esatto in minuti e secondi che puoi rimanere in aria in sicurezza.',
  },
];

const schemas: DroneFlightTimeLocaleContent['schemas'] = [
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

export const content: DroneFlightTimeLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Riferimenti Bibliografici',
  ui: {
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti Bibliografici',
    batterySpecs: 'Specifiche Batteria',
    capacity: 'Capacità',
    voltage: 'Voltaggio (Celle S)',
    safetyMargin: 'Margine di Sicurezza',
    landingHint: 'Atterrare a 3.5V - 3.7V per cella.',
    consumptionDynamics: 'Dinamica di Consumo',
    averageConsumption: 'Consumo Medio',
    powerWatts: 'Potenza (Watt)',
    efficiencyHint: 'Cambiando gli Ampere, i Watt vengono ricalcolati in base al voltaggio S.',
    estimatedEfficiency: 'Efficienza Stimata',
    typicalEfficiencyHint: 'Tipico: 4-6 (Racing), 8-12 (Cinematic/Long Range).',
    safeFlight: 'Volo Sicuro',
    totalEnergy: 'Energia Totale',
    theoreticalTime: 'Tempo Teorico (0%)',
    co2Footprint: 'Impronta CO2',
    autonomyChart: 'Grafico Autonomia',
    chartSubtitle: 'Ampere (A) vs. Tempo (min)',
    chartLabel: 'Minuti',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolatore di Tempo di Volo per Droni: Guida Completa all\'Autonomia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'autonomia è, probabilmente, il fattore più critico nella progettazione e nel funzionamento di qualsiasi aeromobile a pilotaggio remoto. Che tu sia un pilota di droni FPV da corsa, un professionista della fotografia aerea o un appassionato di modelli a lungo raggio, sapere con precisione quanto tempo il tuo equipaggiamento può rimanere in aria è vitale per la sicurezza e il successo della missione. Il nostro <strong>calcolatore di tempo di volo</strong> utilizza le variabili fondamentali della capacità della batteria e dell\'assorbimento di corrente per offrirti una stima realistica e sicura.',
    },
    {
      type: 'title',
      text: 'Capacità della Batteria: mAh Spiegati',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La capacità di una batteria viene solitamente misurata in milliampere-ora (mAh). Questa cifra ci indica quanta carica elettrica è in grado di immagazzinare la batteria. Ad esempio, una batteria da 1500 mAh può teoricamente fornire 1500 milliampere per un\'ora intera. Nel mondo dei droni, dove i consumi sono estremamente elevati, di solito parliamo di Ampere (A). 1000 mAh equivale esattamente a 1 Ah (Ampere-ora).',
    },
    {
      type: 'paragraph',
      html: 'Tuttavia, la capacità lorda non è l\'unico fattore. Il voltaggio (determinato dal numero di celle o \'S\') influenza direttamente la potenza totale (Watt), ma per il calcolo del tempo basato sul consumo dei motori, il rapporto Ah/Ampere è la metrica più diretta e utilizzata dagli ingegneri di volo.',
    },
    {
      type: 'title',
      text: 'Consumo di Corrente: Amperaggio in Volo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il consumo dei motori è la variabile che fluttua maggiormente durante un volo. Mantenere un drone in hovering non è lo stesso che eseguire manovre acrobatiche aggressive. Ogni combinazione di motore ed elica ha una curva di efficienza. Quando acceleri al massimo, l\'amperaggio schizza verso l\'alto, riducendo drasticamente la durata della batteria.',
    },
    {
      type: 'list',
      items: [
        'Volo in Hovering: Il consumo è minimo e costante, ideale per la fotografia.',
        'Volo di Crociera: Consumo leggermente aumentato a causa della resistenza aerodinamica.',
        'Volo Aggressivo/FPV: I picchi di corrente possono triplicare il consumo medio in pochi secondi.',
        'Peso del Drone: Ogni grammo aggiuntivo richiede più giri motore per generare spinta, aumentando l\'amperaggio.',
      ],
    },
    {
      type: 'title',
      text: 'Regola di Sicurezza dell\'80%: Proteggere la Chimica LiPo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Scaricare una batteria LiPo (Polimeri di Litio) fino allo 0% della sua capacità è il modo più rapido per distruggerla e, peggio ancora, per provocare un incidente. Chimicamente, le celle subiscono danni irreversibili se il loro voltaggio scende al di sotto di una soglia critica (normalmente 3.0V - 3.2V per cella).',
    },
    {
      type: 'paragraph',
      html: 'Per questo motivo, applichiamo sempre una <strong>regola del margine di sicurezza</strong>. Il nostro calcolatore permette di regolare questo valore, ma si consiglia di atterrare quando rimane ancora il 20% della carica. Questo non solo prolunga la durata delle tue costose batterie per centinaia di cicli, ma ti garantisce una riserva di potenza vitale in caso di raffiche di vento inaspettate o se devi interrompere l\'atterraggio e riprovare.',
    },
    {
      type: 'tip',
      html: 'Le batterie dei droni sono molto sensibili al freddo. In inverno, la resistenza interna della LiPo aumenta, causando un calo di voltaggio più rapido. Riscalda sempre le tue batterie prima di decollare se la temperatura ambiente è inferiore ai 15 gradi.',
    },
    {
      type: 'title',
      text: 'Formula Matematica del Volo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebbene il nostro strumento faccia il lavoro pesante per te, è interessante conoscere la logica dietro il calcolo. La formula base è:',
    },
    {
      type: 'paragraph',
      html: '<strong>Tempo (min) = ((Capacità mAh / 1000) * Fattore di Sicurezza) / Consumo Ampere * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Ad esempio, se hai una batteria da 2200 mAh, vuoi atterrare al 20% (sicurezza 0.8) e il tuo drone consuma una media di 15 Ampere, il calcolo sarebbe: (2.2 * 0.8) / 15 * 60 = 7.04 minuti di volo sicuro.',
    },
    {
      type: 'title',
      text: 'Ottimizzazione del Peso ed Efficienza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esiste un punto di rendimento decrescente aggiungendo batterie più grandi. Raddoppiare la capacità della batteria non raddoppia il tempo di volo, poiché la batteria stessa aggiunge peso. Quel peso extra richiede che i motori girino più velocemente e, quindi, consumino più corrente. A un certo punto, il peso aggiuntivo consuma più energia di quella che apporta, riducendo l\'efficienza generale del sistema.',
    },
    {
      type: 'paragraph',
      html: 'I piloti esperti cercano il perfetto equilibrio tra <em>Disc Loading</em> (carico del disco delle eliche) e capacità della batteria per massimizzare quello che chiamiamo "tempo di missione utile".',
    },
    {
      type: 'title',
      text: 'Differenze tra Tipi di Droni',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Micro Dron (Whoops):</strong> Consumano appena 2-5 Ampere, ma le loro batterie sono da 300-500 mAh. Il tempo è solitamente breve (3-4 min) a causa della bassa inerzia e dell\'alta rotazione.',
    },
    {
      type: 'paragraph',
      html: '<strong>Droni da Corsa 5":</strong> Consumi brutali in gara (fino a 120A nei picchi), esaurendo una batteria da 1300 mAh in appena 2 minuti di pura adrenalina.',
    },
    {
      type: 'paragraph',
      html: '<strong>Droni Long Range:</strong> Ottimizzati per il GPS e il volo efficiente. Usano celle agli ioni di litio (Li-Ion) che hanno una densità energetica maggiore rispetto alle LiPo, consentendo voli da 30 a 60 minuti con amperaggi molto contenuti.',
    },
    {
      type: 'tip',
      html: 'Passare a eliche con meno passo (pitch) può aumentare il tempo di volo a scapito della velocità massima e della risposta. È la regolazione più economica ed efficace per guadagnare il 10-15% di autonomia.',
    },
    {
      type: 'title',
      text: 'Manutenzione e Conservazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Affinché i calcoli di questo strumento siano accurati, le tue batterie devono essere in buono stato. Una batteria con alta resistenza interna si scalderà eccessivamente e "mentirà" sulla sua capacità reale. Conserva sempre le tue batterie al voltaggio di stoccaggio (3.8V-3.85V per cella) se non volerai per più di 48 ore.',
    },
    {
      type: 'paragraph',
      html: 'In conclusione, la gestione dell\'energia è l\'arte di bilanciare fisica, chimica e matematica. Usa il nostro calcolatore regolarmente per pianificare le tue sessioni di volo e non dimenticare mai che in aria, il tempo è la risorsa più preziosa. Buoni voli e atterraggi sicuri!',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'EASA - Drone Regulations', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot Wiki', url: 'https://ardupilot.org/copter/' },
    { name: 'Battery University', url: 'https://batteryuniversity.com/' },
  ],
  howTo: howToSteps,
  schemas,
};
