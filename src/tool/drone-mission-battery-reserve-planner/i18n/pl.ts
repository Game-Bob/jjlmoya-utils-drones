import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planer-rezerwy-baterii-misji-drona';
const title = 'Planer Rezerwy Baterii dla Misji Dronów';
const description = 'Oblicz bezpieczny zapas energii baterii na powrót do bazy, wpływ wiatru i maksymalny promień lotu dronów UAV.';

const faqItems = [
  {
    question: 'Dlaczego lot pod wiatr zużywa znacznie więcej energii?',
    answer: 'Lot pod wiatr wymaga większego kąta nachylenia drona do pokonania oporu powietrza i utrzymania prędkości względem ziemi, co zwiększa pobór prądu.',
  },
  {
    question: 'Jak czas pracy nad celem wpływa na punkt bez powrotu?',
    answer: 'Czas zawisu i inspekcji nad celem pobiera stałą część energii baterii, bezpośrednio zmniejszając bezpieczny zasięg trasowy.',
  },
  {
    question: 'Co powoduje spadek napięcia baterii LiPo pod obciążeniem?',
    answer: 'Wysoki pobór prądu zwiększa straty na rezystancji wewnętrznej ogniw litowych, obniżając efektywnie wykorzystywaną energię w watogodzinach.',
  },
];

const howToSteps = [
  {
    name: 'Wprowadź dane baterii i napędu',
    text: 'Podaj pojemność w miliamperogodzinach, napięcie nominalne i średni pobór prądu.',
  },
  {
    name: 'Ustaw dystans i czas nad celem',
    text: 'Określ odległość w jedną stronę oraz planowany czas zawisu i inspekcji nad obiektem.',
  },
  {
    name: 'Skonfiguruj prędkość i kierunek wiatru',
    text: 'Wybierz prędkość wiatru oraz jego kierunek względem trasy dolotu.',
  },
  {
    name: 'Przeanalizuj promień i telemetrię',
    text: 'Sprawdź obliczony punkt bez powrotu, pobór mocy dla poszczególnych etapów i stan baterii przy lądowaniu.',
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
    title: 'Planer Rezerwy Baterii dla Misji Dronów',
    subtitle: 'Oblicz marginesy bezpieczeństwa na powrót, wpływ wiatru i zasięg lotu',
    description: 'Precyzyjne planowanie misji lotniczych UAV z uwzględnieniem wiatru i punktu bez powrotu.',
    inputs: {
      unitSystemLabel: 'System Jednostek',
      metricLabel: 'Metryczny',
      imperialLabel: 'Imperialny',
      presetLabel: 'Szybkie Ustawienia Misji',
      batteryCapacityLabel: 'Pojemność Baterii',
      batteryVoltageLabel: 'Napięcie Nominalne',
      averageCurrentLabel: 'Średni Prąd Przelotowy',
      cruiseSpeedLabel: 'Prędkość Przelotowa',
      oneWayDistanceLabel: 'Dystans w Jedną Stronę',
      targetHoverTimeLabel: 'Czas Pracy nad Celem',
      windSpeedLabel: 'Prędkość Wiatru',
      windDirectionLabel: 'Kierunek Wiatru Względem Dolotu',
      windHeadwindLabel: 'Wiatr w Przeciwną Stronę (Dolot)',
      windTailwindLabel: 'Wiatr w Plecy (Dolot)',
      windCrosswindLabel: 'Wiatr Boczny',
      reservePolicyLabel: 'Bufor Rezerwy Bezpieczeństwa',
    },
    presets: {
      mappingSurvey: 'Fotogrametria i Mapowanie',
      fpvRecon: 'Zwiad FPV Dalekiego Zasięgu',
      cinematicInspection: 'Inspekcja Konstrukcyjna',
      microRecon: 'Zwiad Mikro Dronem',
    },
    results: {
      totalCapacityEnergy: 'Całkowita Energia Pojemności',
      usableEnergy: 'Użyteczna Energia Misji',
      reserveEnergyBuffer: 'Bufor Energii Rezerwowej',
      totalAutonomyTime: 'Całkowity Czas Autonomii Lotu',
      maxSafeMissionRadius: 'Promień Punktu Bez Powrotu',
      outboundLegTime: 'Czas Lotu w Jedną Stronę',
      targetHoverTime: 'Czas Zawisu nad Celem',
      returnLegTime: 'Czas Lotu Powrotnego',
      totalMissionTime: 'Całkowity Czas Tranzytu',
      remainingEnergyLanding: 'Szacowany Poziom Baterii przy Lądowaniu',
      feasibilityStatus: 'Ocena Wykonalności Misji',
    },
    statusBadges: {
      optimal: 'Optymalny Margines Rezerwy Energii',
      tight: 'Ostrzeżenie o Niskiej Rezerwie',
      critical: 'Krytyczny Alarm Energii',
      exceeded: 'Misja Przekracza Bezpieczną Pojemność',
    },
    chart: {
      batteryProfileTitle: 'Profil Zużycia Energii Baterii',
      outboundSegment: 'Etap Lotu do Celu',
      targetSegment: 'Zawis i Praca nad Celem',
      returnSegment: 'Lot Powrotny do Bazy',
      reserveSegment: 'Bufor Rezerwy Bezpieczeństwa',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Aerodynamiczne Straty Mocy przy Locie pod Wiatr',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lot pod wiatr wymaga większego pochylenia drona, co zwiększa opór powietrza i wymusza wyższy pobór prądu przez silniki.',
    },
    {
      type: 'title',
      text: 'Uwzględnienie Czasu Zawisu nad Obiektem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Drony inspekcyjne spędzają czas w zawisie nad celem, zużywając energię przed rozpoczęciem powrotu do bazy.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
