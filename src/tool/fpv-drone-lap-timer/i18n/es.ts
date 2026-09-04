import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'cronometro-vueltas-dron-fpv';
const title = 'Cronómetro de Vueltas y Splits para Carreras de Drones FPV';
const description = 'Cronómetro interactivo para carreras de drones FPV con secuencia acústica de salida FAI, ritmo de splits, avisos de vuelta rápida, índice de consistencia y telemetría de velocidad.';

const ui = {
  setupHeading: 'Configuración de Pista y Sesión',
  trackLengthLabel: 'Longitud del Circuito',
  trackLengthUnit: 'metros',
  targetLapsLabel: 'Número Objetivo de Vueltas',
  targetLapsUnit: 'vueltas (0 para práctica abierta)',
  batteryCapacityLabel: 'Capacidad de la Batería',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Activar Tonos Acústicos',
  debounceThresholdLabel: 'Protección Antirrebote de Vuelta',
  debounceThresholdUnit: 'segundos',
  presetMultiGpLabel: 'MultiGP Spec (250m / 3 Vueltas)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Vueltas)',
  presetSprintLabel: 'Sprint de Alta Velocidad (400m / 2 Vueltas)',
  startCountdownButton: 'Iniciar Cuenta Atrás FAI',
  pauseTimerButton: 'Pausar Sesión',
  resumeTimerButton: 'Reanudar Cronómetro',
  resetTimerButton: 'Reiniciar Sesión',
  recordLapButton: 'MARCAR VUELTA',
  spacebarHint: 'Pulsa la BARRA ESPACIADORA o toca el botón gigante para registrar el paso por meta',
  statusIdle: 'Listo para Salida',
  statusCountdown: 'Cuenta Atrás FAI en Progreso',
  statusRunning: 'Cronómetro de Carrera Activo',
  statusPaused: 'Sesión Pausada',
  statusFinished: 'Carrera Completada',
  currentLapHeading: 'Tiempo de Vuelta Actual',
  lapNumberPrefix: 'Vuelta',
  lastLapHeading: 'Última Vuelta',
  fastestLapHeading: 'Mejor Vuelta',
  averageLapHeading: 'Vuelta Media',
  deltaBestHeading: 'Diferencia con Mejor Vuelta',
  consistencyIndexHeading: 'Índice de Consistencia',
  estimatedSpeedHeading: 'Velocidad Media Estimada',
  estimatedBatteryHeading: 'Batería Estimada Usada',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh restantes',
  lapHistoryHeading: 'Tiempos de Vuelta y Comparación de Ritmo',
  lapColumnHeader: 'Vuelta #',
  timeColumnHeader: 'Tiempo',
  splitColumnHeader: 'Diferencia Mejor',
  speedColumnHeader: 'Velocidad Media',
  batteryColumnHeader: 'Consumo Batería',
  noLapsRecordedNotice: 'Aún no hay vueltas registradas. Inicia la cuenta atrás y pulsa la barra espaciadora o el botón para registrar tu primera vuelta.',
  consistencyRatingElite: 'Consistencia Élite',
  consistencyRatingPro: 'Consistencia Profesional',
  consistencyRatingClub: 'Consistencia Club',
  consistencyRatingNovice: 'Consistencia en Entrenamiento',
  fastestLapBadge: 'MEJOR VUELTA',
  sessionSummaryHeading: 'Resumen de Sesión y Exportación',
  totalTimeLabel: 'Duración Total de Carrera',
  completedLapsLabel: 'Vueltas Completadas',
  exportCsvButton: 'Exportar Vueltas a CSV',
  copySummaryButton: 'Copiar Resumen de Texto',
  copiedNotice: '¡Resumen de sesión copiado al portapapeles!',
};

const faqItems = [
  {
    question: '¿Cómo funciona la secuencia acústica de salida FAI en este cronómetro?',
    answer: 'La secuencia de salida reproduce el reglamento oficial de carreras de drones F9U de la Federación Aeronáutica Internacional (FAI). Se emiten cuatro pitidos preparatorios separados por un segundo, seguidos de un tono agudo inmediato tipo chicharra que marca la salida y activa el cronómetro en cero.',
  },
  {
    question: '¿Cómo se calcula el Índice de Consistencia de Vuelta?',
    answer: 'La puntuación de consistencia evalúa la desviación estándar de tus vueltas completadas respecto a la media de la sesión. Una puntuación superior al 95 por ciento representa una trazada y gestión de gas sumamente precisa, mientras que valores inferiores evidencian dispersión en el ritmo.',
  },
  {
    question: '¿Puedo usar un pedal físico o un mando de radio para marcar las vueltas?',
    answer: 'Sí. Cualquier teclado inalámbrico, pedal Bluetooth o pulsador de emisora configurado para enviar la pulsación de la barra espaciadora registrará la vuelta al instante sin necesidad de mirar ni tocar la pantalla.',
  },
  {
    question: '¿Por qué hay un filtro antirrebote en el botón de vuelta?',
    answer: 'En FPV las puertas se cruzan a gran velocidad, pero una doble pulsación accidental o el rebote de un interruptor podrían registrar falsas vueltas de fracciones de segundo. El antirrebote descarta activaciones que ocurran antes del umbral definido (3 segundos por defecto).',
  },
  {
    question: '¿Qué precisión tiene la velocidad media estimada?',
    answer: 'El cálculo divide la distancia longitudinal declarada del centro de pista entre el tiempo de vuelta. La velocidad real del dron en curvas variará según el radio de trazada y el ángulo de alabeo en cada sector.',
  },
];

