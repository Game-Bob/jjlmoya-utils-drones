import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculadora-relacao-empuxo-peso-drone-fpv';
const title = 'Calculadora de Relação Empuxo Peso e Telemetria de Voo para Drones FPV';
const description = 'Calcule o empuxo estático máximo, curva de acelerador não linear, forças G verticais, ponto de sustentação e tempo 0 a 100 para drones FPV.';

const ui = {
  title: 'Calculadora de Relação Empuxo Peso para Drones FPV',
  subtitle: 'Analise curvas de empuxo, resposta do acelerador em tempo real, forças G e categorias de voo',
  presetsHeader: 'Configurações Rápidas',
  customPreset: 'Personalizado',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Polegadas',
  freestyle5Preset: '6S Freestyle 5 Polegadas Pro',
  longrange7Preset: '6S Mountain LR 7 Polegadas',
  cinelifter8Preset: '8S Cinelifter Pesado X8',
  specsHeader: 'Especificações do Drone e Propulsão',
  auwGramsLabel: 'Peso Total com Bateria (g)',
  motorCountLabel: 'Configuração de Motores',
  thrustPerMotorLabel: 'Empuxo Estático Máximo por Motor (g)',
  propellerSizeLabel: 'Diâmetro da Hélice (polegadas)',
  propellerPitchLabel: 'Passo da Hélice (polegadas)',
  bladeCountLabel: 'Número de Pás',
  blade2Option: '2 Pás (Bipá - Máxima Eficiência)',
  blade3Option: '3 Pás (Tripá - Padrão Freestyle)',
  blade4Option: '4 Pás (Quadripá - Máxima Aderência)',
  throttleStickHeader: 'Simulador de Acelerador em Tempo Real',
  throttleStickLabel: 'Posição do Acelerador (%)',
  snapIdleLabel: 'Neutro (0%)',
  snapHoverLabel: 'Sustentação',
  snapCruiseLabel: 'Cruzeiro (50%)',
  snapPunchLabel: 'Potência Máxima (100%)',
  telemetryHeader: 'Telemetria de Voo FPV e Diagnóstico',
  twrRatioLabel: 'Relação Empuxo Peso (TWR)',
  hoverThrottleLabel: 'Ponto de Sustentação (Hover)',
  currentThrustLabel: 'Empuxo Atual Gerado',
  instantGForceLabel: 'Força G Vertical Instantânea',
  zeroToHundredLabel: 'Tempo 0 a 100 km/h em Punch',
  recommendedCamAngleLabel: 'Inclinação de Câmera FPV Recomendada',
  windResistanceLabel: 'Velocidade de Penetração ao Vento',
  totalMaxThrustLabel: 'Empuxo Estático Máximo Total',
  maxPitchAngleLabel: 'Ângulo Máximo de Inclinação',
  tuningHeader: 'Recomendações de Ajuste Betaflight e PID',
  tpaRecommendationLabel: 'Atenuação PID do Acelerador (TPA)',
  dynamicIdleLabel: 'Marcha Lenta Dinâmica Recomendada',
  propwashRiskLabel: 'Autoridade no Controle de Propwash',
  tierUnderpoweredTitle: 'Submotorizado ou Alto Risco de Deriva com Vento',
  tierUnderpoweredDesc: 'TWR inferior a 2 para 1 não oferece autoridade suficiente para recuperações rápidas. Indicado apenas para locais fechados.',
  tierCinematicTitle: 'Voo Cinemático Suave',
  tierCinematicDesc: 'TWR entre 2 para 1 e 4 para 1 garante aceleração progressiva e filmagens estáveis.',
  tierFreestyleTitle: 'Freestyle Esportivo e Ágil',
  tierFreestyleDesc: 'TWR entre 4 para 1 e 8 para 1 entrega respostas rápidas e ótima manobrabilidade acrobática.',
  tierAcroProTitle: 'Acrobacia de Alta Performance e Freestyle Bando',
  tierAcroProDesc: 'TWR entre 8 para 1 e 13 para 1 proporciona acelerações verticais explosivas e anulação imediata de propwash.',
  tierRacingExtremeTitle: 'Corridas Extremas de Drones',
  tierRacingExtremeDesc: 'TWR superior a 13 para 1 fornece a potência máxima exigida em pistas profissionais de FPV.',
  hudThrustCurveTitle: 'Curva de Resposta de Empuxo Não Linear',
  hudHoverMarker: 'Ponto de Hover',
  hudCurrentStickMarker: 'Acelerador Atual',
  hudGForceLabel: 'Forças G',
  hudTiltAngleLabel: 'Ângulo de Câmera',
  hudVectorPowerLabel: 'Telemetria de Potência em Tempo Real',
};

