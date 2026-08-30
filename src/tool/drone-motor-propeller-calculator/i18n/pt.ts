import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'calculadora-motor-helice-drone';
const title = 'Calculadora de Motor e Hélice para Drones';
const description = 'Estime o empuxo do motor, RPM sob carga, velocidade de passo da hélice, potência e corrente a partir de KV, tensão da bateria, geometria e peso do drone.';

const ui = {
  "presetsHeader": "Escolha um perfil de voo",
  "presetTinyCruiser": "Micro cruiser 3.5 polegadas",
  "presetFreestyle": "Freestyle 5 polegadas",
  "presetLongRange": "Long range 7 polegadas",
  "presetCinelifter": "Cinelifter 8 motores",
  "unitHeader": "Unidades de exibição",
  "metricUnit": "Métrico",
  "imperialUnit": "Imperial",
  "setupHeader": "Propulsão e chassi",
  "motorKvLabel": "Constante do motor KV (RPM/V)",
  "batteryVoltageLabel": "Tensão da bateria",
  "propDiameterLabel": "Diâmetro da hélice",
  "propPitchLabel": "Passo da hélice",
  "bladeCountLabel": "Número de pás",
  "motorCountLabel": "Número de motores",
  "droneWeightLabel": "Peso pronto para voar",
  "benchDataHeader": "Ponto de teste do fabricante",
  "benchThrustLabel": "Empuxo por motor",
  "benchVoltageLabel": "Tensão de teste",
  "optionalLabel": "Opcional",
  "twoBlades": "2 pás",
  "threeBlades": "3 pás",
  "fourBlades": "4 pás",
  "twoMotors": "2 motores",
  "fourMotors": "4 motores",
  "sixMotors": "6 motores",
  "eightMotors": "8 motores",
  "resultsHeader": "Empuxo e sustentação estática",
  "estimatedLabel": "Estimativa física teórica.",
  "benchBasedLabel": "Ajustado com banco de testes.",
  "loadedRpmLabel": "Velocidade sob carga",
  "pitchSpeedLabel": "Velocidade teórica de avanço",
  "thrustPerMotorLabel": "Empuxo por motor",
  "totalThrustLabel": "Empuxo estático total",
  "totalPowerLabel": "Potência estimada",
  "totalCurrentLabel": "Corrente estimada",
  "thrustMarginLabel": "Margem de elevação",
  "hoverThrottleLabel": "Acelerador em pairar",
  "sceneCaption": "velocidade da hélice sob carga",
  "underpoweredStatus": "Margem baixa",
  "workableStatus": "Margem operacional",
  "headroomStatus": "Excelente margem",
  "underpoweredAdvice": "O empuxo total é inferior ao dobro do peso da aeronave. Espere autoridade de recuperação limitada e pouca tolerância ao vento.",
  "workableAdvice": "Reserva prática para voo normal. Verifique a temperatura dos motores e ESCs após pairar antes de confiar no cálculo.",
  "headroomAdvice": "Generosa reserva de empuxo estático. Melhora a autoridade de controle mas exige mais corrente dos ESCs.",
  "sourceNote": "O ponto de teste calibra apenas o empuxo. Potência e corrente continuam estimativas teóricas.",
  "modelSourceNote": "Sem dados de bancada. O empuxo utiliza o modelo físico teórico.",
  "manufacturerNote": "Use preferencialmente dados de bancada medidos com o mesmo motor e hélice.",
  "modelNote": "Empuxo, potência e corrente são estimativas. Resultados reais dependem da densidade do ar e perdas.",
  "safetyNote": "Nunca substitua esta calculadora por um teste real em bancada. Confirme os limites elétricos antes de voar.",
  "thrustAxisLabel": "Direção do empuxo",
  "weightAxisLabel": "Peso do drone",
  "clearBenchData": "Limpar ponto de teste"
};

const faq = [
  {
    "question": "O que esta calculadora de motor e hélice de drone estima?",
    "answer": "Estima RPM sob carga, velocidade teórica de avanço, empuxo por motor e total, potência e corrente a partir do KV, tensão, geometria da hélice e peso."
  },
  {
    "question": "Como combinar motor e hélice para drone?",
    "answer": "Comece pelas recomendações do fabricante. Compare o empuxo total com o peso pronto para voar e verifique em bancada antes de voar."
  },
  {
    "question": "Por que o ponto de teste do fabricante é mais preciso?",
    "answer": "Ele considera a geometria real e perdas da hélice. A ferramenta ajusta esse valor para a tensão selecionada."
  },
  {
    "question": "Como o tamanho da hélice afeta o empuxo?",
    "answer": "O empuxo estático depende fortemente do diâmetro e rotação. Uma hélice maior move mais ar mas exige mais torque do motor."
  },
  {
    "question": "Esta calculadora garante segurança no voo?",
    "answer": "Não. É uma ferramenta de projeto. Verifique corrente e temperatura reais em bancada de teste antes do voo."
  }
];

const howTo = [
  {
    "name": "Escolher um perfil de voo",
    "text": "Selecione um preset para carregar valores iniciais coerentes para KV, tensão, hélice e peso."
  },
  {
    "name": "Inserir dados do chassi e hélice",
    "text": "Digite o peso e as especificações de motor e hélice em unidades métricas ou imperiais."
  },
  {
    "name": "Adicionar ponto de medição",
    "text": "Se possuir dados de bancada, insira o empuxo medido e a tensão de teste para calibrar o modelo."
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Princípios de combinação entre motor e hélice de drone',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O par motor hélice equilibra velocidade de rotação, diâmetro, passo, tensão e torque disponível. Esta ferramenta calcula o empuxo estático e o consumo elétrico.',
  },
  {
    type: 'title',
    text: 'Resultados exibidos',
    level: 2,
  },
  {
    type: 'table',
    headers: ["Resultado","Significado"],
    rows: [["Velocidade sob carga","RPM estimado a vazio reduzido pelo fator de carga"],["Empuxo estático","Empuxo por motor e elevação total acumulada"],["Margem de elevação","Empuxo estático total comparado ao peso pronto para voar"],["Potência e corrente","Demanda elétrica estimada sob a tensão selecionada"]],
  },
  {
    type: 'title',
    text: 'Como usar a calculadora',
    level: 2,
  },
  {
    type: 'list',
    items: ["Inserir KV do motor e tensão da bateria.","Escolher diâmetro, passo, número de pás e motores.","Adicionar dados de bancada do fabricante se disponíveis.","Verificar temperatura e corrente em bancada antes do voo."],
  },
  {
    type: 'title',
    text: 'Importância de dados de bancada',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'O empuxo da hélice depende da geometria e densidade do ar. Dados de teste medidos oferecem a melhor calibração. Use o resultado para comparar combinações nas mesmas condições, considerando peso, tensão sob carga, controlador e instalação. Meça corrente e temperatura em bancada e ajuste a configuração gradualmente antes do primeiro voo. Não transfira automaticamente um valor de outro modelo: bateria, montagem e eficiência real também alteram o resultado.',
  },
  {
    type: 'tip',
    title: 'Plano de teste',
    html: 'Realize um teste em bancada medindo corrente e temperatura antes do primeiro voo.',
  },
];

const schemas: DroneMotorPropellerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
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
    step: howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMotorPropellerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography: BIBLIOGRAPHY_ITEMS,
  howTo,
  schemas,
};
