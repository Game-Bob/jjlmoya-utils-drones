import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gps-coordinates-converter';
const title = 'ArduPilotおよびINAVウェイポイント用GPS座標変換機';
const description = '10進度数法 (DD)、度分秒 (DMS)、およびGPSハードウェアフォーマット間でGPS座標を変換します。ArduPilotおよびINAVウェイポイントに不可欠です。';

const faqItems = [
  {
    question: 'What is the difference between DD and DMS?',
    answer: `DD (Decimal Degrees) uses a single number with decimals (e.g., 51.50). DMS (Degrees, Minutes, Seconds) divides the degree into sexagesimal fractions (e.g., 51° 30' 0").`,
  },
  {
    question: 'Why are negative coordinates used?',
    answer: 'In the Decimal system (DD), latitudes south of the Equator and longitudes west of Greenwich are indicated with a negative sign to facilitate mathematical calculations.',
  },
  {
    question: 'How much precision do I lose when converting?',
    answer: 'Our tool uses double-precision floating point. With 6 decimals in DD, the precision is about 11 centimeters, which is more than enough for drones and civil navigation.',
  },
  {
    question: 'Does this tool work offline?',
    answer: 'Yes, once the page is loaded, all conversion logic is local (client-side). Only the map requires a connection to download new tiles.',
  },
];

const schemas: GpsCoordinatesConverterLocaleContent['schemas'] = [
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
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Input Coordinates',
        text: 'Enter your coordinates in either Decimal Degrees (DD) or Degrees, Minutes, Seconds (DMS) format.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Review Conversion',
        text: 'The tool instantly displays the converted coordinates in all supported formats.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify on Map',
        text: 'Check the map visualization to ensure the coordinates point to the correct location.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Copy Result',
        text: 'Copy the converted coordinates to your clipboard for use in navigation systems or mission planning.',
      },
    ],
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


