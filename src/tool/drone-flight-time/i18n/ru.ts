import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'kalkulyator-vremeni-polyota-drona';
const title = 'Калькулятор времени полета дрона для оценки автономности LiPo LiIon';
const description = 'Рассчитайте время полета вашего дрона на основе емкости mAh и потребления тока. Оптимизируйте ваши LiPo аккумуляторы для безопасных полетов.';

const faqItems = [
  {
    question: 'Why is actual flight time lower than calculated?',
    answer: 'The calculator assumes constant consumption. Sharp maneuvers, headwinds, and battery wear can reduce actual flight time by up to 30%.',
  },
  {
    question: 'At what voltage should I land my drone?',
    answer: 'Ideally, land when the voltage drops to 3.5V - 3.6V per cell (at rest). This corresponds to the recommended 20% remaining capacity.',
  },
  {
    question: 'Are LiPo or Li-Ion batteries better for drones?',
    answer: 'LiPos offer high instantaneous power (ideal for racing and acrobatics). Li-Ion cells have longer endurance but lower power output (ideal for long, steady flights).',
  },
  {
    question: 'How does the cell count (S) affect flight time?',
    answer: 'More cells increase voltage and power, but also weight. If motors are optimized for that voltage, they can be more efficient, but cell count alone does not guarantee more time.',
  },
];

