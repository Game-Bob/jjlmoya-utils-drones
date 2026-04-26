import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'analizzatore-potenza-drone';
const title = 'Analizzatore di Potenza Drone: Calcolatore Rapporto Spinta e Peso per FPV';
const description = 'Calcola il rapporto spinta-peso critico per il tuo drone FPV. Ottieni raccomandazioni istantanee sul profilo di volo, un indicatore di potenza visivo e ottimizza per cinematic, freestyle o racing.';

const faqItems = [
  {
    question: 'Cos\'è il rapporto spinta-peso e perché è importante?',
    answer: 'Il rapporto spinta-peso è la spinta totale che il tuo drone può produrre divisa per il suo peso totale al decollo (AUW). È la metrica più importante che determina come si sentirà il drone in volo: da lento e stabile (cinematografia) a ultra-reattivo (racing).',
  },
  {
    question: 'Qual è il punto ideale ("sweet spot") per il volo freestyle?',
    answer: 'Per un volo freestyle fluido, il punto ideale è tra 4:1 e 6:1. Un rapporto di 4:1 offre un\'eccellente agilità con una buona stabilità, mentre 6:1 è estremamente reattivo ma richiede più precisione con il gas negli spazi stretti.',
  },
  {
    question: 'Posso usarlo per build cinematografiche?',
    answer: 'Sì. Per riprese cinematografiche fluide e lente, punta a un rapporto da 2:1 a 3:1. Questo mantiene il drone stabile e prevedibile. Qualsiasi valore inferiore diventa difficile da controllare; qualsiasi valore superiore risulterà troppo nervoso per movimenti lenti.',
  },
  {
    question: 'Cosa succede se il mio rapporto è superiore a 8:1?',
    answer: 'Sopra 8:1, il tuo drone è a tutti gli effetti una macchina da corsa: estremamente reattivo e impegnativo da pilotare. Solo i piloti esperti dovrebbero tentare queste build. Ottimo per gare di velocità e gate, ma pericoloso al chiuso.',
  },
  {
    question: 'Devo includere il peso della batteria nell\'AUW?',
    answer: 'Sì. L\'AUW (All-Up Weight) è il peso totale del tuo drone con tutti i componenti installati: telaio, motori, ESC, controller di volo, fotocamera, batteria, eliche — tutto. Usa i pulsanti predefiniti della batteria per un calcolo istantaneo.',
  },
];

const howToSteps = [
  {
    name: 'Seleziona la Configurazione Motori',
    text: 'Scegli se la tua build è una configurazione a 4 (Quad), 6 (Hexa) o 8 (Octo) motori. Questo moltiplicatore è fondamentale per la spinta totale.',
  },
  {
    name: 'Inserisci la Spinta del Motore',
    text: 'Inserisci la spinta massima che ogni motore può produrre (in grammi). Puoi trovarla nelle specifiche del motore o usare i preset rapidi.',
  },
  {
    name: 'Imposta il Peso Totale',
    text: 'Inserisci il peso totale al decollo (AUW) del tuo drone: telaio, motori, batteria, fotocamera, tutto. Usa i preset della batteria per una regolazione istantanea del peso.',
  },
  {
    name: 'Leggi i Risultati',
    text: 'Il calcolatore mostra istantaneamente il tuo rapporto spinta-peso, l\'idoneità del profilo di volo (Cinematic, Freestyle, Racing) e una raccomandazione personalizzata.',
  },
];

