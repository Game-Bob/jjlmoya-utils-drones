import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'analyseur-puissance-drone';
const title = 'Analyseur de Puissance de Drone : Calculateur de Rapport Poussée/Poids pour FPV';
const description = 'Calculez le rapport poussée/poids critique pour votre drone FPV. Obtenez des recommandations de profil de vol instantanées, une jauge de puissance visuelle et optimisez pour le cinématique, le freestyle ou la course.';

const faqItems = [
  {
    question: 'Qu\'est-ce que le rapport poussée/poids et pourquoi est-ce important ?',
    answer: 'Le rapport poussée/poids est la poussée totale que votre drone peut produire divisée par son poids total au décollage (AUW). C\'est l\'indicateur le plus important qui détermine comment votre drone se comportera en vol — de lent et stable (cinématographique) à ultra-réactif (course).',
  },
  {
    question: 'Quel est le rapport idéal ("sweet spot") pour le vol freestyle ?',
    answer: 'Pour un vol freestyle fluide, le point idéal se situe entre 4:1 et 6:1. Un rapport de 4:1 offre une excellente agilité avec une bonne stabilité, tandis que 6:1 est extrêmement réactif mais nécessite plus de finesse dans la gestion des gaz dans les espaces restreints.',
  },
  {
    question: 'Puis-je utiliser cela pour des configurations cinématographiques ?',
    answer: 'Oui. Pour des prises de vue cinématographiques fluides et lentes, visez un rapport de 2:1 à 3:1. Cela maintient le drone stable et prévisible. Tout ce qui est inférieur devient difficile à contrôler ; tout ce qui est supérieur sera trop nerveux pour des mouvements lents.',
  },
  {
    question: 'Que se passe-t-il si mon rapport est supérieur à 8:1 ?',
    answer: 'Au-dessus de 8:1, votre drone est effectivement une machine de course — extrêmement réactif et exigeant à piloter. Seuls les pilotes expérimentés devraient tenter ces configurations. Idéal pour les portes de course et la vitesse, mais dangereux en intérieur.',
  },
  {
    question: 'Dois-je inclure le poids de la batterie dans l\'AUW ?',
    answer: 'Oui. L\'AUW (All-Up Weight) est le poids total de votre drone avec tous les composants installés : châssis, moteurs, ESC, contrôleur de vol, caméra, batterie, hélices — tout. Utilisez les boutons de préréglage de batterie pour un ajout de poids instantané.',
  },
];

const howToSteps = [
  {
    name: 'Sélectionner la configuration moteur',
    text: 'Choisissez si votre montage est une configuration à 4 (Quad), 6 (Hexa) ou 8 (Octo) moteurs. Ce multiplicateur est crucial pour la poussée totale.',
  },
  {
    name: 'Saisir la poussée moteur',
    text: 'Entrez la poussée maximale que chaque moteur peut produire (en grammes). Vous pouvez trouver cela dans les spécifications du moteur ou utiliser les préréglages rapides.',
  },
  {
    name: 'Définir le poids total',
    text: 'Saisissez le poids total au décollage (AUW) de votre drone — châssis, moteurs, batterie, caméra, tout. Utilisez les préréglages de batterie pour un ajustement instantané.',
  },
  {
    name: 'Lire vos résultats',
    text: 'Le calculateur affiche instantanément votre rapport poussée/poids, l\'adéquation du profil de vol (Ciné, Freestyle, Course) et une recommandation personnalisée pour votre montage.',
  },
];

