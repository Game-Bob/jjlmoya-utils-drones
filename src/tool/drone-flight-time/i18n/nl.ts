import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-vliegtijd-calculator';
const title = 'Drone Vliegtijd Calculator voor LiPo LiIon Autonomie Schatting';
const description = 'Bereken hoe lang uw drone kan vliegen op basis van mAh-capaciteit und stroomverbruik. Optimaliseer uw LiPo-batterijen voor veilige vluchten.';

const faqItems = [
  {
    question: 'Waarom is de werkelijke vliegtijd korter dan berekend?',
    answer: 'De calculator gaat uit van een constant verbruik. Scherpe manoeuvres, tegenwind en batterijslijtage kunnen de werkelijke vliegtijd met maximaal 30% verkorten.',
  },
  {
    question: 'Bij welke spanning moet ik mijn drone laten landen?',
    answer: 'Land idealiter wanneer de spanning in rust daalt tot 3,5 V - 3,6 V per cel. Dit komt overeen met de aanbevolen resterende capaciteit van 20%.',
  },
  {
    question: 'Zijn LiPo- of Li-Ion-accu\'s beter voor drones?',
    answer: 'LiPo-accu\'s leveren veel direct vermogen, ideaal voor racen en acrobatiek. Li-Ion-cellen hebben een langere gebruiksduur maar een lager uitgangsvermogen, ideaal voor lange, gelijkmatige vluchten.',
  },
  {
    question: 'Welke invloed heeft het aantal cellen (S) op de vliegtijd?',
    answer: 'Meer cellen verhogen spanning en vermogen, maar ook het gewicht. Als de motoren op die spanning zijn geoptimaliseerd, kunnen ze efficiënter werken, maar alleen het aantal cellen garandeert geen langere vliegtijd.',
  },
];

