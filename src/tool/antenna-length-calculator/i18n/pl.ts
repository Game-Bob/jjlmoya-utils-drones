import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'kalkulator-dlugosci-anteny';
const title = 'Kalkulator Dlugosci Anteny RF dla Dipoli i Batow FPV';
const description = 'Oblicz dokładny wymiar dla swoich anten 868MHz, 2.4GHz i 5.8GHz. Zwiększ zasięg drona i uniknij spalenia nadajnika dzięki zoptymalizowanemu SWR.';

const faqItems = [
  {
    question: 'Jak to się stało i po grzyba przewody winne posiadać ściągawki i ucięcia specjalnym wyliczonym schematem dlugościowym?',
    answer: 'Częstotliwości mają własne szlaki po drodze falowej odbić, z bycia w pełnej korelacji oddają z siebie sprawny przesył. Utnij w mniejszą lub szerszą a cały nakład pracy cofnie się falą jak wodą przed tamą prosto na serce odbiornika po nagrzaniu z paląc cały układ dosłownie.',
  },
  {
    question: 'Od kod ten termin - Wskaźnik, Factor Prędkości fali albo z angielskiego na skrótach (VF)?',
    answer: 'Jej rola odgrywana ukazuje tempo drogi dla światła oraz co gorsze - utratę pędu na przebiciu fali np w rdzeniu. A więc czysta gruba rurka pręta ucieknie i doleci przed zakrzywieniem izolowanej otulinką żyły na 0.95 w liczniku miedzi (A my ujmiemy te - % przed przycięciem docelu)',
  },
  {
    question: 'To która teraz lepsza antena, no i co wybrać i dla kogo, Dipol oraz Bat pionowy czy jakaś 1 na ileś lambda czy falowo?',
    answer: 'Równoważny dipo w polowie pełnej dawki gra przewidywalnie oraz nadaje kierunkowi duży stabilniejszy promień odbiorczy, acz bywa toporny w upakowaniu. Za to monopolik i jego 0.25 (ćwierć obiegowej skali) idealnie zmieścisz w nano urządzeniach , nie unikaj jednak koniecznego dodania płytki dla odbić gnd (ground/masa).',
  },
  {
    question: 'A jak grubsza antena ten oplot twardy z dużą żylą z kabla z zewnątrz polepsza osiągi i ma te zalety?',
    answer: 'Szerokość pomaga zatuszować niedokładną amatorkę w zrobionej długości , aczkolwiek spowalnia też w pewnych obszarach przepust w Velocity - a więc pożądana jakość wyrobienia by awg było w ramach w strefie u standart ok . 22.',
  },
];

const howToSteps = [
  {
    name: 'Rzetelny Wybór Potrzeb',
    text: 'Zakoduj z guzików lub sam we wprowadzenie z dłoni i po klawiaturzę ,że idziemy celowo po obiegówkę częstoliwości w 5. gHz (albo inny popularny np WiFi obwód z 2. ), nie wymuszone a dobrowolne - 868 też.',
  },
  {
    name: 'Identyfikacja Po Budownictwie Układu Fali',
    text: 'Obejmuj umysłem chęć co robisz czy składasz pełny "donut" dipol w połwce (a więc podzielony jak 1 / 2) czy decydujesz pręcik bat czyli ucięty (1 od / do 4) promieniujący czub o jeden kierunek do uziemianego bloku...',
  },
  {
    name: 'Zmiany ze Względu Właściwości Materiałowo Powlekających Twój Projekt',
    text: 'Dobieraj w podzespole rodzaj przewodu aby ten parametr zwany owym - współczynnikiem Vf miał ręce oraz spójne podstawy dla poprawnych miar długości z podanymi na końcu wymogami rzetelnej matematyki.',
  },
  {
    name: 'I Odcinamy Ze Zgromadzoną Precjozą , Precyzja Niezwykle Opłacana !',
    text: 'Posiłkuj sie punktem z "Ramię do Ramię" albo by uciąć jeden i oddziel się tylko nim w punktu - Od Lutu na samej Płytkce , nie tnij samego kabelku - po całości by ogołocić pręt by został gły lity promień - on nadaje ten zasięg!',
  },
];

