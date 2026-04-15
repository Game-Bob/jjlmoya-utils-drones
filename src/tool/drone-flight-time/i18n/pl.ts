import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'kalkulator-czasu-lotu-drona';
const title = 'Kalkulator Czasu Lotu Drona do Szacowania Autonomii LiPo LiIon';
const description = 'Oblicz, jak długo Twój dron może latać na podstawie pojemności mAh i zużycia prądu. Zoptymalizuj swoje akumulatory LiPo dla bezpiecznych lotów.';

const faqItems = [
  {
    question: 'Why is actual flight time lower than calculated?',
    answer: 'The calculator assumes constant consumption. Sharp maneuvers, headwinds, and battery wear can reduce actual flight time by up to 30%.',
  },
  {
    question: 'At what voltage should I land my drone?',
    answer: 'Ideally, land when the voltage drops to 3.5V - 3.6V per cell (at rest). This corresponds to the recommended 20% remaining capacity.',
  },
  {
    question: 'Are LiPo or Li-Ion batteries better for drones?',
    answer: 'LiPos offer high instantaneous power (ideal for racing and acrobatics). Li-Ion cells have longer endurance but lower power output (ideal for long, steady flights).',
  },
  {
    question: 'How does the cell count (S) affect flight time?',
    answer: 'More cells increase voltage and power, but also weight. If motors are optimized for that voltage, they can be more efficient, but cell count alone does not guarantee more time.',
  },
];

const howToSteps = [
  {
    name: 'Identify Capacity',
    text: 'Check your battery label and look for the mAh value (e.g., 1500, 2200, 4500).',
  },
  {
    name: 'Estimate Current Draw',
    text: 'Enter the average amperage your drone consumes. You can find this in your OSD telemetry after a test flight.',
  },
  {
    name: 'Adjust Safety Margin',
    text: 'We recommend leaving 20% (set to 80%) to protect the battery and provide a landing buffer.',
  },
  {
    name: 'Get the Result',
    text: 'View the exact time in minutes and seconds that you can safely stay in the air.',
  },
];

