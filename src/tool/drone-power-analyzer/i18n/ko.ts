import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-power-analyzer';
const title = '드론 파워 분석기: FPV용 추력 대비 중량비 계산기';
const description = 'FPV 드론 빌드의 핵심인 추력 대비 중량비를 계산하세요. 즉각적인 비행 프로필 추천, 시각적 파워 게이지를 확인하고 시네마틱, 프리스타일 또는 레이싱에 최적화하세요.';

const faqItems = [
  {
    question: '추력 대비 중량비란 무엇이며 왜 중요한가요?',
    answer: '추력 대비 중량비는 드론이 낼 수 있는 총 추력을 이륙 총 중량(AUW)으로 나눈 값입니다. 이는 드론의 비행 느낌을 결정하는 가장 중요한 지표로, 느리고 안정적인 비행(시네마토그래피)부터 초민감한 비행(레이싱)까지 결정합니다.',
  },
  {
    question: '프리스타일 비행을 위한 가장 이상적인 비율(스윗 스팟)은 얼마인가요?',
    answer: '부드러운 프리스타일 비행의 경우 4:1에서 6:1 사이가 가장 좋습니다. 4:1 비율은 좋은 안정성과 함께 우수한 민첩성을 제공하며, 6:1은 매우 민감하게 반응하지만 좁은 공간에서 정교한 스로틀 조절이 필요합니다.',
  },
  {
    question: '시네마틱 빌드에도 이 계산기를 사용할 수 있나요?',
    answer: '네. 부드럽고 느린 시네마틱 촬영을 위해서는 2:1에서 3:1 비율을 목표로 하세요. 이 비율은 드론을 안정적이고 예측 가능하게 유지해줍니다. 이보다 낮으면 제어가 어려워지고, 높으면 느린 움직임에 너무 예민하게 반응합니다.',
  },
  {
    question: '비율이 8:1을 넘으면 어떻게 되나요?',
    answer: '8:1 이상의 비율에서 드론은 사실상 레이싱 머신입니다. 매우 반응이 빠르고 조종하기 까다롭습니다. 숙련된 파일럿만 이러한 빌드를 시도해야 합니다. 레이싱 게이트 통과나 스피드 런에는 훌륭하지만, 실내에서는 위험합니다.',
  },
  {
    question: '배터리 무게도 AUW에 포함해야 하나요?',
    answer: '네. AUW(All-Up Weight: 이륙 총 중량)는 프레임, 모터, ESC, FC, 카메라, 배터리, 프롭 등 모든 부품이 장착된 드론의 총 무게입니다. 배터리 프리셋 버튼을 사용해 즉시 무게를 추가할 수 있습니다.',
  },
];

