import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculadora-tasa-c-bateria-lipo-dron';
const title = 'Calculadora de Tasa C de Batería LiPo y Descarga Continua para Drones';
const description = 'Calcula la corriente de descarga continua real, tasa C realista, sag de voltaje y seguridad de vuelo para baterías LiPo de drones basándote en la resistencia interna y consumo de motores.';

const ui = {
  title: 'Calculadora de Tasa C de Batería LiPo para Drones',
  subtitle: 'Analiza la descarga continua real, exigencia de burst y sag de voltaje para multirrotores',
  lipoSpecsHeader: 'Especificaciones de la Batería',
  capacityLabel: 'Capacidad (mAh)',
  claimedCRatingLabel: 'Tasa C Anunciada',
  cellCountLabel: 'Número de Celdas (Serie)',
  chemistryLabel: 'Química de la Batería',
  internalResistanceLabel: 'Resistencia Interna por Celda (mΩ)',
  quadSpecsHeader: 'Consumo del Dron',
  motorCountLabel: 'Número de Motores',
  peakMotorCurrentLabel: 'Corriente Pico por Motor (Amperios)',
  auxCurrentLabel: 'Consumo Auxiliar (VTX, FC, Cámara) (Amperios)',
  presetSelectLabel: 'Ajustes Rápidos',
  customPreset: 'Personalizado',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S Freestyle 5 Pulgadas',
  cinewhoopPreset: '4S CineWhoop 3 Pulgadas',
  longRange7Preset: '6S Long Range 7 Pulgadas',
  racing5Preset: '6S Carreras 5 Pulgadas',
  resultsHeader: 'Análisis de Rendimiento y Potencia',
  claimedMaxCurrentLabel: 'Corriente Máxima Anunciada',
  realisticCRatingLabel: 'Tasa C Continua Realista',
  realisticMaxCurrentLabel: 'Corriente Continua Realista',
  totalPeakDrawLabel: 'Consumo Pico Total',
  voltageSagLabel: 'Caída de Tensión Estimada',
  sagNominalVoltageLabel: 'Voltaje Nominal Bajo Carga',
  flightTimeFullThrottleLabel: 'Autonomía a Acelerador Máximo',
  flightTimeHoverLabel: 'Autonomía Estimada en Estacionario',
  safetyStatusLabel: 'Diagnóstico de Seguridad',
  statusOptimalTitle: 'Batería Segura y Óptima',
  statusOptimalDesc: 'La batería suministra la corriente pico holgadamente sin sobrecalentamiento ni sag excesivo. Se garantiza una larga vida útil de las celdas.',
  statusWarningTitle: 'Estrés Térmico y de Voltaje Moderado',
  statusWarningDesc: 'El consumo pico está cerca del límite real de la batería. Espera cierta caída de voltaje en aceleraciones bruscas.',
  statusDangerTitle: 'Alto Riesgo de Sobrecarga y Sag de Voltaje',
  statusDangerDesc: 'El consumo pico supera la capacidad real de la batería. Alto riesgo de sobrecalentamiento, caída severa de voltaje y degradación prematura.',
  lipoVisualizerTitle: 'Visualizador de Estado LiPo en Tiempo Real',
  cellVoltageLabel: 'Voltaje por Celda',
  batteryHealthLabel: 'Estrés de Batería',
  burstRatingRequiredLabel: 'Tasa C de Burst Requerida',
  currentRatioLabel: 'Relación de Carga de Potencia',
};

const faqItems = [
  {
    question: '¿Qué es la tasa C en una batería LiPo de dron?',
    answer: 'La tasa C representa la velocidad máxima de descarga continua en relación con la capacidad de la batería. Por ejemplo, una batería de 1500mAh con 100C puede entregar teóricamente 150 Amperios.',
  },
  {
    question: '¿Por qué la tasa C anunciada suele ser superior a la real?',
    answer: 'Los fabricantes suelen publicitar tasas de ráfaga o valores de marketing. La descarga continua real depende directamente de la resistencia interna de cada celda.',
  },
  {
    question: '¿Cómo afecta la resistencia interna al sag de voltaje y al calor?',
    answer: 'Una alta resistencia interna actúa como un resistor indeseado en la celda. Al exigir alta corriente, esta resistencia provoca una caída de voltaje abrupta y disipa calor excesivo.',
  },
  {
    question: '¿Cómo puedo evitar el sag de voltaje durante vuelos de freestyle?',
    answer: 'Utiliza celdas de baja resistencia interna, selecciona un margen de seguridad de al menos el 15 por ciento sobre el consumo pico y no vueles por debajo de 3.5V por celda en reposo.',
  },
];

