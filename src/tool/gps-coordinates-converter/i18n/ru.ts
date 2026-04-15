import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'konverter-gps-koordinat';
const title = 'Конвертер GPS координат для путевых точек Ardupilot и INAV';
const description = 'Преобразуйте координаты GPS между десятичными градусами (DD), градусами минутами секундами (DMS) и аппаратными форматами GPS. Незаменимо для ArduPilot и INAV.';

const faqItems = [
  {
    question: 'What is the difference between DD and DMS?',
    answer: `DD (Decimal Degrees) uses a single number with decimals (e.g., 51.50). DMS (Degrees, Minutes, Seconds) divides the degree into sexagesimal fractions (e.g., 51° 30' 0").`,
  },
  {
    question: 'Why are negative coordinates used?',
    answer: 'In the Decimal system (DD), latitudes south of the Equator and longitudes west of Greenwich are indicated with a negative sign to facilitate mathematical calculations.',
  },
  {
    question: 'How much precision do I lose when converting?',
    answer: 'Our tool uses double-precision floating point. With 6 decimals in DD, the precision is about 11 centimeters, which is more than enough for drones and civil navigation.',
  },
  {
    question: 'Does this tool work offline?',
    answer: 'Yes, once the page is loaded, all conversion logic is local (client-side). Only the map requires a connection to download new tiles.',
  },
];

const schemas: GpsCoordinatesConverterLocaleContent['schemas'] = [
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
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Input Coordinates',
        text: 'Enter your coordinates in either Decimal Degrees (DD) or Degrees, Minutes, Seconds (DMS) format.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Review Conversion',
        text: 'The tool instantly displays the converted coordinates in all supported formats.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify on Map',
        text: 'Check the map visualization to ensure the coordinates point to the correct location.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Copy Result',
        text: 'Copy the converted coordinates to your clipboard for use in navigation systems or mission planning.',
      },
    ],
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


