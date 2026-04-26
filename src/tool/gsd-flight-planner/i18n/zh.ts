import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gsd-flight-planner';
const title = 'GSD 飞行计划: 无人机地面采样距离计算器';
const description = '计算摄影测量任务的地面采样距离 (GSD)。支持 DJI、Autel 和自定义相机。通过视觉质量指标进行实时任务规划。';

const faqItems = [
  {
    question: '什么是地面采样距离 (GSD)？',
    answer: 'GSD 是图像中一个像素在地面上代表的距离。较低的 GSD 意味着更高的分辨率和细节。例如，1 cm/px 的 GSD 允许您辨别小至 1 厘米的细节，这对于测绘至关重要。',
  },
  {
    question: '如何找到我的无人机相机规格？',
    answer: '查看您的无人机手册以获取传感器尺寸 and 焦距。或者，使用我们针对 DJI Mavic 3E 或 Autel EVO II 等流行型号的相机预设。对于自定义相机，请根据镜头规格测量传感器尺寸。',
  },
  {
    question: '不同类型的任务需要多少 GSD？',
    answer: '高精度地形测绘：1-2 cm/px。标准测绘：2-5 cm/px。检查 and 监测：5-10 cm/px。视觉调查：10+ cm/px。根据您的项目精度要求进行选择。',
  },
  {
    question: '什么是图像重叠，为什么它很重要？',
    answer: '重叠是指在连续照片中出现的区域百分比。高重叠（60-80%）可确保完整覆盖 and 提高 3D 模型质量。航向重叠影响照片间距；旁向重叠影响航线数量。',
  },
  {
    question: '如何计算理想的飞行高度？',
    answer: '使用此计算器：所需 GSD × 焦距 ÷ 传感器宽度 = 高度。计算器会自动执行此操作， and 显示保持目标精度 and 避免运动模糊的最大安全高度。',
  },
];

const howToSteps = [
  {
    name: '选择或配置相机',
    text: '从预配置型号（DJI Mavic 3E、Autel EVO II 等）中选择，或手动输入传感器尺寸 and 焦距。预设会立即加载所有参数。',
  },
  {
    name: '设置飞行高度',
    text: '使用高度滑块调整离地高度 (AGL)。实时观察 GSD 更新，了解高度如何影响图像分辨率。',
  },
  {
    name: '定义重叠要求',
    text: '设置航向 and 旁向重叠百分比。较高的重叠可确保完整覆盖，但会增加任务时间 and 图像数量。',
  },
  {
    name: '查看结果 and 导出',
    text: '检查 GSD、覆盖区域 and 精度分类。生成快速报告以附加到您的正式飞行计划中。',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: '配置',
    cameraSelection: '相机选择',
    manualMode: '手动模式',
    sensorConfig: '传感器配置',
    width: '宽度',
    height: '高度',
    focalLength: '焦距',
    imageResolution: '图像分辨率',
    w: '宽',
    h: '高',
    px: 'px',
    altitudeAgl: '高度 (AGL)',
    overlapSettings: '重叠配置',
    forward: '航向',
    lateral: '旁向',
    missionArea: '任务区域',
    totalAreaToSurvey: '总测量面积',
    hectareHint: '1 ha = 10,000 m²',
    inverseCalc: '反向计算',
    targetGsd: '目标 GSD',
    maxAltitude: '最大高度',
    reset: '重置',
    results: '结果',
    gsdResult: '地面采样距离 (GSD)',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: '高精度',
    standard: '标准',
    inspection: '检查',
    visual: '视觉',
    coveragePerImage: '单张图像覆盖范围',
    area: '面积',
    spacing: '间距',
    flightDir: '飞行方向 →',
    missionMetrics: '任务指标',
    images: '图像',
    shots: '张',
    flightLines: '航线数量',
    lines: '条',
    flightTime: '飞行时间',
    min: '分钟',
    dataVolume: '数据量',
    gb: 'GB',
    copyShareLink: '复制链接',
    downloadReport: '下载报告',
    copiedToClipboard: '已复制！',
    metric: '公制',
    imperial: '英制',
    classHighPrecision: '高精度地形测绘',
    classStandard: '标准测绘',
    classInspection: '检查 and 监测',
    classVisual: '视觉调查',
    ultraHighResAlert: '超高分辨率：请确保有足够的存储 and 处理能力',
    lowOverlapAlert: '航向重叠低于 60%：可能会影响 3D 模型质量',
    largeDatasetAlert: '数据集非常大：考虑将其分成多次飞行',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'GSD 飞行计划: 完整的摄影测量计算器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>地面采样距离 (GSD)</strong> 是无人机摄影测量中最重要的指标。计算错误可能会浪费一整天的飞行时间， and 因生产力损失而造成数千美元的损失。此计算器消除了该风险。',
    },
    {
      type: 'title',
      text: '为什么 GSD 对专业人士至关重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '无论您是在测绘土地、创建 3D 模型还是监测基础设施，GSD 都决定了您可以捕获的细节水平。1 cm/px 的任务可以捕获 5 cm/px 任务遗漏的细节。但飞得太低会浪费电池 and 毫无必要地延长任务时间。',
    },
    {
      type: 'title',
      text: '按任务类型划分的 GSD',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>高精度地形测绘 (1-2 cm/px)：</strong> 针对地块、矿区 and 工程项目的测绘级精度。',
        '<strong>标准测绘 (2-5 cm/px)：</strong> 正射影像、农业监测 and 通用地图。',
        '<strong>检查 and 监测 (5-10 cm/px)：</strong> 建筑物检查、电力线审查 and 变化检测。',
        '<strong>视觉调查 (10+ cm/px)：</strong> 大范围侦察 and 视觉评估。',
      ],
    },
    {
      type: 'title',
      text: 'GSD 公式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (高度 × 传感器宽度) / (焦距 × 图像宽度) × 100</code><br/>此计算器处理数学运算。您专注于任务。',
    },
    {
      type: 'title',
      text: '重叠：为什么 60-80% 是最佳平衡点',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '低重叠 (20-40%) 可以节省电池，但存在覆盖范围出现间隙的风险。高重叠 (80%+) 可以保证完整覆盖，但会延长任务时间。<strong>60-80% 范围</strong> 是专业标准：它确保了完整的 3D 重建，而没有过多的冗余。',
    },
    {
      type: 'title',
      text: '利用真实数据规划更好的任务',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在每次飞行之前，使用此计算器确定：所需 GSD 的确切高度、需要的照片数量、总任务时间 and 是否存在运动模糊风险。有了这些数据，您将执行精确的任务 and 避免代价高昂的错误。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
