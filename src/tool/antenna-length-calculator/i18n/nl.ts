import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'rf-antenne-lengte-calculator';
const title = 'RF Antenne Lengte Calculator voor FPV Dipolen en Zwepen';
const description = 'Bereken de exacte meting voor uw 868MHz, 2.4GHz en 5.8GHz antennes. Verbeter het bereik van uw drone en voorkom dat uw zender verbrandt met geoptimaliseerde SWR.';

const faqItems = [
  {
    question: 'Waarom moet mijn antennedraad een specifieke lengte hebben?',
    answer: 'Radiogolven resoneren op veelvouden van hun golflengte. Als de draad niet met deze resonantie aansluit, wordt de energie teruggekaatst naar de zender in plaats van uit te stralen, wat de apparatuur kan beschadigen.',
  },
  {
    question: 'Wat is de Snelheidsfactor (Vf)?',
    answer: 'Dit is de verhouding tussen de snelheid waarmee een signaal door een geleider reist en de snelheid van het licht. Bij koper bedraagt dit doorgaans 0,95, wat betekent dat de golf 5% langzamer reist en de antenne 5% korter moet zijn.',
  },
  {
    question: 'Is een dipool of een zweepantenne beter?',
    answer: 'Een dipool (1/2 golf) is efficiënter en voorspelbaarder, maar volumineuzer. Een zweep (1/4 golf) is compact en ideaal voor kleine ontvangers, maar vereist wel een grondvlak om goed te functioneren.',
  },
  {
    question: 'Hoe beïnvloedt draaddikke de antenne?',
    answer: 'Dikkere draden hebben een grotere bandbreedte (ze zijn minder kritisch qua exacte frequentie), maar hun snelheidsfactor verandert licht. Voor de meeste FPV-drones is standaard 20-22AWG draad ideaal.',
  },
];

