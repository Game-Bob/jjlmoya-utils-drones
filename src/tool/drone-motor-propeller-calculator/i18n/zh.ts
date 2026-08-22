import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'drone-motor-propeller-calculator';
const title = '无人机电机与螺旋桨推力计算器';
const description = '根据电机KV值、电池电压、螺旋桨尺寸和机身重量，估算无人机电机推力、负载转速、螺距速度、功率与电流。';

const ui = {
  "presetsHeader": "选择飞行预设",
  "presetTinyCruiser": "轻型微型巡航机 3.5英寸",
  "presetFreestyle": "花飞机 5英寸",
  "presetLongRange": "远航机 7英寸",
  "presetCinelifter": "电影级载重机 8电机",
  "unitHeader": "显示单位",
  "metricUnit": "公制",
  "imperialUnit": "英制",
  "setupHeader": "动力系统与机架",
  "motorKvLabel": "电机KV值 (RPM/V)",
  "batteryVoltageLabel": "电池电压",
  "propDiameterLabel": "螺旋桨直径",
  "propPitchLabel": "螺旋桨螺距",
  "bladeCountLabel": "桨叶数量",
  "motorCountLabel": "电机数量",
  "droneWeightLabel": "起飞全重 (RTF)",
  "benchDataHeader": "厂家测试点数据",
  "benchThrustLabel": "单电机推力",
  "benchVoltageLabel": "测试电压",
  "optionalLabel": "选填",
  "twoBlades": "2叶",
  "threeBlades": "3叶",
  "fourBlades": "4叶",
  "twoMotors": "2电机",
  "fourMotors": "4电机",
  "sixMotors": "6电机",
  "eightMotors": "8电机",
  "resultsHeader": "推力与升力平衡",
  "estimatedLabel": "基于物理模型估算。",
  "benchBasedLabel": "已校准台测数据。",
  "loadedRpmLabel": "负载转速",
  "pitchSpeedLabel": "理论螺距速度",
  "thrustPerMotorLabel": "单电机推力",
  "totalThrustLabel": "总静态推力",
  "totalPowerLabel": "估算功率",
  "totalCurrentLabel": "估算电流",
  "thrustMarginLabel": "升力裕度",
  "hoverThrottleLabel": "悬停油门",
  "sceneCaption": "负载下螺旋桨转速",
  "underpoweredStatus": "裕度不足",
  "workableStatus": "可用裕度",
  "headroomStatus": "充沛裕度",
  "underpoweredAdvice": "总推力不足起飞重量的2倍。应对大风或电压骤降的恢复能力受限。",
  "workableAdvice": "适合正常飞行的实用裕度。建议在长时间悬停后检查电机和电调温度。",
  "headroomAdvice": "充沛的静态升力储备。可显著提升操控响应，但会增加电调与电池的电流负担。",
  "sourceNote": "测试点仅校准推力，功率和电流仍为模型估算值。",
  "modelSourceNote": "无测试点，推力采用透明物理系数模型。",
  "manufacturerNote": "请优先使用同款电机与螺旋桨的厂家测试数据。",
  "modelNote": "静态推力、功率与电流均为估算值，实际性能取决于空气密度与电机损耗。",
  "safetyNote": "飞行前请务必在推力测试台上验证实际电流与温度。",
  "thrustAxisLabel": "推力方向",
  "weightAxisLabel": "机身重量",
  "clearBenchData": "清除测试点"
};

const faq = [
  {
    "question": "这款无人机电机与螺旋桨计算器可以计算什么？",
    "answer": "它可以根据电机KV、电压、桨叶规格和重量，估算负载RPM、理论螺距速度、单电机及总推力、功率和电流。"
  },
  {
    "question": "如何为无人机匹配合适的电机和螺旋桨？",
    "answer": "首先参考厂家推荐的KV和桨叶尺寸，对比总推力与起飞全重，并在飞行前通过推力台验证电流和温度。"
  },
  {
    "question": "为什么厂家测试点比纯物理模型更准确？",
    "answer": "因为测试点包含了真实桨叶几何结构和损耗。计算器会将该数据按指定电压进行等比缩放。"
  },
  {
    "question": "螺旋桨尺寸如何影响无人机推力？",
    "answer": "静态推力高度依赖于直径和转速。更大直径的螺旋桨能推动更多空气，但需要电机提供更大的扭矩。"
  },
  {
    "question": "该计算器能否保证无人机飞行安全？",
    "answer": "不能。它是一个设计规划工具。飞行前请务必在测试台上验证实际电流、温度和推力。"
  }
];

const howTo = [
  {
    "name": "选择飞行预设",
    "text": "选择最接近的预设，以加载合理的KV、电压、桨叶和重量初始值。"
  },
  {
    "name": "输入机架与螺旋桨数据",
    "text": "输入起飞全重以及电机和螺旋桨规格。支持公制与英制单位切换。"
  },
  {
    "name": "添加台测数据",
    "text": "如果有厂家或测试台数据，请输入单电机推力和测试电压以校准模型。"
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: '无人机电机与螺旋桨匹配原理',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '电机与螺旋桨的搭配是转速、直径、螺距、电压和扭矩之间的平衡。本工具估算静态升力和电气负载，方便在购买前评估储备。',
  },
  {
    type: 'title',
    text: '计算器显示的结果',
    level: 2,
  },
  {
    type: 'table',
    headers: ["结果","技术含义"],
    rows: [["负载转速","应用负载系数后的估算RPM"],["静态推力","单电机推力及多轴总升力"],["升力裕度","总静态推力与起飞全重的对比"],["功率与电流","指定电压下的估算用电需求"]],
  },
  {
    type: 'title',
    text: '如何使用无人机推力计算器',
    level: 2,
  },
  {
    type: 'list',
    items: ["输入电机KV值和电池电压。","选择螺旋桨直径、螺距、叶数和电机数。","如有条件，添加厂家测试台数据。","飞行前在测试台上验证电流与温度。"],
  },
  {
    type: 'title',
    text: '测试数据的的重要性',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '螺旋桨推力取决于空气密度和几何形状。使用厂家台测数据能提供最准确的校准。',
  },
  {
    type: 'tip',
    title: '测试建议',
    html: '在首次飞行前，使用测试台测量各油门位置下的电流与电机温度。',
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
