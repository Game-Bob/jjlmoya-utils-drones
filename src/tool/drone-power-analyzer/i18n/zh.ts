import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-power-analyzer';
const title = '无人机动力分析器：FPV 推重比计算器';
const description = '计算 FPV 无人机组装的关键推重比。获取即时飞行剖面建议、可视化动力仪表，并针对电影级、花飞或竞速进行优化。';

const faqItems = [
  {
    question: '什么是推重比，为什么它很重要？',
    answer: '推重比是指无人机能产生的总推力除以其起飞全重（AUW）。它是决定无人机飞行手感最重要的指标，从缓慢稳定（航拍）到极速响应（竞速）。',
  },
  {
    question: '花飞（Freestyle）飞行的"黄金比例"是多少？',
    answer: '对于流畅的花飞飞行，黄金比例在 4:1 到 6:1 之间。4:1 的比例在提供良好稳定性的同时具有出色的灵活性，而 6:1 则响应极快，但在狭窄空间内需要更精细的油门控制。',
  },
  {
    question: '我可以将其用于航拍机组装吗？',
    answer: '可以。对于流畅、缓慢的航拍镜头，目标比例应在 2:1 到 3:1 之间。这能保持无人机稳定且可预测。低于此比例将难以控制；高于此比例对于缓慢移动来说会显得过于"贼"。',
  },
  {
    question: '如果我的比例超过 8:1 会怎样？',
    answer: '超过 8:1 时，你的无人机实际上是一台竞速机器，响应极其灵敏，对飞行技术要求很高。只有经验丰富的飞行员才应尝试此类组装。非常适合过旗门和速度赛，但在室内飞行很危险。',
  },
  {
    question: '起飞全重（AUW）需要包含电池重量吗？',
    answer: '需要。起飞全重（AUW）是无人机安装所有组件后的总重量：机架、电机、电调、飞控、摄像头、电池、桨叶，所有东西。使用电池预设按钮可即时添加重量。',
  },
];

const howToSteps = [
  {
    name: '选择电机配置',
    text: '选择你的组装是四旋翼（4）、六旋翼（6）还是八旋翼（8）配置。这个倍数对总推力至关重要。',
  },
  {
    name: '输入电机推力',
    text: '输入每个电机能产生的最大推力（以克为单位）。你可以在电机规格书中找到此信息，或使用快速预设。',
  },
  {
    name: '设置总重量',
    text: '输入无人机的起飞全重（AUW），机架、电机、电池、摄像头等所有重量。使用电池预设进行即时重量调整。',
  },
  {
    name: '查看结果',
    text: '计算器将立即显示你的推重比、飞行剖面适用性（电影级、花飞、竞速）以及针对你组装的个性化建议。',
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
    motorConfiguration: '电机配置',
    motorCount: '电机数量',
    thrustPerMotor: '单电机推力 (最大)',
    thrustUnit: 'g',
    quad: '四旋翼 (4)',
    hexa: '六旋翼 (6)',
    octo: '八旋翼 (8)',
    motorPresets: '快速电机预设',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: '重量配置',
    auwLabel: '起飞全重 (AUW)',
    weightUnit: 'g',
    switchToLbs: '切换至磅 (lbs)',
    switchToGrams: '切换至克 (g)',
    batteryPresets: '添加电池重量',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: '总推力',
    twRatio: '推重比',
    powerMeter: '动力仪表',
    flightProfiles: '飞行剖面评估',
    cinematicLabel: '电影级',
    freestyleLabel: '花飞',
    racingLabel: '竞速',
    proRacingLabel: '专业竞速',
    suitable: '适用',
    notSuitable: '不适用',
    recommendationLabel: '飞行风格建议',
    recommendation_low: '推重比低于 2:1，无人机的稳定性将受到挑战。请考虑减轻重量或升级电机以获得更好的性能。',
    recommendation_cinematic: '{ratio}:1 的比例非常适合动作平稳、受控的重载航拍。是缓慢、精准镜头工作的完美选择。',
    recommendation_freestyle: '{ratio}:1 的比例是花飞飞行的黄金比例。在保持特技飞行所需稳定性的同时，具有极佳的灵活性。',
    recommendation_racing: '{ratio}:1 的比例属于高性能花飞领域。在狭窄空间和高速机动中，油门管理至关重要。',
    recommendation_extreme: '{ratio}:1 的比例是一台竞速机器。响应极其灵敏，仅供经验丰富的飞行员在开阔区域飞行。',
    compareMode: '对比组装方案',
    scenario1: '方案 A',
    scenario2: '方案 B',
    addComparison: '添加对比',
    tooltipTWRatio: '推重比是总推力除以无人机重量。比例越高意味着加速度越快，操控响应越灵敏。',
    tooltipFreestyle: '花飞飞行的"黄金比例"是 4:1 到 6:1，这在灵活性和操控性之间提供了最佳平衡。',
    badge_unstable: '不稳定',
    badge_cinematic: '电影级',
    badge_sweetSpot: '黄金比例',
    badge_racing: '竞速',
    badge_extreme: '极限',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: '了解 FPV 无人机的推重比',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>推重比</strong>可能是 FPV 无人机组装中最关键的指标。然而许多飞行员忽视了它，导致组装出来的机器表现不如预期。此计算器揭示了计算过程，并准确展示了你的机器在飞行时的真实手感。',
    },
    {
      type: 'title',
      text: '为什么推重比很重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '无人机的推重比决定了三个基本要素：<strong>稳定性</strong>、<strong>响应性</strong>和<strong>速度</strong>。2:1 的比例感觉迟钝且稳定。6:1 的比例感觉灵敏且富有攻击性。10:1 的比例则是纯粹的竞速机器。了解你的机器处于光谱的哪个位置，有助于你选择正确的飞行风格并设定合理的预期。',
    },
    {
      type: 'title',
      text: '飞行剖面详解',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>电影级 (2:1 - 4:1)</strong>：重型、稳定、缓慢。非常适合平稳的相机移动和载重组装方案。',
        '<strong>花飞 (3.5:1 - 6.5:1)</strong>：均衡的黄金比例。响应足以完成特技，稳定性足以进行控制。',
        '<strong>竞速 (5:1 - 8:1)</strong>：快速且灵活。专为过旗门和激进机动而设计。',
        '<strong>专业竞速 (7:1+)</strong>：极限性能。仅限专家级飞行员在开阔区域使用。',
      ],
    },
    {
      type: 'title',
      text: '如何计算推重比',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '公式很简单：<strong>比例 = (单电机推力 × 电机数量) / 起飞全重</strong>。例如，一台起飞全重为 800g 的四旋翼，如果电机推力为 600g（总推力 2,400g），其比例为 3:1。这属于花飞领域。',
    },
    {
      type: 'title',
      text: '为你的机器选择合适的比例',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '问问自己：<em>我要怎么飞？</em> 缓慢的电影镜头？激进的花飞特技？高速竞速？你的答案决定了你的理想比例。大多数 FPV 飞行员最终选择 4:1 到 6:1 之间，因为它在操控和刺激之间提供了最佳的折中方案。',
    },
    {
      type: 'paragraph',
      html: '请记住：比例越高并不代表"越好"。它代表"响应越快"。在竞速机上，这是必需的。在航拍机上，这反而可能是个负担。请根据需求审慎选择。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
