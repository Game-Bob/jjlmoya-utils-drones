import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'conversor-de-coordenadas-gps';
const title = 'Conversor de Coordenadas GPS para Navegacao em Waypoints';
const description = 'Converta coordenadas GPS entre Graus Decimais (DD), Graus Minutos Segundos (DMS) e formatos de hardware GPS. Essencial para waypoints ArduPilot e INAV.';

const faqItems = [
  {
    question: 'What is the difference between DD and DMS?',
    answer: `DD (Decimal Degrees) uses a single number with decimals (e.g., 51.50). DMS (Degrees, Minutes, Seconds) divides the degree into sexagesimal fractions (e.g., 51° 30' 0").`,
  },
  {
    question: 'Why are negative coordinates used?',
    answer: 'In the Decimal system (DD), latitudes south of the Equator and longitudes west of Greenwich are indicated with a negative sign to facilitate mathematical calculations.',
  },
  {
    question: 'How much precision do I lose when converting?',
    answer: 'Our tool uses double-precision floating point. With 6 decimals in DD, the precision is about 11 centimeters, which is more than enough for drones and civil navigation.',
  },
  {
    question: 'Does this tool work offline?',
    answer: 'Yes, once the page is loaded, all conversion logic is local (client-side). Only the map requires a connection to download new tiles.',
  },
];

const schemas: GpsCoordinatesConverterLocaleContent['schemas'] = [
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
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Input Coordinates',
        text: 'Enter your coordinates in either Decimal Degrees (DD) or Degrees, Minutes, Seconds (DMS) format.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Review Conversion',
        text: 'The tool instantly displays the converted coordinates in all supported formats.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify on Map',
        text: 'Check the map visualization to ensure the coordinates point to the correct location.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Copy Result',
        text: 'Copy the converted coordinates to your clipboard for use in navigation systems or mission planning.',
      },
    ],
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


