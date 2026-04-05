import type { AntennaLengthCalculatorLocaleContent } from '../index';

const slug = 'calculateur-longueur-antenne';
const title = 'Calculateur de Longueur d\'Antenne RF | Dipôles et Fouets FPV';
const description = 'Calculez la mesure exacte de vos antennes 868MHz, 2.4GHz et 5.8GHz. Améliorez la portée de votre drone et évitez de brûler votre émetteur avec un SWR optimisé.';

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Foire Aux Questions',
  bibliographyTitle: 'Références Bibliographiques',
  ui: {
    faqTitle: 'Foire Aux Questions',
    bibliographyTitle: 'Références Bibliographiques',
    signalParameters: 'Paramètres du Signal',
    antennaType: 'Type d\'Antenne',
    dipole: 'Dipôle (1/2 λ)',
    whip: 'Fouet (1/4 λ)',
    conductorMedium: 'Milieu Conducteur',
    totalLength: 'Longueur Totale',
    branchLength: 'Longueur par Branche',
    secondaryResonance: 'Points de Résonance Secondaires',
    swrIdeal: 'SWR Idéal',
    impedance: 'Impédance',
    criticalNotice: 'Avis Critique',
    criticalNoticeText: 'Une antenne mal coupée génère un TOS (SWR) élevé qui peut surchauffer et détruire les étages de sortie de puissance de votre émetteur en quelques secondes.',
    dynamicScheme: 'Schéma Dynamique (mm)',
    harmonicLabel: 'Harmonique',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Cuivre dénudé (0.95)',
    materialPvcInsulated: 'Câble isolé PVC (0.92)',
    materialSolidRod: 'Tige solide (0.97)',
    materialCoaxial: 'Câble Coaxial (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Pourquoi la longueur de votre antenne radiofréquence est-elle critique ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si vous vous êtes déjà demandé pourquoi les antennes des drones de course (FPV), les télécommandes longue portée (ELRS/Crossfire) ou même votre routeur Wi-Fi ont des longueurs si spécifiques, la réponse réside dans la physique de la résonance. Une antenne n\'est pas simplement un morceau de fil conducteur ; c\'est un composant qui doit "s\'accorder" avec la fréquence de l\'onde électromagnétique qu\'il manipule.',
    },
    {
      type: 'paragraph',
      html: 'Lorsque vous fabriquez votre propre antenne, qu\'il s\'agisse d\'un <strong>dipôle</strong> pour 868MHz ou d\'une <strong>antenne fouet</strong> pour 5.8GHz, la précision se mesure en millimètres. Une erreur de seulement 2 ou 3 mm peut rendre l\'antenne inefficace, provoquant ce que l\'on appelle un TOS (Taux d\'Ondes Stationnaires) ou SWR élevé.',
    },
    {
      type: 'title',
      text: 'Concepts Fondamentaux : Longueur d\'Onde et Résonance',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La radiofréquence (RF) se déplace à la vitesse de la lumière (environ 300 000 kilomètres par seconde). Pour qu\'une antenne émette ou reçoive de l\'énergie de manière optimale, sa taille physique doit être directement liée à la distance parcourue par un cycle complet de l\'onde, appelée <strong>longueur d\'onde (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'La formule de base pour calculer la longueur d\'onde est λ = v / f, où \'v\' est la vitesse de propagation et \'f\' est la fréquence. Cependant, dans le monde réel, l\'électricité voyage un peu plus lentement à travers les métaux que dans le vide. C\'est là qu\'intervient le <strong>Facteur de Vélocité (Vf)</strong>.',
    },
    {
      type: 'list',
      items: [
        'Cuivre dénudé : A un Vf d\'environ 0,95.',
        'Câbles isolés (PVC) : L\'isolation ralentit l\'onde, abaissant le facteur à 0,92 ou moins.',
        'Tiges de cuivre massif : Étant plus épaisses et conductrices, le facteur monte légèrement à 0,97.',
      ],
    },
    {
      type: 'title',
      text: 'Types d\'Antennes Courantes pour Drones et Maker',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Antenne Dipôle Demi-Onde (1/2 λ) :</strong> C\'est la référence pour de nombreuses applications. Elle se compose de deux bras (éléments rayonnants) qui, ensemble, forment la moitié de la longueur d\'onde de la fréquence de travail. C\'est une antenne équilibrée offrant un diagramme de rayonnement en forme de "donut" et elle est très facile à fabriquer avec du câble coaxial.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Antenne Fouet ou Monopole Quart d\'Onde (1/4 λ) :</strong> C\'est celle que l\'on voit généralement sur les récepteurs radio ou les petits drones. Elle n\'a qu\'un seul élément rayonnant et utilise le châssis de l\'appareil ou un plan de masse pour "refléter" l\'autre moitié de l\'onde. Sa longueur est exactement la moitié de celle d\'un dipôle, d\'où son nom de quart d\'onde.',
    },
    {
      type: 'title',
      text: 'Fréquences Critiques et Applications',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chaque bande de fréquence a ses particularités. Avec notre calculateur, vous pouvez ajuster les mesures pour les bandes les plus utilisées dans le loisir :',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (Vidéo FPV) : Les longueurs sont minuscules (environ 12-13 mm pour le radiateur). Tout excès de soudure peut ruiner les performances.',
        '2.4 GHz (Contrôle et Wi-Fi) : Une bande saturée où l\'efficacité de l\'antenne est la clé pour éviter la perte de liaison (failsafe).',
        '868 MHz / 915 MHz (Longue Portée) : Utilisée par des systèmes comme Team BlackSheep Crossfire ou ExpressLRS. Les antennes ici sont plus grandes (environ 8 cm par bras) et permettent de traverser les obstacles plus facilement.',
        '433 MHz (UHF) : L\'ancienne norme longue portée, avec de grandes antennes idéales pour les vols de plusieurs kilomètres.',
      ],
    },
    {
      type: 'title',
      text: 'Référence Technique : Tableau SWR et Pertes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour des performances optimales, le SWR doit être aussi proche que possible de 1,0. Voici une référence de l\'effet du SWR sur votre puissance d\'émission :',
    },
    {
      type: 'table',
      headers: ['SWR (TOS)', 'Perte au Retour', 'Puissance Réfléchie', 'État'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Parfait</strong>'],
        ['1.2:1', '-21 dB', '0,8%', 'Excellent'],
        ['1.5:1', '-14 dB', '4,0%', 'Bon'],
        ['2.0:1', '-9,5 dB', '11,1%', 'Limite Acceptable'],
        ['3.0:1', '-6,0 dB', '25,0%', '<strong>Dangereux</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'L\'importance des 50 Ohms',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Presque tous les systèmes radio utilisés dans les drones et le radioguidage (VTx, récepteurs, commandes) sont conçus pour une <strong>impédance caractéristique de 50 Ohms</strong>. Une antenne dipôle parfaitement résonnante a généralement une impédance proche de 73 Ohms en espace libre, mais lorsqu\'elle est installée sur un drone ou en ajustant l\'angle des bras (V-Inversé), elle se rapproche des 50 Ohms idéaux. L\'utilisation de câbles coaxiaux de 75 Ohms (comme les anciens câbles TV) provoquera un déséquilibre qui dégradera le signal, peu importe la qualité de la coupe de l\'antenne.',
    },
    {
      type: 'title',
      text: 'Le danger d\'un SWR élevé : Protégez votre VTx',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pourquoi insistons-nous autant sur la précision ? Si l\'antenne n\'a pas la bonne longueur, elle ne pourra pas rayonner toute l\'énergie envoyée par l\'émetteur vidéo (VTx). Cette énergie "rebondit" et retourne vers l\'émetteur sous forme de chaleur.',
    },
    {
      type: 'paragraph',
      html: 'Un SWR élevé est la cause numéro un des émetteurs brûlés. Si vous volez sans antenne ou avec une antenne mal coupée, les composants internes surchaufferont en quelques secondes, rendant votre équipement inutilisable. Utiliser cet outil pour vérifier vos coupes est le meilleur investissement en sécurité pour votre drone.',
    },
    {
      type: 'title',
      text: 'Harmoniques : Comprendre les Interférences',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une antenne coupée pour 868MHz ne résonne pas seulement à cette fréquence. En raison de la nature des ondes sinusoïdales, elle aura également des points de résonance à ses multiples impairs (3ème, 5ème, 7ème harmonique).',
    },
    {
      type: 'paragraph',
      html: 'Il est essentiel de le savoir car, même si votre antenne émet à 868MHz, vous pourriez générer du "bruit" ou des interférences sur des fréquences plus élevées si l\'émetteur n\'est pas bien filtré. Le calculateur d\'harmoniques vous aide à prédire où ces signaux fantômes pourraient apparaître.',
    },
  ],
  faq: [
    {
      question: 'Pourquoi mon câble d\'antenne doit-il avoir une longueur spécifique ?',
      answer: 'Les ondes radio résonnent à des multiples de leur longueur d\'onde. Si le câble ne correspond pas à cette résonance, l\'énergie est réfléchie vers l\'émetteur au lieu d\'être rayonnée, ce qui peut brûler l\'équipement.',
    },
    {
      question: 'Qu\'est-ce que le Facteur de Vélocité (Vf) ?',
      answer: 'C\'est le rapport entre la vitesse à laquelle le signal voyage dans un conducteur et la vitesse de la lumière. Dans le cuivre, il est généralement de 0,95, ce qui signifie que l\'onde voyage 5% plus lentement et l\'antenne doit être 5% plus courte.',
    },
    {
      question: 'Est-il préférable d\'utiliser un dipôle ou une antenne fouet ?',
      answer: 'Un dipôle (1/2 onde) est plus efficace et prévisible, mais plus volumineux. Un fouet (1/4 onde) est compact et idéal pour les petits récepteurs, bien qu\'il nécessite un plan de masse pour bien fonctionner.',
    },
    {
      question: 'Comment l\'épaisseur du câble affecte-t-elle l\'antenne ?',
      answer: 'Les câbles plus épais ont une bande passante plus large (ils sont moins critiques vis-à-vis de la fréquence exacte), mais leur facteur de vélocité change légèrement. Pour la plupart des drones FPV, le câble standard 20-22AWG est idéal.',
    },
  ],
  bibliography: [
    { name: 'Le Monopole Quart d\'Onde', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Facteur de Vélocité des Lignes de Transmission', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Sélectionnez la Fréquence',
      text: 'Entrez la fréquence exacte en MHz ou utilisez l\'un des boutons rapides pour 5.8GHz, 2.4GHz ou 868MHz.',
    },
    {
      name: 'Choisissez le Type d\'Antenne',
      text: 'Décidez si vous allez fabriquer un dipôle complet (1/2 onde) ou une antenne verticale fouet (1/4 onde).',
    },
    {
      name: 'Ajustez le Matériau',
      text: 'Choisissez le type de câble que vous allez utiliser pour que le calculateur applique le bon facteur de vélocité.',
    },
    {
      name: 'Coupez avec Précision',
      text: 'Utilisez la mesure "Longueur par branche" pour couper chaque élément. N\'oubliez pas de mesurer à partir du point de soudure.',
    },
  ],
  schemas: [],
};
