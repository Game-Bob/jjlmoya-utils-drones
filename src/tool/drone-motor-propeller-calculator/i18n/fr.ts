import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculateur-moteur-helice-drone';
const title = 'Calculateur de Moteur et Hélice pour Drone';
const description = 'Estimez la poussée du moteur de drone, les RPM sous charge, la vitesse de pas, la puissance et le courant à partir des KV, de la tension, de la géométrie et du poids du drone.';

const ui = {
  presetsHeader: 'Choisissez un profil de vol',
  presetTinyCruiser: 'Petit cruiser 3.5 pouces',
  presetFreestyle: 'Freestyle 5 pouces',
  presetLongRange: 'Long range 7 pouces',
  presetCinelifter: 'Cinelifter 8 moteurs',
  unitHeader: 'Unités de affichage',
  metricUnit: 'Métrique',
  imperialUnit: 'Impérial',
  setupHeader: 'Motorisation et châssis',
  motorKvLabel: 'Constante KV du moteur (RPM/V)',
  batteryVoltageLabel: 'Tension de la batterie',
  propDiameterLabel: 'Diamètre de hélice',
  propPitchLabel: 'Pas de hélice',
  bladeCountLabel: 'Nombre de pales',
  motorCountLabel: 'Nombre de moteurs',
  droneWeightLabel: 'Poids prêt à voler (RTF)',
  benchDataHeader: 'Point de test constructeur',
  benchThrustLabel: 'Poussée par moteur',
  benchVoltageLabel: 'Tension de test',
  optionalLabel: 'Optionnel',
  twoBlades: '2 pales',
  threeBlades: '3 pales',
  fourBlades: '4 pales',
  twoMotors: '2 moteurs',
  fourMotors: '4 moteurs',
  sixMotors: '6 moteurs',
  eightMotors: '8 moteurs',
  resultsHeader: 'Bilan de poussée et portance',
  estimatedLabel: 'Estimation basée sur la physique.',
  benchBasedLabel: 'Ajusté sur banc de test.',
  loadedRpmLabel: 'Vitesse sous charge',
  pitchSpeedLabel: 'Vitesse théorique d avance',
  thrustPerMotorLabel: 'Poussée par moteur',
  totalThrustLabel: 'Poussée statique totale',
  totalPowerLabel: 'Puissance estimée',
  totalCurrentLabel: 'Courant estimé',
  thrustMarginLabel: 'Marge de portance',
  hoverThrottleLabel: 'Gaz en stationnaire',
  sceneCaption: 'vitesse de hélice sous charge',
  underpoweredStatus: 'Faible marge',
  workableStatus: 'Marge exploitable',
  headroomStatus: 'Excellente réserve',
  underpoweredAdvice: 'La poussée totale reste inférieure au double du poids du drone. Prévoyez une récupération limitée et peu de marge face au vent.',
  workableAdvice: 'Réserve pratique pour un vol normal. Vérifiez la température des moteurs et ESC après un stationnaire prolongé.',
  headroomAdvice: 'Réserve de portance statique généreuse. Améliore la autorité de contrôle mais sollicite davantage les variateurs.',
  sourceNote: 'Un point de test étalonne la poussée. La puissance et le courant restent des estimations.',
  modelSourceNote: 'Aucun point de test. Utilisation du modèle physique théorique.',
  manufacturerNote: 'Utilisez de préférence un point de test mesuré sur le même ensemble moteur et hélice.',
  modelNote: 'La poussée et le courant sont des estimations. Les résultats réels dépendent de la densité de l air et des pertes.',
  safetyNote: 'Ne substituez jamais cet outil à un test réel sur banc d essai. Vérifiez les limites électriques avant le vol.',
  thrustAxisLabel: 'Direction de poussée',
  weightAxisLabel: 'Poids du drone',
  clearBenchData: 'Effacer le point de test',
};

const faq = [
  {
    question: 'Que calcule cet outil de poussée pour moteur et hélice de drone?',
    answer: 'Il estime les RPM sous charge, la vitesse théorique, la poussée statique par moteur et totale, la puissance et le courant selon les KV, la tension et la géométrie.',
  },
  {
    question: 'Comment associer un moteur et une hélice de drone?',
    answer: 'Commencez par suivre les recommandations du fabricant. Comparez ensuite la poussée totale au poids prêt à voler et vérifiez sur banc d essai.',
  },
  {
    question: 'Pourquoi un point de test constructeur est il préférable?',
    answer: 'Il prend en compte la géométrie exacte de hélice et les pertes réelles. Le calculateur adapte cette mesure à la tension choisie.',
  },
  {
    question: 'Comment la taille de hélice influence t elle la poussée?',
    answer: 'La poussée dépend fortement du diamètre et de la vitesse de rotation. Une grande hélice brasse plus d air mais exige plus de couple.',
  },
  {
    question: 'Ce calculateur garantit il la sécurité en vol?',
    answer: 'Non. Il s agit d un outil de conception. Validez le courant et la température sur banc de test avant de voler.',
  },
];

const howTo = [
  {
    name: 'Choisir un profil de vol',
    text: 'Sélectionnez un préréglage pour charger des valeurs de départ adaptées.',
  },
  {
    name: 'Saisir les données du châssis y de hélice',
    text: 'Indiquez le poids et les caractéristiques des moteurs et hélices en unités métriques ou impériales.',
  },
  {
    name: 'Ajouter un point de mesure',
    text: 'Si vous avez des données de banc d essai, saisissez la poussée mesurée et la tension associée.',
  },
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Principes d asociación moteur y hélice pour drone',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le choix du couple moteur hélice est un équilibre entre vitesse de rotation, diamètre, pas, tension et couple disponible. Ce calculateur évalue la portance statique et les besoins électriques.',
  },
  {
    type: 'title',
    text: 'Résultats affichés',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Résultat', 'Signification'],
    rows: [
      ['Vitesse sous charge', 'RPM estimés réduits par le facteur de charge'],
      ['Poussée statique', 'Poussée par moteur et portance globale'],
      ['Marge de portance', 'Poussée totale comparée au poids prêt à voler'],
      ['Puissance et courant', 'Demande électrique estimée sous la tension choisie'],
    ],
  },
  {
    type: 'title',
    text: 'Comment utiliser le calculateur',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Saisir les KV et la tension de batterie.',
      'Choisir le diamètre, le pas, le nombre de pales et de moteurs.',
      'Ajouter éventuellement des données de banc de test.',
      'Vérifier la température et le courant sur banc avant vol.',
    ],
  },
  {
    type: 'title',
    text: 'Importance des mesures réelles',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La poussée dépend de la géométrie de hélice et de la densité de l air. Un point de mesure réel apporte la meilleure calibration.',
  },
  {
    type: 'tip',
    title: 'Plan de test',
    html: 'Effectuez un test sur banc en mesurant le courant à différents niveaux de gaz avant tout vol réel.',
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
