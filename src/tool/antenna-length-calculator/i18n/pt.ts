import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'calculadora-comprimento-antena';
const title = 'Calculadora de Comprimento de Antena RF para Dipolos e Chicotes FPV';
const description = 'Calcule a medida exata para as suas antenas de 868MHz, 2.4GHz e 5.8GHz. Melhore o alcance do seu drone e evite queimar o seu transmissor com um SWR otimizado.';

const faqItems = [
  {
    question: 'Por que o meu comprimento condeno assim tão seriamente o meu vtx?',
    answer: 'Porque sem haver compatibilidade o material emite e recolhe a uma frequência inversa para dar conta desse estrago numa explosão rápida de queimas caloríficas ao invés da difusão na frequência adequada.',
  },
  {
    question: 'Fator Velocidade pode me desorientar?',
    answer: 'Pode sem teres tu conta, porque o número não é sempre uniforme. A constante a memorizar será o material de condutividade - e o quão as coisas lentas percorrem com 5% a menos em espumas de proteções como em cobre normal ou o que preferimos com até 95%.',
  },
  {
    question: 'Eu necessito mesmo apenas das Antenas a chicotes por causa dos meus drones minusculos?',
    answer: 'Não podias desmerecer desse tamanho da conveniência. Contudo por serem 1/4 da precisão total face à antena ao tamanho pleno que cobre uma polarização do dipolo é importante saberes regular onde essa terra plana e a malha vai repor no plano de rádio.',
  },
  {
    question: 'O grau no diâmetro e as suas qualidades perante o fio escolhidos altera?',
    answer: 'Total e perfeitamente, dado ser cabos muito grossos ajudam sim no aumento tolerável numa faixa de transmissão ou canal do recetor... Não fujas das limitações do usual cabo awg em 22 de espessura.',
  },
];

const howToSteps = [
  {
    name: 'Regulação por Defasagem na Casa Alvo das Medidas (Mhz)',
    text: 'Digite o campo ao selecionar, nos mais rotineiros do dia-a-dia do passatempo terás uns rápidos menus nas principais das faixas (2.4, 5.8g.',
  },
  {
    name: 'Classicamente Definindo Antena (Tipologia de Base Radiofrequência)',
    text: 'No seu dipolo preferido irá criar a base com os seus elementos radiantes (1/2 lambda ou em quarto de espinha da onda chicote na 1/4 lambda).',
  },
  {
    name: 'Adequar Constantes Ao Seu Fator Condutor (Isolamento, Fio Físico Nuno)',
    text: 'Terá as percentagens no Vf como ponto assalariar perante cada particularidade nos compostos no seu plano.',
  },
  {
    name: 'Fase Fria dos Cortes: Mande Brasa Sem Desculpas e Afie bem',
    text: 'Usa "Medidas braço/extremidade," retira da matemática desde a soldagem e nunca do meio fio',
  },
];

