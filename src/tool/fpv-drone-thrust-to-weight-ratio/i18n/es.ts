import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculadora-relacion-empuje-peso-drone-fpv';
const title = 'Calculadora de Relación Empuje a Peso y Telemetría de Vuelo para Drones FPV';
const description = 'Calcula el empuje estático máximo, la curva de acelerador no lineal, la fuerza G vertical instantánea, el punto de sustentación y el tiempo 0 a 100 para drones FPV y multirrotores.';

const ui = {
  title: 'Calculadora de Relación Empuje a Peso para Drones FPV',
  subtitle: 'Analiza curvas de empuje, respuesta del stick de gas en vivo, fuerza G instantánea y clasificación de agilidad',
  presetsHeader: 'Ajustes Rápidos',
  customPreset: 'Personalizado',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Pulgadas',
  freestyle5Preset: '6S Freestyle 5 Pulgadas Pro',
  longrange7Preset: '6S Mountain LR 7 Pulgadas',
  cinelifter8Preset: '8S Cinelifter Pesado X8',
  specsHeader: 'Especificaciones del Dron y Propulsión',
  auwGramsLabel: 'Peso Total con Batería (g)',
  motorCountLabel: 'Configuración de Motores',
  thrustPerMotorLabel: 'Empuje Estático Máximo por Motor (g)',
  propellerSizeLabel: 'Diámetro de Hélice (pulgadas)',
  propellerPitchLabel: 'Paso de Hélice (pulgadas)',
  bladeCountLabel: 'Número de Palas de la Hélice',
  blade2Option: '2 Palas (Bipala - Máxima Eficiencia)',
  blade3Option: '3 Palas (Tripala - Estándar Freestyle)',
  blade4Option: '4 Palas (Cuatripala - Máximo Agarre)',
  throttleStickHeader: 'Simulador de Stick de Acelerador en Vivo',
  throttleStickLabel: 'Posición del Stick de Gas (%)',
  snapIdleLabel: 'Ralentí (0%)',
  snapHoverLabel: 'Sustentación',
  snapCruiseLabel: 'Crucero (50%)',
  snapPunchLabel: 'Punch Máximo (100%)',
  telemetryHeader: 'Telemetría de Vuelo FPV y Diagnóstico de Rendimiento',
  twrRatioLabel: 'Relación Empuje a Peso (TWR)',
  hoverThrottleLabel: 'Punto de Sustentación (Hover)',
  currentThrustLabel: 'Empuje Actual de Salida',
  instantGForceLabel: 'Fuerza G Vertical Instantánea',
  zeroToHundredLabel: 'Tiempo 0 a 100 km/h en Punch',
  recommendedCamAngleLabel: 'Inclinación de Cámara FPV Recomendada',
  windResistanceLabel: 'Velocidad de Penetración al Viento',
  totalMaxThrustLabel: 'Empuje Estático Máximo Total',
  maxPitchAngleLabel: 'Ángulo Máximo de Inclinación Sostenible',
  tuningHeader: 'Recomendaciones de Ajuste Betaflight y PID',
  tpaRecommendationLabel: 'Atenuación PID de Gas (TPA)',
  dynamicIdleLabel: 'Ralentí Dinámico Recomendado',
  propwashRiskLabel: 'Autoridad de Control de Propwash',
  tierUnderpoweredTitle: 'Inframotorizado o Alto Riesgo de Deriva por Viento',
  tierUnderpoweredDesc: 'TWR inferior a 2 a 1 proporciona autoridad insuficiente para corregir ráfagas de viento o frenar descensos rápidos. Recomendado solo para interiores.',
  tierCinematicTitle: 'Vuelo Suave y Continuo Cinemático',
  tierCinematicDesc: 'TWR entre 2 a 1 y 4 a 1 ofrece un control suave del acelerador y filmación estable con mínima sensibilidad a turbulencias.',
  tierFreestyleTitle: 'Freestyle Ágil y Deportivo',
  tierFreestyleDesc: 'TWR entre 4 a 1 y 8 a 1 brinda respuesta rápida de aceleración, recuperaciones limpias en split-S y gran maniobrabilidad acrobática.',
  tierAcroProTitle: 'Acrobacia de Alto Rendimiento y Bando Freestyle',
  tierAcroProDesc: 'TWR entre 8 a 1 y 13 a 1 proporciona aceleraciones verticales explosivas, anulación instantánea de propwash y agilidad extrema.',
  tierRacingExtremeTitle: 'Carreras Extremas de Drones de Competición',
  tierRacingExtremeDesc: 'TWR superior a 13 a 1 entrega potencia descomunal y salidas de curva instantáneas requeridas en circuitos de carreras profesionales.',
  hudThrustCurveTitle: 'Curva de Respuesta de Empuje No Lineal',
  hudHoverMarker: 'Punto de Sustentación',
  hudCurrentStickMarker: 'Stick Actual',
  hudGForceLabel: 'Fuerzas G',
  hudTiltAngleLabel: 'Ángulo de Cámara',
  hudVectorPowerLabel: 'Telemetría de Potencia en Vivo',
};

