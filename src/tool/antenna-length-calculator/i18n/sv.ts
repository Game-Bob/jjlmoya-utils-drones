import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'rf-antennlangd-kalkylator';
const title = 'RF Antennlangd Kalkylator for FPV Dipol och Piska';
const description = 'Beräkna den exakta mätningen för dina 868MHz-, 2.4GHz- och 5.8GHz-antenner. Förbättra din drönares räckvidd och undvik att bränna din sändare med optimerad SWR.';

const faqItems = [
  {
    question: 'Varför måste min antenntråd vara av en specifik längd?',
    answer: 'Radiovågor resonerar vid multiplar av sin våglängd. Om tråden inte stämmer överens med denna resonans reflekteras energi tillbaka till sändaren istället för att stråla ut luften, vilket bränner upp enheten.',
  },
  {
    question: 'Vad är hastighetsfaktorn (Vf)?',
    answer: 'Det är förhållandet mellan den hastighet med vilken en signal rör sig genom en ledare och ljusets hastighet. I koppar är det typiskt 0.95, vilket innebär att vågen färdas 5% långsammare, varför antennen i proportion till detta måste göras 5% kortare.',
  },
  {
    question: 'Är en dipolantenn bättre än en piskantenn?',
    answer: 'En dipol (1/2 våg) är mer effektiv och konsekvent, men tar mer plats. En piska (1/4 våg) är liten och utmärkt för småmottagare, men den är helt beroende av ett jordplan för sin funktion.',
  },
  {
    question: 'Hur påverkar trådens tjocklek antennen?',
    answer: 'Tjockare trådar har högre bandbredd (de är mindre känsliga för exakt frekvensavvikelse), men deras hastighetsfaktor förändras något. För de flesta FPV-drönare är standard 20-22AWG tråd perfekt.',
  },
];

