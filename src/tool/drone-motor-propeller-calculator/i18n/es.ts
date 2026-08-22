import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculadora-empuje-motor-helices-dron';
const title = 'Calculadora de Empuje de Motor y Hélices para Drones';
const description = 'Calcula el empuje estático del motor, RPM bajo carga, velocidad de paso de hélice, potencia y consumo eléctrico según KV, voltaje de batería, geometría y peso del dron.';

const ui = {
  presetsHeader: 'Elige un perfil de vuelo',
  presetTinyCruiser: 'Crucero ligero 3.5 pulgadas',
  presetFreestyle: 'Freestyle 5 pulgadas',
  presetLongRange: 'Long range 7 pulgadas',
  presetCinelifter: 'Cinelifter 8 motores',
  unitHeader: 'Unidades de medida',
  metricUnit: 'Métrico',
  imperialUnit: 'Imperial',
  setupHeader: 'Grupo motopropulsor y chasis',
  motorKvLabel: 'Constante motor KV (RPM/V)',
  batteryVoltageLabel: 'Voltaje de la batería',
  propDiameterLabel: 'Diámetro de hélice',
  propPitchLabel: 'Paso de la hélice',
  bladeCountLabel: 'Número de palas',
  motorCountLabel: 'Número de motores',
  droneWeightLabel: 'Peso total en orden de vuelo',
  benchDataHeader: 'Punto de prueba de fabricante',
  benchThrustLabel: 'Empuje por motor',
  benchVoltageLabel: 'Voltaje de prueba',
  optionalLabel: 'Opcional',
  twoBlades: '2 palas',
  threeBlades: '3 palas',
  fourBlades: '4 palas',
  twoMotors: '2 motores',
  fourMotors: '4 motores',
  sixMotors: '6 motores',
  eightMotors: '8 motores',
  resultsHeader: 'Rendimiento y sustentación estática',
  estimatedLabel: 'Estimación basada en física pura.',
  benchBasedLabel: 'Ajustado con banco de pruebas.',
  loadedRpmLabel: 'Velocidad en carga',
  pitchSpeedLabel: 'Velocidad teórica de avance',
  thrustPerMotorLabel: 'Empuje por motor',
  totalThrustLabel: 'Empuje estático total',
  totalPowerLabel: 'Potencia estimada',
  totalCurrentLabel: 'Corriente estimada',
  thrustMarginLabel: 'Margen de elevación',
  hoverThrottleLabel: 'Acelerador en estacionario',
  sceneCaption: 'velocidad de giro bajo carga',
  underpoweredStatus: 'Margen escaso',
  workableStatus: 'Margen operativo',
  headroomStatus: 'Margen óptimo',
  underpoweredAdvice: 'El empuje total no llega a duplicar el peso de la aeronave. La capacidad de recuperación en maniobras será limitada y habrá poco margen frente al viento o el sag de batería.',
  workableAdvice: 'Configuración equilibrada para vuelo regular. Se recomienda verificar la temperatura de motores y variadores tras un estacionario prolongado antes de dar por definitivo el cálculo.',
  headroomAdvice: 'Reserva de potencia amplia y excelente sustentación estática. Mejora la autoridad de control en maniobras exigentes, pero exige mayor corriente a los variadores.',
  sourceNote: 'El punto de prueba calibra el empuje estático. La potencia y corriente siguen estimaciones teóricas.',
  modelSourceNote: 'Sin datos de laboratorio. El empuje se calcula mediante el modelo físico de coeficientes.',
  manufacturerNote: 'Utiliza preferentemente datos de banco medidos con el mismo motor, hélice y voltaje.',
  modelNote: 'Los valores son estimaciones. El empuje real depende de la geometría de la hélice, densidad del aire, eficiencia del motor y caídas de voltaje.',
  safetyNote: 'Esta calculadora ofrece una estimación de diseño. Comprueba siempre los límites de corriente de variadores y batería en banco de pruebas antes de volar.',
  thrustAxisLabel: 'Dirección de empuje',
  weightAxisLabel: 'Peso de la aeronave',
  clearBenchData: 'Borrar punto de prueba',
};