const schemas: DronePowerAnalyzerLocaleContent['schemas'] = [
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

export const content: DronePowerAnalyzerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    motorConfiguration: 'Configuration Moteur',
    motorCount: 'Nombre de Moteurs',
    thrustPerMotor: 'Poussée par Moteur (max)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Préréglages Moteurs Rapides',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Configuration du Poids',
    auwLabel: 'Poids Total au Décollage (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Passer en lbs',
    switchToGrams: 'Passer en g',
    batteryPresets: 'Ajouter le Poids de la Batterie',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Poussée Totale',
    twRatio: 'Rapport Poussée/Poids',
    powerMeter: 'Jauge de Puissance',
    flightProfiles: 'Évaluation du Profil de Vol',
    cinematicLabel: 'Cinématique',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Course',
    proRacingLabel: 'Course Pro',
    suitable: 'Adapté',
    notSuitable: 'Non Adapté',
    recommendationLabel: 'Recommandation de Style de Vol',
    recommendation_low: 'Avec un rapport inférieur à 2:1, votre drone aura des problèmes de stabilité. Envisagez de réduire le poids ou d\'améliorer les moteurs pour de meilleures performances.',
    recommendation_cinematic: 'Avec un rapport de {ratio}:1, c\'est idéal pour la cinématographie lourde avec des mouvements fluides et contrôlés. Parfait pour un travail de caméra lent et délibéré.',
    recommendation_freestyle: 'Avec un rapport de {ratio}:1, c\'est le point idéal pour le vol freestyle. Excellente agilité tout en maintenant la stabilité pour les figures.',
    recommendation_racing: 'Avec un rapport de {ratio}:1, nous sommes dans le domaine du freestyle de performance. La gestion des gaz est critique dans les espaces restreints et les manœuvres à haute vitesse.',
    recommendation_extreme: 'Avec un rapport de {ratio}:1, c\'est une machine de course. Extrêmement réactif — uniquement pour les pilotes expérimentés dans des zones ouvertes.',
    compareMode: 'Comparer les Montages',
    scenario1: 'Montage A',
    scenario2: 'Montage B',
    addComparison: 'Ajouter une Comparaison',
    tooltipTWRatio: 'Le rapport poussée/poids est la poussée totale divisée par le poids du drone. Un rapport plus élevé signifie une accélération plus rapide et un contrôle plus réactif.',
    tooltipFreestyle: 'Le "point idéal" pour le vol freestyle est un rapport de 4:1 à 6:1, offrant le meilleur équilibre entre agilité et contrôle.',
    badge_unstable: 'Instable',
    badge_cinematic: 'Cinématique',
    badge_sweetSpot: 'Point Idéal',
    badge_racing: 'Course',
    badge_extreme: 'Extrême',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'Comprendre le Rapport Poussée/Poids pour les Drones FPV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>rapport poussée/poids</strong> est peut-être l\'indicateur le plus critique dans la construction de drones FPV. Pourtant, de nombreux pilotes le négligent, ce qui conduit à des montages qui ne se comportent pas comme prévu. Ce calculateur démystifie le calcul et vous montre exactement comment votre drone se sentira en vol.',
    },
    {
      type: 'title',
      text: 'Pourquoi le rapport poussée/poids est important',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le rapport de votre drone détermine trois choses fondamentales : la <strong>stabilité</strong>, la <strong>réactivité</strong> et la <strong>vitesse</strong>. Un rapport de 2:1 semble lent et stable. Un rapport de 6:1 semble nerveux et agile. Un rapport de 10:1 est une machine de course. Comprendre où se situe votre montage sur ce spectre vous aide à choisir le bon style de vol et à fixer des attentes réalistes.',
    },
    {
      type: 'title',
      text: 'Explication des profils de vol',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cinématique (2:1 – 4:1)</strong> : Lourd, stable, lent. Idéal pour des mouvements de caméra fluides et des configurations transportant une charge utile.',
        '<strong>Freestyle (3,5:1 – 6,5:1)</strong> : Le point d\'équilibre idéal. Suffisamment réactif pour les figures, suffisamment stable pour le contrôle.',
        '<strong>Course (5:1 – 8:1)</strong> : Rapide et agile. Conçu pour les portes de vitesse et les manœuvres agressives.',
        '<strong>Course Pro (7:1+)</strong> : Performances extrêmes. Uniquement pour les pilotes experts dans des zones ouvertes.',
      ],
    },
    {
      type: 'title',
      text: 'Comment calculer le rapport poussée/poids',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La formule est simple : <strong>rapport = (Poussée par Moteur × Nombre de Moteurs) / Poids Total au Décollage</strong>. Par exemple, un Quad avec des moteurs de 600g (2 400g de poussée totale) pesant 800g produit un rapport de 3:1. C\'est le territoire du freestyle.',
    },
    {
      type: 'title',
      text: 'Choisir le bon rapport pour votre montage',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Posez-vous la question : <em>Que vais-je piloter ?</em> Des prises de vue cinématographiques lentes ? Des figures freestyle agressives ? Des courses à haute vitesse ? Votre réponse détermine votre rapport idéal. La plupart des pilotes FPV finissent entre 4:1 et 6:1 car cela offre le meilleur compromis entre contrôle et sensations.',
    },
    {
      type: 'paragraph',
      html: 'Rappelez-vous : un rapport plus élevé ne signifie pas "meilleur". Cela signifie "plus réactif". Sur un quad de course, c\'est essentiel. Sur un montage cinématographique, c\'est un inconvénient. Choisissez délibérément.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