const howToSteps = [
  {
    name: 'Välj frekvens',
    text: 'Ange den exakta frekvensen i MHz eller använd en av snabbknapparna för 5.8GHz, 2.4GHz eller 868MHz.',
  },
  {
    name: 'Välj antenntyp',
    text: 'Bestäm om du bygger en full dipol (1/2 våg) eller en vertikal piskantenn (1/4 våg).',
  },
  {
    name: 'Justera för material',
    text: 'Klicka i vilken typ av tråd du använder så att kalkylatorn tillämpar den korrekta hastighetsfaktorn.',
  },
  {
    name: 'Klipp med noggrannhet',
    text: 'Använd måttet "Armlängd" för att klippa varje element. Glöm inte att mäta från lödpunkten och ut.',
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
  faqTitle: 'Vanliga Frågor',
  bibliographyTitle: 'Bibliografiska Referenser',
  ui: {
    faqTitle: 'Vanliga Frågor',
    bibliographyTitle: 'Bibliografiska Referenser',
    signalParameters: 'Signalparametrar',
    antennaType: 'Antenntyp',
    dipole: 'Dipol (1/2 λ)',
    whip: 'Piska (1/4 λ)',
    conductorMedium: 'Ledarmaterial',
    totalLength: 'Total Längd',
    branchLength: 'Armlängd',
    secondaryResonance: 'Sekundära Resonanspunkter',
    swrIdeal: 'Idealisk SWR',
    impedance: 'Impedans',
    criticalNotice: 'Viktigt Meddelande',
    criticalNoticeText: 'En felaktigt klippt antenn skapar hög SWR som kan överhetta och förstöra din sändares slutsteg på nolltid.',
    dynamicScheme: 'Dynamiskt Schema (mm)',
    harmonicLabel: 'Överton',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Bar Koppar (0.95)',
    materialPvcInsulated: 'PVC-isolerad Kabel (0.92)',
    materialSolidRod: 'Massiv Pinnantenn (0.97)',
    materialCoaxial: 'Koaxialkabel (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Varför är längden på din radiofrekvensantenn så kritisk?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om du någonsin har funderat över varför antenner på racingdrönare (FPV), långdistanskontroller (ELRS/Crossfire) eller till och med din Wi-Fi-router har så specifika längder, ligger svaret i resonansfysiken. En antenn är inte bara en bit ledande tråd; den är en komponent avstämd för att vara "i trim" med frekvensen på den elektromagnetiska våg den hanterar.',
    },
    {
      type: 'paragraph',
      html: 'När du bygger din egen antenn, vare sig det är en <strong>dipol</strong> för 868MHz eller en <strong>piskantenn</strong> för 5.8GHz, så mäts precisionen i millimetrar. Ett fel på endast 2 eller 3 mm kan göra antennen ineffektiv, vilket skapar vad som är känt som en orimligt hög SWR (Standing Wave Ratio).',
    },
    {
      type: 'title',
      text: 'Grundläggande begrepp: Våglängd och resonans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Radiofrekvens (RF) färdas med ljusets hastighet (cirka 300 000 kilometer per sekund). För att antennen ska sända ut eller ta emot energin optimalt måste dess fysiska storlek vara direkt relaterad till det avstånd en hel cykel av vågen färdas, vilket kallas <strong>våglängd (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Den grundläggande formeln för att beräkna våglängden är λ = v / f, där \'v\' är utbredningshastigheten och \'f\' är frekvensen. I den verkliga världen rör sig dock elektricitet något långsammare genom metaller än i ett vakuum. Det är här <strong>Hastighetsfaktorn (Vf)</strong> kommer in i bilden.',
    },
    {
      type: 'list',
      items: [
        'Bar koppar: Har en Vf på cirka 0.95.',
        'Isolerade kablar (PVC): Isoleringen saktar ner vågen, vilket sänker faktorn till 0.92 eller mindre.',
        'Massiva kopparstänger: Eftersom de är tjockare och mycket ledande ökar faktorn något till 0.97.',
      ],
    },
    {
      type: 'title',
      text: 'Vanliga antenntyper i drönare och Maker-projekt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Halvvågsdipolantenn (1/2 λ):</strong> Detta är guldstandarden för många tillämpningar. Den består av två armar (strålande element) som tillsammans bildar hälften av driftsfrekvensens våglängd. Den är en balanserad antenn som erbjuder ett "munk"-format strålningsmönster och är mycket enkel att tillverka av koaxialkabel.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Kvartsvågspiska eller monopolantenn (1/4 λ):</strong> Detta ser vi typiskt på radiomottagare eller små drönare. Den har bara ett strålande element och använder enhetens chassi eller ett jordplan för att "reflektera" den andra halvan av vågen. Dess längd är exakt hälften av en dipols, därav namnet kvartsvåg.',
    },
    {
      type: 'title',
      text: 'Kritiska frekvenser och tillämpningar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Varje frekvensband har sina särdrag. Med vår kalkylator kan du anpassa mätningarna för de mest använda banden inom hobbyn:',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (FPV Video): Längderna är minimala (cirka 12-13 mm för strålaren). Minsta överskott av lödtenn kan förstöra prestandan.',
        '2.4 GHz (Kontroll och Wi-Fi): Ett mättat band där antenneffektivitet är nyckeln för att undvika överföringsförlust (failsafe).',
        '868 MHz / 915 MHz (Långdistans): Används av system som Team BlackSheep Crossfire eller ExpressLRS. Antennerna här är större (cirka 8 cm per arm) och tränger lättare igenom hinder.',
        '433 MHz (UHF): Den gamla långdistansstandarden, med stora antenner idealiska för flygningar på många kilometer.',
      ],
    },
    {
      type: 'title',
      text: 'Teknisk referens: SWR och förlusttabell',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För optimal prestanda bör SWR vara så nära 1.0 som möjligt. Här är en referens till hur SWR påverkar din sändningseffekt:',
    },
    {
      type: 'table',
      headers: ['SWR', 'Returförlust', 'Reflekterad Effekt', 'Status'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Perfekt</strong>'],
        ['1.2:1', '-21 dB', '0.8%', 'Utmärkt'],
        ['1.5:1', '-14 dB', '4.0%', 'Bra'],
        ['2.0:1', '-9.5 dB', '11.1%', 'Acceptabel Gräns'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>Farligt</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'Vikten av 50 Ohm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nästan alla radiosystem som används i drönare och RC (VTx, mottagare, kontroller) är designade för en <strong>karakteristisk impedans på 50 Ohm</strong>. En perfekt resonerande dipolantenn har typiskt en impedans nära 73 Ohm i fritt utrymme, men när den installeras på en drönares ram, eller om man justerar armarnas vinkel (inverterat V), närmar den sig det ideala värdet 50 Ohm. Användning av 75-ohms koaxialkablar (som för gamla TV-apparater) orsakar en felanpassning som försämrar signalen oavsett hur bra du har klippt antennen.',
    },
    {
      type: 'title',
      text: 'Faran med hög SWR: Skydda din VTx',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Varför insisterar vi så mycket på noggrannhet? Om antennen inte har rätt längd kan den inte stråla ut all den energi som skickas av videosändaren (VTx). Den energin "studsar" tillbaka till sändaren som värme.',
    },
    {
      type: 'paragraph',
      html: 'Hög SWR är den främsta orsaken till brända sändare. Om du flyger utan antenn eller med en felklippt antenn kommer de inre komponenterna att överhettas på några sekunder, vilket gör din utrustning obrukbar. Att använda detta verktyg för att kontrollera dina snitt är den bästa säkerhetsinvesteringen du kan göra för din drönare.',
    },
    {
      type: 'title',
      text: 'Övertoner: Förståelse av störningar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En antenn klippt för 868MHz resonerar inte bara på den frekvensen. På grund av sinusvågornas natur kommer den även att ha resonanspunkter vid sina udda multiplar (3:e, 5:e, 7:e övertonen).',
    },
    {
      type: 'paragraph',
      html: 'Det är mycket viktigt att förstå detta, för även om din antenn sänder på 868MHz kan du skapa "brus" eller störningar på högre frekvenser om din sändare inte är väl filtrerad. Övertonskalkylatorn hjälper dig att förutse var dessa fantomsignaler kan uppstå.',
    },
  ],
  faq: [
    {
      question: 'Varför måste min antenntråd vara av en specifik längd?',
      answer: 'Radiovågor resonerar vid multiplar av sin våglängd. Om tråden inte stämmer överens med denna resonans reflekteras energi tillbaka till sändaren istället för att stråla ut luften, vilket bränner upp enheten.',
    },
    {
      question: 'Vad är hastighetsfaktorn (Vf)?',
      answer: 'Det är förhållandet mellan den hastighet med vilken en signal rör sig genom en ledare och ljusets hastighet. I koppar är det typiskt 0.95, vilket innebär att vågen färdas 5% långsammare, varför antennen i proportion till detta måste göras 5% kortare.',
    },
    {
      question: 'Är en dipolantenn bättre än en piskantenn?',
      answer: 'En dipol (1/2 våg) är mer effektiv och konsekvent, men tar mer plats. En piska (1/4 våg) är liten och utmärkt för småmottagare, men den är helt beroende av ett jordplan för sin funktion.',
    },
    {
      question: 'Hur påverkar trådens tjocklek antennen?',
      answer: 'Tjockare trådar har högre bandbredd (de är mindre känsliga för exakt frekvensavvikelse), men deras hastighetsfaktor förändras något. För de flesta FPV-drönare är standard 20-22AWG tråd perfekt.',
    },
  ],
  bibliography: [
    { name: 'Teorin om kvartsvågsmonopoler', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Hastighetsfaktor i transmissionsledningar', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Välj frekvens',
      text: 'Ange den exakta frekvensen i MHz eller använd en av snabbknapparna för 5.8GHz, 2.4GHz eller 868MHz.',
    },
    {
      name: 'Välj antenntyp',
      text: 'Bestäm om du bygger en full dipol (1/2 våg) eller en vertikal piskantenn (1/4 våg).',
    },
    {
      name: 'Justera för material',
      text: 'Klicka i vilken typ av tråd du använder så att kalkylatorn tillämpar den korrekta hastighetsfaktorn.',
    },
    {
      name: 'Klipp med noggrannhet',
      text: 'Använd måttet "Armlängd" för att klippa varje element. Glöm inte att mäta från lödpunkten och ut.',
    },
  ],
  schemas,
};
