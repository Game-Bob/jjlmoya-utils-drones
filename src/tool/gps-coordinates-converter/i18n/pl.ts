import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'konwerter-wspolrzednych-gps';
const title = 'Konwerter Wspolrzednych GPS Nawigacji po Punktach Trasy';
const description = 'Konwertuj współrzędne GPS między stopniami dziesiętnymi (DD), stopniami minutami sekundami (DMS) i formatami sprzętowymi. Niezbędne dla ArduPilot i INAV.';

const faqItems = [
  {
    question: 'What is the difference between DD and DMS?',
    answer: `DD (Decimal Degrees) uses a single number with decimals (e.g., 51.50). DMS (Degrees, Minutes, Seconds) divides the degree into sexagesimal fractions (e.g., 51° 30' 0").`,
  },
  {
    question: 'Why are negative coordinates used?',
    answer: 'In the Decimal system (DD), latitudes south of the Equator and longitudes west of Greenwich are indicated with a negative sign to facilitate mathematical calculations.',
  },
  {
    question: 'How much precision do I lose when converting?',
    answer: 'Our tool uses double-precision floating point. With 6 decimals in DD, the precision is about 11 centimeters, which is more than enough for drones and civil navigation.',
  },
  {
    question: 'Does this tool work offline?',
    answer: 'Yes, once the page is loaded, all conversion logic is local (client-side). Only the map requires a connection to download new tiles.',
  },
];

const schemas: GpsCoordinatesConverterLocaleContent['schemas'] = [
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
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Input Coordinates',
        text: 'Enter your coordinates in either Decimal Degrees (DD) or Degrees, Minutes, Seconds (DMS) format.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Review Conversion',
        text: 'The tool instantly displays the converted coordinates in all supported formats.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify on Map',
        text: 'Check the map visualization to ensure the coordinates point to the correct location.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Copy Result',
        text: 'Copy the converted coordinates to your clipboard for use in navigation systems or mission planning.',
      },
    ],
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


