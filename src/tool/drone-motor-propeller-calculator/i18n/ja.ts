import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'drone-motor-propeller-calculator';
const title = 'ドローンモーター・プロペラ推力計算ツール';
const description = 'KV値、バッテリー voltage、プロペラ形状、機体重量からドローンの推力、負荷回転数、ピッチ speed、消費電力および電流を推定します。';

const ui = {
  "presetsHeader": "フライトプロファイルを選択",
  "presetTinyCruiser": "軽量マイクロクルーザー 3.5インチ",
  "presetFreestyle": "フリースタイル 5インチ",
  "presetLongRange": "ロングレンジ 7インチ",
  "presetCinelifter": "シネリフター 8モーター",
  "unitHeader": "表示単位",
  "metricUnit": "メートル法",
  "imperialUnit": "ヤード・ポンド法",
  "setupHeader": "パワートレインとフレーム",
  "motorKvLabel": "モーターKV値 (RPM/V)",
  "batteryVoltageLabel": "バッテリー電圧",
  "propDiameterLabel": "プロペラ直径",
  "propPitchLabel": "プロペラピッチ",
  "bladeCountLabel": "ブレード数",
  "motorCountLabel": "モーター数",
  "droneWeightLabel": "飛行総重量 (RTF)",
  "benchDataHeader": "メーカー測定データ",
  "benchThrustLabel": "モーターあたりの推力",
  "benchVoltageLabel": "測定電圧",
  "optionalLabel": "任意",
  "twoBlades": "2枚羽根",
  "threeBlades": "3枚羽根",
  "fourBlades": "4枚羽根",
  "twoMotors": "2モーター",
  "fourMotors": "4モーター",
  "sixMotors": "6モーター",
  "eightMotors": "8モーター",
  "resultsHeader": "推力・揚力バランス",
  "estimatedLabel": "物理モデル推定値。",
  "benchBasedLabel": "ベンチマーク調整済み。",
  "loadedRpmLabel": "負荷回転数",
  "pitchSpeedLabel": "理論ピッチスピード",
  "thrustPerMotorLabel": "モーター単体推力",
  "totalThrustLabel": "静止合計推力",
  "totalPowerLabel": "推定消費電力",
  "totalCurrentLabel": "推定消費電流",
  "thrustMarginLabel": "揚力マージン",
  "hoverThrottleLabel": "ホバリングスロットル",
  "sceneCaption": "負荷時プロペラ回転速度",
  "underpoweredStatus": "マージン不足",
  "workableStatus": "実用マージon",
  "headroomStatus": "十分なマージン",
  "underpoweredAdvice": "合計推力が機体重量の2倍未満です。風に対する耐性や急速な姿勢制御回復力が低下する可能性があります。",
  "workableAdvice": "通常飛行に適したマージンです。計算結果を信頼する前に長時間のホバリング後にモーターとESCの温度を確認してください。",
  "headroomAdvice": "十分な静止揚力マージンがあります。制御応答性が向上しますが、ESCやバッテリーへの負荷が大きくなります。",
  "sourceNote": "測定データは推力のみを補正します。電力と電流はモデル推定値です。",
  "modelSourceNote": "測定データなし。物理係数モデルを使用。",
  "manufacturerNote": "可能な限り同一のモーターとプロペラのベンチマークデータをご利用ください。",
  "modelNote": "静止推力、電力、電流は推定値です。実際の性能は空気密度やモーター損失に依存します。",
  "safetyNote": "飛行前に実際の推力スタンドで電流と温度を確認してください。",
  "thrustAxisLabel": "推力方向",
  "weightAxisLabel": "機体重量",
  "clearBenchData": "測定データをクリア"
};

const faq = [
  {
    "question": "このドローンモーター・プロペラ計算ツールで何が計算できますか？",
    "answer": "KV値、電圧、プロペラサイズ、重量から負荷回転数、ピッチスピード、モーター単体および合計推力、消費電力、電流を推定します。"
  },
  {
    "question": "ドローンモーターとプロペラの最適な組み合わせ方は？",
    "answer": "メーカー推奨のKV値とプロペラサイズから始め、合計推力と機体重量を比較し、推力スタンドで電流と温度を測定します。"
  },
  {
    "question": "なぜメーカーの測定データの方が高精度なのですか？",
    "answer": "実際のプロペラ形状や空力損失が含まれているためです。ツールはそのデータを指定電圧に合わせてスケールします。"
  },
  {
    "question": "プロペラサイズは推力にどう影響しますか？",
    "answer": "静止推力は直径と回転数に大きく依存します。大口径プロペラはより多くの空気を動かせますが、より高いトルクが必要です。"
  },
  {
    "question": "このツールで飛行の安全性が保証されますか？",
    "answer": "いいえ。設計の計画用ツールです。初飛行の前にテストスタンドで実際の電流と温度を確認してください。"
  }
];

const howTo = [
  {
    "name": "フライトプロファイルを選択",
    "text": "プリセットを選択して、KV値、電圧、プロペラ、重量の標準的な初期値を読み込みます。"
  },
  {
    "name": "フレームとプロペラのスペックを入力",
    "text": "飛行総重量とモーター・プロペラの仕様を入力します。メートル法とヤード・ポンド法を切り替え可能です。"
  },
  {
    "name": "測定データを追加",
    "text": "ベンチマークデータがある場合は、推力と測定電圧を入力してモデルを較正します。"
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'ドローンモーターとプロペラの適合原理',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'モーターとプロペラの組み合わせは、回転数、直径、ピッチ、電圧、トルクのバランスです。このツールは静止揚力と電気的負荷を評価します。',
  },
  {
    type: 'title',
    text: '表示される計算結果',
    level: 2,
  },
  {
    type: 'table',
    headers: ["項目","意味"],
    rows: [["負荷回転数","無負荷KV推定値に負荷係数を適用したRPM"],["静止推力","モーター単体推力および全体の合計揚力"],["揚力マージン","飛行総重量に対する合計静止推力の比率"],["電力と電流","指定電圧における推定消費電力とアンペア数"]],
  },
  {
    type: 'title',
    text: '計算ツールの使い方',
    level: 2,
  },
  {
    type: 'list',
    items: ["モーターKV値とバッテリー電圧を入力。","プロペラ直径、ピッチ、ブレード数、モーター数を選択。","必要に応じてメーカーのベンチマークデータを追加。","飛行前にテストスタンドで電流と温度を検証。"],
  },
  {
    type: 'title',
    text: '実測データの重要性',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'プロペラの推力は空気密度やブレード形状に依存します。実測データを使用することで高精度な補正が可能です。計算結果は同じ条件でモーターとプロペラを比較するために使い、機体重量、負荷時の電圧、ESC、取り付け状態も確認してください。初飛行前に電流と温度を測定し、余裕を残して設定を調整します。',
  },
  {
    type: 'tip',
    title: 'テスト手順のヒント',
    html: '初飛行の前にテストスタンドで各スロットル位置での電流と温度を測定してください。',
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
