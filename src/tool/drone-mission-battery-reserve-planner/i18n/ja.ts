import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-mission-battery-reserve-planner';
const title = 'ドローン任務バッテリー予備電力計画ツール';
const description = 'ドローン飛行任務における安全帰還バッテリー予備電力、向かい風抵抗損失、および最大安全限界半径を計算します。';

const faqItems = [
  {
    question: '向かい風飛行時に消費電力が急増する理由は何ですか？',
    answer: '向かい風では、空気抵抗を克服し対地速度を維持するために機体のピッチ角が大きくなり、モーター電流消費が非線形に増加します。',
  },
  {
    question: '目標地域でのホバリング時間はポイントオブノーリターンにどう影響しますか？',
    answer: '目標空域での作業ホバリング時間はバッテリーエネルギーを直接消費するため、往復可能な安全飛行半径が減少します。',
  },
  {
    question: '負荷時のLiPoバッテリー電圧降下の原因は何ですか？',
    answer: '大電流放電によりリチウムセルの内部抵抗損失が増加し、実効利用可能ワット時(Wh)が減少するためです。',
  },
];

const howToSteps = [
  {
    name: 'バッテリーおよび推進仕様を入力',
    text: 'バッテリー容量(mAh)、定格電圧(V)、および平均巡航電流(A)を入力します。',
  },
  {
    name: '片道距離と目標ホバリング時間を設定',
    text: '目標地点までの片道距離と現場での作業時間を指定します。',
  },
  {
    name: '風速と風向を設定',
    text: '往路に対する風速と風向を選択し、空気力学的な電力補正を適用します。',
  },
  {
    name: '安全半径とテレメトリを確認',
    text: '計算されたポイントオブノーリターン、区間ごとの消費電力、および着陸時の予想残量を検証します。',
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
    title: 'ドローン任務バッテリー予備電力計画ツール',
    subtitle: '帰還安全マージン、風の影響および飛行半径の計算',
    description: '向かい風補正と帰還限界閾値を備えた高精度ドローンバッテリー予備電力計画ツール。',
    sections: {
      batteryPropulsion: '1. バッテリー＆推進システム',
      flightAtmosphere: '2. 飛行プロフィール＆気象',
    },
    inputs: {
      unitSystemLabel: '単位系',
      metricLabel: 'メートル法',
      imperialLabel: 'ヤード・ポンド法',
      presetLabel: 'クイックプリセット',
      batteryCapacityLabel: 'バッテリー容量',
      batteryVoltageLabel: '定格電圧',
      averageCurrentLabel: '平均巡航電流',
      cruiseSpeedLabel: '対気巡航速度',
      oneWayDistanceLabel: '片道目標距離',
      targetHoverTimeLabel: '目標空域作業時間',
      windSpeedLabel: '風速',
      windDirectionLabel: '往路に対する風向',
      windHeadwindLabel: '往路向かい風',
      windTailwindLabel: '往路追い風',
      windCrosswindLabel: '横風',
      reservePolicyLabel: '安全予備マージン',
    },
    presets: {
      mappingSurvey: '測量＆マッピング',
      fpvRecon: 'FPV長距離偵察',
      cinematicInspection: '構造物点検撮影',
      microRecon: 'マイクロドローン偵察',
      surveyMeta: '測量',
      scoutMeta: '偵察',
      hoverMeta: 'ホバリング',
    },
    results: {
      totalCapacityEnergy: '総エネルギー容量',
      usableEnergy: '任務利用可能エネルギー',
      reserveEnergyBuffer: '安全予備エネルギー',
      totalAutonomyTime: '総飛行可能時間',
      maxSafeMissionRadius: '限界帰還半径',
      outboundLegTime: '往路飛行時間',
      targetHoverTime: '目標滞空時間',
      returnLegTime: '復路飛行時間',
      totalMissionTime: '総移動時間',
      remainingEnergyLanding: '着陸時予想バッテリー残量',
      feasibilityStatus: '任務実現可能性評価',
      voltageSagSubLabel: '電圧降下損失',
      maxRadiusSubLabel: '作業時間を考慮した最大安全半径',
      powerSubLabel: '電力',
    },
    statusBadges: {
      optimalTitle: '最適予備電力マージン',
      optimalSubtitle: '十分な着陸予備電力を持つ安全飛行領域',
      tightTitle: '予備電力不足警戒',
      tightSubtitle: '着陸予備電力が少数です。電圧降下に注意してください',
      criticalTitle: '緊急エネルギー警報',
      criticalSubtitle: '予備電力を超過しました。直ちに帰還を開始してください',
      exceededTitle: '安全容量超過任務',
      exceededSubtitle: '安全に着陸するためのバッテリー電力が不足しています',
    },
    chart: {
      batteryProfileTitle: '非線形配分エネルギープロフィール',
      modelTitle: '空気力学パワー＆風力モデル',
      windLabel: '風速',
      homeNode: '拠点',
      targetNode: '目標',
      landNode: '着陸',
      launchPadLabel: '離陸地点',
      surveyHoverLabel: '目標ホバリング',
      safeRadiusLabel: '安全半径',
      outboundSegment: '往路飛行',
      targetSegment: '目標作業',
      returnSegment: '復路飛行',
      reserveSegment: '予備電力',
    },
  },
  seo: [
    {
      type: 'title',
      text: '向かい風飛行における空気力学的パワー損失',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '無人航空機の飛行安全は非線形な空気力学に基づいています。向かい風の中での飛行は対地速度を維持するために機体のピッチ角を大きくする必要があり、モーター消費電力が急増します。',
    },
    {
      type: 'paragraph',
      html: '当ツールの計算エンジンは、風向と風速に応じて各飛行区間の消費電力を動的に算出します。',
    },
    {
      type: 'title',
      text: '目標空域でのホバリング時間の考慮',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '測量や点検の任務では現場上空でのホバリングが必要です。この消費電力は復路の最大半径を計算する前にあらかじめ減算されます。',
    },
    {
      type: 'list',
      items: [
        '限界計算を行う前に目標空域での作業時間を設定してください。',
        '向かい風区間における電力スパイクを考慮してください。',
        '高負荷時のLiPoセル電圧降下を追跡してください。',
        '設定した予備ラインに達したら直ちに帰還を開始してください。',
      ],
    },
    {
      type: 'tip',
      title: 'LiPoバッテリーの電圧降下に関する警告',
      html: '高電流放電は内部抵抗による電圧降下を引き起こし、実質的な利用可能エネルギーを減衰させます。',
    },
    {
      type: 'title',
      text: 'ドローンバッテリー予備電力の計算式',
      level: 2,
    },
    {
      type: 'table',
      headers: ['パラメータ', '計算モデル', '単位'],
      rows: [
        ['総エネルギー容量', '容量 (mAh) x 電圧 (V) / 1000', 'ワット時 (Wh)'],
        ['電圧降下損失', '総エネルギー x サグ係数', 'ワット時 (Wh)'],
        ['向かい風電力', '基本電力 x (1 + 0.65 x 風比率)^1.3', 'ワット (W)'],
        ['最大安全半径', '(利用可能エネルギー - ホバリング電力) / Kmあたり消費', 'キロメートル (km)'],
      ],
    },
    {
      type: 'title',
      text: 'UAV飛行計画におけるベストプラクティス',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '商業運航の安全性を維持するために、事前計算値と実際のテレメトリログを常に照合してください。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
