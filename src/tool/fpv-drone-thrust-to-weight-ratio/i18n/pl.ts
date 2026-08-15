import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulator-stosunku-ciagu-do-masy-drona-fpv';
const title = 'Kalkulator Stosunku Ciągu do Masy i Telemetrii Lotu Drona FPV';
const description = 'Oblicz maksymalny ciąg statyczny, nieliniową krzywą gazu, przeciążenia pionowe G, punkt zawisu i czas przyspieszenia 0 do 100 dla dronów FPV.';

const ui = {
  title: 'Kalkulator Stosunku Ciągu do Masy Drona FPV',
  subtitle: 'Analizuj krzywe ciągu, reakcję drążka gazu na żywo, siły przeciążenia i kategorie zwrotności',
  presetsHeader: 'Szybkie Ustawienia',
  customPreset: 'Niestandardowy',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Cala',
  freestyle5Preset: '6S Freestyle 5 Cali Pro',
  longrange7Preset: '6S Mountain LR 7 Cali',
  cinelifter8Preset: '8S Ciężki Cinelifter X8',
  specsHeader: 'Dane Drona i Napędu',
  auwGramsLabel: 'Masa Całkowita z Baterią (g)',
  motorCountLabel: 'Konfiguracja Silników',
  thrustPerMotorLabel: 'Maksymalny Ciąg Statyczny na Silnik (g)',
  propellerSizeLabel: 'Średnica Śmigła (cale)',
  propellerPitchLabel: 'Skok Śmigła (cale)',
  bladeCountLabel: 'Liczba Łopatek Śmigła',
  blade2Option: '2 Łopatki (Dwułopatowe - Maksymalna Wydajność)',
  blade3Option: '3 Łopatki (Trójłopatowe - Standard Freestyle)',
  blade4Option: '4 Łopatki (Czterołopatowe - Maksymalny Chwyt)',
  throttleStickHeader: 'Symulator Drążka Gazu na Żywo',
  throttleStickLabel: 'Pozycja Drążka Gazu (%)',
  snapIdleLabel: 'Bieg Jałowy (0%)',
  snapHoverLabel: 'Punkt Zawisu',
  snapCruiseLabel: 'Przelot (50%)',
  snapPunchLabel: 'Pełny Ciąg (100%)',
  telemetryHeader: 'Telemetria Lotu FPV i Diagnostyka',
  twrRatioLabel: 'Stosunek Ciągu do Masy (TWR)',
  hoverThrottleLabel: 'Pozycja Gazu w Zawisie',
  currentThrustLabel: 'Aktualnie Wytwarzany Ciąg',
  instantGForceLabel: 'Chwilowe Przeciążenie Pionowe G',
  zeroToHundredLabel: 'Czas 0 do 100 km/h w Punch',
  recommendedCamAngleLabel: 'Zalecany Kąt Kamery FPV',
  windResistanceLabel: 'Prędkość Przebicia Wiatru',
  totalMaxThrustLabel: 'Całkowity Maksymalny Ciąg Statyczny',
  maxPitchAngleLabel: 'Maksymalny Kąt Pochylenia',
  tuningHeader: 'Zalecenia Dotyczące Betaflight i Strojenia PID',
  tpaRecommendationLabel: 'Tłumienie PID Gazu (TPA)',
  dynamicIdleLabel: 'Zalecany Dynamic Idle',
  propwashRiskLabel: 'Kontrola nad Turbulencjami Propwash',
  tierUnderpoweredTitle: 'Zbyt Mały Napęd lub Ryzyko Znoszenia przez Wiatr',
  tierUnderpoweredDesc: 'TWR poniżej 2 do 1 nie zapewnia wystarczającej siły do wyhamowania szybkiego opadania. Nadaje się tylko do lotów wewnątrz.',
  tierCinematicTitle: 'Płynny Lot Filmowy',
  tierCinematicDesc: 'TWR pomiędzy 2 do 1 a 4 do 1 gwarantuje łagodną kontrolę gazu i stabilne ujęcia bez drgań.',
  tierFreestyleTitle: 'Sportowy i Zwrotny Freestyle',
  tierFreestyleDesc: 'TWR pomiędzy 4 do 1 a 8 do 1 daje natychmiastową reakcję na drążek i czyste manewry akrobacyjne.',
  tierAcroProTitle: 'Wyczynowa Akrobacja i Freestyle Bando',
  tierAcroProDesc: 'TWR pomiędzy 8 do 1 a 13 do 1 zapewnia błyskawiczne przyspieszenie pionowe i natychmiastowe tłumienie propwash.',
  tierRacingExtremeTitle: 'Ekstremalne Wyścigi Dronów',
  tierRacingExtremeDesc: 'TWR powyżej 13 do 1 dostarcza potężnej mocy niezbędnej na profesjonalnych torach wyścigowych FPV.',
  hudThrustCurveTitle: 'Nieliniowa Krzywa Reakcji Ciągu',
  hudHoverMarker: 'Punkt Zawisu',
  hudCurrentStickMarker: 'Aktualny Drążek',
  hudGForceLabel: 'Siły G',
  hudTiltAngleLabel: 'Kąt Kamery',
  hudVectorPowerLabel: 'Telemetria Mocy na Żywo',
};