const schemas: DronePowerAnalyzerLocaleContent['schemas'] = [
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

export const content: DronePowerAnalyzerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    motorConfiguration: 'Configurazione Motori',
    motorCount: 'Numero Motori',
    thrustPerMotor: 'Spinta per Motore (max)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Preset Motori Rapidi',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Configurazione Peso',
    auwLabel: 'Peso Totale al Decollo (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Passa a lbs',
    switchToGrams: 'Passa a g',
    batteryPresets: 'Aggiungi Peso Batteria',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Spinta Totale',
    twRatio: 'Rapporto Spinta-Peso',
    powerMeter: 'Indicatore Potenza',
    flightProfiles: 'Valutazione Profilo di Volo',
    cinematicLabel: 'Cinematic',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Racing',
    proRacingLabel: 'Pro Racing',
    suitable: 'Adatto',
    notSuitable: 'Non Adatto',
    recommendationLabel: 'Raccomandazione Stile di Volo',
    recommendation_low: 'Con un rapporto inferiore a 2:1, il tuo drone avrà problemi di stabilità. Considera di ridurre il peso o potenziare i motori.',
    recommendation_cinematic: 'Con un rapporto di {ratio}:1, questo è ideale per cinematografia heavy-lift con movimenti fluidi e controllati. Perfetto per lavori video lenti e precisi.',
    recommendation_freestyle: 'Con un rapporto di {ratio}:1, questo è il punto ideale per il volo freestyle. Eccellente agilità mantenendo la stabilità per i trick.',
    recommendation_racing: 'Con un rapporto di {ratio}:1, siamo in territorio performance freestyle. La gestione del gas è critica in spazi stretti e manovre ad alta velocità.',
    recommendation_extreme: 'Con un rapporto di {ratio}:1, questa è una macchina da corsa. Estremamente reattiva — solo per piloti esperti in aree aperte.',
    compareMode: 'Confronta Build',
    scenario1: 'Build A',
    scenario2: 'Build B',
    addComparison: 'Aggiungi Confronto',
    tooltipTWRatio: 'Il rapporto spinta-peso è la spinta totale divisa per il peso del drone. Un rapporto più alto significa accelerazione più rapida e controllo più reattivo.',
    tooltipFreestyle: 'Il "punto ideale" per il volo freestyle è un rapporto da 4:1 a 6:1, che offre il miglior equilibrio tra agilità e controllo.',
    badge_unstable: 'Instabile',
    badge_cinematic: 'Cinematic',
    badge_sweetSpot: 'Punto Ideale',
    badge_racing: 'Racing',
    badge_extreme: 'Estremo',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'Capire il Rapporto Spinta-Peso per i Droni FPV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>rapporto spinta-peso</strong> è forse la metrica più critica nella costruzione di droni FPV. Eppure molti piloti la trascurano, portando a build che non si comportano come previsto. Questo calcolatore demistifica il calcolo e ti mostra esattamente come si sentirà la tua build in volo.',
    },
    {
      type: 'title',
      text: 'Perché il Rapporto Spinta-Peso è Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il rapporto del tuo drone determina tre cose fondamentali: <strong>stabilità</strong>, <strong>reattività</strong> e <strong>velocità</strong>. Un rapporto 2:1 sembra pigro e stabile. Un rapporto 6:1 sembra nervoso e agile. Un rapporto 10:1 è una macchina da corsa. Capire dove si posiziona la tua build in questo spettro ti aiuta a scegliere il giusto stile di volo.',
    },
    {
      type: 'title',
      text: 'Profili di Volo Spiegati',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cinematic (2:1 – 4:1)</strong>: Pesante, stabile, lento. Ideale per movimenti fluidi della fotocamera e build con carichi elevati.',
        '<strong>Freestyle (3.5:1 – 6.5:1)</strong>: Il punto di equilibrio ideale. Abbastanza reattivo per i trick, abbastanza stabile per il controllo.',
        '<strong>Racing (5:1 – 8:1)</strong>: Veloce e agile. Progettato per gate di velocità e manovre aggressive.',
        '<strong>Pro Racing (7:1+)</strong>: Prestazioni estreme. Solo per piloti esperti in aree aperte.',
      ],
    },
    {
      type: 'title',
      text: 'Come Calcolare il Rapporto Spinta-Peso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La formula è semplice: <strong>rapporto = (Spinta per Motore × Numero Motori) / Peso Totale al Decollo</strong>. Ad esempio, un Quad con motori da 600g (2.400g di spinta totale) che pesa 800g produce un rapporto 3:1. Questo è territorio freestyle.',
    },
    {
      type: 'title',
      text: 'Scegliere il Rapporto Giusto per la Tua Build',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chiediti: <em>Cosa volerò?</em> Riprese cinematografiche lente? Trick freestyle aggressivi? Gare ad alta velocità? La tua risposta determina il rapporto ideale. La maggior parte dei piloti FPV finisce tra 4:1 e 6:1 perché offre il miglior compromesso tra controllo ed emozione.',
    },
    {
      type: 'paragraph',
      html: 'Ricorda: un rapporto più alto non significa "migliore". Significa "più reattivo". Su un quad da gara, è essenziale. Su una build cinematografica, è un limite. Scegli con consapevolezza.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
