import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planejador-reserva-bateria-missao-drone';
const title = 'Planejador de Reserva de Bateria para Missão de Drone';
const description = 'Calcule margens de segurança de bateria para retorno à base, penalidades de vento contra e raio máximo de voo para UAVs.';

const faqItems = [
  {
    question: 'Por que voar contra o vento consome mais energia?',
    answer: 'Voar contra o vento exige maior inclinação para vencer o atrito aerodinâmico e manter a velocidade em solo, aumentando a corrente dos motores exponencialmente.',
  },
  {
    question: 'Como o tempo de pairado no alvo afeta o ponto de não retorno?',
    answer: 'O tempo operando no local consome uma fração fixa da bateria útil, reduzindo a distância máxima disponível para ida e volta.',
  },
  {
    question: 'O que causa a queda de tensão nas baterias LiPo sob carga?',
    answer: 'Altas correntes aumentam as perdas por resistência interna nas células de lítio, reduzindo os Watt-hora efetivamente utilizáveis.',
  },
];

const howToSteps = [
  {
    name: 'Insira as especificações da bateria e propulsão',
    text: 'Informe a capacidade em mAh, voltagem nominal e consumo médio em ampères.',
  },
  {
    name: 'Defina a distância e o tempo no alvo',
    text: 'Especifique a distância de ida e o tempo planejado de pairado sobre a área da missão.',
  },
  {
    name: 'Configure a velocidade e direção do vento',
    text: 'Selecione a velocidade do vento e o rumo relativo à ida.',
  },
  {
    name: 'Analise o raio seguro e a telemetria',
    text: 'Examine o ponto de não retorno calculado, a potência por trecho e a energia restante no pouso.',
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
    title: 'Planejador de Reserva de Bateria para Missão de Drone',
    subtitle: 'Calcule margens de segurança para retorno e raios de voo',
    description: 'Planeje missões UAV com cálculo preciso de reservas e correções aerodinâmicas de vento.',
    sections: {
      batteryPropulsion: '1. Bateria e Propulsão',
      flightAtmosphere: '2. Perfil de Voo e Atmosfera',
    },
    inputs: {
      unitSystemLabel: 'Sistema de Unidades',
      metricLabel: 'Métrico',
      imperialLabel: 'Imperial',
      presetLabel: 'Presets Rápidos de Missão',
      batteryCapacityLabel: 'Capacidade da Bateria',
      batteryVoltageLabel: 'Voltagem Nominal',
      averageCurrentLabel: 'Consumo Médio em Cruzeiro',
      cruiseSpeedLabel: 'Velocidade do Ar em Cruzeiro',
      oneWayDistanceLabel: 'Distância de Ida',
      targetHoverTimeLabel: 'Tempo Operacional no Alvo',
      windSpeedLabel: 'Velocidade do Vento',
      windDirectionLabel: 'Rumo do Vento Relativo à Ida',
      windHeadwindLabel: 'Vento de Frente na Ida',
      windTailwindLabel: 'Vento a Favor na Ida',
      windCrosswindLabel: 'Vento Cruzado',
      reservePolicyLabel: 'Buffer de Reserva de Segurança',
    },
    presets: {
      mappingSurvey: 'Mapeamento e Fotogrametria',
      fpvRecon: 'Reconhecimento FPV Long Range',
      cinematicInspection: 'Inspeção Estrutural Cinematográfica',
      microRecon: 'Missão Micro Drone',
      surveyMeta: 'mapeamento',
      scoutMeta: 'reconhecimento',
      hoverMeta: 'pairado',
    },
    results: {
      totalCapacityEnergy: 'Energia Total Bruta',
      usableEnergy: 'Energia Útil de Missão',
      reserveEnergyBuffer: 'Buffer de Energia de Reserva',
      totalAutonomyTime: 'Autonomia Total de Voo',
      maxSafeMissionRadius: 'Raio do Ponto de Não Retorno',
      outboundLegTime: 'Duração do Trecho de Ida',
      targetHoverTime: 'Duração Pairado no Alvo',
      returnLegTime: 'Duração do Trecho de Volta',
      totalMissionTime: 'Duração Total de Trânsito',
      remainingEnergyLanding: 'Nível Estimado no Pouso',
      feasibilityStatus: 'Avaliação de Viabilidade da Missão',
      voltageSagSubLabel: 'Queda de voltagem',
      maxRadiusSubLabel: 'Raio máx com pairado no alvo',
      powerSubLabel: 'Potência',
    },
    statusBadges: {
      optimalTitle: 'MARGEM ÓTIMA DE RESERVA DE ENERGIA',
      optimalSubtitle: 'Perfil seguro de voo com reserva suficiente no pouso',
      tightTitle: 'MARGEM DE RESERVA APERTADA',
      tightSubtitle: 'Reserva baixa no pouso, monitore a voltagem da bateria',
      criticalTitle: 'ALERTA CRÍTICO DE ENERGIA',
      criticalSubtitle: 'Reserva ultrapassada, inicie o retorno à base imediatamente',
      exceededTitle: 'MISSÃO EXCEDE A CAPACIDADE SEGURA',
      exceededSubtitle: 'Energia insuficiente para concluir a missão e pousar seguro',
    },
    chart: {
      batteryProfileTitle: 'PERFIL NÃO LINEAR DE ALOCAÇÃO ENERGÉTICA',
      modelTitle: 'MODELO DE POTÊNCIA AERODINÂMICA E VENTO',
      windLabel: 'Vento',
      homeNode: 'BASE',
      targetNode: 'ALVO',
      landNode: 'POUSO',
      launchPadLabel: 'Ponto de decolagem',
      surveyHoverLabel: 'Pairado no alvo',
      safeRadiusLabel: 'Raio seguro',
      outboundSegment: 'Ida',
      targetSegment: 'Pairado',
      returnSegment: 'Volta',
      reserveSegment: 'Reserva',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Penalidades de Potência Aerodinâmica com Vento Contra',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A segurança de voo em operações UAV depende de física aerodinâmica não linear. Voar contra o vento exige maior inclinação para vencer o atrito do ar e manter a velocidade em solo. Isso aumenta a exigência de empuxo nos motores e a corrente elétrica.',
    },
    {
      type: 'paragraph',
      html: 'Nosso planejador calcula as variações de potência trecho a trecho com base no vetor do vento.',
    },
    {
      type: 'title',
      text: 'Cálculo do Tempo de Pairado na Área do Alvo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Missões de fotogrametria e inspeção exigem pairar sobre a zona de trabalho. Esse consumo é subtraído antes de determinar o raio máximo de voo.',
    },
    {
      type: 'list',
      items: [
        'Informe o tempo no alvo antes de calcular os limites da missão.',
        'Anticipe picos de potência nos trechos voando contra o vento.',
        'Monitore a queda de voltagem sob carga nas células LiPo.',
        'Inicie o retorno assim que atingir o buffer de reserva.',
      ],
    },
    {
      type: 'tip',
      title: 'Aviso sobre Queda de Voltagem em Baterias LiPo',
      html: 'Altas correntes geram perdas por resistência interna nas células de lítio, reduzindo a energia útil disponível.',
    },
    {
      type: 'title',
      text: 'Fórmulas para Cálculo de Reserva de Bateria UAV',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parâmetro', 'Fórmula / Modelo', 'Unidade'],
      rows: [
        ['Energia Bruta', 'Capacidade (mAh) x Voltagem (V) / 1000', 'Watt-hora (Wh)'],
        ['Perda por Sag', 'Energia Bruta x Fator de Sag', 'Watt-hora (Wh)'],
        ['Potência com Vento', 'Potência Base x (1 + 0.65 x RatioVento)^1.3', 'Watts (W)'],
        ['Raio Seguro Máx', '(Energia Útil - Energia Pairado) / Consumo por Km', 'Quilômetros (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Boas Práticas na Planejamento de Voos UAV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sempre valide os cálculos pré-voo com a telemetria gravada para manter altos padrões de segurança operacionais.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
