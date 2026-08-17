import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'dronare-flygtid-kalkylator';
const title = 'Dronare Flygtid Kalkylator for LiPo LiIon Autonomi Uppskattning';
const description = 'Beräkna hur länge din drönare kan flyga baserat på mAh-kapacitet och strömförbrukning. Optimera dina LiPo-batterier för säkra flygningar.';

const faqItems = [
  {
    question: 'Varför är den faktiska flygtiden kortare än den beräknade?',
    answer: 'Kalkylatorn förutsätter konstant förbrukning. Häftiga manövrer, motvind och batterislitage kan minska den faktiska flygtiden med upp till 30%.',
  },
  {
    question: 'Vid vilken spänning bör jag landa drönaren?',
    answer: 'Landa helst när spänningen i vila sjunker till 3,5-3,6 V per cell. Det motsvarar rekommenderad återstående kapacitet på 20%.',
  },
  {
    question: 'Är LiPo- eller Li-Ion-batterier bättre för drönare?',
    answer: 'LiPo-batterier ger hög momentan effekt och passar för racing och akrobatik. Li-Ion-celler har längre uthållighet men lägre uteffekt och passar för långa, lugna flygningar.',
  },
  {
    question: 'Hur påverkar antalet celler (S) flygtiden?',
    answer: 'Fler celler ökar spänning och effekt, men också vikten. Om motorerna är optimerade för spänningen kan de bli effektivare, men antalet celler i sig garanterar inte längre flygtid.',
  },
];

