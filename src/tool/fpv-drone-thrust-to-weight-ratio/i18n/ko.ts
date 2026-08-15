import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-thrust-to-weight-ratio';
const title = 'FPV 드론 추력 대 중량비 및 비행 텔레메트리 계산기';
const description = 'FPV 드론 및 멀티로터의 최대 정적 추력, 비선형 스로틀 곡선, 순간 수직 G포스, 호버링 스로틀 위치, 0에서 100 가속 시간을 계산합니다.';

const ui = {
  title: 'FPV 드론 추력 대 중량비 계산기',
  subtitle: '추력 곡선, 실시간 스로틀 반응, 수직 G포스 및 기동성 등급 분석',
  presetsHeader: '빠른 설정 프리셋',
  customPreset: '사용자 정의',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S 프리스타일 3.5인치',
  freestyle5Preset: '6S 프리스타일 5인치 Pro',
  longrange7Preset: '6S 마운틴 LR 7인치',
  cinelifter8Preset: '8S 대형 시네리프터 X8',
  specsHeader: '드론 및 파워트레인 사양',
  auwGramsLabel: '배터리 포함 총 이륙 중량 (g)',
  motorCountLabel: '모터 구성',
  thrustPerMotorLabel: '모터당 최대 정적 추력 (g)',
  propellerSizeLabel: '프롭 직경 (인치)',
  propellerPitchLabel: '프롭 피치 (인치)',
  bladeCountLabel: '프롭 블레이드 날개 수',
  blade2Option: '2엽 (바이블레이드 - 최고 효율)',
  blade3Option: '3엽 (트라이블레이드 - 프리스타일 표준)',
  blade4Option: '4엽 (쿼드블레이드 - 최고 접지력)',
  throttleStickHeader: '실시간 스로틀 스틱 시뮬레이터',
  throttleStickLabel: '스로틀 스틱 위치 (%)',
  snapIdleLabel: '아이들 (0%)',
  snapHoverLabel: '호버링 위치',
  snapCruiseLabel: '순항 (50%)',
  snapPunchLabel: '풀 스로틀 (100%)',
  telemetryHeader: 'FPV 비행 텔레메트리 및 성능 진단',
  twrRatioLabel: '추력 대 중량비 (TWR)',
  hoverThrottleLabel: '호버링 스로틀 비율',
  currentThrustLabel: '현재 발생 추력',
  instantGForceLabel: '순간 수직 G포스',
  zeroToHundredLabel: '0에서 100 km/h 펀치아웃 시간',
  recommendedCamAngleLabel: '권장 FPV 카메라 틸트 각도',
  windResistanceLabel: '돌파 가능 풍속 한계',
  totalMaxThrustLabel: '총 최대 정적 추력',
  maxPitchAngleLabel: '최대 지속 경사각',
  tuningHeader: 'Betaflight PID 및 펌웨어 권장 설정',
  tpaRecommendationLabel: '스로틀 PID 감쇠 (TPA)',
  dynamicIdleLabel: '권장 다이내믹 아이들',
  propwashRiskLabel: '프롭워시 제어 여유도',
  tierUnderpoweredTitle: '추력 부족 또는 바람 밀림 위험',
  tierUnderpoweredDesc: 'TWR 2대 1 미만은 급강하 회복 제어력이 부족합니다. 바람 없는 실내 비행에만 적합합니다.',
  tierCinematicTitle: '부드러운 시네마틱 순항',
  tierCinematicDesc: 'TWR 2대 1에서 4대 1 구간으로 부드러운 스로틀 제어와 안정적인 영상 촬영을 제공합니다.',
  tierFreestyleTitle: '스포티하고 민첩한 프리스타일',
  tierFreestyleDesc: 'TWR 4대 1에서 8대 1 구간으로 즉각적인 스틱 반응과 깔끔한 곡예 기동을 제공합니다.',
  tierAcroProTitle: '고성능 아크로 및 반도 프리스타일',
  tierAcroProDesc: 'TWR 8대 1에서 13대 1 구간으로 폭발적인 수직 가속과 즉각적인 프롭워시 상쇄를 제공합니다.',
  tierRacingExtremeTitle: '전문가급 드론 레이싱',
  tierRacingExtremeDesc: 'TWR 13대 1 초과로 전문 FPV 레이싱 트랙에 필요한 극한의 출력을 발휘합니다.',
  hudThrustCurveTitle: '비선형 추력 반응 곡선',
  hudHoverMarker: '호버링 지점',
  hudCurrentStickMarker: '현재 스틱',
  hudGForceLabel: 'G포스',
  hudTiltAngleLabel: '카메라 각도',
  hudVectorPowerLabel: '실시간 파워트레인 텔레메트리',
};

