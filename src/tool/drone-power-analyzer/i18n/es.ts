import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'analizador-potencia-dron';
const title = 'Analizador de Potencia de Dron: Calculadora de Relación Empuje y Peso para FPV';
const description = 'Calcula la relación empuje-peso crítica para tu montaje de drone FPV. Obtén recomendaciones instantáneas de perfil de vuelo, medidor de potencia visual y optimiza para cine, freestyle o carreras.';

const faqItems = [
  {
    question: '¿Qué es la relación empuje-peso y por qué es importante?',
    answer: 'La relación empuje-peso es el empuje total que puede producir tu drone dividido por su peso total al despegue (AUW). Es la métrica más importante que determina cómo se sentirá el drone al volar: desde lento y estable (cinematografía) hasta ultra-reactivo (carreras).',
  },
  {
    question: '¿Cuál es el punto ideal ("sweet spot") para vuelo freestyle?',
    answer: 'Para un vuelo freestyle fluido, el punto ideal está entre 4:1 y 6:1. Una relación de 4:1 ofrece una agilidad excelente con buena estabilidad, mientras que 6:1 es extremadamente reactivo pero requiere más delicadeza con el gas en espacios reducidos.',
  },
  {
    question: '¿Puedo usar esto para montajes de cinematografía?',
    answer: 'Sí. Para tomas cinematográficas fluidas y lentas, busca una relación de 2:1 a 3:1. Esto mantiene el drone estable y predecible. Cualquier valor inferior se vuelve difícil de controlar; cualquier valor superior se sentirá demasiado nervioso para movimientos lentos.',
  },
  {
    question: '¿Qué pasa si mi relación es superior a 8 a 1?',
    answer: 'Por encima de 8:1, tu drone es efectivamente una máquina de carreras: extremadamente reactivo y exigente de volar. Solo pilotos experimentados deberían intentar estos montajes. Es ideal para puertas de carrera y velocidad, pero peligroso en interiores.',
  },
  {
    question: '¿Debo incluir el peso de la batería en el AUW?',
    answer: 'Sí. El AUW (All-Up Weight) es el peso total del drone con todos los componentes instalados: chasis, motores, ESCs, controladora, cámara, batería, hélices... todo. Usa los botones de preajustes de batería para añadir el peso al instante.',
  },
];

