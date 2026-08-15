import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'drone-battery-c-rating-calculator';
const title = 'ドローンLiPoバッテリーCレートおよび連続放電計算ツール';
const description = '内部抵抗とモーター消費電流に基づいて、ドローン用LiPoバッテリーの現実的な連続放電電流、Cレート、電圧降下（ボルテージサグ）、および飛行安全性診断を計算します。';

const ui = {
  title: 'ドローンLiPoバッテリーCレート計算ツール',
  subtitle: 'マルチロプターの現実的な連続放電、ピーク要求、およびボルテージサグを分析',
  lipoSpecsHeader: 'バッテリー仕様',
  capacityLabel: '容量 (mAh)',
  claimedCRatingLabel: '公称Cレート',
  cellCountLabel: 'セル数 (直列S)',
  chemistryLabel: 'バッテリー化学種類',
  internalResistanceLabel: '1セルあたりの内部抵抗 (mΩ)',
  quadSpecsHeader: 'ドローンの消費電力',
  motorCountLabel: 'モーター数',
  peakMotorCurrentLabel: 'モーター1個あたりのピーク電流 (A)',
  auxCurrentLabel: '補機類消費電流 (VTX, FC, カメラ) (A)',
  presetSelectLabel: 'クイックプリセット',
  customPreset: 'カスタム',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5インチ フリースタイル',
  cinewhoopPreset: '4S 3インチ シネウープ',
  longRange7Preset: '6S 7インチ ロングレンジ',
  racing5Preset: '6S 5インチ レース',
  resultsHeader: '出力およびパフォーマンス分析',
  claimedMaxCurrentLabel: '公称最大電流',
  realisticCRatingLabel: '現実的な連続Cレート',
  realisticMaxCurrentLabel: '現実的な連続放電電流',
  totalPeakDrawLabel: '合計ピーク消費電流',
  voltageSagLabel: '推定電圧降下 (サグ)',
  sagNominalVoltageLabel: '負荷時公称電圧',
  flightTimeFullThrottleLabel: 'フルスロットル航続時間',
  flightTimeHoverLabel: '推定ホバリング時間',
  safetyStatusLabel: '安全性診断',
  statusOptimalTitle: '安全で最適なバッテリー適合',
  statusOptimalDesc: 'バッテリーは過度な発熱や著しい電圧サグを生じることなく、ピーク電流を余裕を持って供給できます。セル寿命の長命化が期待できます。',
  statusWarningTitle: '中程度の熱・電圧ストレス',
  statusWarningDesc: 'ピーク消費電流がバッテリーの現実的な限界に近づいています。急加速時に軽度の電圧降下が予想されます。',
  statusDangerTitle: '過電流およびボルテージサグの高リスク',
  statusDangerDesc: 'ピーク消費電流がバッテリーの現実的な限界を超えています。過熱、深刻な電圧降下、早期劣化の危険性があります。',
  lipoVisualizerTitle: 'リアルタイムLiPoステータス表示',
  cellVoltageLabel: 'セルあたり電圧',
  batteryHealthLabel: 'バッテリー負荷状態',
  burstRatingRequiredLabel: '必要バーストCレート',
  currentRatioLabel: '電力負荷比率',
};

const faqItems = [
  {
    question: 'ドローン用LiPoバッテリーのCレートとは何ですか？',
    answer: 'Cレートはバッテリー容量に対する最大連続放電速度を表します。例えば1500mAhで100Cのバッテリーは、理論上150Aの電流を供給できます。',
  },
  {
    question: 'なぜ公称Cレートは実際の性能より高いことが多いのですか？',
    answer: 'メーカーは短時間のバースト値や理想的な条件の数値を表記することが多いためです。実際の連続放電能力は内部抵抗に大きく依存します。',
  },
  {
    question: '内部抵抗は電圧降下や発熱にどのように影響しますか？',
    answer: '高い内部抵抗はセル内部の無駄な抵抗として機能します。大電流を引くと電圧が急降下し、エネルギーが熱として放出されます。',
  },
  {
    question: 'フリースタイル飛行でのボルテージサグを防ぐにはどうすればよいですか？',
    answer: '内部抵抗の低い高品質セルを使用し、ピーク消費に対して15%以上の安全マージンを確保し、セルあたり3.5V未満まで放電しないようにしてください。',
  },
];

const howToSteps = [
  {
    name: 'プリセット選択または仕様入力',
    text: '容量 (mAh)、公称Cレート、直列セル数、および1セルあたりの平均内部抵抗を入力します。',
  },
  {
    name: 'ドローンの消費電力を設定',
    text: 'モーター数、フルスロットル時の1機あたりピーク電流、補機類の消費電流を入力します。',
  },
  {
    name: '安全性診断と現実的電流を確認',
    text: '計算された現実的な連続電流とドローンのピーク消費電流を比較し、安全性を確認します。',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'ドローンLiPoのCレートと実際の出力電流の理解',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'FPVドローンに適したLiPoバッテリーを選択するには、バッテリー容量、Cレート、モーターの消費電流の関係を理解することが不可欠です。公称100C以上の表示があっても、実際の連続放電能力は内部抵抗と放熱限界により決定されます。この計算ツールは安全な運用マージンを提供します。',
  },
  {
    type: 'title',
    text: 'RCバッテリー化学種類の比較表',
    level: 2,
  },
  {
    type: 'table',
    headers: ['化学種類', '公称電圧', '最大電圧', 'エネルギー密度', 'ピーク放電', '推奨用途'],
    rows: [
      ['LiPo (標準)', '3.7V', '4.20V', '高い', '100C - 150C', '5インチ FPV レースおよびフリースタイル'],
      ['LiHV (高電圧)', '3.8V', '4.35V', '非常に高い', '80C - 120C', 'TinyWhoop および マイクロドローン'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', '最高', '15C - 35C', '7インチ ロングレンジ長距離機'],
      ['LiFePO4', '3.3V', '3.65V', '中程度', '30C - 50C', '屋外親電源およびフィールド充電器'],
    ],
  },
  {
    type: 'title',
    text: 'ボルテージサグと内部抵抗がFPVドローンに与える影響',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'ボルテージサグとは、急速なアクセル操作時にバッテリー電圧が一時的に急降下する現象です。内部抵抗が高い古いバッテリーでは、推進力にならず熱に変わるエネルギーが増え、OSD上で早期にローバッテリー警告が発生します。',
  },
  {
    type: 'list',
    items: [
      '低内部抵抗 (1-4 mΩ/セル): 抜群のパンチ力、最小限のサグ、低い発熱温度。',
      '中程度内部抵抗 (5-10 mΩ/セル): フリースタイルでの標準的な性能。',
      '高内部抵抗 (>12 mΩ/セル): 明らかなパワー不足、深刻なサグ、急激な発熱。',
    ],
  },
  {
    type: 'title',
    text: 'フリースタイル・レース・ロングレンジ別の最適化',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '飛行スタイルごとに要求される電力特性は異なります。5インチのフリースタイル機は120Aを超える瞬 inter 瞬時電流を要求する一方、7インチのロングレンジ機は一定の効率的な巡航電流が重視されます。適切なバッテリーマッチングが上空での突然のシャットダウンを防ぎます。',
  },
  {
    type: 'tip',
    title: 'LiPo保管の重要ポイント',
    html: '使用しないときは、常に1セルあたり3.80V〜3.85Vのストレージ電圧で保管してください。満充電のまま48時間以上放置すると内部抵抗が永久的に増加し、放電能力が低下します。',
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
      priceCurrency: 'JPY',
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