export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  bibliographyTitle: 'Библиографические ссылки',
  ui: {
    faqTitle: 'Часто задаваемые вопросы',
    bibliographyTitle: 'Библиографические ссылки',
    latitude: 'Широта',
    longitude: 'Долгота',
    decimalDegrees: 'Десятичные градусы (DD)',
    degreesMinutesSeconds: 'Градусы, Минуты, Секунды (DMS)',
    gpsHardware: 'Аппаратный формат GPS (Raw)',
    copy: 'Копировать',
    copied: 'Скопировано!',
    invalidCoordinate: 'Неверные координаты',
    pasteHardwareMapFormat: 'Вставьте исходные данные (например, 404306300, -739981800)',
    validation: {
      latRange: 'Широта должна быть в пределах от -90 до 90.',
      lonRange: 'Долгота должна быть в пределах от -180 до 180.',
      invalidFormat: 'Формат не распознан. Пожалуйста, проверьте ввод.',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Понимание GPS-координат: незаменимый инструмент для навигации дронов',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Когда дело доходит до автономных полетов дронов, аэрофотосъемки или поиска потерянного оборудования, точность и единообразие имеют ключевое значение. GPS-координаты являются основой навигации, но разные системы (такие как Betaflight, INAV, ArduPilot и Google Maps) используют разные форматы. Наш <strong>Конвертер GPS-координат</strong> устраняет этот разрыв, гарантируя, что ваши путевые точки (waypoints) всегда будут находиться именно там, где вы задумали.',
    },
    {
      type: 'title',
      text: 'Три основных формата GPS',
      level: 3,
    },
    {
      type: 'title',
      text: '1. Десятичные градусы (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Сегодня это наиболее распространенный в мире формат, широко используемый в <strong>Google Maps</strong>, современных смартфонах и большинстве картографических веб-сервисов. Он выражает положение в виде простого десятичного числа (например, <code>40.7128, -74.0060</code>). Этот формат очень легко копировать, вставлять и обрабатывать на компьютерах.',
    },
    {
      type: 'list',
      items: [
        'Положительная широта находится в северном полушарии; отрицательная — в южном.',
        'Положительная долгота находится к востоку от нулевого меридиана; отрицательная — к западу.',
      ],
    },
    {
      type: 'title',
      text: '2. Градусы, Минуты, Секунды (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Это традиционный формат, используемый в морской и воздушной навигации, а также на старых топографических картах (например, <code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code>). Он более интуитивно понятен для навигации человека по печатным картам (деление Земли на 360 градусов, где каждый градус делится на 60 минут, а каждая минута — на 60 секунд), но специальные символы делают его ввод в системы программирования полетов громоздким.',
    },
    {
      type: 'title',
      text: '3. Аппаратный / Исходный формат GPS (ArduPilot / INAV)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'При получении дампов через интерфейс командной строки (CLI), изучении необработанных журналов полетов Blackbox или взаимодействии с такими системами, как ArduPilot по протоколу MAVLink, вы часто будете видеть координаты, представленные в виде больших целых чисел (например, <code>407128000, -740060000</code>).',
    },
    {
      type: 'paragraph',
      html: 'Это делается потому, что микроконтроллеры могут вычислять целые числа намного быстрее и точнее, чем числа с плавающей запятой (десятичные). Системы умножают десятичный градус на <strong>10 000 000 (1e7)</strong>. Наш инструмент легко преобразует данные в этот формат и обратно, что делает его идеальным для анализа данных Blackbox.',
    },
    {
      type: 'title',
      text: 'Зачем пилотам дронов нужна эта конвертация',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Есть несколько критических сценариев, в которых этот конвертер станет вашим лучшим другом:',
    },
    {
      type: 'list',
      items: [
        '<strong>Поиск потерянного дрона (Lost Drone Recovery):</strong> Экранное меню OSD или передатчик (Taranis / Radiomaster) часто отображают последние известные координаты в формате DD или DMS. Вы можете быстро преобразовать их, чтобы поставить булавку на Google Maps и найти свой дрон.',
        '<strong>Планирование путевых точек (Waypoint Planning):</strong> Планирование миссий в таком ПО, как Mission Planner или QGroundControl, требует предельной точности. Преобразование координат DMS с классической геодезической карты гарантирует, что маршрут полета останется в безопасных границах.',
        '<strong>Настройка прошивки из терминала CLI:</strong> Непосредственная установка точки возврата домой (Return to Home) в консоли управления для некоторых прошивок требует необработанного (Raw) формата GPS, с точностью до десятимиллионных долей градуса.',
      ],
    },
    {
      type: 'title',
      text: 'Расшифровка точности координат',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Сколько знаков после запятой вам действительно нужно? Вот влияние десятичных долей, измеренное на экваторе:',
    },
    {
      type: 'list',
      items: [
        '<strong>1 знак после запятой</strong> (например, 40.1): Неточность около 111 километров.',
        '<strong>3 знака после запятой</strong> (например, 40.123): Около 110 метров (район / квартал).',
        '<strong>5 знаков после запятой</strong> (например, 40.12345): Около 1,1 метра (стандарт для любительских дронов и процедуры безопасного возврата RTH).',
        '<strong>7 знаков после запятой</strong> (например, 40.1234567): Около 11 миллиметров (профессиональная геодезия с использованием RTK GPS).',
      ],
    },
    {
      type: 'paragraph',
      html: 'Большинство стандартных модулей GPS для FPV дронов (M8N или M10) под открытым небом обеспечивают точность до 5 или 6 знаков после запятой (1-2 метра). При копировании координат старайтесь сохранять как минимум 6 знаков для обеспечения точности.',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'Интеграция GPS в ArduPilot', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: 'Десятичные градусы (Википедия)', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: 'Определите текущий формат',
      text: 'Посмотрите, как выглядят ваши координаты. Если они выглядят как 40.7128, -74.0060 — это DD. Если они содержат градусы, минуты и секунды (40°42\'46"N) — это DMS. Если это просто большое число, например 407128000 — это аппаратный (Raw) формат.',
    },
    {
      name: 'Введите координаты',
      text: 'Вставьте ваши данные в соответствующее поле (Десятичные градусы, DMS или Аппаратный формат).',
    },
    {
      name: 'Мгновенная конвертация',
      text: 'Обратите внимание на другие поля — конвертер автоматически рассчитает и отобразит другие форматы в реальном времени.',
    },
    {
      name: 'Копировать результат',
      text: 'Нажмите кнопку «Копировать» рядом с форматом, который вы хотите использовать, чтобы скопировать данные в буфер обмена.',
    },
  ],
  schemas,
};