const howToSteps = [
  {
    name: 'Selecteer Frequentie',
    text: 'Voer de exacte frequentie in MHz in of gebruik een van de snelknoppen voor 5.8GHz, 2.4GHz of 868MHz.',
  },
  {
    name: 'Kies Antennetype',
    text: 'Beslis of u een volledige dipool (1/2 golf) of een verticale zweepantenne (1/4 golf) maakt.',
  },
  {
    name: 'Pas Materiaal Aan',
    text: 'Kies het type draad dat u gebruikt, zodat de calculator de juiste snelheidsfactor toepast.',
  },
  {
    name: 'Snij met Precisie',
    text: 'Gebruik de meting "Lengte per arm" om elk element te snijden. Vergeet niet om te meten vanaf het soldeerverbindingspunt.',
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
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Bibliografische Referenties',
  ui: {
    faqTitle: 'Veelgestelde Vragen',
    bibliographyTitle: 'Bibliografische Referenties',
    signalParameters: 'Signaalparameters',
    antennaType: 'Antenne Type',
    dipole: 'Dipool (1/2 λ)',
    whip: 'Zweep (1/4 λ)',
    conductorMedium: 'Geleidermedium',
    totalLength: 'Totale Lengte',
    branchLength: 'Taklengte',
    secondaryResonance: 'Secundaire Resonantiepunten',
    swrIdeal: 'Ideale SWR',
    impedance: 'Impedantie',
    criticalNotice: 'Belangrijke Mededeling',
    criticalNoticeText: 'Een slecht gesneden antenne creëert een hoge SWR die de vermogensuitgangen van uw zender binnen seconden kan oververhitten en vernietigen.',
    dynamicScheme: 'Dynamisch Schema (mm)',
    harmonicLabel: 'Harmonische',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Kaal Koper (0.95)',
    materialPvcInsulated: 'PVC Geïsoleerde Kabel (0.92)',
    materialSolidRod: 'Massieve Staaf (0.97)',
    materialCoaxial: 'Coaxkabel (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Waarom is de lengte van uw Radiofrequentie-antenne cruciaal?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Als u zich ooit heeft afgevraagd waarom antennes van race-drones (FPV), langeafstandszenders (ELRS/Crossfire) of zelfs uw wifi-router zulke specifieke lengtes hebben, ligt het antwoord in de natuurkunde van resonantie. Een antenne is niet zomaar een stukje geleidende draad; het is een component dat "in de pas" moet lopen met de frequentie van de elektromagnetische golf waarmee het werkt.',
    },
    {
      type: 'paragraph',
      html: 'Wanneer u uw eigen antenne bouwt, of het nu een <strong>dipool</strong> is voor 868MHz of een <strong>zweepantenne</strong> voor 5.8GHz, wordt precisie gemeten in millimeters. Een fout van slechts 2 of 3 mm kan de antenne inefficiënt maken, wat leidt tot wat bekend staat als een hoge SWR (Standing Wave Ratio) of SRG.',
    },
    {
      type: 'title',
      text: 'Basisconcepten: Golflengte en Resonantie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Radiofrequentie (RF) reist met de snelheid van het licht (ongeveer 300.000 kilometer per seconde). Om een antenne optimaal energie te laten uitzenden of ontvangen, moet de fysieke grootte ervan direct gerelateerd zijn aan de afstand die één volledige cyclus van de golf aflegt, de zogenaamde <strong>golflengte (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'De basisformule voor het berekenen van de golflengte is λ = v / f, waarbij \'v\' de voortplantingssnelheid is en \'f\' de frequentie. In de echte wereld reist elektriciteit echter iets langzamer door metalen dan door een vacuüm. Hier komt de <strong>Snelheidsfactor (Vf)</strong> om de hoek kijken.',
    },
    {
      type: 'list',
      items: [
        'Kaal koper: Heeft een Vf van ongeveer 0.95.',
        'Geïsoleerde kabels (PVC): De isolatie vertraagt de golf, waardoor de factor daalt naar 0.92 of lager.',
        'Massieve koperen staven: Omdat ze dikker en sterk geleidend zijn, stijgt de factor iets naar 0.97.',
      ],
    },
    {
      type: 'title',
      text: 'Veelvoorkomende Antennetypen in Drones en Maker Projecten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Halve-Golf Dipoolantenne (1/2 λ):</strong> Dit is de gouden standaard voor veel toepassingen. Het bestaat uit twee armen (stralende elementen) die samen de helft van de golflengte van de werkfrequentie vormen. Het is een gebalanceerde antenne met een "donutvormig" stralingspatroon en is zeer eenvoudig te maken met een coaxkabel.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Kwart-Golf Zweep of Monopoolantenne (1/4 λ):</strong> Dit zien we typisch op radio-ontvangers of kleine drones. Het heeft slechts één stralend element en gebruikt het chassis van het apparaat of een grondvlak om de andere helft van de golf te "reflecteren". De lengte is exact de helft van een dipool, vandaar de naam kwartgolf.',
    },
    {
      type: 'title',
      text: 'Kritieke Frequenties en Toepassingen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Elke frequentieband heeft zijn eigenaardigheden. Met onze calculator kunt u de metingen aanpassen voor de meest gebruikte banden in de hobby:',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (FPV Video): De lengtes zijn minuscuul (ongeveer 12-13 mm voor de straler). Elke overtollige soldeer kan de prestaties ruïneren.',
        '2.4 GHz (Besturing en Wi-Fi): Een verzadigde band waar de efficiëntie van de antenne de sleutel is om verbindingsverlies (failsafe) te voorkomen.',
        '868 MHz / 915 MHz (Lange Afstand): Wordt gebruikt door systemen zoals Team BlackSheep Crossfire of ExpressLRS. De antennes hier zijn groter (ongeveer 8 cm per arm) en maken het gemakkelijker om obstakels te passeren.',
        '433 MHz (UHF): De oude standaard voor lange afstanden, met grote antennes die ideaal zijn voor vluchten van vele kilometers.',
      ],
    },
    {
      type: 'title',
      text: 'Technische Referentie: SWR en Verliestabel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voor optimale prestaties moet de SWR zo dicht mogelijk bij 1.0 liggen. Hier is een referentie van hoe SWR de prestaties van uw zender beïnvloedt:',
    },
    {
      type: 'table',
      headers: ['SWR (ROE)', 'Retourverlies', 'Gereflecteerd Vermogen', 'Status'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Perfect</strong>'],
        ['1.2:1', '-21 dB', '0.8%', 'Uitstekend'],
        ['1.5:1', '-14 dB', '4.0%', 'Goed'],
        ['2.0:1', '-9.5 dB', '11.1%', 'Acceptabele Limiet'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>Gevaarlijk</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'Het Belang van 50 Ohm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bijna alle radiosystemen die in drones en RC (VTx, ontvangers, controllers) worden gebruikt, zijn ontworpen voor een <strong>karakteristieke impedantie van 50 Ohm</strong>. Een perfect resonerende dipoolantenne heeft typisch een impedantie in de buurt van 73 Ohm in de vrije ruimte, maar wanneer hij in een drone wordt geïnstalleerd of wanneer de hoek van de armen wordt gewijzigd (Inverted-V), nadert hij de ideale 50 Ohm. Het gebruik van 75 Ohm coaxkabels (zoals oude TV-kabels) veroorzaakt een misaanpassing die het signaal verslechtert, hoe goed u de antenne ook snijdt.',
    },
    {
      type: 'title',
      text: 'Het Gevaar van Hoge SWR: Bescherm uw VTx',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Waarom hameren we zo op de nauwkeurigheid? Als de antenne niet de juiste lengte heeft, kan niet alle energie worden uitgestraald die door de videozender (VTx) is verzonden. Dat deel van de energie wordt "teruggekaatst" naar de zender als nutteloze warmte.',
    },
    {
      type: 'paragraph',
      html: 'Hoge SWR is de belangrijkste oorzaak van doorgebrande zenders. Als je zonder antenne of met een slecht gesneden antenne vliegt, zullen de interne componenten in enkele seconden oververhit raken en stopt uw apparatuur met werken. Het controleren van uw sneden via dit hulpmiddel is de beste veiligheidsinvestering die u voor uw drone kunt doen.',
    },
    {
      type: 'title',
      text: 'Harmonischen: Interferenties Begrijpen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een antenne die is afgesneden voor 868MHz resoneert niet alleen op die specifieke frequentie. Dankzij de aard van sinusgolven, heeft het ook resonantiepunten bij zijn oneven veelvouden (3e, 5e, 7e harmonische).',
    },
    {
      type: 'paragraph',
      html: 'Het is van het grootste belang om dit in uw hoofd te houden, want hoewel de hoofdfrequentie die de zender aandrijft misschien 868MHz is, kun je mogelijk nog interferentie op hogere frequenties creëren ("ruis" achterlaten) als je de zender niet correct wegfiltert. De harmonischen berekentool helpt je op voorhand in kaart te brengen waar deze signalen zouden kunnen opduiken.',
    },
  ],
  faq: [
    {
      question: 'Waarom moet de bedrading van de antenne op maat gemaakt worden?',
      answer: 'Radiogolven resoneren het best op een specifieke meting in correlatie met het totale formaat van die frequentie. Wanneer deze draden afwijken verliest u het bereik door teruggekaatste kracht, in plaats van de antenne net kracht bij te zetten, en die brandt finaal uw videotoestellen door.',
    },
    {
      question: 'Wat bedoelen ze met de Velocity Factor (Vf)?',
      answer: 'Het is een verhouding en weergave van het tempo en met welk effect je stroom het medium laat trillen t.o.v. de absolute snelheid in een leeg vacuüm . Neem nu koper - daar is dit ~0.95 en die signaal vertraging dien je te corrigeren door ~5% lengte weg te nemen.',
    },
    {
      question: 'Werk ik best met een dipool of een gewone zweepvorm?',
      answer: 'De dipool en halve golf vorm zal voor betrouwbaarheid en consistent resultaat garant staan in alle omstandigheden, alleen neemt de vorm wel meer gewicht en plaats (wat de zweep niet hoeft, maar afhankelijk is van een referentie basis of metaal plaatje om het grondelectrode mee tot zijn bereik toe te tellen).',
    },
    {
      question: 'Doet de diameter (dikte) van mijn coax er iets toe?',
      answer: 'Zeker weten, zo breder dan hoe meer een band kan uit rekken qua zending op het spectrum. Meeste mensen gaan in de racerij en vliegerij het meest courante vinden met een doorsnee 20 tot 22 Amerikaanse Gauge kabeling met wat bijgaande snelheid variabelen.',
    },
  ],
  bibliography: [
    { name: 'Kwartgolf antenne en Monopolen in de theorie', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Impact en vertaling van kabel Snelheids factor op wiki.', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Stel jouw juiste Hertz ratio (Frequentie) in.',
      text: 'Zet met je muis nauwkeurig in ons vak om welke MHZ groep het draait, te kiezen uit vb de veelal gehanteerde frequenties 868Mhz, 2.4 en als top de 5.8gHz video lijnen.',
    },
    {
      name: 'Beslis van Welke Antenne Soort We Gaan Vertrekken.',
      text: 'Gaan we het in dipool meten dan weet u we bij 0.5 (helf van 1) werken als basismetabool, bij uw enkele en simpeler zweep houden we net iets als kwartgolf vast in acht (0.25).',
    },
    {
      name: 'Koppel het Media Geleidende Cijfer.',
      text: 'Dit zal de Velocity berekeningen meepakken per koper, aluminium etc draaien om u exact getal prijs te geven!',
    },
    {
      name: 'Nu, Mes Er in en Precies!',
      text: 'Hierboven vindt je uw eindtotaal terug met daaronder de helft van de uitsnede per uiteinde gemeten in millimeters van exact waar uw vlammend bout was (aan de rand) en af te lappen/snijden tot de punt !',
    },
  ],
  schemas,
};
