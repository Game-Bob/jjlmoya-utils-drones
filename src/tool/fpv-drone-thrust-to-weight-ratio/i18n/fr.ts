import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculateur-rapport-poussee-poids-drone-fpv';
const title = 'Calculateur de Rapport Poussee Poids et Telemetrie de Vol Drone FPV';
const description = 'Calculez la poussee statique maximale, la courbe de gaz non lineaire, les forces G verticales, le point de stationnaire et le temps 0 a 100 pour drones FPV.';

const ui = {
  title: 'Calculateur de Rapport Poussee Poids pour Drone FPV',
  subtitle: 'Analysez les courbes de poussee, la reponse des gaz en direct, les forces G et la categorie de vol',
  presetsHeader: 'Configurations Rapides',
  customPreset: 'Personnalise',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Pouces',
  freestyle5Preset: '6S Freestyle 5 Pouces Pro',
  longrange7Preset: '6S Mountain LR 7 Pouces',
  cinelifter8Preset: '8S Cinelifter Lourd X8',
  specsHeader: 'Caracteristiques du Drone et Propulsion',
  auwGramsLabel: 'Masse Totale avec Batterie (g)',
  motorCountLabel: 'Configuration des Moteurs',
  thrustPerMotorLabel: 'Poussee Statique Max par Moteur (g)',
  propellerSizeLabel: 'Diametre Helice (pouces)',
  propellerPitchLabel: 'Pas de Helice (pouces)',
  bladeCountLabel: 'Nombre de Pales',
  blade2Option: '2 Pales (Bipale - Efficacite Maximale)',
  blade3Option: '3 Pales (Tripale - Standard Freestyle)',
  blade4Option: '4 Pales (Quadripale - Adherence Maximale)',
  throttleStickHeader: 'Simulateur de Manette des Gaz en Direct',
  throttleStickLabel: 'Position des Gaz (%)',
  snapIdleLabel: 'Ralenti (0%)',
  snapHoverLabel: 'Stationnaire',
  snapCruiseLabel: 'Croisiere (50%)',
  snapPunchLabel: 'Plein Gaz (100%)',
  telemetryHeader: 'Telemetrie de Vol FPV et Diagnostic',
  twrRatioLabel: 'Rapport Poussee Poids (TWR)',
  hoverThrottleLabel: 'Point de Gaz en Stationnaire',
  currentThrustLabel: 'Poussee Actuelle Generee',
  instantGForceLabel: 'Force G Verticale Instantanee',
  zeroToHundredLabel: 'Temps 0 a 100 km/h en Punch',
  recommendedCamAngleLabel: 'Inclinaison de Camera FPV Conseillee',
  windResistanceLabel: 'Vitesse de Penetration Face au Vent',
  totalMaxThrustLabel: 'Poussee Statique Totale Maximale',
  maxPitchAngleLabel: 'Angle Inclinaison Soutenable',
  tuningHeader: 'Recommandations de Reglage Betaflight et PID',
  tpaRecommendationLabel: 'Attenuation PID des Gaz (TPA)',
  dynamicIdleLabel: 'Ralenti Dynamique Recommande',
  propwashRiskLabel: 'Autorite sur Turbulences Propwash',
  tierUnderpoweredTitle: 'Sous Motorise ou Risque de Derive au Vent',
  tierUnderpoweredDesc: 'TWR inferieur a 2 pour 1 insuffisant pour rattraper les chutes rapides. Adapte uniquement au vol interieur calme.',
  tierCinematicTitle: 'Vol Cinematique Fluide',
  tierCinematicDesc: 'TWR entre 2 pour 1 et 4 pour 1 assurant un controle souple des gaz et des prises de vue stables.',
  tierFreestyleTitle: 'Freestyle Sportif et Agile',
  tierFreestyleDesc: 'TWR entre 4 pour 1 et 8 pour 1 offrant des reponses vives et de bonnes reprises acrobatiques.',
  tierAcroProTitle: 'Acrobatie Haute Performance et Freestyle Bando',
  tierAcroProDesc: 'TWR entre 8 pour 1 et 13 pour 1 delivrant des accelerations explosives et une annulation nette du propwash.',
  tierRacingExtremeTitle: 'Course de Drones Extreme',
  tierRacingExtremeDesc: 'TWR superieur a 13 pour 1 fournissant la puissance necessaire aux circuits de competition FPV.',
  hudThrustCurveTitle: 'Courbe de Reponse de Poussee Non Lineaire',
  hudHoverMarker: 'Point Stationnaire',
  hudCurrentStickMarker: 'Manette Actuelle',
  hudGForceLabel: 'Forces G',
  hudTiltAngleLabel: 'Angle Camera',
  hudVectorPowerLabel: 'Telemetrie de Puissance en Direct',
};

