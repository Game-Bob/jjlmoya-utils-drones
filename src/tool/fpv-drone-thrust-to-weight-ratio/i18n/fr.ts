import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculateur-rapport-poussee-poids-drone-fpv';
const title = 'Calculateur de Rapport Poussée Poids et Télémétrie de Vol Drone FPV';
const description = 'Calculez la poussée statique maximale, la courbe de gaz non linéaire, les forces G verticales, le point de stationnaire et le temps 0 à 100 pour drones FPV.';

const ui = {
  title: 'Calculateur de Rapport Poussée Poids pour Drone FPV',
  subtitle: 'Analysez les courbes de poussée, la réponse des gaz en direct, les forces G et la catégorie de vol',
  presetsHeader: 'Configurations Rapides',
  customPreset: 'Personnalisé',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Pouces',
  freestyle5Preset: '6S Freestyle 5 Pouces Pro',
  longrange7Preset: '6S Mountain LR 7 Pouces',
  cinelifter8Preset: '8S Cinelifter Lourd X8',
  specsHeader: 'Caractéristiques du Drone et Propulsion',
  auwGramsLabel: 'Masse Totale avec Batterie (g)',
  motorCountLabel: 'Configuration des Moteurs',
  thrustPerMotorLabel: 'Poussée Statique Max par Moteur (g)',
  propellerSizeLabel: 'Diamètre Hélice (pouces)',
  propellerPitchLabel: 'Pas de Hélice (pouces)',
  bladeCountLabel: 'Nombre de Pales',
  blade2Option: '2 Pales (Bipale - Efficacité Maximale)',
  blade3Option: '3 Pales (Tripale - Standard Freestyle)',
  blade4Option: '4 Pales (Quadripale - Adhérence Maximale)',
  throttleStickHeader: 'Simulateur de Manette des Gaz en Direct',
  throttleStickLabel: 'Position des Gaz (%)',
  snapIdleLabel: 'Ralenti (0%)',
  snapHoverLabel: 'Stationnaire',
  snapCruiseLabel: 'Croisière (50%)',
  snapPunchLabel: 'Plein Gaz (100%)',
  telemetryHeader: 'Télémétrie de Vol FPV et Diagnostic',
  twrRatioLabel: 'Rapport Poussée Poids (TWR)',
  hoverThrottleLabel: 'Point de Gaz en Stationnaire',
  currentThrustLabel: 'Poussée Actuelle Générée',
  instantGForceLabel: 'Force G Verticale Instantanée',
  zeroToHundredLabel: 'Temps 0 à 100 km/h en Punch',
  recommendedCamAngleLabel: 'Inclinaison de Caméra FPV Conseillée',
  windResistanceLabel: 'Vitesse de Pénétration Face au Vent',
  totalMaxThrustLabel: 'Poussée Statique Totale Maximale',
  maxPitchAngleLabel: 'Angle Inclinaison Soutenable',
  tuningHeader: 'Recommandations de Réglage Betaflight et PID',
  tpaRecommendationLabel: 'Atténuation PID des Gaz (TPA)',
  dynamicIdleLabel: 'Ralenti Dynamique Recommandé',
  propwashRiskLabel: 'Autorité sur Turbulences Propwash',
  tierUnderpoweredTitle: 'Sous Motorisé ou Risque de Dérive au Vent',
  tierUnderpoweredDesc: 'TWR inférieur à 2 pour 1 insuffisant pour rattraper les chutes rapides. Adapté uniquement au vol intérieur calme.',
  tierCinematicTitle: 'Vol Cinématique Fluide',
  tierCinematicDesc: 'TWR entre 2 pour 1 et 4 pour 1 assurant un contrôle souple des gaz et des prises de vue stables.',
  tierFreestyleTitle: 'Freestyle Sportif et Agile',
  tierFreestyleDesc: 'TWR entre 4 pour 1 et 8 pour 1 offrant des réponses vives et de bonnes reprises acrobatiques.',
  tierAcroProTitle: 'Acrobatie Haute Performance et Freestyle Bando',
  tierAcroProDesc: 'TWR entre 8 pour 1 et 13 pour 1 délivrant des accélérations explosives et une annulation nette du propwash.',
  tierRacingExtremeTitle: 'Course de Drones Extrême',
  tierRacingExtremeDesc: 'TWR supérieur à 13 pour 1 fournissant la puissance nécessaire aux circuits de compétition FPV.',
  hudThrustCurveTitle: 'Courbe de Réponse de Poussée Non Linéaire',
  hudHoverMarker: 'Point de Stationnaire',
  hudCurrentStickMarker: 'Manette Actuelle',
  hudGForceLabel: 'Forces G',
  hudTiltAngleLabel: 'Angle Caméra',
  hudVectorPowerLabel: 'Télémétrie de Puissance en Direct',
};

