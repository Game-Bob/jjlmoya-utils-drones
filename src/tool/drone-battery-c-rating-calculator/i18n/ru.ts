import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulyator-toka-razryada-lipo-dron';
const title = 'Калькулятор Тока Разряда LiPo Аккумулятора Дрона и С Rating';
const description = 'Рассчитайте реалистичный непрерывный ток разряда, фактический C rating, просадку напряжения и безопасность полета LiPo аккумуляторов квадрокоптера на основе внутреннего сопротивления.';

const ui = {
  title: 'Калькулятор C Rating LiPo Аккумулятора Дрона',
  subtitle: 'Анализ реалистичного непрерывного тока разряда, пиковой нагрузки и просадки напряжения для квадрокоптеров',
  lipoSpecsHeader: 'Характеристики аккумулятора',
  capacityLabel: 'Емкость (мАч)',
  claimedCRatingLabel: 'Заявленный C Rating',
  cellCountLabel: 'Количество банок (Серия S)',
  chemistryLabel: 'Тип аккумулятора',
  internalResistanceLabel: 'Внутреннее сопротивление банки (мОм)',
  quadSpecsHeader: 'Потребление квадрокоптера',
  motorCountLabel: 'Количество моторов',
  peakMotorCurrentLabel: 'Пиковый ток одного мотора (Ампер)',
  auxCurrentLabel: 'Вспомогательное потребление (VTX, FC, Камера) (Ампер)',
  presetSelectLabel: 'Быстрые пресеты',
  customPreset: 'Пользовательский',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5 дюймов Фристайл',
  cinewhoopPreset: '4S 3 дюйма Синевуп',
  longRange7Preset: '6S 7 дюймов Лонгрейндж',
  racing5Preset: '6S 5 дюймов Гонки',
  resultsHeader: 'Анализ мощности и производительности',
  claimedMaxCurrentLabel: 'Заявленный максимальный ток',
  realisticCRatingLabel: 'Реалистичный C Rating',
  realisticMaxCurrentLabel: 'Реалистичный непрерывный ток',
  totalPeakDrawLabel: 'Общий пиковый ток',
  voltageSagLabel: 'Оценка просадки напряжения',
  sagNominalVoltageLabel: 'Номинальное напряжение под нагрузкой',
  flightTimeFullThrottleLabel: 'Время полета на полном газу',
  flightTimeHoverLabel: 'Оценка времени висения',
  safetyStatusLabel: 'Диагностика безопасности',
  statusOptimalTitle: 'Безопасный и оптимальный аккумулятор',
  statusOptimalDesc: 'Аккумулятор свободно обеспечивает пиковый ток без чрезмерного нагрева и просадки. Гарантирован долгий срок службы банок.',
  statusWarningTitle: 'Умеренный термический стресс',
  statusWarningDesc: 'Пиковое потребление близко к реальному пределу батареи. Ожидается небольшая просадка напряжения при резких прострелах.',
  statusDangerTitle: 'Высокий риск перегрузки и просадки',
  statusDangerDesc: 'Потребление превышает реальную отдачу аккумулятора. Высокий риск перегрева, сильной просадки напряжения и быстрой деградации.',
  lipoVisualizerTitle: 'Визуализация состояния LiPo в реальном времени',
  cellVoltageLabel: 'Напряжение на банку',
  batteryHealthLabel: 'Статус нагрузки аккумулятора',
  burstRatingRequiredLabel: 'Требуемый пиковый C Rating',
  currentRatioLabel: 'Коэффициент нагрузки мощности',
};

const faqItems = [
  {
    question: 'Что такое C rating у LiPo аккумулятора квадрокоптера?',
    answer: 'C rating обозначает максимальную скорость непрерывного разряда относительно емкости. Аккумулятор 1500 мАч 100C теоретически может выдать 150 Ампер.',
  },
  {
    question: 'Почему заявленный C rating часто выше реального?',
    answer: 'Производители часто указывают пиковые маркетнговые значения. Реальный непрерывный ток напрямую зависит от внутреннего сопротивления банок.',
  },
  {
    question: 'Как внутреннее сопротивление влияет на просадку и нагрев?',
    answer: 'Высокое сопротивление работает как нежелательный резистор внутри банки. При высоком токе напряжение падает, а энергия уходит в тепло.',
  },
  {
    question: 'Как избежать просадки напряжения во фристайле?',
    answer: 'Используйте банки с низким внутренним сопротивлением, держите запас безопасности не менее 15 процентов и не разряжайте ниже 3.5V на банку.',
  },
];

const howToSteps = [
  {
    name: 'Выберите пресет или введите данные',
    text: 'Укажите емкость мАч, заявленный C rating, количество банок и среднее внутреннее сопротивление банки.',
  },
  {
    name: 'Настройте потребление квадрокоптера',
    text: 'Задайте количество моторов, пиковый ток одного мотора на полном газу и вспомогательное потребление.',
  },
  {
    name: 'Проверьте статус безопасности',
    text: 'Сравните реалистичный непрерывный ток с пиковым потреблением для безопасного полета.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Понимание C Rating и реальной отдачи LiPo аккумуляторов',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Выбор правильного LiPo аккумулятора для FPV дрона требует понимания связи между емкостью, C rating и током моторов. Хотя производители заявляют 100C и более, реальный ток ограничен внутренним сопротивлением и теплоотводом. Этот калькулятор рассчитывает точные параметры безопасности.',
  },
  {
    type: 'title',
    text: 'Сравнительная таблица типов аккумуляторов для RC',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Тип', 'Номинальное V', 'Макс. V', 'Плотность энергии', 'Пиковый разряд', 'Назначение'],
    rows: [
      ['LiPo (Стандарт)', '3.7V', '4.20V', 'Высокая', '100C - 150C', '5 дюймов FPV Гонки и Фристайл'],
      ['LiHV (Высоковольтные)', '3.8V', '4.35V', 'Очень высокая', '80C - 120C', 'TinyWhoop и микрокоптеры'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Максимальная', '15C - 35C', '7 дюймов Лонгрейндж'],
      ['LiFePO4', '3.3V', '3.65V', 'Умеренная', '30C - 50C', 'Полевые зарядные станции'],
    ],
  },
  {
    type: 'title',
    text: 'Влияние просадки напряжения и внутреннего сопротивления',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Просадка напряжения (voltage sag) происходит при резком ускорении. Если у старого аккумулятора высокое внутреннее сопротивление, энергия превращается в нагрев, вызывая раннее предупреждение о разряде на OSD шлема.',
  },
  {
    type: 'list',
    items: [
      'Низкое сопротивление (1-4 мОм на банку): Отличный подхват, минимальная просадка и холодные банки.',
      'Умеренное сопротивление (5-10 мОм на банку): Стандарт для обычного фристайла.',
      'Высокое сопротивление (>12 мОм на банку): Заметная потеря тяги, сильная просадка и быстрый нагрев.',
    ],
  },
  {
    type: 'title',
    text: 'Оптимизация батарей для фристайла и лонгрейндж дронов',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Разные стили полета требуют разных профилей тока. 5-дюймовые фристайл квадрокоптеры создают всплески тока свыше 120 Ампер, тогда как 7-дюймовые дальнолеты ценят равномерную экономичность. Правильный подбор предотвращает отключение питания в воздухе.',
  },
  {
    type: 'tip',
    title: 'Совет по хранению LiPo',
    html: 'Храните аккумуляторы LiPo при напряжении 3.80V - 3.85V на банку. Оставление батарей полностью заряженными более 48 часов необратимо увеличивает внутреннее сопротивление.',
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
      priceCurrency: 'RUB',
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
