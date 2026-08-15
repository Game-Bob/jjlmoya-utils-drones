import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculateur-taux-c-batterie-lipo-drone';
const title = 'Calculateur de Taux C de Batterie LiPo et Décharge Continue pour Drone';
const description = 'Calculez le courant de décharge continu réel, le taux C réaliste, la chute de tension et la sécurité de vol des batteries LiPo de drone selon la résistance interne et la consommation des moteurs.';

const ui = {
  title: 'Calculateur de Taux C de Batterie LiPo pour Drone',
  subtitle: 'Analysez la décharge continue réelle, les besoins en pointe et la chute de tension pour quadricoptères',
  lipoSpecsHeader: 'Spécifications de la batterie',
  capacityLabel: 'Capacité (mAh)',
  claimedCRatingLabel: 'Taux C annoncé',
  cellCountLabel: 'Nombre de cellules (Série)',
  chemistryLabel: 'Chimie de la batterie',
  internalResistanceLabel: 'Résistance interne par cellule (mΩ)',
  quadSpecsHeader: 'Consommation du drone',
  motorCountLabel: 'Nombre de moteurs',
  peakMotorCurrentLabel: 'Courant de pointe par moteur (Ampères)',
  auxCurrentLabel: 'Consommation auxiliaire (VTX FC Caméra) (Ampères)',
  presetSelectLabel: 'Préréglages rapides',
  customPreset: 'Personnalisé',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5 Pouces Freestyle',
  cinewhoopPreset: '4S 3 Pouces CineWhoop',
  longRange7Preset: '6S 7 Pouces Long Range',
  racing5Preset: '6S 5 Pouces Course',
  resultsHeader: 'Analyse de performance et puissance',
  claimedMaxCurrentLabel: 'Courant maximal annoncé',
  realisticCRatingLabel: 'Taux C continu réaliste',
  realisticMaxCurrentLabel: 'Courant continu réaliste',
  totalPeakDrawLabel: 'Consommation de pointe totale',
  voltageSagLabel: 'Chute de tension estimée',
  sagNominalVoltageLabel: 'Tension nominale sous charge',
  flightTimeFullThrottleLabel: 'Autonomie à plein gaz',
  flightTimeHoverLabel: 'Autonomie estimée en stationnaire',
  safetyStatusLabel: 'Diagnostic de sécurité',
  statusOptimalTitle: 'Batterie sûre et optimale',
  statusOptimalDesc: 'La batterie fournit facilement le courant de pointe sans surchauffe ni chute de tension excessive. Longue durée de vie des cellules garantie.',
  statusWarningTitle: 'Stress thermique et de tension modéré',
  statusWarningDesc: 'La consommation de pointe est proche de la limite réelle de la batterie. Attendez-vous à une légère chute de tension lors des accélérations fortes.',
  statusDangerTitle: 'Risque élevé de surintensité et chute de tension',
  statusDangerDesc: 'La consommation dépasse la capacité réelle de la batterie. Risque élevé de surchauffe, chute de tension sévère et dégradation prématurée.',
  lipoVisualizerTitle: "Visualiseur d'état LiPo en temps réel",
  cellVoltageLabel: 'Tension par cellule',
  batteryHealthLabel: 'Stress de la batterie',
  burstRatingRequiredLabel: 'Taux C de pointe requis',
  currentRatioLabel: 'Ratio de charge de puissance',
};

const faqItems = [
  {
    question: "Qu'est-ce que le taux C d'une batterie LiPo de drone?",
    answer: 'Le taux C représente la vitesse maximale de décharge continue par rapport à la capacité de la batterie. Par exemple, une batterie de 1500 mAh avec un taux de 100C peut théoriquement fournir 150 Ampères.',
  },
  {
    question: 'Pourquoi le taux C annoncé est-il souvent supérieur à la réalité?',
    answer: 'Les fabricants affichent souvent des taux de pointe marketing. La décharge continue réelle dépend directement de la résistance interne de chaque cellule.',
  },
  {
    question: 'Comment la résistance interne affecte-t-elle la tension et la chaleur?',
    answer: "Une résistance interne élevée agit comme une résistance indésirable. Lors d'une forte demande de courant, elle provoque une chute de tension et dissipe une chaleur excessive.",
  },
  {
    question: 'Comment éviter la chute de tension en vol freestyle?',
    answer: "Utilisez des cellules à faible résistance interne, prévoyez une marge de sécurité d'au moins 15 pour cent au-dessus de la consommation de pointe et ne volez pas en dessous de 3,5V par cellule au repos.",
  },
];

