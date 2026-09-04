import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'cronometro-voltas-corrida-drone-fpv';
const title = 'Cronômetro de Voltas e Parciais para Corrida de Drone FPV';
const description = 'Cronômetro interativo para corridas de drones FPV com contagem acústica FAI, deltas de volta rápida, índice de consistência e telemetria de velocidade.';

const ui = {
  setupHeading: 'Configuração de Pista e Sessão',
  trackLengthLabel: 'Extensão da Pista',
  trackLengthUnit: 'metros',
  targetLapsLabel: 'Meta de Voltas',
  targetLapsUnit: 'voltas (0 para treino livre)',
  batteryCapacityLabel: 'Capacidade da Bateria',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Ativar Sinais Acústicos',
  debounceThresholdLabel: 'Filtro Anti-rebote de Volta',
  debounceThresholdUnit: 'segundos',
  presetMultiGpLabel: 'Especificação MultiGP (250m / 3 Voltas)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Voltas)',
  presetSprintLabel: 'Sprint de Alta Velocidade (400m / 2 Voltas)',
  startCountdownButton: 'Iniciar Contagem FAI',
  pauseTimerButton: 'Pausar Sessão',
  resumeTimerButton: 'Retomar Cronômetro',
  resetTimerButton: 'Zerar Sessão',
  recordLapButton: 'MARCAR VOLTA',
  spacebarHint: 'Pressione a BARRA DE ESPAÇO ou toque no botão gigante ao passar pela linha de chegada',
  statusIdle: 'Pronto para a Largada',
  statusCountdown: 'Contagem FAI em Andamento',
  statusRunning: 'Cronômetro de Corrida Ativo',
  statusPaused: 'Sessão Pausada',
  statusFinished: 'Corrida Concluída',
  currentLapHeading: 'Tempo da Volta Atual',
  lapNumberPrefix: 'Volta',
  lastLapHeading: 'Última Volta',
  fastestLapHeading: 'Melhor Volta',
  averageLapHeading: 'Volta Média',
  deltaBestHeading: 'Diferença para o Recorde',
  consistencyIndexHeading: 'Índice de Consistência',
  estimatedSpeedHeading: 'Velocidade Média Estimada',
  estimatedBatteryHeading: 'Consumo Estimado de Bateria',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh restantes',
  lapHistoryHeading: 'Tempos de Volta e Comparativo de Ritmo',
  lapColumnHeader: 'Volta #',
  timeColumnHeader: 'Tempo',
  splitColumnHeader: 'Diferença Melhor',
  speedColumnHeader: 'Velocidade Média',
  batteryColumnHeader: 'Consumo Bateria',
  noLapsRecordedNotice: 'Nenhuma volta registrada. Inicie a contagem e aperte Espaço ou o botão para marcar a primeira volta.',
  consistencyRatingElite: 'Consistência de Elite',
  consistencyRatingPro: 'Consistência Profissional',
  consistencyRatingClub: 'Consistência de Clube',
  consistencyRatingNovice: 'Consistência em Treinamento',
  fastestLapBadge: 'MELHOR VOLTA',
  sessionSummaryHeading: 'Resumo da Sessão e Exportação',
  totalTimeLabel: 'Duração Total da Corrida',
  completedLapsLabel: 'Voltas Concluídas',
  exportCsvButton: 'Exportar Voltas em CSV',
  copySummaryButton: 'Copiar Resumo em Texto',
  copiedNotice: 'Resumo da sessão copiado para a área de transferência!',
};

const faqItems = [
  {
    question: 'Como funciona a sequência acústica de largada FAI neste cronômetro?',
    answer: 'A sequência segue as regras oficiais de corrida de drones F9U da Federação Aeronáutica Internacional (FAI). São emitidos quatro beeps preparatórios com intervalo de um segundo, seguidos por um tom agudo contínuo que autoriza a largada e dispara o cronômetro no zero exato.',
  },
  {
    question: 'Como o Índice de Consistência de Volta é apurado?',
    answer: 'A pontuação calcula o desvio-padrão dos tempos completados em relação à média da sessão. Valores acima de 95 por cento representam uma pilotagem com controle de aceleração e traçado consistentes.',
  },
  {
    question: 'Posso usar um pedal físico ou chave do rádio para marcar voltas?',
    answer: 'Sim. Qualquer teclado sem fio, pedal Bluetooth ou botão mapeado para disparar a barra de espaço registrará a volta sem necessidade de olhar para a tela.',
  },
  {
    question: 'Para que serve a proteção de anti-rebote no botão?',
    answer: 'Os gates são cruzados em fração de segundos, mas toques acidentais poderiam registrar voltas falsas instantâneas. O filtro anti-rebote descarta acionamentos ocorridos antes do intervalo mínimo (padrão de 3 segundos).',
  },
  {
    question: 'Qual a precisão do cálculo de velocidade média estimada?',
    answer: 'A velocidade resulta da divisão da distância longitudinal declarada pelo tempo de volta. A velocidade real em curvas pode sofrer variações em função do raio da curva e do ângulo de inclinação do drone.',
  },
];

