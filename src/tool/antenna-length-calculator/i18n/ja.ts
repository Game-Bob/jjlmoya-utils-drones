import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'antenna-length-calculator';
const title = 'FPVダイポールおよびホイップ用RFアンテナ長計算機';
const description = '868MHz、2.4GHz、および5.8GHzアンテナの正確な測定値を計算します。ドローンの通信距離を改善し、最適化されたSWRで送信機の焼損を防ぎます。';

const faqItems = [
  {
    question: 'なぜアンテナ線には特定の長さが必要なのですか？',
    answer: '電波はその波長の倍数で共振します。線がこの共振と一致しない場合、エネルギーは空間に放射されず送信機に反射され、機材を焼損する恐れがあります。',
  },
  {
    question: '短縮率 (Vf) とは何ですか？',
    answer: '信号が導体の中を進む速度と光速との比率のことです。銅線の場合は通常0.95で、波の進行が5%遅くなるためアンテナも5%短くする必要があります。',
  },
  {
    question: 'ダイポールとホイップアンテナはどちらが良いですか？',
    answer: 'ダイポール（1/2波長）の方が効率的で予測可能ですが、かさばります。ホイップ（1/4波長）はコンパクトで小型受信機に最適ですが、適切に機能させるにはグラウンドプレーン（接地面）が必要です。',
  },
  {
    question: '線の太さはアンテナにどのような影響を与えますか？',
    answer: '太い線は帯域幅が広くなります（より広い周波数で機能します）が、短縮率がわずかに変化します。ほとんどのFPVドローンにとっては、標準的な20-22AWGの線材が最適です。',
  },
];

const howToSteps = [
  {
    name: '周波数を選択',
    text: '正確な周波数をMHzで入力するか、5.8GHz、2.4GHz、または868MHzのクイックボタンを使用します。',
  },
  {
    name: 'アンテナタイプを選択',
    text: '完全なダイポール(1/2波長)と垂直ホイップアンテナ(1/4波長)のどちらを作るかを決定します。',
  },
  {
    name: '素材を調整',
    text: '使用するワイヤーの材質を選択し、計算機に正しい短縮率を適用させます。',
  },
  {
    name: '精度良くカット',
    text: '「アーム1本あたりの長さ」の寸法を使用して各要素を切断します。線の先端からハンダ付けの根本までを正確に測ることを忘れないでください。',
  },
];

