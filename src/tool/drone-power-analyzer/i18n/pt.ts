import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'analisador-potencia-drone';
const title = 'Analisador de Potência de Drone: Calculadora de Relação Empuxo e Peso para FPV';
const description = 'Calcule a relação empuxo-peso crítica para a sua montagem de drone FPV. Obtenha recomendações instantâneas de perfil de voo, medidor de potência visual e otimize para cinematic, freestyle ou corrida.';

const faqItems = [
  {
    question: 'O que é a relação empuxo-peso e por que ela é importante?',
    answer: 'A relação empuxo-peso é o empuxo total que o seu drone pode produzir dividido pelo seu peso total de decolagem (AUW). É a métrica mais importante que determina como o seu drone se sentirá ao voar — de lento e estável (cinematografia) a ultra-responsivo (corrida).',
  },
  {
    question: 'Qual é o "ponto ideal" (sweet spot) para voo freestyle?',
    answer: 'Para um voo freestyle fluido, o ponto ideal está entre 4:1 e 6:1. Uma relação de 4:1 oferece excelente agilidade com boa estabilidade, enquanto 6:1 é extremamente responsivo, mas requer mais precisão no acelerador em espaços apertados.',
  },
  {
    question: 'Posso usar isto para montagens de cinematografia?',
    answer: 'Sim. Para tomadas cinematográficas fluidas e lentas, mire em uma relação de 2:1 a 3:1. Isso mantém o drone estável e previsível. Qualquer valor inferior torna-se difícil de controlar; qualquer valor superior parecerá muito instável para movimentos lentos.',
  },
  {
    question: 'O que acontece se a minha relação for superior a 8:1?',
    answer: 'Acima de 8:1, o seu drone é efetivamente uma máquina de corrida — extremamente reativo e exigente para pilotar. Apenas pilotos experientes devem tentar estas montagens. Ótimo para portões de corrida e velocidade, mas perigoso em interiores.',
  },
  {
    question: 'Devo incluir o peso da bateria no AUW?',
    answer: 'Sim. O AUW (All-Up Weight) é o peso total do seu drone com todos os componentes instalados: chassi, motores, ESCs, controlador de voo, câmera, bateria, hélices — tudo. Use os botões de predefinição de bateria para adição instantânea de peso.',
  },
];

const howToSteps = [
  {
    name: 'Selecionar Configuração de Motores',
    text: 'Escolha se a sua montagem é Quad (4), Hexa (6) ou Octo (8) motores. Este multiplicador é crucial para o empuxo total.',
  },
  {
    name: 'Inserir Empuxo por Motor',
    text: 'Insira o empuxo máximo que cada motor pode produzir (em gramas). Você pode encontrar isso nas especificações do motor ou usar as predefinições rápidas.',
  },
  {
    name: 'Definir Peso Total',
    text: 'Insira o peso total de decolagem (AUW) do seu drone — chassi, motores, bateria, câmera, tudo. Use as predefinições de bateria para ajuste instantâneo de peso.',
  },
  {
    name: 'Ler seus Resultados',
    text: 'A calculadora mostra instantaneamente a sua relação empuxo-peso, a adequação do perfil de voo (Cinematográfico, Freestyle, Corrida) e uma recomendação personalizada.',
  },
];