const howToSteps = [
  {
    name: 'Identifiera kapaciteten',
    text: 'Kontrollera batteriets etikett och leta efter mAh-värdet, till exempel 1500, 2200 eller 4500.',
  },
  {
    name: 'Uppskatta strömförbrukningen',
    text: 'Ange drönarens genomsnittliga strömförbrukning. Du hittar den i OSD-telemetrin efter en testflygning.',
  },
  {
    name: 'Justera säkerhetsmarginalen',
    text: 'Lämna 20% i reserv genom att ange 80%, så skyddas batteriet och du får en buffert för landning.',
  },
  {
    name: 'Visa resultatet',
    text: 'Se den exakta tiden i minuter och sekunder som du säkert kan stanna i luften.',
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
  ui: {
    batterySpecs: 'Batterispecifikationer',
    capacity: 'Kapacitet',
    voltage: 'Spänning (S-celler)',
    safetyMargin: 'Säkerhetsmarginal',
    landingHint: 'Landa vid 3.5V - 3.7V per cell.',
    consumptionDynamics: 'Förbrukningsdynamik',
    averageConsumption: 'Genomsnittlig Förbrukning',
    powerWatts: 'Effekt (Watt)',
    efficiencyHint: 'När Ampere ändras kommer Watt att omberäknas utifrån S-spänningen.',
    estimatedEfficiency: 'Uppskattad Effektivitet',
    typicalEfficiencyHint: 'Typisk: 4-6 (Racing), 8-12 (Cinematic/Långdistans).',
    safeFlight: 'Säker Flygning',
    totalEnergy: 'Total Energi',
    theoreticalTime: 'Teoretisk Tid (0%)',
    co2Footprint: 'Koldioxidavtryck',
    autonomyChart: 'Autonomidiagram',
    chartSubtitle: 'Ampere (A) mot Tid (min)',
    chartLabel: 'Minuter',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkylator för drönarens flygtid: En komplett guide till autonomi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Autonomi är kanske den mest kritiska faktorn vid utformning och användning av drönare. Oavsett om du är FPV-drönarpilot inom racing, professionell flygfotograf eller långdistansentusiast styrs både säkerheten och uppdragets framgång av din kontroll över hur länge din utrustning kan hålla sig i luften. Vår <strong>flygtidskalkylator</strong> använder grundvariablerna batterikapacitet och strömförbrukning för att ge en realistisk och säker uppskattning.',
    },
    {
      type: 'title',
      text: 'Batterikapacitet: mAh Förklarat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Batteriets kapacitet brukar mätas i milliamperetimmar (mAh). Denna siffra anger hur mycket elektrisk laddning batteriet kan lagra. Ett batteri på 1500 mAh kan teoretiskt leverera 1500 milliampere i en hel timme. Inom drönarvärlden, där strömförbrukningen är extremt hög, pratar man oftast i begreppet Ampere (A). 1000 mAh är ganska precis lika med 1 Ah (Amperetimme).',
    },
    {
      type: 'paragraph',
      html: 'Men ren kapacitet är inte den enda faktorn. Spänningen (som bestäms av antalet celler eller "S") har direkt inverkan på den totala effekten (Watt). Men för att räkna fram tiden med tanke på motorförbrukningen, är förhållandet Ah/Ampere den vanligaste, direkta mätningen.',
    },
    {
      type: 'title',
      text: 'Drift och förbrukning i luften',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Motorförbrukningen fluktuerar mest av allt vid flygning. Att hålla drönaren svävande (hover) kräver inte lika mycket som en aggressiv flyguppvisning. Kombinationer med motor och propeller innehar en egen optimal effektivitetskurva. Kör du på högsta fart kommer amperen att skjuta i höjden - det tar snabbt ur din batteritid!',
    },
    {
      type: 'list',
      items: [
        'Svävande: Minimal förbrukning under konstanta förhållanden, oftast fotograferingsflyg.',
        'Försiktig framdrivning eller en stilla tur: En något gradvis stigning med hjälp av aerodynamisk dragkraft.',
        'Agressiv FPV-flygning eller lopp: Tilltagen ström toppar, drar upp till 3 ggr snabbare, kan tömma reserven ganska fort.',
        'Vikt och extrautrustning: Den sammantagna tyngden från all last och drönarvikt i sig, skapar ett behov av tyngre drag, för varje enstaka gram tas RPM:en upp.',
      ],
    },
    {
      type: 'title',
      text: 'Skydd inom ramen av 80%: Skydda kemin i LiPo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Laddar du ur dina Litium-Polymer celler ner mot botten 0% har du tyvärr ett vinnande koncept när man pratar batterihaverier; den går inte mer att rädda och drönarvärldens mardröm infinner sig i form av att allt tvärstannar med följdinnebörd, krasch - de små inre cellerna är då utslagna av bestående svaga kemiska brott, sker när de hamnar utanför ett säkert genomsnitt på ca 3.0 till 3.2V i genomsnitt i varje enskild burk (cell).',
    },
    {
      type: 'paragraph',
      html: 'Med detta skäl rekommenderar vi generellt användning enligt en <strong>säkerhetsmarginal</strong> på ett minimum om 20% reserverad styrka - varav man via instrumentet ser till att de har fyllnad. Vilket till dags datum ökar driftdagarna på denna typen bränslekällor till många hundratalets laddning.',
    },
    {
      type: 'tip',
      html: 'Bakterierna hos en cell är mycket extremt köldkänsliga. Var uppmärksam vid flygtid i minus, du märker snabba tapp hos förbrukningen när gradantalet går i det blå - ha värmda ackumulatorer i handen om utetermometern understiger de plusgrader hos sval 15 grader celsius.',
    },
    {
      type: 'title',
      text: 'Formula gällande matematisk bakgrund',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vi utför den stora tyngre lyft matematiken, men att ändå ta in dess egenskap för en beredskap ute i busken blir praktikalitet man tar åt sig av framgent. Man får en grund i dess teorem med;',
    },
    {
      type: 'paragraph',
      html: '<strong>Tidsrymd i (m) = ((Total värde mAh / 1000) * Säkerhetsaspekter och felkalkyl i %) // snitt amp // 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'För en flygning vars tank (accar) rymmer ungefärligen upp emot gräns för avsagt tal d.v.s. ett batteri med mätfaktor ca - 2200 mAh, varav nedslagning ställts när varning av 20 ggr i säkerhet drar ner kraft över snittet där summan är i grova dag ca 15 Amperes kraftigt driv => Räkneskapens (2.2 * 0.8) / 15 * 60 ger ett total om närmsta angiven av flygvärdig timlängd per total om ca exakta: 7 min 4 sekunder (7.04 m)! ',
    },
    {
      type: 'title',
      text: 'Disklaim om de exakta siffrorna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Precis allt man adderar med sig från skärm och kam - fyller man utrymme, är det batteri man slänger med ju fler amp desto exakt kraft per överslags vikt man belagras vid. Tyngd över en brant viktmarginal styrs bort från motorernas drifteffekt över tid.',
    },
    {
      type: 'paragraph',
      html: 'Drifting för pilot är då optimal om sökningen går över propellrens lyftkapacitet, så kallad <em>Disc loading ratio</em> sett mot att den kraft källan drar ur ger maximal tid tillbaka i att utföra sitt egentliga plan.',
    },
    {
      type: 'title',
      text: 'Den olika spridningen rent teoretiskt över dess slagutbud, om storlek',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Dessa så kallade whoop flygare och en bit the micro ones:</strong>  Agerar lågförbrukare de snurrar under knappa tak varpå amp om ca endast tre upptill 5 kan hittas dock ser du till dem en smal ram ur mAh om ca: 3 till 5hundra-där de sällan får flygdans runt en sträcka som är snarlik för dess liv och drar mer av den högre svinghastigheten (3-4 m snitt).',
    },
    {
      type: 'paragraph',
      html: '<strong>Då 5 tumms en del racings i format...:</strong> Som brutala djur tar de med ca max upp emot den högt angivna ampere för över pikade slående värde, där det suger snabbt mer mot i de mer angivna om (ca under minuten sträcket ur ack).',
    },
    {
      type: 'paragraph',
      html: '<strong>Och dessa Långa Avstånd..:</strong> I dess fokus är framtagen och optimerad ut ur Lithium i dess beståndsdel då cell med de mer energi intensiva batterierna i sig medför avsevärda sträcklängder.',
    },
    {
      type: 'tip',
      html: 'Om du väljer rätt med en mindre lutning för rotorn som tar vindmotstånd är du och en anpassande flyg med vind mer effektiv. Det ger i längden den bäst kortsiktiga extra tiden då driften i marginal kan höjas mellan en tiondel i %. Så i dess minsta snickranden har man stor vinning av med utformad kännedom,',
    },
    {
      type: 'title',
      text: 'I slutfas om underhåll med dess rekommenderat vilande stånd:',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om den till viss del är med en intern hög resistens förloras med tid mer och mer, denna hettas vid bruk kraftigare upp än motsvarande som ses ok och man ges då den som var ett snabbt dalande mot en kort snutt strömförsel under slutrakan. Behåll pack i ( 3,8 till  V)',
    },
    {
      type: 'paragraph',
      html: 'I avslut de energi system du under drift frammanar med drifttid är och tas alltid upp på fysiken med ett spel inom ramen lag, ta hand om dig.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
