import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-power-analyzer';
const title = 'ドローンパワーアナライザー：FPV用推力重量比計算機';
const description = 'FPVドローンビルドの重要な推力重量比を計算します。即時のフライトプロファイル推奨、ビジュアルパワーゲージを取得し、シネマティック、フリースタイル、またはレース用に最適化します。';

const faqItems = [
  {
    question: '推力重量比とは何ですか？なぜ重要なのですか？',
    answer: '推力重量比は、ドローンが発生できる総推力をその総離陸重量（AUW）で割ったものです。これは、ドローンの飛行感覚を決定する最も重要な指標であり、ゆっくりと安定したもの（空撮）から超反応的なもの（レース）まで左右します。',
  },
  {
    question: 'フリースタイル飛行の「スイートスポット」となる比率は？',
    answer: 'スムーズなフリースタイル飛行の場合、スイートスポットは4:1から6:1の間です。4:1の比率は優れた機敏性と良好な安定性を提供し、6:1は非常に反応が良いですが、狭いスペースでのスロットル操作に繊細さが求められます。',
  },
  {
    question: '空撮用ビルドに使用できますか？',
    answer: 'はい。スムーズでゆっくりとした空撮ショットの場合、2:1から3:1の比率を目指してください。これによりドローンが安定し、予測しやすくなります。これより低いと制御が難しくなり、高いとゆっくりとした動きには過敏すぎると感じられます。',
  },
  {
    question: '比率が8:1を超えるとどうなりますか？',
    answer: '8:1を超えると、ドローンは実質的にレーシングマシンとなります。非常に反応が良く、操縦には高い技術が要求されます。経験豊富なパイロットのみがこれらのビルドを試みるべきです。レースゲートやスピードランには最適ですが、屋内では危険です。',
  },
  {
    question: 'AUWにバッテリーの重量を含める必要がありますか？',
    answer: 'はい。AUW（All-Up Weight：総離陸重量）は、フレーム、モーター、ESC、フライトコントローラー、カメラ、バッテリー、プロペラなど、すべてのコンポーネントを取り付けたドローンの総重量です。バッテリープリセットボタンを使用して、即座に重量を追加できます。',
  },
];

const howToSteps = [
  {
    name: 'モーター構成を選択',
    text: 'ビルドがクアッド（4）、ヘキサ（6）、またはオクト（8）モーター構成のどれであるかを選択します。この乗数は総推力にとって重要です。',
  },
  {
    name: 'モーター推力を入力',
    text: '各モーターが発生できる最大推力（グラム単位）を入力します。モーターの仕様を確認するか、クイックプリセットを使用してください。',
  },
  {
    name: '総重量を設定',
    text: 'ドローンの総離陸重量（AUW）を入力します（フレーム、モーター、バッテリー、カメラなどすべて）。バッテリープリセットを使用して即座に重量を調整できます。',
  },
  {
    name: '結果を確認',
    text: '計算機は即座に推力重量比、フライトプロファイルの適合性（シネマティック、フリースタイル、レース）、およびビルドに対するパーソナライズされた推奨事項を表示します。',
  },
];

