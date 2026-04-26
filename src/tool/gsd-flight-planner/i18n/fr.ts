import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planificateur-vol-gsd';
const title = 'Planificateur de Vol GSD : Calculateur de Distance d\'Échantillonnage au Sol';
const description = 'Calculez la distance d\'échantillonnage au sol (GSD) pour vos missions de photogrammétrie. Supporte DJI, Autel et caméras personnalisées. Planification de vol avec indicateurs de qualité visuelle.';

const faqItems = [
  {
    question: 'Qu\'est-ce que la Distance d\'Échantillonnage au Sol (GSD) ?',
    answer: 'La GSD est la distance au sol représentée par un pixel dans votre image. Une GSD plus faible signifie une résolution et un niveau de détail plus élevés. Par exemple, une GSD de 1 cm/px permet de distinguer des détails de 1 centimètre, ce qui est crucial pour l\'arpentage.',
  },
  {
    question: 'Comment trouver les spécifications de la caméra de mon drone ?',
    answer: 'Consultez le manuel de votre drone pour connaître les dimensions du capteur et la distance focale. Vous pouvez également utiliser nos préréglages pour des modèles populaires comme le DJI Mavic 3E ou l\'Autel EVO II. Pour les caméras personnalisées, mesurez la taille du capteur à partir des spécifications de votre objectif.',
  },
  {
    question: 'De quelle GSD ai-je besoin selon le type de mission ?',
    answer: 'Topographie de haute précision : 1-2 cm/px. Cartographie standard : 2-5 cm/px. Inspection et surveillance : 5-10 cm/px. Relevés visuels : 10+ cm/px. Choisissez en fonction des exigences de précision de votre projet.',
  },
  {
    question: 'Qu\'est-ce que le recouvrement d\'image et pourquoi est-ce important ?',
    answer: 'Le recouvrement est le pourcentage de zone commune entre deux photos consécutives. Un recouvrement élevé (60-80 %) assure une couverture complète et améliore la qualité du modèle 3D. Le recouvrement frontal affecte l\'espacement des photos ; le recouvrement latéral affecte le nombre de lignes de vol.',
  },
  {
    question: 'Comment calculer l\'altitude de vol idéale ?',
    answer: 'Utilisez ce calculateur : GSD souhaitée × distance focale ÷ largeur du capteur = altitude. Le calculateur effectue ce calcul automatiquement et affiche l\'altitude maximale de sécurité pour maintenir votre précision cible et éviter le flou de mouvement.',
  },
];

