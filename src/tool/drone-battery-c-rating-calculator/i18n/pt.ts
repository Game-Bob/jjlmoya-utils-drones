import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculadora-taxa-c-bateria-lipo-drone';
const title = 'Calculadora de Taxa C de Bateria LiPo e Descarga Contínua para Drones';
const description = 'Calcule a corrente de descarga contínua real, taxa C realista, queda de tensão e segurança de voo para baterias LiPo de drones com base na resistência interna e consumo dos motores.';

const ui = {
  title: 'Calculadora de Taxa C de Bateria LiPo para Drones',
  subtitle: 'Análise de descarga contínua real exigência de pico e sag de tensão para multirotores',
  lipoSpecsHeader: 'Especificações da Bateria',
  capacityLabel: 'Capacidade (mAh)',
  claimedCRatingLabel: 'Taxa C Anunciada',
  cellCountLabel: 'Número de Células (Série S)',
  chemistryLabel: 'Química da Bateria',
  internalResistanceLabel: 'Resistência Interna por Célula (mΩ)',
  quadSpecsHeader: 'Consumo do Drone',
  motorCountLabel: 'Número de Motores',
  peakMotorCurrentLabel: 'Corrente de Pico por Motor (Ampères)',
  auxCurrentLabel: 'Consumo Auxiliar (VTX FC Câmera) (Ampères)',
  presetSelectLabel: 'Ajustes Rápidos',
  customPreset: 'Personalizado',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5 Polegadas Freestyle',
  cinewhoopPreset: '4S 3 Polegadas CineWhoop',
  longRange7Preset: '6S 7 Polegadas Long Range',
  racing5Preset: '6S 5 Polegadas Corrida',
  resultsHeader: 'Análise de Desempenho e Potência',
  claimedMaxCurrentLabel: 'Corrente Máxima Anunciada',
  realisticCRatingLabel: 'Taxa C Contínua Realista',
  realisticMaxCurrentLabel: 'Corrente Contínua Realista',
  totalPeakDrawLabel: 'Consumo de Pico Total',
  voltageSagLabel: 'Queda de Tensão Estimada',
  sagNominalVoltageLabel: 'Tensão Nominal Sob Carga',
  flightTimeFullThrottleLabel: 'Autonomia a Acelerador Máximo',
  flightTimeHoverLabel: 'Autonomia Estimada em Estacionário',
  safetyStatusLabel: 'Diagnóstico de Segurança',
  statusOptimalTitle: 'Bateria Segura e Ótima',
  statusOptimalDesc: 'A bateria fornece a corrente de pico com facilidade sem aquecimento excessivo nem grandes quedas de tensão. Longa vida útil das células garantida.',
  statusWarningTitle: 'Estresse Térmico e de Tensão Moderado',
  statusWarningDesc: 'O consumo de pico está próximo do limite real da bateria. Espere uma leve queda de tensão em acelerações bruscas.',
  statusDangerTitle: 'Alto Risco de Sobrecarga e Sag de Tensão',
  statusDangerDesc: 'O consumo de pico supera a capacidade real da bateria. Alto risco de superaquecimento, queda severa de tensão e degradação precoce.',
  lipoVisualizerTitle: 'Visualizador de Estado LiPo em Tempo Real',
  cellVoltageLabel: 'Tensão por Célula',
  batteryHealthLabel: 'Estresse da Bateria',
  burstRatingRequiredLabel: 'Taxa C de Burst Requerida',
  currentRatioLabel: 'Relação de Carga de Potência',
};