const howToSteps = [
  {
    name: 'Selecciona la Configuración de Motores',
    text: 'Elige si tu montaje es Quad (4), Hexa (6) u Octo (8) motores. Este multiplicador es crucial para el empuje total.',
  },
  {
    name: 'Introduce el Empuje por Motor',
    text: 'Ingresa el empuje máximo que cada motor puede producir (en gramos). Puedes encontrar esto en las especificaciones del motor o usar los preajustes rápidos.',
  },
  {
    name: 'Establece el Peso Total',
    text: 'Introduce el peso total al despegue (AUW) de tu drone: chasis, motores, batería, cámara, todo. Usa los preajustes de batería para un ajuste de peso instantáneo.',
  },
  {
    name: 'Lee tus Resultados',
    text: 'La calculadora muestra al instante tu relación empuje-peso, la idoneidad del perfil de vuelo (Cine, Freestyle, Carreras) y una recomendación personalizada para tu montaje.',
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
    motorConfiguration: 'Configuración de Motores',
    motorCount: 'Número de Motores',
    thrustPerMotor: 'Empuje por Motor (máx)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Preajustes de Motor Rápidos',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Configuración de Peso',
    auwLabel: 'Peso Total al Despegue (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Cambiar a lbs',
    switchToGrams: 'Cambiar a g',
    batteryPresets: 'Añadir Peso de Batería',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Empuje Total',
    twRatio: 'Relación Empuje-Peso',
    powerMeter: 'Medidor de Potencia',
    flightProfiles: 'Evaluación del Perfil de Vuelo',
    cinematicLabel: 'Cinemático',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Carreras',
    proRacingLabel: 'Carreras Pro',
    suitable: 'Adecuado',
    notSuitable: 'No Adecuado',
    recommendationLabel: 'Recomendación de Estilo de Vuelo',
    recommendation_low: 'Con una relación inferior a 2:1, tu drone tendrá problemas de estabilidad. Considera reducir el peso o mejorar los motores para un mejor rendimiento.',
    recommendation_cinematic: 'Con una relación de {ratio}:1, es ideal para cinematografía de carga pesada con movimientos suaves y controlados. Perfecto para trabajos de cámara lentos y deliberados.',
    recommendation_freestyle: 'Con una relación de {ratio}:1, este es el punto ideal para el vuelo freestyle. Excelente agilidad manteniendo la estabilidad para trucos y maniobras.',
    recommendation_racing: 'Con una relación de {ratio}:1, estamos en territorio de freestyle de alto rendimiento. El control del gas es crítico en espacios cerrados y maniobras de alta velocidad.',
    recommendation_extreme: 'Con una relación de {ratio}:1, esto es una máquina de carreras. Extremadamente reactivo, solo para pilotos experimentados en áreas abiertas.',
    compareMode: 'Comparar Montajes',
    scenario1: 'Montaje A',
    scenario2: 'Montaje B',
    addComparison: 'Añadir Comparación',
    tooltipTWRatio: 'La relación empuje-peso es el empuje total dividido por el peso del drone. Una relación más alta significa una aceleración más rápida y un control más reactivo.',
    tooltipFreestyle: 'El punto ideal para el vuelo freestyle es una relación de 4:1 a 6:1, proporcionando el mejor equilibrio entre agilidad y control.',
    badge_unstable: 'Inestable',
    badge_cinematic: 'Cinemático',
    badge_sweetSpot: 'Punto Ideal',
    badge_racing: 'Carreras',
    badge_extreme: 'Extremo',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'Entendiendo la Relación Empuje-Peso para Drones FPV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>relación empuje-peso</strong> es quizás la métrica más crítica en la construcción de drones FPV. Sin embargo, muchos pilotos la pasan por alto, lo que lleva a montajes que no se comportan como se esperaba. Esta calculadora desmitifica el cálculo y te muestra exactamente cómo se sentirá tu drone al volar.',
    },
    {
      type: 'title',
      text: 'Por qué es Importante la Relación Empuje-Peso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La relación de tu drone determina tres cosas fundamentales: <strong>estabilidad</strong>, <strong>capacidad de respuesta</strong> y <strong>velocidad</strong>. Una relación de 2:1 se siente lenta y estable. Una de 6:1 se siente ágil y nerviosa. Una de 10:1 es una máquina de carreras. Entender dónde se sitúa tu montaje en este espectro te ayuda a elegir el estilo de vuelo adecuado y establecer expectativas realistas.',
    },
    {
      type: 'title',
      text: 'Perfiles de Vuelo Explicados',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cinemático (2:1 - 4:1)</strong>: Pesado, estable, lento. Ideal para movimientos de cámara suaves y montajes que transportan carga.',
        '<strong>Freestyle (3.5:1 - 6.5:1)</strong>: El punto de equilibrio ideal. Suficientemente reactivo para trucos, suficientemente estable para el control.',
        '<strong>Carreras (5:1 - 8:1)</strong>: Rápido y ágil. Diseñado para puertas de velocidad y maniobras agresivas.',
        '<strong>Carreras Pro (7:1+)</strong>: Rendimiento extremo. Solo para pilotos expertos en áreas abiertas.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo Calcular la Relación Empuje-Peso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La fórmula es sencilla: <strong>relación = (Empuje por Motor × Número de Motores) / Peso Total al Despegue</strong>. Por ejemplo, un Quad con motores de 600g (2.400g de empuje total) que pesa 800g produce una relación de 3:1. Esto es territorio de freestyle.',
    },
    {
      type: 'title',
      text: 'Eligiendo la Relación Adecuada para tu Montaje',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pregúntate: <em>¿Qué voy a volar?</em> ¿Tomas cinemáticas lentas? ¿Trucos de freestyle agresivos? ¿Carreras de alta velocidad? Tu respuesta determina tu relación ideal. La mayoría de los pilotos de FPV terminan entre 4:1 y 6:1 porque ofrece el mejor compromiso entre control y emoción.',
    },
    {
      type: 'paragraph',
      html: 'Recuerda: una relación más alta no significa "mejor". Significa "más reactivo". En un quad de carreras, eso es esencial. En un montaje cinematográfico, es un inconveniente. Elige deliberadamente.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
