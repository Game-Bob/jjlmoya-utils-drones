import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-lap-timer';
const title = 'FPV无人机竞速圈速与分段计时器';
const description = '适用于FPV穿越机竞速的交互式计时器，支持FAI声学发车倒计时、分段差值比对、最快圈速提醒、圈速一致性指数与速度遥测。';

const ui = {
  setupHeading: '赛道与比赛设置',
  trackLengthLabel: '赛道单圈长度',
  trackLengthUnit: '米',
  targetLapsLabel: '目标圈数',
  targetLapsUnit: '圈 (设为0进行自由练习)',
  batteryCapacityLabel: '电池组容量',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: '启用声学提示音',
  debounceThresholdLabel: '防重触发屏蔽时间',
  debounceThresholdUnit: '秒',
  presetMultiGpLabel: 'MultiGP标准赛道 (250米 / 3圈)',
  presetWhoopLabel: 'Tiny Whoop微型穿越机 (65米 / 5圈)',
  presetSprintLabel: '高速直线冲刺 (400米 / 2圈)',
  startCountdownButton: '启动FAI倒计时',
  pauseTimerButton: '暂停比赛',
  resumeTimerButton: '继续计时',
  resetTimerButton: '重置赛局',
  recordLapButton: '记录圈速',
  spacebarHint: '穿越终点龙门架时按下空格键或点击巨大按钮记录',
  statusIdle: '准备起飞',
  statusCountdown: 'FAI倒计时进行中',
  statusRunning: '比赛计时进行中',
  statusPaused: '已暂停',
  statusFinished: '比赛完成',
  currentLapHeading: '当前圈用时',
  lapNumberPrefix: '第',
  lastLapHeading: '上一圈',
  fastestLapHeading: '最快单圈',
  averageLapHeading: '平均单圈',
  deltaBestHeading: '与最快圈差距',
  consistencyIndexHeading: '圈速一致性指数',
  estimatedSpeedHeading: '预估平均时速',
  estimatedBatteryHeading: '预估电量消耗',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh 剩余',
  lapHistoryHeading: '圈速记录与配速分析',
  lapColumnHeader: '圈数 #',
  timeColumnHeader: '用时',
  splitColumnHeader: '最快圈差距',
  speedColumnHeader: '平均速度',
  batteryColumnHeader: '电池消耗',
  noLapsRecordedNotice: '暂无圈速记录。启动倒计时并在每次通过终点时按下空格键。',
  consistencyRatingElite: '顶级一致性',
  consistencyRatingPro: '职业飞手一致性',
  consistencyRatingClub: '俱乐部选手一致性',
  consistencyRatingNovice: '练习阶段一致性',
  fastestLapBadge: '最快圈',
  sessionSummaryHeading: '赛局总结与导出',
  totalTimeLabel: '比赛总用时',
  completedLapsLabel: '已完成圈数',
  exportCsvButton: '导出圈速数据为CSV',
  copySummaryButton: '复制文本摘要',
  copiedNotice: '赛局摘要已复制到剪贴板！',
};

const faqItems = [
  {
    question: '本计时器中的FAI声学发车流程如何运作？',
    answer: '发车流程完全遵循国际航空运动联合会（FAI）CIAM F9U无人机竞速官方竞赛规则。先以一秒为间隔发出四声准备提示音，随后发出高频起飞蜂鸣，计时器在极准的零时刻同步启动。',
  },
  {
    question: '圈速一致性指数是如何计算的？',
    answer: '该指数通过计算已完成圈速相对于赛局平均圈速的标准差得出。得分超过95%表明飞手具备极致精准的走线轨迹控制与细腻的油门管理。',
  },
  {
    question: '可以使用脚踏板或遥控器开关打圈吗？',
    answer: '可以。任何能够发送空格键信号的无线键盘、蓝牙脚踏开关或遥控器按键映射，都可以在无需注视或触摸屏幕的情况下瞬间记录圈速。',
  },
  {
    question: '为什么记录圈速需要设置防重触发屏蔽？',
    answer: '无人机穿越龙门架时速度极高，但不经意的双击或按键机械抖动可能误记毫秒级的虚假圈速。防重触发器会自动忽略短于预设时间（默认3秒）的重复触发。',
  },
  {
    question: '预估的平均飞行时速准确吗？',
    answer: '速度根据赛道中心线长度除以圈速计算得出。弯道中的实际飞行速度会根据走线半径和无人机的横滚倾斜角有所浮动。',
  },
];

