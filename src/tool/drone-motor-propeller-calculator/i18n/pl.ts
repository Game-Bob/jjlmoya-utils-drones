import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulator-silnika-i-migla-drona';
const title = 'Kalkulator Silnika i Śmigła Drona';
const description = 'Oblicz ciąg silnika drona, obroty pod obciążeniem, prędkość skoku śmigła, moc i pobór prądu na podstawie KV, napięcia baterii, geometrii śmigła i wagi drona.';

const ui = {
  "presetsHeader": "Wybierz profil lotu",
  "presetTinyCruiser": "Lekki micro cruiser 3.5 cala",
  "presetFreestyle": "Freestyle 5 cali",
  "presetLongRange": "Long range 7 cali",
  "presetCinelifter": "Cinelifter 8 silników",
  "unitHeader": "Jednostki miary",
  "metricUnit": "Metryczne",
  "imperialUnit": "Calowe",
  "setupHeader": "Napęd i rama",
  "motorKvLabel": "Stała silnika KV (OBR/V)",
  "batteryVoltageLabel": "Napięcie baterii",
  "propDiameterLabel": "Średnica śmigła",
  "propPitchLabel": "Skok śmigła",
  "bladeCountLabel": "Liczba łopat",
  "motorCountLabel": "Liczba silników",
  "droneWeightLabel": "Waga gotowego do lotu (RTF)",
  "benchDataHeader": "Punkt pomiarowy producenta",
  "benchThrustLabel": "Ciąg na jeden silnik",
  "benchVoltageLabel": "Napięcie testowe",
  "optionalLabel": "Opcjonalne",
  "twoBlades": "2 łopaty",
  "threeBlades": "3 łopaty",
  "fourBlades": "4 łopaty",
  "twoMotors": "2 silniki",
  "fourMotors": "4 silniki",
  "sixMotors": "6 silników",
  "eightMotors": "8 silników",
  "resultsHeader": "Ciąg i bilans nośności",
  "estimatedLabel": "Szacunek oparty na fizyce.",
  "benchBasedLabel": "Kalibrowane danymi z hamowni.",
  "loadedRpmLabel": "Prędkość pod obciążeniem",
  "pitchSpeedLabel": "Teoretyczna prędkość skoku",
  "thrustPerMotorLabel": "Ciąg na silnik",
  "totalThrustLabel": "Całkowity ciąg statyczny",
  "totalPowerLabel": "Szacowana moc",
  "totalCurrentLabel": "Szacowany prąd",
  "thrustMarginLabel": "Zapas ciągu",
  "hoverThrottleLabel": "Gaz w zawisie",
  "sceneCaption": "prędkość obrotowa pod obciążeniem",
  "underpoweredStatus": "Niski zapas",
  "workableStatus": "Zapas operacyjny",
  "headroomStatus": "Wysoki zapas ciągu",
  "underpoweredAdvice": "Całkowity ciąg jest mniejszy niż dwukrotność wagi drona. Należy spodziewać się ograniczonej dynamiki i słabej odporności na wiatr.",
  "workableAdvice": "Praktyczny zapas mocy do normalnego lotu. Sprawdź temperaturę silników i regulatorów po dłuższym zawisie.",
  "headroomAdvice": "Duży zapas ciągu statycznego. Poprawia kontrolę w trudnych manewrach, ale wymaga większego prądu z akumulatora.",
  "sourceNote": "Punkt testowy kalibruje tylko ciąg. Moc i prąd pozostają wartościami szacunkowymi.",
  "modelSourceNote": "Brak punktu testowego. Ciąg wykorzystuje teoretyczny model współczynników.",
  "manufacturerNote": "W miarę możliwości używaj punktu pomiarowego z tego samego zestawu silnika i śmigła.",
  "modelNote": "Ciąg statyczny, moc i prąd są szacunkami. Rzeczywiste wyniki zależą od gęstości powietrza i strat.",
  "safetyNote": "Nigdy nie traktuj tego kalkulatora jako zastępstwa dla testu na hamowni. Sprawdź limity przed lotem.",
  "thrustAxisLabel": "Kierunek ciągu",
  "weightAxisLabel": "Waga drona",
  "clearBenchData": "Usuń punkt testowy"
};

