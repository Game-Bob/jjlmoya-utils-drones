import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'drone-flight-time-calculator';
const title = 'ドローン飛行時間計算機 LiPo LiIon航続距離推定用';
const description = 'mAh容量と消費電流に基づいて、ドローンの飛行時間を計算します。安全な飛行と最大寿命のためにLiPoバッテリーを最適化しましょう。';

const faqItems = [
  {
    question: 'Why is actual flight time lower than calculated?',
    answer: 'The calculator assumes constant consumption. Sharp maneuvers, headwinds, and battery wear can reduce actual flight time by up to 30%.',
  },
  {
    question: 'At what voltage should I land my drone?',
    answer: 'Ideally, land when the voltage drops to 3.5V - 3.6V per cell (at rest). This corresponds to the recommended 20% remaining capacity.',
  },
  {
    question: 'Are LiPo or Li-Ion batteries better for drones?',
    answer: 'LiPos offer high instantaneous power (ideal for racing and acrobatics). Li-Ion cells have longer endurance but lower power output (ideal for long, steady flights).',
  },
  {
    question: 'How does the cell count (S) affect flight time?',
    answer: 'More cells increase voltage and power, but also weight. If motors are optimized for that voltage, they can be more efficient, but cell count alone does not guarantee more time.',
  },
];

const howToSteps = [
  {
    name: 'Identify Capacity',
    text: 'Check your battery label and look for the mAh value (e.g., 1500, 2200, 4500).',
  },
  {
    name: 'Estimate Current Draw',
    text: 'Enter the average amperage your drone consumes. You can find this in your OSD telemetry after a test flight.',
  },
  {
    name: 'Adjust Safety Margin',
    text: 'We recommend leaving 20% (set to 80%) to protect the battery and provide a landing buffer.',
  },
  {
    name: 'Get the Result',
    text: 'View the exact time in minutes and seconds that you can safely stay in the air.',
  },
];