const howToSteps = [
  {
    name: 'Sélectionner ou configurer la caméra',
    text: 'Choisissez parmi les modèles préconfigurés (DJI Mavic 3E, Autel EVO II, etc.) ou entrez manuellement les dimensions du capteur et la distance focale. Les préréglages chargent tous les paramètres instantanément.',
  },
  {
    name: 'Régler l\'altitude de vol',
    text: 'Utilisez le curseur d\'altitude pour ajuster la hauteur par rapport au sol (AGL). Observez la mise à jour de la GSD en temps réel pour voir comment l\'altitude affecte la résolution.',
  },
  {
    name: 'Définir les besoins en recouvrement',
    text: 'Réglez les pourcentages de recouvrement frontal et latéral. Un recouvrement plus élevé garantit une couverture complète mais augmente le temps de mission et le nombre d\'images.',
  },
  {
    name: 'Réviser les résultats et exporter',
    text: 'Vérifiez la GSD, la zone de couverture et la classification de précision. Gérez un rapport rapide à joindre à votre plan de vol officiel.',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: 'Configuration',
    cameraSelection: 'Sélection Caméra',
    manualMode: 'Mode Manuel',
    sensorConfig: 'Configuration Capteur',
    width: 'Largeur',
    height: 'Hauteur',
    focalLength: 'Distance Focale',
    imageResolution: 'Résolution Image',
    w: 'L',
    h: 'H',
    px: 'px',
    altitudeAgl: 'Altitude (AGL)',
    overlapSettings: 'Configuration Recouvrement',
    forward: 'Frontal',
    lateral: 'Latéral',
    missionArea: 'Zone de Mission',
    totalAreaToSurvey: 'Surface Totale à Relever',
    hectareHint: '1 ha = 10 000 m²',
    inverseCalc: 'Calcul Inverse',
    targetGsd: 'GSD Cible',
    maxAltitude: 'Altitude Max',
    reset: 'Réinitialiser',
    results: 'Résultats',
    gsdResult: 'Distance d\'Échantillonnage au Sol',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Haute Préc.',
    standard: 'Standard',
    inspection: 'Inspection',
    visual: 'Visuel',
    coveragePerImage: 'Couverture par Image',
    area: 'Surface',
    spacing: 'Espacement',
    flightDir: 'Vol →',
    missionMetrics: 'Données de Mission',
    images: 'Images',
    shots: 'photos',
    flightLines: 'Lignes de Vol',
    lines: 'lignes',
    flightTime: 'Temps de Vol',
    min: 'min',
    dataVolume: 'Volume de Données',
    gb: 'Go',
    copyShareLink: 'Copier le Lien',
    downloadReport: 'Télécharger le Rapport',
    copiedToClipboard: 'Copié !',
    metric: 'Métrique',
    imperial: 'Impérial',
    classHighPrecision: 'Topographie de Haute Précision',
    classStandard: 'Cartographie Standard',
    classInspection: 'Inspection et Surveillance',
    classVisual: 'Relevé Visuel',
    ultraHighResAlert: 'Très haute résolution : assurez-vous d\'avoir assez de stockage et de puissance de calcul',
    lowOverlapAlert: 'Recouvrement frontal sous 60 % : peut affecter la qualité du modèle 3D',
    largeDatasetAlert: 'Volume de données très important : envisagez de diviser en plusieurs vols',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'Planificateur de Vol GSD : Le Calculateur de Photogrammétrie Complet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>Distance d\'Échantillonnage au Sol (GSD)</strong> est la donnée la plus importante en photogrammétrie par drone. Une erreur de calcul peut gâcher une journée entière de vol et coûter des milliers d\'euros en perte de productivité. Ce calculateur élimine ce risque.',
    },
    {
      type: 'title',
      text: 'Pourquoi la GSD est cruciale pour les professionnels',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Que vous fassiez de l\'arpentage, de la modélisation 3D ou de la surveillance d\'infrastructure, la GSD détermine le niveau de détail capturé. Une mission à 1 cm/px capte des détails qu\'une mission à 5 cm/px rate. Mais voler trop bas gaspille la batterie et prolonge inutilement le temps de mission.',
    },
    {
      type: 'title',
      text: 'GSD par type de mission',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Topographie de Haute Précision (1-2 cm/px) :</strong> Précision de grade topographique pour parcelles, sites miniers et projets d\'ingénierie.',
        '<strong>Cartographie Standard (2-5 cm/px) :</strong> Orthomosaïques, suivi agricole et cartes d\'usage général.',
        '<strong>Inspection et Surveillance (5-10 cm/px) :</strong> Inspection de bâtiments, contrôle de lignes électriques et détection de changements.',
        '<strong>Relevés Visuels (10+ cm/px) :</strong> Reconnaissance de grandes zones et évaluation visuelle.',
      ],
    },
    {
      type: 'title',
      text: 'La formule GSD',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Altitude × Largeur Capteur) / (Distance Focale × Largeur Image) × 100</code><br/>Ce calculateur gère les maths. Vous vous concentrez sur la mission.',
    },
    {
      type: 'title',
      text: 'Recouvrement : Pourquoi 60-80 % est l\'idéal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un faible recouvrement (20-40 %) économise la batterie mais risque de créer des trous dans la couverture. Un recouvrement élevé (80 %+) garantit une couverture complète mais prolonge la mission. La <strong>plage 60-80 %</strong> est le standard professionnel : elle assure une reconstruction 3D complète sans redondance excessive.',
    },
    {
      type: 'title',
      text: 'Planifiez de meilleures missions avec des données réelles',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Avant chaque vol, utilisez ce calculateur pour déterminer : l\'altitude exacte pour la GSD requise, le nombre de photos nécessaires, le temps total de mission et si le flou de mouvement est un risque. Avec ces données, vous exécuterez des missions précises et éviterez des erreurs coûteuses.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
