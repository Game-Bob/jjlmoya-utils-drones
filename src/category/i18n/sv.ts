import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'drones',
  title: 'Verktyg och Kalkylatorer för Drönare och Radioamatörer',
  description: 'Optimera dina flygningar och din kommunikation med kostnadsfria onlineverktyg. Flygtidskalkylatorer, batteritidsestimering, GPS-koordinatkonverterare och antennlängder för radiofrekvens.',
  seo: [
    {
      type: 'title',
      text: 'RF-teknik och Precisionsflygning: Verktyg för Piloter och Radiooperatörer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Amatörradio och drönarflygning år 2026 är områden där skicklighet möter radiofrekvensteknik (RF). I den här sektionen erbjuder vi en uppsättning <strong>kostnadsfria onlineverktyg</strong> designade för FPV-entusiaster, kommersiella RPAS-piloter och radiooperatörer. Att förstå begränsningarna i din mobila utrustning och lagarna för vågutbredning är skillnaden mellan ett lyckat uppdrag och ett kostsamt tekniskt fel.',
    },
    {
      type: 'paragraph',
      html: 'Från planering av flygautonomi till konstruktion av anpassade antenner och geoprecis navigering, ger våra verktyg dig den datatrygghet som krävs för att ta dina projekt upp i luften eller ut i etern.',
    },
    {
      type: 'title',
      text: 'Flygplanering: Tid och Batteriautonomi (mAh / Amps)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att känna till din drönares faktiska operativa fönster är avgörande för säkerheten. Vår <strong>flygtidskalkylator</strong> uppskattar den totala autonomin baserat på batteriets milliamperetimmar (mAh) och motorernas genomsnittliga förbrukning. Låt inte telemetrin överraska dig med kritisk spänning långt hemifrån.',
    },
    {
      type: 'title',
      text: 'Antennteknik: Våglängd och Radiofrekvens',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sändningseffektivitet beror på resonans. <strong>Antennkalkylatorn</strong> fastställer den exakta fysiska längden som krävs för dipoler, 1/2- och 1/4-vågsantenner baserat på önskad driftsfrekvens (VHF, UHF, ISM-band). Maximera räckvidden och reducera SWR (ståendevågförhållande) i dina kommunikationssystem.',
    },
    {
      type: 'title',
      text: 'Geoprecis Navigering: GPS-koordinatkonverterare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Oumbärlig för sökuppdrag, kartläggning eller radiolokaliseing. <strong>Koordinatkonverteraren</strong> översätter format från decimaler till DMS (grader, minuter, sekunder) i båda riktningarna, och erbjuder en kartvy för att bekräfta exaktheten i din intressepunkt före start.',
    },
    {
      type: 'list',
      items: [
        '<strong>RPAS-säkerhet:</strong> Undvik nödlandningar på grund av oförutsedd tömning av battericykler.',
        '<strong>RF-optimering:</strong> Bygg dina egna högpresterande antenner med exakta fysiska mått baserade på ljushastigheten i ledaren.',
        '<strong>Georefererade Uppdrag:</strong> Arbeta sömlöst med olika kartstandarder och internationella koordinater.',
        '<strong>Integritet i Luften:</strong> Dina flygplaner och koordinater processas lokalt; vi laddar inte upp känslig data till tredjepartsmoln.',
      ],
    },
    {
      type: 'title',
      text: 'Aeronautisk Reglering och Operatörscertifiering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att flyga drönare idag kräver förståelse för reglering. I EU kräver EASA och lokala myndigheter (som Transportstyrelsen i Sverige) certifiering för yrkesmässig flygning. I USA kräver FAA en Part 107-licens. Varje jurisdiktion har höjdgränser, restriktionszoner (NOTAM), försäkringskrav och register.',
    },
    {
      type: 'paragraph',
      html: 'Våra planeringsverktyg hjälper dig att verifiera autonomi, synvinklar för kartläggning och flygtider. Genom att kombinera detta med data om restriktionszoner kan du planera uppdrag som är både tekniskt optimala OCH lagliga. Att flyga utanför regleringen är kostsamt (böter på över 1000 € i Europa), varför noggrann planering är obligatorisk.',
    },
    {
      type: 'title',
      text: 'Kommersiella Applikationer: Fotogrammetri och Inspektion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Drönare har revolutionerat industriell inspektion och topografi. En takinspektör kan använda en drönare för att identifiera skador utan att riskera sitt liv. En jordbruksingenjör använder drönare för att kartlägga vattenstress i grödor via värmekameror. Ett byggföretag använder fotogrammetri för att dokumentera framsteg i 3D.',
    },
    {
      type: 'paragraph',
      html: 'Varje applikation kräver olika autonomi, lastkapacitet och räckvidd. Våra kalkylatorer låter dig modellera: lastvikt, antal batterier, flygcykler per dag. Därifrån beräknar du ROI: om uppdraget motiverar investeringen. Våra verktyg hjälper dig med den kalkylen.',
    },
    {
      type: 'title',
      text: 'Radioamatörcommunity: HF-, VHF-, UHF-band och Satelliter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Radioamatörer (HAM radio) är ett globalt community med över 2 miljoner operatörer som kommunicerar utan internet. De använder frekvensband tilldelade av internationella organ (IARU). VHF (144-146 MHz på 2-metersbandet) är det mest tillgängliga bandet för att börja, med typisk räckvidd på 20-100 km beroende på antenn.',
    },
    {
      type: 'paragraph',
      html: 'Att förstå hur man beräknar antenner för sitt band är väsentligt. Vår generator beräknar detta: du anger frekvensen, specificerar om du vill ha 1/4, 1/2 eller hel våglängd, och får det exakta måttet. Bygg din antenn, trimma in den och anslut till världen med bara en radio och en hembyggd antenn. Det är tillgänglig och enkel teknik som överlever krig, katastrofer och strömavbrott.',
    },
    {
      type: 'title',
      text: 'Framtiden för personlig luftmobilitet 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'År 2026 är integreringen av drönare i det delade luftrummet en reglerad verklighet. Förmågan hos amatörer att operera under professionella standarder för underhåll och teknisk planering är nyckeln till samexistens. Dessa verktyg är en del av engagemanget för excellens och säkerhet som varje pilot och radioamatör bör upprätthålla.',
    },
  ],
};