export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    decimalDD: '10進法 (DD)',
    degreesGMS: '度分秒 (DMS)',
    useLocation: '現在地を使用',
    lat: '緯度',
    lng: '経度',
    latGMS: '緯度 (DMS)',
    lngGMS: '経度 (DMS)',
    gmsTraditional: '伝統的 DMS',
    nauticalDM: '度 & 分 (航海用)',
    googleMapsFormat: 'Googleマップ形式',
    mapVisualization: 'マップ表示',
    mapHint: 'マップをクリックして座標を直接取得します。',
    copy: 'コピー',
    copied: 'コピーしました！',
    recentHistory: '最近の履歴',
    clear: '消去',
    noHistory: '履歴はありません。',
    load: '読み込む',
    delete: '削除',
  },
  seo: [
    {
      type: 'title',
      text: 'GPS座標の理解：ドローンナビゲーションに不可欠なツール',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '自律飛行ドローン、空撮測量、または紛失した機材の回収において、精度と統一性は鍵となります。GPS座標はナビゲーションのバックボーンを形成していますが、システム（Betaflight、INAV、ArduPilot、Google Mapsなど）によって使用されるフォーマットが異なります。当社の<strong>GPS座標変換機</strong>は、この違いを埋め、意図した場所に正確にウェイポイントを設定できるようにします。',
    },
    {
      type: 'title',
      text: '知っておくべき3つの主要なGPSフォーマット',
      level: 3,
    },
    {
      type: 'title',
      text: '1. 10進度数法 (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '現在、世界で最も一般的なフォーマットであり、<strong>Google Maps</strong>、最近のスマートフォン、およびほとんどのWebマッピングサービスで広く採用されています。位置を単純な少数で表します（例：<code>40.7128, -74.0060</code>）。コピー＆ペーストが非常に簡単で、コンピューターでの処理に優れています。',
    },
    {
      type: 'list',
      items: [
        '正の緯度は北半球、負の緯度は南半球になります。',
        '正の経度は本初子午線の東、負の経度は西になります。',
      ],
    },
    {
      type: 'title',
      text: '2. 度・分・秒 (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'これは、航海、航空、および古い地形図で使用される伝統的なフォーマットです（例：<code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code>）。紙の地図上での人間のナビゲーションには直感的で地球を360度に分割します（1度は60分、1分は60秒）が、特定の記号を含むため、飛行のプログラミング時にデジタルで入力するのが面倒になる場合があります。',
    },
    {
      type: 'title',
      text: '3. GPSハードウェア / Rawフォーマット (ArduPilot / INAV)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'CLI（コマンドラインインターフェース）から直接設定を読み取ったり、生のBlackboxフライトログを調べたり、MAVLinkを介してArduPilotなどのシステムと対話したりする場合、座標が大きな整数として表されていることがよくあります（例：<code>407128000, -740060000</code>）。',
    },
    {
      type: 'paragraph',
      html: 'これは、マイクロコントローラーが浮動小数点数（少数）よりも整数をはるかに高速かつ正確に計算できるためです。通常、10進度数法の値に<strong>10,000,000 (1e7)</strong>を掛けたものが使用されます。このツールはこのフォーマットにシームレスに変換（および逆変換）できるため、Blackboxデータの解析に最適です。',
    },
    {
      type: 'title',
      text: 'ドローンパイロットがこの変換を必要とする理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'このコンバーターがあなたの親友となる、いくつかの重要なシナリオがあります：',
    },
    {
      type: 'list',
      items: [
        '<strong>紛失したドローンの回収 (Lost Drone Recovery):</strong> OSD（オンスクリーンディスプレイ）やTaranis/Radiomaster送信機には、最後に確認された座標がDDまたはDMS形式で表示されることがよくあります。これをすばやく変換してGoogle Mapsにピンをドロップし、機体を見つけることができます。',
        '<strong>ウェイポイントプランニング:</strong> Mission PlannerやQGroundControlなどのソフトウェアでのミッションプランニングには、最高の精度が求められます。従来からある測量図面のDMS座標をDDに変換することで、ドローンが正確な境界内を飛行し、意図せぬ敷地への侵入を防ぎます。',
        '<strong>ファームウェアの設定:</strong> CLIで直接RTH（Return to Home）位置を設定する場合、一部のファームウェアでは、小数点以下7桁の精度を持つ生のGPSハードウェアフォーマット（Raw integer）が必要です。',
      ],
    },
    {
      type: 'title',
      text: '座標精度の解読：どれくらいの小数点が必要か？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '少数の桁数は、現実世界の距離にどの程度影響するのでしょうか？赤道付近での目安は以下の通りです：',
    },
    {
      type: 'list',
      items: [
        '<strong>小数点第1位</strong> (例: 40.1): 約111キロメートルの誤差。',
        '<strong>小数点第3位</strong> (例: 40.123): 約110メートル。',
        '<strong>小数点第5位</strong> (例: 40.12345): 約1.1メートル。 （趣味のドローンの自律飛行やRTHに十分な標準的な精度）',
        '<strong>小数点第7位</strong> (例: 40.1234567): 約11ミリメートル。（プロのRTK測量など、非常に高い精度）',
      ],
    },
    {
      type: 'paragraph',
      html: '上空が開けた場所において、多くの標準的なM8NまたはM10 GPSモジュールは、小数点第5位から第6位（約1〜2メートル）の精度を達成します。正確な回収を保証するため、コピーする際は可能な限り小数点第6位以上を保持するようにしてください。',
    },
    { type: 'title', text: '地理座標系について', level: 2 },
    { type: 'paragraph', html: '座標は必ず特定の基準系に基づいています。GPSでは通常WGS84を使うため、別の測地系の値と比較する前に変換してください。' },
    { type: 'title', text: '緯度と経度を確認する', level: 2 },
    { type: 'paragraph', html: '緯度は南90度から北90度、経度は西180度から東180度の範囲です。負号と方位記号を同時に二重適用しないよう注意しましょう。' },
    { type: 'title', text: '適切な精度を選ぶ', level: 2 },
    { type: 'paragraph', html: '小数点以下の桁数が多くても、測定自体の精度が高いとは限りません。必要な桁数は機器、信号、地図の用途で決まります。' },
    { type: 'title', text: '地図で結果を使う', level: 2 },
    { type: 'paragraph', html: '変換結果は地図アプリやGISに貼り付けられます。入力先が十進法と度分秒のどちらを要求するか、先に確認してください。' },
    { type: 'title', text: '符号と方位', level: 2 },
    { type: 'paragraph', html: '北と東は通常正、南と西は負で表します。文字付きの形式では、方位文字が数値の符号に相当します。' },
    { type: 'title', text: '位置情報を守る', level: 2 },
    { type: 'paragraph', html: '機密性の高い座標は可能な限り端末内で処理し、必要な相手だけに共有してください。写真に残るGPSメタデータも確認しましょう。' },
  ],
  faq: faqItems,
  bibliography,
  howTo: [
    {
      name: 'フォーマットの確認',
      text: '変換したい座標のフォーマットを確認します。40.7128, -74.0060 のような形式であればDD（10進度数）です。40°42\'46"N のような形であればDMS（度分秒）です。407128000 のような大きな数字だけであればハードウェア（Raw）形式です。',
    },
    {
      name: '座標の入力',
      text: '3つの入力フィールドのうち、確認したフォーマットに対応する場所に値を入力（または貼り付け）します。',
    },
    {
      name: '変換の実行と確認',
      text: '入力するだけで、コンバーターがリアルタイムで他のフォーマットに自動で計算・反映します。',
    },
    {
      name: 'コピーして使用',
      text: '目的のフォーマットの横にある「コピー」ボタンをクリックして、クリップボードに保存します。Google Maps、CLIエディター、またはMission Planner等でご利用ください。',
    },
  ],
  schemas,
};
