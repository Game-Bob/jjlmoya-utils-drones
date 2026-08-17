import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'calculadora-tempo-voo-drone';
const title = 'Calculadora Tempo de Voo Drone para Estimativa Autonomia LiPo LiIon';
const description = 'Calcule quanto tempo o seu drone pode voar com base na capacidade mAh e no consumo. Otimize as suas baterias LiPo para voos seguros e máxima duração.';

const faqItems = [
  {
    question: 'Por que o tempo de voo real é menor que o calculado?',
    answer: 'A calculadora considera um consumo constante. Manobras bruscas, ventos contrários e desgaste da bateria podem reduzir o tempo de voo real em até 30%.',
  },
  {
    question: 'Com que tensão devo pousar o drone?',
    answer: 'Idealmente, pouse quando a tensão cair para 3,5 V - 3,6 V por célula, em repouso. Isso corresponde aos 20% de capacidade restante recomendados.',
  },
  {
    question: 'As baterias LiPo ou Li-Ion são melhores para drones?',
    answer: 'As LiPo oferecem alta potência instantânea, ideal para corridas e acrobacias. As células Li-Ion têm maior autonomia, mas menor potência de saída, sendo ideais para voos longos e estáveis.',
  },
  {
    question: 'Como o número de células (S) afeta o tempo de voo?',
    answer: 'Mais células aumentam a tensão e a potência, mas também o peso. Se os motores forem otimizados para essa tensão, podem ser mais eficientes, mas o número de células por si só não garante mais tempo de voo.',
  },
];

const howToSteps = [
  {
    name: 'Identifique a capacidade',
    text: 'Verifique a etiqueta da bateria e procure o valor em mAh (por exemplo, 1500, 2200 ou 4500).',
  },
  {
    name: 'Estime o consumo de corrente',
    text: 'Introduza o consumo médio de corrente do drone. Pode encontrá-lo na telemetria OSD após um voo de teste.',
  },
  {
    name: 'Ajuste a margem de segurança',
    text: 'Recomendamos deixar 20% de reserva, definindo o valor para 80%, para proteger a bateria e criar uma margem para aterragem.',
  },
  {
    name: 'Veja o resultado',
    text: 'Veja o tempo exato, em minutos e segundos, durante o qual pode permanecer no ar com segurança.',
  },
];

