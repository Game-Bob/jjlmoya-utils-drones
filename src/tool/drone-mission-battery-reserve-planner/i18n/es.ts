import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planificador-reserva-bateria-mision-drone';
const title = 'Planificador de Reserva de Batería para Misiones de Drones';
const description = 'Calcula márgenes de seguridad de batería para regreso a casa, penalizaciones de viento y radio máximo de vuelo para misiones UAV.';

const faqItems = [
  {
    question: '¿Por qué volar con viento en contra consume más energía de la esperada?',
    answer: 'El viento en contra exige un mayor ángulo de inclinación para vencer la resistencia aerodinámica y mantener la velocidad terrestre, lo que dispara exponencialmente el empuje del motor y el consumo de corriente.',
  },
  {
    question: '¿Cómo influye el tiempo de trabajo sobre el objetivo en el punto de no retorno?',
    answer: 'El tiempo en zona de misión consume una cantidad fija de energía de la batería, reduciendo directamente la energía disponible para el vuelo de ida y vuelta.',
  },
  {
    question: '¿Qué provoca la caída de tensión bajo carga en baterías LiPo?',
    answer: 'El alto consumo de corriente incrementa las pérdidas por resistencia interna en las celdas de litio, reduciendo los vatios hora útiles respecto a la capacidad nominal.',
  },
];

const howToSteps = [
  {
    name: 'Introduce las especificaciones de batería y propulsión',
    text: 'Indica la capacidad en miliamperios hora, el voltaje nominal y el consumo medio en amperios.',
  },
  {
    name: 'Define la distancia y el tiempo sobre el objetivo',
    text: 'Establece la distancia de ida y el tiempo estimado de sobrevuelo e inspección sobre la zona objetivo.',
  },
  {
    name: 'Configura la velocidad y rumbo del viento',
    text: 'Selecciona la velocidad del viento y su dirección respecto al tramo de ida para aplicar la penalización aerodinámica.',
  },
  {
    name: 'Analiza el radio seguro y la telemetría',
    text: 'Examina el punto de no retorno calculado, la potencia consumida por tramo y el porcentaje de batería al aterrizar.',
  },
];

