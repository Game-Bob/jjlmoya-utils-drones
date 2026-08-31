import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planificateur-reserve-batterie-mission-drone';
const title = 'Planificateur de Réserve de Batterie pour Mission de Drone';
const description = 'Calculez les marges de sécurité de batterie pour retour à la base, les pénalités de vent de face et le rayon maximal de vol UAV.';

const faqItems = [
  {
    question: 'Pourquoi le vol face au vent consomme-t-il plus d énergie?',
    answer: 'Voler face au vent exige un angle d inclinaison plus prononcé pour vaincre la traînée aérodynamique et maintenir la vitesse sol, ce qui augmente le courant moteur de manière non linéaire.',
  },
  {
    question: 'Comment le temps de vol stationnaire sur la cible affecte-t-il le point de non-retour?',
    answer: 'Le temps passé sur la zone de mission consomme directement l énergie utile de la batterie, réduisant ainsi la distance maximale franchissable aller-retour.',
  },
  {
    question: 'Quelle est la cause de la chute de tension sous charge des batteries LiPo?',
    answer: 'Un appel de courant élevé augmente les pertes par résistance interne dans les cellules lithium, réduisant les wattheures réellement exploitables.',
  },
];

const howToSteps = [
  {
    name: 'Saisir les caractéristiques de batterie et de propulsion',
    text: 'Entrez la capacité en mAh, la tension nominale et la consommation moyenne en ampères.',
  },
  {
    name: 'Définir la distance et le temps de vol stationnaire',
    text: 'Spécifiez la distance aller simple et la durée d opération sur zone.',
  },
  {
    name: 'Configurer la vitesse et le vecteur du vent',
    text: 'Sélectionnez la vitesse du vent et son orientation par rapport à l aller.',
  },
  {
    name: 'Analyser le rayon de sécurité et la télémétrie',
    text: 'Examinez le point de non-retour calculé, la puissance par segment et l énergie restante à l atterrissage.',
  },
];

