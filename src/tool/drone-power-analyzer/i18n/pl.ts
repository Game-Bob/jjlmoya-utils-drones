import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'analizator-mocy-drona';
const title = 'Analizator Mocy Drona: Kalkulator Stosunku Ciągu do Masy dla FPV';
const description = 'Oblicz krytyczny stosunek ciągu do masy dla swojego drona FPV. Uzyskaj natychmiastowe rekomendacje profilu lotu, wizualny wskaźnik mocy i optymalizuj pod kątem cinematic, freestyle lub wyścigów.';

const faqItems = [
  {
    question: 'Co to jest stosunek ciągu do masy i dlaczego jest ważny?',
    answer: 'Stosunek ciągu do masy to całkowity ciąg, jaki może wytworzyć twój dron, podzielony przez jego całkowitą masę startową (AUW). To najważniejszy parametr określający, jak dron będzie się prowadził w powietrzu — od powolnego i stabilnego (cinematografia) do ultra-reaktywnego (wyścigi).',
  },
  {
    question: 'Jaki jest idealny stosunek ("sweet spot") do lotów freestyle?',
    answer: 'Dla płynnego freestyle\'u idealny stosunek mieści się w przedziale od 4:1 do 6:1. Stosunek 4:1 zapewnia doskonałą zwinność przy dobrej stabilności, podczas gdy 6:1 jest ekstremalnie reaktywny, ale wymaga większej precyzji operowania drążkiem gazu w ciasnych przestrzeniach.',
  },
  {
    question: 'Czy mogę używać tego do buildów kinowych (cinematic)?',
    answer: 'Tak. Dla płynnych, powolnych ujęć kinowych celuj w stosunek od 2:1 do 3:1. Pozwala to zachować stabilność i przewidywalność drona. Każda niższa wartość staje się trudna do kontrolowania, a wyższa będzie zbyt "nerwowa" przy powolnych ruchach.',
  },
  {
    question: 'Co się stanie, jeśli mój stosunek przekroczy 8:1?',
    answer: 'Powyżej 8:1 twój dron staje się maszyną wyścigową — ekstremalnie reaktywną i wymagającą w pilotażu. Tylko doświadczeni piloci powinni decydować się na takie buildy. Świetne do wyścigów i szybkich przelotów, ale niebezpieczne w pomieszczeniach.',
  },
  {
    question: 'Czy muszę wliczać wagę baterii do AUW?',
    answer: 'Tak. AUW (All-Up Weight) to całkowita waga drona ze wszystkimi zainstalowanymi komponentami: ramą, silnikami, regulatorami ESC, kontrolerem lotu, kamerą, baterią, śmigłami — wszystkim. Użyj przycisków szybkiego wyboru baterii, aby natychmiast dodać jej wagę.',
  },
];

const howToSteps = [
  {
    name: 'Wybierz konfigurację silników',
    text: 'Wybierz, czy twój build to Quad (4), Hexa (6) czy Octo (8). Ten mnożnik jest kluczowy dla całkowitego ciągu.',
  },
  {
    name: 'Wprowadź ciąg silnika',
    text: 'Wprowadź maksymalny ciąg, jaki może wytworzyć każdy silnik (w gramach). Znajdziesz to w specyfikacji silnika lub skorzystaj z szybkich ustawień.',
  },
  {
    name: 'Ustaw całkowitą wagę',
    text: 'Wprowadź całkowitą wagę startową (AUW) swojego drona — ramę, silniki, baterię, kamerę, wszystko. Skorzystaj z ustawień baterii dla natychmiastowej korekty wagi.',
  },
  {
    name: 'Odczytaj wyniki',
    text: 'Kalkulator natychmiast pokaże twój stosunek ciągu do masy, przydatność profilu lotu (Cinematic, Freestyle, Wyścigi) oraz spersonalizowaną rekomendację.',
  },
];

