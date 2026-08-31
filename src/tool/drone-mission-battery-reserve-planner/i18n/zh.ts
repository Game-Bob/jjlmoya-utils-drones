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
    sections: {
      batteryPropulsion: '1. 电池与动力系统',
      flightAtmosphere: '2. 飞行剖面与气象环境',
    },
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
      surveyMeta: '测绘',
      scoutMeta: '侦察',
      hoverMeta: '悬停',
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
      voltageSagSubLabel: '电压压降损失',
      maxRadiusSubLabel: '包含作业悬停的最大安全半径',
      powerSubLabel: '功率',
    },
    statusBadges: {
      optimalTitle: '最佳电池储备余量',
      optimalSubtitle: '具备充足降落储备电量的安全飞行剖面',
      tightTitle: '储备余量偏紧警告',
      tightSubtitle: '降落储备偏低，请密切关注电池电压变化',
      criticalTitle: '紧急电量警报',
      criticalSubtitle: '已触及储备底线，请立即开启自动返航',
      exceededTitle: '超出安全容量任务',
      exceededSubtitle: '电池电量不足以安全完成任务并降落',
    },
    chart: {
      batteryProfileTitle: '非线性电池电量分配剖面',
      modelTitle: '空气动力学功率与风场模型',
      windLabel: '风速',
      homeNode: '起飞点',
      targetNode: '目标点',
      landNode: '降落点',
      launchPadLabel: '起飞平台',
      surveyHoverLabel: '目标作业悬停',
      safeRadiusLabel: '安全半径',
      outboundSegment: '去程飞行',
      targetSegment: '作业悬停',
      returnSegment: '返航飞行',
      reserveSegment: '安全储备',
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
      html: '无人机飞行安全基于非线性空气动力学规律。在逆风条件下飞行需要更大的倾角来维持地速，这会导致电机负载和功耗非线性增加。',
    },
    {
      type: 'paragraph',
      html: '规划引擎根据风向和风速条件动态计算每个飞行航段的功耗。',
    },
    {
      type: 'title',
      text: '目标区域悬停时间的计算',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在测绘和巡检任务中，无人机需在目标区域悬停作业，这会在返航前消耗一部分固定电量。在求解最大返航半径前需先扣除该作业电量。',
    },
    {
      type: 'list',
      items: [
        '在计算飞行边界前先设置目标作业悬停时间。',
        '充分评估去程逆风航段的峰值功率。',
        '实时监控大电流放电下的LiPo电芯压降。',
        '一旦触及预设的安全储备线请立即返航。',
      ],
    },
    {
      type: 'tip',
      title: 'LiPo电池压降警示',
      html: '大电流放电会导致锂电池内部电阻压降，从而减少实际可释放的瓦时容量。',
    },
    {
      type: 'title',
      text: '无人机电池储备计算公式',
      level: 2,
    },
    {
      type: 'table',
      headers: ['参数', '计算模型', '单位'],
      rows: [
        ['总能量容量', '容量 (mAh) x 电压 (V) / 1000', '瓦时 (Wh)'],
        ['压降损失', '总能量 x 压降因子', '瓦时 (Wh)'],
        ['逆风功率', '基础功率 x (1 + 0.65 x 风速比)^1.3', '瓦特 (W)'],
        ['最大安全半径', '(可用能量 - 悬停能量) / 每公里耗电量', '公里 (km)'],
      ],
    },
    {
      type: 'title',
      text: '无人机飞行规划最佳实践',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在商业无人机作业中，始终将实际遥测日志与飞行前计算数据对比，以确保最高安全等级。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
