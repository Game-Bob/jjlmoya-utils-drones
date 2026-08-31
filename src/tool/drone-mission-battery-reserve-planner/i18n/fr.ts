import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planificateur-reserve-batterie-mission-drone';
const title = 'Planificateur de Réserve de Batterie pour Missions de Drone';
const description = 'Calculez les marges de sécurité de batterie pour le retour au point de départ, l impact du vent et le rayon maximal de vol des drones.';

const faqItems = [
  {
    question: 'Pourquoi le vol face au vent consomme-t-il plus d énergie?',
    answer: 'Voler face au vent exige un angle d inclinaison plus prononcé pour surmonter la traînée et maintenir la vitesse sol, ce qui augmente exponentiellement la consommation de courant.',
  },
  {
    question: 'Comment le temps de travail sur zone influe-t-il sur le point de non-retour?',
    answer: 'La durée de vol stationnaire sur la zone cible consomme une portion fixe de la batterie, réduisant directement la distance franchissable aller-retour.',
  },
  {
    question: 'Qu est-ce qui provoque la chute de tension sous charge des batteries LiPo?',
    answer: 'Un appel de courant élevé augmente les pertes par résistance interne dans les cellules de lithium, réduisant les Watt-heures utiles.',
  },
];

const howToSteps = [
  {
    name: 'Saisir les caractéristiques de la batterie et de la propulsion',
    text: 'Entrez la capacité de la batterie en milliampères-heures, la tension nominale et le courant moyen.',
  },
  {
    name: 'Définir la distance et la durée sur zone',
    text: 'Indiquez la distance aller et le temps prévu de vol stationnaire au-dessus de la cible.',
  },
  {
    name: 'Configurer la vitesse et la direction du vent',
    text: 'Sélectionnez la vitesse du vent et sa direction par rapport au trajet aller.',
  },
  {
    name: 'Analyser le rayon de sécurité et la télémétrie',
    text: 'Examinez le point de non-retour calculé, la puissance consommée par tronçon et le niveau de batterie à l atterrissage.',
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
    title: 'Planificateur de Réserve de Batterie pour Missions de Drone',
    subtitle: 'Calculez les marges de sécurité pour le retour, l impact du vent et les rayons de vol',
    description: 'Planification de vol UAV avec calcul précis de la réserve de batterie et seuils de point de non-retour.',
    inputs: {
      unitSystemLabel: 'Système d Unités',
      metricLabel: 'Métrique',
      imperialLabel: 'Impérial',
      presetLabel: 'Préréglages de Mission',
      batteryCapacityLabel: 'Capacité de la Batterie',
      batteryVoltageLabel: 'Tension Nominale',
      averageCurrentLabel: 'Courant Moyen en Croisière',
      cruiseSpeedLabel: 'Vitesse Air en Croisière',
      oneWayDistanceLabel: 'Distance Aller Simple',
      targetHoverTimeLabel: 'Durée d Opération sur Cible',
      windSpeedLabel: 'Vitesse du Vent',
      windDirectionLabel: 'Orientation du Vent par rapport à l Aller',
      windHeadwindLabel: 'Vent Debout à l Aller',
      windTailwindLabel: 'Vent Arrière à l Aller',
      windCrosswindLabel: 'Vent De Travers',
      reservePolicyLabel: 'Marge de Réserve de Sécurité',
    },
    presets: {
      mappingSurvey: 'Cartographie & Photogrammétrie',
      fpvRecon: 'Reconnaissance FPV Longue Portée',
      cinematicInspection: 'Inspection d Ouvrage Cinématique',
      microRecon: 'Mission de Micro-Drone',
    },
    results: {
      totalCapacityEnergy: 'Énergie Totale de Capacité',
      usableEnergy: 'Énergie Utile de Mission',
      reserveEnergyBuffer: 'Marge d Énergie de Réserve',
      totalAutonomyTime: 'Autonomie Totale de Vol',
      maxSafeMissionRadius: 'Rayon du Point de Non-Retour',
      outboundLegTime: 'Durée du Trajet Aller',
      targetHoverTime: 'Durée de Vol Stationnaire sur Cible',
      returnLegTime: 'Durée du Trajet Retour',
      totalMissionTime: 'Durée Totale de Transit',
      remainingEnergyLanding: 'Niveau Estimé de Batterie à l Atterrissage',
      feasibilityStatus: 'Évaluation de la Faisabilité de la Mission',
    },
    statusBadges: {
      optimal: 'Marge d Énergie de Réserve Optimale',
      tight: 'Avertissement de Réserve Limite',
      critical: 'Alerte Critique d Énergie Déclenchée',
      exceeded: 'La Mission Dépasse la Capacité Sûre',
    },
    chart: {
      batteryProfileTitle: 'Profil d Épuisement Énergétique de la Batterie',
      outboundSegment: 'Tronçon de Vol Aller',
      targetSegment: 'Vol Stationnaire sur Cible',
      returnSegment: 'Vol de Retour au Départ',
      reserveSegment: 'Marge de Réserve de Sécurité',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Pénalités de Puissance Aérodynamique par Vent Debout',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La sécurité des vols de drones repose sur des règles physiques non linéaires. Le vol face au vent exige un inclinement supérieur pour lutter contre la traînée et maintenir la vitesse sol.',
    },
    {
      type: 'title',
      text: 'Prise en Compte du Temps de Vol Stationnaire sur la Cible',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les drones d inspection et de cartographie restent en stationnaire au-dessus de leur zone d intervention, ce qui prélève une partie de l énergie avant le retour.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
