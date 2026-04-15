import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'drone-flight-time-calculator';
const title = '드론 비행 시간 계산기로 LiPo LiIon 비행 시간 예측';
const description = 'mAh 용량과 전류 소모량을 기반으로 드론의 비행 시간을 계산합니다. 안전한 비행을 위해 LiPo 배터리를 최적화하세요.';

const faqItems = [
  {
    question: '실제 비행 시간이 계산된 시간보다 짧은 이유는 무엇인가요?',
    answer: '계산기는 일정한 소모를 가정합니다. 급격한 기동, 맞은바람, 배터리 노후는 실제 비행 시간을 최대 30%까지 줄일 수 있습니다.',
  },
  {
    question: '드론을 몇 볼트에서 착륙시켜야 하나요?',
    answer: '이상적으로는 셀당 3.5V~3.6V까지 전압이 떨어질 때(휴지 상태) 착륙하세요. 이는 권장 20% 남은 용량에 해당합니다.',
  },
  {
    question: 'LiPo 배터리와 Li-Ion 배터리 중 어느 것이 드론에 더 좋나요?',
    answer: 'LiPo는 높은 순간 전력을 제공하므로 레이싱과 곡예에 이상적입니다. Li-Ion 셀은 더 긴 항속 거리를 제공하지만 전력 출력이 낮으므로 길고 안정적인 비행에 이상적입니다.',
  },
  {
    question: '셀 수(S)가 비행 시간에 어떤 영향을 미치나요?',
    answer: '더 많은 셀은 전압과 전력을 증가시키지만 무게도 증가합니다. 모터가 해당 전압에 최적화되어 있으면 더 효율적일 수 있지만, 셀 수만으로는 더 긴 시간을 보장하지 않습니다.',
  },
];