const schemas: DroneFlightTimeLocaleContent['schemas'] = [
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


export const content: DroneFlightTimeLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: '参考文献',
  ui: {
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献',
    batterySpecs: 'バッテリー仕様',
    capacity: '容量',
    voltage: '電圧 (Sセル数)',
    safetyMargin: '安全マージン',
    landingHint: '1セルあたり3.5V〜3.7Vで着陸してください。',
    consumptionDynamics: '消費ダイナミクス',
    averageConsumption: '平均消費電流',
    powerWatts: '電力 (ワット)',
    efficiencyHint: '電流(A)を変更すると、S電圧に基づいて電力が再計算されます。',
    estimatedEfficiency: '推定効率',
    typicalEfficiencyHint: '典型例: 4-6 (レーシング), 8-12 (空撮/ロングレンジ)',
    safeFlight: '安全な飛行',
    totalEnergy: '総エネルギー',
    theoreticalTime: '理論上の時間 (0%)',
    co2Footprint: 'CO2排出量',
    autonomyChart: '航続時間チャート',
    chartSubtitle: '電流 (A) vs 時間 (分)',
    chartLabel: '分',
  },
  seo: [
    {
      type: 'title',
      text: 'ドローン飛行時間計算機：航続時間に関する完全ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '航続時間は、無人航空機の設計と運用において、おそらく最も重要な要素です。FPVレーシングドローンのパイロット、空撮のプロ、あるいはロングレンジの愛好家であっても、自分の機体がどれくらいの時間空中に留まれるかを正確に把握することは、ミッションの安全と成功のために不可欠です。当サイトの<strong>飛行時間計算機</strong>は、バッテリー容量と消費電流という基本的な変数を使用して、現実的で安全な推定値を提供します。',
    },
    {
      type: 'title',
      text: 'バッテリー容量：mAhの解説',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'バッテリー容量は通常、ミリアンペア時（mAh）で測定されます。この数値は、バッテリーがどれだけの電荷を蓄えられるかを示しています。例えば、1500mAhのバッテリーは理論上、1500ミリアンペアをちょうど1時間供給できます。消費電流が極めて高いドローンの世界では、通常アンペア（A）で話します。1000mAhはちょうど1Ah（アンペア時）です。',
    },
    {
      type: 'paragraph',
      html: 'しかし、生の容量だけが要素ではありません。電圧（セル数つまり「S」によって決まる）は総電力（ワット）に直接影響しますが、モーターの消費量に基づいた時間を計算する場合、Ah/アンペアの比率が飛行エンジニアによって使用される最も直接的な指標となります。',
    },
    {
      type: 'title',
      text: '消費電流：飛行中のアンペア数',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'モーターの消費量は、飛行中に最も変動する変数です。ホバリングを維持することと、激しいアクロバット飛行を行うことは同じではありません。すべてのモーターとプロペラの組み合わせには効率曲線があります。スロットルを全開にするとアンペア数が急増し、バッテリー寿命が大幅に短くなります。',
    },
    {
      type: 'list',
      items: [
        'ホバリング飛行：消費電力は最小限で一定しており、写真撮影に理想的です。',
        '巡航飛行：空気抵抗により消費電力がわずかに増加します。',
        'アグレッシブ/FPV飛行：電流のピークは、数秒で平均消費量の3倍に達することがあります。',
        'ドローンの重量：1グラム重くなるごとに、揚力を発生させるためにモーターの回転数を上げる必要があり、アンペア数が上昇します。',
      ],
    },
    {
      type: 'title',
      text: '80パーセント安全ルール：LiPo化学特性の保護',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'LiPo（リチウムポリマー）バッテリーを容量の0%まで使い切ることは、バッテリーを破壊し、さらに悪いことに墜落を引き起こす最短の方法です。化学的には、セルの電圧が臨界閾値（通常、1セルあたり3.0V〜3.2V）を下回ると、修復不可能なダメージを受けます。',
    },
    {
      type: 'paragraph',
      html: 'そのため、常に<strong>安全マージンルール</strong>を適用します。当計算機ではこの数値を調整できますが、充電量が20%残っている状態での着陸を推奨します。これにより、高価なバッテリーの寿命を数百サイクル延ばせるだけでなく、予期せぬ突風や、着陸をやり直す必要がある場合に不可欠な電力リザーブを確保できます。',
    },
    {
      type: 'tip',
      html: 'ドローンのバッテリーは寒さに非常に弱いです。冬場はLiPoの内部抵抗が増加し、電圧降下が速くなります。周囲の温度が15℃以下の場合は、テイクオフ前に必ずバッテリーを温めてください。',
    },
    {
      type: 'title',
      text: '飛行計算の数式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当ツールが面倒な計算を行いますが、計算の背後にあるロジックを知っておくことは有用です。基本的な公式は以下の通りです：',
    },
    {
      type: 'paragraph',
      html: '<strong>時間 (分) = ((容量 mAh / 1000) * 安全係数) / 消費アンペア数 * 60</strong>',
    },
    {
      type: 'paragraph',
      html: '例えば、2200mAhのバッテリーを使用し、20%残して着陸したい場合（安全係数0.8）、ドローンの平均消費電流が15アンペアであれば、計算式は (2.2 * 0.8) / 15 * 60 = 7.04 分の安全飛行となります。',
    },
    {
      type: 'title',
      text: '重量の最適化と効率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'より大きなバッテリーを追加する場合、収穫逓減のポイントが存在します。バッテリー自体の重量が増えるため、容量を2倍にしても飛行時間は2倍になりません。その余分な重量により、モーターはより速く回転する必要があり、結果としてより多くの電流を消費します。ある時点で、追加された重量はそれが寄与する以上のエネルギーを消費し、システム全体の効率を低下させます。',
    },
    {
      type: 'paragraph',
      html: '経験豊富なパイロットは、いわゆる「有効ミッション時間」を最大化するために、<em>ディスクローディング</em>（プロペラ面積と重量の比率）とバッテリー容量の完璧なバランスを探ります。',
    },
    {
      type: 'title',
      text: 'ドローンの種類による違い',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>マイクロドローン (Whoops)：</strong> 消費電流はわずか2〜5アンペアですが、300〜500mAhのバッテリーを使用します。慣性が小さく回転数が高いため、飛行時間は通常短め（3〜4分）です。',
    },
    {
      type: 'paragraph',
      html: '<strong>5インチ レーシングドローン：</strong> レース中は激しい消費（ピーク時には120A以上）が起こり、1300mAhのバッテリーをわずか2分間の純粋なアドレナリンで使い果たしてしまいます。',
    },
    {
      type: 'paragraph',
      html: '<strong>ロングレンジドローン：</strong> 効率を重視して最適化されています。LiPoよりもエネルギー密度の高いリチウムイオン（Li-Ion）セルを使用することが多く、非常に低い消費電流で30分から60分の飛行を可能にします。',
    },
    {
      type: 'tip',
      html: 'ピッチ（ねじれ）の小さいプロペラに交換することで、最高速度やレスポンスを犠牲にして飛行時間を延ばすことができます。これは航続距離を10〜15%増やすための最も安価で効果的な方法です。',
    },
    {
      type: 'title',
      text: 'メンテナンスと保管',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'このツールの計算を正確に保つためには、バッテリーが良い状態である必要があります。内部抵抗の高いバッテリーは異常に発熱し、実際の容量について「嘘」をつきます。48時間以上飛行しない場合は、必ずストレージ電圧（1セルあたり3.8V〜3.85V）で保管してください。',
    },
    {
      type: 'paragraph',
      html: '結論として、エネルギー管理は物理学、化学、数学のバランスを保つ技術です。私たちの計算機を定期的に使用して飛行セッションを計画し、空中では時間が最も貴重な資源であることを決して忘れないでください。ハッピーフライト、そして安全な着陸を！',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'EASA - Drone Regulations', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot Wiki', url: 'https://ardupilot.org/copter/' },
    { name: 'Battery University', url: 'https://batteryuniversity.com/' },
  ],
  howTo: howToSteps,
  schemas,
};
