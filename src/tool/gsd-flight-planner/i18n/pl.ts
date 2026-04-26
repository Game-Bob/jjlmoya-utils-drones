import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planer-lotu-gsd';
const title = 'Planer Lotu GSD: Kalkulator Rozdzielczości Terenowej';
const description = 'Oblicz rozdzielczość terenową (GSD) dla misji fotogrametrycznych. Wsparcie dla DJI, Autel i kamer niestandardowych. Planowanie lotu w czasie rzeczywistym z wizualnymi wskaźnikami jakości.';

const faqItems = [
  {
    question: 'Co to jest rozdzielczość terenowa (GSD)?',
    answer: 'GSD to odległość na ziemi reprezentowana przez jeden piksel na zdjęciu. Niższa wartość GSD oznacza wyższą rozdzielczość i więcej szczegółów. Na przykład GSD o wartości 1 cm/px pozwala rozpoznać szczegóły o wielkości 1 centymetra, co jest kluczowe w geodezji.',
  },
  {
    question: 'Gdzie znajdę specyfikację kamery mojego drona?',
    answer: 'Sprawdź instrukcję obsługi drona pod kątem wymiarów matrycy i ogniskowej obiektywu. Możesz też skorzystać z naszych ustawień dla popularnych modeli, takich jak DJI Mavic 3E czy Autel EVO II. W przypadku kamer niestandardowych zmierz rozmiar matrycy na podstawie specyfikacji obiektywu.',
  },
  {
    question: 'Jakiej wartości GSD potrzebuję dla różnych rodzajów misji?',
    answer: 'Topografia wysokiej precyzji: 1-2 cm/px. Standardowe mapowanie: 2-5 cm/px. Inspekcja i monitoring: 5-10 cm/px. Pomiary wizualne: 10+ cm/px. Wybierz wartość w oparciu o wymagania dokładności Twojego projektu.',
  },
  {
    question: 'Co to jest pokrycie zdjęć i dlaczego jest ważne?',
    answer: 'Pokrycie to procent obszaru, który pojawia się na kolejnych zdjęciach. Wysokie pokrycie (60-80%) zapewnia pełną ciągłość danych i poprawia jakość modelu 3D. Pokrycie podłużne wpływa na odstępy między zdjęciami; pokrycie poprzeczne wpływa na liczbę linii nalotu.',
  },
  {
    question: 'Jak obliczyć idealną wysokość lotu?',
    answer: 'Użyj tego kalkulatora: Żądane GSD × ogniskowa ÷ szerokość matrycy = wysokość. Kalkulator robi to automatycznie i pokazuje maksymalną bezpieczną wysokość, aby utrzymać docelową precyzję i uniknąć rozmycia ruchu.',
  },
];