const schemas: DroneFlightTimeLocaleContent['schemas'] = [
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


export const content: DroneFlightTimeLocaleContent = {
  slug,
  title,
  description,
  ui: {
    batterySpecs: 'Especificações da Bateria',
    capacity: 'Capacidade',
    voltage: 'Voltagem (Células S)',
    safetyMargin: 'Margem de Segurança',
    landingHint: 'Aterrar com 3.5V - 3.7V por célula.',
    consumptionDynamics: 'Dinâmica de Consumo',
    averageConsumption: 'Consumo Médio',
    powerWatts: 'Potência (Watts)',
    efficiencyHint: 'Ao alterar Amperes, os Watts são recalculados de acordo com a voltagem S.',
    estimatedEfficiency: 'Eficiência Estimada',
    typicalEfficiencyHint: 'Típico: 4-6 (Racing), 8-12 (Cinematic/Long Range).',
    safeFlight: 'Voo Seguro',
    totalEnergy: 'Energia Total',
    theoreticalTime: 'Tempo Teórico (0%)',
    co2Footprint: 'Pegada de CO2',
    autonomyChart: 'Gráfico de Autonomia',
    chartSubtitle: 'Amperes (A) vs. Tempo (min)',
    chartLabel: 'Minutos',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Tempo de Voo para Drones: Guia Completo de Autonomia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A autonomia é, provavelmente, o fator mais crítico no design e operação de qualquer aeronave não tripulada. Seja um piloto de drones FPV de corrida, um profissional de fotografia aérea ou um entusiasta de modelos de longo alcance, saber com precisão quanto tempo o seu equipamento pode permanecer no ar é vital para a segurança e o sucesso da missão. A nossa <strong>calculadora de tempo de voo</strong> utiliza as variáveis fundamentais de capacidade da bateria e consumo de corrente para lhe oferecer uma estimativa realista e segura.',
    },
    {
      type: 'title',
      text: 'Capacidade da Bateria: mAh Explicados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A capacidade de uma bateria é habitualmente medida em miliamperes-hora (mAh). Este valor indica quanta carga elétrica a bateria é capaz de armazenar. Por exemplo, uma bateria de 1500 mAh pode fornecer teoricamente 1500 miliamperes durante uma hora completa. No mundo dos drones, onde os consumos são extremamente elevados, costumamos falar em Amperes (A). 1000 mAh equivale exatamente a 1 Ah (Ampere-hora).',
    },
    {
      type: 'paragraph',
      html: 'No entanto, a capacidade bruta não é o único fator. A voltagem (determinada pelo número de células ou \'S\') influencia diretamente a potência total (Watts), mas para o cálculo do tempo baseado no consumo dos motores, a relação Ah/Amperes é a métrica mais direta e utilizada pelos engenheiros de voo.',
    },
    {
      type: 'title',
      text: 'O Consumo de Corrente: Amperagem em Voo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O consumo dos motores é a variável que mais flutua durante um voo. Não é a mesma coisa manter um drone em estacionário (hover) que realizar manobras acrobáticas agressivas. Cada motor e hélice tem uma curva de eficiência. Quando acelera ao máximo, a amperagem dispara, reduzindo drasticamente o tempo de vida da bateria.',
    },
    {
      type: 'list',
      items: [
        'Voo em Estacionário: O consumo é mínimo e constante, ideal para fotografia.',
        'Voo de Cruzeiro: O consumo aumenta ligeiramente devido à resistência aerodinâmica.',
        'Voo Agressivo/FPV: Os picos de corrente podem triplicar o consumo médio em questão de segundos.',
        'Peso do Drone: Cada grama adicional requer mais rotações do motor para gerar impulso, elevando a amperagem.',
      ],
    },
    {
      type: 'title',
      text: 'Regra de Segurança dos 80%: Proteger a Química LiPo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Descarregar uma bateria LiPo (Polímero de Lítio) até 0% da sua capacidade é a forma mais rápida de a destruir e, pior ainda, de provocar um acidente. Quimicamente, as células sofrem danos irreversíveis se a sua voltagem cair abaixo de um limite crítico (normalmente 3.0V - 3.2V por célula).',
    },
    {
      type: 'paragraph',
      html: 'Por isso, aplicamos sempre uma <strong>regra de margem de segurança</strong>. A nossa calculadora permite ajustar este valor, mas o recomendável é aterrar quando ainda resta 20% de carga. Isto não só prolonga a vida útil das suas dispendiosas baterias por centenas de ciclos, mas também lhe garante uma reserva de potência vital em caso de rajadas de vento inesperadas ou se precisar de abortar a aterragem e tentar novamente.',
    },
    {
      type: 'tip',
      html: 'As baterias dos drones são muito sensíveis ao frio. No inverno, a resistência interna da LiPo aumenta, o que provoca uma queda de voltagem mais rápida. Aqueça sempre as suas baterias antes de descolar se a temperatura ambiente for inferior a 15 graus.',
    },
    {
      type: 'title',
      text: 'Fórmula Matemática do Voo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Embora a nossa ferramenta faça o trabalho pesado por si, é interessante conhecer a lógica por trás do cálculo. A fórmula básica é:',
    },
    {
      type: 'paragraph',
      html: '<strong>Tempo (min) = ((Capacidade mAh / 1000) * Factor de Segurança) / Consumo Amperes * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Por exemplo, se tiver uma bateria de 2200 mAh, quiser aterrar aos 20% (segurança 0.8) e o seu drone consumir uma média de 15 Amperes, o cálculo seria: (2.2 * 0.8) / 15 * 60 = 7.04 minutos de voo seguro.',
    },
    {
      type: 'title',
      text: 'Otimização do Peso e Eficiência',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existe um ponto de retorno decrescente ao adicionar baterias maiores. Dobrar a capacidade da bateria não dobra o tempo de voo, já que a própria bateria adiciona peso. Esse peso extra exige que os motores girem mais rápido e, portanto, consumam mais corrente. Em algum momento, o peso adicional consome mais energia do que a que fornece, reduzindo a eficiência geral do sistema.',
    },
    {
      type: 'paragraph',
      html: 'Os pilotos experientes procuram o equilíbrio perfeito entre o <em>Disc Loading</em> (carga do disco das hélices) e a capacidade da bateria para maximizar o que chamamos de "tempo útil de missão".',
    },
    {
      type: 'title',
      text: 'Diferenças entre Tipos de Drones',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Micro Drones (Whoops):</strong> Têm consumos de apenas 2-5 Amperes, mas as suas baterias são de 300-500 mAh. O tempo costuma ser curto (3-4 min) devido à baixa inércia e alta rotação.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drones de Corrida 5":</strong> Consumos brutais em corrida (até 120A em picos), o que esgota uma bateria de 1300 mAh em apenas 2 minutos de pura adrenalina.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drones Long Range:</strong> Otimizados para o GPS e voo eficiente. Usam células de Ião-Lítio (Li-Ion) que têm mais densidade energética do que as LiPo, permitindo voos de 30 a 60 minutos com amperagens muito contidas.',
    },
    {
      type: 'tip',
      html: 'Mudar para umas hélices com menos passo (pitch) pode aumentar o seu tempo de voo à custa da velocidade máxima e resposta. É o ajuste mais barato e eficaz para ganhar 10-15% de autonomia.',
    },
    {
      type: 'title',
      text: 'Manutenção e Armazenamento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para que os cálculos desta ferramenta sejam precisos, as suas baterias devem estar em bom estado. Uma bateria com alta resistência interna aquecerá em excesso e "mentirá" sobre a sua capacidade real. Guarde sempre as suas baterias em voltagem de armazenamento (3.8V-3.85V por célula) se não for voar por mais de 48 horas.',
    },
    {
      type: 'paragraph',
      html: 'Em conclusão, a gestão da energia é a arte de equilibrar a física, a química e a matemática. Use a nossa calculadora regularmente para planear as suas sessões de voo e nunca se esqueça de que, no ar, o tempo é o recurso mais valioso. Bons voos e aterragens seguras!',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