const faqItems = [
  {
    question: 'Quel est le rapport poussee poids ideal pour un drone FPV freestyle?',
    answer: 'Pour un quadcopter freestyle, un TWR compris entre 8 pour 1 et 12 pour 1 offre l acceleration requise pour arreter les plongeons et enchainer les figures sans vibration.',
  },
  {
    question: 'Comment la courbe non lineaire des gaz influence le vol stationnaire?',
    answer: 'Les moteurs brushless generent une poussee proportionnelle au carre de la vitesse de rotation. Le point de stationnaire se situe generalement entre 20 et 35 pour cent de gaz.',
  },
  {
    question: 'Pourquoi l angle de camera FPV depend du rapport poussee poids?',
    answer: 'Les drones puissants volent vite avec une inclinaison vers l avant prononcee. Pour maintenir l horizon au centre du casque FPV, les pilotes inclinent la camera de 35 a 50 degres.',
  },
  {
    question: 'Quel est l impact du nombre de pales de l helice sur le pilotage?',
    answer: 'Les bipales offrent une excellente autonomie et vitesse de pointe. Les tripales sont la reference pour le freestyle, tandis que les quadripales maximisent l accroche en virage serre.',
  },
];

const howToSteps = [
  {
    name: 'Saisir le poids du drone ou choisir un profil',
    text: 'Indiquez la masse totale en ordre de vol en grammes comprenant la batterie et la camera.',
  },
  {
    name: 'Configurer les moteurs et les helices',
    text: 'Renseignez le nombre de moteurs, de pales et la poussee maximale au banc a 100 pour cent de gaz.',
  },
  {
    name: 'Ajuster la manette des gaz en direct',
    text: 'Deplacez le curseur de gaz pour observer la poussee resultante, les forces G et la position sur la courbe de puissance.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodynamique du Rapport Poussee Poids en Drone FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le rapport poussee poids (TWR) conditionne l acceleration et la reactivite des multirotors. En freestyle et course FPV, une reserve de puissance suffisante permet aux pilotes d arreter des plongeons a vitesse maximale et de manœuvrer avec precision.',
  },
  {
    type: 'title',
    text: 'Classification des Drones FPV et Performances Types',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Plateforme', 'Masse AUW Typique', 'TWR Cible', 'Gaz en Stationnaire', 'Acceleration 0 a 100', 'Inclinaison Camera'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 pour 1', '35 pour cent', '1.20 s', '15 deg a 25 deg'],
      ['4S Freestyle 3.5"', '250g', '12.0 pour 1', '24 pour cent', '0.28 s', '35 deg a 45 deg'],
      ['6S Freestyle 5" Pro', '680g', '11.5 pour 1', '25 pour cent', '0.30 s', '35 deg a 50 deg'],
      ['6S Mountain LR 7"', '1150g', '8.3 pour 1', '30 pour cent', '0.45 s', '20 deg a 30 deg'],
      ['8S Cinelifter X8', '4200g', '6.1 pour 1', '38 pour cent', '0.70 s', '15 deg a 25 deg'],
    ],
  },
  {
    type: 'title',
    text: 'Reponse Non Lineaire des Moteurs et Courbes de Poussee',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Les moteurs electriques developpent leur poussee de maniere exponentielle. Les 20 derniers pour cent de course de gaz delivrent plus de 40 pour cent de la force totale disponible.',
  },
  {
    type: 'list',
    items: [
      'Zone de stationnaire (20 a 35 pour cent): Precision fine pour le vol rasant.',
      'Zone de croisiere (35 a 65 pour cent): Vol translate fluide avec consommation moderee.',
      'Zone de plein gaz (70 a 100 pour cent): Forte acceleration verticale avec forces G elevees.',
    ],
  },
  {
    type: 'title',
    text: 'Choix des Helices et Parametrage Betaflight',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Pour les configurations avec un TWR superieur a 10 pour 1, il est recommande d activer la fonction Throttle PID Attenuation (TPA) dans Betaflight pour eviter les oscillations a plein gaz.',
  },
  {
    type: 'tip',
    title: 'Conseil de Reglage Betaflight TPA',
    html: 'Definissez le seuil TPA a 1250 ou 1350 avec une attenuation de 0.65 afin de preserver la fluidite en ligne droite rapide.',
  },
];

const schemas: FpvDroneThrustToWeightRatioLocaleContent['schemas'] = [
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
    description,
    step: howToSteps.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.name,
      text: s.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
  } as WithContext<SoftwareApplication>,
];

export const content: FpvDroneThrustToWeightRatioLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo: seoSections,
  faq: faqItems,
  howTo: howToSteps,
  bibliography: BIBLIOGRAPHY_ITEMS,
  schemas,
};
