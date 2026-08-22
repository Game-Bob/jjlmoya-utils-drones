import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'rekenmachine-dronemotor-en-propeller';
const title = 'Drone Motor en Propeller Calculator';
const description = 'Schat de stuwkracht, RPM onder belasting, spoedsnelheid, vermogen en stroomsterkte van dronemotoren op basis van KV, spanning, propellergeometrie en gewicht.';

const ui = {
  "presetsHeader": "Kies een vliegprofiel",
  "presetTinyCruiser": "Micro cruiser 3.5 inch",
  "presetFreestyle": "Freestyle 5 inch",
  "presetLongRange": "Long range 7 inch",
  "presetCinelifter": "Cinelifter 8 motoren",
  "unitHeader": "Weergave-eenheden",
  "metricUnit": "Metrisch",
  "imperialUnit": "Imperiaal",
  "setupHeader": "Aandrijving en frame",
  "motorKvLabel": "Motor KV (RPM/V)",
  "batteryVoltageLabel": "Accuspanning",
  "propDiameterLabel": "Propellerdiameter",
  "propPitchLabel": "Propellerspoed",
  "bladeCountLabel": "Aantal bladen",
  "motorCountLabel": "Aantal motoren",
  "droneWeightLabel": "Vliegklaar gewicht (RTF)",
  "benchDataHeader": "Testpunt fabrikant",
  "benchThrustLabel": "Stuwkracht per motor",
  "benchVoltageLabel": "Testspanning",
  "optionalLabel": "Optioneel",
  "twoBlades": "2 bladen",
  "threeBlades": "3 bladen",
  "fourBlades": "4 bladen",
  "twoMotors": "2 motoren",
  "fourMotors": "4 motoren",
  "sixMotors": "6 motoren",
  "eightMotors": "8 motoren",
  "resultsHeader": "Stuwkracht en draagvermogen",
  "estimatedLabel": "Fysische schatting.",
  "benchBasedLabel": "Gecalibreerd op testbank.",
  "loadedRpmLabel": "Snelheid onder belasting",
  "pitchSpeedLabel": "Theoretische spoedsnelheid",
  "thrustPerMotorLabel": "Stuwkracht per motor",
  "totalThrustLabel": "Totale statische stuwkracht",
  "totalPowerLabel": "Geschat vermogen",
  "totalCurrentLabel": "Geschatte stroomsterkte",
  "thrustMarginLabel": "Draagvermogen marge",
  "hoverThrottleLabel": "Hover gasniveau",
  "sceneCaption": "propellersnelheid onder belasting",
  "underpoweredStatus": "Lage marge",
  "workableStatus": "Bruikbare marge",
  "headroomStatus": "Ruime marge",
  "underpoweredAdvice": "De totale stuwkracht is minder dan het dubbele van het vlieggewicht. Verwacht beperkte herstelkracht en weinig windtolerantie.",
  "workableAdvice": "Praktische reserve voor een normale vlucht. Controleer de temperatuur van de motoren en ESCs na langdurig hoveren.",
  "headroomAdvice": "Royaal statisch draagvermogen. Verbetert de controle direct maar vraagt meer stroom van de regelaars.",
  "sourceNote": "Een testpunt kalibreert alleen de stuwkracht. Vermogen en stroom blijven schattingen.",
  "modelSourceNote": "Geen testpunt. Gebruikt het theoretische natuurkundige model.",
  "manufacturerNote": "Gebruik bij voorkeur een testpunt gemeten met dezelfde motor en propeller.",
  "modelNote": "Stuwkracht, vermogen en stroom zijn schattingen. Echte resultaten hangen af van luchtdichtheid en verliezen.",
  "safetyNote": "Gebruik deze calculator nooit als vervanging voor een echte testbank. Controleer elektrische limieten voor de vlucht.",
  "thrustAxisLabel": "Stuwrichting",
  "weightAxisLabel": "Drone gewicht",
  "clearBenchData": "Testpunt wissen"
};

const faq = [
  {
    "question": "Wat berekent deze drone motor en propeller calculator?",
    "answer": "Het schat RPM onder belasting, spoedsnelheid, stuwkracht per motor en totaal, vermogen en stroomsterkte op basis van KV, spanning, propeller en gewicht."
  },
  {
    "question": "Hoe stem ik een dronemotor af op een propeller?",
    "answer": "Begin met de aanbevelingen van de fabrikant. Vergelijk de totale stuwkracht met het vlieggewicht en test stroom en temperatuur op een testbank."
  },
  {
    "question": "Waarom is een testpunt van de fabrikant nauwkeuriger?",
    "answer": "Het houdt rekening met de exacte propellergeometrie en verliezen. De tool schaalt de stuwkracht naar de gekozen spanning."
  },
  {
    "question": "Hoe beïnvloedt de propellergrootte de stuwkracht?",
    "answer": "Statische stuwkracht hangt sterk af van diameter en toerental. Een grotere propeller verplaatst meer lucht maar vereist meer koppel."
  },
  {
    "question": "Garanteert deze calculator een veilige vlucht?",
    "answer": "Nee. Het is een planningsinstrument. Controleer stroom, temperatuur en stuwkracht op een testbank voor de eerste vlucht."
  }
];

const howTo = [
  {
    "name": "Kies een vliegprofiel",
    "text": "Selecteer een preset om gepaste startwaarden voor KV, spanning, propeller en gewicht te laden."
  },
  {
    "name": "Voer frame en propellergegevens in",
    "text": "Voer het vlieggewicht en de specificaties in metrische of imperiale eenheden in."
  },
  {
    "name": "Voeg een meetpunt toe",
    "text": "Als u testbankgegevens heeft, voer dan stuwkracht en testspanning in om het model te kalibreren."
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Principes van drone motor en propeller afstemming',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'De combinatie van motor en propeller vormt een balans tussen toerental, diameter, spoed, spanning en koppel. Deze tool schat de statische draagkracht en elektrische belasting.',
  },
  {
    type: 'title',
    text: 'Getoonde resultaten',
    level: 2,
  },
  {
    type: 'table',
    headers: ["Resultaat","Betekenis"],
    rows: [["Snelheid onder belasting","Onbelast RPM schatting verminderd met belastingsfactor"],["Statische stuwkracht","Stuwkracht per motor en totale draagkracht"],["Draagvermogen marge","Totale statische stuwkracht vergeleken met vlieggewicht"],["Vermogen en stroom","Geschat elektrisch verbruik onder de gekozen spanning"]],
  },
  {
    type: 'title',
    text: 'Hoe de calculator te gebruiken',
    level: 2,
  },
  {
    type: 'list',
    items: ["Voer motor KV en accuspanning in.","Kies diameter, spoed, aantal bladen en motoren.","Voeg optioneel meetgegevens van de fabrikant toe.","Controleer stroom en temperatuur op de testbank voor de vlucht."],
  },
  {
    type: 'title',
    text: 'Belang van testgegevens',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Propellerstuwkracht hangt af van de luchtdichtheid en vorm. Een echt testpunt biedt de nauwkeurigste kalibratie.',
  },
  {
    type: 'tip',
    title: 'Testplan instellen',
    html: 'Voer een testbanktest uit en meet stroom en temperatuur voor het eerste gebruik.',
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