const schemas: DronePowerAnalyzerLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DronePowerAnalyzerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    motorConfiguration: 'モーター構成',
    motorCount: 'モーター数',
    thrustPerMotor: 'モーター単体推力 (最大)',
    thrustUnit: 'g',
    quad: 'クアッド (4)',
    hexa: 'ヘキサ (6)',
    octo: 'オクト (8)',
    motorPresets: 'クイックモータープリセット',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: '重量構成',
    auwLabel: '総離陸重量 (AUW)',
    weightUnit: 'g',
    switchToLbs: 'ポンドに切り替え',
    switchToGrams: 'グラムに切り替え',
    batteryPresets: 'バッテリー重量を追加',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: '総推力',
    twRatio: '推力重量比',
    powerMeter: 'パワーメーター',
    flightProfiles: 'フライトプロファイル評価',
    cinematicLabel: 'シネマティック',
    freestyleLabel: 'フリースタイル',
    racingLabel: 'レース',
    proRacingLabel: 'プロレース',
    suitable: '適正',
    notSuitable: '不適正',
    recommendationLabel: '飛行スタイルの推奨',
    recommendation_low: '2:1未満の比率では、ドローンの安定性に問題が生じます。パフォーマンス向上のために、軽量化またはモーターのアップグレードを検討してください。',
    recommendation_cinematic: '{ratio}:1の比率は、スムーズで制御された動きを伴う重量級の空撮に理想的です。ゆっくりとした意図的なカメラワークに最適です。',
    recommendation_freestyle: '{ratio}:1の比率は、フリースタイル飛行のスイートスポットです。トリックのための安定性を維持しながら、優れた機敏性を発揮します。',
    recommendation_racing: '{ratio}:1の比率は、パフォーマンスフリースタイルの領域です。狭いスペースや高速操縦では、スロットル管理が非常に重要になります。',
    recommendation_extreme: '{ratio}:1の比率は、レーシングマシンです。非常に反応が良く、オープンエリアでの経験豊富なパイロット専用です。',
    compareMode: 'ビルドを比較',
    scenario1: 'ビルド A',
    scenario2: 'ビルド B',
    addComparison: '比較を追加',
    tooltipTWRatio: '推力重量比は、総推力をドローンの重量で割ったものです。比率が高いほど、加速が速くなり、コントロールの反応が良くなります。',
    tooltipFreestyle: 'フリースタイル飛行の「スイートスポット」は4:1から6:1の比率であり、機敏性とコントロールの最高のバランスを提供します。',
    badge_unstable: '不安定',
    badge_cinematic: 'シネマティック',
    badge_sweetSpot: 'スイートスポット',
    badge_racing: 'レース',
    badge_extreme: 'エクストリーム',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'FPVドローンの推力重量比を理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>推力重量比</strong>は、FPVドローン製作においておそらく最も重要な指標です。しかし、多くのパイロットが見落としてしまい、期待通りの挙動をしないビルドになってしまうことがあります。この計算機は計算を明確にし、あなたのビルドが実際にどのような飛行感覚になるかを正確に示します。',
    },
    {
      type: 'title',
      text: 'なぜ推力重量比が重要なのか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ドローンの比率は、<strong>安定性</strong>、<strong>反応性</strong>、<strong>速度</strong>という3つの基本的な要素を決定します。2:1の比率は鈍重で安定した感覚になります。6:1の比率は機敏で過敏な感覚になります。10:1の比率は純粋なレーシングマシンです。自分のビルドがこのスペクトルのどこに位置するかを理解することで、適切な飛行スタイルを選択し、現実的な期待を持つことができます。',
    },
    {
      type: 'title',
      text: 'フライトプロファイルの解説',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>シネマティック (2:1 - 4:1)</strong>: 重く、安定し、ゆっくり。スムーズなカメラの動きやペイロードを運ぶビルドに最適。',
        '<strong>フリースタイル (3.5:1 - 6.5:1)</strong>: バランスの取れたスイートスポット。トリックには十分な反応性があり、コントロールには十分な安定性がある。',
        '<strong>レース (5:1 - 8:1)</strong>: 高速で機敏。レースゲートやアグレッシブな操縦のために設計。',
        '<strong>プロレース (7:1+)</strong>: 極限のパフォーマンス。オープンエリアでのエキスパートパイロット専用。',
      ],
    },
    {
      type: 'title',
      text: '推力重量比の計算方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '計算式は単純です：<strong>比率 = (モーター単体推力 × モーター数) / 総離陸重量</strong>。例えば、800gの重量で600gの推力を持つモーターを使用したクアッド（総推力2,400g）は、3:1の比率になります。これはフリースタイルの領域です。',
    },
    {
      type: 'title',
      text: 'ビルドに最適な比率の選択',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '自問してみてください：<em>どのように飛ばしたいですか？</em> ゆっくりとした空撮？ アグレッシブなフリースタイルのトリック？ 高速レース？ その答えが理想的な比率を決定します。ほとんどのFPVパイロットは、コントロールと興奮の最高の妥協点である4:1から6:1の間に落ち着きます。',
    },
    {
      type: 'paragraph',
      html: '注意：高い比率が必ずしも「より良い」わけではありません。「より反応が良い」ことを意味します。レース用クアッドでは不可欠ですが、空撮用ビルドではむしろ足かせになることもあります。目的に合わせて意図的に選択してください。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
