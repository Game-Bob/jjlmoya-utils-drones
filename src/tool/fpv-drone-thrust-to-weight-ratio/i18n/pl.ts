import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulator-stosunku-ciagu-do-masy-drona-fpv';
const title = 'Kalkulator Stosunku Ciagu do Masy i Telemetrii Lotu Drona FPV';
const description = 'Oblicz maksymalny ciag statyczny, nieliniowa krzywa gazu, przeciazenia pionowe G, punkt zawisu i czas przyspieszenia 0 do 100 dla dronow FPV.';

const ui = {
  title: 'Kalkulator Stosunku Ciagu do Masy Drona FPV',
  subtitle: 'Analizuj krzywe ciagu, reakcje drazka gazu na zywo, sily przeciazenia i kategorie zwrotnosci',
  presetsHeader: 'Szybkie Ustawienia',
  customPreset: 'Niestandardowy',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Cala',
  freestyle5Preset: '6S Freestyle 5 Cali Pro',
  longrange7Preset: '6S Mountain LR 7 Cali',
  cinelifter8Preset: '8S Ciezki Cinelifter X8',
  specsHeader: 'Dane Drona i Napedu',
  auwGramsLabel: 'Masa Calkowita z Bateria (g)',
  motorCountLabel: 'Konfiguracja Silnikow',
  thrustPerMotorLabel: 'Maksymalny Ciag Statyczny na Silnik (g)',
  propellerSizeLabel: 'Srednica Smigla (cale)',
  propellerPitchLabel: 'Skok Smigla (cale)',
  bladeCountLabel: 'Liczba Lopatek Smigla',
  blade2Option: '2 Lopatki (Dwułopatowe - Maksymalna Wydajnosc)',
  blade3Option: '3 Lopatki (Trójłopatowe - Standard Freestyle)',
  blade4Option: '4 Lopatki (Czterołopatowe - Maksymalny Chwyt)',
  throttleStickHeader: 'Symulator Drazka Gazu na Zywo',
  throttleStickLabel: 'Pozycja Drazka Gazu (%)',
  snapIdleLabel: 'Bieg Jalowy (0%)',
  snapHoverLabel: 'Punkt Zawisu',
  snapCruiseLabel: 'Przelot (50%)',
  snapPunchLabel: 'Pelny Ciag (100%)',
  telemetryHeader: 'Telemetria Lotu FPV i Diagnostyka',
  twrRatioLabel: 'Stosunek Ciagu do Masy (TWR)',
  hoverThrottleLabel: 'Pozycja Gazu w Zawisie',
  currentThrustLabel: 'Aktualnie Wytwarzany Ciag',
  instantGForceLabel: 'Chwilowe Przeciazenie Pionowe G',
  zeroToHundredLabel: 'Czas 0 do 100 km/h w Punch',
  recommendedCamAngleLabel: 'Zalecany Kat Kamery FPV',
  windResistanceLabel: 'Predkosc Przebicia Wiatru',
  totalMaxThrustLabel: 'Calkowity Maksymalny Ciag Statyczny',
  maxPitchAngleLabel: 'Maksymalny Kat Pochylenia',
  tuningHeader: 'Zalecenia Dotyczace Betaflight i Strojenia PID',
  tpaRecommendationLabel: 'Tlumienie PID Gazu (TPA)',
  dynamicIdleLabel: 'Zalecany Dynamic Idle',
  propwashRiskLabel: 'Kontrola nad Turbulencjami Propwash',
  tierUnderpoweredTitle: 'Zbyt Maly Naped lub Ryzyko Znoszenia przez Wiatr',
  tierUnderpoweredDesc: 'TWR ponizej 2 do 1 nie zapewnia wystarczajacej sily do wyhamowania szybkiego opadania. Nadaje sie tylko do lotow wewnatrz.',
  tierCinematicTitle: 'Plynny Lot Filmowy',
  tierCinematicDesc: 'TWR pomiedzy 2 do 1 a 4 do 1 gwarantuje lagodna kontrole gazu i stabilne ujecia bez drgan.',
  tierFreestyleTitle: 'Sportowy i Zwrotny Freestyle',
  tierFreestyleDesc: 'TWR pomiedzy 4 do 1 a 8 do 1 daje natychmiastowa reakcje na drazek i czyste manewry akrobacyjne.',
  tierAcroProTitle: 'Wyczynowa Akrobacja i Freestyle Bando',
  tierAcroProDesc: 'TWR pomiedzy 8 do 1 a 13 do 1 zapewnia blyskawiczne przyspieszenie pionowe i natychmiastowe tlumenie propwash.',
  tierRacingExtremeTitle: 'Ekstremalne Wyscigi Dronow',
  tierRacingExtremeDesc: 'TWR powyzej 13 do 1 dostarcza poteznej mocy niezbednej na profesjonalnych torach wyscigowych FPV.',
  hudThrustCurveTitle: 'Nieliniowa Krzywa Reakcji Ciagu',
  hudHoverMarker: 'Punkt Zawisu',
  hudCurrentStickMarker: 'Aktualny Drazek',
  hudGForceLabel: 'Przeciazenie G',
  hudTiltAngleLabel: 'Kat Kamery',
  hudVectorPowerLabel: 'Telemetria Napedu na Zywo',
};

