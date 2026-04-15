import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'antenna-length-calculator';
const title = 'FPV 다이폴 및 휩용 RF 안테나 길이 계산기';
const description = '868MHz, 2.4GHz 및 5.8GHz 안테나의 정확한 측정값을 계산하세요. 드론의 범위를 개선하고 최적화된 SWR로 송신기가 타는 것을 방지하세요.';

const faqItems = [
  {
    question: '안테나 선은 왜 특정 길이여야 하나요?',
    answer: '전파는 파장의 배수에서 공진합니다. 와이어가 이 공진과 일치하지 않으면 에너지가 방출되지 않고 송신기로 반사되어 장비가 탈 수 있습니다.',
  },
  {
    question: '단축률(Vf)이란 무엇인가요?',
    answer: '신호가 도체를 통과하는 속도와 빛의 속도의 비율입니다. 구리의 경우 일반적으로 0.95입니다. 즉, 파동이 5% 느리게 이동하므로 안테나를 5% 짧게 만들어야 합니다.',
  },
  {
    question: '다이폴 안테나와 휩 안테나 중 어느 것이 더 나은가요?',
    answer: '다이폴(1/2 파장)은 더 효율적이고 예측 가능하지만 부피가 큽니다. 휩(1/4 파장)은 콤팩트하고 소형 수신기에 이상적이지만 제대로 작동하려면 접지 평면(Ground plane)이 필요합니다.',
  },
  {
    question: '선 굵기는 안테나에 어떤 영향을 미치나요?',
    answer: '더 두꺼운 전선은 대역폭이 더 넓고(정확한 주파수 의존성이 덜 중요함) 단축 속도 계수가 약간 변경됩니다. 대부분의 FPV 드론에는 표준 20-22AWG 와이어가 이상적입니다.',
  },
];

