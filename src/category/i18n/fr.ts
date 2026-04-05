import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'drones',
  title: 'Outils et Calculateurs pour Drones et Radioamateurs',
  description: 'Optimisez vos vols et vos communications avec des outils en ligne gratuits. Calculateurs de temps de vol, autonomie de batterie, convertisseurs de coordonnées GPS et longueurs d\'antenne pour la radiofréquence.',
  seo: [
    {
      type: 'title',
      text: 'Ingénierie RF et Vol de Précision : Outils pour Pilotes et Radio-opérateurs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La radioamateur et le vol de drones en 2026 sont des domaines où le savoir-faire rencontre l\'ingénierie des radiofréquences (RF). Dans cette section, nous proposons une suite d\'<strong>outils en ligne gratuits</strong> conçus pour les passionnés de FPV, les pilotes commerciaux d\'UAS (RPAS) et les opérateurs de bandes radio. Comprendre les limites de votre équipement et les lois de propagation des ondes fait la différence entre une mission réussie et une défaillance technique coûteuse.',
    },
    {
      type: 'paragraph',
      html: 'De la planification de l\'autonomie de vol à la construction d\'antennes personnalisées et à la géo-navigation précise, nos utilitaires vous apportent la confiance des données pour propulser vos projets dans les airs ou sur les ondes.',
    },
    {
      type: 'title',
      text: 'Planification de Vol : Temps de Vol et Autonomie de Batterie (mAh / Amps)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Connaître la fenêtre opérationnelle réelle de votre drone est vital pour la sécurité. Notre <strong>calculateur de temps de vol</strong> estime l\'autonomie totale en fonction des milliampères-heures (mAh) de la batterie et de la consommation moyenne des moteurs. Ne laissez pas la télémétrie vous surprendre avec une tension critique loin de votre point de départ.',
    },
    {
      type: 'title',
      text: 'Ingénierie d\'Antenne : Longueur d\'Onde et Fréquence Radio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'efficacité de la transmission dépend de la résonance. Le <strong>calculateur d\'antenne</strong> détermine la longueur physique exacte requise pour les dipôles et les fouets 1/2 et 1/4 d\'onde selon la fréquence de fonctionnement souhaitée (VHF, UHF, bandes ISM). Maximisez la portée et réduisez le TOS (Taux d\'Ondes Stationnaires) de vos systèmes de communication.',
    },
    {
      type: 'title',
      text: 'Navigation de Précision : Convertisseur de Coordonnées GPS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Indispensable pour les missions de recherche, de cartographie ou de radiolocalisation. Le <strong>convertisseur de coordonnées</strong> traduit les formats Décimaux en DMS (Degrés, Minutes, Secondes) de manière bidirectionnelle, offrant une prévisualisation sur carte pour confirmer l\'exactitude de votre point d\'intérêt avant le décollage.',
    },
    {
      type: 'list',
      items: [
        '<strong>Sécurité UAS :</strong> Évitez les atterrissages d\'urgence causés par un épuisement imprévu des cycles de batterie.',
        '<strong>Optimisation RF :</strong> Construisez vos propres antennes haute performance avec des mesures physiques précises basées sur la vitesse de la lumière dans le conducteur.',
        '<strong>Missions Géo-référencées :</strong> Travaillez avec différents standards de cartes et de systèmes de coordonnées internationaux en toute fluidité.',
        '<strong>Confidentialité Aérienne :</strong> Vos plans de vol et coordonnées sont traités localement ; nous ne téléchargeons pas de données sensibles sur des serveurs tiers.',
      ],
    },
    {
      type: 'title',
      text: 'Réglementation Aéronautique et Certification des Opérateurs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Piloter un drone aujourd\'hui nécessite une compréhension de la réglementation. En France, la DGAC (Direction Générale de l\'Aviation Civile) encadre les vols professionnels et de loisir. En Europe, l\'EASA (Agence Européenne de la Sécurité Aérienne) définit les standards de certification. Chaque juridiction a des limites d\'altitude, des zones restreintes (NOTAM), des exigences d\'assurance et des règles d\'enregistrement.',
    },
    {
      type: 'paragraph',
      html: 'Nos outils de planification vous aident à vérifier l\'autonomie, les angles de vue pour la cartographie et les temps de vol. En combinant cela avec les données de zones restreintes (que vous pouvez vérifier sur Géoportail en France), vous pouvez planifier des missions techniquement optimales ET légales. Voler sans respecter la réglementation est coûteux (amendes de plus de 1000 € en Europe), une planification rigoureuse est donc obligatoire.',
    },
    {
      type: 'title',
      text: 'Applications Commerciales : Cartographie Photogrammétrique et Inspection',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les drones ont révolutionné l\'inspection industrielle et la topographie. Un inspecteur de toiture peut utiliser un drone pour identifier des dommages sans risquer sa vie. Un ingénieur agronome utilise des drones pour cartographier le stress hydrique des cultures via des caméras thermiques. Une entreprise de construction utilise la photogrammétrie par drone pour documenter l\'état d\'avancement des travaux en 3D.',
    },
    {
      type: 'paragraph',
      html: 'Chaque application nécessite une autonomie, une charge utile et des plages de fonctionnement différentes. Une mission de photogrammétrie à 100 mètres sur un terrain de 10 hectares peut nécessiter plus de 20 minutes de vol autonome. Nos calculateurs d\'autonomie vous permettent de modéliser : le poids de la charge (caméra, capteur), le nombre de batteries et les cycles de vol par jour. De là, vous calculez le ROI : si vous avez besoin de 5 batteries de 4500 mAh à 50 € chacune, votre investissement initial en batteries est de 250 €. La mission le justifie-t-elle ? Nos outils vous aident à faire ce calcul.',
    },
    {
      type: 'title',
      text: 'Communauté Radioamateur : Bandes HF, VHF, UHF et Satellites',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La radioamateur (HAM radio) est une communauté mondiale de plus de 2 millions d\'opérateurs qui communiquent sans Internet. Ils utilisent des bandes de fréquences attribuées par des organismes internationaux (IARU - International Amateur Radio Union). La VHF (144-146 MHz dans la bande des 2 mètres) est la bande la plus accessible pour débuter, avec des portées typiques de 20 à 100 km selon l\'antenne.',
    },
    {
      type: 'paragraph',
      html: 'Comprendre comment calculer les antennes pour votre bande est essentiel. Un amateur souhaitant opérer sur 2 mètres (144-146 MHz) a besoin d\'une antenne demi-onde d\'environ 1 mètre. Notre générateur calcule cela : il vous suffit de saisir la fréquence, de préciser si vous souhaitez un quart d\'onde, une demi-onde ou une onde complète, et vous obtenez la dimension exacte. Construisez votre antenne, accordez-la et connectez-vous avec le monde en utilisant simplement une radio et une antenne artisanale. C\'est une technologie accessible et résiliente qui survit aux conflits, aux catastrophes et aux pannes de courant.',
    },
    {
      type: 'title',
      text: 'L\'avenir de la mobilité aérienne personnelle en 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En 2026, l\'intégration des drones dans l\'espace aérien partagé est une réalité réglementée. La capacité des amateurs à opérer selon des standards professionnels de maintenance et de planification technique est la clé de la coexistence. Ces outils font partie de l\'engagement envers l\'excellence et la sécurité que chaque pilote et radioamateur doit maintenir.',
    },
  ],
};

