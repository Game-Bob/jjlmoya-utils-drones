import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-mission-battery-reserve-planner';
const title = 'ドローンミッションバッテリー予備計画ツール';
const description = 'UAV飛行ミッション向けにRTH安全予備電力、向かい風抵抗損失、ポイントオブノーリターン半径を正確に計算します。';

const faqItems = [
  {
    question: '向かい風での飛行はなぜ消費電力が急増するのですか？',
    answer: '向かい風では空気抵抗を克服し対地速度を維持するためにピッチ角を深くする必要があり、モーターの電流消費が非線形に増加するためです。',
  },
  {
    question: '目的エリアでの滞空時間はポイントオブノーリターンにどう影響しますか？',
    answer: '目標上空でのホバリング時間はバッテリーエネルギーを直接消費するため、移動に割り当てられる安全往復半径が短くなります。',
  },
  {
    question: '負荷時のLiPoバッテリー電圧降下の原因は何ですか？',
    answer: '大電流放電によりリチウムセルの内部抵抗損失が増大し、実効利用可能ワット時が低下するためです。',
  },
];

const howToSteps = [
  {
    name: 'バッテリーと推進仕様を入力',
    text: 'バッテリー容量(mAh)、公称電圧(V)、平均ホバリング電流(A)を入力します。',
  },
  {
    name: '片道距離と目標滞空時間を設定',
    text: '目標地点までの片道距離と、現地でのホバリング検査時間を指定します。',
  },
  {
    name: '風速と風向を設定',
    text: '往路に対する風速と風向を選択し、空気力学的な電力補正を適用します。',
  },
  {
    name: '安全半径とテレメトリを確認',
    text: '計算された帰還不能限界点、区間別消費電力、着陸時バッテリー残量を確認します。',
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'ドローンミッションバッテリー予備計画ツール',
    subtitle: 'RTH安全予備電力、風の影響、飛行半径を計算',
    description: '対向風補正と帰還不能限界点を備えた高精度ドローン飛行予備電力計算機。',
    inputs: {
      unitSystemLabel: '単位系',
      metricLabel: 'メートル法',
      imperialLabel: 'ヤード・ポンド法',
      presetLabel: 'クイックミッションプリセット',
      batteryCapacityLabel: 'バッテリー容量',
      batteryVoltageLabel: '公称電圧',
      averageCurrentLabel: '平均巡航電流',
      cruiseSpeedLabel: '対気巡航速度',
      oneWayDistanceLabel: '片道目標距離',
      targetHoverTimeLabel: '目標エリア滞空時間',
      windSpeedLabel: '風速',
      windDirectionLabel: '往路に対する風向',
      windHeadwindLabel: '往路向かい風',
      windTailwindLabel: '往路追い風',
      windCrosswindLabel: '横風',
      reservePolicyLabel: '安全予備マージン',
    },
    presets: {
      mappingSurvey: '測量・フォトグラメトリ',
      fpvRecon: 'FPVロングレンジ調査',
      cinematicInspection: '構造物空撮点検',
      microRecon: 'マイクロドローン偵察',
    },
    results: {
      totalCapacityEnergy: '総エネルギー容量',
      usableEnergy: 'ミッション利用可能電力',
      reserveEnergyBuffer: '安全予備バッファ電力',
      totalAutonomyTime: '総飛行可能時間',
      maxSafeMissionRadius: 'ポイントオブノーリターン半径',
      outboundLegTime: '往路飛行時間',
      targetHoverTime: '現地ホバリング時間',
      returnLegTime: '復路飛行時間',
      totalMissionTime: '総移動時間',
      remainingEnergyLanding: '着陸時推定バッテリー残量',
      feasibilityStatus: 'ミッション実現可能性評価',
    },
    statusBadges: {
      optimal: '最適予備電力マージン',
      tight: '予備電力緊張警告',
      critical: '緊急エネルギー警報',
      exceeded: '安全容量超過ミッション',
    },
    chart: {
      batteryProfileTitle: 'バッテリー電力消費プロファイル',
      outboundSegment: '往路飛行区間',
      targetSegment: '目標上空ホバリング',
      returnSegment: '帰還飛行区間',
      reserveSegment: '安全予備バッファ',
    },
  },
  seo: [
    {
      type: 'title',
      text: '向かい風飛行における空気力学的電力損失',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '向かい風のなかでのドローン飛行は対地速度を保つために前傾姿勢を深める必要があり、モーター負荷が増大します。',
    },
    {
      type: 'title',
      text: '現地滞空時間の考慮',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '測量や点検業務では目標上空でのホバリング時間が不可欠であり、復路の前にエネルギーを消費します。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