const howToSteps = [
  {
    name: 'Sélectionner un préréglage ou saisir les données',
    text: 'Entrez la capacité en mAh, le taux C annoncé, le nombre de cellules en série et la résistance interne moyenne par cellule.',
  },
  {
    name: 'Configurer la consommation des moteurs',
    text: 'Indiquez le nombre de moteurs, le courant de pointe par moteur à plein gaz et la consommation auxiliaire.',
  },
  {
    name: 'Consulter le diagnostic de sécurité',
    text: 'Comparez le courant continu réaliste avec la consommation de pointe du drone pour garantir un vol stable.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Comprendre le taux C des batteries LiPo et la puissance réelle',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Choisir la bonne batterie LiPo pour un drone FPV nécessite de mettre en relation la capacité, le taux C et la consommation des moteurs. Bien que les fabricants annoncent souvent des taux de 100C ou plus, la capacité réelle de décharge continue est limitée par la résistance interne des cellules et la dissipation thermique. Ce calculateur évalue l'ampérage continu réaliste avec une marge de sécurité réelle.",
  },
  {
    type: 'title',
    text: 'Tableau comparatif des chimies de batteries RC',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Chimie', 'Tension nominale', 'Tension max', 'Densité énergétique', 'Décharge de pointe', 'Usage recommandé'],
    rows: [
      ['LiPo (Standard)', '3.7V', '4.20V', 'Élevée', '100C - 150C', 'Drones FPV Course et Freestyle 5"'],
      ['LiHV (Haute Tension)', '3.8V', '4.35V', 'Très élevée', '80C - 120C', 'TinyWhoops et Micro Quads'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Maximale', '15C - 35C', 'Drones Longue Distance 7"'],
      ['LiFePO4', '3.3V', '3.65V', 'Modérée', '30C - 50C', 'Stations de charge sur le terrain'],
    ],
  },
  {
    type: 'title',
    text: 'Impact de la chute de tension et de la résistance interne',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "La chute de tension (voltage sag) est la baisse soudaine de tension subie lors des accélérations. Lorsqu'un courant traverse la résistance interne, une partie de l'énergie est convertie en chaleur au lieu de fournir de la poussée. Une batterie vieillissante entraînera des avertissements prématurés de basse tension sur l'OSD FPV.",
  },
  {
    type: 'list',
    items: [
      'Faible résistance interne (1-4 mΩ par cellule): Excellente reprise, chute minimale et température basse.',
      'Résistance interne modérée (5-10 mΩ par cellule): Performance standard pour le freestyle avec légère chute de tension.',
      'Résistance interne élevée (>12 mΩ par cellule): Perte de puissance nette, chute sévère et échauffement rapide.',
    ],
  },
  {
    type: 'title',
    text: 'Optimisation de batterie pour Freestyle Course et Longue Distance',
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Chaque style de vol exige des profils d'énergie différents. Les drones de 5 pouces en freestyle génèrent des pics de courant dépassant 120 Ampères, tandis que les drones de 7 pouces privilégiant l'autonomie recherchent une efficacité constante. Un ajustement précis prévient les coupures en vol.",
  },
  {
    type: 'tip',
    title: "Conseil d'entretien LiPo",
    html: 'Stockez toujours vos batteries LiPo entre 3,80V et 3,85V par cellule lorsque vous ne les utilisez pas. Laisser des batteries entièrement chargées plus de 48 heures augmente la résistance interne de façon permanente.',
  },
];

const schemas: DroneBatteryCRatingCalculatorLocaleContent['schemas'] = [
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

export const content: DroneBatteryCRatingCalculatorLocaleContent = {
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