const schemas: DronePowerAnalyzerLocaleContent['schemas'] = [
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

export const content: DronePowerAnalyzerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    motorConfiguration: 'Konfiguracja silników',
    motorCount: 'Liczba silników',
    thrustPerMotor: 'Ciąg na silnik (maks.)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Szybkie ustawienia silników',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Konfiguracja wagi',
    auwLabel: 'Całkowita masa startowa (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Przełącz na lbs',
    switchToGrams: 'Przełącz na g',
    batteryPresets: 'Dodaj wagę baterii',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Całkowity ciąg',
    twRatio: 'Stosunek ciągu do masy',
    powerMeter: 'Wskaźnik mocy',
    flightProfiles: 'Ocena profilu lotu',
    cinematicLabel: 'Cinematic',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Wyścigi',
    proRacingLabel: 'Wyścigi Pro',
    suitable: 'Odpowiedni',
    notSuitable: 'Nieodpowiedni',
    recommendationLabel: 'Rekomendacja stylu lotu',
    recommendation_low: 'Przy stosunku poniżej 2:1 twój dron będzie miał problemy ze stabilnością. Rozważ zmniejszenie wagi lub wymianę silników na mocniejsze.',
    recommendation_cinematic: 'Stosunek {ratio}:1 jest idealny do ciężkich dronów kinowych, zapewniając płynne i kontrolowane ruchy. Perfekcyjny do powolnych, celowych ujęć.',
    recommendation_freestyle: 'Stosunek {ratio}:1 to idealny "sweet spot" dla freestyle\'u. Doskonała zwinność przy zachowaniu stabilności niezbędnej do trików.',
    recommendation_racing: 'Stosunek {ratio}:1 to terytorium wyczynowego freestyle\'u. Kontrola gazu jest kluczowa w ciasnych przestrzeniach i przy manewrach z dużą prędkością.',
    recommendation_extreme: 'Stosunek {ratio}:1 to maszyna wyścigowa. Ekstremalnie reaktywny — tylko dla doświadczonych pilotów na otwartych przestrzeniach.',
    compareMode: 'Porównaj buildy',
    scenario1: 'Build A',
    scenario2: 'Build B',
    addComparison: 'Dodaj porównanie',
    tooltipTWRatio: 'Stosunek ciągu do masy to całkowity ciąg podzielony przez wagę drona. Wyższy stosunek oznacza szybsze przyspieszenie i bardziej reaktywne sterowanie.',
    tooltipFreestyle: 'Idealny "sweet spot" dla freestyle\'u to stosunek od 4:1 do 6:1, zapewniający najlepszą równowagę między zwinnością a kontrolą.',
    badge_unstable: 'Niestabilny',
    badge_cinematic: 'Cinematic',
    badge_sweetSpot: 'Sweet Spot',
    badge_racing: 'Wyścigi',
    badge_extreme: 'Ekstremalny',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'Zrozumienie stosunku ciągu do masy w dronach FPV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Stosunek ciągu do masy</strong> jest prawdopodobnie najważniejszym parametrem przy budowie drona FPV. Jednak wielu pilotów go lekceważy, co prowadzi do powstawania dronów, które nie zachowują się zgodnie z oczekiwaniami. Ten kalkulator wyjaśnia obliczenia i pokazuje dokładnie, jak twój dron będzie się prowadził w locie.',
    },
    {
      type: 'title',
      text: 'Dlaczego stosunek ciągu do masy jest ważny',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stosunek ten określa trzy fundamentalne rzeczy: <strong>stabilność</strong>, <strong>reaktywność</strong> i <strong>prędkość</strong>. Stosunek 2:1 sprawia, że dron wydaje się ociężały i stabilny. Stosunek 6:1 sprawia, że jest zwinny i "nerwowy". Stosunek 10:1 to czysta maszyna wyścigowa. Zrozumienie, gdzie plasuje się twój dron, pomaga wybrać odpowiedni styl lotu i określić realistyczne oczekiwania.',
    },
    {
      type: 'title',
      text: 'Profile lotu — wyjaśnienie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cinematic (2:1 – 4:1)</strong>: Ciężki, stabilny, powolny. Idealny do płynnych ruchów kamery i dronów z dużym obciążeniem.',
        '<strong>Freestyle (3.5:1 – 6.5:1)</strong>: Zbalansowany "sweet spot". Wystarczająco reaktywny do trików, wystarczająco stabilny do kontroli.',
        '<strong>Wyścigi (5:1 – 8:1)</strong>: Szybki i zwinny. Zaprojektowany do przelotów przez bramki i agresywnych manewrów.',
        '<strong>Pro Racing (7:1+)</strong>: Ekstremalne osiągi. Tylko dla ekspertów na otwartych przestrzeniach.',
      ],
    },
    {
      type: 'title',
      text: 'Jak obliczyć stosunek ciągu do masy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Formuła jest prosta: <strong>stosunek = (ciąg na silnik × liczba silników) / całkowita masa startowa</strong>. Na przykład Quad z silnikami o ciągu 600g (łącznie 2400g) ważący 800g ma stosunek 3:1. To terytorium freestyle\'u.',
    },
    {
      type: 'title',
      text: 'Wybór odpowiedniego stosunku dla twojego drona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zapytaj siebie: <em>Jak zamierzam latać?</em> Powolne ujęcia kinowe? Agresywny freestyle? Szybkie wyścigi? Odpowiedź określi twój idealny stosunek. Większość pilotów FPV celuje w przedział 4:1 – 6:1, ponieważ oferuje on najlepszy kompromis między kontrolą a emocjami.',
    },
    {
      type: 'paragraph',
      html: 'Pamiętaj: wyższy stosunek nie oznacza "lepszy". Oznacza "bardziej reaktywny". W dronie wyścigowym jest to niezbędne. W dronie kinowym może być przeszkodą. Wybieraj świadomie.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
