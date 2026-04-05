import type { DroneFlightTimeLocaleContent } from '../index';

const slug = 'calculateur-temps-vol-drone';
const title = 'Calculateur de Temps de Vol Drone | Estimation Autonomie LiPo/Li-Ion';
const description = 'Calculez combien de temps votre drone peut voler en fonction de la capacité mAh et de la consommation. Optimisez vos batteries LiPo pour des vols sûrs.';

export const content: DroneFlightTimeLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Foire Aux Questions',
  bibliographyTitle: 'Références Bibliographiques',
  ui: {
    faqTitle: 'Foire Aux Questions',
    bibliographyTitle: 'Références Bibliographiques',
    batterySpecs: 'Spécifications de la Batterie',
    capacity: 'Capacité',
    voltage: 'Tension (Cellules S)',
    safetyMargin: 'Marge de Sécurité',
    landingHint: 'Atterrir à 3,5V - 3,7V par cellule.',
    consumptionDynamics: 'Dynamique de Consommation',
    averageConsumption: 'Consommation Moyenne',
    powerWatts: 'Puissance (Watts)',
    efficiencyHint: 'En changeant les Ampères, les Watts sont recalculés selon la tension S.',
    estimatedEfficiency: 'Efficacité Estimée',
    typicalEfficiencyHint: 'Typique : 4-6 (Racing), 8-12 (Cinématique/Longue Portée).',
    safeFlight: 'Vol Sécurisé',
    totalEnergy: 'Énergie Totale',
    theoreticalTime: 'Temps Théorique (0%)',
    co2Footprint: 'Empreinte CO2',
    autonomyChart: 'Graphique d\'Autonomie',
    chartSubtitle: 'Ampères (A) vs Temps (min)',
    chartLabel: 'Minutes',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculateur de Temps de Vol pour Drones : Guide Complet de l\'Autonomie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'autonomie est probablement le facteur le plus critique dans la conception et l\'utilisation de tout aéronef sans pilote. Que vous soyez un pilote de drone FPV de course, un professionnel de la photographie aérienne ou un passionné de vols longue distance, savoir avec précision combien de temps votre équipement peut rester en l\'air est vital pour la sécurité et le succès de la mission. Notre <strong>calculateur de temps de vol</strong> utilise les variables fondamentales de capacité de batterie et de consommation de courant pour vous offrir une estimation réaliste et sûre.',
    },
    {
      type: 'title',
      text: 'Capacité de la Batterie : Les mAh Expliqués',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La capacité d\'une batterie est généralement mesurée en milliampères-heures (mAh). Ce chiffre nous indique quelle charge électrique la batterie est capable de stocker. Par exemple, une batterie de 1500 mAh peut théoriquement fournir 1500 milliampères pendant une heure complète. Dans le monde des drones, où les consommations sont extrêmement élevées, nous parlons souvent en Ampères (A). 1000 mAh équivalent exactement à 1 Ah (Ampère-heure).',
    },
    {
      type: 'paragraph',
      html: 'Cependant, la capacité brute n\'est pas le seul facteur. La tension (déterminée par le nombre de cellules ou \'S\') influence directement la puissance totale (Watts), mais pour le calcul du temps basé sur la consommation des moteurs, le rapport Ah/Ampères est la mesure la plus directe utilisée par les ingénieurs de vol.',
    },
    {
      type: 'title',
      text: 'La Consommation de Courant : Ampérage en Vol',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La consommation des moteurs est la variable qui fluctue le plus pendant un vol. Maintenir un drone en vol stationnaire (hover) n\'est pas la même chose que réaliser des manœuvres acrobatiques agressives. Chaque ensemble moteur et hélice a une courbe d\'efficacité. Lorsque vous accélérez au maximum, l\'ampérage monte en flèche, réduisant drastiquement la durée de vie de la batterie.',
    },
    {
      type: 'list',
      items: [
        'Vol Stationnaire : La consommation est minimale et constante, idéale pour la photographie.',
        'Vol de Croisière : La consommation augmente légèrement en raison de la traînée aérodynamique.',
        'Vol Agressif/FPV : Les pics de courant peuvent tripler la consommation moyenne en quelques secondes.',
        'Poids du Drone : Chaque gramme supplémentaire nécessite plus de tours moteur pour générer de la poussée, augmentant l\'ampérage.',
      ],
    },
    {
      type: 'title',
      text: 'Règle de Sécurité des 80% : Protéger la Chimie LiPo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Décharger une batterie LiPo (Lithium Polymère) jusqu\'à 0% de sa capacité est le moyen le plus rapide de la détruire et, pire encore, de provoquer un accident. Chimiquement, les cellules subissent des dommages irréversibles si leur tension descend en dessous d\'un seuil critique (généralement 3,0V - 3,2V par cellule).',
    },
    {
      type: 'paragraph',
      html: 'C\'est pourquoi nous appliquons toujours une <strong>règle de marge de sécurité</strong>. Notre calculateur permet d\'ajuster cette valeur, mais il est recommandé d\'atterrir lorsqu\'il reste encore 20% de charge. Cela prolonge non seulement la durée de vie de vos batteries coûteuses de plusieurs centaines de cycles, mais vous garantit également une réserve de puissance vitale en cas de rafales de vent inattendues ou si vous devez avorter l\'atterrissage et réessayer.',
    },
    {
      type: 'tip',
      html: 'Les batteries de drones sont très sensibles au froid. En hiver, la résistance interne de la LiPo augmente, ce qui provoque une chute de tension plus rapide. Préchauffez toujours vos batteries avant de décoller si la température ambiante est inférieure à 15 degrés.',
    },
    {
      type: 'title',
      text: 'Formule Mathématique du Vol',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bien que notre outil fasse le travail difficile pour vous, il est intéressant de connaître la logique derrière le calcul. La formule de base est :',
    },
    {
      type: 'paragraph',
      html: '<strong>Temps (min) = ((Capacité mAh / 1000) * Facteur de Sécurité) / Consommation Ampères * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Par exemple, si vous avez une batterie de 2200 mAh, que vous voulez atterrir à 20% (sécurité 0,8) et que votre drone consomme une moyenne de 15 Ampères, le calcul serait : (2,2 * 0,8) / 15 * 60 = 7,04 minutes de vol sûr.',
    },
    {
      type: 'title',
      text: 'Optimisation du Poids et Efficacité',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il existe un point de rendement décroissant lors de l\'ajout de batteries plus grandes. Doubler la capacité de la batterie ne double pas le temps de vol, car la batterie elle-même ajoute du poids. Ce poids supplémentaire nécessite que les moteurs tournent plus vite et consomment donc plus de courant. À un certain point, le poids additionnel consomme plus d\'énergie qu\'il n\'en apporte, réduisant l\'efficacité globale du système.',
    },
    {
      type: 'paragraph',
      html: 'Les pilotes expérimentés recherchent l\'équilibre parfait entre le <em>Disc Loading</em> (charge du disque des hélices) et la capacité de la batterie pour maximiser ce que nous appelons le "temps de mission utile".',
    },
    {
      type: 'title',
      text: 'Différences entre les Types de Drones',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Micro Drones (Whoops) :</strong> Consomment à peine 2-5 Ampères, mais leurs batteries sont de 300-500 mAh. Le temps est souvent court (3-4 min) en raison de la faible inertie et de la rotation élevée.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drones de Course 5" :</strong> Consommations brutales en course (jusqu\'à 120A en pointe), ce qui épuise une batterie de 1300 mAh en à peine 2 minutes d\'adrénaline pure.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drones Long Range :</strong> Optimisés pour le GPS et le vol efficace. Ils utilisent des cellules Lithium-Ion (Li-Ion) qui ont une densité énergétique plus élevée que les LiPo, permettant des vols de 30 à 60 minutes avec des ampérages très contenus.',
    },
    {
      type: 'tip',
      html: 'Passer à des hélices avec un pas (pitch) plus court peut augmenter votre temps de vol au détriment de la vitesse de pointe et de la réactivité. C\'est le réglage le plus économique et efficace pour gagner 10-15% d\'autonomie.',
    },
    {
      type: 'title',
      text: 'Entretien et Stockage',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour que les calculs de cet outil soient précis, vos batteries doivent être en bon état. Une batterie avec une résistance interne élevée chauffera excessivement et "mentira" sur sa capacité réelle. Stockez toujours vos batteries à la tension de stockage (3,8V-3,85V par cellule) si vous ne comptez pas voler pendant plus de 48 heures.',
    },
    {
      type: 'paragraph',
      html: 'En conclusion, la gestion de l\'énergie est l\'art d\'équilibrer la physique, la chimie et les mathématiques. Utilisez notre calculateur régulièrement pour planifier vos sessions de vol et n\'oubliez jamais qu\'en l\'air, le temps est la ressource la plus précieuse. Bons vols et atterrissages en toute sécurité !',
    },
  ],
  faq: [
    {
      question: 'Pourquoi le temps réel est-il inférieur au temps calculé ?',
      answer: 'Le calculateur estime une consommation constante. Les manœuvres brusques, le vent de face et l\'usure de la batterie peuvent réduire le temps réel jusqu\'à 30%.',
    },
    {
      question: 'À quelle tension dois-je faire atterrir mon drone ?',
      answer: 'L\'idéal est d\'atterrir lorsque la tension descend à 3,5V - 3,6V par cellule (au repos). Cela équivaut environ aux 20% de capacité restante recommandés.',
    },
    {
      question: 'Les batteries LiPo ou Li-Ion sont-elles meilleures pour les drones ?',
      answer: 'Les LiPo offrent beaucoup de puissance instantanée (idéal pour la course et les acrobaties). Les Li-Ion ont plus d\'endurance mais moins de puissance (idéal pour les vols longs et tranquilles).',
    },
    {
      question: 'Comment le nombre de cellules (S) affecte-t-il le temps de vol ?',
      answer: 'Plus de cellules augmentent la tension et la puissance, mais aussi le poids. Si les moteurs sont optimisés pour cette tension, ils peuvent être plus efficaces, mais cela ne garantit pas plus de temps en soi.',
    },
  ],
  bibliography: [
    { name: 'EASA - Réglementation des Drones', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot Wiki', url: 'https://ardupilot.org/copter/' },
    { name: 'Battery University', url: 'https://batteryuniversity.com/' },
  ],
  howTo: [
    {
      name: 'Identifiez la capacité',
      text: 'Regardez l\'étiquette de votre batterie et cherchez la valeur en mAh (ex. 1500, 2200, 4500).',
    },
    {
      name: 'Estimez la consommation',
      text: 'Entrez l\'ampérage moyen consommé par votre drone. Vous pouvez le voir dans la télémétrie OSD après un vol d\'essai.',
    },
    {
      name: 'Ajustez la marge',
      text: 'Nous recommandons de laisser 20% (régler à 80%) pour protéger la batterie et avoir une marge d\'atterrissage.',
    },
    {
      name: 'Obtenez le résultat',
      text: 'Visualisez le temps exact en minutes et secondes pendant lequel vous pouvez rester en l\'air en toute sécurité.',
    },
  ],
  schemas: [],
};