const faqItems = [
  {
    question: 'O que é a taxa C numa bateria LiPo de drone?',
    answer: 'A taxa C representa a velocidade máxima de descarga contínua em relação à capacidade da bateria. Uma bateria de 1500mAh com 100C pode teoricamente fornecer 150 Ampères.',
  },
  {
    question: 'Por que a taxa C anunciada é muitas vezes superior à real?',
    answer: 'Os fabricantes costumam anunciar taxas de pico de marketing. A descarga contínua real depende diretamente da resistência interna de cada célula.',
  },
  {
    question: 'Como a resistência interna afeta o sag de tensão e o calor?',
    answer: 'Uma alta resistência interna funciona como um resistor indesejado. Ao exigir alta corrente, causa queda de tensão e dissipa calor em excesso.',
  },
  {
    question: 'Como posso evitar o sag de tensão em voos de freestyle?',
    answer: 'Utilize células de baixa resistência interna, mantenha uma margem de segurança de pelo menos 15 por cento acima do consumo de pico e não voe abaixo de 3.5V por célula.',
  },
];

const howToSteps = [
  {
    name: 'Selecionar Ajuste Rápido ou Inserir Dados',
    text: 'Insira a capacidade em mAh, taxa C anunciada, número de células em série e resistência interna média por célula.',
  },
  {
    name: 'Configurar o Consumo dos Motores',
    text: 'Especifique a quantidade de motores, corrente de pico por motor a acelerador máximo e consumo auxiliar.',
  },
  {
    name: 'Verificar o Diagnóstico de Segurança',
    text: 'Compare a corrente contínua realista com o consumo de pico do drone para garantir um voo estável.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Compreendendo a Taxa C e a Entrega Real de Potência em Baterias LiPo',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Escolher a bateria LiPo adequada para um drone FPV requer relacionar a capacidade, a taxa C e o consumo de corrente dos motores. Embora os fabricantes anunciem taxas de 100C ou mais, a capacidade real de descarga contínua é limitada pela resistência interna e dissipação térmica. Esta calculadora avalia a amperagem contínua realista com margens reais.',
  },
  {
    type: 'title',
    text: 'Tabela Comparativa de Químicas de Baterias RC',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Química', 'Tensão Nominal', 'Tensão Máxima', 'Densidade Energética', 'Descarga de Pico', 'Uso Recomendado'],
    rows: [
      ['LiPo (Padrão)', '3.7V', '4.20V', 'Alta', '100C - 150C', 'Drones FPV de Corrida e Freestyle 5"'],
      ['LiHV (Alta Tensão)', '3.8V', '4.35V', 'Muito Alta', '80C - 120C', 'TinyWhoops e Micro Quads'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Máxima', '15C - 35C', 'Drones Long Range de 7"'],
      ['LiFePO4', '3.3V', '3.65V', 'Moderada', '30C - 50C', 'Estações de Carga de Campo'],
    ],
  },
  {
    type: 'title',
    text: 'Impacto do Sag de Tensão e da Resistência Interna',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O sag de tensão é a queda repentina de voltagem durante acelerações fortes. Quando a corrente passa pela resistência interna, parte da energia se converte em calor em vez de empuxo. Uma bateria desgastada causará avisos de bateria fraca no OSD.',
  },
  {
    type: 'list',
    items: [
      'Baixa Resistência Interna (1-4 mΩ por célula): Ótima resposta, sag mínimo e temperatura baixa.',
      'Resistência Interna Moderada (5-10 mΩ por célula): Desempenho padrão para freestyle.',
      'Alta Resistência Interna (>12 mΩ por célula): Perda notável de potência, sag severo e aquecimento rápido.',
    ],
  },
  {
    type: 'title',
    text: 'Otimização de Bateria para Freestyle Corrida e Long Range',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Cada estilo de voo exige perfis de energia diferentes. Drones de 5 polegadas para freestyle geram picos acima de 120 Ampères, enquanto drones de 7 polegadas buscam eficiência constante. O ajuste correto evita desligamentos repentinos no ar.',
  },
  {
    type: 'tip',
    title: 'Dica de Manutenção LiPo',
    html: 'Guarde sempre suas baterias LiPo na tensão de storage de 3.80V a 3.85V por célula quando não estiver em uso. Deixá-las totalmente carregadas por mais de 48 horas aumenta a resistência interna permanentemente.',
  },
];

const schemas: DroneBatteryCRatingCalculatorLocaleContent['schemas'] = [
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
      priceCurrency: 'BRL',
    },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneBatteryCRatingCalculatorLocaleContent = {
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