const schemas: DroneFlightTimeLocaleContent['schemas'] = [
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


export const content: DroneFlightTimeLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  bibliographyTitle: 'Bibliografia',
  ui: {
    faqTitle: 'Często Zadawane Pytania',
    bibliographyTitle: 'Bibliografia',
    batterySpecs: 'Specyfikacja Akumulatora',
    capacity: 'Pojemność',
    voltage: 'Napięcie (Cele S)',
    safetyMargin: 'Margines Bezpieczeństwa',
    landingHint: 'Ląduj przy 3.5V - 3.7V na celę.',
    consumptionDynamics: 'Dynamika Zużycia',
    averageConsumption: 'Średni Pobór Prądu',
    powerWatts: 'Moc (Waty)',
    efficiencyHint: 'Przy zmianie Amperów, Waty są przeliczane na podstawie napięcia S.',
    estimatedEfficiency: 'Szacowana Wydajność',
    typicalEfficiencyHint: 'Typowa: 4-6 (Racing), 8-12 (Cinematic/Long Range).',
    safeFlight: 'Bezpieczny Lot',
    totalEnergy: 'Całkowita Energia',
    theoreticalTime: 'Czas Teoretyczny (0%)',
    co2Footprint: 'Ślad Węglowy CO2',
    autonomyChart: 'Wykres Autonomii',
    chartSubtitle: 'Ampery (A) vs. Czas (min)',
    chartLabel: 'Minuty',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Czasu Lotu Drona: Kompletny Przewodnik po Autonomii',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Autonomia jest prawdopodobnie najbardziej krytycznym czynnikiem w projektowaniu i eksploatacji każdego bezzałogowego statku powietrznego. Niezależnie od tego, czy jesteś pilotem wyścigowym FPV, profesjonalnym fotografem lotniczym, czy entuzjastą lotów dalekiego zasięgu, dokładna wiedza o tym, jak długo Twój sprzęt może pozostać w powietrzu, jest niezbędna dla bezpieczeństwa i sukcesu misji. Nasz <strong>kalkulator czasu lotu</strong> wykorzystuje podstawowe zmienne pojemności akumulatora i poboru prądu, aby zapewnić realistyczne i bezpieczne szacunki.',
    },
    {
      type: 'title',
      text: 'Pojemność Akumulatora: Wyjaśnienie mAh',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pojemność akumulatora jest zazwyczaj mierzona w miliamperogodzinach (mAh). Ta liczba wskazuje, jak duży ładunek elektryczny może pomieścić akumulator. Na przykład akumulator 1500 mAh może teoretycznie dostarczać 1500 miliamperów przez jedną pełną godzinę. W świecie dronów, gdzie pobór prądu jest ekstremalnie wysoki, zazwyczaj mówimy w Amperach (A). 1000 mAh to dokładnie 1 Ah (Amperogodzina).',
    },
    {
      type: 'paragraph',
      html: 'Jednak sama pojemność to nie wszystko. Napięcie (określane przez liczbę cel lub \'S\') bezpośrednio wpływa na całkowitą moc (Waty), ale do obliczania czasu na podstawie zużycia silników, stosunek Ah/Ampery jest najbardziej bezpośrednią metryką stosowaną przez inżynierów lotnictwa.',
    },
    {
      type: 'title',
      text: 'Pobór Prądu: Natężenie w Locie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zużycie silników to najbardziej zmienna wartość podczas lotu. Utrzymywanie drona w zawisie (hover) to nie to samo co wykonywanie agresywnych manewrów akrobatycznych. Każda kombinacja silnika i śmigła ma swoją krzywą wydajności. Kiedy dajesz pełny gaz, natężenie prądu gwałtownie rośnie, drastycznie skracając żywotność akumulatora.',
    },
    {
      type: 'list',
      items: [
        'Lot w Zawisie: Zużycie jest minimalne i stałe, idealne do fotografii.',
        'Lot Wycieczkowy: Nieco zwiększone zużycie ze względu na opór aerodynamiczny.',
        'Lot Agresywny/FPV: Skoki natężenia mogą potroić średnie zużycie w ciągu kilku sekund.',
        'Waga Drona: Każdy dodatkowy gram wymaga wyższych obrotów silnika, aby wygenerować siłę nośną, co zwiększa natężenie prądu.',
      ],
    },
    {
      type: 'title',
      text: 'Zasada Bezpieczeństwa 80: Ochrona Chemii LiPo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rozładowanie akumulatora LiPo (litowo-polimerowego) do 0% pojemności to najszybszy sposób na jego zniszczenie, a co gorsza, spowodowanie katastrofy. Z punktu widzenia chemicznego cele ulegają nieodwracalnemu uszkodzeniu, jeśli ich napięcie spadnie poniżej krytycznego progu (zazwyczaj 3,0V - 3,2V na celę).',
    },
    {
      type: 'paragraph',
      html: 'Dlatego zawsze stosujemy <strong>zasadę marginesu bezpieczeństwa</strong>. Nasz kalkulator pozwala dostosować tę wartość, ale zaleca się lądowanie, gdy pozostanie jeszcze 20% ładunku. Nie tylko wydłuża to żywotność drogich akumulatorów o setki cykli, ale także gwarantuje niezbędną rezerwę mocy w przypadku niespodziewanych podmuchów wiatru lub konieczności przerwania lądowania i ponownej próby.',
    },
    {
      type: 'tip',
      html: 'Akumulatory do dronów są bardzo wrażliwe na zimno. Zimą opór wewnętrzny LiPo rośnie, co powoduje szybszy spadek napięcia. Zawsze rozgrzewaj akumulatory przed startem, jeśli temperatura otoczenia jest niższa niż 15 stopni Celsjusza.',
    },
    {
      type: 'title',
      text: 'Matematyczna Formuła Lotu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chociaż nasze narzędzie wykonuje ciężką pracę za Ciebie, warto znać logikę stojącą za obliczeniami. Podstawowy wzór to:',
    },
    {
      type: 'paragraph',
      html: '<strong>Czas (min) = ((Pojemność mAh / 1000) * Współczynnik Bezpieczeństwa) / Pobór Amperów * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Na przykład, jeśli masz akumulator 2200 mAh, chcesz lądować przy 20% (bezpieczeństwo 0,8), a Twój dron pobiera średnio 15 Amperów: (2,2 * 0,8) / 15 * 60 = 7,04 minuty bezpiecznego lotu.',
    },
    {
      type: 'title',
      text: 'Optymalizacja Wagi i Wydajność',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Istnieje punkt malejących korzyści przy dodawaniu większych akumulatorów. Podwojenie pojemności akumulatora nie podwaja czasu lotu, ponieważ sam akumulator zwiększa wagę. Ta dodatkowa waga wymaga od silników szybszego obracania się, a tym samym zużywania większej ilości prądu. W pewnym momencie dodatkowa waga zużywa więcej energii, niż dostarcza, zmniejszając ogólną wydajność systemu.',
    },
    {
      type: 'paragraph',
      html: 'Doświadczeni piloci szukają idealnej równowagi między <em>Disc Loading</em> (obciążeniem powierzchni śmigieł) a pojemnością akumulatora, aby zmaksymalizować to, co nazywamy "użytecznym czasem misji".',
    },
    {
      type: 'title',
      text: 'Różnice Między Typami Dronów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Mikrodrony (Whoops):</strong> Pobierają zaledwie 2-5 Amperów, ale używają akumulatorów 300-500 mAh. Czas jest zazwyczaj krótki (3-4 min) ze względu na niską bezwładność i wysokie obroty.',
    },
    {
      type: 'paragraph',
      html: '<strong>5-calowe Drony Wyścigowe:</strong> Potężne zużycie podczas wyścigów (do 120A w szczycie), co wyczerpuje akumulator 1300 mAh w zaledwie 2 minuty czystej adrenaliny.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drony Dalekiego Zasięgu:</strong> Zoptymalizowane pod kątem wydajności. Często używają ogniw litowo-jonowych (Li-Ion), które mają wyższą gęstość energii niż LiPo, co pozwala na loty trwające od 30 do 60 minut przy bardzo niskim natężeniu prądu.',
    },
    {
      type: 'tip',
      html: 'Zmiana śmigieł na takie o mniejszym skoku (pitch) może wydłużyć czas lotu kosztem prędkości maksymalnej i responsywności. Jest to najtańszy i najskuteczniejszy sposób na uzyskanie o 10-15% większej autonomii.',
    },
    {
      type: 'title',
      text: 'Konserwacja i Przechowywanie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aby obliczenia tego narzędzia były dokładne, Twoje akumulatory muszą być w dobrym stanie. Akumulator o wysokim oporze wewnętrznym będzie się nadmiernie nagrzewał i "kłamał" na temat swojej rzeczywistej pojemności. Zawsze przechowuj akumulatory przy napięciu spoczynkowym (3,8V-3,85V na celę), jeśli nie będziesz latać dłużej niż 48 godzin.',
    },
    {
      type: 'paragraph',
      html: 'Podsumowując, zarządzanie energią to sztuka równoważenia fizyki, chemii i matematyki. Korzystaj z naszego kalkulatora regularnie, aby planować swoje sesje lotnicze i nigdy nie zapominaj, że w powietrzu czas jest Twoim najcenniejszym zasobem. Życzymy udanych lotów i bezpiecznych lądowań!',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'EASA - Drone Regulations', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot Wiki', url: 'https://ardupilot.org/copter/' },
    { name: 'Battery University', url: 'https://batteryuniversity.com/' },
  ],
  howTo: howToSteps,
  schemas,
};
