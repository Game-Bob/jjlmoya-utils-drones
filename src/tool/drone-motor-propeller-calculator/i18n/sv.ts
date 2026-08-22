import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkylator-dronarmotor-och-propeller';
const title = 'Kalkylator för Drönarmotor och Propeller';
const description = 'Uppskatta drönarmotorns dragkraft, varvtal under belastning, stigningshastighet, effekt och strömförbrukning utifrån KV, batterispänning, propellergeometri och drönarvikt.';

const ui = {
  "presetsHeader": "Välj en flygprofil",
  "presetTinyCruiser": "Lätt micro cruiser 3.5 tum",
  "presetFreestyle": "Freestyle 5 tum",
  "presetLongRange": "Long range 7 tum",
  "presetCinelifter": "Cinelifter 8 motorer",
  "unitHeader": "Visningsenheter",
  "metricUnit": "Metrisk",
  "imperialUnit": "Imperial",
  "setupHeader": "Drivlina och ram",
  "motorKvLabel": "Motor KV (RPM/V)",
  "batteryVoltageLabel": "Batterispänning",
  "propDiameterLabel": "Propellerdiameter",
  "propPitchLabel": "Propellerstigning",
  "bladeCountLabel": "Antal blad",
  "motorCountLabel": "Antal motorer",
  "droneWeightLabel": "Flygfärdig vikt (RTF)",
  "benchDataHeader": "Tillverkarens testpunkt",
  "benchThrustLabel": "Dragkraft per motor",
  "benchVoltageLabel": "Testspänning",
  "optionalLabel": "Valfritt",
  "twoBlades": "2 blad",
  "threeBlades": "3 blad",
  "fourBlades": "4 blad",
  "twoMotors": "2 motorer",
  "fourMotors": "4 motorer",
  "sixMotors": "6 motorer",
  "eightMotors": "8 motorer",
  "resultsHeader": "Dragkraft och lyftkraftsbalans",
  "estimatedLabel": "Fysikalisk modelluppskattning.",
  "benchBasedLabel": "Kalibrerad med testbänk.",
  "loadedRpmLabel": "Varvtal under belastning",
  "pitchSpeedLabel": "Teoretisk stigningshastighet",
  "thrustPerMotorLabel": "Dragkraft per motor",
  "totalThrustLabel": "Total statisk dragkraft",
  "totalPowerLabel": "Beräknad effekt",
  "totalCurrentLabel": "Beräknad ström",
  "thrustMarginLabel": "Lyftkraftsmarginal",
  "hoverThrottleLabel": "Gas vid hovring",
  "sceneCaption": "propellerhastighet under belastning",
  "underpoweredStatus": "Låg marginal",
  "workableStatus": "Användbar marginal",
  "headroomStatus": "God marginal",
  "underpoweredAdvice": "Den totala dragkraften är mindre än dubbla drönarvikten. Förvänta dig begränsad manöverförmåga och låg tolerans mot vind.",
  "workableAdvice": "Praktisk reserv för normal flygning. Kontrollera motortemperatur och ESC efter långvarig hovring.",
  "headroomAdvice": "Riklig statisk lyftkraftsreserv. Förbättrar kontrollen men kräver mer ström från fartreglagen.",
  "sourceNote": "Testpunkten kalibrerar endast dragkraften. Effekt och ström förblir modelluppskattningar.",
  "modelSourceNote": "Ingen testpunkt. Använder teoretisk fysikalisk modell.",
  "manufacturerNote": "Använd helst mätdata från samma motor och propeller.",
  "modelNote": "Statisk dragkraft, effekt och ström är uppskattningar. Verkliga resultat beror på luftdensitet och förluster.",
  "safetyNote": "Använd aldrig kalkylatorn som ersättning för en riktig testbänk. Kontrollera elektriska gränser före flygning.",
  "thrustAxisLabel": "Dragkraftsriktning",
  "weightAxisLabel": "Drönarvikt",
  "clearBenchData": "Rensa testpunkt"
};

const faq = [
  {
    "question": "Vad beräknar denna kalkylator för drönarmotor och propeller?",
    "answer": "Den uppskattar varvtal under belastning, stigningshastighet, dragkraft per motor och totalt, effekt samt ström baserat på KV, spänning, propeller och vikt."
  },
  {
    "question": "Hur matchar jag motor och propeller för en drönare?",
    "answer": "Börja med tillverkarens rekommendationer. Jämför den totala dragkraften med flygvikten och verifiera ström och temperatur på en testbänk."
  },
  {
    "question": "Varför är en testpunkt från tillverkaren bättre än den teoretiska modellen?",
    "answer": "Den tar hänsyn till den exakta propellergeometrin och förlusterna. Kalkylatorn skalar uppgiften till den valda spänningen."
  },
  {
    "question": "Hur påverkar propellerstorleken drönarens dragkraft?",
    "answer": "Statisk dragkraft beror starkt på diameter och varvtal. En större propeller flyttar mer luft men kräver mer vridmoment."
  },
  {
    "question": "Garanterar denna kalkylator att drönaren är säker att flyga?",
    "answer": "Nej. Det är ett planeringsverktyg. Kontrollera verklig ström och temperatur på en testbänk före flygning."
  }
];

const howTo = [
  {
    "name": "Välj en flygprofil",
    "text": "Välj en förinställning för att läsa in lämpliga startvärden för KV, spänning, propeller och vikt."
  },
  {
    "name": "Ange ram och propellerdata",
    "text": "Ange flygvikt samt specifikationer för motor och propeller i metriska eller imperialistiska enheter."
  },
  {
    "name": "Lägg till en mätpunkt",
    "text": "Om du har testbänksdata anger du uppmätt dragkraft och testspänning för att kalibrera modellen."
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Principen för matchning av drönarmotor och propeller',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Kombinationen av motor och propeller beror på varvtal, diameter, stigning, spänning och vridmoment. Verktyget beräknar statisk lyftkraft och strömförbrukning.',
  },
  {
    type: 'title',
    text: 'Resultat som visas',
    level: 2,
  },
  {
    type: 'table',
    headers: ["Resultat","Betydelse"],
    rows: [["Varvtal under belastning","Obelastat RPM uppskattat och reducerat med belastningsfaktor"],["Statisk dragkraft","Dragkraft per motor och total lyftkraft"],["Lyftkraftsmarginal","Total statisk dragkraft jämförd med drönarvikt"],["Effekt och ström","Beräknad elförbrukning vid vald spänning"]],
  },
  {
    type: 'title',
    text: 'Hur du använder kalkylatorn',
    level: 2,
  },
  {
    type: 'list',
    items: ["Ange motor KV och batterispänning.","Välj diameter, stigning, antal blad och motorer.","Lägg till tillverkarens testdata om det finns.","Verifiera temperatur och ström på testbänk före flygning."],
  },
  {
    type: 'title',
    text: 'Betydelsen av mätdata',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Propellerdragkraft beror på luftdensitet och form. Uppmätta testbänksdata ger den mest exakta kalibreringen.',
  },
  {
    type: 'tip',
    title: 'Testplanering',
    html: 'Utför ett test på testbänk och mät ström och temperatur före första flygningen.',
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
