import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculadora-tasa-c-bateria-lipo-dron';
const title = 'Calculadora de Tasa C de Bateria LiPo y Descarga Continua para Drones';
const description = 'Calcula la corriente de descarga continua real, tasa C realista, sag de voltaje y seguridad de vuelo para baterias LiPo de drones basandote en la resistencia interna y consumo de motores.';

const ui = {
  title: 'Calculadora de Tasa C de Bateria LiPo para Drones',
  subtitle: 'Analiza la descarga continua real, exigencia de burst y sag de voltaje para multirotores',
  lipoSpecsHeader: 'Especificaciones de la Bateria',
  capacityLabel: 'Capacidad (mAh)',
  claimedCRatingLabel: 'Tasa C Anunciada',
  cellCountLabel: 'Numero de Celdas (Serie)',
  chemistryLabel: 'Quimica de la Bateria',
  internalResistanceLabel: 'Resistencia Interna por Celda (mΩ)',
  quadSpecsHeader: 'Consumo del Dron',
  motorCountLabel: 'Numero de Motores',
  peakMotorCurrentLabel: 'Corriente Pico por Motor (Amperios)',
  auxCurrentLabel: 'Consumo Auxiliar (VTX, FC, Camara) (Amperios)',
  presetSelectLabel: 'Ajustes Rapidos',
  customPreset: 'Personalizado',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S Freestyle 5 Pulgadas',
  cinewhoopPreset: '4S CineWhoop 3 Pulgadas',
  longRange7Preset: '6S Long Range 7 Pulgadas',
  racing5Preset: '6S Carreras 5 Pulgadas',
  resultsHeader: 'Analisis de Rendimiento y Potencia',
  claimedMaxCurrentLabel: 'Corriente Maxima Anunciada',
  realisticCRatingLabel: 'Tasa C Continua Realista',
  realisticMaxCurrentLabel: 'Corriente Continua Realista',
  totalPeakDrawLabel: 'Consumo Pico Total',
  voltageSagLabel: 'Caida de Tencion Estimada',
  sagNominalVoltageLabel: 'Voltaje Nominal Bajo Carga',
  flightTimeFullThrottleLabel: 'Autonomia a Acelerador Maximo',
  flightTimeHoverLabel: 'Autonomia Estimada en Estacionario',
  safetyStatusLabel: 'Diagnostico de Seguridad',
  statusOptimalTitle: 'Bateria Segura y Optima',
  statusOptimalDesc: 'La bateria suministra la corriente pico holgadamente sin sobrecalentamiento ni sag excesivo. Se garantiza una larga vida util de las celdas.',
  statusWarningTitle: 'Estres Termico y de Voltaje Moderado',
  statusWarningDesc: 'El consumo pico esta cerca del limite real de la bateria. Espera cierta caida de voltaje en aceleraciones bruscas.',
  statusDangerTitle: 'Alto Riesgo de Sobrecarga y Sag de Voltaje',
  statusDangerDesc: 'El consumo pico supera la capacidad real de la bateria. Alto riesgo de sobrecalentamiento, caida severa de voltaje y degradacion prematura.',
  lipoVisualizerTitle: 'Visualizador de Estado LiPo en Tiempo Real',
  cellVoltageLabel: 'Voltaje por Celda',
  batteryHealthLabel: 'Estres de Bateria',
  burstRatingRequiredLabel: 'Tasa C de Burst Requerida',
  currentRatioLabel: 'Relacion de Carga de Potencia',
};

const faqItems = [
  {
    question: '¿Que es la tasa C en una bateria LiPo de dron?',
    answer: 'La tasa C representa la velocidad maxima de descarga continua en relacion con la capacidad de la bateria. Por ejemplo, una bateria de 1500mAh con 100C puede entregar teoricamente 150 Amperios.',
  },
  {
    question: '¿Por que la tasa C anunciada suele ser superior a la real?',
    answer: 'Los fabricantes suelen publicitar tasas de ráfaga o valores de marketing. La descarga continua real depende directamente de la resistencia interna de cada celda.',
  },
  {
    question: '¿Como afecta la resistencia interna al sag de voltaje y al calor?',
    answer: 'Una alta resistencia interna actua como un resistor indeseado en la celda. Al exigir alta corriente, esta resistencia provoca una caida de voltaje abrupta y disipa calor excesivo.',
  },
  {
    question: '¿Como puedo evitar el sag de voltaje durante vuelos de freestyle?',
    answer: 'Utiliza celdas de baja resistencia interna, selecciona un margen de seguridad de al menos el 15 por ciento sobre el consumo pico y no vueles por debajo de 3.5V por celda en reposo.',
  },
];

