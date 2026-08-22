import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calcolatore-motore-elica-drone';
const title = 'Calcolatore Motore ed Elica per Droni';
const description = 'Stima la spinta del motore, i RPM sotto carico, la velocità del passo dell elica, potenza e corrente da KV, tensione batteria, geometria e peso del drone.';

const ui = {
  "presetsHeader": "Scegli un profilo di volo",
  "presetTinyCruiser": "Micro cruiser 3.5 pollici",
  "presetFreestyle": "Freestyle 5 pollici",
  "presetLongRange": "Long range 7 pollici",
  "presetCinelifter": "Cinelifter 8 motori",
  "unitHeader": "Unità di misura",
  "metricUnit": "Metrico",
  "imperialUnit": "Imperiale",
  "setupHeader": "Propulsione e telaio",
  "motorKvLabel": "Costante motore KV (RPM/V)",
  "batteryVoltageLabel": "Tensione batteria",
  "propDiameterLabel": "Diametro elica",
  "propPitchLabel": "Passo elica",
  "bladeCountLabel": "Numero pale",
  "motorCountLabel": "Numero motori",
  "droneWeightLabel": "Peso in ordine di volo",
  "benchDataHeader": "Punto di prova del produttore",
  "benchThrustLabel": "Spinta per motore",
  "benchVoltageLabel": "Tensione di prova",
  "optionalLabel": "Opzionale",
  "twoBlades": "2 pale",
  "threeBlades": "3 pale",
  "fourBlades": "4 pale",
  "twoMotors": "2 motori",
  "fourMotors": "4 motori",
  "sixMotors": "6 motori",
  "eightMotors": "8 motori",
  "resultsHeader": "Rendimento e spinta statica",
  "estimatedLabel": "Stima fisica teorica.",
  "benchBasedLabel": "Calibrato su banco di prova.",
  "loadedRpmLabel": "Velocità sotto carico",
  "pitchSpeedLabel": "Velocità teorica avanzamento",
  "thrustPerMotorLabel": "Spinta per motore",
  "totalThrustLabel": "Spinta statica totale",
  "totalPowerLabel": "Potenza stimata",
  "totalCurrentLabel": "Corrente stimata",
  "thrustMarginLabel": "Margine di spinta",
  "hoverThrottleLabel": "Acceleratore in hovering",
  "sceneCaption": "velocità elica sotto carico",
  "underpoweredStatus": "Margine basso",
  "workableStatus": "Margine operativo",
  "headroomStatus": "Ampio margine",
  "underpoweredAdvice": "La spinta totale è inferiore al doppio del peso del drone. Attesa capacità di recupero limitata e poca tolleranza al vento.",
  "workableAdvice": "Riserva pratica per volo normale. Verificare la temperatura di motori ed ESC dopo un hovering prolungato.",
  "headroomAdvice": "Generosa riserva di spinta statica. Migliora la reattività ma richiede maggiore corrente agli ESC.",
  "sourceNote": "Il punto di prova calibra solo la spinta. Potenza e corrente rimangono stime teoriche.",
  "modelSourceNote": "Nessun dato di banco. La spinta utilizza il modello fisico teorico.",
  "manufacturerNote": "Utilizzare preferibilmente dati di banco misurati con lo stesso motore ed elica.",
  "modelNote": "Spinta, potenza e corrente sono stime. I risultati reali dipendono dalla densità dell aria e dalle perdite.",
  "safetyNote": "Non sostituire mai questo calcolatore a un banco di prova reale. Verificare i limiti elettrici prima del volo.",
  "thrustAxisLabel": "Direzione spinta",
  "weightAxisLabel": "Peso drone",
  "clearBenchData": "Cancella punto di prova"
};

const faq = [
  {
    "question": "Cosa calcola questo strumento per motore ed elica per droni?",
    "answer": "Stima RPM sotto carico, velocità teorica di avanzamento, spinta statica per motore e totale, potenza e corrente da KV, tensione, geometria elica e peso."
  },
  {
    "question": "Come abbinare motore ed elica per droni?",
    "answer": "Iniziare dalle raccomandazioni del produttore. Confrontare la spinta totale con il peso in ordine di volo e verificare su banco prima di volare."
  },
  {
    "question": "Perché un punto di prova del produttore è più preciso?",
    "answer": "Considera la geometria reale e le perdite dell elica. Il calcolatore scala la spinta alla tensione selezionata."
  },
  {
    "question": "In che modo la dimensione dell elica influisce sulla spinta?",
    "answer": "La spinta statica dipende dal diametro e dai RPM. Un elica più grande sposta più aria ma richiede più coppia dal motore."
  },
  {
    "question": "Questo calcolatore garantisce la sicurezza di volo?",
    "answer": "No. È uno strumento di progettazione. Verificare corrente e temperatura su banco di prova prima del volo."
  }
];

const howTo = [
  {
    "name": "Scegliere un profilo di volo",
    "text": "Selezionare un preset per caricare valori iniziali coerenti per KV, tensione, elica e peso."
  },
  {
    "name": "Inserire dati telaio ed elica",
    "text": "Inserire il peso in ordine di volo e le specifiche di motore ed elica in unità metriche o imperiali."
  },
  {
    "name": "Aggiungere un punto di misurazione",
    "text": "Se si dispone di dati di banco, inserire spinta misurata e tensione di prova per calibrare il modello."
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Principi di abbinamento motore ed elica per droni',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'L accoppiamento motore elica è un equilibrio tra velocità di rotazione, diametro, passo, tensione e coppia. Questo strumento valuta la spinta statica e il consumo elettrico.',
  },
  {
    type: 'title',
    text: 'Risultati mostrati',
    level: 2,
  },
  {
    type: 'table',
    headers: ["Risultato","Significato"],
    rows: [["Velocità sotto carico","Stima RPM a vuoto ridotta dal fattore di carico"],["Spinta statica","Spinta per motore e spinta totale della configurazione"],["Margine di spinta","Spinta statica totale rispetto al peso del drone"],["Potenza e corrente","Richiesta elettrica stimata per la tensione selezionata"]],
  },
  {
    type: 'title',
    text: 'Come usare il calcolatore',
    level: 2,
  },
  {
    type: 'list',
    items: ["Inserire KV motore e tensione batteria.","Scegliere diametro, passo, numero pale e motori.","Aggiungere eventuali dati di banco del produttore.","Verificare temperatura e corrente su banco prima di volare."],
  },
  {
    type: 'title',
    text: 'Importanza dei dati reali',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La spinta dell elica dipende dalla densità dell aria e dalla geometria. Un dato di banco reale offre la calibrazione più accurata.',
  },
  {
    type: 'tip',
    title: 'Piano di test',
    html: 'Eseguire un test su banco misurando corrente e temperatura prima del primo volo.',
  },
];

const schemas: DroneMotorPropellerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
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
    step: howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMotorPropellerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography: BIBLIOGRAPHY_ITEMS,
  howTo,
  schemas,
};
