import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'calculadora-tiempo-vuelo-dron';
const title = 'Calculadora Tiempo de Vuelo Drones para Estimación de Autonomía LiPo LiIon';
const description = 'Calcula cuánto tiempo puede volar tu dron basado en la capacidad mAh y consumo. Optimiza tus baterías LiPo para vuelos seguros y máxima duración.';

const faqItems = [
  {
    question: '¿Por qué el tiempo real es menor al calculado?',
    answer: 'La calculadora estima un consumo constante. Las maniobras bruscas, el viento en contra y el desgaste de la batería pueden reducir el tiempo real hasta en un 30%.',
  },
  {
    question: '¿A qué voltaje debo aterrizar mi dron?',
    answer: 'Lo ideal es aterrizar cuando el voltaje baje a 3.5V - 3.6V por celda (en reposo). Esto equivale aproximadamente al 20% de capacidad restante recomendada.',
  },
  {
    question: '¿Son mejores las baterías LiPo o Li-Ion para drones?',
    answer: 'Las LiPo ofrecen mucha potencia instantánea (ideal para carreras y acrobacias). Las Li-Ion tienen más duración pero menos potencia (ideal para vuelos largos y tranquilos).',
  },
  {
    question: '¿Cómo afecta el número de celdas (S) al tiempo de vuelo?',
    answer: 'Más celdas aumentan el voltaje y la potencia, pero también el peso. Si los motores están optimizados para ese voltaje, pueden ser más eficientes, pero no garantizan más tiempo por sí solas.',
  },
];