export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  bibliographyTitle: 'Materiały Źródłowe',
  ui: {
    faqTitle: 'Często Zadawane Pytania',
    bibliographyTitle: 'Materiały Źródłowe',
    latitude: 'Szerokość Geograficzna',
    longitude: 'Długość Geograficzna',
    decimalDegrees: 'Stopnie Dziesiętne (DD)',
    degreesMinutesSeconds: 'Stopnie, Minuty, Sekundy (DMS)',
    gpsHardware: 'Sprzętowy Format GPS (Surowy)',
    copy: 'Kopiuj',
    copied: 'Skopiowano!',
    invalidCoordinate: 'Nieprawidłowa Współrzędna',
    pasteHardwareMapFormat: 'Wklej surowe dane sprzętowe (np. 404306300, -739981800)',
    validation: {
      latRange: 'Szerokość geograficzna musi mieścić się w przedziale od -90 do 90.',
      lonRange: 'Długość geograficzna musi mieścić się w przedziale od -180 do 180.',
      invalidFormat: 'Format nierozpoznany. Sprawdź, czy wprowadzono poprawne dane.',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Zrozumieć Współrzędne GPS: Niezbędne Narzędzie Nawigacji Dronem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gdy w grę wchodzi lot autonomiczny, pomiary fotogrametryczne z powietrza, albo też ratowanie zgubionego drona, liczy się dokładność i jednolitość. Współrzędne GPS są kręgosłupem nawigacji, ale różne systemy (takie jak Betaflight, INAV, ArduPilot czy Mapy Google) używają różnych formatów. Nasz <strong>Konwerter Współrzędnych GPS</strong> wypełnia tę lukę, zapewniając, że Twoje punkty orientacyjne (waypoints) zawsze trafią tam, gdzie zaplanowałeś.',
    },
    {
      type: 'title',
      text: 'Trzy Najważniejsze Formaty GPS',
      level: 3,
    },
    {
      type: 'title',
      text: '1. Stopnie Dziesiętne (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Jest to obecnie najpopularniejszy standard na świecie, wykorzystywany przez <strong>Mapy Google</strong>, smartfony i internetowe systemy mapowania. Przedstawia pozycję w postaci czystej liczby dziesiętnej (np. <code>40.7128, -74.0060</code>). Taki zapis jest najłatwiejszy do kopiowania, wklejania i przetwarzania przez systemy informatyczne.',
    },
    {
      type: 'list',
      items: [
        'Dodatnia szerokość to półkula północna; ujemna to południowa.',
        'Dodatnia długość wskazuje wschód od południka zerowego (Greenwich); ujemna to zachód.',
      ],
    },
    {
      type: 'title',
      text: '2. Stopnie, Minuty, Sekundy (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Tradycyjny format używany w marynarce, lotnictwie i starszych mapach topograficznych (np. <code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code>). Choć bywa intuicyjny przy pracy z tradycyjną mapą papierową, to znaki specjalne sprawiają, że podczas planowania misji drona i ręcznego wpisywania bywa uciążliwy i stwarza pole do literówek.',
    },
    {
      type: 'title',
      text: '3. Surowy Format Sprzętowy GPS (Raw / INAV / ArduPilot)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Przeglądając surowe logi (tzw. Blackbox), zrzuty (dumps) z konsoli CLI lub analizując połączenia na danych pokroju protokołu MAVLink, napotkasz format składający się z nienaturalnie wielkich ciągów liczbowych bez żadnych przecinków (np. <code>407128000, -740060000</code>).',
    },
    {
      type: 'paragraph',
      html: 'Dzieje się tak, ponieważ mikrokontrolery wykonują układy obliczeniowe dużo płynniej, używając wartości w liczbach całkowitych, bez ułamków (tzw. float). Stąd dane DD są sztucznie powiększane przez pomnożenie razy <strong>10.000.000 (1e7)</strong>. Nasze narzędzie bezbłędnie zdejmuje te mnożniki i przerabia je z powrotem do ludzkiej formy.',
    },
    {
      type: 'title',
      text: 'Praktyczne Zastosowania w Pilotowaniu Dronów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Główne sytuacje, w których będziesz niezmiernie zadowolony, że masz ten konwerter pod ręką:',
    },
    {
      type: 'list',
      items: [
        '<strong>Poszukiwania Zgubionego Drona:</strong> Wyświetlacze ekranowe OSD (On-Screen Display) oraz telemetria aparatury RC często podają współrzędne zapisane tylko pod kątem wymogów pilotażu, np. formatu DMS. Przerzucając je do formy na DD, ekspresowo postawisz nawigacyjną pinezkę na Mapach w Google i ruszysz w teren.',
        '<strong>Planowanie Misji Użytkowych:</strong> Oprogramowania takie jak Mission Planner bazują na precyzji w formacie dziesiętnym. Gdy dostajesz notatki pomiarowe w DMS od służb cywilnych, łatwo i sprawnie dopasujesz to do standardów autonomicznych Twojej platformy FPV/Autonomy.',
        '<strong>Wywoływania ze Środowiska Wiersza Komend:</strong> Tryby takie jak "Rescue Return To Home", ustalane przez kod i wpisy CLI, czasami z przymusu wymusza wprowadzanie ogromnego cyfrowego Raw z surowego hardwareu.',
      ],
    },
    {
      type: 'title',
      text: 'Zrozumieć Precyzję: Ile Zer po Przecinku Naprawdę Potrzebujesz?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aby odnaleźć sprzęt, trzeba zachować stosowną skrupulatność w rozwijania liczb dziesiętnych. Analiza na wymiarze osi Ziemi, blisko jej równika:',
    },
    {
      type: 'list',
      items: [
        '<strong>Jedno Miejsce Po Przecinku:</strong> Np. 40.1 - Pomyłka w dokładności rzędu około 111 kilometrów (Bezużyteczne).',
        '<strong>Trzy Miejsca Po Przecinku:</strong> Np. 40.123 - To uchyb leżący na granicy rzędu ok. 110 metrów.',
        '<strong>Pięć Miejsc Po Przecinku:</strong> Np. 40.12345 - Dajemy marginesy pod rozmiar drobniejszy ażeby dociągnąć ok. 1,1 Metra (Standard, zalecany i celny format ratowniczy).',
        '<strong>Siedem Miejsc Po Przecinku:</strong> Np. 40.1234567 - Dla fachowych aparatur RTK osiągających do precyzji geodezyjnej - ok. 11 mm marginesu!',
      ],
    },
    {
      type: 'paragraph',
      html: 'Moduły GPS dla konsumentów (takie jak klasyczne M8N i modele M10) w dobrym i otwartym niebie wyrabiają w rzetelnym zakresie te ramy 5 punktów dziesiętnych. Kopiując i badając dane, nie obcinaj ich - przerzucaj z zapasem, chociaż 6 miejsc - by mieć pewność optymalnej wyznaczonej formy ratunkowej.',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'Ardupilot – Oficjalny przewodnik Dokumentujący o Integracjach Lotu Autonomousnych .', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: 'Encyklopedyczne objaśnienie notatek wymiaru Współrzędnej u Wikipedia o formie DD', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: 'Rzetelnie zweryfikuj posiadany Format jako Źródło',
      text: 'Przyglądnij co ty dostałeś od ręki w cyfrach. Wielkie masywne na samej cyfrze np 404306300 - raw-hw, obecność literek, apostrof i podzięk jako pod stopień - wędruj na D-M-S , prosta w kompozycję kropku z przedziałem = to Czysty Decimal DD ',
    },
    {
      name: 'Wrzuć dane bazowe do Przeliczenia',
      text: 'Obrawszy okno startowe - wykonaj klasyczne Wklejenie.',
    },
    {
      name: 'Poczekaj Ułamek Na Zobacz rezultat na Podgląd ',
      text: 'Narzędzie wykonując czary przetropi do wymiarach dając do okien dwa puste formaty odpowiednik jako już wykonany przekształcenia.',
    },
    {
      name: 'Złap i Kopiuj W Przestrzeń Celową',
      text: 'Kopiując już przerobiony odczyt z ramki posłuży ci do zaprogramowana przelotu np lot w system z program - Inav - czy misyjny , rzucając cel  i w map - google do poszukania zguba!  . ',
    },
  ],
  schemas,
};