const howToSteps = [
  {
    name: 'Capaciteit controleren',
    text: 'Controleer het batterijlabel en zoek de mAh-waarde (bijv. 1500, 2200, 4500).',
  },
  {
    name: 'Stroomverbruik schatten',
    text: 'Voer het gemiddelde stroomverbruik van uw drone in. U vindt dit in de OSD-telemetrie na een testvlucht.',
  },
  {
    name: 'Veiligheidsmarge aanpassen',
    text: 'Laat 20% over (stel 80% in) om de batterij te beschermen en een landingsbuffer te behouden.',
  },
  {
    name: 'Resultaat bekijken',
    text: 'Bekijk de exacte tijd in minuten en seconden waarin u veilig in de lucht kunt blijven.',
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
    batterySpecs: 'Batterijspecificaties',
    capacity: 'Capaciteit',
    voltage: 'Voltage (S-cellen)',
    safetyMargin: 'Veiligheidsmarge',
    landingHint: 'Landen bij 3,5V - 3,7V per cel.',
    consumptionDynamics: 'Verbruiksdynamiek',
    averageConsumption: 'Gemiddeld Verbruik',
    powerWatts: 'Vermogen (Watt)',
    efficiencyHint: 'Bij het wijzigen van Amps worden Watts herberekend op basis van S-voltage.',
    estimatedEfficiency: 'Geschatte Efficiëntie',
    typicalEfficiencyHint: 'Typisch: 4-6 (Racing), 8-12 (Cinematic/Long Range).',
    safeFlight: 'Veilige Vlucht',
    totalEnergy: 'Totale Energie',
    theoreticalTime: 'Theoretische Tijd (0%)',
    co2Footprint: 'CO2-voetafdruk',
    autonomyChart: 'Uithoudingsgrafiek',
    chartSubtitle: 'Amps (A) vs. Tijd (min)',
    chartLabel: 'Minuten',
  },
  seo: [
    {
      type: 'title',
      text: 'Drone Vliegtijd Calculator: Een Volledige Gids voor Autonomie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uithoudingsvermogen is waarschijnlijk de meest kritische factor bij het ontwerp en de bediening van elk onbemand luchtvaartuig. Of u nu een FPV-racedronepiloot, een professionele luchtfotograaf of een liefhebber van lange afstanden bent, precies weten hoe lang uw apparatuur in de lucht kan blijven is van vitaal belang voor de veiligheid en het succes van de missie. Onze <strong>vliegtijdcalculator</strong> maakt gebruik van de fundamentele variabelen van batterijcapaciteit en stroomverbruik om u een realistische en veilige schatting te geven.',
    },
    {
      type: 'title',
      text: 'Batterijcapaciteit: mAh Uitgelegd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De capaciteit van een batterij wordt doorgaans gemeten in milliampère-uur (mAh). Dit cijfer geeft aan hoeveel elektrische lading de batterij kan opslaan. Een batterij van 1500 mAh kan bijvoorbeeld theoretisch gedurende een heel uur 1500 milliampère leveren. In de dronewereld, waar het stroomverbruik extreem hoog is, spreken we meestal over Amps (A). 1000 mAh is precies 1 Ah (Ampère-uur).',
    },
    {
      type: 'paragraph',
      html: 'De bruto capaciteit is echter niet de enige factor. Het voltage (bepaald door het aantal cellen of \'S\') beïnvloedt direct het totale vermogen (Watts), maar voor de berekening van de tijd op basis van het motorverbruik is de verhouding Ah/Amps de meest directe statistiek die door vluchtingenieur wordt gebruikt.',
    },
    {
      type: 'title',
      text: 'Stroomverbruik: Amperage in de Vlucht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Motorverbruik is de meest fluctuerende variabele tijdens de vlucht. Een drone stationair laten zweven (hover) is niet hetzelfde als agressieve acrobatische manoeuvres uitvoeren. Elke motor- en propellercombinatie heeft een efficiëntiecurve. Wanneer u vol gas geeft, schiet het ampèrebereik omhoog, wat de levensduur van de batterij drastisch verkort.',
    },
    {
      type: 'list',
      items: [
        'Hoveren: Het verbruik is minimaal en constant, ideaal voor fotografie.',
        'Cruisen: Iets verhoogd verbruik door aerodynamische weerstand.',
        'Agressieve/FPV-vlucht: Stroompieken kunnen het gemiddelde verbruik in enkele seconden verdrievoudigen.',
        'Gewicht van de drone: Elke extra gram vereist een hoger toerental van de motor om lift te genereren, wat de amperage verhoogt.',
      ],
    },
    {
      type: 'title',
      text: '80 Veiligheidsregel: LiPo Chemie Beschermen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een LiPo-batterij (Lithium Polymeer) ontladen tot 0% van zijn capaciteit is de snelste manier om deze te vernietigen en, erger nog, een crash te veroorzaken. Chemisch gezien lijden cellen onomkeerbare schade als hun voltage onder een kritische drempel daalt (meestal 3,0V - 3,2V per cel).',
    },
    {
      type: 'paragraph',
      html: 'Daarom passen we altijd een <strong>veiligheidsmargeregel</strong> toe. Onze calculator stelt u in staat deze waarde aan te passen, maar het wordt aanbevolen om te landen wanneer er nog 20% lading over is. Dit verlengt niet alleen de levensduur van uw dure batterijen met honderden cycli, maar garandeert u ook een vitale reserve aan kracht in geval van onverwachte windstoten of als u een landing moet afbreken en het opnieuw moet proberen.',
    },
    {
      type: 'tip',
      html: 'Dronebatterijen zijn erg gevoelig voor kou. In de winter neemt de interne weerstand van de LiPo toe, wat een snellere spanningsval veroorzaakt. Warm uw batterijen altijd op voor het opstijgen als de omgevingstemperatuur lager is dan 15 graden.',
    },
    {
      type: 'title',
      text: 'Mathematische Vluchtformule',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hoewel onze tool het zware werk voor u doet, is het interessant om de logica achter de berekening te kennen. De basisformule is:',
    },
    {
      type: 'paragraph',
      html: '<strong>Tijd (min) = ((Capaciteit mAh / 1000) * Veiligheidsfactor) / Amps Verbruik * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Als u bijvoorbeeld een batterij van 2200 mAh heeft, wilt landen bij 20% (veiligheid 0,8) en uw drone gemiddeld 15 Amps verbruikt, is de berekening: (2,2 * 0,8) / 15 * 60 = 7,04 minuten veilige vluchttijd.',
    },
    {
      type: 'title',
      text: 'Gewichtsoptimalisatie en Efficiëntie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Er is een punt van afnemende meeropbrengst bij het toevoegen van grotere batterijen. Het verdubbelen van de batterijcapaciteit verdubbelt de vliegtijd niet, omdat de batterij zelf gewicht toevoegt. Dat extra gewicht vereist dat motoren sneller draaien en daardoor meer stroom verbruiken. Op een gegeven moment verbruikt het extra gewicht meer energie dan het bijdraagt, waardoor de algehele efficiëntie van het systeem afneemt.',
    },
    {
      type: 'paragraph',
      html: 'Ervaren piloten zoeken naar de perfecte balans tussen <em>Disc Loading</em> (propelleroppervlakbelasting) en batterijcapaciteit om wat we noemen "nuttige missietijd" te maximaliseren.',
    },
    {
      type: 'title',
      text: 'Verschillen tussen Drone-typen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Micro-drones (Whoops):</strong> Deze verbruiken slechts 2-5 Amps, maar gebruiken batterijen van 300-500 mAh. De tijd is meestal kort (3-4 min) door lage inertie en hoge toerentallen.',
    },
    {
      type: 'paragraph',
      html: '<strong>5" Racing-drones:</strong> Brutaal verbruik tijdens races (tot 120A pieken), waardoor een 1300 mAh batterij in nauwelijks 2 minuten pure adrenaline leeg is.',
    },
    {
      type: 'paragraph',
      html: '<strong>Long Range-drones:</strong> Geoptimaliseerd voor efficiëntie. Ze maken vaak gebruik van Lithium-Ion (Li-Ion) cellen die een hogere energiedichtheid hebben dan LiPo\'s, waardoor vluchten van 30 tot 60 minuten mogelijk zijn met een zeer laag stroomverbruik.',
    },
    {
      type: 'tip',
      html: 'Overschakelen naar propellers met een lagere spoed (pitch) kan uw vliegtijd verlengen ten koste van topsnelheid en reactievermogen. Het is de goedkoopste en meest effectieve manier om 10-15% meer autonomie te winnen.',
    },
    {
      type: 'title',
      text: 'Onderhoud en Opslag',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om deze berekeningen nauwkeurig te laten zijn, moeten uw batterijen in goede staat verkeren. Een batterij met een hoge interne weerstand zal overmatig warm worden en "liegen" over zijn werkelijke capaciteit. Bewaar uw batterijen altijd op opslagvoltage (3,8V-3,85V per cel) als u langer dan 48 uur niet gaat vliegen.',
    },
    {
      type: 'paragraph',
      html: 'Kortom, energiemanagement is de kunst van het balanceren van fysica, chemie en wiskunde. Gebruik onze calculator regelmatig om uw vliegsessies te plannen en vergeet nooit dat in de lucht tijd uw kostbaarste bezit is. Veel vliegplezier en veilige landingen!',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
