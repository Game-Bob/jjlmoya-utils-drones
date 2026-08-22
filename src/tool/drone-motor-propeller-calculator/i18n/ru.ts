import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulyator-motora-i-vinta-drona';
const title = 'Калькулятор Мотора и Воздушного Винта Дрона';
const description = 'Оценка тяги мотора дрона, оборотов под нагрузкой, скорости потока, мощности и тока по KV, напряжению батареи, геометрии винта и весу квадрокоптера.';

const ui = {
  "presetsHeader": "Выберите профиль полета",
  "presetTinyCruiser": "Легкий микро крузер 3.5 дюйма",
  "presetFreestyle": "Фристайл 5 дюймов",
  "presetLongRange": "Дальнолет 7 дюймов",
  "presetCinelifter": "Синелифтер 8 моторов",
  "unitHeader": "Единицы измерения",
  "metricUnit": "Метрические",
  "imperialUnit": "Имперские",
  "setupHeader": "Силовая установка и рама",
  "motorKvLabel": "Константа мотора KV (Об/В)",
  "batteryVoltageLabel": "Напряжение аккумулятора",
  "propDiameterLabel": "Диаметр пропеллера",
  "propPitchLabel": "Шаг пропеллера",
  "bladeCountLabel": "Количество лопастей",
  "motorCountLabel": "Количество моторов",
  "droneWeightLabel": "Полетный вес (RTF)",
  "benchDataHeader": "Тестовая точка производителя",
  "benchThrustLabel": "Тяга на один мотор",
  "benchVoltageLabel": "Тестовое напряжение",
  "optionalLabel": "Опционально",
  "twoBlades": "2 лопасти",
  "threeBlades": "3 лопасти",
  "fourBlades": "4 лопасти",
  "twoMotors": "2 мотора",
  "fourMotors": "4 мотора",
  "sixMotors": "6 моторов",
  "eightMotors": "8 моторов",
  "resultsHeader": "Баланс тяги и подъемной силы",
  "estimatedLabel": "Расчет по физической модели.",
  "benchBasedLabel": "Калибровка по стенду.",
  "loadedRpmLabel": "Обороты под нагрузкой",
  "pitchSpeedLabel": "Расчетная скорость потока",
  "thrustPerMotorLabel": "Тяга на один мотор",
  "totalThrustLabel": "Суммарная статическая тяга",
  "totalPowerLabel": "Расчетная мощность",
  "totalCurrentLabel": "Расчетный ток",
  "thrustMarginLabel": "Запас подъемной силы",
  "hoverThrottleLabel": "Газ висения",
  "sceneCaption": "скорость вращения под нагрузкой",
  "underpoweredStatus": "Низкий запас",
  "workableStatus": "Рабочий запас",
  "headroomStatus": "Отличный запас",
  "underpoweredAdvice": "Суммарная тяга меньше двух полетных весов. Ожидается ограниченная управляемость и малый запас против ветра.",
  "workableAdvice": "Практичный запас для обычного полета. Проверьте температуру моторов и регуляторов после длительного висения.",
  "headroomAdvice": "Значительный запас статической тяги. Улучшает отклик в маневрах, но требует больших токов от аккумулятора.",
  "sourceNote": "Тестовая точка калибрует только тягу. Мощность и ток остаются расчетными.",
  "modelSourceNote": "Нет стендовых данных. Тяга рассчитывается по физической модели.",
  "manufacturerNote": "По возможности используйте стендовые данные производителя для того же мотора и винта.",
  "modelNote": "Тяга, мощность и ток являются расчетными. Реальные результаты зависят от плотности воздуха и потерь.",
  "safetyNote": "Никогда не используйте калькулятор вместо реального стендового теста. Проверьте лимиты перед полетом.",
  "thrustAxisLabel": "Направление тяги",
  "weightAxisLabel": "Вес дрона",
  "clearBenchData": "Сбросить тестовую точку"
};

const faq = [
  {
    "question": "Что рассчитывает калькулятор мотора и винта дрона?",
    "answer": "Он оценивает обороты под нагрузкой, скорость потока, тягу на мотор и суммарную тягу, мощность и ток на основе KV, напряжения, винта и веса."
  },
  {
    "question": "Как подобрать мотор и пропеллер для квадрокоптера?",
    "answer": "Начните с рекомендаций производителя по KV и размеру винта. Сравните суммарную тягу с весом дрона и проверьте ток на стенде."
  },
  {
    "question": "Почему стендовая точка производителя точнее физической модели?",
    "answer": "Она учитывает реальный профиль лопасти и аэродинамические потери. Калькулятор масштабирует эти данные под выбранное напряжение."
  },
  {
    "question": "Как размер пропеллера влияет на тягу дрона?",
    "answer": "Статическая тяга сильно зависит от диаметра и оборотов. Пропеллер большего диаметра прокачивает больше воздуха, но требует большего крутящего момента."
  },
  {
    "question": "Гарантирует ли калькулятор безопасность полета?",
    "answer": "Нет. Это инструмент проектирования. Проверьте реальный ток и температуру на стенде перед первым полетом."
  }
];

const howTo = [
  {
    "name": "Выберите профиль полета",
    "text": "Выберите пресет, чтобы загрузить подходящие начальные значения KV, напряжения, винта и веса."
  },
  {
    "name": "Введите данные рамы и пропеллера",
    "text": "Укажите полетный вес и характеристики моторов и винтов в метрической или имперской системе."
  },
  {
    "name": "Добавьте стендовую точку",
    "text": "Если есть данные испытаний, введите измеренную тягу и тестовое напряжение для калибровки."
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Принципы подбора мотора и пропеллера для дрона',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Подбор пары мотор - пропеллер - это баланс между оборотами, диаметром, шагом, напряжением и крутящим моментом. Инструмент оценивает статическую тягу и токовую нагрузку.',
  },
  {
    type: 'title',
    text: 'Отображаемые результаты',
    level: 2,
  },
  {
    type: 'table',
    headers: ["Результат","Значение"],
    rows: [["Обороты под нагрузкой","Оценка холостых оборотов с учетом коэффициента нагрузки"],["Статическая тяга","Тяга на один мотор и суммарный подъёмный вес"],["Запас подъемной силы","Отношение суммарной тяги к полетным весу дрона"],["Мощность и ток","Расчетное энергопотребление при выбранном напряжении"]],
  },
  {
    type: 'title',
    text: 'Как использовать калькулятор',
    level: 2,
  },
  {
    type: 'list',
    items: ["Введите KV мотора и напряжение аккумулятора.","Выберите диаметр, шаг, число лопастей и моторов.","Добавьте стендовую точку производителя при наличии.","Проверьте температуру и ток на стенде перед полетом."],
  },
  {
    type: 'title',
    text: 'Важность реальных стендовых данных',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Тяга винта зависит от профиля лопастей и плотности воздуха. Реальные стендовые данные обеспечивают точную калибровку.',
  },
  {
    type: 'tip',
    title: 'План стендовых тестов',
    html: 'Проведите проверку на стенде с замером тока и температуры моторов перед первым полетом.',
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