const faqItems = [
  {
    question: 'Qual é a relação empuxo peso ideal para um drone FPV freestyle?',
    answer: 'Para drones freestyle, um TWR entre 8 para 1 e 12 para 1 oferece a força necessária para frear mergulhos verticais e contornar curvas fechadas com precisão.',
  },
  {
    question: 'Como a curva não linear do acelerador afeta o voo pairado?',
    answer: 'Motores brushless geram força proporcional ao quadrado da rotação. O ponto de sustentação costuma ficar entre 20 e 35 por cento do curso do acelerador.',
  },
  {
    question: 'Por que o ângulo da câmera FPV depende do empuxo do drone?',
    answer: 'Drones mais potentes viajam em velocidades de cruzeiro mais altas com inclinação frontal acentuada. Os pilotos inclinam a câmera entre 35 e 50 graus para nivelar a visão.',
  },
  {
    question: 'Como o número de pás da hélice altera o comportamento do voo?',
    answer: 'Hélices bipás aumentam a autonomia e a velocidade final. As tripás equilibram aderência e resposta para freestyle, e as quadripás entregam controle imediato em curvas.',
  },
];

const howToSteps = [
  {
    name: 'Inserir o peso do drone ou selecionar um perfil',
    text: 'Informe o peso total pronto para voo incluindo bateria e câmera em gramas.',
  },
  {
    name: 'Configurar motores e hélices',
    text: 'Selecione a quantidade de motores, pás e o empuxo estático fornecido pelo fabricante.',
  },
  {
    name: 'Ajustar o acelerador em tempo real',
    text: 'Arraste o acelerador para verificar a força gerada, as forças G e a posição na curva de empuxo.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodinâmica da Relação Empuxo Peso em Drones FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A relação empuxo peso (TWR) é o principal indicador de aceleração e agilidade em multirotores. No voo acrobático FPV, dispor de folga de potência assegura manobras limpas e recuperações estáveis.',
  },
  {
    type: 'title',
    text: 'Classificação de Drones FPV e Métricas de Desempenho',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Plataforma', 'Peso AUW Típico', 'TWR Alvo', 'Acelerador em Sustentação', 'Tempo 0 a 100', 'Inclinação Câmera'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 para 1', '35 por cento', '1.20 s', '15 deg a 25 deg'],
      ['4S Freestyle 3.5"', '250g', '12.0 para 1', '24 por cento', '0.28 s', '35 deg a 45 deg'],
      ['6S Freestyle 5" Pro', '680g', '11.5 para 1', '25 por cento', '0.30 s', '35 deg a 50 deg'],
      ['6S Mountain LR 7"', '1150g', '8.3 para 1', '30 por cento', '0.45 s', '20 deg a 30 deg'],
      ['8S Cinelifter X8', '4200g', '6.1 para 1', '38 por cento', '0.70 s', '15 deg a 25 deg'],
    ],
  },
  {
    type: 'title',
    text: 'Curva de Resposta Não Linear e Dinâmica dos Motores',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Os motores elétricos entregam potência com comportamento exponencial. Os últimos 20 por cento do curso de aceleração concentram mais de 40 por cento do empuxo total.',
  },
  {
    type: 'list',
    items: [
      'Faixa de sustentação (20 a 35 por cento): Máxima precisão para voo rente ao chão.',
      'Faixa de cruzeiro (35 a 65 por cento): Voo estável com consumo moderado de bateria.',
      'Faixa de aceleração máxima (70 a 100 por cento): Máximo empuxo vertical com forças G elevadas.',
    ],
  },
  {
    type: 'title',
    text: 'Escolha de Hélices e Parametrização Betaflight',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Para drones com TWR superior a 10 para 1, recomenda-se configurar a atenuação Throttle PID Attenuation (TPA) no Betaflight para evitar vibrações indesejadas em linha reta.',
  },
  {
    type: 'tip',
    title: 'Dica de Ajuste Betaflight TPA',
    html: 'Ative o TPA a partir de 1250 ou 1350 com ganho de 0.65 para eliminar oscilações de alta velocidade.',
  },
];

const schemas: FpvDroneThrustToWeightRatioLocaleContent['schemas'] = [
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

export const content: FpvDroneThrustToWeightRatioLocaleContent = {
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