const howToSteps = [
  {
    name: '주파수 선택',
    text: 'MHz 단위로 정확한 주파수를 입력하거나 5.8GHz, 2.4GHz 또는 868MHz용 빠른 버튼 중 하나를 사용하세요.',
  },
  {
    name: '안테나 유형 선택',
    text: '전체 다이폴(1/2 파장)을 만들지 아니면 수직 휩 안테나(1/4 파장)를 만들지 결정하세요.',
  },
  {
    name: '재료 조정',
    text: '계산기가 올바른 단축률(속도 계수)을 적용할 수 있도록 사용할 와이어 유형을 선택하세요.',
  },
  {
    name: '정밀하게 자르기',
    text: '"암당 길이" 측정값을 사용하여 각 요소를 절단하세요. 항상 가장자리부터 납땜 지점까지만 측정하는 것을 잊지 마세요.',
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
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고 문헌',
  ui: {
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌',
    signalParameters: '신호 매개변수',
    antennaType: '안테나 유형',
    dipole: '다이폴 (1/2 λ)',
    whip: '휩 (1/4 λ)',
    conductorMedium: '도체 매질',
    totalLength: '총 길이',
    branchLength: '암(Arm)당 길이',
    secondaryResonance: '2차 공진점',
    swrIdeal: '이상적인 SWR',
    impedance: '임피던스',
    criticalNotice: '중요 공지',
    criticalNoticeText: '잘못 절단된 안테나는 높은 SWR을 생성하여 몇 초 안에 송신기의 출력단을 과열시키고 파괴할 수 있습니다.',
    dynamicScheme: '동적 스키마 (mm)',
    harmonicLabel: '고조파',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: '나동선 (0.95)',
    materialPvcInsulated: 'PVC 절연 케이블 (0.92)',
    materialSolidRod: '솔리드 로드 (0.97)',
    materialCoaxial: '동축 케이블 (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: '무선 주파수 안테나의 길이가 중요한 이유는 무엇입니까?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '레이싱 드론(FPV), 장거리 컨트롤러(ELRS/Crossfire) 또는 Wi-Fi 라우터의 안테나가 왜 그렇게 특정한 길이를 갖는지 궁금해한 적이 있다면, 그 해답은 공진의 물리학에 있습니다. 안테나는 단순한 전도성 와이어 조각이 아닙니다. 안테나는 처리하는 전자기파의 주파수와 "동조"되어야 하는 구성 요소입니다.',
    },
    {
      type: 'paragraph',
      html: '자신만의 안테나를 제작할 때, 868MHz용 <strong>다이폴</strong>이든 5.8GHz용 <strong>휩 안테나</strong>이든 정밀도는 밀리미터 단위로 측정됩니다. 2~3mm의 오차만으로도 안테나가 비효율적이 되어 높은 SWR(정재파비)이라는 현상을 초래할 수 있습니다.',
    },
    {
      type: 'title',
      text: '기본 개념: 파장 및 공진',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '무선 주파수(RF)는 빛의 속도(초당 약 300,000km)로 이동합니다. 안테나가 에너지를 최적으로 방출하거나 수신하려면 물리적 크기가 파동의 전체 주기 하나가 이동하는 거리인 <strong>파장(λ)</strong>과 직접적으로 관련되어야 합니다.',
    },
    {
      type: 'paragraph',
      html: '파장을 계산하는 기본 공식은 λ = v / f이며, 여기서 \'v\'는 전파 속도이고 \'f\'는 주파수입니다. 그러나 현실 세계에서 전기는 진공보다 금속을 통과할 때 약간 느리게 이동합니다. 여기서 <strong>단축률(Vf, Velocity Factor)</strong>이 등장합니다.',
    },
    {
      type: 'list',
      items: [
        '나동선: Vf가 약 0.95입니다.',
        '절연 케이블(PVC): 절연체가 파동을 늦추어 계수를 0.92 이하로 낮춥니다.',
        '솔리드 구리 막대: 더 두껍고 전도성이 높기 때문에 계수가 0.97로 약간 올라갑니다.',
      ],
    },
    {
      type: 'title',
      text: '드론 및 메이커 프로젝트에서 일반적인 안테나 유형',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. 반파장 다이폴 안테나(1/2 λ):</strong> 이것은 많은 응용 분야의 표준입니다. 동작 주파수의 파장 중 절반을 함께 형성하는 두 개의 암(방사 소자)으로 구성됩니다. "도넛" 모양의 방사 패턴을 제공하는 평형 안테나이며 동축 케이블로 매우 쉽게 만들 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. 1/4 파장 휩 또는 모노폴 안테나(1/4 λ):</strong> 이는 일반적으로 라디오 수신기에나 소형 드론에서 볼 수 있는 것입니다. 방사 소자가 하나만 있으며 장치의 섀시나 접지 평면(Ground plane)을 사용하여 파동의 나머지 절반을 "반사"합니다. 그 길이는 다이폴의 정확히 절반이므로 1/4 파장이라는 이름이 붙여졌습니다.',
    },
    {
      type: 'title',
      text: '중요 주파수 및 애플리케이션',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '주파수 대역마다 고유한 특성이 있습니다. 계산기를 사용하면 취미에서 가장 많이 사용되는 대역에 대한 측정값을 효율적으로 조정할 수 있습니다.',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz(FPV 비디오): 길이가 아주 작습니다(방사체의 경우 약 12-13mm). 여분의 납땜이 조금만 있어도 성능이 망가질 수 있습니다.',
        '2.4 GHz(제어 및 Wi-Fi): 무선 연결 끊김(failsafe)을 방지하기 위해 안테나 효율이 핵심인 포화된 대역입니다.',
        '868 MHz / 915 MHz(장거리): Team BlackSheep Crossfire 또는 ExpressLRS와 같은 시스템에서 사용됩니다. 이 안테나는 더 크고(암당 약 8cm) 장애물 투과가 더 쉽습니다.',
        '433 MHz(UHF): 장거리 표준이었으며 크기가 큰 안테나를 사용하여 수 킬로미터 이상의 비행에 이상적입니다.',
      ],
    },
    {
      type: 'title',
      text: '기술 참조: SWR 및 손실표',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '최적의 성능을 위해서는 SWR이 가능한 한 1.0에 가까워야 합니다. 다음은 SWR이 전송 전력에 미치는 영향에 대한 참조입니다.',
    },
    {
      type: 'table',
      headers: ['SWR', '반사 손실 (Return Loss)', '반사 전력', '상태'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>완벽함</strong>'],
        ['1.2:1', '-21 dB', '0.8%', '우수함'],
        ['1.5:1', '-14 dB', '4.0%', '양호함'],
        ['2.0:1', '-9.5 dB', '11.1%', '수용 가능한 한계'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>위험함</strong>'],
      ],
    },
    {
      type: 'title',
      text: '50옴(Ohm)의 중요성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '드론 및 무선 조종(VTx, 수신기, 컨트롤러)에 사용되는 거의 모든 무선 시스템은 <strong>50옴의 특성 임피던스</strong>용으로 설계되었습니다. 완벽하게 공진하는 다이폴 안테나는 일반적으로 자유 공간에서 73옴에 가까운 임피던스를 갖지만 드론에 설치하거나 암(역 V형) 각도를 조정하면 이상적인 50옴에 가까워집니다. 75옴 동축 케이블(구형 TV 케이블과 같은)을 사용하면 안테나를 아무리 잘 절단하더라도 신호를 저하시키는 임피던스 불일치가 발생합니다.',
    },
    {
      type: 'title',
      text: '높은 SWR의 위험성: VTx 보호',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '왜 그렇게 정확성을 강조할까요? 안테나가 올바른 길이가 아니면 비디오 전송기(VTx)에서 보낸 모든 에너지를 방출할 수 없습니다. 그 에너지는 "반사"되어 열로 다시 송신기 측으로 돌아갑니다.',
    },
    {
      type: 'paragraph',
      html: '높은 SWR은 송신기가 타는 가장 큰 원인입니다. 안테나 없이 또는 잘못 절단된 안테나로 비행하면 내부 구성 요소가 몇 초 안에 과열되어 장비를 사용할 수 없게 됩니다. 자르기 전 이 도구를 사용하여 확인을 거치는 것이 드론 안전에 대한 최고의 투자입니다.',
    },
    {
      type: 'title',
      text: '고조파(Harmonics): 간섭 이해',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '868MHz용으로 절단된 안테나는 해당 주파수형태에서만 공진하는 것이 아닙니다. 사인파의 특성으로 인해 홀수 배수(3차, 5차, 7차 고조파)의 공진점도 갖습니다.',
    },
    {
      type: 'paragraph',
      html: '알아두는 것이 중요한 이유는 안테나가 868MHz에서 송신하고 있더라도 송신기가 제대로 필터링되지 않으면 더 높은 주파수에서 "노이즈" 또는 간섭을 일으킬 가능성이 있기 때문입니다. 고조파 계산기는 이러한 유령 신호가 어디에서 나타날지 예측하는 데 도움이 됩니다.',
    },
  ],
  faq: [
    {
      question: '안테나 선은 왜 특정 길이여야 하나요?',
      answer: '전파는 파장의 배수에서 공진합니다. 와이어가 이 공진과 일치하지 않으면 에너지가 방출되지 않고 송신기로 반사되어 장비가 탈 수 있습니다.',
    },
    {
      question: '단축률(Vf)이란 무엇인가요?',
      answer: '신호가 도체를 통과하는 속도와 빛의 속도의 비율입니다. 구리의 경우 일반적으로 0.95입니다. 즉, 파동이 5% 느리게 이동하므로 안테나를 5% 짧게 만들어야 합니다.',
    },
    {
      question: '다이폴 안테나와 휩 안테나 중 어느 것이 더 나은가요?',
      answer: '다이폴(1/2 파장)은 더 효율적이고 예측 가능하지만 부피가 큽니다. 휩(1/4 파장)은 콤팩트하고 소형 수신기에 이상적이지만 제대로 작동하려면 접지 평면(Ground plane)이 필요합니다.',
    },
    {
      question: '선 굵기는 안테나에 어떤 영향을 미치나요?',
      answer: '더 두꺼운 전선은 대역폭이 더 넓고(정확한 주파수 의존성이 덜 중요함) 단축 속도 계수가 약간 변경됩니다. 대부분의 FPV 드론에는 표준 20-22AWG 와이어가 이상적입니다.',
    },
  ],
  bibliography: [
    { name: '1/4 파장 모노폴 기초 지식', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: '전송선로의 속도 계수', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: '주파수 선택',
      text: 'MHz 단위로 정확한 주파수를 입력하거나 5.8GHz, 2.4GHz 또는 868MHz용 빠른 버튼 중 하나를 사용하세요.',
    },
    {
      name: '안테나 유형 선택',
      text: '전체 다이폴(1/2 파장)을 만들지 아니면 수직 휩 안테나(1/4 파장)를 만들지 결정하세요.',
    },
    {
      name: '재료 조정',
      text: '계산기가 올바른 단축률(속도 계수)을 적용할 수 있도록 사용할 와이어 유형을 선택하세요.',
    },
    {
      name: '정밀하게 자르기',
      text: '"암당 길이" 측정값을 사용하여 각 요소를 절단하세요. 항상 가장자리부터 납땜 지점까지만 측정하는 것을 잊지 마세요.',
    },
  ],
  schemas,
};
