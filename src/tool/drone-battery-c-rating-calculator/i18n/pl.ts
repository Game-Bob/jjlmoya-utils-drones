import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulator-pradu-rozladowania-lipo-dron';
const title = 'Kalkulator Prądu Rozładowania LiPo i Współczynnika C dla Dronów';
const description = 'Oblicz realistyczny ciągły prąd rozładowania, rzeczywisty współczynnik C, spadek napięcia oraz bezpieczeństwo lotu akumulatorów LiPo na podstawie rezystancji wewnętrznej i poboru prądu silników.';

const ui = {
  title: 'Kalkulator Współczynnika C Akumulatora LiPo Drona',
  subtitle: 'Analiza ciągłego prądu rozładowania, wymagań szczytowych i spadku napięcia dla wielowirnikowców',
  lipoSpecsHeader: 'Specyfikacja Akumulatora',
  capacityLabel: 'Pojemność (mAh)',
  claimedCRatingLabel: 'Deklarowany Współczynnik C',
  cellCountLabel: 'Liczba Celi (Seria S)',
  chemistryLabel: 'Typ Chemii Akumulatora',
  internalResistanceLabel: 'Rezystancja Wewnętrzna na Celę (mΩ)',
  quadSpecsHeader: 'Pobór Prądu Drona',
  motorCountLabel: 'Liczba Silników',
  peakMotorCurrentLabel: 'Szczytowy Prąd na Silnik (Ampery)',
  auxCurrentLabel: 'Pobór Dodatkowy (VTX, FC, Kamera) (Ampery)',
  presetSelectLabel: 'Szybkie Ustawienia',
  customPreset: 'Niestandardowy',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5-Calowy Freestyle',
  cinewhoopPreset: '4S 3-Calowy CineWhoop',
  longRange7Preset: '6S 7-Calowy Long Range',
  racing5Preset: '6S 5-Calowy Wyścigowy',
  resultsHeader: 'Analiza Mocy i Wydajności',
  claimedMaxCurrentLabel: 'Deklarowany Prąd Maksymalny',
  realisticCRatingLabel: 'Realistyczny Współczynnik C',
  realisticMaxCurrentLabel: 'Realistyczny Prąd Ciągły',
  totalPeakDrawLabel: 'Całkowity Pobór Szczytowy',
  voltageSagLabel: 'Szacowany Spadek Napięcia',
  sagNominalVoltageLabel: 'Napięcie Nominalne pod Obciążeniem',
  flightTimeFullThrottleLabel: 'Czas Lotu na Pełnym Gazie',
  flightTimeHoverLabel: 'Szacowany Czas Lotu w Zawisie',
  safetyStatusLabel: 'Diagnostyka Bezpieczeństwa',
  statusOptimalTitle: 'Akumulator Bezpieczny i Optymalny',
  statusOptimalDesc: 'Akumulator bez problemu dostarcza prąd szczytowy bez nadmiernego nagrzewania i spadków napięcia. Gwarantowana długa żywotność ogniw.',
  statusWarningTitle: 'Umiarkowane Obciążenie Termiczne i Napięciowe',
  statusWarningDesc: 'Szczytowy pobór prądu jest bliski realistycznego limitu akumulatora. Możliwy lekki spadek napięcia przy gwałtownym dodaniu gazu.',
  statusDangerTitle: 'Wysokie Ryzyko Przeciążenia i Spadku Napięcia',
  statusDangerDesc: 'Pobór prądu przekracza realne możliwości akumulatora. Wysokie ryzyko przegrzania, silnego spadku napięcia i szybkiej degradacji.',
  lipoVisualizerTitle: 'Wizualizacja Stanu LiPo w Czasie Rzeczywistym',
  cellVoltageLabel: 'Napięcie na Celę',
  batteryHealthLabel: 'Stan Obciążenia Akumulatora',
  burstRatingRequiredLabel: 'Wymagany Chwilowy Współczynnik C',
  currentRatioLabel: 'Współczynnik Obciążenia Mocy',
};