const howToSteps = [
  {
    name: 'Defina a distância da pista e a meta de voltas',
    text: 'Informe a extensão do circuito em metros e a quantidade de voltas ou selecione uma predefinição como MultiGP Spec.',
  },
  {
    name: 'Dispare a contagem regressiva acústica FAI',
    text: 'Clique em Iniciar Contagem. Ouça os avisos sonoros preliminares e o tom de largada que dá início à cronometragem.',
  },
  {
    name: 'Registre as voltas a cada passagem pelo gate',
    text: 'Pressione a barra de espaço ou toque no botão grande sempre que o drone cruzar a linha de chegada.',
  },
  {
    name: 'Analise telemetria, parciais e consistência',
    text: 'Verifique o gráfico de ritmo, os deltas em relação à melhor volta e o índice de consistência, exportando os dados para CSV.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Fundamentos de cronometragem de alta precisão em corridas de drones FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A pilotagem em corridas de drones FPV de alta velocidade requer precisão cirúrgica ao milissegundo e constância nas curvas. Quadricópteros de 5 polegadas atingem mais de 140 km/h ultrapassando gates e bandeiras em três dimensões. Um treino qualificado exige largada padronizada com retorno sonoro, marcação rápida de voltas e diagnóstico de degradação de ritmo nas baterias.',
  },
  {
    type: 'title',
    text: 'Comparativo de categorias de pistas e parâmetros de cronometragem',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Categoria / Padrão', 'Extensão Típica de Pista', 'Voltas por Bateria', 'Tempo Médio por Volta', 'Velocidade Máxima', 'Anti-rebote Recomendado'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m a 80m', '5 voltas', '8.5s a 13.0s', '35 a 55 km/h', '2.0 segundos'],
      ['Micro 3.5 Polegadas (4S)', '120m a 180m', '4 voltas', '12.0s a 18.0s', '70 a 110 km/h', '2.5 segundos'],
      ['MultiGP Spec 5 Polegadas (6S)', '200m a 300m', '3 voltas', '14.0s a 22.0s', '100 a 150 km/h', '3.0 segundos'],
      ['Sprint Aberto em Campo (6S/8S)', '350m a 500m', '2 voltas', '20.0s a 32.0s', '130 a 180 km/h', '4.0 segundos'],
    ],
  },
  {
    type: 'title',
    text: 'Sinais sonoros de largada e normas desportivas FAI F9U',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Segundo o regulamento FAI CIAM Seção 4 para corridas de drones, as baterias são iniciadas com avisos acústicos padronizados para garantir igualdade no tempo de reação dos pilotos com óculos FPV. A sequência utiliza beeps de 440 Hz a cada segundo e finaliza com um tom contínuo de 880 Hz para partida imediata.',
  },
  {
    type: 'list',
    items: [
      'Tons de preparação: Sinais para firmar aceleração e garantir foco visual na primeira curva.',
      'Tom de partida (Go): Sinal instantâneo que ativa o cronômetro exatamente em t = 0.',
      'Confirmação auditiva: Beep de retorno indicando registro de volta sem tirar o foco da câmera.',
      'Tom de melhor volta: Alerta com harmonia diferenciada ao superar o recorde da sessão.',
    ],
  },
  {
    type: 'title',
    text: 'Entendendo o Índice de Consistência e a tática de corrida',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Embora uma volta isolada muito rápida seja empolgante, campeonatos de drone racing são decididos pela constância. O índice mede a variação entre voltas: pilotos regulares com dispersão menor que 0.3 segundos preservam tensão na bateria e chegam com velocidade no sprint final.',
  },
  {
    type: 'tip',
    title: 'Dica prática para os dias de treino',
    html: 'Deixe seu tablet ou celular com volume alto perto do seu ponto de pilotagem. Conecte um pedal Bluetooth ou use um mini teclado sem fio perto da sua maleta para marcar as voltas com os pés sem soltar os sticks.',
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
