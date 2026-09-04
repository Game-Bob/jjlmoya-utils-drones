import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'stoper-okrazen-wyscigow-dronow-fpv';
const title = 'Stoper Okrążeń i Międzyczasów do Wyścigów Dronów FPV';
const description = 'Interaktywny stoper do wyścigów dronów FPV z akustyczną procedurą startową FAI, analizą międzyczasów, powiadomieniami o rekordzie, wskaźnikiem powtarzalności i telemetrią prędkości.';

const ui = {
  setupHeading: 'Konfiguracja Toru i Sesji',
  trackLengthLabel: 'Długość Toru',
  trackLengthUnit: 'metry',
  targetLapsLabel: 'Liczba Okrążeń',
  targetLapsUnit: 'okrążenia (0 = trening otwarty)',
  batteryCapacityLabel: 'Pojemność Akumulatora',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Włącz Sygnały Dźwiękowe',
  debounceThresholdLabel: 'Czas Ochronny Przed Podwójnym Kliknięciem',
  debounceThresholdUnit: 'sekundy',
  presetMultiGpLabel: 'Specyfikacja MultiGP (250m / 3 Okrążenia)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Okrążeń)',
  presetSprintLabel: 'Sprint Szybkościowy (400m / 2 Okrążenia)',
  startCountdownButton: 'Rozpocznij Odliczanie FAI',
  pauseTimerButton: 'Wstrzymaj Sesję',
  resumeTimerButton: 'Wznów Pomiar',
  resetTimerButton: 'Zresetuj Sesję',
  recordLapButton: 'ZAPISZ OKRĄŻENIE',
  spacebarHint: 'Naciśnij SPACJĘ lub dotknij wielkiego przycisku, aby zarejestrować przelot przez bramkę',
  statusIdle: 'Gotowy do Startu',
  statusCountdown: 'Odliczanie FAI w Toku',
  statusRunning: 'Pomiar Wyścigu Aktywny',
  statusPaused: 'Sesja Wstrzymana',
  statusFinished: 'Wyścig Zakończony',
  currentLapHeading: 'Czas Bieżącego Okrążenia',
  lapNumberPrefix: 'Okrążenie',
  lastLapHeading: 'Ostatnie Okrążenie',
  fastestLapHeading: 'Najszybsze Okrążenie',
  averageLapHeading: 'Średnie Okrążenie',
  deltaBestHeading: 'Różnica do Rekordu',
  consistencyIndexHeading: 'Wskaźnik Powtarzalności',
  estimatedSpeedHeading: 'Szacowana Prędkość Średnia',
  estimatedBatteryHeading: 'Szacowane Zużycie Baterii',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh pozostało',
  lapHistoryHeading: 'Czasy Okrążeń i Porównanie Tempa',
  lapColumnHeader: 'Okr. #',
  timeColumnHeader: 'Czas',
  splitColumnHeader: 'Różnica',
  speedColumnHeader: 'Śr. Prędkość',
  batteryColumnHeader: 'Zużycie Akumulatora',
  noLapsRecordedNotice: 'Brak zarejestrowanych okrążeń. Rozpocznij odliczanie i naciśnij spację, aby zapisać pierwsze okrążenie.',
  consistencyRatingElite: 'Powtarzalność Elitarna',
  consistencyRatingPro: 'Powtarzalność Zawodowca',
  consistencyRatingClub: 'Powtarzalność Klubowa',
  consistencyRatingNovice: 'Powtarzalność Treningowa',
  fastestLapBadge: 'NAJSZYBSZE OKRĄŻENIE',
  sessionSummaryHeading: 'Podsumowanie Sesji i Eksport',
  totalTimeLabel: 'Całkowity Czas Wyścigu',
  completedLapsLabel: 'Ukończone Okrążenia',
  exportCsvButton: 'Eksportuj Okrążenia do CSV',
  copySummaryButton: 'Kopiuj Raport Tekstowy',
  copiedNotice: 'Podsumowanie sesji skopiowane do schowka!',
};

const faqItems = [
  {
    question: 'Jak działa akustyczna procedura startowa FAI w tym stoperze?',
    answer: 'Sekwencja startowa odzwierciedla oficjalne przepisy FAI CIAM F9U dla wyścigów dronów. Rozlega się seria czterech sygnałów ostrzegawczych w odstępach jednosekundowych, a następnie wysoki dźwięk startowy, włączający stoper w punkcie zero.',
  },
  {
    question: 'Jak obliczany jest Wskaźnik Powtarzalności Okrążeń?',
    answer: 'Wskaźnik mierzy odchylenie standardowe ukończonych czasów w odniesieniu do średniej sesji. Wynik powyżej 95 procent świadczy o wzorcowej powtarzalności toru lotu i operowania przepustnicą.',
  },
  {
    question: 'Czy mogę używać pedału nożnego lub przełącznika aparatury RC?',
    answer: 'Tak. Dowolna klawiatura bezprzewodowa, pedał Bluetooth lub przycisk nadajnika przypisany do spacji zarejestruje okrążenie natychmiast bez odrywania wzroku od gogli FPV.',
  },
  {
    question: 'Po co wprowadzono czas ochronny przed podwójnym kliknięciem?',
    answer: 'Bramki mijane są z dużą prędkością. Przypadkowe podwójne dotknięcie mogłoby zapisać fałszywe ułamkowe okrążenie. Filtr odrzuca sygnały pojawiające się poniżej ustalonego progu (domyślnie 3 sekundy).',
  },
  {
    question: 'Na ile dokładna jest szacowana prędkość średnia?',
    answer: 'Prędkość obliczana jest jako stosunek zadeklarowanej długości toru do uzyskanego czasu. Faktyczna prędkość w zakrętach różni się w zależności od promienia łuku i kąta przechyłu drona.',
  },
];

