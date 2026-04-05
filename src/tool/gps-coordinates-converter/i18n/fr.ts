import type { GpsCoordinatesConverterLocaleContent } from '../index';

const slug = 'conversisseur-coordonnees-gps';
const title = 'Convertisseur de Coordonnées GPS | Décimal vers DMS en Ligne Gratuit';
const description = 'Convertissez instantanément vos coordonnées GPS du format décimal vers le format Degrés, Minutes et Secondes (DMS). Outil visuel avec carte pour drones, navigation et géolocalisation.';

export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    faqTitle: 'Foire Aux Questions',
    bibliographyTitle: 'Références Bibliographiques',
    decimalDD: 'Décimal (DD)',
    degreesGMS: 'Degrés (DMS)',
    useLocation: 'Utiliser ma position',
    lat: 'Latitude',
    lng: 'Longitude',
    latGMS: 'Latitude (DMS)',
    lngGMS: 'Longitude (DMS)',
    gmsTraditional: 'DMS Traditionnel',
    nauticalDM: 'Degrés & Min. Déc. (Nautique)',
    googleMapsFormat: 'Format Google Maps',
    copy: 'Copier',
    copied: 'Copié !',
    recentHistory: 'Historique Récent',
    clear: 'Effacer',
    noHistory: 'Aucune conversion récente.',
    load: 'Charger',
    delete: 'Supprimer',
  },
  seo: [
    {
      type: 'title',
      text: 'Convertisseur de Coordonnées GPS : Du Décimal vers Degrés, Minutes et Secondes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La géolocalisation est la pierre angulaire de la navigation moderne. Du vol de drone FPV à la navigation professionnelle, la capacité d\'interpréter et de convertir des coordonnées entre différents formats est une compétence essentielle. Notre <strong>calculateur de coordonnées GPS</strong> est conçu pour simplifier ce processus, permettant une transition fluide entre les Degrés Décimaux (DD), le format standard de Google Maps, et les Degrés, Minutes et Secondes (DMS), le langage universel de la cartographie classique.',
    },
    {
      type: 'title',
      text: 'Comprendre les Formats de Coordonnées',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bien que la position sur la surface terrestre soit unique, il existe plusieurs façons de l\'exprimer mathématiquement. Chaque secteur a adopté un standard basé sur ses outils et des besoins historiques. Les deux systèmes principaux que nous traitons dans cet outil sont les piliers de la géolocalisation actuelle.',
    },
    {
      type: 'paragraph',
      html: '<strong>1. Degrés Décimaux (DD) :</strong> C\'est le format le plus utilisé dans les environnements numériques, l\'informatique et les API Web. Il représente la latitude et la longitude sous forme de nombres réels. Par exemple, le centre de Paris se situe près de 48.8566° N. La simplicité de ce format le rend idéal pour les calculs mathématiques directs dans le GPS du drone et les logiciels de télémétrie.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Degrés, Minutes et Secondes (DMS) :</strong> C\'est le format traditionnel hérité de l\'astronomie et de la navigation ancienne. Il divise chaque degré en 60 minutes et chaque minute en 60 secondes. C\'est le standard utilisé sur les cartes nautiques physiques et dans de nombreux équipements d\'aviation civile. Voir une coordonnée telle que 48° 51\' 24" N apporte une sensation d\'échelle et de précision historique que les décimales omettent parfois.',
    },
    {
      type: 'title',
      text: 'L\'Importance de la Conversion dans le Secteur des Drones',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour un pilote de drone, la précision n\'est pas négociable. De nombreux plans de mission sont conçus dans Google Earth ou Google Maps avec des décimales, mais lors du transfert de ces points vers une station de contrôle au sol (GCS) ancienne ou lors du réglage manuel d\'un "Home Point" sur certains émetteurs radio, le format DMS peut être requis.',
    },
    {
      type: 'list',
      items: [
        'Planification de Mission : Croisement des données des applications de vol mobiles avec les cartes topographiques officielles.',
        'Recherche et Sauvetage : Communication de la position d\'une cible aux équipes de secours utilisant la radiofréquence et les coordonnées DMS.',
        'Photogrammétrie : Vérification des métadonnées EXIF des images capturées par le capteur du drone.',
        'Navigation FPV Longue Portée : Configuration d\'antennes directionnelles basées sur les coordonnées exactes de points géographiques clés.',
      ],
    },
    {
      type: 'title',
      text: 'Comment Réaliser la Conversion Manuellement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bien que notre outil automatise le calcul pour vous, comprendre les mathématiques sous-jacentes est fondamental pour tout navigateur. Le processus est basé sur le système sexagésimal (base 60).',
    },
    {
      type: 'paragraph',
      html: 'Pour convertir du <strong>Décimal vers le DMS</strong>, nous prenons la partie entière comme les degrés. La partie décimale restante est multipliée par 60 pour obtenir les minutes. De ce résultat, la partie décimale restante est à nouveau multipliée par 60 pour obtenir les secondes finales. C\'est un processus en cascade qui garantit qu\'aucune fraction de précision n\'est perdue en chemin.',
    },
    {
      type: 'paragraph',
      html: 'Inversement, du <strong>DMS vers le Décimal</strong>, nous divisons les secondes par 3600 et les minutes par 60, en ajoutant les deux résultats aux degrés entiers. Il est vital de se rappeler que les latitudes S (Sud) et les longitudes W (Ouest) sont représentées par un signe négatif dans le système décimal pour maintenir la cohérence dans l\'axe des coordonnées cartésiennes.',
    },
    {
      type: 'title',
      text: 'Précision Décimale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cinq décimales dans une coordonnée DD offrent une précision d\'environ 1,1 mètre à l\'équateur. Six décimales font descendre cette précision à environ 11 centimètres. Pour la plupart des usages de drones commerciaux, 6 décimales sont la référence absolue.',
    },
    {
      type: 'title',
      text: 'Latitude et Longitude : les Axes de la Terre',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La <strong>Latitude</strong> mesure la distance au nord ou au sud de l\'équateur. Ses valeurs oscillent entre 0° à l\'équateur et 90° aux pôles. C\'est l\'axe "Y" de notre carte globale. Confondre une latitude N avec une S vous transporterait instantanément dans l\'hémisphère opposé, une erreur critique que notre outil aide à éviter grâce à la validation visuelle sur la carte.',
    },
    {
      type: 'paragraph',
      html: 'La <strong>Longitude</strong> mesure la distance à l\'est ou à l\'ouest du méridien de Greenwich. Ses valeurs vont de 0° à 180°. C\'est l\'axe "X". La combinaison des deux points crée une grille unique qui permet d\'identifier n\'importe quel objet, d\'un centimètre carré de forêt au sommet de l\'Everest, avec une exactitude totale.',
    },
    {
      type: 'title',
      text: 'Le Format Nautique : Degrés et Minutes Décimales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il existe un format hybride très populaire dans la communauté marine et nautique : les Degrés et Minutes Décimales (DM). Dans ce système, on conserve les degrés entiers mais le reste est exprimé en minutes avec décimales, en omettant les secondes. Exemple : 48° 51.365\' N.',
    },
    {
      type: 'paragraph',
      html: 'Notre calculateur propose également ce résultat, car de nombreux récepteurs GPS nautiques anciens et modernes (comme les Garmin portables utilisés pour la randonnée) sont configurés par défaut avec cette nomenclature. Avoir cette conversion à portée de main évite des confusions dangereuses lors de la navigation en temps réel.',
    },
    {
      type: 'title',
      text: 'Datum et Ellipsoïdes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Presque tous les GPS modernes utilisent la norme WGS84. Notre outil assume ce datum par défaut. Si vous utilisez des plans topographiques très anciens (antérieurs à 1980), vous pourriez trouver de légers écarts de quelques mètres en raison de la façon dont la courbure terrestre était modélisée à l\'époque.',
    },
    {
      type: 'title',
      text: 'Utilisation de l\'Historique et Confidentialité',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nous comprenons qu\'un pilote travaille souvent avec plusieurs points d\'intérêt (POI) au cours d\'une même session. C\'est pourquoi nous avons mis en œuvre un système d\'historique local. Vos 5 dernières conversions sont enregistrées dans la mémoire de votre navigateur (localStorage), vous permettant d\'alterner entre les points de décollage et d\'atterrissage sans avoir à ressaisir les données.',
    },
    {
      type: 'paragraph',
      html: 'Ce processus se déroule entièrement sur votre appareil. Aucune coordonnée n\'est envoyée à des serveurs externes, garantissant une <strong>confidentialité totale</strong> pour vos lieux de vol. Ceci est particulièrement pertinent pour les professionnels travaillant dans des zones restreintes ou sensibles.',
    },
    {
      type: 'title',
      text: 'Conseils pour une Géolocalisation Réussie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vérification visuelle :</strong> Utilisez toujours la mini-carte intégrée pour confirmer que le repère tombe là où vous l\'attendez. Une erreur courante consiste à inverser Latitude et Longitude, ce qui place généralement le point au milieu de l\'océan ou sur un autre continent.',
    },
    {
      type: 'paragraph',
      html: '<strong>Attention aux signes :</strong> Si vous utilisez les DD, rappelez-vous que l\'ouest (W) est négatif. À Montréal (-73.56), oublier le signe moins vous placerait en Asie centrale au lieu du Canada.',
    },
    {
      type: 'paragraph',
      html: 'En résumé, maîtriser les coordonnées, c\'est maîtriser son environnement. Que vous configuriez le Failsafe de votre drone ou traciez une route de navigation maritime, notre outil est là pour s\'assurer que chaque degré, minute et seconde compte. Explorez le monde avec la précision que vos missions méritent !',
    },
  ],
  faq: [
    {
      question: 'Quelle est la différence entre DD et DMS ?',
      answer: 'DD (Degrés Décimaux) utilise un seul nombre avec des décimales (ex : 48.85). DMS (Degrés, Minutes, Secondes) divise le degré en fractions sexagésimales (ex : 48° 51\' 0").',
    },
    {
      question: 'Pourquoi utilise-t-on des coordonnées négatives ?',
      answer: 'Dans le système décimal (DD), les latitudes au sud de l\'équateur et les longitudes à l\'ouest de Greenwich sont indiquées par un signe négatif pour faciliter le calcul mathématique.',
    },
    {
      question: 'Quelle précision est perdue lors de la conversion ?',
      answer: 'Notre outil utilise une précision de double virgule flottante. Avec 6 décimales en DD, la précision est d\'environ 11 centimètres, ce qui est largement suffisant pour les drones et la navigation civile.',
    },
    {
      question: 'Cet outil fonctionne-t-il hors ligne ?',
      answer: 'Oui, une fois la page chargée, toute la logique de conversion est locale (côté client). Seule la carte nécessite une connexion pour télécharger les nouvelles tuiles.',
    },
  ],
  bibliography: [
    {
      name: 'WGS 84 (World Geodetic System 1984) : La norme technique globale pour la cartographie et le GPS.',
      url: 'https://fr.wikipedia.org/wiki/WGS_84',
    },
    {
      name: 'IGN (Institut national de l\'information géographique et forestière) : Guides sur les coordonnées et projections.',
      url: 'https://www.ign.fr',
    },
  ],
  howTo: [],
  schemas: [],
};
