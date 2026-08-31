import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planejador-reserva-bateria-missao-drone';
const title = 'Planejador de Reserva de Bateria para Missões de Drones';
const description = 'Calcule margens de segurança da bateria para retorno à base, impacto do vento contrário e raio máximo de voo de drones.';

const faqItems = [
  {
    question: 'Por que voar contra o vento consome mais energia do que o esperado?',
    answer: 'O voo contra o vento exige um ângulo de inclinação maior para vencer a resistência do ar e manter a velocidade em relação ao solo, disparando o consumo de corrente.',
  },
  {
    question: 'Como o tempo de permanência no alvo afeta o ponto de não retorno?',
    answer: 'O tempo de voo pairado na área do alvo consome energia da bateria, reduzindo diretamente o raio máximo de deslocamento de ida e volta.',
  },
  {
    question: 'O que causa a queda de tensão sob carga nas baterias LiPo?',
    answer: 'Altas correntes de descarga aumentam as perdas por resistência interna nas células de lítio, reduzindo os Watt-hora úteis.',
  },
];

const howToSteps = [
  {
    name: 'Insira as especificações da bateria e propulsão',
    text: 'Informe a capacidade em miliamperes-hora, a tensão nominal e o consumo médio de corrente.',
  },
  {
    name: 'Defina a distância e o tempo no alvo',
    text: 'Especifique a distância de ida e o tempo previsto de voo pairado na área do objetivo.',
  },
  {
    name: 'Configure a velocidade e direção do vento',
    text: 'Selecione a velocidade do vento e sua direção em relação ao trajeto de ida.',
  },
  {
    name: 'Analise o raio seguro e a telemetria',
    text: 'Examine o ponto de não retorno calculado, a potência por trecho e a bateria estimada no pouso.',
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
    title: 'Planejador de Reserva de Bateria para Missões de Drones',
    subtitle: 'Calcule margens de segurança para retorno à base, efeitos do vento e raios de voo',
    description: 'Planejamento de voo para drones com cálculo preciso de reservas de bateria e limites de ponto de não retorno.',
    inputs: {
      unitSystemLabel: 'Sistema de Unidades',
      metricLabel: 'Métrico',
      imperialLabel: 'Imperial',
      presetLabel: 'Presets Rápidos de Missão',
      batteryCapacityLabel: 'Capacidade da Bateria',
      batteryVoltageLabel: 'Tensão Nominal',
      averageCurrentLabel: 'Corrente Média em Cruzeiro',
      cruiseSpeedLabel: 'Velocidade do Ar em Cruzeiro',
      oneWayDistanceLabel: 'Distância de Ida',
      targetHoverTimeLabel: 'Tempo de Operação no Alvo',
      windSpeedLabel: 'Velocidade do Vento',
      windDirectionLabel: 'Direção do Vento em Relação à Ida',
      windHeadwindLabel: 'Vento de Frente na Ida',
      windTailwindLabel: 'Vento de Cauda na Ida',
      windCrosswindLabel: 'Vento Cruzado',
      reservePolicyLabel: 'Buffer de Reserva de Segurança',
    },
    presets: {
      mappingSurvey: 'Fotogrametria e Mapeamento',
      fpvRecon: 'Reconhecimento FPV Long Range',
      cinematicInspection: 'Inspeção Estrutural Cinematográfica',
      microRecon: 'Missão de Micro Drone',
    },
    results: {
      totalCapacityEnergy: 'Energia Total de Capacidade',
      usableEnergy: 'Energia Útil da Missão',
      reserveEnergyBuffer: 'Buffer de Energia de Reserva',
      totalAutonomyTime: 'Autonomia Total de Voo',
      maxSafeMissionRadius: 'Raio do Ponto de Não Retorno',
      outboundLegTime: 'Duração do Trecho de Ida',
      targetHoverTime: 'Duração do Voo Pairado no Alvo',
      returnLegTime: 'Duração do Trecho de Volta',
      totalMissionTime: 'Duração Total de Trânsito',
      remainingEnergyLanding: 'Nível Estimado de Bateria no Pouso',
      feasibilityStatus: 'Avaliação de Viabilidade da Missão',
    },
    statusBadges: {
      optimal: 'Margem Ótima de Reserva de Energia',
      tight: 'Aviso de Reserva Ajustada',
      critical: 'Alerta Crítico de Energia Ativado',
      exceeded: 'A Missão Excede a Capacidade Segura',
    },
    chart: {
      batteryProfileTitle: 'Perfil de Descarregamento da Bateria',
      outboundSegment: 'Trecho de Voo de Ida',
      targetSegment: 'Voo Pairado no Alvo',
      returnSegment: 'Voo de Retorno à Base',
      reserveSegment: 'Buffer de Reserva de Segurança',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Penalidades de Potência Aerodinâmica com Vento de Frente',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A segurança de voo em drones fundamenta-se em leis físicas não lineares. Voar contra o vento exige maior inclinação para vencer o arrasto e manter a velocidade de solo.',
    },
    {
      type: 'title',
      text: 'Cálculo do Tempo Pairado na Área do Objetivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Missões de mapeamento e inspeção exigem permanência no local de trabalho, consumindo energia antes de iniciar o voo de volta.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
