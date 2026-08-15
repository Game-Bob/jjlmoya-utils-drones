import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-thrust-to-weight-ratio';
const title = 'FPVドローン推力重量比および飛行テレメトリ計算機';
const description = 'FPVドローンおよびマルチローターの最大静止推力、非線形スロットル曲線、瞬間垂直Gフォース、ホバリングポイント、0から100km加速時間を計算します。';

const ui = {
  title: 'FPVドローン推力重量比計算機',
  subtitle: '推力曲線、リアルタイムのスロットル応答、垂直Gフォース、飛行俊敏性クラスを分析',
  presetsHeader: 'クイック設定プリセット',
  customPreset: 'カスタム設定',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S フリースタイル 3.5インチ',
  freestyle5Preset: '6S フリースタイル 5インチ Pro',
  longrange7Preset: '6S マウンテンLR 7インチ',
  cinelifter8Preset: '8S 大型シネリフター X8',
  specsHeader: 'ドローンおよびパワートレイン仕様',
  auwGramsLabel: 'バッテリー込み全備重量 (g)',
  motorCountLabel: 'モーター構成',
  thrustPerMotorLabel: 'モーターあたり最大静止推力 (g)',
  propellerSizeLabel: 'プロペラ直径 (インチ)',
  propellerPitchLabel: 'プロペラピッチ (インチ)',
  bladeCountLabel: 'ブレード枚数',
  blade2Option: '2枚羽 (バイブレード - 最高効率)',
  blade3Option: '3枚羽 (トライブレード - フリースタイル標準)',
  blade4Option: '4枚羽 (クアッドブレード - 最高グリップ)',
  throttleStickHeader: 'リアルタイムスロットルスティックシミュレーター',
  throttleStickLabel: 'スロットルスティック位置 (%)',
  snapIdleLabel: 'アイドル (0%)',
  snapHoverLabel: 'ホバリング点',
  snapCruiseLabel: '巡航 (50%)',
  snapPunchLabel: '全開パンチ (100%)',
  telemetryHeader: 'FPV飛行テレメトリおよび性能診断',
  twrRatioLabel: '推力重量比 (TWR)',
  hoverThrottleLabel: 'ホバリングスロットル位置',
  currentThrustLabel: '現在発生推力',
  instantGForceLabel: '瞬間垂直Gフォース',
  zeroToHundredLabel: '0から100 km/h パンチアウト時間',
  recommendedCamAngleLabel: '推奨FPVカメラチルト角',
  windResistanceLabel: '耐風突入限界速度',
  totalMaxThrustLabel: '合計最大静止推力',
  maxPitchAngleLabel: '最大維持傾斜角',
  tuningHeader: 'Betaflight PIDおよびファームウェア推奨設定',
  tpaRecommendationLabel: 'スロットルPID減衰 (TPA)',
  dynamicIdleLabel: '推奨ダイナミックアイドル',
  propwashRiskLabel: 'プロップウォッシュ制御余裕度',
  tierUnderpoweredTitle: '推力不足または風流されリスク',
  tierUnderpoweredDesc: 'TWRが2対1未満の場合、急降下の停止に十分なパワーがありません。穏やかな屋内飛行にのみ適しています。',
  tierCinematicTitle: '滑らかなシネマティック巡航',
  tierCinematicDesc: 'TWRが2対1から4対1の間で、滑らかなスロットル制御とブレのない安定した空撮映像を提供します。',
  tierFreestyleTitle: 'スポーティで俊敏なフリースタイル',
  tierFreestyleDesc: 'TWRが4対1から8対1で、素早い応答性と切れのあるアクロバットマニューバを実現します。',
  tierAcroProTitle: '高性能アクロおよびバンドーフリースタイル',
  tierAcroProDesc: 'TWRが8対1から13対1で、爆発的な垂直加速と即座のプロップウォッシュ解消を実現します。',
  tierRacingExtremeTitle: '極限スペックのドローンレーシング',
  tierRacingExtremeDesc: 'TWRが13対1を超え、プロの競技用FPVサーキットに必要な圧倒的パワーを提供します。',
  hudThrustCurveTitle: '非線形推力応答曲線',
  hudHoverMarker: 'ホバリング点',
  hudCurrentStickMarker: '現在スティック',
  hudGForceLabel: 'Gフォース',
  hudTiltAngleLabel: 'カメラ角',
  hudVectorPowerLabel: 'リアルタイム推力テレメトリ',
};