const schemas: AntennaLengthCalculatorLocaleContent['schemas'] = [
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

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Referências Bibliográficas',
  ui: {
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Referências Bibliográficas',
    signalParameters: 'Parâmetros de Sinal',
    antennaType: 'Tipo de Antena',
    dipole: 'Dipolo (1/2 λ)',
    whip: 'Chicote (1/4 λ)',
    conductorMedium: 'Meio Condutor',
    totalLength: 'Comprimento Total',
    branchLength: 'Comprimento por Braço',
    secondaryResonance: 'Pontos de Ressonância Secundários',
    swrIdeal: 'SWR Ideal',
    impedance: 'Impedância',
    criticalNotice: 'Aviso Crítico',
    criticalNoticeText: 'Uma antena cortada incorretamente gera um SWR (ROE) elevado que pode sobreaquecer e destruir as etapas de saída de potência do seu transmissor em segundos.',
    dynamicScheme: 'Esquema Dinâmico (mm)',
    harmonicLabel: 'Harmónica',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Cobre Despido (0.95)',
    materialPvcInsulated: 'Cabo Isolado PVC (0.92)',
    materialSolidRod: 'Varão Sólido (0.97)',
    materialCoaxial: 'Cabo Coaxial (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Por que o comprimento da sua Antena de Radiofrequência é Crítico?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se alguma vez se perguntou por que as antenas de drones de corrida (FPV), comandos de longo alcance (ELRS/Crossfire) ou até mesmo o seu router Wi-Fi têm comprimentos tão específicos, a resposta reside na física da ressonância. Uma antena não é apenas um pedaço de fio condutor; é um componente que deve estar "em sintonia" com a frequência da onda eletromagnética com que está a lidar.',
    },
    {
      type: 'paragraph',
      html: 'Ao fabricar a sua própria antena, seja um <strong>dipolo</strong> para 868MHz ou uma <strong>antena chicote</strong> para 5.8GHz, a precisão mede-se em milímetros. Um erro de apenas 2 ou 3 mm pode tornar a antena ineficiente, causando o que é conhecido como SWR Elevado (Standing Wave Ratio) ou ROE.',
    },
    {
      type: 'title',
      text: 'Conceitos Fundamentais: Comprimento de Onda e Ressonância',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A radiofrequência (RF) viaja à velocidade da luz (aproximadamente 300.000 quilómetros por segundo). Para que uma antena emita ou receba energia de forma ideal, o seu tamanho físico deve estar diretamente relacionado à distância percorrida num ciclo completo da onda, designada por <strong>comprimento de onda (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'A fórmula básica para calcular o comprimento de onda é λ = v / f, em que \'v\' é a velocidade de propagação e \'f\' é a frequência. Contudo, no mundo real, a eletricidade viaja ligeiramente mais devagar nos metais do que no vácuo. É aqui que entra o <strong>Fator de Velocidade (Vf)</strong>.',
    },
    {
      type: 'list',
      items: [
        'Cobre despido: Tem um Vf de aproximadamente 0.95.',
        'Cabos isolados (PVC): O isolamento atrasa a onda, baixando o fator para 0.92 ou menos.',
        'Varão de cobre sólido: Sendo mais espessos e condutores, o fator sobe ligeiramente para 0.97.',
      ],
    },
    {
      type: 'title',
      text: 'Tipos de Antenas Comuns em Drones e Projetos Maker',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Antena Dipolo de Meia Onda (1/2 λ):</strong> É o padrão de excelência para muitas aplicações. Consiste em dois braços (elementos radiantes) que formam, no seu todo, metade do comprimento de onda da frequência operativa. É uma antena equilibrada que oferece um padrão de radiação em forma de "donut" e é muito fácil de fabricar em cabo coaxial.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Antena Chicote de Quarto de Onda (1/4 λ):</strong> É a que tipicamente vemos nos recetores de rádio ou pequenos drones. Contém apenas um elemento radiante e faz uso do quadro do chassis ou de um plano de terra para "refletir" a outra metade da onda. O comprimento é efetivamente a metade a de um dipolo, derivando daí o apelido.',
    },
    {
      type: 'title',
      text: 'Frequências Críticas e Aplicações',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada banda de frequência detém os seus tiques. Com a nossa calculadora pode adequar os cálculos sobre as medidas vitais usadas assiduamente à prática deste passatempo:',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (Vídeo FPV): Tem comprimentos minúsculos (em volta de 12 a 13 mm por radiação). O mínimo depósito de extra solda vai pôr facilmente em risco o rendimento de captura d\'imagem.',
        '2.4 GHz (A Controlo e Wi-fi): Esta faixa em congestionamento constante precisa dum rigor absurdo em proveito d\'uma antena isenta de fuga da eficácia sem incorrer num eventual Failsafe.',
        '868 MHz / 915 MHz (Longo Alcance, LR): Usada intensamente sobre módulos Crossfire da TBS ou express LRS. Desta feita dão acesso a formatos extensos na base d\'antenas (atingindo 8cms mediante a braça respectiva).',
        '433 MHz (UHF): Tradicional frequência que foi standard absoluto, usando modelos muito de longas propostas propensas às viagens com raios multi quilométricos de raio.',
      ],
    },
    {
      type: 'title',
      text: 'Referencial Técnico: Tabela sobre Ganhos em SWR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Preveja um limiar no seu rendimento perto dum SWR do qual não extravase excessivamente os 1.0 se tencionar evitar eventuais males com o hardware emissor.',
    },
    {
      type: 'table',
      headers: ['SWR (ROE)', 'Ganho Sobre O Regresso', 'Reflexo Energético', 'Estatuto de Perigo'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Idílico</strong>'],
        ['1.2:1', '-21 dB', '0.8%', 'Magistral'],
        ['1.5:1', '-14 dB', '4.0%', 'Decente'],
        ['2.0:1', '-9.5 dB', '11.1%', 'Reconhecível de Perigo mas suportável'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>Severamente Nocivo</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'Noção Acerca da Extrema Importância Nos 50 Ohms',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Geralmente toda a rede das instalações de antenas dos equipamentos remotos têm conceções para obedecer duma só via à exigente característica nos preceitos dum circuito fechado base de 50 ohms. Assim mesmo ao realizar o cabo deverá observar em conta as indicações nos fios de rádio (ao usar uma antena clássica de tv ela tem uma taxa dos 75-ohms e isto resulta duma desordenação completa das resistências prejudicando gravemente qualquer sistema da VTx ou outro canalizador por via rádio).',
    },
    {
      type: 'title',
      text: 'Prevenir Torrações Evitando Escalões SWR Elevados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Evita a todo o custo deparares contigo ao volante com equipamento que rejeita enviar o que devia. Quanto maior a disparidade maior será o recuo de força sem rumo certo do módulo em direcção ao VTX do zangão criando dessa forma aquecimentos drásticos num lapso tão irrelevante até torrar todas as possibilidades de salvação na tua controladora ou placa.',
    },
    {
      type: 'paragraph',
      html: 'Isso traduz que tu usufruir a fundo de guias métricos com eficácia confirmada evita esses aborrecimentos. Testa de antecedência no site de análise ou medidor da ROE.',
    },
    {
      type: 'title',
      text: 'A Relação Fantasma: Percebendo Múltiplas Interferências',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existem anulações naturais das vagas radiofónicas provocadas durante eventos isolados assemelhando aos ritmos ímpares do registo. É fulcral dominar isto para nunca perturbar os domínios do espectro no espectro sem que consiga prever quais desses abalos ocorrem em forma de sinal sonoro irregular (ruído sonoro e ruído fantasma que surge noutro dispositivo sem uma banda bem fechada e bloqueada)',
    },
    {
      type: 'paragraph',
      html: 'Descubra nestes separadores tudo onde o raio das tuas engenharias possa incomodar outros.',
    },
  ],
  faq: [
    {
      question: 'Por que o meu comprimento condeno assim tão seriamente o meu vtx?',
      answer: 'Porque sem haver compatibilidade o material emite e recolhe a uma frequência inversa para dar conta desse estrago numa explosão rápida de queimas caloríficas ao invés da difusão na frequência adequada.',
    },
    {
      question: 'Fator Velocidade pode me desorientar?',
      answer: 'Pode sem teres tu conta, porque o número não é sempre uniforme. A constante a memorizar será o material de condutividade - e o quão as coisas lentas percorrem com 5% a menos em espumas de proteções como em cobre normal ou o que preferimos com até 95%.',
    },
    {
      question: 'Eu necessito mesmo apenas das Antenas a chicotes por causa dos meus drones minusculos?',
      answer: 'Não podias desmerecer desse tamanho da conveniência. Contudo por serem 1/4 da precisão total face à antena ao tamanho pleno que cobre uma polarização do dipolo é importante saberes regular onde essa terra plana e a malha vai repor no plano de rádio.',
    },
    {
      question: 'O grau no diâmetro e as suas qualidades perante o fio escolhidos altera?',
      answer: 'Total e perfeitamente, dado ser cabos muito grossos ajudam sim no aumento tolerável numa faixa de transmissão ou canal do recetor... Não fujas das limitações do usual cabo awg em 22 de espessura.',
    },
  ],
  bibliography: [
    { name: 'Em prol do Estudo Cientifico - Antenna Theory', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Detalhes Acerca de Velocity ou do Fator', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Regulação por Defasagem na Casa Alvo das Medidas (Mhz)',
      text: 'Digite o campo ao selecionar, nos mais rotineiros do dia-a-dia do passatempo terás uns rápidos menus nas principais das faixas (2.4, 5.8g.',
    },
    {
      name: 'Classicamente Definindo Antena (Tipologia de Base Radiofrequência)',
      text: 'No seu dipolo preferido irá criar a base com os seus elementos radiantes (1/2 lambda ou em quarto de espinha da onda chicote na 1/4 lambda).',
    },
    {
      name: 'Adequar Constantes Ao Seu Fator Condutor (Isolamento, Fio Físico Nuno)',
      text: 'Terá as percentagens no Vf como ponto assalariar perante cada particularidade nos compostos no seu plano.',
    },
    {
      name: 'Fase Fria dos Cortes: Mande Brasa Sem Desculpas e Afie bem',
      text: 'Usa "Medidas braço/extremidade," retira da matemática desde a soldagem e nunca do meio fio',
    },
  ],
  schemas,
};