const faqItems = [
  {
    question: 'Jaki stosunek ciagu do masy jest najlepszy dla drona freestyle FPV?',
    answer: 'Dla dronow freestyle wartosc TWR od 8 do 1 do 12 do 1 zapewnia niezbedny zryw do zatrzymania spadania i dynamicznych zwrotow.',
  },
  {
    question: 'Jak nieliniowa krzywa gazu wplywa na zawis drona?',
    answer: 'Silniki bezszczotkowe generuja ciag proporcjonalny do kwadratu predkosci obrotowej. W mocnych dronach punkt zawisu znajduje sie zwykle miedzy 20 a 35 procentami wychylenia gazu.',
  },
  {
    question: 'Dlaczego kat kamery FPV zalezy od stosunku ciagu do masy?',
    answer: 'Drony o wiekszym TWR lataja szybciej pod wiekszym katem pochylenia. Aby widziec horyzont w goglach, piloci ustawiaja kat kamery na 35 do 50 stopni.',
  },
  {
    question: 'Jak liczba lopatek smigla zmienia wlasciwosci lotne?',
    answer: 'Smigla dwulopatowe zapewniaja najdluzszy czas lotu i predkosc maksymalna. Trojlopatowe to standard we freestyle, a czterolopatowe gwarantuja pewne prowadzenie w ostrych zakretach.',
  },
];

const howToSteps = [
  {
    name: 'Wprowadz wage drona lub wybierz gotowy profil',
    text: 'Wpisz calkowita wage do lotu w gramach uwzgledniajaca akumulator i kamere HD.',
  },
  {
    name: 'Skonfiguruj silniki i smigla',
    text: 'Wybierz liczbe silnikow, lopatek oraz maksymalny ciag statyczny podany przez producenta.',
  },
  {
    name: 'Sprawdz dzialanie drazka gazu na zywo',
    text: 'Przesuwaj drazek gazu, aby obserwowac wytwarzana sile, przeciazenia G i punkt na krzywej ciagu.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodynamika Stosunku Ciagu do Masy w Dronach FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Stosunek ciagu do masy (TWR) okresla dynamike i zwrotnosc wielowirnikowcow. W lotach akrobacyjnych FPV odpowiedni zapas mocy pozwala pilotom na blyskawiczne wyjscie z nurkowania i precyzyjne omijanie przeszkod.',
  },
  {
    type: 'title',
    text: 'Klasyfikacja Dronow FPV i Osiagi Referencyjne',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Platforma', 'Typowa Masa AUW', 'Docelowy TWR', 'Pozycja Gazu w Zawisie', 'Czas 0 do 100 km/h', 'Kat Kamery'],
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
    text: 'Nieliniowa Charakterystyka Gazu i Dynamika Napedow',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Silniki bezszczotkowe nie rozwijaja mocy liniowo. Ostatnie 20 procent skoku drazka gazu wytwarza ponad 40 procent calkowitego dostepnego ciagu.',
  },
  {
    type: 'list',
    items: [
      'Zakres zawisu (20 do 35 procent): Wysoka precyzja do manewrowania blisko ziemi.',
      'Zakres przelotowy (35 do 65 procent): Stabilny lot poziomy z umiarkowanym poborem pradu.',
      'Zakres pelnego ciagu (70 do 100 procent): Maksymalna dynamika i wysokie przeciazenia pionowe.',
    ],
  },
  {
    type: 'title',
    text: 'Dobor Smigiel i Strojenie Betaflight',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'W przypadku maszyn o TWR powyzej 10 do 1 warto aktywowac funkcje Throttle PID Attenuation (TPA) w Betaflight, aby zapobiec drganiom silnikow na pelnym gazie.',
  },
  {
    type: 'tip',
    title: 'Wskazowka Dotyczaca Betaflight TPA',
    html: 'Ustaw punkt poczatkowy TPA na 1250 lub 1350 z wartoscia tlumienia 0.65 dla zachowania idealnej stabilnosci w szybkich prostych.',
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
