import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'drone-battery-c-rating-calculator';
const title = '无人机 LiPo 电池 C 数与持续放电电流计算器';
const description = '基于单体电池内阻和电机功耗，计算穿越机与无人机 LiPo 电池的真实持续放电电流、C 倍率、电压压降（Voltage Sag）及飞行安全诊断。';

const ui = {
  title: '无人机 LiPo 电池 C 数计算器',
  subtitle: '分析多轴无人机的真实持续放电、峰值负载需求及电压压降',
  lipoSpecsHeader: '电池参数规格',
  capacityLabel: '容量 (mAh)',
  claimedCRatingLabel: '标称 C 数 (C-Rating)',
  cellCountLabel: '电池串联 S 数 (Series)',
  chemistryLabel: '电池化学类型',
  internalResistanceLabel: '单体电池内阻 (mΩ)',
  quadSpecsHeader: '无人机动力功耗',
  motorCountLabel: '电机数量',
  peakMotorCurrentLabel: '单电机峰值电流 (A)',
  auxCurrentLabel: '辅助设备电流 (图传/飞控/相机) (A)',
  presetSelectLabel: '快速预设',
  customPreset: '自定义',
  whoopPreset: '1S TinyWhoop 微型机',
  freestyle5Preset: '6S 5英寸 花飞机',
  cinewhoopPreset: '4S 3英寸 涵道机',
  longRange7Preset: '6S 7英寸 远航机',
  racing5Preset: '6S 5英寸 竞速机',
  resultsHeader: '动力与性能分析',
  claimedMaxCurrentLabel: '标称最大电流',
  realisticCRatingLabel: '真实持续 C 数',
  realisticMaxCurrentLabel: '真实持续放电电流',
  totalPeakDrawLabel: '总峰值抽流',
  voltageSagLabel: '预估电压压降',
  sagNominalVoltageLabel: '负载下标称电压',
  flightTimeFullThrottleLabel: '全油门续航时间',
  flightTimeHoverLabel: '预估悬停续航时间',
  safetyStatusLabel: '安全性诊断',
  statusOptimalTitle: '安全且最佳的电池匹配',
  statusOptimalDesc: '电池可以轻松提供峰值电流，不会产生过大发热或严重压降。能够显著延长电池循环寿命。',
  statusWarningTitle: '中度发热与电压应力',
  statusWarningDesc: '峰值抽流接近电池的真实放电极限。在大油门猛推时会出现轻微的电压压降。',
  statusDangerTitle: '过流与严重压降风险高',
  statusDangerDesc: '无人机峰值抽流超过电池真实放电能力。存在过热、严重压降和电池加速老化的风险。',
  lipoVisualizerTitle: '实时 LiPo 电池状态可视化',
  cellVoltageLabel: '单体电压',
  batteryHealthLabel: '电池负载应力',
  burstRatingRequiredLabel: '所需峰值 C 数',
  currentRatioLabel: '动力负载比例',
};

const faqItems = [
  {
    question: '穿越机 LiPo 电池的 C 数代表什么？',
    answer: 'C 数表示相对于电池容量的最大持续放电速率。例如 1500mAh 标称 100C 的电池，理论上可提供最高 150A 电流。',
  },
  {
    question: '为什么标称 C 数通常高于实际放电能力？',
    answer: '厂商通常标注的是短时间爆发极限或理想实验室条件下的虚高数值。真实持续放电直接取决于单体电池的内阻。',
  },
  {
    question: '内阻如何影响电压压降和电池发热？',
    answer: '内阻相当于电池内部的寄生电阻。当大电流通过时，内阻会导致电压骤降，并将电能转化为热能发热。',
  },
  {
    question: '花飞飞行中如何避免电压压降 (Voltage Sag)？',
    answer: '使用低内阻的高品质电池，保持比峰值抽流高出至少 15% 的安全余量，且静置电压不要低于单体 3.5V。',
  },
];

const howToSteps = [
  {
    name: '选择预设或输入电池参数',
    text: '输入容量 (mAh)、标称 C 数、串联 S 数以及单体平均内阻。',
  },
  {
    name: '配置无人机电机与电子设备功耗',
    text: '设置电机数量、全油门下单电机峰值电流及图传等辅助设备电流。',
  },
  {
    name: '查看安全诊断与真实电流',
    text: '对比计算出的真实持续电流与无人机峰值抽流，确保飞行安全。',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: '理解穿越机 LiPo 电池 C 数与真实动力输出',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '为 FPV 穿越机选择合适的 LiPo 电池需要建立电池容量、C 数与电机电流消耗之间的对应关系。虽然厂家常宣传 100C 甚至更高，但真实的持续放电受限于内阻与散热能力。本计算器可算出真实的持续电流保障安全。',
  },
  {
    type: 'title',
    text: '航模 RC 电池化学类型对比表',
    level: 2,
  },
  {
    type: 'table',
    headers: ['化学类型', '标称电压', '最高电压', '能量密度', '峰值放电', '推荐应用场景'],
    rows: [
      ['LiPo (标准聚合物)', '3.7V', '4.20V', '高', '100C - 150C', '5英寸 FPV 竞速与花飞穿越机'],
      ['LiHV (高压聚合物)', '3.8V', '4.35V', '很高', '80C - 120C', 'TinyWhoop 与微型空圈机'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', '极高', '15C - 35C', '7英寸 长航时远航穿越机'],
      ['LiFePO4 (磷酸铁锂)', '3.3V', '3.65V', '中等', '30C - 50C', '外场充电站与电源箱'],
    ],
  },
  {
    type: 'title',
    text: '电压压降与内阻对 FPV 穿越机性能的影响',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '电压压降 (Voltage Sag) 是指在急加油门时电池电压的瞬间骤降。内阻偏高的老旧电池在大电流下会把电能大量转化为热能，导致 FPV 眼镜 OSD 界面提前弹出低压报警。',
  },
  {
    type: 'list',
    items: [
      '超低内阻 (单体 1-4 mΩ): 动力爆发极佳，压降极小，工作温度低。',
      '中等内阻 (单体 5-10 mΩ): 标准花飞飞行性能，油门全开时有轻微压降。',
      '高内阻 (单体 >12 mΩ): 动力明显衰减，严重压降，电池发热剧烈。',
    ],
  },
  {
    type: 'title',
    text: '花飞、竞速与远航无人机的电池匹配优化',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '不同的飞行风格对供电系统有截然不同的要求。5英寸花飞机在做动作时会产生超过 120A 的短时电流爆发，而 7英寸远航机则更看重平稳高效的持续巡航。合理的电池匹配能有效防止空中意外断电掉机。',
  },
  {
    type: 'tip',
    title: 'LiPo 电池保存维保建议',
    html: '闲置电池时请务必保持在单体 3.80V 至 3.85V 的保存电压 (Storage Mode)。满电放置超过 48 小时会导致电池内阻永久性升高并损伤容量。',
  },
];

const schemas: DroneBatteryCRatingCalculatorLocaleContent['schemas'] = [
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

export const content: DroneBatteryCRatingCalculatorLocaleContent = {
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
