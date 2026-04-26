import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planificador-vuelo-gsd';
const title = 'Planificador de Vuelo GSD: Calculadora de Distancia de Muestreo Terrestre';
const description = 'Calcula la Distancia de Muestreo Terrestre (GSD) para misiones de fotogrametría. Soporte para DJI, Autel y cámaras personalizadas. Planificación de vuelo con indicadores de calidad visual.';

const faqItems = [
  {
    question: '¿Qué es la Distancia de Muestreo Terrestre (GSD)?',
    answer: 'La GSD es la distancia en el suelo representada por un píxel en tu imagen. Una GSD más baja significa mayor resolución y detalle. Por ejemplo, una GSD de 1 cm/px permite resolver detalles de hasta 1 centímetro, lo cual es crítico para levantamientos topográficos.',
  },
  {
    question: '¿Cómo encuentro las especificaciones de la cámara de mi drone?',
    answer: 'Consulta el manual de tu drone para conocer las dimensiones del sensor y la distancia focal. Alternativamente, utiliza nuestros preajustes de cámara para modelos populares como el DJI Mavic 3E o Autel EVO II. Para cámaras personalizadas, mide el tamaño del sensor en las especificaciones de tu lente.',
  },
  {
    question: '¿Qué GSD necesito para diferentes tipos de misiones?',
    answer: 'Topografía de alta precisión: 1-2 cm/px. Cartografía estándar: 2-5 cm/px. Inspección y monitoreo: 5-10 cm/px. Reconocimientos visuales: 10+ cm/px. Elige basándote en los requisitos de precisión de tu proyecto.',
  },
  {
    question: '¿Qué es el solape de imagen y por qué es importante?',
    answer: 'El solape es el porcentaje de área que aparece en fotos consecutivas. Un solape alto (60-80%) asegura una cobertura completa y mejora la calidad del modelo 3D. El solape frontal afecta al espaciado de las fotos en la línea de vuelo; el solape lateral afecta al número de líneas de vuelo necesarias.',
  },
  {
    question: '¿Cómo calculo la altitud de vuelo ideal?',
    answer: 'Utiliza esta calculadora: GSD deseada × distancia focal ÷ ancho del sensor = altitud. La calculadora hace esto automáticamente y muestra la altitud máxima segura para mantener la precisión deseada y evitar el desenfoque por movimiento.',
  },
];

