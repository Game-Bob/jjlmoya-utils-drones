import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-thrust-to-weight-ratio';
const title = 'FPV无人机推重比与飞行遥测计算器';
const description = '计算FPV穿越机和多旋翼无人机的最大静拉力、非线性油门曲线、瞬间垂直G值、悬停油门点以及0到100加速时间。';

const ui = {
  title: 'FPV穿越机推重比计算器',
  subtitle: '分析推力曲线、实时油门摇杆响应、垂直G值及机动性评级',
  presetsHeader: '快速预设配置',
  customPreset: '自定义配置',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S 花飞 3.5英寸',
  freestyle5Preset: '6S 花飞 5英寸 Pro',
  longrange7Preset: '6S 远航 7英寸',
  cinelifter8Preset: '8S 重型影视机 X8',
  specsHeader: '无人机与动力系统参数',
  auwGramsLabel: '含电池全备起飞重量 (g)',
  motorCountLabel: '电机数量与架构',
  thrustPerMotorLabel: '单电机最大静拉力 (g)',
  propellerSizeLabel: '桨叶尺寸 (英寸)',
  propellerPitchLabel: '桨叶螺距 (英寸)',
  bladeCountLabel: '桨叶叶片数',
  blade2Option: '2叶 (双叶桨 - 极佳续航效率)',
  blade3Option: '3叶 (三叶桨 - 花飞标准配置)',
  blade4Option: '4叶 (四叶桨 - 弯道极限抓力)',
  throttleStickHeader: '实时油门摇杆模拟器',
  throttleStickLabel: '油门摇杆行程位置 (%)',
  snapIdleLabel: '怠速 (0%)',
  snapHoverLabel: '悬停点',
  snapCruiseLabel: '巡航 (50%)',
  snapPunchLabel: '满油暴冲 (100%)',
  telemetryHeader: 'FPV飞行遥测与动力诊断',
  twrRatioLabel: '推重比 (TWR)',
  hoverThrottleLabel: '悬停油门百分比',
  currentThrustLabel: '当前输出推力',
  instantGForceLabel: '瞬间垂直G值',
  zeroToHundredLabel: '0到100 km/h 弹射加速时间',
  recommendedCamAngleLabel: '推荐FPV摄像头仰角',
  windResistanceLabel: '抗风突防风速上限',
  totalMaxThrustLabel: '总计最大静止推力',
  maxPitchAngleLabel: '最大可持续俯仰倾角',
  tuningHeader: 'Betaflight PID与固件调参建议',
  tpaRecommendationLabel: '油门PID衰减 (TPA)',
  dynamicIdleLabel: '推荐动态怠速',
  propwashRiskLabel: '桨洗湍流控制裕度',
  tierUnderpoweredTitle: '动力不足或强风漂移风险',
  tierUnderpoweredDesc: '推重比低于2比1时拉力不足以迅速拉起俯冲，仅适合平静室内飞行。',
  tierCinematicTitle: '平稳电影级航拍巡航',
  tierCinematicDesc: '推重比在2比1至4比1之间，油门线性细腻，画面平稳无果冻。',
  tierFreestyleTitle: '运动敏捷花飞表现',
  tierFreestyleDesc: '推重比在4比1至8比1之间，摇杆响应敏锐，花飞翻滚利落。',
  tierAcroProTitle: '高阶竞技花飞与废墟穿越',
  tierAcroProDesc: '推重比在8比1至13比1之间，具备瞬间垂直爆发力与极佳的桨洗抑制能力。',
  tierRacingExtremeTitle: '极限规格FPV竞速赛机',
  tierRacingExtremeDesc: '推重比超过13比1，提供职业竞速赛道所需的强悍动力输出。',
  hudThrustCurveTitle: '非线性推力输出响应曲线',
  hudHoverMarker: '悬停点',
  hudCurrentStickMarker: '当前油门',
  hudGForceLabel: 'G值',
  hudTiltAngleLabel: '镜头角',
  hudVectorPowerLabel: '实时动力遥测状态',
};

const faqItems = [
  {
    question: '花飞穿越机最理想的推重比是多少？',
    answer: '对于花飞穿越机，8比1到12比1的推重比能够提供瞬间拉起自由落体和极速转向所需的充沛动力。',
  },
  {
    question: '非线性油门曲线如何影响悬停操控？',
    answer: '无刷电机的推力与转速平方成正比。高功率穿越机的悬停点通常位于油门摇杆行程的20至35百分比区间。',
  },
  {
    question: '为什么FPV摄像头仰角取决于推重比？',
    answer: '高推重比机型在高速巡航时前倾角度更大。为了让飞手在FPV飞行眼镜中保持水平视野，摄像头通常向上倾斜35到50度。',
  },
  {
    question: '桨叶数量对飞行手感有何影响？',
    answer: '双叶桨提供最长续航和极速表现；三叶桨具备均衡的花飞手感；四叶桨则在急转弯时提供更强的低转速抓附力。',
  },
];

const howToSteps = [
  {
    name: '输入无人机全备重量或选择预设',
    text: '输入包含电池和高清相机的全备起飞重量，单位为克。',
  },
  {
    name: '配置电机与桨叶规格',
    text: '设置电机数量、桨叶叶片数以及厂商标称的最大静拉力测试值。',
  },
  {
    name: '调节实时油门摇杆并查看遥测',
    text: '拖动油门滑块，实时观察输出推力、G值以及非线性曲线上的位置。',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'FPV穿越机推重比与空气动力学解析',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '推重比（TWR）决定了多旋翼无人机的垂直加速度与机动控制权。在FPV花飞和竞速飞行中，充足的动力余量使飞手能够在高速俯冲到底部时瞬间拉起并精准避开障碍物。',
  },
  {
    type: 'title',
    text: 'FPV无人机平台分类与目标性能基准',
    level: 2,
  },
  {
    type: 'table',
    headers: ['机型类别', '标准全备重量', '目标推重比', '悬停油门位置', '0到100加速', '镜头仰角'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5比1', '35百分比', '1.20秒', '15度至25度'],
      ['4S 花飞 3.5"', '250g', '12.0比1', '24百分比', '0.28秒', '35度至45度'],
      ['6S 花飞 5" Pro', '680g', '11.5比1', '25百分比', '0.30秒', '35度至50度'],
      ['6S 远航 7"', '1150g', '8.3比1', '30百分比', '0.45秒', '20度至30度'],
      ['8S 影视机 X8', '4200g', '6.1比1', '38百分比', '0.70秒', '15度至25度'],
    ],
  },
  {
    type: 'title',
    text: '非线性油门响应与电机推力特性',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '无刷电机产生的拉力呈指数增长，油门摇杆顶部的最后20百分比行程可产生超过40百分比的总推力。',
  },
  {
    type: 'list',
    items: [
      '悬停控制区（20至35百分比）：适合低空微调与平稳悬停的高分辨率区间。',
      '巡航飞行区（35至65百分比）：兼顾前进速度与电池放电效率的稳定区间。',
      '全油门暴冲区（70至100百分比）：产生极高垂直G值的爆发加速区间。',
    ],
  },
  {
    type: 'title',
    text: '桨叶搭配与Betaflight调参建议',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '对于推重比超过10比1的高动力机型，建议在Betaflight中开启油门PID衰减（TPA），以防止大油门直线冲刺时出现D项振荡。',
  },
  {
    type: 'tip',
    title: 'Betaflight TPA参数推荐',
    html: '将TPA起始点设为1250或1350，衰减率设为0.65，可消除高速飞行时的机身震动，保持画面纯净。',
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
      priceCurrency: 'CNY',
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
