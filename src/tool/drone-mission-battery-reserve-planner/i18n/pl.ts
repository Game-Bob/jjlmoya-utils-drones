import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planer-rezerwy-baterii-misji-drona';
const title = 'Planer Rezerwy Baterii Misji Drona';
const description = 'Oblicz bezpieczne rezerwy energii na powrót drona, straty mocy przy wietrze oraz maksymalny promień bezpiecznego lotu.';

const faqItems = [
  {
    question: 'Dlaczego lot pod wiatr zużywa znacznie więcej energii?',
    answer: 'Lot pod wiatr wymaga większego kąta pochylenia drona do pokonania oporu powietrza i utrzymania prędkości względem ziemi, co wywołuje nieliniowy wzrost prądu.',
  },
  {
    question: 'Jak czas zawisu nad celem wpływa na punkt bez powrotu?',
    answer: 'Czas pracy w zawisie nad obiektem zużywa stałą część energii baterii, zmniejszając pozostały promień lotu tam i z powrotem.',
  },
  {
    question: 'Co powoduje spadek napięcia LiPo pod obciążeniem?',
    answer: 'Duży pobór prądu zwiększa straty na rezystancji wewnętrznej ogniw litowych, zmniejszając efektywnie użyteczną liczbę watogodzin.',
  },
];