const howToSteps = [
  {
    name: 'Configura la distancia de pista y el objetivo',
    text: 'Introduce la longitud del circuito en metros y el número de vueltas objetivo, o elige un preajuste como MultiGP Spec o Tiny Whoop.',
  },
  {
    name: 'Inicia la cuenta atrás acústica FAI',
    text: 'Haz clic en Iniciar Cuenta Atrás. Escucha los cuatro tonos preparatorios y el tono agudo de salida que arranca el cronómetro.',
  },
  {
    name: 'Registra cada vuelta al cruzar la puerta de meta',
    text: 'Pulsa el botón gigante en pantalla o presiona la barra espaciadora cada vez que el dron cruce la puerta de salida y meta.',
  },
  {
    name: 'Analiza la telemetría, deltas y consistencia',
    text: 'Examina la gráfica de ritmo, las diferencias respecto a la mejor vuelta y la puntuación de consistencia, y luego exporta a CSV.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Fundamentos de la Cronometración de Alta Precisión en Carreras de Drones FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La competición en carreras de drones multirotor FPV exige precisión de milisegundos y una consistencia de trazada rigurosa. Los pilotos que manejan drones de 5 pulgadas alcanzan velocidades superiores a los 140 km/h sorteando puertas tridimensionales, banderas y loops en picado. Entrenar de forma óptima requiere retroalimentación acústica en la salida, registro de pasos por meta y análisis de la degradación de ritmo a lo largo de las mangas.',
  },
  {
    type: 'title',
    text: 'Comparativa de Clases de Circuitos Multirrotor y Parámetros de Cronometraje',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Clase / Categoría', 'Longitud Típica de Pista', 'Vueltas Objetivo', 'Tiempo Medio por Vuelta', 'Rango de Velocidad Máxima', 'Antirrebote Sugerido'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m a 80m', '5 vueltas', '8.5s a 13.0s', '35 a 55 km/h', '2.0 segundos'],
      ['Micro 3.5 Pulgadas (4S)', '120m a 180m', '4 vueltas', '12.0s a 18.0s', '70 a 110 km/h', '2.5 segundos'],
      ['MultiGP Spec 5 Pulgadas (6S)', '200m a 300m', '3 vueltas', '14.0s a 22.0s', '100 a 150 km/h', '3.0 segundos'],
      ['Sprint Abierto en Campo (6S/8S)', '350m a 500m', '2 vueltas', '20.0s a 32.0s', '130 a 180 km/h', '4.0 segundos'],
    ],
  },
  {
    type: 'title',
    text: 'Secuencias Acústicas de Salida y Reglamentación Deportiva FAI F9U',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Bajo el reglamento FAI CIAM Sección 4 para carreras de drones, las mangas inician con señales sonoras estandarizadas en lugar de banderas visuales para garantizar tiempos de reacción idénticos a través de las gafas FPV. La secuencia consiste en tonos a 440 Hz a intervalos de un segundo, culminando en un tono de 880 Hz donde los pilotos arman motores y despegan.',
  },
  {
    type: 'list',
    items: [
      'Tonos preparatorios: Alertas sonoras para fijar posición de acelerador y concentración en el trazado.',
      'Tono de Salida (Go): Señal instantánea que inicia el cronometraje exactamente en t = 0.',
      'Confirmación Sonora: Pitidos acústicos que verifican el paso por meta sin apartar la mirada de las gafas.',
      'Aviso de Vuelta Rápida: Tono armónico especial cuando la vuelta actual supera el récord de la sesión.',
    ],
  },
  {
    type: 'title',
    text: 'Comprendiendo el Índice de Consistencia y la Estrategia de Carrera',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Aunque marcar una vuelta rápida aislada es gratificante, los campeonatos de drones se ganan por consistencia. El índice evalúa la desviación entre vueltas: un piloto que varía menos de 0.3 segundos gestiona mejor el acelerador, evita turbulencias de hélices ajenas y preserva el voltaje de la batería para el sprint final.',
  },
  {
    type: 'tip',
    title: 'Consejo para Entrenar en el Campo de Vuelo',
    html: 'Coloca tu teléfono o tablet con buen volumen cerca de tu estación de pilotaje. Utiliza un pulsador Bluetooth o un teclado inalámbrico sobre tu maleta de vuelo para pulsar con el pie o el pulgar cada vez que pases por meta.',
  },
];

const schemas: FpvDroneLapTimerLocaleContent['schemas'] = [
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

export const content: FpvDroneLapTimerLocaleContent = {
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