const schemas: AntennaLengthCalculatorLocaleContent['schemas'] = [
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

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  bibliographyTitle: 'Bibliografia',
  ui: {
    faqTitle: 'Często Zadawane Pytania',
    bibliographyTitle: 'Bibliografia',
    signalParameters: 'Parametry Sygnału',
    antennaType: 'Typ Anteny',
    dipole: 'Dipol (1/2 λ)',
    whip: 'Bat (1/4 λ)',
    conductorMedium: 'Ośrodek Przewodzący',
    totalLength: 'Długość Całkowita',
    branchLength: 'Długość na Ramię',
    secondaryResonance: 'Punkty Rezonansu Wtórnego',
    swrIdeal: 'Idealne SWR',
    impedance: 'Impedancja',
    criticalNotice: 'Ważna Uwaga',
    criticalNoticeText: 'Źle docięta antena generuje wysoki SWR (WFS), który może przegrzać i zniszczyć końcówki mocy nadajnika w kilka sekund.',
    dynamicScheme: 'Schemat Dynamiczny (mm)',
    harmonicLabel: 'Harmoniczna',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Naga Miedź (0.95)',
    materialPvcInsulated: 'Kabel w izolacji z PVC (0.92)',
    materialSolidRod: 'Pręt lity (0.97)',
    materialCoaxial: 'Kabel koncentryczny (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Dlaczego długość anteny radiowej jest tak krytyczna?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jeśli kiedykolwiek zastanawiałeś się, dlaczego anteny dronów wyścigowych (FPV), nadajników dalekiego zasięgu (ELRS/Crossfire), a nawet routera Wi-Fi mają tak specyficzne długości, odpowiedź leży w fizyce rezonansu. Antena to nie tylko kawałek przewodu; to element, który musi być "dostrojony" do częstotliwości fali elektromagnetycznej, którą obsługuje.',
    },
    {
      type: 'paragraph',
      html: 'Budując własną antenę, niezależnie od tego, czy jest to <strong>dipol</strong> dla 868MHz czy <strong>antena typu bat</strong> dla 5.8GHz, dokładność mierzy się w milimetrach. Błąd o zaledwie 2 lub 3 mm może sprawić, że antena będzie nieefektywna, co spowoduje wysoki współczynnik fali stojącej (SWR lub WFS).',
    },
    {
      type: 'title',
      text: 'Podstawowe pojęcia: Długość fali i Rezonans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Częstotliwości radiowe (RF) poruszają się z prędkością światła (około 300 000 kilometrów na sekundę). Aby antena optymalnie emitowała lub odbierała energię, jej rozmiar fizyczny musi być bezpośrednio związany z odległością przebywaną przez pełny cykl fali, zwaną <strong>długością fali (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Podstawowy wzór do obliczania długości fali to λ = v / f, gdzie "v" to prędkość propagacji, a "f" to częstotliwość. Jednak w świecie rzeczywistym prąd wędruje nieco wolniej przez metale niż przez próżnię. W tym miejscu do gry wkracza <strong>Współczynnik Prędkości (Vf)</strong>.',
    },
    {
      type: 'list',
      items: [
        'Naga miedź: Ma Vf wynoszący około 0.95.',
        'Przewody izolowane (PVC): Izolacja spowalnia falę, obniżając współczynnik do 0.92 lub mniej.',
        'Lite pręty miedziane: Ponieważ są grubsze i wysoce przewodzące, współczynnik ten nieznacznie wzrasta do 0.97.',
      ],
    },
    {
      type: 'title',
      text: 'Typowe rodzaje anten w Dronach i Projektach Majsterkowiczów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Antena Dipolowa Półfalowa (1/2 λ):</strong> To złoty standard w wielu zastosowaniach. Składa się z dwóch ramion (elementów promieniujących), które razem tworzą połowę długości fali częstotliwości roboczej. Jest to zrównoważona antena oferująca kształt promieniowania przypominający "pączka" i jest bardzo łatwa do wykonania z kabla koncentrycznego.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Antena Ćwierćfalowa (Bat) lub Monopolowa (1/4 λ):</strong> Jest to antena, którą zwykle widujemy na odbiornikach radiowych lub małych dronach. Ma tylko jeden element promieniujący i wykorzystuje obudowę urządzenia lub płaszczyznę uziemienia, aby "odbić" drugą połowę fali. Jej długość jest dokładnie o połowę krótsza niż w dipolu, stąd nazwa - ćwierćfalowa.',
    },
    {
      type: 'title',
      text: 'Częstotliwości krytyczne i aplikacje',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Każde pasmo częstotliwości ma swoją specyfikę. Korzystając z naszego kalkulatora, możesz dostosować pomiary dla najczęściej używanych pasm w tym hobby:',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (Wideo FPV): Długości są malutkie (około 12-13 mm na radiator). Każdy nadmiar lutu może zepsuć wydajność.',
        '2.4 GHz (Sterowanie i Wi-Fi): Nasycone pasmo, w którym wydajność anteny jest kluczem do uniknięcia utraty łącza (failsafe).',
        '868 MHz / 915 MHz (Daleki Zasięg - Long Range): Używane przez systemy takie jak Team BlackSheep Crossfire lub ExpressLRS. Tutaj anteny są większe (około 8 cm na ramię) i łatwiej radzą sobie z przenikaniem przeszkód.',
        '433 MHz (UHF): Stary standard dalekiego zasięgu, posiadający duże anteny, jest doskonały do wielokilometrowych lotów.',
      ],
    },
    {
      type: 'title',
      text: 'Informator Techniczny: SWR a Tablica Strat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chcąc uzyskać optymalną sprawność, współczynnik WFS/SWR musi dążyć tak blisko wyniku 1.0, jak to tylko fizycznie opłacalne. Niżej znajdziesz wskazówki jak współczynnik zaburzy oddawanie mocy transmisji:',
    },
    {
      type: 'table',
      headers: ['SWR (WFS)', 'Tłumienie odbiciowe', 'Moc Odbita Odrzucona', 'Stan zdatności'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Perfekcja</strong>'],
        ['1.2:1', '-21 dB', '0.8%', 'Bardzo Dobry'],
        ['1.5:1', '-14 dB', '4.0%', 'Umiarkowanie Dobry'],
        ['2.0:1', '-9.5 dB', '11.1%', 'Tolerowalna Graniczna Ograniczona Akceptacja'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>Stan Czerwony (Niebez.)</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'Istota i Znaczenie 50 Ohm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Znaczna część urządzeń bezprzewodowych oraz transmiterów spotykanych na bezzałogowcach (typu układy radiokontroli), projektowano wokół sprofilowanej uprzednio impedancji do precyzyjnie ustalonego przedziału równego bazowej liczbie <strong>50 Ohmów (rezystancji).</strong> Choć perfekcyjny idealny bezszkodowy dipol po rozłożeniu go całkiem ma zwyczaj osiągania pułapów 70 (aż 73), modyfikacja i usytuowanie np po skosie układające obydwie lotki (styl V Odwrócona pod katem), sprowadza całe pole by współdziałało i doganiało bliźniaczo obraną drogę do tych 50 Ohm na złączce. Wprawianie okablowania połączonego pod starodawne tv na 75 skutkuje niekończącymi utratami prądu w kosmos.',
    },
    {
      type: 'title',
      text: 'Niebezpieczeństwa i Utraty Związane ze Zbyt Wysokim Progiem SWR: Unikaj Spaleń i Przegrzań Twojego Modułu Nadającego - VTX.',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Po co nadmiernie aż tak katować tę nieszczęsną milimetrażową dokładność. Przy tak nieszczęśliwym podcinaniu wymiar całkowity z braku wyższej racjonalnej alternatywy nie ma drogi wypuścić w darmową uwalnianą i pożądaną sferę wszystkiej dawki fali jaka podawana mu była za przeproszeniem za pleców sprzętem transmitującym tę samą (VTx - na rfid, 5 g i in) Z braku upustu owa niewyzwana moc z ogromnym impetem "cofa się rykoszetem" a w rezultacie nie pożądanie uderzona obudowa czy lut reagując na tę energię po prostu silnie to miejsce i resztę płyty podgrzewa cieplnie (aż po totalne utwardzone i topiące stany elementu, powodujące czarny koniec po 2 m w powietrzu, usmażenia podzespołów w temp. lawy wulkanicznej!).',
    },
    {
      type: 'paragraph',
      html: 'Główny wysoki podpadliwy pod kreskę wysoki wymiar parametru ROE leży jako król win na piramidzie destrukcji u nadpalonego wyposażenia w quadrokopterach m.in Vtx\'a. Nie płać dwa razy - wykorzystaj udogodnienia kalkulujące milimetry przed samą interwencją ostrzem. Przed w locie po szkodzie - to dewiza, bez zbednej oprawy',
    },
    {
      type: 'title',
      text: 'Rezonans Szmerów / Zakrzywień Czasoprzestrzennych czy Zjawisk Zwanym Harmonicznymi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Trafna miara, dajmy na wytyczne 868 dla long radio kontroli tak obciągnięta po swojemu "gra - w sensie łapie wiatr/powietrze w gęstości pasm fali - nadaje nie tylko i nie powstrzymuję swej naturalnej struktury oddawań jedynie na ów ustalone pasmo (868). Będąc samą sobie falkową naturalnością - wytwarza ono bliźniacze szumiące oddźwięki jak echo także w kolejnych powiększonych strefach i multipliakacjach bytu nie parzystych, bo aż w jej 3 jak te, a czyhają też pięć i w co więcej razy w wytycznym odsetku fali równe (3 cia, potem dalej i aż 5 Ta harmoniczna siostrzana odpowiedniczka.',
    },
    {
      type: 'paragraph',
      html: 'Informacja i biegłość jej przyswajania bywa na równi z tym wszystkim użyteczna ,że będąc w niewiedzy pomimo wysoce udanej selektywnej "868", nadając, to nie mając z filtrowanego drona (VTx na płytce czy układ FC szwankując) będziesz sypał niczym ze śniegiem brudem do i po w wyższe progi megaherc obok (sieć WiFi zakłócając tym innym lub sobie obraz GOGGLES etc...) Wykonano to specjalnie z wyznaczeniem tych właśnie z kalkulacji szumów Harmonicznych obok Twojej.',
    },
  ],
  faq: [
    {
      question: 'Jak to się stało i po grzyba przewody winne posiadać ściągawki i ucięcia specjalnym wyliczonym schematem dlugościowym?',
      answer: 'Częstotliwości mają własne szlaki po drodze falowej odbić, z bycia w pełnej korelacji oddają z siebie sprawny przesył. Utnij w mniejszą lub szerszą a cały nakład pracy cofnie się falą jak wodą przed tamą prosto na serce odbiornika po nagrzaniu z paląc cały układ dosłownie.',
    },
    {
      question: 'Od kod ten termin - Wskaźnik, Factor Prędkości fali albo z angielskiego na skrótach (VF)?',
      answer: 'Jej rola odgrywana ukazuje tempo drogi dla światła oraz co gorsze - utratę pędu na przebiciu fali np w rdzeniu. A więc czysta gruba rurka pręta ucieknie i doleci przed zakrzywieniem izolowanej otulinką żyły na 0.95 w liczniku miedzi (A my ujmiemy te - % przed przycięciem docelu)',
    },
    {
      question: 'To która teraz lepsza antena, no i co wybrać i dla kogo, Dipol oraz Bat pionowy czy jakaś 1 na ileś lambda czy falowo?',
      answer: 'Równoważny dipo w polowie pełnej dawki gra przewidywalnie oraz nadaje kierunkowi duży stabilniejszy promień odbiorczy, acz bywa toporny w upakowaniu. Za to monopolik i jego 0.25 (ćwierć obiegowej skali) idealnie zmieścisz w nano urządzeniach , nie unikaj jednak koniecznego dodania płytki dla odbić gnd (ground/masa).',
    },
    {
      question: 'A jak grubsza antena ten oplot twardy z dużą żylą z kabla z zewnątrz polepsza osiągi i ma te zalety?',
      answer: 'Szerokość pomaga zatuszować niedokładną amatorkę w zrobionej długości , aczkolwiek spowalnia też w pewnych obszarach przepust w Velocity - a więc pożądana jakość wyrobienia by awg było w ramach w strefie u standart ok . 22.',
    },
  ],
  bibliography: [
    { name: 'Opracowanie Badawcze Należytego Odbicia, tzw. Ćwierćfalowa (1/4 ) jako monopol', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Zależności Faktorów oraz Zmian o Velocity jako opór prędkość.', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Rzetelny Wybór Potrzeb',
      text: 'Zakoduj z guzików lub sam we wprowadzenie z dłoni i po klawiaturzę ,że idziemy celowo po obiegówkę częstoliwości w 5. gHz (albo inny popularny np WiFi obwód z 2. ), nie wymuszone a dobrowolne - 868 też.',
    },
    {
      name: 'Identyfikacja Po Budownictwie Układu Fali',
      text: 'Obejmuj umysłem chęć co robisz czy składasz pełny "donut" dipol w połwce (a więc podzielony jak 1 / 2) czy decydujesz pręcik bat czyli ucięty (1 od / do 4) promieniujący czub o jeden kierunek do uziemianego bloku...',
    },
    {
      name: 'Zmiany ze Względu Właściwości Materiałowo Powlekających Twój Projekt',
      text: 'Dobieraj w podzespole rodzaj przewodu aby ten parametr zwany owym - współczynnikiem Vf miał ręce oraz spójne podstawy dla poprawnych miar długości z podanymi na końcu wymogami rzetelnej matematyki.',
    },
    {
      name: 'I Odcinamy Ze Zgromadzoną Precjozą , Precyzja Niezwykle Opłacana !',
      text: 'Posiłkuj sie punktem z "Ramię do Ramię" albo by uciąć jeden i oddziel się tylko nim w punktu - Od Lutu na samej Płytkce , nie tnij samego kabelku - po całości by ogołocić pręt by został gły lity promień - on nadaje ten zasięg!',
    },
  ],
  schemas,
};
