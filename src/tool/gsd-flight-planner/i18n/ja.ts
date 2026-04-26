import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gsd-flight-planner';
const title = 'GSD フライトプランナー: ドローン地上画素寸法計算機';
const description = 'フォトグラメトリ・ミッションの地上画素寸法 (GSD) を計算。DJI、Autel、カスタムカメラをサポート。視覚的な品質指標によるリアルタイムの飛行計画。';

const faqItems = [
  {
    question: '地上画素寸法 (GSD) とは何ですか？',
    answer: 'GSDは、画像内の1ピクセルが地上で表す距離です。GSDが低いほど、解像度と詳細度が高くなります。例えば、GSDが1 cm/pxの場合、1センチメートルという微細な詳細を判別でき、測量において重要です。',
  },
  {
    question: 'ドローンのカメラ仕様はどこで確認できますか？',
    answer: 'センサーサイズと焦点距離については、ドローンのマニュアルを確認してください。または、DJI Mavic 3EやAutel EVO IIなどの主要モデル用のカメラプリセットを使用してください。カスタムカメラの場合は、レンズの仕様からセンサーサイズを測定してください。',
  },
  {
    question: 'ミッションの種類ごとに必要なGSDはどれくらいですか？',
    answer: '高精度地形測量：1-2 cm/px。標準マッピング：2-5 cm/px。点検・モニタリング：5-10 cm/px。目視調査：10+ cm/px。プロジェクトの精度要件に基づいて選択してください。',
  },
  {
    question: '画像のラップ（重複）とは何ですか？なぜ重要なのですか？',
    answer: 'ラップは、連続する写真に写るエリアの重複率です。高いラップ率（60-80%）は完全なカバレッジを保証し、3Dモデルの品質を向上させます。前方ラップは写真の間隔に影響し、側方ラップはコース数に影響します。',
  },
  {
    question: '理想的な飛行高度はどのように計算しますか？',
    answer: 'この計算機を使用してください：希望のGSD × 焦点距離 ÷ センサー幅 = 高度。計算機はこれを自動的に行い、ターゲット精度を維持し、被写体ブレを避けるための最大安全高度を表示します。',
  },
];

const howToSteps = [
  {
    name: 'カメラの選択または設定',
    text: '設定済みモデル（DJI Mavic 3E、Autel EVO IIなど）から選択するか、センサーサイズと焦点距離を手動で入力します。プリセットを使用すると、すべてのパラメータが即座にロードされます。',
  },
  {
    name: '飛行高度の設定',
    text: '高度スライダーを使用して、地上高 (AGL) を調整します。高度が画像解像度にどのように影響するかをリアルタイムで確認しながらGSDを更新します。',
  },
  {
    name: 'ラップ要件の定義',
    text: '前方および側方のラップ率を設定します。ラップ率が高いほど完全なカバレッジが保証されますが、ミッション時間と画像数が増加します。',
  },
  {
    name: '結果の確認とエクスポート',
    text: 'GSD、カバレッジエリア、精度分類を確認します。公式の飛行計画に添付するためのクイックレポートを生成します。',
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: '設定',
    cameraSelection: 'カメラ選択',
    manualMode: 'マニュアルモード',
    sensorConfig: 'センサー設定',
    width: '幅',
    height: '高さ',
    focalLength: '焦点距離',
    imageResolution: '画像解像度',
    w: '横',
    h: '縦',
    px: 'px',
    altitudeAgl: '高度 (AGL)',
    overlapSettings: 'ラップ設定',
    forward: '前方',
    lateral: '側方',
    missionArea: 'ミッションエリア',
    totalAreaToSurvey: '総調査面積',
    hectareHint: '1 ha = 10,000 m²',
    inverseCalc: '逆算',
    targetGsd: '目標GSD',
    maxAltitude: '最大高度',
    reset: 'リセット',
    results: '結果',
    gsdResult: '地上画素寸法 (GSD)',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: '高精度',
    standard: '標準',
    inspection: '点検',
    visual: '調査',
    coveragePerImage: '画像ごとのカバレッジ',
    area: '面積',
    spacing: '間隔',
    flightDir: '進行方向 →',
    missionMetrics: 'ミッション指標',
    images: '画像',
    shots: 'ショット',
    flightLines: 'コース数',
    lines: 'コース',
    flightTime: '飛行時間',
    min: '分',
    dataVolume: 'データ量',
    gb: 'GB',
    copyShareLink: 'リンクをコピー',
    downloadReport: 'レポートをダウンロード',
    copiedToClipboard: 'コピーしました！',
    metric: 'メートル法',
    imperial: 'ヤード・ポンド法',
    classHighPrecision: '高精度地形測量',
    classStandard: '標準マッピング',
    classInspection: '点検・モニタリング',
    classVisual: '目視調査',
    ultraHighResAlert: '超高解像度：十分なストレージと処理能力を確保してください',
    lowOverlapAlert: '前方ラップが60%未満：3Dモデルの品質に影響する可能性があります',
    largeDatasetAlert: '非常に大きなデータセット：複数のフライトに分けることを検討してください',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'GSD フライトプランナー：完全なフォトグラメトリ計算機',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>地上画素寸法 (GSD)</strong> は、ドローンフォトグラメトリにおいて最も重要な指標です。計算ミスは丸一日の飛行を無駄にし、数千ドルの生産性損失を招く可能性があります。この計算機はそのリスクを排除します。',
    },
    {
      type: 'title',
      text: 'なぜプロにとってGSDが重要なのか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '測量、3Dモデル作成、インフラ点検のいずれにおいても、GSDがキャプチャできる詳細度を決定します。1 cm/pxのミッションは、5 cm/pxでは見逃してしまう詳細を捉えます。しかし、低空飛行しすぎるとバッテリーを浪費し、ミッション時間を不必要に延ばしてしまいます。',
    },
    {
      type: 'title',
      text: 'ミッションタイプ別GSD',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>高精度地形測量 (1-2 cm/px):</strong> 区画、鉱山跡地、エンジニアリングプロジェクト向けの地形グレード精度。',
        '<strong>標準マッピング (2-5 cm/px):</strong> オルソモザイク、農業モニタリング、一般目的の地図。',
        '<strong>点検・モニタリング (5-10 cm/px):</strong> 建物点検、送電線チェック、変化検出。',
        '<strong>目視調査 (10+ cm/px):</strong> 広域偵察と視覚的評価。',
      ],
    },
    {
      type: 'title',
      text: 'GSDの計算式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (高度 × センサー幅) / (焦点距離 × 画像幅) × 100</code><br/>この計算機が数学的な処理を行います。あなたはミッションに集中してください。',
    },
    {
      type: 'title',
      text: 'ラップ率：なぜ60-80%が最適なのか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '低いラップ率 (20-40%) はバッテリーを節約しますが、カバレッジに隙間ができるリスクがあります。高いラップ率 (80%+) は完全なカバレッジを保証しますが、ミッション時間が延びます。<strong>60-80%の範囲</strong>がプロの標準です。過度な冗長性なしに完全な3D再構築を保証します。',
    },
    {
      type: 'title',
      text: 'リアルなデータでより良いミッションを計画する',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '各フライトの前に、この計算機を使用して、必要なGSDに対する正確な高度、必要な写真数、総ミッション時間、被写体ブレのリスクがあるかどうかを判断してください。これらのデータにより、正確なミッションを実行し、コストのかかるミスを回避できます。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