const faqItems = [
  {
    question: 'Czym jest współczynnik C w akumulatorach LiPo do dronów?',
    answer: 'Współczynnik C określa maksymalną ciągłą szybkość rozładowania w odniesieniu do pojemności. Akumulator 1500mAh o wartości 100C może teoretycznie dostarczyć 150 Amperów.',
  },
  {
    question: 'Dlaczego deklarowany współczynnik C różni się od rzeczywistego?',
    answer: 'Producenci często podają wartości szczytowe lub marketingowe. Rzeczywisty prąd ciągły zależy bezpośrednio od rezystancji wewnętrznej celi.',
  },
  {
    question: 'Jak rezystancja wewnętrzna wpływa na spadek napięcia i ciepło?',
    answer: 'Wysoka rezystancja wewnętrzna działa jak niepożądany opornik w ogniwie. Przy dużym poborze prądu powoduje spadek napięcia i wydzielanie ciepła.',
  },
  {
    question: 'Jak uniknąć spadku napięcia podczas lotów freestyle?',
    answer: 'Stosuj akumulatory o niskiej rezystancji wewnętrznej, zachowuj margines bezpieczeństwa min. 15 procent i nie rozładowuj ogniw poniżej 3.5V w spoczynku.',
  },
];

const howToSteps = [
  {
    name: 'Wybierz zestaw lub wprowadź dane',
    text: 'Wprowadź pojemność mAh, deklarowany współczynnik C, liczbę celi i średnią rezystancję wewnętrzną na celę.',
  },
  {
    name: 'Skonfiguruj pobór prądu silników',
    text: 'Podaj liczbę silników, szczytowy prąd na silnik przy pełnym gazie oraz pobór dodatkowy.',
  },
  {
    name: 'Sprawdź diagnostykę bezpieczeństwa',
    text: 'Porównaj realistyczny prąd ciągły ze szczytowym poborem drona, aby zapewnić bezpieczny lot.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Zrozumienie Współczynnika C i Rzeczywistej Mocy Akumulatorów LiPo',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Wybór odpowiedniego akumulatora LiPo do drona FPV wymaga powiązania pojemności, współczynnika C oraz poboru prądu silników. Choć producenci deklarują wartości 100C lub więcej, realny prąd ciągły ograniczają rezystancja wewnętrzna i odprowadzanie ciepła. Ten kalkulator wyznacza bezpieczne parametry pracy.',
  },
  {
    type: 'title',
    text: 'Tabela Porównawcza Chemii Akumulatorów RC',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Chemia', 'Napięcie Nominalne', 'Napięcie Maks.', 'Gęstość Energii', 'Prąd Szczytowy', 'Zalecane Zastosowanie'],
    rows: [
      ['LiPo (Standard)', '3.7V', '4.20V', 'Wysoka', '100C - 150C', 'Drony FPV Wyścigowe i Freestyle 5"'],
      ['LiHV (Wysokonapięciowe)', '3.8V', '4.35V', 'Bardzo wysoka', '80C - 120C', 'TinyWhoop i Mikro Drony'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Maksymalna', '15C - 35C', 'Drony Long Range 7"'],
      ['LiFePO4', '3.3V', '3.65V', 'Umiarkowana', '30C - 50C', 'Stacje Ładowania w Terenie'],
    ],
  },
  {
    type: 'title',
    text: 'Wpływ Spadku Napięcia i Rezystancji Wewnętrznej na Lot Drona',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Spadek napięcia (voltage sag) to gwałtowne obniżenie napięcia podczas gwałtownego przyspieszania. Zużyty akumulator o wysokiej rezystancji wewnętrznej przekształca energię w ciepło, wywołując wczesne ostrzeżenia o niskim napięciu na ekranie OSD.',
  },
  {
    type: 'list',
    items: [
      'Niska rezystancja wewnętrzna (1-4 mΩ na celę): Doskonała dynamika, minimalny sag i niska temperatura.',
      'Umiarkowana rezystancja wewnętrzna (5-10 mΩ na celę): Standardowa wydajność do freestyle.',
      'Wysoka rezystancja wewnętrzna (>12 mΩ na celę): Odczuwalny spadek mocy, duży sag i szybkie nagrzewanie.',
    ],
  },
  {
    type: 'title',
    text: 'Optymalizacja Akumulatorów do Freestyle Wyścigów i Long Range',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Różne style lotu wymagają odmiennej charakterystyki zasilania. Drony 5-calowe generują skoki prądu ponad 120 Amperów, podczas gdy drony 7-calowe long range stawiają na stałą wydajność. Odpowiedni dobór chroni przed odcięciem zasilania w powietrzu.',
  },
  {
    type: 'tip',
    title: 'Wskazówka Przechowywania LiPo',
    html: 'Zawsze przechowuj akumulatory LiPo przy napięciu 3.80V - 3.85V na celę. Pozostawienie w pełni naładowanych ogniw na dłużej niż 48 godzin trwale zwiększa rezystancję wewnętrzną.',
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
      priceCurrency: 'PLN',
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
