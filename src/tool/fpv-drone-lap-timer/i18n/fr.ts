import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'chronometre-tours-course-drone-fpv';
const title = 'Chronomètre de Tours et Splits pour Course de Drone FPV';
const description = 'Chronomètre interactif pour course de drones FPV avec séquence acoustique de départ FAI, calcul des deltas, alertes de meilleur tour, indice de régularité et télémétrie de vitesse.';

const ui = {
  setupHeading: 'Configuration du Circuit et de la Session',
  trackLengthLabel: 'Longueur du Circuit',
  trackLengthUnit: 'mètres',
  targetLapsLabel: 'Nombre de Tours Cible',
  targetLapsUnit: 'tours (0 pour entraînement libre)',
  batteryCapacityLabel: 'Capacité de la Batterie',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Activer les Signaux Sonores',
  debounceThresholdLabel: 'Protection Anti-rebond',
  debounceThresholdUnit: 'secondes',
  presetMultiGpLabel: 'Spécification MultiGP (250m / 3 Tours)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Tours)',
  presetSprintLabel: 'Sprint Haute Vitesse (400m / 2 Tours)',
  startCountdownButton: 'Démarrer le Compte à Rebours FAI',
  pauseTimerButton: 'Mettre en Pause',
  resumeTimerButton: 'Reprendre le Chrono',
  resetTimerButton: 'Réinitialiser la Session',
  recordLapButton: 'VALIDER LE TOUR',
  spacebarHint: 'Appuyez sur ESPACE ou touchez le bouton géant pour enregistrer le passage de ligne',
  statusIdle: 'Prêt pour le Départ',
  statusCountdown: 'Compte à Rebours FAI en Cours',
  statusRunning: 'Chronomètre de Course Actif',
  statusPaused: 'Session en Pause',
  statusFinished: 'Course Terminée',
  currentLapHeading: 'Temps du Tour Actuel',
  lapNumberPrefix: 'Tour',
  lastLapHeading: 'Dernier Tour',
  fastestLapHeading: 'Meilleur Tour',
  averageLapHeading: 'Tour Moyen',
  deltaBestHeading: 'Écart avec le Meilleur Tour',
  consistencyIndexHeading: 'Indice de Régularité',
  estimatedSpeedHeading: 'Vitesse Moyenne Estimée',
  estimatedBatteryHeading: 'Consommation Batterie Estimée',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh restants',
  lapHistoryHeading: 'Temps au Tour et Comparaison du Rythme',
  lapColumnHeader: 'Tour #',
  timeColumnHeader: 'Chrono',
  splitColumnHeader: 'Écart Meilleur',
  speedColumnHeader: 'Vitesse Moyenne',
  batteryColumnHeader: 'Conso Batterie',
  noLapsRecordedNotice: 'Aucun tour enregistré. Lancez le compte à rebours et appuyez sur Espace pour enregistrer votre premier passage.',
  consistencyRatingElite: 'Régularité Élite',
  consistencyRatingPro: 'Régularité Pilote Pro',
  consistencyRatingClub: 'Régularité Club',
  consistencyRatingNovice: 'Régularité en Apprentissage',
  fastestLapBadge: 'MEILLEUR TOUR',
  sessionSummaryHeading: 'Résumé de Session & Export',
  totalTimeLabel: 'Durée Totale de Course',
  completedLapsLabel: 'Tours Bouclés',
  exportCsvButton: 'Exporter les Tours en CSV',
  copySummaryButton: 'Copier le Résumé Texte',
  copiedNotice: 'Résumé de session copié dans le presse-papiers !',
};

const faqItems = [
  {
    question: 'Comment fonctionne le départ acoustique FAI dans ce chronomètre ?',
    answer: 'La séquence reproduit fidèlement les règles de course de drone F9U de la Fédération Aéronautique Internationale (FAI). Des bips préparatoires espacés d\'une seconde préparent le pilote, suivis d\'une tonalité aiguë signalant le top départ et déclenchant le chronomètre à zéro.',
  },
  {
    question: 'Comment est calculé l\'Indice de Régularité des tours ?',
    answer: 'Le score évalue l\'écart-type des tours complétés par rapport au tour moyen de la session. Un résultat supérieur à 95 pour cent reflète un pilotage extrêmement régulier et une gestion optimale des gaz.',
  },
  {
    question: 'Puis-je utiliser un commutateur de radiocommande ou une pédale ?',
    answer: 'Oui. Tout clavier sans fil, pédale Bluetooth ou bouton de radiocommande configuré pour envoyer la touche Espace enregistre instantanément le tour sans devoir quitter les lunettes des yeux.',
  },
  {
    question: 'Pourquoi y a-t-il un délai anti-rebond sur le bouton ?',
    answer: 'Les portes FPV sont franchies à grande vitesse, mais un double appui involontaire peut générer de faux tours fractionnaires. Le filtre anti-rebond rejette les déclenchements sous le seuil configuré (3 secondes par défaut).',
  },
  {
    question: 'Quelle est la précision de la vitesse moyenne estimée ?',
    answer: 'Le calcul divise la distance déclarée du circuit par le temps mesuré. En virage, la vitesse réelle du drone varie selon le rayon de trajectoire et l\'angle d\'inclinaison.',
  },
];

