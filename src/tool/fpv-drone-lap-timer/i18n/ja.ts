import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-lap-timer';
const title = 'FPVドローンレース ラップ＆スプリットタイマー';
const description = 'FAI音響スタートシーケンス、区間スプリット差分、最速ラップ通知、ラップ一貫性指数、速度テレメトリを備えたFPVドローンレース用インタラクティブタイマー。';

const ui = {
  setupHeading: 'コースとセッション設定',
  trackLengthLabel: 'コース全長',
  trackLengthUnit: 'メートル',
  targetLapsLabel: '目標ラップ数',
  targetLapsUnit: 'ラップ (0でフリー練習)',
  batteryCapacityLabel: 'バッテリー容量',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: '音響シグナルを有効化',
  debounceThresholdLabel: '二重押し防止ガード時間',
  debounceThresholdUnit: '秒',
  presetMultiGpLabel: 'MultiGP仕様 (250m / 3周)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5周)',
  presetSprintLabel: '高速スプリント (400m / 2周)',
  startCountdownButton: 'FAIカウントダウン開始',
  pauseTimerButton: 'セッション一時停止',
  resumeTimerButton: 'タイマー再開',
  resetTimerButton: 'セッションリセット',
  recordLapButton: 'ラップ記録',
  spacebarHint: 'ゲート通過時にスペースキーを押すか、巨大ボタンをタップしてください',
  statusIdle: 'スタート待機中',
  statusCountdown: 'FAIカウントダウン中',
  statusRunning: 'レース計測中',
  statusPaused: '一時停止中',
  statusFinished: 'レース完了',
  currentLapHeading: '現在ラップタイム',
  lapNumberPrefix: '周回',
  lastLapHeading: '前回ラップ',
  fastestLapHeading: '最速ラップ',
  averageLapHeading: '平均ラップ',
  deltaBestHeading: 'ベスト差',
  consistencyIndexHeading: 'ラップ一貫性指数',
  estimatedSpeedHeading: '推定平均時速',
  estimatedBatteryHeading: '推定バッテリー消費',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh 残量',
  lapHistoryHeading: 'ラップタイムとペース比較',
  lapColumnHeader: '周回 #',
  timeColumnHeader: 'タイム',
  splitColumnHeader: 'ベスト差',
  speedColumnHeader: '平均時速',
  batteryColumnHeader: 'バッテリー消費',
  noLapsRecordedNotice: '記録されたラップはまだありません。カウントダウンを開始してスペースキーを押してください。',
  consistencyRatingElite: 'エリート級の一貫性',
  consistencyRatingPro: 'プロレーサー級の一貫性',
  consistencyRatingClub: 'クラブ級の一貫性',
  consistencyRatingNovice: 'トレーニング段階の一貫性',
  fastestLapBadge: '最速ラップ',
  sessionSummaryHeading: 'セッション要約と出力',
  totalTimeLabel: 'レース総所要時間',
  completedLapsLabel: '完了ラップ数',
  exportCsvButton: 'ラップをCSVで保存',
  copySummaryButton: '要約テキストをコピー',
  copiedNotice: 'セッション要約をクリップボードにコピーしました！',
};

const faqItems = [
  {
    question: 'FAI音響スタートシークエンスはどのように動作しますか？',
    answer: '国際航空連盟（FAI）CIAM F9Uドローンレースの公式ルールに準拠しています。1秒間隔の予備ビープ音が4回鳴った後、甲高い発走音が鳴り、タイマーが完全にゼロから開始されます。',
  },
  {
    question: 'ラップ一貫性指数はどのように計算されますか？',
    answer: '完了したラップタイムの標準偏差とセッション平均ラップタイムを比較してスコア化します。95％以上は極めて精密なライン取りとスロットルワークが行われていることを示します。',
  },
  {
    question: 'フットペダルやプロポのスイッチでラップを記録できますか？',
    answer: 'はい。スペースキーのキー入力を送信できるワイヤレスキーボード、Bluetoothフットスイッチ、ゲームパッドのボタンなどを使用すれば、画面を見ずに足や手元で即座にラップを記録できます。',
  },
  {
    question: '誤動作防止（デバウンスガード）が設定されている理由は何ですか？',
    answer: 'FPVゲートは高速で通過しますが、意図しない二度押しやスイッチのチャタリングにより誤ったミリ秒単位のラップが記録されるのを防ぐため、指定時間（標準3秒）未満の入力を除外します。',
  },
  {
    question: '推定平均速度の精度はどの程度ですか？',
    answer: '入力されたコース中心線の全長を計測されたラップ時間で割ることで算出されます。コーナー通過時の実速度はライン取りの半径や機体のバンク角によって異なります。',
  },
];