const faq = [
  {
    question: '¿Qué calcula esta herramienta de empuje de motor y hélice para drones?',
    answer: 'Estima las RPM reales bajo carga, la velocidad teórica de avance por paso, el empuje estático por motor, el empuje total, la potencia consumida y el amperaje requerido a partir de las KV, el voltaje, las dimensiones de la hélice y el peso en orden de vuelo.',
  },
  {
    question: '¿Cómo elegir la combinación ideal de motor y hélice para mi dron?',
    answer: 'Comienza consultando las especificaciones sugeridas por el fabricante para el tamaño de chasis. Relaciona el empuje total con el peso total asegurando un margen de sustentación adecuado y verifica la corriente máxima en banco antes de volar.',
  },
  {
    question: '¿Por qué un punto de prueba de fabricante mejora el cálculo?',
    answer: 'Los datos de banco de pruebas miden la respuesta real de una hélice específica con sus pérdidas aerodinámicas concretas. La herramienta escala esos datos al voltaje de tu batería, mientras que el modelo teórico sirve como primera aproximación.',
  },
  {
    question: '¿Cómo influye el tamaño de la hélice en el empuje estático?',
    answer: 'El empuje depende fuertemente del diámetro y la velocidad de rotación. Una hélice más grande desplaza más volumen de aire con mayor eficiencia, pero demanda más par motor y consumo a los variadores.',
  },
  {
    question: '¿Sustituye esta calculadora las pruebas físicas en banco de ensayo?',
    answer: 'No. Es una referencia teórica de diseño para proyectar componentes. Debes validar la corriente real, temperatura y empuje medido con instrumental adecuado antes del primer vuelo.',
  },
];

const howTo = [
  {
    name: 'Seleccionar un perfil de vuelo inicial',
    text: 'Haz clic en el ajuste preestablecido más cercano a tu dron para cargar valores orientativos de KV, voltaje, hélice y peso.',
  },
  {
    name: 'Configurar parámetros del grupo motopropulsor',
    text: 'Introduce las KV del motor, voltaje de batería, diámetro, paso, número de palas, cantidad de motores y peso en orden de vuelo. Puedes alternar entre unidades métricas e imperiales.',
  },
  {
    name: 'Añadir datos medidos en banco de pruebas',
    text: 'Si dispones de una medición de laboratorio, indica el empuje por motor y el voltaje al que se obtuvo para recalibrar el modelo.',
  },
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Principios de empuje y acoplamiento motor hélice en multirrotores',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El rendimiento de un dron depende del equilibrio entre las revoluciones del motor, el diámetro de la hélice, el paso aerodinámico, el número de palas y el voltaje suministrado. Esta calculadora proyecta la sustentación estática y la exigencia eléctrica del conjunto motopropulsor para comparar el empuje resultante con el peso total de la aeronave antes de adquirir o montar los componentes.',
  },
  {
    type: 'title',
    text: 'Parámetros evaluados en el análisis',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Métrica', 'Significado técnico'],
    rows: [
      ['Velocidad en carga', 'RPM estimadas aplicando el factor de carga sobre la constante KV teórica'],
      ['Empuje estático', 'Fuerza de elevación por motor y empuje acumulado de todos los rotores'],
      ['Margen de sustentación', 'Relación entre la fuerza ascensional total y el peso de la aeronave'],
      ['Potencia y corriente', 'Demanda energética estimada para la configuración y voltaje seleccionados'],
    ],
  },
  {
    type: 'title',
    text: 'Pasos para calcular el empuje de tu dron',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Introduce las KV del motor y el voltaje nominal de la batería para determinar las RPM bajo carga.',
      'Ajusta las dimensiones de la hélice, el número de palas, la cantidad de motores y el peso total.',
      'Si cuentas con datos de banco de pruebas del fabricante, introdúcelos para ajustar la precisión.',
      'Verifica los límites de amperaje de los variadores ESC y la batería antes del vuelo.',
    ],
  },
  {
    type: 'title',
    text: 'Importancia de los datos de pruebas reales',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La constante de empuje de una hélice varía según la geometría de sus palas y la densidad del aire. Los modelos matemáticos ofrecen una gran orientación inicial, pero incorporar una medición real en banco permite escalar la curva de respuesta con mayor exactitud sin perder transparencia en las hipótesis del cálculo.',
  },
  {
    type: 'tip',
    title: 'Planificación de ensayos de seguridad',
    html: 'Prueba la configuración en banco midiendo corriente y temperatura a diferentes niveles de acelerador. Si observas un incremento brusco de temperatura en el motor o variador, revisa el paso o diámetro de la hélice.',
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