const schemas: DronePowerAnalyzerLocaleContent['schemas'] = [
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
    applicationCategory: 'OtherApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DronePowerAnalyzerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    motorConfiguration: 'Configuração de Motores',
    motorCount: 'Número de Motores',
    thrustPerMotor: 'Empuxo por Motor (máx)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Predefinições Rápidas de Motor',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Configuração de Peso',
    auwLabel: 'Peso Total de Decolagem (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Mudar para lbs',
    switchToGrams: 'Mudar para g',
    batteryPresets: 'Adicionar Peso da Bateria',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Empuxo Total',
    twRatio: 'Relação Empuxo-Peso',
    powerMeter: 'Medidor de Potência',
    flightProfiles: 'Avaliação do Perfil de Vovo',
    cinematicLabel: 'Cinematográfico',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Corrida',
    proRacingLabel: 'Corrida Pro',
    suitable: 'Adequado',
    notSuitable: 'Não Adequado',
    recommendationLabel: 'Recomendação de Estilo de Voo',
    recommendation_low: 'Com uma relação inferior a 2:1, o seu drone terá dificuldades de estabilidade. Considere reduzir o peso ou melhorar os motores.',
    recommendation_cinematic: 'Com uma relação de {ratio}:1, isto é ideal para cinematografia de carga pesada com movimentos suaves e controlados. Perfeito para trabalhos de câmera lentos.',
    recommendation_freestyle: 'Com uma relação de {ratio}:1, este é o ponto ideal para o voo freestyle. Excelente agilidade mantendo a estabilidade para manobras.',
    recommendation_racing: 'Com uma relação de {ratio}:1, estamos em território de freestyle de alto desempenho. O controle do acelerador é crítico em espaços apertados.',
    recommendation_extreme: 'Com uma relação de {ratio}:1, isto é uma máquina de corrida. Extremamente reativo — apenas para pilotos experientes em áreas abertas.',
    compareMode: 'Comparar Montagens',
    scenario1: 'Montagem A',
    scenario2: 'Montagem B',
    addComparison: 'Adicionar Comparação',
    tooltipTWRatio: 'A relação empuxo-peso é o empuxo total dividido pelo peso do drone. Uma relação mais alta significa aceleração mais rápida e controle mais reativo.',
    tooltipFreestyle: 'O "ponto ideal" para o voo freestyle é uma relação de 4:1 a 6:1, proporcionando o melhor equilíbrio entre agilidade e controle.',
    badge_unstable: 'Instável',
    badge_cinematic: 'Cinematográfico',
    badge_sweetSpot: 'Ponto Ideal',
    badge_racing: 'Corrida',
    badge_extreme: 'Extremo',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'Entendendo a Relação Empuxo-Peso para Drones FPV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>relação empuxo-peso</strong> é talvez a métrica mais crítica na construção de drones FPV. No entanto, muitos pilotos a ignoram, resultando em montagens que não se comportam como esperado. Esta calculadora desmistifica o cálculo e mostra exatamente como o seu drone se sentirá ao voar.',
    },
    {
      type: 'title',
      text: 'Por que a Relação Empuxo-Peso é Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A relação do seu drone determina três coisas fundamentais: <strong>estabilidade</strong>, <strong>capacidade de resposta</strong> e <strong>velocidade</strong>. Uma relação de 2:1 parece lenta e estável. Uma de 6:1 parece ágil e nervosa. Uma de 10:1 é uma máquina de corrida. Entender onde a sua montagem se encaixa neste espectro ajuda a escolher o estilo de voo certo.',
    },
    {
      type: 'title',
      text: 'Perfis de Voo Explicados',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cinematográfico (2:1 – 4:1)</strong>: Pesado, estável, lento. Ideal para movimentos suaves de câmera e montagens que transportam carga.',
        '<strong>Freestyle (3.5:1 – 6.5:1)</strong>: O ponto de equilíbrio ideal. Reativo o suficiente para manobras, estável o suficiente para controle.',
        '<strong>Corrida (5:1 – 8:1)</strong>: Rápido e ágil. Projetado para portões de velocidade e manobras agressivas.',
        '<strong>Corrida Pro (7:1+)</strong>: Desempenho extremo. Apenas para pilotos experientes em áreas abertas.',
      ],
    },
    {
      type: 'title',
      text: 'Como Calcular a Relação Empuxo-Peso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A fórmula é simples: <strong>relação = (Empuxo por Motor × Número de Motores) / Peso Total de Decolagem</strong>. Por exemplo, um Quad com motores de 600g (2.400g de empuxo total) pesando 800g produz uma relação de 3:1. Isto é território freestyle.',
    },
    {
      type: 'title',
      text: 'Escolhendo a Relação Certa para a Sua Montagem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pergunte a si mesmo: <em>O que eu vou voar?</em> Tomadas cinematográficas lentas? Manobras de freestyle agressivas? Corridas de alta velocidade? Sua resposta determina a sua relação ideal. A maioria dos pilotos de FPV termina entre 4:1 e 6:1 porque oferece o melhor compromisso entre controle e emoção.',
    },
    {
      type: 'paragraph',
      html: 'Lembre-se: uma relação mais alta não significa "melhor". Significa "mais reativo". Em um quad de corrida, isso é essencial. Em uma montagem cinematográfica, é um inconveniente. Escolha deliberadamente.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