const howToSteps = [
  {
    name: 'Seleccionar o Configurar Cámara',
    text: 'Elige entre modelos preconfigurados (DJI Mavic 3E, Autel EVO II, etc.) o introduce las dimensiones del sensor y la distancia focal manualmente. Los preajustes cargan todos los parámetros al instante.',
  },
  {
    name: 'Establecer Altitud de Vuelo',
    text: 'Usa el control deslizante de altitud para ajustar la altura sobre el nivel del suelo (AGL). Observa cómo se actualiza la GSD en tiempo real para ver cómo la altitud afecta la resolución de la imagen.',
  },
  {
    name: 'Definir Requisitos de Solape',
    text: 'Establece los porcentajes de solape frontal y lateral. Un solape mayor asegura una cobertura completa pero aumenta el tiempo de la misión y el número de imágenes.',
  },
  {
    name: 'Revisar Resultados y Exportar',
    text: 'Comprueba la GSD, el área de cobertura y la clasificación de precisión. Genera un informe PDF rápido para adjuntarlo a tu plan de vuelo oficial.',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    
    configuration: 'Configuración',
    cameraSelection: 'Selección de cámara',
    manualMode: 'Configuración manual',
    sensorConfig: 'Configuración del sensor',
    width: 'Ancho',
    height: 'Alto',
    focalLength: 'Distancia focal',
    imageResolution: 'Resolución de imagen',
    w: 'W',
    h: 'H',
    px: 'px',
    altitudeAgl: 'Altitud (AGL)',
    overlapSettings: 'Configuración de solape',
    forward: 'Frontal',
    lateral: 'Lateral',
    missionArea: 'Área de misión',
    totalAreaToSurvey: 'Área total a relevar',
    hectareHint: '1 ha = 10.000 m²',
    inverseCalc: 'Cálculo inverso',
    targetGsd: 'GSD deseada',
    maxAltitude: 'Altitud máxima',
    reset: 'Restablecer',

    
    results: 'Resultados',
    gsdResult: 'Distancia de muestreo terrestre',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Alta prec.',
    standard: 'Estándar',
    inspection: 'Inspección',
    visual: 'Visual',
    coveragePerImage: 'Cobertura por imagen',
    area: 'Área',
    spacing: 'Espaciado',
    flightDir: 'Vuelo →',
    missionMetrics: 'Métricas de misión',
    images: 'Imágenes',
    shots: 'fotos',
    flightLines: 'Líneas de vuelo',
    lines: 'líneas',
    flightTime: 'Tiempo de vuelo',
    min: 'min',
    dataVolume: 'Volumen de datos',
    gb: 'GB',
    copyShareLink: 'Copiar enlace',
    downloadReport: 'Descargar informe',
    copiedToClipboard: '¡Copiado!',
    metric: 'Métrica',
    imperial: 'Imperial',

    
    classHighPrecision: 'Topografía de alta precisión',
    classStandard: 'Cartografía estándar',
    classInspection: 'Inspección y monitoreo',
    classVisual: 'Reconocimiento visual',
    ultraHighResAlert: 'Resolución ultra alta: Asegure suficiente almacenamiento y procesamiento',
    lowOverlapAlert: 'Solape frontal inferior al 60%: Puede afectar la calidad del modelo 3D',
    largeDatasetAlert: 'Conjunto de datos muy grande: Considere dividir en varios vuelos',

    
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'Planificador de Vuelo GSD: La Calculadora Completa de Fotogrametría',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>Distancia de Muestreo Terrestre (GSD)</strong> es la métrica más importante en la fotogrametría con drones. Un error de cálculo puede desperdiciar un día entero de vuelo y costar miles en pérdida de productividad. Esta calculadora elimina ese riesgo.',
    },
    {
      type: 'title',
      text: 'Por qué la GSD es Importante para Profesionales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ya sea que estés realizando levantamientos de terrenos, creando modelos 3D o monitoreando infraestructuras, la GSD determina el nivel de detalle que puedes captar. Una misión de 1 cm/px captura detalles que una de 5 cm/px pierde. Pero volar demasiado bajo desperdicia batería y extiende el tiempo de misión innecesariamente.',
    },
    {
      type: 'title',
      text: 'GSD según el Tipo de Misión',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Topografía de Alta Precisión (1-2 cm/px):</strong> Precisión de grado topográfico para parcelas, sitios mineros y proyectos de ingeniería.',
        '<strong>Cartografía Estándar (2-5 cm/px):</strong> Ortomosaicos, monitoreo agrícola y mapas de propósito general.',
        '<strong>Inspección y Monitoreo (5-10 cm/px):</strong> Inspección de edificios, revisión de líneas eléctricas y detección de cambios.',
        '<strong>Reconocimientos Visuales (10+ cm/px):</strong> Reconocimiento de áreas amplias y evaluación visual.',
      ],
    },
    {
      type: 'title',
      text: 'La Fórmula GSD',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Altitud × Ancho del Sensor) / (Distancia Focal × Ancho de Imagen) × 100</code><br/>Esta calculadora se encarga de las matemáticas. Tú te enfocas en la misión.',
    },
    {
      type: 'title',
      text: 'Solape: Por qué el 60-80% es el Punto Ideal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un solape bajo (20-40%) ahorra batería pero arriesga huecos en la cobertura. Un solape alto (80%+) garantiza una cobertura completa pero extiende el tiempo de misión. El <strong>rango del 60-80%</strong> es el estándar profesional: asegura una reconstrucción 3D completa sin redundancia excesiva.',
    },
    {
      type: 'title',
      text: 'Planifica Mejores Misiones con Datos Reales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antes de cada vuelo, utiliza esta calculadora para determinar: la altitud exacta para tu GSD requerida, cuántas fotos necesitarás, el tiempo total de la misión y si el desenfoque por movimiento es un riesgo. Con estos datos, ejecutarás misiones precisas y evitarás errores costosos.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