const howToSteps = [
  {
    name: 'Identifica la capacidad',
    text: 'Mira la etiqueta de tu batería y busca el valor en mAh (ej. 1500, 2200, 4500).',
  },
  {
    name: 'Estima el consumo',
    text: 'Introduce el amperaje medio que consume tu dron. Puedes verlo en la telemetría del OSD tras un vuelo de prueba.',
  },
  {
    name: 'Ajusta el margen',
    text: 'Recomendamos dejar un 20% (ajustar al 80%) para proteger la batería y tener margen de aterrizaje.',
  },
  {
    name: 'Obtén el resultado',
    text: 'Visualiza el tiempo exacto en minutos y segundos que puedes permanecer en el aire con seguridad.',
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
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Referencias Bibliográficas',
  ui: {
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias Bibliográficas',
    batterySpecs: 'Especificaciones Batería',
    capacity: 'Capacidad',
    voltage: 'Voltaje (Celdas S)',
    safetyMargin: 'Margen de Seguridad',
    landingHint: 'Aterrizar con 3.5V - 3.7V por celda.',
    consumptionDynamics: 'Dinámica de Consumo',
    averageConsumption: 'Consumo Medio',
    powerWatts: 'Potencia (Watios)',
    efficiencyHint: 'Al cambiar Amperios, los Watios se recalculan según el voltaje S.',
    estimatedEfficiency: 'Eficiencia Estimada',
    typicalEfficiencyHint: 'Típico: 4-6 (Racing), 8-12 (Cinematic/Long Range).',
    safeFlight: 'Vuelo Seguro',
    totalEnergy: 'Energía Total',
    theoreticalTime: 'Tiempo Teórico (0%)',
    co2Footprint: 'Huella CO2',
    autonomyChart: 'Gráfica de Autonomía',
    chartSubtitle: 'Amperios (A) vs. Tiempo (min)',
    chartLabel: 'Minutos',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Tiempo de Vuelo para Drones: Guía Completa de Autonomía',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La autonomía es, probablemente, el factor más crítico en el diseño y operación de cualquier aeronave no tripulada. Ya seas un piloto de drones FPV de carreras, un profesional de la fotografía aérea o un aficionado a los modelos de largo alcance, saber con precisión cuánto tiempo puede permanecer tu equipo en el aire es vital para la seguridad y el éxito de la misión. Nuestra <strong>calculadora de tiempo de vuelo</strong> utiliza las variables fundamentales de capacidad de batería y consumo de corriente para ofrecerte una estimación realista y segura.',
    },
    {
      type: 'title',
      text: 'Capacidad de la Batería: Los mAh Explicados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La capacidad de una batería se mide habitualmente en miliamperios-hora (mAh). Esta cifra nos indica cuánta carga eléctrica es capaz de almacenar la batería. Por ejemplo, una batería de 1500 mAh puede suministrar teóricamente 1500 miliamperios durante una hora completa. En el mundo de los drones, donde los consumos son extremadamente elevados, solemos hablar de Amperios (A). 1000 mAh equivale exactamente a 1 Ah (Amperio-hora).',
    },
    {
      type: 'paragraph',
      html: 'Sin embargo, la capacidad bruta no es el único factor. El voltaje (determinado por el número de celdas o \'S\') influye directamente en la potencia total (Watios), pero para el cálculo del tiempo basado en el consumo de los motores, la relación Ah/Amperios es la métrica más directa y utilizada por los ingenieros de vuelo.',
    },
    {
      type: 'title',
      text: 'El Consumo de Corriente: Amperaje en Vuelo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El consumo de los motores es la variable que más fluctúa durante un vuelo. No es lo mismo mantener un dron en estacionario (hover) que realizar maniobras acrobáticas agresivas. Cada motor y hélice tiene una curva de eficiencia. Cuando aceleras al máximo, el amperaje se dispara, reduciendo drásticamente el tiempo de vida de la batería.',
    },
    {
      type: 'list',
      items: [
        'Vuelo en Estacionario: El consumo es mínimo y constante, ideal para fotografía.',
        'Vuelo de Crucero: El consumo aumenta ligeramente debido a la resistencia aerodinámica.',
        'Vuelo Agresivo/FPV: Los picos de corriente pueden triplicar el consumo medio en cuestión de segundos.',
        'Peso del Dron: Cada gramo adicional requiere más revoluciones de motor para generar empuje, elevando el amperaje.',
      ],
    },
    {
      type: 'title',
      text: 'Regla de Seguridad del 80%: Proteger la Química de Lipo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Volar una batería LiPo (Polímero de Litio) hasta el 0% de su capacidad es la forma más rápida de destruirla y, lo que es peor, de provocar un accidente. Químicamente, las celdas sufren daños irreversibles si su voltaje cae por debajo de un umbral crítico (normalmente 3.0V - 3.2V por celda).',
    },
    {
      type: 'paragraph',
      html: 'Por ello, aplicamos siempre una <strong>regla de margen de seguridad</strong>. Nuestra calculadora permite ajustar este valor, pero lo recomendable es aterrizar cuando aún queda un 20% de carga. Esto no solo prolonga la vida útil de tus costosas baterías por cientos de ciclos, sino que te garantiza una reserva de potencia vital en caso de ráfagas de viento inesperadas o si necesitas abortar el aterrizaje y volver a intentarlo.',
    },
    {
      type: 'tip',
      html: 'Las baterías de los drones son muy sensibles al frío. En invierno, la resistencia interna de la LiPo aumenta, lo que provoca una caída de voltaje más rápida. Siempre calienta tus baterías antes de despegar si la temperatura ambiente es inferior a 15 grados.',
    },
    {
      type: 'title',
      text: 'Fórmula Matemática del Vuelo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aunque nuestra herramienta hace el trabajo pesado por ti, es interesante conocer la lógica detrás del cálculo. La fórmula básica es:',
    },
    {
      type: 'paragraph',
      html: '<strong>Tiempo (min) = ((Capacidad mAh / 1000) * Factor de Seguridad) / Consumo Amperios * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Por ejemplo, si tienes una batería de 2200 mAh, quieres aterrizar al 20% (seguridad 0.8) y tu dron consume una media de 15 Amperios, el cálculo sería: (2.2 * 0.8) / 15 * 60 = 7.04 minutos de vuelo seguro.',
    },
    {
      type: 'title',
      text: 'Optimización del Peso y Eficiencia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existe un punto de retorno disminuido al añadir baterías más grandes. Doblar la capacidad de la batería no dobla el tiempo de vuelo, ya que la batería misma añade peso. Ese peso extra requiere que los motores giren más rápido y, por tanto, consuman más corriente. En algún momento, el peso adicional consume más energía de la que aporta, reduciendo la eficiencia general del sistema.',
    },
    {
      type: 'paragraph',
      html: 'Los pilotos experimentados buscan el equilibrio perfecto entre el <em>Disc Loading</em> (carga del disco de las hélices) y la capacidad de la batería para maximizar lo que llamamos \'tiempo útil de misión\'.',
    },
    {
      type: 'title',
      text: 'Diferencias entre Tipos de Drones',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Micro Drones (Whoops):</strong> Usan consumos de apenas 2-5 Amperios, pero sus baterías son de 300-500 mAh. El tiempo suele ser corto (3-4 min) debido a la baja inercia y alta rotación.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drones de Carreras 5":</strong> Consumos brutales en carrera (hasta 120A en picos), lo que agota una batería de 1300 mAh en apenas 2 minutos de adrenalina pura.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drones Long Range:</strong> Optimizados para el GPS y vuelo eficiente. Usan celdas de Ion-Litio (Li-Ion) que tienen más densidad energética que las LiPo, permitiendo vuelos de 30 a 60 minutos con amperajes muy contenidos.',
    },
    {
      type: 'tip',
      html: 'Cambiar a unas hélices con menos paso (pitch) puede aumentar tu tiempo de vuelo a costa de velocidad punta y respuesta. Es el ajuste más barato y efectivo para ganar un 10-15% de autonomía.',
    },
    {
      type: 'title',
      text: 'Mantenimiento y Almacenamiento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para que los cálculos de esta herramienta sean precisos, tus baterías deben estar en buen estado. Una batería con alta resistencia interna se calentará en exceso y "mentirá" sobre su capacidad real. Guarda siempre tus baterías en voltaje de almacenamiento (3.8V-3.85V por celda) si no vas a volar en más de 48 horas.',
    },
    {
      type: 'paragraph',
      html: 'En conclusión, la gestión de la energía es el arte de equilibrar la física, la química y las matemáticas. Usa nuestra calculadora de forma regular para planificar tus sesiones de vuelo y nunca olvides que, en el aire, el tiempo es el recurso más valioso. ¡Buenos vuelos y aterrizajes seguros!',
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