const howToSteps = [
  {
    name: 'Wybierz lub skonfiguruj kamerę',
    text: 'Wybierz jeden z predefiniowanych modeli (DJI Mavic 3E, Autel EVO II itp.) lub wprowadź ręcznie wymiary matrycy i ogniskową. Ustawienia ładowane są natychmiast.',
  },
  {
    name: 'Ustaw wysokość lotu',
    text: 'Użyj suwaka wysokości, aby dostosować wysokość nad poziomem gruntu (AGL). Obserwuj aktualizację GSD w czasie rzeczywistym, aby zobaczyć, jak wysokość wpływa na rozdzielczość obrazu.',
  },
  {
    name: 'Zdefiniuj wymagania dotyczące pokrycia',
    text: 'Ustaw procentowe pokrycie podłużne i poprzeczne. Wyższe pokrycie zapewnia pełne dane, ale zwiększa czas misji i liczbę zdjęć.',
  },
  {
    name: 'Przejrzyj wyniki i eksportuj',
    text: 'Sprawdź GSD, obszar pokrycia i klasyfikację precyzji. Wygeneruj szybki raport, który możesz dołączyć do swojego oficjalnego planu lotu.',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: 'Konfiguracja',
    cameraSelection: 'Wybór kamery',
    manualMode: 'Tryb ręczny',
    sensorConfig: 'Konfiguracja matrycy',
    width: 'Szerokość',
    height: 'Wysokość',
    focalLength: 'Ogniskowa',
    imageResolution: 'Rozdzielczość obrazu',
    w: 'S',
    h: 'W',
    px: 'px',
    altitudeAgl: 'Wysokość (AGL)',
    overlapSettings: 'Konfiguracja pokrycia',
    forward: 'Podłużne',
    lateral: 'Poprzeczne',
    missionArea: 'Obszar misji',
    totalAreaToSurvey: 'Całkowity obszar pomiaru',
    hectareHint: '1 ha = 10 000 m²',
    inverseCalc: 'Obliczenia odwrotne',
    targetGsd: 'Docelowe GSD',
    maxAltitude: 'Maks. wysokość',
    reset: 'Resetuj',
    results: 'Wyniki',
    gsdResult: 'Rozdzielczość terenowa (GSD)',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Wysoka prec.',
    standard: 'Standard',
    inspection: 'Inspekcja',
    visual: 'Wizualne',
    coveragePerImage: 'Pokrycie na zdjęcie',
    area: 'Obszar',
    spacing: 'Rozstaw',
    flightDir: 'Lot →',
    missionMetrics: 'Dane misji',
    images: 'Zdjęcia',
    shots: 'ujęć',
    flightLines: 'Linie nalotu',
    lines: 'linii',
    flightTime: 'Czas lotu',
    min: 'min',
    dataVolume: 'Objętość danych',
    gb: 'GB',
    copyShareLink: 'Kopiuj link',
    downloadReport: 'Pobierz raport',
    copiedToClipboard: 'Skopiowano!',
    metric: 'Metryczne',
    imperial: 'Imperialne',
    classHighPrecision: 'Topografia wysokiej precyzji',
    classStandard: 'Standardowe mapowanie',
    classInspection: 'Inspekcja i monitoring',
    classVisual: 'Pomiary wizualne',
    ultraHighResAlert: 'Bardzo wysoka rozdzielczość: upewnij się, że masz wystarczająco miejsca i mocy obliczeniowej',
    lowOverlapAlert: 'Pokrycie podłużne poniżej 60%: może wpłynąć na jakość modelu 3D',
    largeDatasetAlert: 'Bardzo duży zbiór danych: rozważ podział na kilka lotów',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'Planer Lotu GSD: Kompletny kalkulator fotogrametryczny',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Rozdzielczość terenowa (GSD)</strong> to najważniejszy parametr w fotogrametrii dronowej. Błąd w obliczeniach może zmarnować cały dzień lotów i kosztować tysiące w utraconej produktywności. Ten kalkulator eliminuje to ryzyko.',
    },
    {
      type: 'title',
      text: 'Dlaczego GSD jest kluczowe dla profesjonalistów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Niezależnie od tego, czy mierzysz teren, tworzysz modele 3D, czy monitorujesz infrastrukturę, GSD decyduje o poziomie szczegółowości, jaki możesz uchwycić. Misja przy 1 cm/px rejestruje szczegóły, których misja przy 5 cm/px nie zauważy. Jednak zbyt niski lot marnuje baterię i niepotrzebnie wydłuża czas misji.',
    },
    {
      type: 'title',
      text: 'GSD według typu misji',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Topografia wysokiej precyzji (1-2 cm/px):</strong> Dokładność geodezyjna dla działek, terenów kopalnianych i projektów inżynieryjnych.',
        '<strong>Standardowe mapowanie (2-5 cm/px):</strong> Ortomofotomapy, monitoring rolniczy i mapy ogólnego przeznaczenia.',
        '<strong>Inspekcja i monitoring (5-10 cm/px):</strong> Inspekcje budynków, przeglądy linii energetycznych i wykrywanie zmian.',
        '<strong>Pomiary wizualne (10+ cm/px):</strong> Rozpoznanie dużych obszarów i ocena wizualna.',
      ],
    },
    {
      type: 'title',
      text: 'Wzór na GSD',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Wysokość × Szerokość matrycy) / (Ogniskowa × Szerokość obrazu) × 100</code><br/>Ten kalkulator zajmuje się matematyką. Ty skupiasz się na misji.',
    },
    {
      type: 'title',
      text: 'Pokrycie: Dlaczego 60-80% to idealny zakres',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Niskie pokrycie (20-40%) oszczędza baterię, ale grozi lukami w danych. Wysokie pokrycie (80%+) gwarantuje ciągłość, ale wydłuża misję. <strong>Zakres 60-80%</strong> to profesjonalny standard: zapewnia pełną rekonstrukcję 3D bez nadmiernej redundancji.',
    },
    {
      type: 'title',
      text: 'Planuj lepsze misje dzięki realnym danym',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Przed każdym lotem użyj tego kalkulatora, aby określić: dokładną wysokość dla wymaganego GSD, liczbę potrzebnych zdjęć, całkowity czas misji oraz czy istnieje ryzyko rozmycia ruchu. Dzięki tym danym wykonasz precyzyjne misje i unikniesz kosztownych błędów.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