const howToSteps = [
  {
    name: 'Identify Capacity',
    text: 'Check your battery label and look for the mAh value (e.g., 1500, 2200, 4500).',
  },
  {
    name: 'Estimate Current Draw',
    text: 'Enter the average amperage your drone consumes. You can find this in your OSD telemetry after a test flight.',
  },
  {
    name: 'Adjust Safety Margin',
    text: 'We recommend leaving 20% (set to 80%) to protect the battery and provide a landing buffer.',
  },
  {
    name: 'Get the Result',
    text: 'View the exact time in minutes and seconds that you can safely stay in the air.',
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
  faqTitle: 'Часто задаваемые вопросы',
  bibliographyTitle: 'Библиографические ссылки',
  ui: {
    faqTitle: 'Часто задаваемые вопросы',
    bibliographyTitle: 'Библиографические ссылки',
    batterySpecs: 'Характеристики аккумулятора',
    capacity: 'Емкость',
    voltage: 'Напряжение (S ячеек)',
    safetyMargin: 'Запас безопасности',
    landingHint: 'Приземляйтесь при 3.5V - 3.7V на ячейку.',
    consumptionDynamics: 'Динамика потребления',
    averageConsumption: 'Среднее потребление тока',
    powerWatts: 'Мощность (Ватт)',
    efficiencyHint: 'При изменении ампер ватты пересчитываются на основе напряжения S.',
    estimatedEfficiency: 'Оценочная эффективность',
    typicalEfficiencyHint: 'Типично: 4-6 (Racing), 8-12 (Cinematic/Long Range).',
    safeFlight: 'Безопасный полет',
    totalEnergy: 'Общая энергия',
    theoreticalTime: 'Теоретическое время (0%)',
    co2Footprint: 'Углеродный след CO2',
    autonomyChart: 'График автономности',
    chartSubtitle: 'Ампер (A) vs Время (мин)',
    chartLabel: 'Минуты',
  },
  seo: [
    {
      type: 'title',
      text: 'Калькулятор времени полета дрона: полное руководство по автономности',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Автономность — это, пожалуй, самый критический фактор в проектировании и эксплуатации любого беспилотного летательного аппарата. Будь вы гоночным пилотом FPV, профессиональным аэрофотографом или любителем дальних полетов, точное знание того, как долго ваше оборудование может находиться в воздухе, жизненно важно для безопасности и успеха миссии. Наш <strong>калькулятор времени полета</strong> использует основные переменные емкости аккумулятора и потребления тока для предоставления реалистичной и безопасной оценки.',
    },
    {
      type: 'title',
      text: 'Емкость аккумулятора: объяснение mAh',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Емкость аккумулятора обычно измеряется в миллиампер-часах (mAh). Это число указывает на то, какой электрический заряд может хранить аккумулятор. Например, аккумулятор емкостью 1500 mAh теоретически может выдавать 1500 миллиампер в течение одного полного часа. В мире дронов, где потребление тока чрезвычайно велико, мы обычно говорим в амперах (A). 1000 mAh — это ровно 1 Ah (Ампер-час).',
    },
    {
      type: 'paragraph',
      html: 'Однако чистая емкость — не единственный фактор. Напряжение (определяемое количеством ячеек или \'S\') напрямую влияет на общую мощность (ватты), но для расчета времени на основе потребления двигателей отношение Ah/Ампер является наиболее прямым показателем, используемым полетными инженерами.',
    },
    {
      type: 'title',
      text: 'Потребление тока: ампераж в полете',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Потребление двигателей — самая изменчивая переменная во время полета. Удержание дрона в режиме висения (hover) — это не то же самое, что выполнение агрессивных акробатических маневров. Каждая комбинация мотора и пропеллера имеет свою кривую эффективности. Когда вы даете полный газ, сила тока резко возрастает, что значительно сокращает срок службы аккумулятора.',
    },
    {
      type: 'list',
      items: [
        'Полет в режиме висения: Потребление минимально и постоянно, идеально для фотосъемки.',
        'Крейсерский полет: Немного повышенное потребление из-за аэродинамического сопротивления.',
        'Агрессивный/FPV полет: Пики тока могут утроить среднее потребление за считанные секунды.',
        'Вес дрона: Каждый дополнительный грамм требует более высоких оборотов двигателя для создания подъемной силы, что увеличивает ампераж.',
      ],
    },
    {
      type: 'title',
      text: 'Правило безопасности 80: защита химии LiPo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Разрядка LiPo (литий-полимерного) аккумулятора до 0% емкости — это кратчайший путь к его уничтожению и, что еще хуже, к аварии. С химической точки зрения ячейки получают необратимые повреждения, если их напряжение падает ниже критического порога (обычно 3,0V - 3,2V на ячейку).',
    },
    {
      type: 'paragraph',
      html: 'Поэтому мы всегда применяем <strong>правило запаса безопасности</strong>. Наш калькулятор позволяет настроить это значение, но рекомендуется приземляться, когда остается еще 20% заряда. Это не только продлевает срок службы ваших дорогих аккумуляторов на сотни циклов, но и гарантирует жизненно важный резерв мощности в случае неожиданных порывов ветра или если вам нужно прервать посадку и попробовать снова.',
    },
    {
      type: 'tip',
      html: 'Аккумуляторы для дронов очень чувствительны к холоду. Зимой внутреннее сопротивление LiPo возрастает, что вызывает более быстрое падение напряжения. Всегда прогревайте аккумуляторы перед взлетом, если температура окружающей среды ниже 15 градусов Цельсия.',
    },
    {
      type: 'title',
      text: 'Математическая формула полета',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Хотя наш инструмент берет на себя всю тяжелую работу, полезно знать логику расчета. Базовая формула такова:',
    },
    {
      type: 'paragraph',
      html: '<strong>Время (мин) = ((Емкость mAh / 1000) * Коэффициент безопасности) / Потребление тока (А) * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Например, если у вас аккумулятор 2200 mAh, вы хотите приземлиться при 20% (запас 0.8), а ваш дрон потребляет в среднем 15 ампер: (2.2 * 0.8) / 15 * 60 = 7.04 минуты безопасного полета.',
    },
    {
      type: 'title',
      text: 'Оптимизация веса и эффективность',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Существует точка убывающей доходности при добавлении более емких аккумуляторов. Удвоение емкости аккумулятора не удваивает время полета, потому что сам аккумулятор добавляет вес. Этот лишний вес заставляет моторы вращаться быстрее, потребляя больше тока. В какой-то момент добавленный вес потребляет больше энергии, чем дает, снижая общую эффективность системы.',
    },
    {
      type: 'paragraph',
      html: 'Опытные пилоты ищут идеальный баланс между <em>Disc Loading</em> (соотношение веса и площади пропеллеров) и емкостью аккумулятора, чтобы максимизировать то, что мы называем «полезным временем миссии».',
    },
    {
      type: 'title',
      text: 'Различия между типами дронов',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Микро-дроны (Whoops):</strong> Потребляют всего 2-5 ампер, но используют аккумуляторы на 300-500 mAh. Время полета обычно короткое (3-4 мин) из-за низкой инерции и высоких оборотов.',
    },
    {
      type: 'paragraph',
      html: '<strong>5" гоночные дроны:</strong> Колоссальное потребление во время гонок (до 120A в пике), разряжающее аккумулятор 1300 mAh всего за 2 минуты чистого адреналина.',
    },
    {
      type: 'paragraph',
      html: '<strong>Дальнолеты (Long Range):</strong> Оптимизированы для эффективности. Они часто используют литий-ионные (Li-Ion) элементы, которые имеют более высокую плотность энергии, чем LiPo, обеспечивая 30-60-минутные полеты при очень низком потреблении тока.',
    },
    {
      type: 'tip',
      html: 'Переход на пропеллеры с меньшим шагом (pitch) может увеличить время полета за счет максимальной скорости и отзывчивости. Это самый дешевый и эффективный способ получить на 10-15% больше автономности.',
    },
    {
      type: 'title',
      text: 'Обслуживание и хранение',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Чтобы расчеты этого инструмента были точными, ваши аккумуляторы должны быть в хорошем состоянии. Аккумулятор с высоким внутренним сопротивлением будет перегреваться и «лгать» о своей реальной емкости. Всегда храните аккумуляторы при напряжении хранения (3.8V-3.85V на ячейку), если не собираетесь летать более 48 часов.',
    },
    {
      type: 'paragraph',
      html: 'В заключение, управление энергией — это искусство баланса физики, химии и математики. Регулярно используйте наш калькулятор для планирования полетных сессий и никогда не забывайте, что в небе время — ваш самый ценный ресурс. Удачных полетов и мягких посадок!',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'EASA - Правила использования дронов', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot Wiki', url: 'https://ardupilot.org/copter/' },
    { name: 'Battery University', url: 'https://batteryuniversity.com/' },
  ],
  howTo: howToSteps,
  schemas,
};