const howToSteps = [
  {
    name: 'Seleccionar Ajuste Rápido o Introducir Datos de Batería',
    text: 'Ingresa la capacidad en mAh, la tasa C anunciada, el número de celdas en serie y la resistencia interna promedio por celda.',
  },
  {
    name: 'Configurar el Consumo de Motores y Electrónica',
    text: 'Especifica la cantidad de motores, la corriente pico por motor a máximo acelerador y el consumo de componentes auxiliares.',
  },
  {
    name: 'Revisar el Diagnóstico de Seguridad y Amperaje Real',
    text: 'Compara la corriente continua realista calculada con el consumo pico del dron para asegurar un vuelo estable sin riesgo de degradación.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Comprendiendo la Tasa C y la Entrega Real de Potencia en Baterías LiPo',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Elegir la batería LiPo adecuada para un dron FPV requiere relacionar la capacidad de la batería, la tasa C y el consumo ampérico de los motores. Aunque los fabricantes suelen anunciar tasas de 100C o más, la capacidad real de descarga continua está limitada por la resistencia interna de las celdas y la disipación térmica. Esta calculadora evalúa el amperaje continuo realista ofreciendo un margen de seguridad real.',
  },
  {
    type: 'title',
    text: 'Tabla Comparativa de Químicas de Baterías RC',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Química', 'Voltaje Nominal', 'Voltaje Máximo', 'Densidad Energética', 'Descarga Pico', 'Uso Recomendado'],
    rows: [
      ['LiPo (Estándar)', '3.7V', '4.20V', 'Alta', '100C - 150C', 'Drones FPV de Carreras y Freestyle 5"'],
      ['LiHV (Alta Tensión)', '3.8V', '4.35V', 'Muy Alta', '80C - 120C', 'TinyWhoops y Micro Multirrotores'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Máxima', '15C - 35C', 'Drones Long Range de 7"'],
      ['LiFePO4', '3.3V', '3.65V', 'Moderada', '30C - 50C', 'Estaciones de Carga en Campo'],
    ],
  },
  {
    type: 'title',
    text: 'Impacto del Sag de Voltaje y la Resistencia Interna en Drones FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El sag de voltaje es la caída repentina de tensión que experimenta la batería bajo aceleraciones fuertes. Al pasar corriente a través de la resistencia interna, parte de la energía se convierte en calor en lugar de empuje. Una batería envejecida o de alta resistencia sufrirá avisos prematuros de bajo voltaje en el OSD telemétrico.',
  },
  {
    type: 'list',
    items: [
      'Baja Resistencia Interna (1-4 mΩ por celda): Excelente respuesta, sag mínimo y temperatura fresca.',
      'Resistencia Interna Moderada (5-10 mΩ por celda): Rendimiento estándar para freestyle con leve sag.',
      'Alta Resistencia Interna (>12 mΩ por celda): Pérdidas notorias de potencia, sag severo y calentamiento rápido.',
    ],
  },
  {
    type: 'title',
    text: 'Optimización de Baterías para Freestyle Carreras y Drones Long Range',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Cada estilo de vuelo exige requisitos energéticos distintos. Los drones de freestyle de 5 pulgadas generan picos intensos de corriente superiores a 120 Amperios, mientras que los drones de 7 pulgadas para largo alcance buscan eficiencia constante. Ajustar la batería exacta para cada setup previene cortes de alimentación en vuelo.',
  },
  {
    type: 'tip',
    title: 'Consejo de Mantenimiento LiPo',
    html: 'Guarda siempre tus baterías LiPo a 3.80V o 3.85V por celda cuando no las uses. Almacenarlas completamente cargadas durante más de 48 horas incrementa permanentemente la resistencia interna y degrada su capacidad.',
  },
];

const schemas: DroneBatteryCRatingCalculatorLocaleContent['schemas'] = [
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

export const content: DroneBatteryCRatingCalculatorLocaleContent = {
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
