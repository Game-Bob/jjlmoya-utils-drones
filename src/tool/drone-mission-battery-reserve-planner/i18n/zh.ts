import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-mission-battery-reserve-planner';
const title = '无人机任务电池储备规划工具';
const description = '计算无人机返航安全电池储备余量、逆风阻力功率损耗及最大安全不可逆返航半径。';

const faqItems = [
  {
    question: '为什么逆风飞行比顺风飞行消耗更多电量？',
    answer: '逆风飞行需要更大的倾角来克服空气阻力并维持地速，从而导致电机电流消耗非线性急剧增加。',
  },
  {
    question: '目标区域悬停时间如何影响返航临界点？',
    answer: '在目标区域的作业悬停时间会直接消耗可用电池电量，从而缩短可用于往返飞行的安全半径。',
  },
  {
    question: '负载下LiPo电池电压压降的原因是什么？',
    answer: '大电流放电会增加锂电池内部电阻损耗，从而降低实际可用的瓦时容量。',
  },
];

const howToSteps = [
  {
    name: '输入电池与动力参数',
    text: '输入电池容量(mAh)、标称电压(V)和平均巡航电流(A)。',
  },
  {
    name: '设置单程距离与目标悬停时间',
    text: '指定单程飞行距离以及在目标区域预计的作业悬停时间。',
  },
  {
    name: '配置风速与风向',
    text: '选择环境风速以及相对于去程的风向，应用空气动力学功率修正。',
  },
  {
    name: '查看安全半径与遥测数据',
    text: '检查计算出的不可逆返航点、分段功率消耗以及降落时的预计剩余电量。',
  },
];

const schemas: DroneMissionBatteryReservePlannerLocaleContent['schemas'] = [
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
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '无人机任务电池储备规划工具',
    subtitle: '计算返航安全余量、风力影响及飞行半径',
    description: '具有逆风修正与返航临界点计算的高精度无人机电池储备规划器。',
    inputs: {
      unitSystemLabel: '单位制',
      metricLabel: '公制',
      imperialLabel: '英制',
      presetLabel: '快速任务预设',
      batteryCapacityLabel: '电池容量',
      batteryVoltageLabel: '标称电压',
      averageCurrentLabel: '平均巡航电流',
      cruiseSpeedLabel: '空速巡航速度',
      oneWayDistanceLabel: '单程目标距离',
      targetHoverTimeLabel: '目标区域作业时长',
      windSpeedLabel: '环境风速',
      windDirectionLabel: '相对于去程的风向',
      windHeadwindLabel: '去程逆风',
      windTailwindLabel: '去程顺风',
      windCrosswindLabel: '侧风',
      reservePolicyLabel: '安全储备缓冲比例',
    },
    presets: {
      mappingSurvey: '测绘与航拍',
      fpvRecon: 'FPV远航侦察',
      cinematicInspection: '建筑结构巡检',
      microRecon: '微型无人机侦察',
    },
    results: {
      totalCapacityEnergy: '总容量电量',
      usableEnergy: '任务可用电量',
      reserveEnergyBuffer: '安全储备缓冲电量',
      totalAutonomyTime: '总续航飞行时间',
      maxSafeMissionRadius: '不可逆返航点半径',
      outboundLegTime: '去程飞行时长',
      targetHoverTime: '目标悬停时长',
      returnLegTime: '返航飞行时长',
      totalMissionTime: '总飞行总时长',
      remainingEnergyLanding: '降落时预计剩余电量',
      feasibilityStatus: '任务可行性评估',
    },
    statusBadges: {
      optimal: '最佳电池储备余量',
      tight: '储备余量偏紧警告',
      critical: '紧急电量警报',
      exceeded: '超出安全容量任务',
    },
    chart: {
      batteryProfileTitle: '电池电量消耗分析',
      outboundSegment: '去程飞行阶段',
      targetSegment: '目标作业悬停',
      returnSegment: '返航飞行阶段',
      reserveSegment: '安全储备缓冲',
    },
  },
  seo: [
    {
      type: 'title',
      text: '逆风飞行中的空气动力学功率损失',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在逆风条件下飞行需要更大的倾角来维持地速，这会导致电机负载和功耗非线性增加。',
    },
    {
      type: 'title',
      text: '目标区域悬停时间的计算',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在测绘和巡检任务中，无人机需在目标区域悬停作业，这会在返航前消耗一部分固定电量。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