const faqItems = [
  {
    question: '¿Cuál es una buena relación empuje a peso para un dron FPV de freestyle?',
    answer: 'Para drones de freestyle, un TWR de 8 a 1 a 12 a 1 proporciona la aceleración explosiva requerida para frenar caídas libres y superar giros de altas fuerzas G.',
  },
  {
    question: '¿Cómo afecta la curva no lineal de gas al vuelo estacionario?',
    answer: 'Los motores brushless generan empuje proporcional al cuadrado de las revoluciones. Debido a esto, el punto de sustentación suele ubicarse entre el 20 y el 35 por ciento de recorrido de stick en montajes de alta potencia.',
  },
  {
    question: '¿Por qué el ángulo de la cámara FPV depende del empuje del dron?',
    answer: 'Drones con mayor TWR vuelan a velocidades de crucero más elevadas con inclinaciones frontales más pronunciadas. Para mantener el horizonte centrado en las gafas FPV, los pilotos inclinan la cámara entre 35 y 50 grados.',
  },
  {
    question: '¿Cómo cambia la sensación de vuelo el número de palas de la hélice?',
    answer: 'Las hélices bipalas ofrecen máxima eficiencia energética y alta velocidad punta. Las tripalas equilibran agarre y respuesta en curvas para freestyle. Las cuatripalas entregan frenada y agarre inmediato a bajas revoluciones.',
  },
];

const howToSteps = [
  {
    name: 'Seleccionar Ajuste Rápido o Introducir Peso del Dron',
    text: 'Ingresa el peso total en orden de vuelo incluyendo batería, cámara HD y accesorios en gramos.',
  },
  {
    name: 'Configurar Motores y Hélices',
    text: 'Selecciona la cantidad de motores, el número de palas y el empuje estático máximo de banco especificado por el fabricante.',
  },
  {
    name: 'Ajustar el Stick de Gas en Vivo',
    text: 'Mueve el stick de acelerador o pulsa los accesos rápidos para observar la variación de vectores de empuje, fuerzas G y respuesta en la curva.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodinámica de la Relación Empuje a Peso en Drones FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La relación empuje a peso (TWR) determina la aceleración vertical y la autoridad de control de cualquier multirrotor. En el vuelo acrobático y de carreras FPV, contar con margen de empuje suficiente permite a los pilotos recuperarse de picados a velocidad terminal y maniobrar cerca de obstáculos con precisión. Comprender este perfil es fundamental para elegir motores, ESC y calibrar el firmware de vuelo.',
  },
  {
    type: 'title',
    text: 'Clasificación de Drones FPV y Métricas de Rendimiento',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Plataforma', 'Peso AUW Típico', 'TWR Objetivo', 'Gas en Sustentación', 'Tiempo 0 a 100 km/h', 'Inclinación FPV'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 a 1', '35 por ciento', '1.20 s', '15 deg a 25 deg'],
      ['4S Freestyle 3.5"', '250g', '12.0 a 1', '24 por ciento', '0.28 s', '35 deg a 45 deg'],
      ['6S Freestyle 5" Pro', '680g', '11.5 a 1', '25 por ciento', '0.30 s', '35 deg a 50 deg'],
      ['6S Mountain LR 7"', '1150g', '8.3 a 1', '30 por ciento', '0.45 s', '20 deg a 30 deg'],
      ['8S Cinelifter X8', '4200g', '6.1 a 1', '38 por ciento', '0.70 s', '15 deg a 25 deg'],
    ],
  },
  {
    type: 'title',
    text: 'Respuesta No Lineal del Acelerador y Curvas de Empuje',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Los motores eléctricos brushless no entregan empuje de manera lineal con la señal de control. La dinámica de flujo de aire y la carga de las palas generan una curva exponencial donde el 20 por ciento superior del recorrido del acelerador entrega más del 40 por ciento del empuje total. Gestionar esta respuesta mediante curvas expo en Betaflight proporciona resolución fina en vuelo de baja velocidad.',
  },
  {
    type: 'list',
    items: [
      'Zona de sustentación (20 a 35 por ciento de gas): Rango de alta precisión para control de posición y vuelo estacionario.',
      'Zona de crucero (35 a 65 por ciento de gas): Vuelo de traslación equilibrado con consumo energético sostenible.',
      'Zona de punch máximo (70 a 100 por ciento de gas): Entrega de potencia extrema con altas fuerzas G verticales.',
    ],
  },
  {
    type: 'title',
    text: 'Elección de Hélices y Sintonización de Firmware Betaflight',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El diámetro, paso y número de palas de la hélice determinan cómo el par motor se transforma en empuje estático y velocidad punta. Para drones con TWR superior a 10 a 1, es aconsejable configurar atenuación TPA en Betaflight para evitar oscilaciones de D-Term a fondo de acelerador.',
  },
  {
    type: 'tip',
    title: 'Consejo de Ajuste Betaflight TPA',
    html: 'En montajes de alta relación de empuje, activa TPA a partir de 1250 o 1350 con un ratio de 0.65. Esto atenuará las ganancias D a gas máximo manteniendo el dron suave y sin vibraciones en rectas veloces.',
  },
];

const schemas: FpvDroneThrustToWeightRatioLocaleContent['schemas'] = [
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

export const content: FpvDroneThrustToWeightRatioLocaleContent = {
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
