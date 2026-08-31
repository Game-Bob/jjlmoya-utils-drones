import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planirovshchik-rezerva-batarei-misiya-drona';
const title = 'Планировщик Резерва Батареи для Миссий Дронов';
const description = 'Рассчитайте безопасный резерв батареи для возврата домой, влияние встречного ветра и максимальный радиус полета БПЛА.';

const faqItems = [
  {
    question: 'Почему полет против ветра расходует больше энергии?',
    answer: 'Полет против ветра требует большего угла тангажа для преодоления аэродинамического сопротивления, что существенно увеличивает ток двигателей.',
  },
  {
    question: 'Как время работы в точке цели влияет на точку невозврата?',
    answer: 'Время зависания над объектом расходует полезную энергию батареи, уменьшая максимальный доступный радиус транзита.',
  },
  {
    question: 'Что вызывает просадку напряжения LiPo под нагрузкой?',
    answer: 'Высокий ток разряда увеличивает внутренние потери в литиевых ячейках, снижая фактически доступную емкость в Ватт-часах.',
  },
];

const howToSteps = [
  {
    name: 'Введите параметры батареи и моторов',
    text: 'Укажите емкость батареи в мАч, номинальное напряжение и средний ток потребления.',
  },
  {
    name: 'Задайте дистанцию и время работы над целью',
    text: 'Укажите расстояние до цели и планируемое время зависания для съемки или осмотра.',
  },
  {
    name: 'Настройте скорость и направление ветра',
    text: 'Выберите скорость ветра и направление относительно маршрута полета.',
  },
  {
    name: 'Проанализируйте радиус и телеметрию',
    text: 'Изучите рассчитанную точку невозврата, мощность по участкам и остаток заряда при посадке.',
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
    title: 'Планировщик Резерва Батареи для Миссий Дронов',
    subtitle: 'Расчет запаса энергии для возврата, влияния ветра и радиуса полета',
    description: 'Точное планирование полета БПЛА с учетом просадки напряжения и точки невозврата.',
    sections: {
      batteryPropulsion: '1. Батарея и Силовая Установка',
      flightAtmosphere: '2. Профиль Полета и Атмосфера',
    },
    inputs: {
      unitSystemLabel: 'Система Единиц',
      metricLabel: 'Метрическая',
      imperialLabel: 'Имперская',
      presetLabel: 'Быстрые Пресеты Миссии',
      batteryCapacityLabel: 'Емкость Батареи',
      batteryVoltageLabel: 'Номинальное Напряжение',
      averageCurrentLabel: 'Средний Ток Крейсерского Полета',
      cruiseSpeedLabel: 'Воздушная Скорость',
      oneWayDistanceLabel: 'Дистанция до Цели',
      targetHoverTimeLabel: 'Время Работы над Целью',
      windSpeedLabel: 'Скорость Ветра',
      windDirectionLabel: 'Направление Ветра к Маршруту',
      windHeadwindLabel: 'Встречный Ветер',
      windTailwindLabel: 'Попутный Ветер',
      windCrosswindLabel: 'Боковой Ветер',
      reservePolicyLabel: 'Буфер Резерва Безопасности',
    },
    presets: {
      mappingSurvey: 'Аэрофотосъемка и Картография',
      fpvRecon: 'Дальняя FPV Разведка',
      cinematicInspection: 'Инспекция Сооружений',
      microRecon: 'Разведка Микро Дроном',
      surveyMeta: 'съемка',
      scoutMeta: 'разведка',
      hoverMeta: 'зависание',
    },
    results: {
      totalCapacityEnergy: 'Полная Энергоемкость',
      usableEnergy: 'Полезная Энергия Миссии',
      reserveEnergyBuffer: 'Буфер Резервной Энергии',
      totalAutonomyTime: 'Полное Время Автономности',
      maxSafeMissionRadius: 'Радиус Точки Невозврата',
      outboundLegTime: 'Время Полета к Цели',
      targetHoverTime: 'Время Зависания над Целью',
      returnLegTime: 'Время Полета Обратно',
      totalMissionTime: 'Общее Время Транзита',
      remainingEnergyLanding: 'Остаток Заряда при Посадке',
      feasibilityStatus: 'Оценка Выполнимости Миссии',
      voltageSagSubLabel: 'Просадка напряжения',
      maxRadiusSubLabel: 'Радиус с учетом работы над целью',
      powerSubLabel: 'Мощность',
    },
    statusBadges: {
      optimalTitle: 'ОПТИМАЛЬНЫЙ ЗАПАС ЭНЕРГИИ',
      optimalSubtitle: 'Безопасный профиль полета с достаточным резервом на посадку',
      tightTitle: 'ОГРАНИЧЕННЫЙ ЗАПАС ЭНЕРГИИ',
      tightSubtitle: 'Низкий резерв посадки, внимательно следите за напряжением батареи',
      criticalTitle: 'КРИТИЧЕСКАЯ ТРЕВОГА ЗАРЯДА',
      criticalSubtitle: 'Резерв исчерпан, немедленно начинайте возврат на базу',
      exceededTitle: 'МИССИЯ ПРЕВЫШАЕТ ЕМКОСТЬ БАТАРЕИ',
      exceededSubtitle: 'Недостаточно энергии для завершения миссии и безопасной посадки',
    },
    chart: {
      batteryProfileTitle: 'НЕЛИНЕЙНЫЙ ПРОФИЛЬ РАСПРЕДЕЛЕНИЯ ЭНЕРГИИ',
      modelTitle: 'АЭРОДИНАМИЧЕСКАЯ МОДЕЛЬ И ВЕТЕР',
      windLabel: 'Ветер',
      homeNode: 'БАЗА',
      targetNode: 'ЦЕЛЬ',
      landNode: 'ПОСАДКА',
      launchPadLabel: 'Точка взлета',
      surveyHoverLabel: 'Работа над целью',
      safeRadiusLabel: 'Безопасный радиус',
      outboundSegment: 'Полет к цели',
      targetSegment: 'Зависание',
      returnSegment: 'Возврат',
      reserveSegment: 'Резерв',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Аэродинамические Потери Мощности при Встречном Ветре',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Безопасность полетов беспилотных летательных аппаратов основана на нелинейных законах физики. Полет против ветра требует большего угла тангажа для преодоления сопротивления воздуха и сохранения наземной скорости. Это приводит к экспоненциальному росту потребления тока моторами.',
    },
    {
      type: 'paragraph',
      html: 'Наш планировщик динамически рассчитывает энергопотребление для каждого участка полета с учетом ветровой нагрузки.',
    },
    {
      type: 'title',
      text: 'Учет Времени Работы в Зоне Цели',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Зависание над объектом для аэрофотосъемки или осмотра расходует постоянную часть энергии батареи, уменьшая доступный радиус полета.',
    },
    {
      type: 'list',
      items: [
        'Задавайте время работы над целью до расчета границ миссии.',
        'Учитывайте скачки мощности при полете против ветра.',
        'Следите за просадкой напряжения LiPo под нагрузкой.',
        'Начинайте возврат сразу при достижении установленного резерва.',
      ],
    },
    {
      type: 'tip',
      title: 'Предупреждение о Просадке Напряжения LiPo',
      html: 'Высокие токи разряда вызывают просадку напряжения из-за внутреннего сопротивления литиевых ячеек, снижая полезную емкость на 5-12%.',
    },
    {
      type: 'title',
      text: 'Формулы Расчета Резерва Батареи БПЛА',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Параметр', 'Формула / Модель', 'Единица'],
      rows: [
        ['Полная Энергоемкость', 'Емкость (мАч) x Напряжение (В) / 1000', 'Ватт-часы (Втч)'],
        ['Потеря от Просадки', 'Полная Энергия x Коэффициент Просадки', 'Ватт-часы (Втч)'],
        ['Мощность при Ветре', 'Базовая Мощность x (1 + 0.65 x ВетерRatio)^1.3', 'Ватты (Вт)'],
        ['Безопасный Радиус', '(Полезная Энергия - Энергия Зависания) / Расход на Км', 'Километры (км)'],
      ],
    },
    {
      type: 'title',
      text: 'Рекомендации по Планированию Полетов БПЛА',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Всегда сопоставляйте данные телеметрии с предварительными расчетами для обеспечения высокой безопасности полетов.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