export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Referências Bibliográficas',
  ui: {
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Referências Bibliográficas',
    latitude: 'Latitude',
    longitude: 'Longitude',
    decimalDegrees: 'Graus Decimais (DD)',
    degreesMinutesSeconds: 'Graus, Minutos, Segundos (DMS)',
    gpsHardware: 'Formato de Hardware GPS (Bruto)',
    copy: 'Copiar',
    copied: 'Copiado!',
    invalidCoordinate: 'Coordenada Inválida',
    pasteHardwareMapFormat: 'Cole dados brutos (ex: 404306300, -739981800)',
    validation: {
      latRange: 'A latitude deve estar entre -90 e 90.',
      lonRange: 'A longitude deve estar entre -180 e 180.',
      invalidFormat: 'Formato não reconhecido. Por favor, verifique a sua entrada.',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Compreender as Coordenadas GPS: A Ferramenta Indispensável para a Navegação de Drones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando se trata de voo autónomo de drones, topografia aérea ou recuperação de equipamentos perdidos, a precisão e a uniformidade são cruciais. As coordenadas GPS formam a espinha dorsal da navegação, mas diferentes sistemas (como o Betaflight, INAV, ArduPilot e Google Maps) usam formatos diferentes. O nosso <strong>Conversor de Coordenadas GPS</strong> preenche essa lacuna e garante que os seus waypoints se localizem exatamente onde tenciona.',
    },
    {
      type: 'title',
      text: 'Os Três Formatos GPS Essenciais',
      level: 3,
    },
    {
      type: 'title',
      text: '1. Graus Decimais (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Este é, hoje em dia, o formato mais comum no mundo, adotado de forma abrangente pelo <strong>Google Maps</strong>, smartphones modernos e a maioria dos serviços de mapeamento na web. Expressa a posição como um simples número decimal (ex: <code>40.7128, -74.0060</code>). É extremamente fácil de copiar, colar e processar por computadores.',
    },
    {
      type: 'list',
      items: [
        'Latitudes positivas estão no hemisfério norte; latitudes negativas no hemisfério sul.',
        'Longitudes positivas ficam a leste do Meridiano de Greenwich; longitudes negativas ficam a oeste.',
      ],
    },
    {
      type: 'title',
      text: '2. Graus, Minutos, Segundos (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Este é o formato tradicional utilizado na navegação marítima, aeronáutica e em mapas topográficos mais antigos (ex: <code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code>). É mais intuitivo para a navegação humana em mapas impressos, dividindo a Terra em 360 graus, com cada grau dividido em 60 minutos e cada minuto em 60 segundos. No entanto, o seu formato com símbolos específicos (como graus e aspas) pode torná-lo moroso ou complexo de inserir digitalmente durante a programação de trajetos de voo.',
    },
    {
      type: 'title',
      text: '3. Formato GPS em Bruto / Hardware (ArduPilot / INAV)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Ao extrair comandos de registos via Interface de Linha de Comando (CLI), ou se visualizar diretamente ficheiros Blackbox não processados de registos de voo, bem como a operar ligações de protocolo (como a partilha MAVLink base do ArduPilot), é imensamente comum ver coordenadas representadas por extensos números inteiros de grandes proporções algorítmicas (ex: <code>407128000, -740060000</code>).',
    },
    {
      type: 'paragraph',
      html: 'Isso é obtido porque efetivamente essas infraestruturas agarram a coordenada que constaria nativamente sob Graus Decimais (os números com vírgula atrás referidos) mas o processamento dos mesmos por um multiplicador da ordem dos "10 Milhões" por via de um coeficiente <strong> (10,000,000 ou notificado via exponencial 1e7)</strong>, retira desse formato qualquer fração sob forma de decimal. Tal acontece fundamentalmente para a gestão de cálculos a elevadas frequências a ser operadas, de sobremaneira incrivelmente super rápidas, feitas no âmago pela micro controladora lógica. Uma CPU processa um número interiro absoluto largamente mais célere e eficaz contra a sobrelotação computacional comparativamente no manusear do valor em fator decimal (flutuante). Este formato, ou ao converte lo nos dois outros por nosso intermédio reverte todo fluxo descodificando da Blackbox.',
    },
    {
      type: 'title',
      text: 'Casos em que o Navegador de Drone carece ou irá usar fortemente destas conversões',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Conseguimos indicar facilmente cenários essenciais que ditam em uso contínuo como esta máquina conversora atua de modo prático:',
    },
    {
      type: 'list',
      items: [
        '<strong>Buscas, Busca E Recuperação da Aeronave Extraviada (Lost Drone Recovery):</strong> Se perder vídeo vai contar estritamente da informação vital mostrada no Display do piloto FPV e com recurso frequente aos visores da Rádio Taranis ou de outras marcas a Telemetria resguardou-os em (geralmente sob DMS). Consegue os copiar duma foto que tenha registado e os atirar neste campo para obteres um Ponto fixo a inserir depois na app para ir buscar com GPS o Drone no cenario de impacto no Google Maps (que necessita do formato D Decimais)',
        '<strong>O Cúmulo Do rigor exigido nos Trajetos ou Waypoint :</strong> Um projeto da área num programa fidedigno de cartografia base PC - como o QGControl e Mission Planner a um levantamento ou rota, ao dispor as coordeandas importadas em plano DMS para se desenhar para formato DD nestas aplicações a conversão afiança todo o estrito respeito para não que se passe um palmo num voo indevido de rastreio.',
        '<strong>Na Raiz  Do Hardware - Programando Modificadores RTH por CLI:</strong> Há situações críticas em que necessita acionar um recurso via Prompt de Resgate Ocular ou Fixo. Nessa condição a obrigatoriedade da digitação cega crua nos seus zeros via Raw será inadiável pois essa programação em certas BIOS firmware apenas escutará sob essa notação em grandes inteiros para fixar aquele exato salvamento em retorno de home (casa).',
      ],
    },
    {
      type: 'title',
      text: 'Análise Explicativa e Concreta sobre A Casa Das Decimais do GPS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um erro minúsculo em que o decimal final fuja qual seria afinal sua implicação ? Olhe para esta grelha prática avaliando a zona do Equador e o fator em precisão da medição GPS : ',
    },
    {
      type: 'list',
      items: [
        '<strong>Precisão Apenas À Primeira Cada ( 1 só decimal):</strong> (ex 40.1 ) , este ponto no horizonte significa uma gigantesca margem de desvio no mundo num alcance e erro tolerado num desfecho enorme  até na faixa ao entorno de um total aproximado superior a generosos :  De Cento E Onze Km de imprecisão !!.',
        '<strong>Com Um Precisão Levada Na Três Casas ( 3 Decimais):</strong> (  P.exe: ... 40.123), Agora limitamos e restringimos para estarmos em busca do seu multirotor ao menos  entre vizinhanças ou limites com erros que abrandam se a já 110. ( metros  ).',
        '<strong>Com As Precisões Levadas E Trabalhadas no patamar Cinco Zero ou Cincos Cifras numéricas :</strong>   Avançamos largamente para o limiar em que  uma medição afere distâncias a mais ou menos cerca entre um raio e área não  maior num de total com aproximação do valor do  1.1 / 1.5   metros de margens de dúvida e exatidão.',
        '<strong>O Standard Super Avançado E O Que Vai Com os números e casas Decimais Na Patamar e Base  7 ao 8 ! :</strong> Quando visualizamos numéricas coordenadas estendendo o registro muito na base (  ex :   40.1234567 ) falamos dum mundo restrito usado no mapeamento profissional  a nível cirúrgico em centímetro usado em RTK de levantamentos a precisões que contêm níveis incríveis com erros reduzidíssimos da ordem dos 11 ou  10 Milímetros em acerto !!.',
      ],
    },
    {
      type: 'paragraph',
      html: 'As Placas e Cúpulas Standard na grande fatia dos modelos lúdicos para fpv - como GPS do modelo M8n, Bem com os recentes chip modernos Ublox modelos de classe e séries M10 ou variantes conseguem um compromisso estável ao operarem aos tais dezoito a 20 sátélites em locais límpidos e céu pleno chegando na quinta e tocando mesmo bem fundo nestas medições de precisão aos 6 ( e raros num nível com um fator no sete  decimal) de medições e por esse caso indicamos  quando  transfere apontamentos seus preceitue reter e dar copias o mais longe a exaustão que tiver visualizado.',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'O Portal Do Mundo Autómato Ardupilot nas referências a Manuseamento E Informações .', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: 'Documento Completo De Natureza Histórica E Cientifica Na wikipedia ( DD / Conversões E Graus Base Terra )', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: 'Observe Os seus dados e descubra a classe da Linguagem .',
      text: 'Se contiver caracteres, como p exemplo letras Cardinais , apostrofes é fácil e é com os DMS, Se for um puro  algarísmo longo  e direto sem paragens tens brutos da FC na tua vista.',
    },
    {
      name: 'Transcreva ( Inserir Na Teia)',
      text: 'Para de imediato as janelas fazerem magia de cálculo ponha numa respectiva a do seu dado o copiado.',
    },
    {
      name: 'O Resultado Mágico À Vista E Imediatamente Fornecido Na Hora!',
      text: 'Tão só quanto carregar , observe nos dois retângulos vizinhos e aí estão o equivalente do formato em conversão para que te sintas devidamente com opções completas para o usares ! ',
    },
    {
      name: 'Copiar O Fruto do Retrabalho !',
      text: 'Use botão, é tão singelo para carregar e obter a transferência dessa numeração , cole em Maps ou num txt por notas de plano futuro e boa jornada a rota desejada do drone.',
    },
  ],
  schemas,
};