const schemas: AntennaLengthCalculatorLocaleContent['schemas'] = [
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

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: '参考文献',
  ui: {
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献',
    signalParameters: '信号パラメータ',
    antennaType: 'アンテナタイプ',
    dipole: 'ダイポール (1/2 λ)',
    whip: 'ホイップ (1/4 λ)',
    conductorMedium: '導体媒質',
    totalLength: '全長',
    branchLength: 'アーム1本あたりの長さ',
    secondaryResonance: '二次共振点',
    swrIdeal: '理想的なSWR',
    impedance: 'インピーダンス',
    criticalNotice: '重要な注意',
    criticalNoticeText: '誤ってカットされたアンテナは高いSWRを発生させ、数秒で送信機の出力段を過熱・破壊する可能性があります。',
    dynamicScheme: 'ダイナミックスキーム (mm)',
    harmonicLabel: '高調波',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: '裸銅線 (0.95)',
    materialPvcInsulated: 'PVC絶縁ケーブル (0.92)',
    materialSolidRod: '単線・ロッド (0.97)',
    materialCoaxial: '同軸ケーブル (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: '高周波アンテナの長さが重要なのはなぜですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'レーシングドローン (FPV)、長距離コントローラー (ELRS/Crossfire)、あるいはWi-Fiルーターのアンテナがなぜあのような特定の長さを持っているのか疑問に思ったことがあるなら、その答えは共振の物理学にあります。アンテナは単なる導線ではなく、扱う電磁波の周波数に「同調」しなければならない部品です。',
    },
    {
      type: 'paragraph',
      html: '868MHz用の<strong>ダイポール</strong>であれ、5.8GHz用の<strong>ホイップアンテナ</strong>であれ、自作アンテナを作る際、その精度はミリメートル単位で測定されます。わずか2〜3mmの誤差がアンテナを非効率にし、高いSWR（定在波比）と呼ばれる状態を引き起こします。',
    },
    {
      type: 'title',
      text: '基本概念：波長と共振',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '高周波 (RF) は光速（秒速約30万キロメートル）で伝播します。アンテナがエネルギーを最適に放射または受信するためには、その物理的サイズが、波の1サイクルが移動する距離、すなわち<strong>波長 (λ)</strong> に直接関連している必要があります。',
    },
    {
      type: 'paragraph',
      html: '波長を計算する基本式は λ = v / f であり、\'v\'は伝播速度、\'f\'は周波数です。しかし現実世界では、電気は真空中よりも金属中を少し遅く伝わります。そこで<strong>短縮率 (Vf)</strong> が登場します。',
    },
    {
      type: 'list',
      items: [
        '裸銅線：Vfは約0.95です。',
        '絶縁ケーブル (PVC)：絶縁体が波を遅らせ、係数を0.92以下に下げます。',
        '単線の銅ロッド：太く導電性が高いため、係数は0.97と少し高くなります。',
      ],
    },
    {
      type: 'title',
      text: 'ドローンおよび自作プロジェクトで一般的なアンテナタイプ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. 半波長ダイポールアンテナ (1/2 λ)：</strong> 多くのアプリケーションにおけるゴールドスタンダードです。動作周波数の波長の半分を共に形成する2つのアーム（放射素子）から構成されます。平衡アンテナであり、「ドーナツ」型の放射パターンを提供し、同軸ケーブルから非常に簡単に作ることができます。',
    },
    {
      type: 'paragraph',
      html: '<strong>2. 1/4波長ホイップまたはモノポールアンテナ (1/4 λ)：</strong> 受信機や小型ドローンでよく見られるタイプです。放射素子が1つしかなく、機器のシャーシやグラウンドプレーンを利用して波の残りの半分を「反射」させます。その長さは文字通りダイポールの半分であり、これが1/4波長と呼ばれる所以です。',
    },
    {
      type: 'title',
      text: '重要な周波数とアプリケーション',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '各周波数帯には独特の特性があります。我々の計算機を使用すれば、ホビーで最もよく使われる帯域の測定値を調整することができます：',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (FPV映像)：非常に短く（放射部で約12〜13mm）、余分なハンダが少しでも付くと性能が落ちる可能性があります。',
        '2.4 GHz (操縦・Wi-Fi)：混雑した帯域であり、フェイルセーフを防ぐためにはアンテナ効率が鍵となります。',
        '868 MHz / 915 MHz (長距離)：Team BlackSheepのCrossfireやExpressLRSなどのシステムで使用されます。この帯域のアンテナはより大きく（アーム1本あたり約8cm）、障害物も透過しやすいです。',
        '433 MHz (UHF)：古い長距離規格で、アンテナが大きく、数キロメートルの飛行に理想的です。',
      ],
    },
    {
      type: 'title',
      text: '技術的リファレンス：SWRおよび損失表',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最適なパフォーマンスを得るには、SWRは可能な限り1.0に近づけるべきです。SWRが送信電力に与える影響の参考表を次に示します：',
    },
    {
      type: 'table',
      headers: ['SWR', 'リターンロス', '反射電力', 'ステータス'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>完璧</strong>'],
        ['1.2:1', '-21 dB', '0.8%', '優秀'],
        ['1.5:1', '-14 dB', '4.0%', '良好'],
        ['2.0:1', '-9.5 dB', '11.1%', '許容限界'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>危険</strong>'],
      ],
    },
    {
      type: 'title',
      text: '50オームの重要性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ドローンやRC（VTx、受信機、コントローラー）で使用されるほぼすべての無線システムは、<strong>特性インピーダンス50オーム</strong>を前提に設計されています。完全に共振するダイポールアンテナは自由空間で通常約73オームのインピーダンスを持ちますが、ドローンに搭載されたりアームの角度を調整したり（逆V字）すると、理想の50オームに近づきます。75オームの同軸ケーブル（古いテレビケーブルなど）を使用するとミスマッチが発生し、アンテナをどれだけ正確にカットしても信号が劣化します。',
    },
    {
      type: 'title',
      text: '高いSWRの危険性：VTxを保護する',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'なぜここまで精度を強調するのでしょうか？アンテナが正しい長さでないと、ビデオ送信機（VTx）から送られるエネルギーのすべてを放射することができません。その放射されないエネルギーは「跳ね返り」、熱となって送信機に戻ってきます。',
    },
    {
      type: 'paragraph',
      html: '高いSWRは送信機が焼け焦げる最大の原因です。アンテナ無しで飛行したり、カットの不適切なアンテナを使用したりすると、内部コンポーネントが数秒で過熱し、機材が使い物にならなくなります。このツールを使用してアンテナ長を確認することは、ドローンの安全に対する最高の投資です。',
    },
    {
      type: 'title',
      text: '高調波：干渉を理解する',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '868MHz用にカットされたアンテナは、その周波数だけで共振するわけではありません。サイン波の性質により、奇数倍（第3、第5、第7高調波）の共振点も持ちます。',
    },
    {
      type: 'paragraph',
      html: 'これを把握しておくことは重要です。なぜなら、たとえアンテナが868MHzで送信していても、送信機のフィルタリングが不十分な場合、より高い周波数帯で「ノイズ」や干渉を発生させる可能性があるからです。高調波計算機は、これらのファントム信号がどこに現れるかを予測するのに役立ちます。',
    },
  ],
  faq: [
    {
      question: 'なぜアンテナ線には特定の長さが必要なのですか？',
      answer: '電波はその波長の倍数で共振します。線がこの共振と一致しない場合、エネルギーは空間に放射されず送信機に反射され、機材を焼損する恐れがあります。',
    },
    {
      question: '短縮率 (Vf) とは何ですか？',
      answer: '信号が導体の中を進む速度と光速との比率のことです。銅線の場合は通常0.95で、波の進行が5%遅くなるためアンテナも5%短くする必要があります。',
    },
    {
      question: 'ダイポールとホイップアンテナはどちらが良いですか？',
      answer: 'ダイポール（1/2波長）の方が効率的で予測可能ですが、かさばります。ホイップ（1/4波長）はコンパクトで小型受信機に最適ですが、適切に機能させるにはグラウンドプレーン（接地面）が必要です。',
    },
    {
      question: '線の太さはアンテナにどのような影響を与えますか？',
      answer: '太い線は帯域幅が広くなります（より広い周波数で機能します）が、短縮率がわずかに変化します。ほとんどのFPVドローンにとっては、標準的な20-22AWGの線材が最適です。',
    },
  ],
  bibliography: [
    { name: '1/4波長モノポールアンテナ理論', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: '伝送路の速度係数(Velocity factor)', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: '周波数を選択',
      text: '正確な周波数をMHzで入力するか、5.8GHz、2.4GHz、または868MHzのクイックボタンを使用します。',
    },
    {
      name: 'アンテナタイプを選択',
      text: '完全なダイポール(1/2波長)と垂直ホイップアンテナ(1/4波長)のどちらを作るかを決定します。',
    },
    {
      name: '素材を調整',
      text: '使用するワイヤーの材質を選択し、計算機に正しい短縮率を適用させます。',
    },
    {
      name: '精度良くカット',
      text: '「アーム1本あたりの長さ」の寸法を使用して各要素を切断します。線の先端からハンダ付けの根本までを正確に測ることを忘れないでください。',
    },
  ],
  schemas,
};