const faqItems = [
  {
    question: '프리스타일 FPV 드론에 가장 이상적인 추력 대 중량비는 얼마인가요?',
    answer: '프리스타일 드론은 8대 1에서 12대 1 사이의 TWR이 권장되며, 이는 자유 낙하를 멈추고 고기동 턴을 안전하게 완료하는 데 필요한 출력을 제공합니다.',
  },
  {
    question: '비선형 스로틀 곡선은 호버링 비행에 어떤 영향을 미치나요?',
    answer: '브러시리스 모터는 회전수 제곱에 비례하여 추력을 생성합니다. 고출력 기체에서는 통상 20에서 35퍼센트 스틱 위치에서 호버링이 이루어집니다.',
  },
  {
    question: 'FPV 카메라 각도가 드론 추력비에 따라 달라지는 이유는 무엇인가요?',
    answer: 'TWR이 높은 드론은 가파른 전경 자세로 고속 순항합니다. 고글 속에서 수평선을 중앙에 맞추기 위해 파일럿은 카메라를 35도에서 50도 높게 세웁니다.',
  },
  {
    question: '프롭 블레이드 날개 수는 비행 특성에 어떤 차이를 만드나요?',
    answer: '2엽 프롭은 가장 긴 비행시간과 최고속도를 제공합니다. 3엽은 프리스타일에 최적화된 균형을 제공하며, 4엽은 코너링 시 강력한 접지력을 발휘합니다.',
  },
];

const howToSteps = [
  {
    name: '기체 중량 입력 또는 프리셋 선택',
    text: '배터리와 HD 카메라를 포함한 총 이륙 중량을 그램 단위로 입력합니다.',
  },
  {
    name: '모터 및 프롭 사양 설정',
    text: '모터 수, 날개 수 및 제조사의 최대 정적 추력 수치를 입력합니다.',
  },
  {
    name: '실시간 스로틀 스틱 조작 및 텔레메트리 확인',
    text: '스로틀 스틱을 움직이며 발생하는 추력, G포스 및 추력 곡선 상의 위치를 확인합니다.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'FPV 드론 추력 대 중량비의 항공역학적 원리',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '추력 대 중량비（TWR）는 멀티로터의 가속 성능과 제어 권한을 결정하는 핵심 지표입니다. FPV 프리스타일과 레이싱에서 넉넉한 출력 여유는 다이브 비행의 즉각적인 회복과 정밀한 장애물 통과를 가능하게 합니다.',
  },
  {
    type: 'title',
    text: 'FPV 드론 플랫폼 분류 및 기준 성능 지표',
    level: 2,
  },
  {
    type: 'table',
    headers: ['기체 플랫폼', '표준 AUW 중량', '목표 TWR', '호버 스로틀', '0에서 100 가속', '카메라 틸트'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5대 1', '35퍼센트', '1.20초', '15도에서 25도'],
      ['4S 프리스타일 3.5"', '250g', '12.0대 1', '24퍼센트', '0.28초', '35도에서 45도'],
      ['6S 프리스타일 5" Pro', '680g', '11.5대 1', '25퍼센트', '0.30초', '35도에서 50도'],
      ['6S 마운틴 LR 7"', '1150g', '8.3대 1', '30퍼센트', '0.45초', '20도에서 30도'],
      ['8S 시네리프터 X8', '4200g', '6.1대 1', '38퍼센트', '0.70초', '15도에서 25도'],
    ],
  },
  {
    type: 'title',
    text: '비선형 스로틀 반응 및 모터 출력 특성',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '브러시리스 전기 모터는 지수 함수적 형태로 추력을 발생시킵니다. 스로틀 조작의 상위 20퍼센트 구간에서 전체 추력의 40퍼센트 이상이 생성됩니다.',
  },
  {
    type: 'list',
    items: [
      '호버링 구간 (20에서 35퍼센트): 지면 근처 정밀 제어를 위한 미세 해상도 구간.',
      '순항 구간 (35에서 65퍼센트): 배터리 효율과 전진 속도가 조화된 안정 순항 구간.',
      '풀 스로틀 구간 (70에서 100퍼센트): 높은 수직 G포스를 동반하는 폭발적 가속 구간.',
    ],
  },
  {
    type: 'title',
    text: '프롭 선택 및 Betaflight 튜닝 가이드',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'TWR 10대 1 이상의 고출력 기체는 풀 스로틀 진동을 억제하기 위해 Betaflight의 Throttle PID Attenuation（TPA）을 설정하는 것이 좋습니다.',
  },
  {
    type: 'tip',
    title: 'Betaflight TPA 권장 설정 팁',
    html: 'TPA 시작 지점을 1250 또는 1350, 감쇠율을 0.65로 설정하여 고속 직선 비행 시 떨림 없는 깨끗한 비행을 유지하세요.',
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
      priceCurrency: 'KRW',
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
