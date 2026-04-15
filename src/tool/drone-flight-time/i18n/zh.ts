import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'drone-flight-time-calculator';
const title = '无人机飞行时间计算器用于评估LiPo LiIon续航';
const description = '根据mAh容量和耗电量计算无人机的飞行时间。优化LiPo电池，实现安全飞行。';

const faqItems = [
  {
    question: 'Why is actual flight time lower than calculated?',
    answer: 'The calculator assumes constant consumption. Sharp maneuvers, headwinds, and battery wear can reduce actual flight time by up to 30%.',
  },
  {
    question: 'At what voltage should I land my drone?',
    answer: 'Ideally, land when the voltage drops to 3.5V - 3.6V per cell (at rest). This corresponds to the recommended 20% remaining capacity.',
  },
  {
    question: 'Are LiPo or Li-Ion batteries better for drones?',
    answer: 'LiPos offer high instantaneous power (ideal for racing and acrobatics). Li-Ion cells have longer endurance but lower power output (ideal for long, steady flights).',
  },
  {
    question: 'How does the cell count (S) affect flight time?',
    answer: 'More cells increase voltage and power, but also weight. If motors are optimized for that voltage, they can be more efficient, but cell count alone does not guarantee more time.',
  },
];

const howToSteps = [
  {
    name: 'Identify Capacity',
    text: 'Check your battery label and look for the mAh value (e.g., 1500, 2200, 4500).',
  },
  {
    name: 'Estimate Current Draw',
    text: 'Enter the average amperage your drone consumes. You can find this in your OSD telemetry after a test flight.',
  },
  {
    name: 'Adjust Safety Margin',
    text: 'We recommend leaving 20% (set to 80%) to protect the battery and provide a landing buffer.',
  },
  {
    name: 'Get the Result',
    text: 'View the exact time in minutes and seconds that you can safely stay in the air.',
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
  faqTitle: '常见问题解答',
  bibliographyTitle: '参考文献',
  ui: {
    faqTitle: '常见问题解答',
    bibliographyTitle: '参考文献',
    batterySpecs: '电池规格',
    capacity: '电池容量',
    voltage: '电压 (S 电芯)',
    safetyMargin: '安全裕度',
    landingHint: '单电芯电压 3.5V - 3.7V 时降落。',
    consumptionDynamics: '功耗动态',
    averageConsumption: '平均耗电电流',
    powerWatts: '功率 (瓦特)',
    efficiencyHint: '修改电流范围后，瓦特数将根据 S 电压重新计算。',
    estimatedEfficiency: '预估效率',
    typicalEfficiencyHint: '通常：4-6 (穿越机)，8-12 (航拍机/长续航)。',
    safeFlight: '安全飞行',
    totalEnergy: '总能量',
    theoreticalTime: '理论时间 (耗到0%)',
    co2Footprint: '碳足迹排放',
    autonomyChart: '续航时间图表',
    chartSubtitle: '电流 (A) vs. 时间 (分钟)',
    chartLabel: '分钟',
  },
  seo: [
    {
      type: 'title',
      text: '无人机飞行时间计算器：完整的续航指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '续航能力在无人机设计和操作中可能是最关键的一项。无论您是操作穿越机的飞行员、专业航拍摄影师还是长航时设备爱好者，精准地了解您的器械在此期间的滞空时长都是非常必要的，因为它不仅影响任务的成败，而且与安全性息息相关。我们的<strong>飞行时间计算器</strong>利用电池容量和耗电量的基本变量为您提供现实而可靠的预测。',
    },
    {
      type: 'title',
      text: '电池容量解析：关于 mAh 的详述',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '电池容量一般是以毫安时（mAh）进行测量。这个数字表明您的电池具备存储多少电量的能力。以1500毫安时的电池为例，理论上它能连续供电1500毫安的电流长达一整个小时。在无人机耗能巨大的大环境下，电量交流术语大多都缩略为安培（A）。1000 mAh 正好相当于 1 Ah（安培时）。',
    },
    {
      type: 'paragraph',
      html: '然而，单纯的容量并不能涵盖影响续航的所有。即便由串联数目或被用作电池规格的 \'S\' 决定的电压能直接导致可利用总功率的变化，在按照电机电流负荷运算剩余使用时间的领域，Ah 和安培所构成的比例仍旧是飞行技师最推崇和最为直观的比对尺度。',
    },
    {
      type: 'title',
      text: '电流消耗情况分析：飞行中的安培消耗态势',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '马达能耗在飞行期间可以说是极具波动性的一大变数。简单维持起步时的悬停姿态与去执行特技动作之间有着天翻地覆的差异。每一个包含电机和螺旋桨互相搭配构成的闭环系统有着属于自己的能效表现。如果在空域中一直采取推进拉满的飞行法，极快提升的安培指标就会骤减本来应该享有的电池供能的时间段。',
    },
    {
      type: 'list',
      items: [
        '悬停：在这个状态消耗率最低且恒定，十分切合于静态的构图和拍摄。',
        '巡航飞行阶段：相较悬停会有所增加的原因是因为需要同气动阻力相博弈。',
        '高强度/FPV竞技：因为瞬变的高速移动会创造极值的情况，可以在不到几秒的极短期限中爆发出三倍于平均消耗峰值电流的情况发生。',
        '无人机的总重量：无论增加哪怕是一丁点的体积或是重量，要想在同一环境中制造相同规模的升力就会增加电机转速频率负担并引起安培用量走高。',
      ],
    },
    {
      type: 'title',
      text: '80% 安全法则及留下的底线：捍卫 LiPo 内部构件的举措',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '一旦您企图尝试竭尽可能榨干一块含有聚合物锂离子（LiPo）的动力能源至仅存的 0%，它能毁掉的不仅仅是一块珍贵的充电模块，更为严重的一点是极有可能会因急剧且迅猛掉落电压的供能危机影响最后导致的坠机之灾难。通常在学术界上被认可是从低限度来讲，单片的临界指标是 3.0V 取到 3.2V的单格节点，如果一直跨越这些警告防线它内里的元素组成了无法治愈的伤损过程。',
    },
    {
      type: 'paragraph',
      html: '为此，在航模操作指导规程中始终要对应用这一<strong>安全余量机制</strong>铭记在心。计算平台支持该容灾基准点的再设定，普遍情况大家更乐意用尚留 20% 时落地作为一个收尾。这是以增加长线应用上百回合电池生命周期的宏图中来换取临时应对如突如其来的诡异阵风以及降落不果再起飞复飞安全缓冲。',
    },
    {
      type: 'tip',
      html: '必须警惕的一点是这门蓄电学科极畏寒。因为环境变凉会大大加强这其中 LiPo 介质原有的滞后效应和内在抵触性能。因此遭遇在室表零上 15度乃至以下的自然条件飞行测试之前，尽到将所有的用设备预热完全的责任。',
    },
    {
      type: 'title',
      text: '严密的运算等式推导',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '通过依赖辅助平台是会让你获得最终简略并且方便直接阅读出来的现成数值答案，不过若能亲自解读并领悟这整个理论计算过程则是加深巩固的一堂生动必修课。最底层的解析原稿是这样：',
    },
    {
      type: 'paragraph',
      html: '<strong>剩余时长 (分钟) ＝ ((标定容量单位转换的 mAh / 1000) * 安全降落阈值预留比例) / 提取出预期的电流负荷耗量（安培单位） * 60</strong>',
    },
    {
      type: 'paragraph',
      html: '就以实战场景中假如搭载有含额定容量为 2200 mAh 且以要求残留 20% 余量（因此带入的安全乘数为 0.8 取代原有的）而综合机型的平场用电量估量可以大致定位于 15 Ah时，我们可以算出的总结果：(2.2 * 0.8) / 15 * 60 = 即获得大致为 7.04 分的航速游荡时长。',
    },
    {
      type: 'title',
      text: '负面累加与配置上精益求精',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '请不要盲从“电量永远也不嫌多”的想法。企图为获得更多时长盲目累积巨大基数的做法反而会有报应到来，这就是常提及的效力递减之说。单靠增大电池两倍的扩容就想要取得二倍对应留空时间的行为常常因多余多出的自重要拉动使得旋翼机必须要比正常更高速度地维持马达轮换速度进而是更多能耗产生的代价，在这场相互掣肘的较量中如果逾越一定的红线反而不是助力而是成为累赘并降低统合性效率的关键痛处。',
    },
    {
      type: 'paragraph',
      html: '资历深厚的操盘手往往在追寻包含 <em>Disc Loading</em>（机能表面承重承载比）以及能源总带载量参数中的极致与默契的糅合中来实现这种所谓 "高效可用任务行程时间" 的极限拉伸感。',
    },
    {
      type: 'title',
      text: '横跨各型号领域之别',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>微型室内机 (Whoops)：</strong>由于仅仅具有区区 300 到 500 mAh 身形虽然消耗可能保持在较低限度的 2 至 5A 的用电幅度之内，只因本身过小的惰性与过高引擎转数的制约导致它的时长也就停在极度匮乏的短程区间（基本上以 3-4分内为主）。',
    },
    {
      type: 'paragraph',
      html: '<strong>5寸竞速机种：</strong>因为只图追求肾上腺素的喷发而罔顾极端损耗（最高负荷冲击时甚至拉断在 120A或以上），使得这类型机器可以仅仅靠在不到 2分钟不到的情况下，就能够轻而易举吸干一小只含有 1300 mAh供电宝的能量。',
    },
    {
      type: 'paragraph',
      html: '<strong>针对中长距远景设备：</strong>它们存在的主体理念即为了节能与持久进行演替，由于改用比重且更加出色的圆柱锂电（Li-Ion），这不仅可以让供电压力大幅减至最小同时也换来长至 30至惊人的 1个钟头的大型史诗的旅行周期体验。',
    },
    {
      type: 'tip',
      html: '去采用带有短间距（螺距缩小）这种特殊构造扇叶是作为在牺牲掉些许可靠敏捷和反应力及降低少许最高时速来补贴持久耐力的权宜办法。不过如果用最不心疼的耗材成本预算便可以取得大概 10%至 15% 这之间收益的长寿之举显然还是赚了的。',
    },
    {
      type: 'title',
      text: '检修和寄存',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '想要获取精确可靠有依据可循的最终回馈结果就代表你必具备健康的材料本身。假如带有高负内部电势和内阻异常增添的产品它总是处于过度发热以及反馈回失准电量的现象，请一定要遵守如果是超期了高于有 48 小时的闲置，必须要进入储蓄态压线标准界点（每一小格保持在 3.8 取值到 3.85V之内的数值中作防腐蚀看管）。',
    },
    {
      type: 'paragraph',
      html: '总括地讲，对于整体功耗的操控实质是一种糅杂在应用了多方面理科计算上的妥协。多勤勉地应用我们为你所设计的协助后台安排属于每个自己翱翔的时间点，并千万要在潜意识里明白一旦在天空中穿梭之际，剩下的倒计时秒数是你唯一的牵挂。希望你的每一段征程都有着完美的启航以及平安降落的表现。',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: '欧洲航空局 (EASA) 有关于各种类民用级航空守则', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot 全面百科', url: 'https://ardupilot.org/copter/' },
    { name: '关于电池系统大科普学术指南网', url: 'https://batteryuniversity.com/' },
  ],
  howTo: howToSteps,
  schemas,
};