const faqItems = [
  {
    question: 'Jaki stosunek ciągu do masy jest najlepszy do freestyle FPV?',
    answer: 'Dla dronów freestyle optymalny TWR wynosi od 8:1 do 12:1. Zapewnia to natychmiastową siłę potrzebną do wyhamowania swobodnego spadania i płynnych nawrotów.',
  },
  {
    question: 'Jak nieliniowa charakterystyka gazu wpływa na zawis?',
    answer: 'Silniki bezszczotkowe generują ciąg proporcjonalnie do kwadratu prędkości obrotowej. Z tego powodu punkt zawisu przypada zwykle między 20 a 35 procentem zakresu drążka.',
  },
  {
    question: 'Dlaczego kąt kamery FPV zależy od mocy drona?',
    answer: 'Drony o wyższym TWR poruszają się z większą prędkością przelotową przy mocniejszym pochyleniu w przód. Aby horyzont pozostał w centrum gogli, piloci ustawiają kąt kamery od 35 do 50 stopni.',
  },
  {
    question: 'Jak liczba łopatek śmigła zmienia właściwości lotne?',
    answer: 'Śmigła dwułopatowe gwarantują najwyższą wydajność energetyczną i prędkość maksymalną. Trójłopatowe to złoty standard freestyle. Czterołopatowe zapewniają maksymalny chwyt i hamowanie.',
  },
];

const howToSteps = [
  {
    name: 'Wybierz Profil lub Wprowadź Masę Drona',
    text: 'Wpisz całkowitą masę startową drona wraz z baterią i kamerą w gramach.',
  },
  {
    name: 'Skonfiguruj Silniki i Śmigła',
    text: 'Podaj liczbę silników, łopatek śmigła oraz maksymalny ciąg statyczny podany przez producenta.',
  },
  {
    name: 'Dostosuj Pozycję Drążka Gazu',
    text: 'Przesuwaj suwak gazu, aby obserwować na żywo generowane przeciążenia, wektory siły i punkt na krzywej.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodynamika Stosunku Ciągu do Masy w Dronach FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Stosunek ciągu do masy (TWR) decyduje o przyspieszeniu pionowym i kontroli nad wielowirnikowcem. W wyścigach i akrobacji FPV odpowiedni zapas mocy pozwala pilotom wyciągać drona z pionowych nurkowań i manewrować tuż przy przeszkodach.',
  },
  {
    type: 'title',
    text: 'Klasyfikacja Dronów FPV i Przykładowe Osiągi',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Platforma', 'Typowa Masa AUW', 'Docelowy TWR', 'Gaz w Zawisie', 'Czas 0 do 100 km/h', 'Kąt FPV'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 do 1', '35 procent', '1.20 s', '15 deg do 25 deg'],
      ['4S Freestyle 3.5"', '250g', '12.0 do 1', '24 procent', '0.28 s', '35 deg do 45 deg'],
      ['6S Freestyle 5" Pro', '680g', '11.5 do 1', '25 procent', '0.30 s', '35 deg do 50 deg'],
      ['6S Mountain LR 7"', '1150g', '8.3 do 1', '30 procent', '0.45 s', '20 deg do 30 deg'],
      ['8S Cinelifter X8', '4200g', '6.1 do 1', '38 procent', '0.70 s', '15 deg do 25 deg'],
    ],
  },
  {
    type: 'title',
    text: 'Nieliniowa Odpowiedź Przepustnicy i Krzywe Ciągu',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Silniki elektryczne nie oddają ciągu liniowo w stosunku do sygnału sterującego. Aerodynamika łopat tworzy krzywą wykładniczą, w której ostatnie 20 procent skoku drążka dostarcza ponad 40 procent całkowitej siły ciągu.',
  },
  {
    type: 'list',
    items: [
      'Strefa zawisu (20 do 35 procent gazu): Precyzyjna kontrola wysokości przy spokojnym locie.',
      'Strefa przelotowa (35 do 65 procent gazu): Płynny lot ze zrównoważonym zużyciem energii.',
      'Strefa pełnego ciągu (70 do 100 procent gazu): Ekstremalna dynamika i wysokie przeciążenia G.',
    ],
  },
  {
    type: 'title',
    text: 'Wybór Śmigieł i Strojenie Oprogramowania Betaflight',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Średnica, skok i geometria łopatek decydują o zamianie momentu obrotowego na ciąg statyczny i prędkość. Przy TWR przekraczającym 10:1 warto włączyć funkcję TPA w Betaflight, aby wyeliminować drgania przy pełnym otwarciu przepustnicy.',
  },
  {
    type: 'tip',
    title: 'Wskazówka Dotycząca Strojenia Betaflight TPA',
    html: 'Dla mocnych napędów ustaw próg TPA na 1250 lub 1350 z wartością 0.65. Pozwoli to zachować pełną stabilność bez oscylacji podczas szybkich przelotów na pełnym gazie.',
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
      priceCurrency: 'PLN',
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
