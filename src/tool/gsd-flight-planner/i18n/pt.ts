import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'planejador-voo-gsd';
const title = 'Planejador de Voo GSD: Calculadora de Distância de Amostragem no Solo';
const description = 'Calcule a Distância de Amostragem no Solo (GSD) para missões de fotogrametria. Suporte para DJI, Autel e câmeras personalizadas. Planejamento de voo em tempo real com indicadores de qualidade visual.';

const faqItems = [
  {
    question: 'O que é a Distância de Amostragem no Solo (GSD)?',
    answer: 'A GSD é a distância no solo representada por um pixel na sua imagem. Uma GSD menor significa maior resolução e detalhe. Por exemplo, uma GSD de 1 cm/px permite resolver detalhes de até 1 centímetro, o que é fundamental para levantamentos topográficos.',
  },
  {
    question: 'Como encontro as especificações da câmera do meu drone?',
    answer: 'Consulte o manual do seu drone para saber as dimensões do sensor e a distância focal. Alternativamente, utilize nossos preajustes de câmera para modelos populares como o DJI Mavic 3E ou Autel EVO II. Para câmeras personalizadas, meça o tamanho do sensor nas especificações da sua lente.',
  },
  {
    question: 'De qual GSD eu preciso para diferentes tipos de missões?',
    answer: 'Topografia de alta precisão: 1-2 cm/px. Cartografia padrão: 2-5 cm/px. Inspeção e monitoramento: 5-10 cm/px. Levantamentos visuais: 10+ cm/px. Escolha com base nos requisitos de precisão do seu projeto.',
  },
  {
    question: 'O que é a sobreposição de imagem e por que é importante?',
    answer: 'A sobreposição é a porcentagem de área que aparece em fotos consecutivas. Uma sobreposição alta (60-80%) garante uma cobertura completa e melhora a qualidade do modelo 3D. A sobreposição frontal afeta o espaçamento das fotos; a sobreposição lateral afeta o número de linhas de voo.',
  },
  {
    question: 'Como calculo a altitude de voo ideal?',
    answer: 'Utilize esta calculadora: GSD desejada × distância focal ÷ largura do sensor = altitude. A calculadora faz isso automaticamente e mostra a altitude máxima segura para manter a precisão desejada e evitar o desfoque por movimento.',
  },
];