const howToSteps = [
  {
    name: '配置赛道距离与比赛圈数',
    text: '输入赛道单圈米数和目标圈数，或选择MultiGP等现成预设。',
  },
  {
    name: '启动FAI声学发车倒计时',
    text: '点击启动倒计时，聆听预备提示音并在发车高频音响起时油门全开。',
  },
  {
    name: '穿越终点龙门架时记录圈速',
    text: '每次无人机穿过起终点龙门架时按下空格键或点击屏幕按钮。',
  },
  {
    name: '分析遥测数据、分段与一致性',
    text: '查看配速对比柱状图、与最快圈差距及一致性评分，并将数据导出为CSV。',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'FPV多旋翼无人机竞速中的高精度圈速测量准则',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '专业FPV穿越机竞速对毫秒级计时与精准走线有着严苛要求。5英寸竞速机飞行时速超过140公里，穿梭于三维龙门架与障碍旗门之间。高水平训练必须依靠标准化的发车声学信号、瞬时过门记录以及多圈比赛中配速衰减的科学分析。',
  },
  {
    type: 'title',
    text: '各类穿越机竞速组别与计时核心参数对比',
    level: 2,
  },
  {
    type: 'table',
    headers: ['竞赛规格 / 组别', '常见赛道单圈长度', '单轮圈数', '平均圈速范围', '最高时速区间', '建议防抖时间'],
    rows: [
      ['Tiny Whoop微型机 (65mm 1S)', '50米 - 80米', '5圈', '8.5秒 - 13.0秒', '35 - 55 km/h', '2.0秒'],
      ['Micro小轴距机 (3.5英寸 4S)', '120米 - 180米', '4圈', '12.0秒 - 18.0秒', '70 - 110 km/h', '2.5秒'],
      ['MultiGP 5英寸主流赛机 (6S)', '200米 - 300米', '3圈', '14.0秒 - 22.0秒', '100 - 150 km/h', '3.0秒'],
      ['开阔场地冲刺赛 (6S/8S)', '350米 - 500米', '2圈', '20.0秒 - 32.0秒', '130 - 180 km/h', '4.0秒'],
    ],
  },
  {
    type: 'title',
    text: '发车声学信号规则与FAI F9U竞技准则',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '根据国际航空运动联合会（FAI）CIAM Section 4关于无人机竞速的规则，比赛采用标准化音频信号而非视觉旗帜启动发车，以确保佩戴FPV飞行眼镜的选手拥有平等的反应时间。音响序列包含间隔1秒的440Hz提示音与起飞时的880Hz鸣响。',
  },
  {
    type: 'list',
    items: [
      '预备提示音：飞手稳定初始油门并注视第一个拐角进气流的听觉准备信号。',
      '发车音 (Go)：发车瞬间信号，比赛计时从t = 0开始极速流转。',
      '过门确认音：清晰的声响回馈让飞手无需将视线移出FPV画面即可确知圈速已入库。',
      '破纪录和弦音：当前圈速刷新本局最快成绩时触发的特殊提示音。',
    ],
  },
  {
    type: 'title',
    text: '圈速一致性指数与竞速战术把控',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '单圈极速固然亮眼，但冠军往往属于走线稳定的选手。一致性指数直观展现波动幅度：圈速差距维持在0.3秒以内的飞手能有效避免气流翻滚干扰，并为最后一圈冲刺储备电池放电电压。',
  },
  {
    type: 'tip',
    title: '飞行场地实战技巧',
    html: '将计时平板或手机置于飞手席旁并开大音量。在地面脚边放置蓝牙脚踏开关，无需松开遥控器摇杆，每圈飞过终点时用脚轻踩即可从容打圈。',
  },
];

const schemas: FpvDroneLapTimerLocaleContent['schemas'] = [
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

export const content: FpvDroneLapTimerLocaleContent = {
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