const faqItems = [
  {
    question: 'フリースタイルFPVドローンに最適な推力重量比はどれくらいですか？',
    answer: 'フリースタイルドローンの場合、8対1から12対1のTWRがあれば、急降下の即座な引き起こしや高Gターンの連続飛行に必要な推進力が得られます。',
  },
  {
    question: '非線形スロットル曲線はホバリングにどう影響しますか？',
    answer: 'ブラシレスモーターは回転数の2乗に比例して推力を発生します。このため高出力機では、通常スティックの20から35パーセント付近でホバリングします。',
  },
  {
    question: 'なぜFPVカメラの角度は推力重量比に依存するのですか？',
    answer: 'TWRが高いドローンは前傾姿勢を深くして高速巡航します。ゴーグル内で水平線を中央に保つため、パイロットはカメラを35から50度上向きに傾けます。',
  },
  {
    question: 'プロペラのブレード枚数で飛行フィーリングはどう変わりますか？',
    answer: '2枚羽は最長の飛行時間と最高速を発揮します。3枚羽はフリースタイルに最適なバランスを持ち、4枚羽はタイトなコーナーで強力なグリップ力を生み出します。',
  },
];

const howToSteps = [
  {
    name: 'ドローン重量の入力またはプリセット選択',
    text: 'バッテリーおよびHDカメラを含めた全備重量をグラム単位で入力します。',
  },
  {
    name: 'モーターおよびプロペラパラメータの設定',
    text: 'モーター数、ブレード枚数、およびメーカーの最大静止推力測定値を指定します。',
  },
  {
    name: 'リアルタイムスロットルの調整と確認',
    text: 'スロットルスティックを操作して、発生推力、Gフォース、および推力曲線上での動作点を確認します。',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'FPVドローンにおける推力重量比の航空力学',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '推力重量比（TWR）はマルチローター機の加速力と制御追従性を決定する最も基本的な指標です。FPVフリースタイルやレースでは、十分な出力余裕を持つことで、自由落下の瞬時リカバリーや狭い空間での精密制御が可能になります。',
  },
  {
    type: 'title',
    text: 'FPVドローンプラットフォーム分類と目標性能',
    level: 2,
  },
  {
    type: 'table',
    headers: ['機体クラス', '標準AUW全備重量', '目標TWR比', 'ホバリング位置', '0から100加速', 'カメラチルト角'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5対1', '35パーセント', '1.20秒', '15度から25度'],
      ['4S フリースタイル 3.5"', '250g', '12.0対1', '24パーセント', '0.28秒', '35度から45度'],
      ['6S フリースタイル 5" Pro', '680g', '11.5対1', '25パーセント', '0.30秒', '35度から50度'],
      ['6S マウンテンLR 7"', '1150g', '8.3対1', '30パーセント', '0.45秒', '20度から30度'],
      ['8S シネリフター X8', '4200g', '6.1対1', '38パーセント', '0.70秒', '15度から25度'],
    ],
  },
  {
    type: 'title',
    text: '非線形スロットル特性とモーター推力変化',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '電動ブラシレスモーターの推力は回転速度に対して指数関数的に増大します。スロットル操作の上位20パーセントで全推力の40パーセント以上が発生します。',
  },
  {
    type: 'list',
    items: [
      'ホバリング領域（20から35パーセント）：地上付近での微細な位置調整に適した領域。',
      '巡航領域（35から65パーセント）：バッテリー消費と前進速度が調和した安定巡航領域。',
      'フルスロットル領域（70から100パーセント）：高Gフォースを伴う爆発的垂直加速領域。',
    ],
  },
  {
    type: 'title',
    text: 'プロペラ選定とBetaflightチューニングのポイント',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'TWRが10対1を超える機体では、全開時のモーター振動を防ぐため、BetaflightのThrottle PID Attenuation（TPA）を設定することが推奨されます。',
  },
  {
    type: 'tip',
    title: 'Betaflight TPA推奨設定',
    html: 'TPAのブレークポイントを1250または1350、減衰率を0.65に設定することで、高速ストレート走行時の振動を抑えて滑らかな映像を得られます。',
  },
];

const schemas: FpvDroneThrustToWeightRatioLocaleContent['schemas'] = [
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

export const content: FpvDroneThrustToWeightRatioLocaleContent = {
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