const howToSteps = [
  {
    name: '용량 확인',
    text: '배터리 레이블을 확인하고 mAh 값을 찾으세요(예: 1500, 2200, 4500).',
  },
  {
    name: '전류 소모량 추정',
    text: '드론이 소모하는 평균 암페어를 입력하세요. 시험 비행 후 OSD 원격 측정에서 이를 찾을 수 있습니다.',
  },
  {
    name: '안전 여유 조정',
    text: '배터리를 보호하고 착륙 버퍼를 제공하기 위해 20%(80%로 설정)를 남기는 것을 권장합니다.',
  },
  {
    name: '결과 보기',
    text: '안전하게 공중에 머물 수 있는 정확한 시간(분 및 초)을 확인하세요.',
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
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고 문헌',
  ui: {
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌',
    batterySpecs: '배터리 사양',
    capacity: '용량',
    voltage: '전압 (S 셀)',
    safetyMargin: '안전 여유',
    landingHint: '셀당 3.5V ~ 3.7V에서 착륙하세요.',
    consumptionDynamics: '소비 다이내믹스',
    averageConsumption: '평균 소모 전류',
    powerWatts: '전력 (와트)',
    efficiencyHint: '암페어를 변경하면 S 전압에 따라 와트가 다시 계산됩니다.',
    estimatedEfficiency: '예상 효율성',
    typicalEfficiencyHint: '일반: 4-6 (레이싱), 8-12 (시네마틱/장거리).',
    safeFlight: '안전 비행',
    totalEnergy: '총 에너지',
    theoreticalTime: '이론적 시간 (0%)',
    co2Footprint: '탄소 발자국',
    autonomyChart: '항속 시간 차트',
    chartSubtitle: '암페어 (A) vs. 시간 (분)',
    chartLabel: '분',
  },
  seo: [
    {
      type: 'title',
      text: '드론 비행 시간 계산기: 항속 거리에 대한 완벽한 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '항속 거리는 무인 항공기의 설계 및 운영에서 아마도 가장 중요한 요소일 것입니다. FPV 레이싱 드론 조종사, 전문 항공 사진작가, 또는 장거리 비행 애호가 등 누구에게나, 장비가 얼마나 오래 공중에 머물 수 있는지 정확히 아는 것은 안전과 임무 성공에 필수적입니다. 저희 <strong>비행 시간 계산기</strong>는 배터리 용량과 전류 소모량이라는 기본 변수를 사용하여 현실적이고 안전한 예측을 제공합니다.',
    },
    {
      type: 'title',
      text: '배터리 용량: mAh 설명',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '배터리 용량은 일반적으로 밀리암페어시(mAh)로 측정됩니다. 이 수치는 배터리가 저장할 수 있는 전하량을 나타냅니다. 예를 들어, 1500mAh 배터리는 이론적으로 1500밀리암페어를 1시간 내내 공급할 수 있습니다. 전류 소모량이 극히 높은 드론の世界에서는 보통 암페어(A)로 말합니다. 1000mAh는 정확히 1Ah(암페어시)입니다.',
    },
    {
      type: 'paragraph',
      html: '하지만 순 용량만이 유일한 요소는 아닙니다. 전압(셀 수 또는 \'S\'로 결정됨)은 총 전력(와트)에 직접적인 영향을 미치지만, 모터 소비를 기준으로 한 시간 계산의 경우 Ah/암페어 비율이 비행 엔지니어들이 사용하는 가장 직접적인 지표입니다.',
    },
    {
      type: 'title',
      text: '전류 소모량: 비행 중 암페어',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '모터 소비는 비행 중 가장 변동이 심한 변수입니다. 호버링을 유지하는 것과 공격적인 곡예 기동을 수행하는 것은 다릅니다. 모든 모터와 프로펠러 조합에는 직관적인 효율 곡선이 있습니다. 스로틀을 최대로 올리면 암페어가 급증하여 배터리 수명이 크게 줄어듭니다.',
    },
    {
      type: 'list',
      items: [
        '호버링 비행: 소비량이 최소이며 일정하여 사진 촬영에 이상적입니다.',
        '순항 비행: 공기 역학적 저항으로 인해 소비량이 약간 증가합니다.',
        '공격적인/FPV 비행: 전류 최고치는 몇 초 안에 평균 소비량의 3배가 될 수 있습니다.',
        '드론 무게: 추가되는 그램마다 양력을 발생시키기 위해 모터의 RPM을 높여야 하므로 암페어가 증가합니다.',
      ],
    },
    {
      type: 'title',
      text: '80% 안전 규칙: LiPo 화학 보호',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'LiPo(리튬 폴리머) 배터리를 용량의 0%까지 사용하면 배터리가 파손되고 최악의 경우 추락할 수 있는 가장 빠른 방법입니다. 화학적으로 세포는 전압이 위험 임계값(일반적으로 셀당 3.0V ~ 3.2V) 미만으로 떨어지면 돌이킬 수 없는 손상 과정을 겪습니다.',
    },
    {
      type: 'paragraph',
      html: '따라서 우리는 항상 <strong>안전 마진 규칙</strong>을 적용합니다. 계산기에서 이 값을 조정할 수 있지만 남은 충전량이 20%일 때 착륙하는 것이 좋습니다. 이는 고가의 배터리 수명을 수백 주기로 연장 할뿐만 아니라 예상치 못한 돌풍이 불거나 착륙을 중단하고 다시 시도해야 할 경우 필수적인 전력 예비를 보장합니다.',
    },
    {
      type: 'tip',
      html: '드론 배터리는 추위에 매우 민감합니다. 겨울철에는 LiPo의 내부 저항이 증가하여 더 빠른 전압 강하가 발생합니다. 주위 온도가 15도 미만인 경우 비행 전에 항상 배터리를 따뜻하게 데우십시오.',
    },
    {
      type: 'title',
      text: '수학적 비행 공식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구가 여러분을 위해 복잡한 계산을 해주지만, 계산 이면의 논리를 알아두면 유용합니다. 기본 공식은 다음과 같습니다:',
    },
    {
      type: 'paragraph',
      html: '<strong>시간 ( 분 ) = ((용량 mAh / 1000) * 안전 계수) / 암페어 소비량 * 60</strong>',
    },
    {
      type: 'paragraph',
      html: '예를 들어 2200mAh 배터리를 사용하고 20%(안전 계수 0.8)를 남기고 착륙하려 하며 드론의 평균 소모 전류가 15암페어인 경우: (2.2 * 0.8) / 15 * 60 = 7.04분의 안전 비행 시간이 나옵니다.',
    },
    {
      type: 'title',
      text: '무게 최적화 및 효율성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '더 큰 배터리를 장착할 때 수확 체감의 법칙이 적용됩니다. 배터리 용량을 두 배로 늘린다고 비행 시간이 두 배가 되는 것은 아닙니다. 배터리 자체가 무게를 더하기 때문입니다. 그 추가 중량은 모터를 더 빨리 회전하게 만들고 더 많은 전류를 소비하게 합니다. 어느 시점이 되면 추가된 무게는 제공하는 것보다 더 많은 에너지를 소비하여 전체 시스템 효율을 떨어뜨립니다.',
    },
    {
      type: 'paragraph',
      html: '숙련된 조종사들은 이른바 "유효 미션 시간"을 극대화하기 위해 <em>Disc Loading</em>(프로펠러 면적당 무게비)과 배터리 용량 사이의 완벽한 균형을 찾습니다.',
    },
    {
      type: 'title',
      text: '드론 유형별 차이점',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>마이크로 드론(Whoops):</strong> 2~5 암페어만 소모하지만 300~500mAh 배터리를 사용합니다. 관성이 낮고 회전 속도가 높기 때문에 보통 짧은 시간(3~4분)을 비행합니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>5인치 레이싱 드론:</strong> 경주 중의 무지막지한 소비(최대 120A)로 인해 1300mAh 배터리는 겨우 2분의 아드레날린 분출로 소진됩니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>장거리 드론:</strong> 효율에 최적화되었습니다. LiPo보다 에너지 밀도가 높은 리튬 이온(Li-Ion) 셀을 주로 사용하며 매우 낮은 전류 소비로 30~60분의 비행을 가능하게 합니다.',
    },
    {
      type: 'tip',
      html: '피치(경사)가 낮은 프로펠러로 교체하면 최고 속도와 응답성을 희생하는 대신 비행 시간을 늘릴 수 있습니다. 자율 비행 시간을 10~15% 증가시키는 가장 저렴하고 효과적인 방법입니다.',
    },
    {
      type: 'title',
      text: '유지 보수 및 보관',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구의 계산이 정확하려면 배터리가 양호한 상태를 유지해야 합니다. 내부 저항이 높은 배터리는 과도한 열을 발생시키고 실제 용량에 대해 "거짓" 정보를 보여줄 수 있습니다. 48시간 이상 비행하지 않을 경우에는 항상 적정 보관 전압(셀당 3.8V~3.85V)으로 보관하십시오.',
    },
    {
      type: 'paragraph',
      html: '에너지 관리는 물리학, 화학, 수학의 균형을 유지하는 예술입니다. 우리의 계산기를 정기적으로 사용하여 비행 세션을 계획하십시오. 공중에서 시간은 여러분의 가장 귀중한 자원임을 잊지 마십시오. 안전하고 즐거운 비행이 되길 바랍니다!',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'EASA - 무인 항공기 규정', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot 위키', url: 'https://ardupilot.org/copter/' },
    { name: '배터리 유니버시티', url: 'https://batteryuniversity.com/' },
  ],
  howTo: howToSteps,
  schemas,
};