const howToSteps = [
  {
    name: 'Wprowadź dane baterii i napędu',
    text: 'Podaj pojemność w mAh, napięcie nominalne oraz średni pobór prądu.',
  },
  {
    name: 'Ustaw dystans i czas pracy nad celem',
    text: 'Określ odległość w jedną stronę oraz planowany czas zawisu na miejscu.',
  },
  {
    name: 'Skonfiguruj prędkość i kierunek wiatru',
    text: 'Wybierz prędkość wiatru oraz jego kierunek względem trasy lotu.',
  },
  {
    name: 'Przeanalizuj promień i telemetrię',
    text: 'Sprawdź obliczony punkt bez powrotu, pobór mocy na odcinkach oraz poziom naładowania przy lądowaniu.',
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
    title: 'Planer Rezerwy Baterii Misji Drona',
    subtitle: 'Oblicz marginesy bezpieczeństwa na powrót, wpływ wiatru i promień misji',
    description: 'Precyzyjne planowanie misji drona z uwzględnieniem poprawek na wiatr i punktu bez powrotu.',
    sections: {
      batteryPropulsion: '1. Bateria i Napęd',
      flightAtmosphere: '2. Profil Lotu i Atmosfera',
    },
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
      windDirectionLabel: 'Kierunek Wiatru Względem Trasy',
      windHeadwindLabel: 'Wiatr w Twarz',
      windTailwindLabel: 'Wiatr w Plecy',
      windCrosswindLabel: 'Wiatr Boczny',
      reservePolicyLabel: 'Bufor Rezerwy Bezpieczeństwa',
    },
    presets: {
      mappingSurvey: 'Fotogrametria i Mapowanie',
      fpvRecon: 'Zwiad FPV Dalekiego Zasięgu',
      cinematicInspection: 'Inspekcja Konstrukcji',
      microRecon: 'Misja Mikro Drona',
      surveyMeta: 'mapowanie',
      scoutMeta: 'zwiad',
      hoverMeta: 'zawis',
    },
    results: {
      totalCapacityEnergy: 'Całkowita Pojemność Energii',
      usableEnergy: 'Użyteczna Energia Misji',
      reserveEnergyBuffer: 'Bufor Rezerwy Energii',
      totalAutonomyTime: 'Całkowity Czas Autonomii',
      maxSafeMissionRadius: 'Promień Punktu Bez Powrotu',
      outboundLegTime: 'Czas Lotu do Celu',
      targetHoverTime: 'Czas Zawisu nad Celem',
      returnLegTime: 'Czas Lotu Powrotnego',
      totalMissionTime: 'Całkowity Czas Przelotu',
      remainingEnergyLanding: 'Szacowany Poziom Baterii przy Lądowaniu',
      feasibilityStatus: 'Ocena Wykonalności Misji',
      voltageSagSubLabel: 'Spadek napięcia',
      maxRadiusSubLabel: 'Maks. bezpieczny promień z zawisem',
      powerSubLabel: 'Moc',
    },
    statusBadges: {
      optimalTitle: 'OPTYMALNY MARGINES REZERWY ENERGII',
      optimalSubtitle: 'Bezpieczny profil lotu z wystarczającą rezerwą na lądowanie',
      tightTitle: 'NAPIĘTY MARGINES REZERWY ENERGII',
      tightSubtitle: 'Niska rezerwa na lądowanie, uważnie monitoruj napięcie baterii',
      criticalTitle: 'KRYTYCZNE OSTRZEŻENIE O ENERGII',
      criticalSubtitle: 'Rezerwa przekroczona, natychmiast rozpocznij powrót',
      exceededTitle: 'MISJA PRZEKRACZA BEZPIECZNĄ POJEMNOŚĆ',
      exceededSubtitle: 'Niewystarczająca ilość energii do bezpiecznego ukończenia misji',
    },
    chart: {
      batteryProfileTitle: 'NIELINIOWY PROFIL ALOKACJI ENERGII',
      modelTitle: 'MODEL MOCY AERODYNAMICZNEJ I WIATRU',
      windLabel: 'Wiatr',
      homeNode: 'BAZA',
      targetNode: 'CEL',
      landNode: 'LĄD',
      launchPadLabel: 'Miejsce startu',
      surveyHoverLabel: 'Zawis nad celem',
      safeRadiusLabel: 'Promień bezpieczny',
      outboundSegment: 'Lot do celu',
      targetSegment: 'Zawis',
      returnSegment: 'Powrót',
      reserveSegment: 'Rezerwa',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Straty Mocy Aerodynamicznej przy Locie Pod Wiatr',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bezpieczeństwo lotu drona opiera się na nieliniowych prawach fizyki. Lot pod wiatr wymaga większego pochylenia drona do pokonania oporu powietrza i utrzymania prędkości.',
    },
    {
      type: 'paragraph',
      html: 'Nasz kalkulator dynamicznie wylicza zapotrzebowanie na moc na poszczególnych odcinkach trasy.',
    },
    {
      type: 'title',
      text: 'Uwzględnienie Czasu Zawisu w Strefie Celu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prace fotogrametryczne wymagają czasu zawisu nad obiektem. Ten pobór energii jest odejmowany przed wyznaczeniem promienia powrotu.',
    },
    {
      type: 'list',
      items: [
        'Wprowadź czas zawisu przed obliczeniem granic misji.',
        'Uwzględnij wzrost mocy przy locie pod wiatr.',
        'Monitoruj spadek napięcia LiPo pod obciążeniem.',
        'Rozpocznij powrót po osiągnięciu rezerwy bezpieczeństwa.',
      ],
    },
    {
      type: 'tip',
      title: 'Ostrzeżenie o Spadku Napięcia LiPo',
      html: 'Duże prądy wywołują spadek napięcia przez rezystancję wewnętrzną ogniw, zmniejszając użyteczną energię.',
    },
    {
      type: 'title',
      text: 'Wzory Obliczeniowe Rezerwy Baterii Drona',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parametr', 'Wzór / Model', 'Jednostka'],
      rows: [
        ['Energia Brutto', 'Pojemność (mAh) x Napięcie (V) / 1000', 'Watogodziny (Wh)'],
        ['Strata na Spadku', 'Energia Brutto x Współczynnik Sag', 'Watogodziny (Wh)'],
        ['Moc przy Wietrze', 'Moc Bazowa x (1 + 0.65 x WindRatio)^1.3', 'Waty (W)'],
        ['Maks. Safe Radius', '(Energia Użyteczna - Energia Zawisu) / Zużycie na Km', 'Kilometry (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Dobre Praktyki Planowania Lotów UAV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zawsze porównuj dane z telemetrii z wyliczeniami przedlotowymi w celu zachowania wysokiego poziomu bezpieczeństwa.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