const howToSteps = [
  {
    name: 'Paramétrez la longueur de piste et le format',
    text: 'Saisissez la distance du circuit en mètres et le nombre de tours, ou sélectionnez un préréglage tel que MultiGP Spec.',
  },
  {
    name: 'Lancez le compte à rebours acoustique FAI',
    text: 'Cliquez sur Démarrer le Compte à Rebours. Écoutez les tonalités de préparation puis la sonnerie de départ.',
  },
  {
    name: 'Validez chaque tour au franchissement de la porte',
    text: 'Appuyez sur la barre Espace ou cliquez sur le bouton géant dès que votre drone traverse la porte de départ/arrivée.',
  },
  {
    name: 'Analysez la télémétrie, les deltas et la constance',
    text: 'Consultez le graphique des allures, les deltas au meilleur tour et la note de constance, puis exportez les données en CSV.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Principes du chronométrage haute précision pour les courses de drones FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La compétition en drone racer FPV exige une précision chirurgicale au millième de seconde. Les quadricoptères 5 pouces dépassent 140 km/h au cœur d\'enchaînements d\'arches et d\'obstacles complexes. Un entraînement efficace nécessite un départ sonore normalisé, un marquage instantané des passages et une analyse de la régularité sur plusieurs tours.',
  },
  {
    type: 'title',
    text: 'Comparaison des classes de circuits FPV et paramètres de timing',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Classe / Spécification', 'Longueur Moyenne', 'Tours de Manche', 'Temps au Tour Moyen', 'Plage de Vitesse', 'Anti-rebond Recommandé'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m à 80m', '5 tours', '8.5s à 13.0s', '35 à 55 km/h', '2.0 secondes'],
      ['Micro 3.5 Pouces (4S)', '120m à 180m', '4 tours', '12.0s à 18.0s', '70 à 110 km/h', '2.5 secondes'],
      ['MultiGP Spec 5 Pouces (6S)', '200m à 300m', '3 tours', '14.0s à 22.0s', '100 à 150 km/h', '3.0 secondes'],
      ['Sprint Plein Champ (6S/8S)', '350m à 500m', '2 tours', '20.0s à 32.0s', '130 à 180 km/h', '4.0 secondes'],
    ],
  },
  {
    type: 'title',
    text: 'Signaux sonores de départ et réglementation sportive FAI F9U',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Conformément aux règlements FAI CIAM Section 4 pour les courses de drones, les départs utilisent des signaux acoustiques standardisés pour assurer des temps de réaction équitables dans les masques vidéo. La séquence combine des tonalités à 440 Hz espacées d\'une seconde et un bip aigu à 880 Hz pour l\'armement immédiat.',
  },
  {
    type: 'list',
    items: [
      'Bips de préparation: Alertes sonores permettant de caler la position des gaz et de focaliser son attention.',
      'Tonalité de départ (Go): Signal immédiat calant le départ du chrono précisément à t = 0.',
      'Confirmation acoustique: Son de validation assurant l\'enregistrement du tour sans quitter la vue vidéo.',
      'Alerte de meilleur tour: Signal harmonique lorsque le tour améliore le record de la session.',
    ],
  },
  {
    type: 'title',
    text: 'Comprendre l\'Indice de Régularité et la stratégie de course',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Un tour éclair isolé impressionne, mais les championnats se remportent sur la constance. L\'indice mesure la stabilité des chronos: un pilote régulier à moins de 0.3 seconde près gère mieux l\'usure de batterie et conserve une tension suffisante pour le tour d\'attaque final.',
  },
  {
    type: 'tip',
    title: 'Conseil pratique sur le terrain',
    html: 'Installez votre smartphone ou tablette avec un volume suffisant près de votre chaise de vol. Placez un bouton poussoir Bluetooth ou un petit pavé numérique sous votre pied pour valider vos passages sans lâcher les commandes.',
  },
];

const schemas: FpvDroneLapTimerLocaleContent['schemas'] = [
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

export const content: FpvDroneLapTimerLocaleContent = {
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
