import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulyator-tyagovooruzhennosti-fpv-drona';
const title = 'Калькулятор Тяговооруженности и Полетной Телеметрии FPV Дрона';
const description = 'Расчет максимальной статической тяги, нелинейной кривой газа, вертикальных перегрузок G, точки висения и разгона 0-100 для FPV квадрокоптеров.';

const ui = {
  title: 'Калькулятор Тяговооруженности FPV Дрона',
  subtitle: 'Анализ кривых тяги, отклика стика газа в реальном времени, перегрузок и классов маневренности',
  presetsHeader: 'Быстрые Предустановки',
  customPreset: 'Пользовательский',
  whoop1sPreset: '1S TinyWhoop (65мм)',
  freestyle35Preset: '4S Freestyle 3.5 Дюйма',
  freestyle5Preset: '6S Freestyle 5 Дюймов Pro',
  longrange7Preset: '6S Mountain LR 7 Дюймов',
  cinelifter8Preset: '8S Тяжелый Cinelifter X8',
  specsHeader: 'Характеристики Дрона и Силовой Установки',
  auwGramsLabel: 'Полный Взлетный Вес с АКБ (г)',
  motorCountLabel: 'Конфигурация Моторов',
  thrustPerMotorLabel: 'Максимальная Тяга на Мотор (г)',
  propellerSizeLabel: 'Диаметр Пропеллера (дюймы)',
  propellerPitchLabel: 'Шаг Пропеллера (дюймы)',
  bladeCountLabel: 'Количество Лопастей',
  blade2Option: '2 Лопасти (Двухлопастные - Макс. Эффективность)',
  blade3Option: '3 Лопасти (Трехлопастные - Стандарт Фристайла)',
  blade4Option: '4 Лопасти (Четырехлопастные - Макс. Зацеп)',
  throttleStickHeader: 'Симулятор Стика Газа в Реальном Времени',
  throttleStickLabel: 'Положение Стика Газа (%)',
  snapIdleLabel: 'Холостой Ход (0%)',
  snapHoverLabel: 'Точка Висения',
  snapCruiseLabel: 'Круиз (50%)',
  snapPunchLabel: 'Полный Газ (100%)',
  telemetryHeader: 'Телеметрия Полета FPV и Диагностика',
  twrRatioLabel: 'Тяговооруженность (TWR)',
  hoverThrottleLabel: 'Положение Газа в Висении',
  currentThrustLabel: 'Текущая Развиваемая Тяга',
  instantGForceLabel: 'Мгновенная Вертикальная Перегрузка G',
  zeroToHundredLabel: 'Время Разгона 0-100 км/ч',
  recommendedCamAngleLabel: 'Рекомендуемый Угол Камеры FPV',
  windResistanceLabel: 'Преодолеваемая Скорость Ветра',
  totalMaxThrustLabel: 'Суммарная Максимальная Тяга',
  maxPitchAngleLabel: 'Максимальный Угол Наклона',
  tuningHeader: 'Рекомендации по Настройке Betaflight и PID',
  tpaRecommendationLabel: 'Аттенюация PID Газа (TPA)',
  dynamicIdleLabel: 'Рекомендуемый Dynamic Idle',
  propwashRiskLabel: 'Контроль Турбулентности Propwash',
  tierUnderpoweredTitle: 'Недостаточная Тяга или Риск Сноса Ветром',
  tierUnderpoweredDesc: 'TWR ниже 2 к 1 не дает достаточного запаса для остановки быстрого падения. Подходит только для спокойных помещений.',
  tierCinematicTitle: 'Плавный Кинематографичный Полет',
  tierCinematicDesc: 'TWR от 2 к 1 до 4 к 1 обеспечивает мягкое управление газом и стабильную видеосъемку.',
  tierFreestyleTitle: 'Спортивный и Маневренный Фристайл',
  tierFreestyleDesc: 'TWR от 4 к 1 до 8 к 1 дает четкий отклик на стик, чистое выполнение split-S и отличную акробатику.',
  tierAcroProTitle: 'Экстремальный Акро и Бандо Фристайл',
  tierAcroProDesc: 'TWR от 8 к 1 до 13 к 1 обеспечивает взрывное вертикальное ускорение и мгновенное гашение propwash.',
  tierRacingExtremeTitle: 'Профессиональные Дрон Рейсинг Гонки',
  tierRacingExtremeDesc: 'TWR выше 13 к 1 дает невероятную мощность для профессиональных гоночных FPV трасс.',
  hudThrustCurveTitle: 'Нелинейная Кривая Отклика Тяги',
  hudHoverMarker: 'Точка Висения',
  hudCurrentStickMarker: 'Текущий Стик',
  hudGForceLabel: 'Перегрузки G',
  hudTiltAngleLabel: 'Угол Камеры',
  hudVectorPowerLabel: 'Телеметрия Тяги в Реальном Времени',
};