const howToSteps = [
  {
    name: 'Ustaw długość toru i liczbę okrążeń',
    text: 'Wprowadź długość pętli toru w metrach i cel okrążeń lub wybierz gotowy profil, np. MultiGP Spec.',
  },
  {
    name: 'Uruchom akustyczne odliczanie startowe FAI',
    text: 'Kliknij przycisk odliczania. Wysłuchaj tonów przygotowawczych oraz wysokiego sygnału startu.',
  },
  {
    name: 'Zapisuj okrążenia po minięciu bramki mety',
    text: 'Naciskaj spację lub dotykaj dużego przycisku za każdym razem, gdy dron pokona bramkę start/meta.',
  },
  {
    name: 'Analizuj telemetrię, różnice i powtarzalność',
    text: 'Sprawdzaj wykres słupkowy, delty czasowe i wskaźnik powtarzalności, a następnie eksportuj wyniki do CSV.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Zasady precyzyjnego pomiaru czasu w wyścigach dronów wielowirnikowych FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Wyścigi dronów FPV wymagają precyzji co do milisekundy i bezwzględnej powtarzalności toru lotu. Maszyny 5-calowe osiągają ponad 140 km/h, manewrując w ciasnych bramkach 3D i flagach. Skuteczny trening wymaga dźwiękowego startu, natychmiastowej rejestracji przelotów i kontroli tempa na przestrzeni kolejnych okrążeń.',
  },
  {
    type: 'title',
    text: 'Zestawienie klas wyścigowych dronów i parametrów pomiarowych',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Klasa / Standard', 'Typowa Długość Toru', 'Liczba Okrążeń', 'Średni Czas Okrążenia', 'Zakres Prędkości', 'Zalecany Czas Ochronny'],
    rows: [
      ['Tiny Whoop (65mm 1S)', 'od 50m do 80m', '5 okrążeń', 'od 8.5s do 13.0s', '35 do 55 km/h', '2.0 sekundy'],
      ['Micro 3.5 Cala (4S)', 'od 120m do 180m', '4 okrążenia', 'od 12.0s do 18.0s', '70 do 110 km/h', '2.5 sekundy'],
      ['MultiGP Spec 5 Cali (6S)', 'od 200m do 300m', '3 okrążenia', 'od 14.0s do 22.0s', '100 do 150 km/h', '3.0 sekundy'],
      ['Sprint na Otwartym Polu (6S/8S)', 'od 350m do 500m', '2 okrążenia', 'od 20.0s do 32.0s', '130 do 180 km/h', '4.0 sekundy'],
    ],
  },
  {
    type: 'title',
    text: 'Sygnały dźwiękowe procedury startowej i przepisy sportowe FAI F9U',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Zgodnie z sekcją 4 przepisów FAI CIAM dla wyścigów dronów, biegi rozpoczynają się sygnałami akustycznymi zamiast flag, aby zapewnić równe szanse reakcji pilotom w goglach. Procedura składa się z dźwięków 440 Hz co sekundę oraz sygnału 880 Hz oznaczającego start.',
  },
  {
    type: 'list',
    items: [
      'Tony przygotowawcze: Ostrzeżenia akustyczne pozwalające ustabilizować manetkę gazu i skupić wzrok.',
      'Sygnał startu (Go): Natychmiastowy impuls, od którego czas mierzony jest od t = 0.',
      'Potwierdzenie dźwiękowe: Sygnał potwierdzający zapis okrążenia bez odrywania wzroku od obrazu.',
      'Dźwięk rekordu: Wyraźny akord w momencie poprawienia najlepszego czasu sesji.',
    ],
  },
  {
    type: 'title',
    text: 'Znaczenie Wskaźnika Powtarzalności i strategia wyścigowa',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Pojedyncze rekordowe okrążenie robi wrażenie, ale zawody wygrywa regularność. Wskaźnik mierzy wahania: pilot o odchyleniach poniżej 0.3 sekundy unika błędów, nie traci energii w zawirowaniach powietrza i oszczędza napięcie akumulatora na ostatnią prostą.',
  },
  {
    type: 'tip',
    title: 'Wskazówka na trening w terenie',
    html: 'Umieść telefon lub tablet w słyszalnym miejscu w strefie pilotów. Podłącz bezprzewodowy przycisk nożny Bluetooth, aby rejestrować okrążenia stopą bez zdejmowania rąk z drążków aparatury.',
  },
];

const schemas: FpvDroneLapTimerLocaleContent['schemas'] = [
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

export const content: FpvDroneLapTimerLocaleContent = {
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