const faqItems = [
  {
    question: 'Quel est un bon rapport poussée poids pour le freestyle FPV ?',
    answer: "Pour le vol freestyle moderne, un TWR de 8:1 à 12:1 fournit l'accélération explosive nécessaire pour stopper les chutes libres et négocier des virages serrés.",
  },
  {
    question: 'Comment la courbe non linéaire des gaz influence-t-elle le stationnaire ?',
    answer: "Les moteurs brushless génèrent une poussée proportionnelle au carré du régime moteur. Le point d'équilibre stationnaire se situe donc généralement entre 20 et 35 % de la course des gaz.",
  },
  {
    question: "Pourquoi l'angle de la caméra FPV dépend-il de la poussée du drone ?",
    answer: "Un drone à fort rapport poussée poids vole à des vitesses de croisière plus élevées avec une assiette plus inclinée vers l'avant. Pour conserver l'horizon centré, les pilotes règlent leur caméra entre 35 et 50 degrés.",
  },
  {
    question: "Comment le nombre de pales de l'hélice modifie-t-il les sensations de vol ?",
    answer: "Les hélices bipales offrent un rendement énergétique maximal et une vitesse de pointe élevée. Les tripales équilibrent réactivité et accroche en virage pour le freestyle. Les quadripales apportent un freinage immédiat à bas régime.",
  },
];

const howToSteps = [
  {
    name: 'Sélectionner un Profil ou Entrer la Masse du Drone',
    text: 'Indiquez la masse totale en ordre de vol en grammes incluant batterie, caméra HD et accessoires.',
  },
  {
    name: 'Configurer les Moteurs et Hélices',
    text: 'Renseignez le nombre de moteurs, de pales et la poussée statique maximale spécifiée par le fabricant.',
  },
  {
    name: 'Ajuster la Manette des Gaz Virtuelle',
    text: 'Déplacez le curseur des gaz pour observer en temps réel la variation des forces G, des vecteurs et de la courbe de poussée.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aérodynamique du Rapport Poussée Poids sur les Drones FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Le rapport poussée poids (TWR) détermine l'accélération verticale et l'autorité de contrôle de tout multirotor. En vol acrobatique et en course FPV, disposer d'une réserve de puissance suffisante permet aux pilotes d'interrompre des piqués à haute vitesse et de manœuvrer avec précision près des obstacles. Maîtriser cette dynamique est indispensable pour dimensionner moteurs, contrôleurs ESC et ajuster le firmware.",
  },
  {
    type: 'title',
    text: 'Classification des Drones FPV et Métriques de Performance',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Plateforme', 'Masse AUW Typique', 'TWR Cible', 'Gaz en Stationnaire', 'Temps 0 à 100 km/h', 'Angle FPV'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 à 1', '35 pour cent', '1.20 s', '15 deg à 25 deg'],
      ['4S Freestyle 3.5"', '250g', '12.0 à 1', '24 pour cent', '0.28 s', '35 deg à 45 deg'],
      ['6S Freestyle 5" Pro', '680g', '11.5 à 1', '25 pour cent', '0.30 s', '35 deg à 50 deg'],
      ['6S Mountain LR 7"', '1150g', '8.3 à 1', '30 pour cent', '0.45 s', '20 deg à 30 deg'],
      ['8S Cinelifter X8', '4200g', '6.1 à 1', '38 pour cent', '0.70 s', '15 deg à 25 deg'],
    ],
  },
  {
    type: 'title',
    text: 'Réponse Non Linéaire des Gaz et Courbes de Poussée',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Les moteurs électriques brushless ne délivrent pas une poussée strictement proportionnelle au signal de commande. La dynamique des fluides et la charge des hélices créent une courbe exponentielle où les 20 derniers pour cent de course de manette fournissent plus de 40 pour cent de la poussée globale.',
  },
  {
    type: 'list',
    items: [
      'Zone de stationnaire (20 à 35 % de gaz): Plage de haute précision pour le maintien de position.',
      'Zone de croisière (35 à 65 % de gaz): Vol de translation équilibré avec consommation modérée.',
      'Zone de plein gaz (70 à 100 % de gaz): Délivrance de puissance maximale générant de fortes accélérations G.',
    ],
  },
  {
    type: 'title',
    text: 'Choix des Hélices et Réglage Firmware Betaflight',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Le diamètre, le pas et le nombre de pales déterminent la conversion du couple moteur en poussée statique et vitesse de pointe. Pour les configurations avec TWR supérieur à 10:1, il est vivement recommandé d'activer l'atténuation TPA sous Betaflight pour supprimer les oscillations D-Term à plein régime.",
  },
  {
    type: 'tip',
    title: 'Conseil de Réglage Betaflight TPA',
    html: "Sur les montages à forte puissance, activez le TPA à partir de 1250 ou 1350 avec une valeur de 0.65. Cela atténuera le gain D à plein gaz pour garder un drone stable et sans vibrations en ligne droite.",
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