const howToSteps = [
  {
    name: 'Selecionar ou Configurar Câmera',
    text: 'Escolha entre modelos pré-configurados (DJI Mavic 3E, Autel EVO II, etc.) ou insira as dimensões do sensor e a distância focal manualmente. Os preajustes carregam todos os parâmetros instantaneamente.',
  },
  {
    name: 'Definir Altitude de Voo',
    text: 'Use o controle deslizante de altitude para ajustar a altura acima do nível do solo (AGL). Observe como a GSD é atualizada em tempo real para ver como a altitude afeta a resolução da imagem.',
  },
  {
    name: 'Definir Requisitos de Sobreposição',
    text: 'Estabeleça as porcentagens de sobreposição frontal e lateral. Uma sobreposição maior garante uma cobertura completa, mas aumenta o tempo da missão e o número de imagens.',
  },
  {
    name: 'Revisar Resultados e Exportar',
    text: 'Verifique a GSD, a área de cobertura e a classificação de precisão. Gere um relatório rápido para anexar ao seu plano de voo oficial.',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: 'Configuração',
    cameraSelection: 'Seleção de Câmera',
    manualMode: 'Modo Manual',
    sensorConfig: 'Configuração do Sensor',
    width: 'Largura',
    height: 'Altura',
    focalLength: 'Distância Focal',
    imageResolution: 'Resolução da Imagem',
    w: 'L',
    h: 'A',
    px: 'px',
    altitudeAgl: 'Altitude (AGL)',
    overlapSettings: 'Configuração de Sobreposição',
    forward: 'Frontal',
    lateral: 'Lateral',
    missionArea: 'Área da Missão',
    totalAreaToSurvey: 'Área Total a Mapear',
    hectareHint: '1 ha = 10.000 m²',
    inverseCalc: 'Cálculo Inverso',
    targetGsd: 'GSD Desejada',
    maxAltitude: 'Altitude Máxima',
    reset: 'Resetar',
    results: 'Resultados',
    gsdResult: 'Distância de Amostragem no Solo',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Alta Prec.',
    standard: 'Padrão',
    inspection: 'Inspeção',
    visual: 'Visual',
    coveragePerImage: 'Cobertura por Imagem',
    area: 'Área',
    spacing: 'Espaçamento',
    flightDir: 'Voo →',
    missionMetrics: 'Métricas da Missão',
    images: 'Imagens',
    shots: 'fotos',
    flightLines: 'Linhas de Voo',
    lines: 'linhas',
    flightTime: 'Tempo de Voo',
    min: 'min',
    dataVolume: 'Volume de Dados',
    gb: 'GB',
    copyShareLink: 'Copiar Link',
    downloadReport: 'Baixar Relatório',
    copiedToClipboard: 'Copiado!',
    metric: 'Métrico',
    imperial: 'Imperial',
    classHighPrecision: 'Topografia de Alta Precisão',
    classStandard: 'Cartografia Padrão',
    classInspection: 'Inspeção e Monitoramento',
    classVisual: 'Levantamento Visual',
    ultraHighResAlert: 'Resolução ultra-alta: certifique-se de ter armazenamento e poder de processamento suficientes',
    lowOverlapAlert: 'Sobreposição frontal abaixo de 60%: pode afetar a qualidade do modelo 3D',
    largeDatasetAlert: 'Conjunto de datos muito grande: considere dividir em vários voos',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'Planejador de Voo GSD: A Calculadora Completa de Fotogrametria',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>Distância de Amostragem no Solo (GSD)</strong> é a métrica mais importante na fotogrametria com drones. Um erro de cálculo pode desperdiçar um dia inteiro de voo e custar caro em perda de produtividade. Esta calculadora elimina esse risco.',
    },
    {
      type: 'title',
      text: 'Por que a GSD é importante para profissionais',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Seja você um agrimensor, criador de modelos 3D ou monitor de infraestrutura, a GSD determina o nível de detalhe que você pode capturar. Uma missão de 1 cm/px captura detalhes que uma de 5 cm/px perde. Mas voar baixo demais desperdiça bateria e estende o tempo da missão desnecessariamente.',
    },
    {
      type: 'title',
      text: 'GSD por tipo de missão',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Topografia de Alta Precisão (1-2 cm/px):</strong> Precisão de grau topográfico para parcelas, minas e projetos de engenharia.',
        '<strong>Cartografia Padrão (2-5 cm/px):</strong> Ortomosaicos, monitoramento agrícola e mapas de propósito geral.',
        '<strong>Inspeção e Monitoramento (5-10 cm/px):</strong> Inspeção de edifícios, revisão de linhas elétricas e detecção de mudanças.',
        '<strong>Levantamentos Visuais (10+ cm/px):</strong> Reconhecimento de grandes áreas e avaliação visual.',
      ],
    },
    {
      type: 'title',
      text: 'A Fórmula GSD',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Altitude × Largura do Sensor) / (Distância Focal × Largura da Imagem) × 100</code><br/>Esta calculadora cuida da matemática. Você foca na missão.',
    },
    {
      type: 'title',
      text: 'Sobreposição: Por que 60-80% é o ponto ideal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma sobreposição baixa (20-40%) economiza bateria, mas arrisca lacunas na cobertura. Uma sobreposição alta (80%+) garante cobertura total, mas estende o tempo. O <strong>intervalo de 60-80%</strong> é o padrão profissional: garante uma reconstrução 3D completa sem redundância excessiva.',
    },
    {
      type: 'title',
      text: 'Planeje missões melhores com dados reais',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antes de cada voo, use esta calculadora para determinar: a altitude exata para a GSD necessária, quantas fotos você precisará, o tempo total da missão e se há risco de desfoque por movimento. Com esses dados, você executará missões precisas e evitará erros dispendiosos.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
