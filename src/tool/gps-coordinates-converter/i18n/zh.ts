import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'gps-coordinates-converter';
const title = 'Ardupilot及INAV航点模式用GPS坐标转换器';
const description = '在十进制度(DD)、度分秒(DMS)和GPS硬件原始格式(Raw)之间转换GPS坐标。这是ArduPilot和INAV航点控制的必备工具。';

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
  faqTitle: '常见问题解答',
  bibliographyTitle: '参考文献与指南',
  ui: {
    faqTitle: '常见问题解答',
    bibliographyTitle: '参考文献与指南',
    latitude: '纬度',
    longitude: '经度',
    decimalDegrees: '十进制度 (DD / Decimal Degrees)',
    degreesMinutesSeconds: '度-分-秒 (DMS / Degrees Minutes Seconds)',
    gpsHardware: 'GPS固件硬件格式 (Raw Integer)',
    copy: '复制',
    copied: '已复制!',
    invalidCoordinate: '无效坐标 (Invalid Coordinate)',
    pasteHardwareMapFormat: '粘贴原始硬编码数据 (例如: 404306300, -739981800)',
    validation: {
      latRange: '纬度值必须介于 -90 到 90 之间。',
      lonRange: '经度值必须介于 -180 到 180 之间。',
      invalidFormat: '输入格式无法识别。请仔细检查您的输入。',
    },
  },
  seo: [
    {
      type: 'title',
      text: '深入了解GPS坐标编码体系：无人机导航必不可少的工具指引',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在涉及无人机的自动编队飞行、专业的航空测绘规划、抑或是最焦心的追回遗失失控设备时，数据的精密程度以及格式的统一互认就是最为核心的钥匙。毫无疑问GPS坐标直接构成了全套导航网络系统的骨架，可诸多繁复的飞控底层系统（诸如主流的 Betaflight、固翼神级 INAV、开源的 ArduPilot 甚至是巨头 Google Maps）却分别操持着差异极大的独立格式。我们这款 <strong>GPS 坐标全能转换机</strong> 就是用来抹平这种数据语言障碍的桥梁，保驾护航确保你苦心标记的航点(Waypoints)确凿无误地坐落在你所期望的分毫之上。',
    },
    {
      type: 'title',
      text: '你必须熟知的三大主流GPS数据格式派系',
      level: 3,
    },
    {
      type: 'title',
      text: '1. 十进制度形态 (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '在当下数字化年代里这绝对是全球用量最为铺天盖地的格式标准了。它被 <strong>Google 谷歌地图</strong>、形形色色的近代移动智能手机终端以及九成以上的网络Web地图信息服务商们不约而同地视作标配。只利用纯粹简约而直接的一串小数点后的数值串去代表地理位点（举个例子：<code>40.7128, -74.0060</code>）。对于计算机终端去复制、剪贴以及后续地快速机器处理，它简直可以说是如鱼得水、极为亲和高效。',
    },
    {
      type: 'list',
      items: [
        '表现为正数记录的纬度代表其坐落于北半球；呈现负值的话则身处南半球。',
        '正数形式的经度表明其处在本初子午线以东(东经)；而负数经度则代表偏西(西经)。',
      ],
    },
    {
      type: 'title',
      text: '2. 传统老派：度，分，秒 形式 (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '这一种带有着岁月痕迹极其浓重且古老的制式至今仍强力统治着航海领域的长途漂泊、商用航空界，以及那堆在档案馆里的古早老派地形图纸之上（譬如说这般写道：<code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code> ）。基于对地球圆周做 360 度割裂切割（一度辖制着 60 分，一分又统领着 60 秒）的做法非常利好于依赖实体纸张地图进行人为直觉导航。但成也萧何败萧何，因为里边掺加了诸如各类特定字符与符号，一旦您准备给电子自动化飞行路径里敲击输入，往往就由于格式要求变得痛苦繁琐甚至极易致错。',
    },
    {
      type: 'title',
      text: '3. 极客最爱的底层硬件原生态数据体/ 固件生数据 (ArduPilot / INAV Raw Format)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '一旦您必须从冷冰的 CLI (底层命令行接口)界面剥离提炼配置数据、沉浸到去钻研没经过美化过滤的 Blackbox（黑匣子日志）内，亦或者借助像 MAVLink 这类协议同诸如 ArduPilot 之类系统进行底层的直接数据握手时，你会极其经常性地发现坐标直接变脸，化身为一大串巨长、毫不带小数点的整数字符串大集合（就像这样：<code>407128000, -740060000</code>）。',
    },
    {
      type: 'paragraph',
      html: '发生这种“魔变”源于电路底层最淳朴的机理 —— 单片微处理器(MCU控制器)们处理纯粹“整数(Integer)”的能力和精准度其实远比对付带有小数点位那些“浮点数(Float)”的效能要快上、强上无数倍之多。他们常常选择干脆直接把前面科普过的那个十进制标准DD里的核心值去暴增乘上个 <strong>一千万倍 (即 10,000,000 会经常被简写作 1e7)</strong>，然后就此存活并互相倒腾。我们的计算器系统能在这极度复杂的纯机械无脑大整数堆里和常人能看懂的地标数据之间无缝衔接且随意进出切换重组！绝对可以说是分析拆解深奥航点及黑匣子信息的最强利器助手。',
    },
    {
      type: 'title',
      text: '到底无人机机长何种场景迫切必须去调用此类互转机能？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '我们列举了几种最具代表且惊险万分的绝对救火刚需场景，这时这个转化接口就会变身成您最佳盟友：',
    },
    {
      type: 'list',
      items: [
        '<strong>悲情上演炸机之后的捞机寻找大作战 (Lost Drone Recovery):</strong> 当图传雪花甚至直接黑屏后，OSD(图传屏幕信息叠加展示)界面或是像睿思博得(Radiomaster)、黑羊Taranis接收控上的最终抢救显示数据界面内，经常停留着以原始DD或是比较别扭的组合 DMS 为形态残喘的遗留断点数据。飞手在现场极其迫切迅速将其还原调拨输入回通用易打点的Google 卫星视图好去把那昂贵的电子宠物从草丛灌木堆里打救回巢。',
        '<strong>大刀阔斧的航点勘察布局 (Waypoint Mission Planning):</strong> 在使用 QGroundControl、Mission Planner（MP地面站）一类的重型武装去布局飞行大业之时，零瑕疵是它的不二底线。若是能把从传统国土地理资源库的或者地方测量处手写得来的那种满布着D M S的材料坐标通通严丝合缝转化导入到地面站内指定的数字格式系统，那就相当于给自己规划上好一道确保飞机飞完地界同时不致以跨入违法非受权空域从而招引官司警察的完美保底屏障。',
        '<strong>硬汉风格操作的固件底端注入:</strong> 部分对UI操控并不完善甚至硬核的机器在进行固件里手动于最基本端（CLI内）死死锁死“一键归巢指令(RTH)”标的源地时就非要认死理仅仅吃那些长如乱码、苛刻到精确至近千万分一地步那原始全长硬件型巨大整形数(Raw integer)。',
      ],
    },
    {
      type: 'title',
      text: '读懂你的刻度精度：解开小数点最后那几个位元的玄机奥秘',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '你是否满腹疑团去质疑真正意义上其实去标出这小数点到底延展保留住需要截断至几位才是够用？那么我们可以参考在这个近乎完美的赤道坐标周遭，每一个小数段变化引发着在这浩瀚世界版图里面有多恐怖具体的实质偏离位移差距尺度：',
    },
    {
      type: 'list',
      items: [
        '<strong>仅仅提供 1 位的敷衍保留值</strong> (诸如: 40.1这样子): 这将会把那小东西领丢至大概离您所在地 远逾足有 111 大千米 开外！可谓无心之举却差以里计。',
        '<strong>精度拓展到达这第 3 小数位时</strong> (诸如: 40.123 样态): 会好些，你大概能摸清它正落在离心大概一百多也就是接近 110 多米 附近的一整片大林区或巨大街道院子里。',
        '<strong>若去把战线夯实留位至下 5 个数字级时 </strong> (例: 40.12345): 其偏离纠缠最终成功缩小并固定于在仅仅 1.1 米 之间的安全锁定光圈之内。这也是针对大量消费与高级玩具组穿越无人直升机作普通寻回、执行自主RTH最被视作为黄金准绳的一条。',
        '<strong>神之领域的变态小数点 下 7 至 8 位数区间</strong> (例: 40.1234567 及更小): 其微观世界的界限已压到毫无人性，甚至区区只带有微乎可怜极只有约 不足区区 11 毫米！ (这是极少数属于那些极其专业的高阶大地定位系统即 RTK 平台专属神仙打架般高阶领域)。',
      ],
    },
    {
      type: 'paragraph',
      html: '身处在这个空阔畅通没有太多混泥建筑阻挡其开阔探天接收能视范围内时，大多标准大众消费版比如常见的那个 M8N、新型更强的 M10 定位件都可以输出稳定发挥以达成落子在那准 5 第甚至到探究第 6 位的水平线上（大概的锁定差距基本是在那么一两米开里）。当你慌不择路忙于摘抄去存底它最后弥留下的残血地址以去挽尊捞取自己机器时千万不要因为图省力或者心宽而抹去、少去任何的尾数的。一定坚决一字一字把它们，如果能给满第六位那必须死死抓着！这无疑才是确保护送贵重财物完好还家的不传绝学啊！',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: '官方权威基石：ArduPilot 全体系与定位模组的基础构筑知识库及导入准则。', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: '知识宝库扩充: 十进制算法 与 经纬制图（维基百科源学术资料）。', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: '甄别与判定手上信息的归路归属',
      text: '拿到一串神秘指路密码时您先得要能慧眼进行第一眼识别去验明正身后才能定调后续步子: 如果看起来干爽整洁唯由个单纯简单的小数点作陪绑比如(40.7128, -74) 这必是那主流泛用的 十进制度形式(DD)无疑。只要这信息掺和有乱花渐欲迷人眼的带度乃至分这种标符（如这 40°42\'46"N ) 这是被古早所包裹的老制式即(DMS)。要是见到了通篇毫无阻断只有那一串令人窒息极巨繁长的超长整数群（比如像407128000）这等神态的，切勿惊慌这就是藏在那最底层需要您拿捏提取的未解析前的原初硬件固件型格式(raw)。',
    },
    {
      name: '将数据精确引入转换舱',
      text: '从刚刚上面所述我们布置了应对上述全部情况的三大块接受方输入文本区，找好组织对准您刚才这判断的型号类别坑位然后进行精准落位或者一记最快式的快键原封全串一整拖粘贴。',
    },
    {
      name: '等待接收立等可取的重构与演化换型输出',
      text: '不必再去翻身按什么多余的按钮开关闭等它加载的，一旦光标所落完成录入那一并瞬间咱们系统里预埋潜伏的高光算法立刻全面提速响应运作起来立马于空余出来的对应板块内为您无阻回填生成反馈最新最精确转换完成体答案！',
    },
    {
      name: '打包提取收获果实供去使用',
      text: '最后这一击就是直击于紧挨着您梦寐索求该心仪的终极样式右旁那个专有的便携提取按键上点上这这么一压，“嗒”地一下这宝贵的指令字符全数自动打包给进了我们剪贴记录里边去准备去奔袭诸如 Google地图导航框或者地面控MP里再或就是填回去向底层黑色深渊。',
    },
  ],
  schemas,
};