const howToSteps = [
  {
    name: '모터 구성 선택',
    text: '빌드가 쿼드(4), 헥사(6) 또는 옥토(8) 모터 구성인지 선택하세요. 이 배수는 총 추력 계산에 결정적입니다.',
  },
  {
    name: '모터 추력 입력',
    text: '각 모터가 낼 수 있는 최대 추력(그램 단위)을 입력하세요. 모터 사양서에서 확인하거나 퀵 프리셋을 사용하세요.',
  },
  {
    name: '총 무게 설정',
    text: '프레임, 모터, 배터리, 카메라를 포함한 드론의 이륙 총 중량(AUW)을 입력하세요. 배터리 프리셋으로 즉시 무게를 조절할 수 있습니다.',
  },
  {
    name: '결과 확인',
    text: '계산기가 즉시 추력 대비 중량비, 비행 프로필 적합성(시네마틱, 프리스타일, 레이싱) 및 빌드에 대한 맞춤형 추천을 보여줍니다.',
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
    motorConfiguration: '모터 구성',
    motorCount: '모터 개수',
    thrustPerMotor: '모터당 추력 (최대)',
    thrustUnit: 'g',
    quad: '쿼드 (4)',
    hexa: '헥사 (6)',
    octo: '옥토 (8)',
    motorPresets: '빠른 모터 프리셋',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: '무게 설정',
    auwLabel: '이륙 총 중량 (AUW)',
    weightUnit: 'g',
    switchToLbs: 'lbs로 전환',
    switchToGrams: 'g으로 전환',
    batteryPresets: '배터리 무게 추가',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: '총 추력',
    twRatio: '추력 대비 중량비',
    powerMeter: '파워 게이지',
    flightProfiles: '비행 프로필 평가',
    cinematicLabel: '시네마틱',
    freestyleLabel: '프리스타일',
    racingLabel: '레이싱',
    proRacingLabel: '프로 레이싱',
    suitable: '적합',
    notSuitable: '부적합',
    recommendationLabel: '비행 스타일 추천',
    recommendation_low: '비율이 2:1 미만이면 드론의 안정성이 떨어집니다. 더 나은 성능을 위해 무게를 줄이거나 모터를 업그레이드하는 것을 고려하세요.',
    recommendation_cinematic: '{ratio}:1 비율은 부드럽고 제어된 움직임이 필요한 고중량 시네마틱 비행에 이상적입니다. 느리고 정교한 카메라 워크에 완벽합니다.',
    recommendation_freestyle: '{ratio}:1 비율은 프리스타일 비행의 스윗 스팟입니다. 트릭을 위한 안정성을 유지하면서도 우수한 민첩성을 발휘합니다.',
    recommendation_racing: '{ratio}:1 비율은 퍼포먼스 프리스타일 영역입니다. 좁은 공간과 고속 기동에서 스로틀 관리가 매우 중요합니다.',
    recommendation_extreme: '{ratio}:1 비율은 레이싱 머신입니다. 매우 반응이 빠르며 탁 트인 공간에서 숙련된 파일럿에게만 권장됩니다.',
    compareMode: '빌드 비교',
    scenario1: '빌드 A',
    scenario2: '빌드 B',
    addComparison: '비교 추가',
    tooltipTWRatio: '추력 대비 중량비는 총 추력을 드론의 무게로 나눈 값입니다. 비율이 높을수록 가속이 빨라지고 제어 반응이 민감해집니다.',
    tooltipFreestyle: '프리스타일 비행의 "스윗 스팟"은 4:1에서 6:1 비율이며, 민첩성과 제어력 사이의 최상의 균형을 제공합니다.',
    badge_unstable: '불안정',
    badge_cinematic: '시네마틱',
    badge_sweetSpot: '스윗 스팟',
    badge_racing: '레이싱',
    badge_extreme: '익스트림',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'FPV 드론의 추력 대비 중량비 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>추력 대비 중량비</strong>는 FPV 드론 제작에서 가장 중요한 지표 중 하나입니다. 하지만 많은 파일럿들이 이를 간과하여 기대와 다르게 움직이는 드론을 만들곤 합니다. 이 계산기는 계산 과정을 명확히 보여주고 당신의 빌드가 비행 시 어떤 느낌일지 정확히 알려줍니다.',
    },
    {
      type: 'title',
      text: '추력 대비 중량비가 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '드론의 비율은 <strong>안정성</strong>, <strong>반응성</strong>, <strong>속도</strong>라는 세 가지 기본 요소를 결정합니다. 2:1 비율은 둔하고 안정적인 느낌입니다. 6:1 비율은 민첩하고 예민한 느낌입니다. 10:1 비율은 순수한 레이싱 머신입니다. 당신의 빌드가 이 스펙트럼의 어디에 위치하는지 이해하면 적절한 비행 스타일을 선택할 수 있습니다.',
    },
    {
      type: 'title',
      text: '비행 프로필 설명',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>시네마틱 (2:1 - 4:1)</strong>: 무겁고 안정적이며 느림. 부드러운 카메라 움직임과 페이로드를 운반하는 빌드에 적합.',
        '<strong>프리스타일 (3.5:1 - 6.5:1)</strong>: 균형 잡힌 스윗 스팟. 트릭에는 충분히 반응하고 제어하기에는 충분히 안정적.',
        '<strong>레이싱 (5:1 - 8:1)</strong>: 빠르고 민첩함. 레이싱 게이트 통과와 공격적인 기동을 위해 설계.',
        '<strong>프로 레이싱 (7:1+)</strong>: 극한의 성능. 탁 트인 공간에서 전문가 파일럿 전용.',
      ],
    },
    {
      type: 'title',
      text: '추력 대비 중량비 계산 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '계산식은 간단합니다: <strong>비율 = (모터당 추력 × 모터 개수) / 이륙 총 중량</strong>. 예를 들어, 800g 무게에 600g 추력의 모터를 사용하는 쿼드(총 추력 2,400g)는 3:1 비율이 됩니다. 이는 프리스타일 영역입니다.',
    },
    {
      type: 'title',
      text: '빌드에 맞는 적절한 비율 선택하기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '스스로에게 물어보세요: <em>어떻게 비행할 것인가?</em> 느린 시네마틱 샷? 공격적인 프리스타일 트릭? 고속 레이싱? 그 답이 당신의 이상적인 비율을 결정합니다. 대부분의 FPV 파일럿은 제어와 스릴 사이의 가장 좋은 타협점인 4:1에서 6:1 사이를 선택합니다.',
    },
    {
      type: 'paragraph',
      html: '기억하세요: 높은 비율이 항상 "더 좋은" 것은 아닙니다. "더 반응이 빠르다"는 것을 의미합니다. 레이싱 쿼드에서는 필수적이지만, 시네마틱 빌드에서는 오히려 방해가 될 수 있습니다. 목적에 따라 신중하게 선택하세요.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