const howToSteps = [
  {
    name: 'Seleccionar Ajuste Rapido o Introducir Datos de Bateria',
    text: 'Ingresa la capacidad en mAh, la tasa C anunciada, el numero de celdas en serie y la resistencia interna promedio por celda.',
  },
  {
    name: 'Configurar el Consumo de Motores y Electronica',
    text: 'Especifica la cantidad de motores, la corriente pico por motor a maximo acelerador y el consumo de componentes auxiliares.',
  },
  {
    name: 'Revisar el Diagnostico de Seguridad y Amperaje Real',
    text: 'Compara la corriente continua realista calculada con el consumo pico del dron para asegurar un vuelo estable sin riesgo de degradacion.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Comprendiendo la Tasa C y la Entrega Real de Potencia en Baterias LiPo',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Elegir la bateria LiPo adecuada para un dron FPV requiere relacionar la capacidad de la bateria, la tasa C y el consumo amperico de los motores. Aunque los fabricantes suelen anunciar tasas de 100C o mas, la capacidad real de descarga continua esta limitada por la resistencia interna de las celdas y la disipacion termica. Esta calculadora evalua el amperaje continuo realista ofreciendo margen de seguridad real.',
  },
  {
    type: 'title',
    text: 'Tabla Comparativa de Quimicas de Baterias RC',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Quimica', 'Voltaje Nominal', 'Voltaje Maximo', 'Densidad Energetica', 'Descarga Pico', 'Uso Recomendado'],
    rows: [
      ['LiPo (Estandar)', '3.7V', '4.20V', 'Alta', '100C - 150C', 'Drones FPV de Carreras y Freestyle 5"'],
      ['LiHV (Alta Tension)', '3.8V', '4.35V', 'Muy Alta', '80C - 120C', 'TinyWhoops y Micro Multirotores'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Maxima', '15C - 35C', 'Drones Long Range de 7"'],
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
    html: 'El sag de voltaje es la caida repentina de tension que experimenta la bateria bajo aceleraciones fuertes. Al pasar corriente a traves de la resistencia interna, parte de la energia se convierte en calor en lugar de empuje. Una bateria envejecida o de alta resistencia sufrira avisos prematuros de bajo voltaje en el OSD telemetrico.',
  },
  {
    type: 'list',
    items: [
      'Baja Resistencia Interna (1-4 mΩ por celda): Excelente respuesta, sag minimo y temperatura fresca.',
      'Resistencia Interna Moderada (5-10 mΩ por celda): Rendimiento estandar para freestyle con leve sag.',
      'Alta Resistencia Interna (>12 mΩ por celda): Perdedas notorias de potencia, sag severo y calentamiento rapido.',
    ],
  },
  {
    type: 'title',
    text: 'Optimizacion de Baterias para Freestyle Carreras y Drones Long Range',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Cada estilo de vuelo exige requisitos energeticos distintos. Los drones de freestyle de 5 pulgadas generan picos intensos de corriente superiores a 120 Amperios, mientras que los drones de 7 pulgadas para largo alcance buscan eficiencia constante. Ajustar la bateria exacta para cada setup previene cortes de alimentacion en vuelo.',
  },
  {
    type: 'tip',
    title: 'Consejo de Mantenimiento LiPo',
    html: 'Guarda siempre tus baterias LiPo a 3.80V o 3.85V por celda cuando no las uses. Almacenarlas completamente cargadas durante mas de 48 horas incrementa permanentemente la resistencia interna y degrada su capacidad.',
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