const schemas: DroneMissionBatteryReservePlannerLocaleContent['schemas'] = [
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
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Planificador de Reserva de Batería para Misiones de Drones',
    subtitle: 'Calcula márgenes de seguridad para regreso a casa, impacto del viento y radios de misión',
    description: 'Planifica misiones de vuelo UAV con cálculo preciso de reservas de batería, ajustes de viento en contra y umbrales de punto de no retorno.',
    sections: {
      batteryPropulsion: '1. Batería y Propulsión',
      flightAtmosphere: '2. Perfil de Vuelo y Atmósfera',
    },
    inputs: {
      unitSystemLabel: 'Sistema de Unidades',
      metricLabel: 'Métrico',
      imperialLabel: 'Imperial',
      presetLabel: 'Presets Rápidos de Misión',
      batteryCapacityLabel: 'Capacidad de Batería',
      batteryVoltageLabel: 'Voltaje Nominal',
      averageCurrentLabel: 'Consumo Medio en Crucero',
      cruiseSpeedLabel: 'Velocidad del Aire en Crucero',
      oneWayDistanceLabel: 'Distancia de Ida al Objetivo',
      targetHoverTimeLabel: 'Tiempo de Sobrevuelo en Objetivo',
      windSpeedLabel: 'Velocidad del Viento',
      windDirectionLabel: 'Rumbo del Viento Respecto a la Ida',
      windHeadwindLabel: 'Viento en Contra en Ida',
      windTailwindLabel: 'Viento a Favor en Ida',
      windCrosswindLabel: 'Viento Cruzado',
      reservePolicyLabel: 'Buffer de Reserva de Seguridad',
    },
    presets: {
      mappingSurvey: 'Fotogrametría y Mapeo',
      fpvRecon: 'Reconocimiento FPV Long Range',
      cinematicInspection: 'Inspección Estructural Cinematográfica',
      microRecon: 'Misión de Exploración Micro Drone',
      surveyMeta: 'mapeo',
      scoutMeta: 'reconocimiento',
      hoverMeta: 'sobrevuelo',
    },
    results: {
      totalCapacityEnergy: 'Energía Total de Capacidad',
      usableEnergy: 'Energía Útil de Misión',
      reserveEnergyBuffer: 'Buffer de Energía de Reserva',
      totalAutonomyTime: 'Autonomía Total de Vuelo',
      maxSafeMissionRadius: 'Radio del Punto de No Retorno',
      outboundLegTime: 'Duración del Tramo de Ida',
      targetHoverTime: 'Duración de Sobrevuelo en Objetivo',
      returnLegTime: 'Duración del Tramo de Vuelta',
      totalMissionTime: 'Duración Total de Tránsito',
      remainingEnergyLanding: 'Nivel Estimado de Batería al Aterrizar',
      feasibilityStatus: 'Evaluación de Viabilidad de Misión',
      voltageSagSubLabel: 'Caída de tensión',
      maxRadiusSubLabel: 'Radio máximo con tiempo en objetivo',
      powerSubLabel: 'Potencia',
    },
    statusBadges: {
      optimalTitle: 'MARGEN ÓPTIMO DE RESERVA DE ENERGÍA',
      optimalSubtitle: 'Perfil seguro de vuelo con reserva suficiente al aterrizar',
      tightTitle: 'MARGEN DE RESERVA AJUSTADO',
      tightSubtitle: 'Reserva baja al aterrizar, monitoriza el voltaje de la batería',
      criticalTitle: 'ALERTA CRÍTICA DE ENERGÍA',
      criticalSubtitle: 'Reserva superada, inicia el regreso a casa inmediatamente',
      exceededTitle: 'LA MISIÓN EXCEDE LA CAPACIDAD SEGURA',
      exceededSubtitle: 'Energía insuficiente para completar la misión y aterrizar seguro',
    },
    chart: {
      batteryProfileTitle: 'PERFIL NO LINEAL DE ASIGNACIÓN ENERGÉTICA',
      modelTitle: 'MODELO DE POTENCIA AERODINÁMICA Y VIENTO',
      windLabel: 'Viento',
      homeNode: 'BASE',
      targetNode: 'OBJETIVO',
      landNode: 'ATERRIZAJE',
      launchPadLabel: 'Punto de despegue',
      surveyHoverLabel: 'Sobrevuelo en objetivo',
      safeRadiusLabel: 'Radio seguro',
      outboundSegment: 'Ida',
      targetSegment: 'Sobrevuelo',
      returnSegment: 'Vuelta',
      reserveSegment: 'Reserva',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Penalizaciones de Potencia Aerodinámica con Viento en Contra',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La seguridad de vuelo en operaciones con vehículos aéreos no tripulados depende de leyes físicas no lineales. Volar hacia el objetivo con viento en contra requiere un mayor ángulo de inclinación para vencer la resistencia del aire y mantener la velocidad sobre el suelo. Esto incrementa exponencialmente el empuje necesario en los motores y el consumo de corriente.',
    },
    {
      type: 'paragraph',
      html: 'Nuestro planificador evalúa dinámicamente el consumo por tramo, aplicando correcciones aerodinámicas cuando la aeronave combate ráfagas de viento frontales.',
    },
    {
      type: 'title',
      text: 'Cálculo del Tiempo de Sobrevuelo en Zona Objetivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las misiones profesionales de fotogrametría, cartografía e inspección requieren permanecer minutos sobrevolando el área de trabajo. Esta fase consume energía de forma constante antes de emprender el vuelo de regreso.',
    },
    {
      type: 'list',
      items: [
        'Define el tiempo previsto en objetivo antes de calcular los límites de misión.',
        'Anticipa los picos de potencia en ida cuando se vuela contra el viento.',
        'Supervisa la caída de voltaje en celdas LiPo bajo carga.',
        'Inicia el regreso tan pronto como se alcance la reserva calculada.',
      ],
    },
    {
      type: 'tip',
      title: 'Aviso sobre Caída de Tensión en Baterías LiPo',
      html: 'Las corrientes elevadas provocan caídas de voltaje temporales por resistencia interna en las celdas de litio, reduciendo la energía útil total utilizable.',
    },
    {
      type: 'title',
      text: 'Formulas de Cálculo de Reserva de Batería para Drones',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parámetro', 'Fórmula o Modelo', 'Unidad'],
      rows: [
        ['Energía Bruta', 'Capacidad (mAh) x Voltaje (V) / 1000', 'Vatios hora (Wh)'],
        ['Pérdida por Caída de Tensión', 'Energía Bruta x Factor de Sag', 'Vatios hora (Wh)'],
        ['Potencia con Viento', 'Potencia Base x (1 + 0.65 x RatioViento)^1.3', 'Vatios (W)'],
        ['Radio Seguro de Misión', '(Energía Útil - Energía Sobrevuelo) / Consumo por Km', 'Kilómetros (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Buenas Prácticas en la Planificación de Vuelos UAV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Verifica los registros de telemetría tras cada sesión de vuelo para validar la salud de tus celdas y ajustar tus estimaciones en futuras misiones.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