const howToSteps = [
  {
    name: 'コース長と周回数を設定する',
    text: 'メートル単位のコース全長と目標周回数を入力するか、MultiGPなどのプリセットを選択します。',
  },
  {
    name: 'FAI音響カウントダウンを開始する',
    text: 'カウントダウン開始をクリックし、予備ブザー音に続いて発走ブザー音が鳴るのを待ちます。',
  },
  {
    name: 'ゲート通過ごとにラップを記録する',
    text: 'ドローンがスタート・フィニッシュゲートを通過するたびに、画面のボタンを押すかスペースキーを叩きます。',
  },
  {
    name: 'テレメトリ、差分、一貫性を分析する',
    text: 'ペース比較チャート、ベストタイムとの差分、一貫性指数を確認し、計測データをCSV形式で出力します。',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'FPVマルチロータードローンレースにおける高精度タイム計測の要件',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '競技用FPVドローンレースでは、ミリ秒単位の計時精度とブレのない飛行ラインが求められます。5インチレーシング機は時速140kmを超え、立体的なゲートやダイブループをすり抜けます。効果的な練習には、統一された音響スタート合図、ゲート通過時の即時記録、複数周回にわたるペース配分の分析が欠かせません。',
  },
  {
    type: 'title',
    text: '各種ドローン競技カテゴリーと計測パラメーターの比較',
    level: 2,
  },
  {
    type: 'table',
    headers: ['規格 / クラス', '典型的なコース長', '周回数', '平均ラップタイム', '想定最高速度', '推奨ガード時間'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m - 80m', '5周', '8.5秒 - 13.0秒', '35 - 55 km/h', '2.0秒'],
      ['Micro 3.5インチ (4S)', '120m - 180m', '4周', '12.0秒 - 18.0秒', '70 - 110 km/h', '2.5秒'],
      ['MultiGP Spec 5インチ (6S)', '200m - 300m', '3周', '14.0秒 - 22.0秒', '100 - 150 km/h', '3.0秒'],
      ['オープンフィールド (6S/8S)', '350m - 500m', '2周', '20.0秒 - 32.0秒', '130 - 180 km/h', '4.0秒'],
    ],
  },
  {
    type: 'title',
    text: '発走音シークエンスとFAI F9Uスポーツ規定',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'FAI CIAM Section 4のドローンレース規定に基づき、ビデオゴーグルを装着したパイロット間の反応差を均一にするため、視覚的な旗ではなく規定の音響シグナルで発走します。1秒間隔の440Hz音に続き、880Hzの発走音でタイマーがスタートします。',
  },
  {
    type: 'list',
    items: [
      '予備シグナル：スロットル位置を定め、最初のゲートへの視線を集中させる準備音。',
      '発走音 (Go)：即座にアームして離陸するシグナルで、t = 0から計測が開始されます。',
      '通過確認音：ゴーグルから目を離さずにラップ記録を確認できる明瞭な確認音。',
      'ベストタイム通知音：セッションの最高記録を更新した際に鳴る特別な和音チャイム。',
    ],
  },
  {
    type: 'title',
    text: 'ラップ一貫性指数とレース戦略の重要性',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '一度きりの突出したファステストラップも魅力的ですが、大会で勝利を収めるのは一貫性です。周回ごとのタイム差が0.3秒未満に収まるパイロットは、プロップウォッシュの乱気流を避け、バッテリー電圧を最終スプリントまで保つことができます。',
  },
  {
    type: 'tip',
    title: '練習現場での活用テクニック',
    html: '計測タブレットやスマートフォンをパイロット席の近くに置き、音量を十分に上げてください。Bluetoothのフットスイッチや小型キーボードを足元に配置すれば、プロポのスティックから指を離さずに足でラップを記録できます。',
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
      priceCurrency: 'JPY',
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