const faq = [
  {
    "question": "Co oblicza ten kalkulator silnika i śmigła drona?",
    "answer": "Szacuje obroty pod obciążeniem, prędkość skoku, ciąg na silnik i całkowity, moc oraz pobór prądu na podstawie KV, napięcia, geometrii i wagi."
  },
  {
    "question": "Jak dopasować silnik drona do śmigła?",
    "answer": "Zacznij od zaleceń producenta dla silnika i napięcia. Porównaj całkowity ciąg z wagą drona i sprawdź prąd oraz temperaturę na hamowni."
  },
  {
    "question": "Dlaczego punkt testowy producenta jest dokładniejszy?",
    "answer": "Uwzględnia rzeczywistą geometrię śmigła i opory. Kalkulator przeskalowuje ten pomiar do wybranego napięcia."
  },
  {
    "question": "Jak rozmiar śmigła wpływa na ciąg drona?",
    "answer": "Ciąg statyczny zależy silnie od średnicy i prędkości obrotowej. Większe śmigło generuje większy ciąg, ale wymaga większego momentu obrotowego."
  },
  {
    "question": "Czy ten kalkulator gwarantuje bezpieczeństwo lotu?",
    "answer": "Nie. To narzędzie projektowe. Zawsze weryfikuj prąd i temperaturę na hamowni przed pierwszym lotem."
  }
];

const howTo = [
  {
    "name": "Wybierz profil lotu",
    "text": "Wybierz gotowy zestaw, aby wczytać wstępne wartości KV, napięcia, śmigła i wagi drona."
  },
  {
    "name": "Wprowadź dane ramy i śmigła",
    "text": "Podaj wagę gotowego do lotu drona oraz specyfikację silnika i śmigła."
  },
  {
    "name": "Dodaj punkt pomiarowy",
    "text": "Jeśli posiadasz dane z hamowni, wprowadź zmierzony ciąg i napięcie testowe."
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Zasady doboru silnika i śmigła w dronach',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Dobór silnika i śmigła to kompromis między prędkością obrotową, średnicą, skokiem, napięciem i momentem obrotowym. Kalkulator szacuje ciąg statyczny i obciążenie prądowe.',
  },
  {
    type: 'title',
    text: 'Prezentowane wyniki',
    level: 2,
  },
  {
    type: 'table',
    headers: ["Wynik","Znaczenie techniczne"],
    rows: [["Prędkość pod obciążeniem","Szacowane obroty bez obciążenia pomniejszone o współczynnik pracy"],["Ciąg statyczny","Ciąg jednostkowy i całkowita siła nośna"],["Zapas ciągu","Stosunek całkowitego ciągu statycznego do wagi drona"],["Moc i prąd","Szacowane zapotrzebowanie elektryczne pod danym napięciem"]],
  },
  {
    type: 'title',
    text: 'Jak używać kalkulatora',
    level: 2,
  },
  {
    type: 'list',
    items: ["Wprowadź KV silnika i napięcie akumulatora.","Wybierz średnicę, skok, liczbę łopat i silników.","Opcjonalnie dodaj dane z hamowni producenta.","Skontroluj temperaturę i prąd na hamowni przed lotem."],
  },
  {
    type: 'title',
    text: 'Znaczenie danych pomiarowych',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Ciąg śmigła zależy od gęstości powietrza i kształtu łopat. Rzeczywisty pomiar z hamowni zapewnia najwyższą dokładność. Użyj wyniku do porównania silników i śmigieł w tych samych warunkach. Masa, napięcie pod obciążeniem, regulator i montaż zmieniają ciąg oraz prąd. Zmierz temperaturę i pobór na stanowisku, a przed pierwszym lotem zostaw bezpieczny zapas. Traktuj dane z innego modelu wyłącznie jako punkt odniesienia i sprawdź całą konfigurację przed użyciem.',
  },
  {
    type: 'tip',
    title: 'Plan testów',
    html: 'Wykonaj test na hamowni mierząc prąd i temperaturę przed pierwszym wylotem.',
  },
];

const schemas: DroneMotorPropellerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
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
    step: howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMotorPropellerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography: BIBLIOGRAPHY_ITEMS,
  howTo,
  schemas,
};