const schemas: DroneMissionBatteryReservePlannerLocaleContent['schemas'] = [
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
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Planificateur de Réserve de Batterie pour Mission de Drone',
    subtitle: 'Calculez les marges de sécurité pour retour à la base et les rayons de mission',
    description: 'Planifiez vos missions UAV avec calcul précis des réserves de batterie et corrections de vent.',
    sections: {
      batteryPropulsion: '1. Batterie et Propulsion',
      flightAtmosphere: '2. Profil de Vol et Atmosphère',
    },
    inputs: {
      unitSystemLabel: 'Système d Unités',
      metricLabel: 'Métrique',
      imperialLabel: 'Impérial',
      presetLabel: 'Préréglages Rapides de Mission',
      batteryCapacityLabel: 'Capacité de Batterie',
      batteryVoltageLabel: 'Tension Nominale',
      averageCurrentLabel: 'Courant Moyen en Croisière',
      cruiseSpeedLabel: 'Vitesse Air en Croisière',
      oneWayDistanceLabel: 'Distance Aller Simple',
      targetHoverTimeLabel: 'Durée d Opération sur Zone',
      windSpeedLabel: 'Vitesse du Vent',
      windDirectionLabel: 'Orientation du Vent par rapport à l Aller',
      windHeadwindLabel: 'Vent de Face à l Aller',
      windTailwindLabel: 'Vent Arrière à l Aller',
      windCrosswindLabel: 'Vent De Travers',
      reservePolicyLabel: 'Buffer de Réserve de Sécurité',
    },
    presets: {
      mappingSurvey: 'Cartographie et Photogrammétrie',
      fpvRecon: 'Reconnaissance FPV Longue Portée',
      cinematicInspection: 'Inspection Structurale Cinématique',
      microRecon: 'Mission Micro Drone',
      surveyMeta: 'cartographie',
      scoutMeta: 'reconnaissance',
      hoverMeta: 'stationnaire',
    },
    results: {
      totalCapacityEnergy: 'Énergie Totale Brute',
      usableEnergy: 'Énergie Utile de Mission',
      reserveEnergyBuffer: 'Buffer d Énergie de Réserve',
      totalAutonomyTime: 'Autonomie Totale de Vol',
      maxSafeMissionRadius: 'Rayon du Point de Non-Retour',
      outboundLegTime: 'Durée du Vol Aller',
      targetHoverTime: 'Durée Stationnaire sur Cible',
      returnLegTime: 'Durée du Vol Retour',
      totalMissionTime: 'Durée Totale de Transit',
      remainingEnergyLanding: 'Niveau Estimé à l Atterrissage',
      feasibilityStatus: 'Évaluation de Faisabilité de Mission',
      voltageSagSubLabel: 'Chute de tension',
      maxRadiusSubLabel: 'Rayon max avec temps sur zone',
      powerSubLabel: 'Puissance',
    },
    statusBadges: {
      optimalTitle: 'MARGE DE RÉSERVE D ÉNERGIE OPTIMALE',
      optimalSubtitle: 'Profil de vol sûr avec réserve suffisante à l atterrissage',
      tightTitle: 'MARGE DE RÉSERVE TENDUE',
      tightSubtitle: 'Réserve faible à l atterrissage, surveillez la tension batterie',
      criticalTitle: 'ALERTE DE SÉCURITÉ ÉNERGIE',
      criticalSubtitle: 'Réserve franchie, engagez le retour à la base immédiatement',
      exceededTitle: 'LA MISSION DÉPASSE LA CAPACITÉ SÛRE',
      exceededSubtitle: 'Énergie insuffisante pour terminer la mission et atterrir',
    },
    chart: {
      batteryProfileTitle: 'PROFIL NON LINÉAIRE D ALLOCATION ÉNERGÉTIQUE',
      modelTitle: 'MODÈLE DE PUISSANCE AÉRODYNAMIQUE ET VENT',
      windLabel: 'Vent',
      homeNode: 'BASE',
      targetNode: 'CIBLE',
      landNode: 'POSE',
      launchPadLabel: 'Point de décollage',
      surveyHoverLabel: 'Stationnaire sur zone',
      safeRadiusLabel: 'Rayon sûr',
      outboundSegment: 'Aller',
      targetSegment: 'Stationnaire',
      returnSegment: 'Retour',
      reserveSegment: 'Réserve',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Pénalités de Puissance Aérodynamique face au Vent',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La sécurité des vols de drones repose sur des principes physiques non linéaires. Voler face au vent nécessite une inclinaison accrue pour surmonter la traînée et maintenir la vitesse sol. Cela augmente exponentiellement la poussée requise et la consommation de courant.',
    },
    {
      type: 'paragraph',
      html: 'Notre outil calcule dynamiquement les variations de puissance segment par segment en fonction des conditions météorologiques.',
    },
    {
      type: 'title',
      text: 'Prise en Compte du Temps Stationnaire sur Zone',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les missions de cartographie et d inspection nécessitent de rester en vol stationnaire au-dessus de la cible. Cette phase consomme une énergie constante avant le vol retour.',
    },
    {
      type: 'list',
      items: [
        'Définissez la durée stationnaire avant de calculer les limites de mission.',
        'Anticipez les pics de puissance lors des trajets face au vent.',
        'Surveillez la chute de tension sous charge des cellules LiPo.',
        'Initiez le retour dès que la réserve calculée est atteinte.',
      ],
    },
    {
      type: 'tip',
      title: 'Avertissement sur la Chute de Tension LiPo',
      html: 'Les appels de courant élevés entraînent une chute de tension temporaire liée à la résistance interne, réduisant l énergie utile exploitable.',
    },
    {
      type: 'title',
      text: 'Formules de Calcul de Réserve de Batterie UAV',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Paramètre', 'Formule / Modèle', 'Unité'],
      rows: [
        ['Énergie Brute', 'Capacité (mAh) x Tension (V) / 1000', 'Wattheures (Wh)'],
        ['Perte par Chute de Tension', 'Énergie Brute x Facteur de Sag', 'Wattheures (Wh)'],
        ['Puissance face au Vent', 'Puissance de Base x (1 + 0.65 x RatioVent)^1.3', 'Watts (W)'],
        ['Rayon de Sécurité Max', '(Énergie Utile - Énergie Stationnaire) / Consommation par Km', 'Kilomètres (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Bonnes Pratiques de Planification de Vol UAV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Comparez toujours les données de télémétrie avec les calculs avant-vol pour garantir un niveau de sécurité optimal lors de chaque opération.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