const faqItems = [
  {
    question: 'Какая тяговооруженность считается идеальной для фристайл FPV дрона?',
    answer: 'Для фристайла оптимальным считается показатель TWR от 8 к 1 до 12 к 1, что дает взрывную динамику для выхода из пикирования.',
  },
  {
    question: 'Как нелинейная кривая газа влияет на висение дрона?',
    answer: 'Бесколлекторные моторы развивают тягу пропорционально квадрату оборотов. Точка висения на мощных сборках обычно находится на уровне 20-35 процентов хода стика.',
  },
  {
    question: 'Почему угол наклона FPV камеры зависит от тяговооруженности?',
    answer: 'Дроны с высоким TWR летают на больших скоростях с сильным наклоном вперед. Чтобы горизонт оставался в центре шлема, пилоты наклоняют камеру на 35-50 градусов.',
  },
  {
    question: 'Как количество лопастей пропеллера меняет поведение дрона?',
    answer: 'Двухлопастные винты дают максимальную автономность и скорость. Трехлопастные являются стандартом фристайла, а четырехлопастные обеспечивают максимальный зацеп в поворотах.',
  },
];

const howToSteps = [
  {
    name: 'Введите вес дрона или выберите пресет',
    text: 'Укажите полный полетный вес дрона в граммах с учетом аккумулятора и экшн-камеры.',
  },
  {
    name: 'Настройте моторы и пропеллеры',
    text: 'Выберите количество моторов, число лопастей и максимальную статическую тягу по тестам производителя.',
  },
  {
    name: 'Оцените динамику на виртуальном стике газа',
    text: 'Перемещайте стик газа, наблюдая за тягой, перегрузками G и положением на графике отклика.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Аэродинамика Тяговооруженности в Полетах FPV Дронов',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Тяговооруженность (TWR) является ключевым параметром динамики и управляемости мультироторов. В FPV фристайле достаточный запас мощности позволяет пилотам безопасно выходить из свободного падения и маневрировать среди препятствий.',
  },
  {
    type: 'title',
    text: 'Классификация FPV Дронов и Целевые Показатели',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Платформа', 'Типичный Вес AUW', 'Целевой TWR', 'Газ Висения', 'Разгон 0-100 км/ч', 'Угол Камеры'],
    rows: [
      ['1S TinyWhoop (65мм)', '32г', '4.5 к 1', '35 процентов', '1.20 с', '15-25 градусов'],
      ['4S Freestyle 3.5"', '250г', '12.0 к 1', '24 процента', '0.28 с', '35-45 градусов'],
      ['6S Freestyle 5" Pro', '680г', '11.5 к 1', '25 процентов', '0.30 с', '35-50 градусов'],
      ['6S Mountain LR 7"', '1150г', '8.3 к 1', '30 процентов', '0.45 с', '20-30 градусов'],
      ['8S Cinelifter X8', '4200г', '6.1 к 1', '38 процентов', '0.70 с', '15-25 градусов'],
    ],
  },
  {
    type: 'title',
    text: 'Нелинейный Отклик Газа и Характеристика Моторов',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Электродвигатели развивают тягу по экспоненциальному закону. Последние 20 процентов хода стика обеспечивают более 40 процентов суммарной тяги.',
  },
  {
    type: 'list',
    items: [
      'Зона висения (20-35 процентов): Высокая точность для удержания высоты.',
      'Круизная зона (35-65 процентов): Стабильный горизонтальный полет с умеренным расходом батареи.',
      'Зона полного газа (70-100 процентов): Максимальное вертикальное ускорение с высокими перегрузками.',
    ],
  },
  {
    type: 'title',
    text: 'Выбор Пропеллеров и Настройка Прошивки Betaflight',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Для сборок с TWR выше 10 к 1 рекомендуется включить Throttle PID Attenuation (TPA) в Betaflight, чтобы предотвратить высокочастотные колебания на полном газе.',
  },
  {
    type: 'tip',
    title: 'Совет по Настройке Betaflight TPA',
    html: 'Установите порог TPA на 1250 или 1350 со значением 0.65 для устранения вибраций на максимальной скорости.',
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
      priceCurrency: 'USD',
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
