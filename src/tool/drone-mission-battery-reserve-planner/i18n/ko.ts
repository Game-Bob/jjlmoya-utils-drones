import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-mission-battery-reserve-planner';
const title = '드론 임무 배터리 예비 전력 계획기';
const description = '드론 임무를 위한 귀환 안전 배터리 예비율, 맞바람 풍속 손실 및 최대 안전 정복 불능 지점 반경을 계산합니다.';

const faqItems = [
  {
    question: '맞바람 비행 시 소모 전력이 왜 급증하나요?',
    answer: '맞바람에서는 공기 저항을 극복하고 대지 속도를 유지하기 위해 드론의 피치 각도가 커져 모터 전류 소모가 비선형적으로 증가합니다.',
  },
  {
    question: '목표 지역 체류 시간이 포인트 오브 노 리턴에 어떻게 반영되나요?',
    answer: '목표 지역에서의 정지 비행 체류 시간은 배터리 에너지를 직접 소모하므로 이동 가능한 안전 왕복 반경이 줄어듭니다.',
  },
  {
    question: '부하 상태에서 LiPo 배터리 전압 강하가 발생하는 이유는 무엇인가요?',
    answer: '고전류 방전 시 리튬 셀 내부 저항 손실이 증가하여 실효 사용 가능 와트시(Wh)가 감소하기 때문입니다.',
  },
];

const howToSteps = [
  {
    name: '배터리 및 추진 사양 입력',
    text: '배터리 용량(mAh), 정격 전압(V) 및 평균 순항 전류(A)를 입력합니다.',
  },
  {
    name: '편도 거리 및 목표 체류 시간 설정',
    text: '목표 지점까지의 편도 거리와 현장 정지 비행 작업 시간을 지정합니다.',
  },
  {
    name: '풍속 및 풍향 설정',
    text: '가는 길 대비 풍속과 풍향을 선택하여 공기역학적 전력 보정을 적용합니다.',
  },
  {
    name: '안전 반경 및 텔레메트리 확인',
    text: '계산된 복귀 불능 지점, 구간별 전력 소모량 및 착륙 시 예상 배터리 잔량을 확인합니다.',
  },
];

const schemas: DroneMissionBatteryReservePlannerLocaleContent['schemas'] = [
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
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '드론 임무 배터리 예비 전력 계획기',
    subtitle: '귀환 안전 마진, 바람 영향 및 비행 반경 계산',
    description: '맞바람 보정 및 복귀 불능 임계값을 갖춘 정밀 드론 비행 예비 전력 계산기.',
    inputs: {
      unitSystemLabel: '단위계',
      metricLabel: '미터법',
      imperialLabel: '야드파운드법',
      presetLabel: '빠른 임무 프리셋',
      batteryCapacityLabel: '배터리 용량',
      batteryVoltageLabel: '정격 전압',
      averageCurrentLabel: '평균 순항 전류',
      cruiseSpeedLabel: '대공 순항 속도',
      oneWayDistanceLabel: '편도 목표 거리',
      targetHoverTimeLabel: '목표 지역 체류 시간',
      windSpeedLabel: '풍속',
      windDirectionLabel: '가는 길 대비 풍향',
      windHeadwindLabel: '가는 길 맞바람',
      windTailwindLabel: '가는 길 뒷바람',
      windCrosswindLabel: '측풍',
      reservePolicyLabel: '안전 예비 마진',
    },
    presets: {
      mappingSurvey: '측량 및 매핑',
      fpvRecon: 'FPV 장거리 정찰',
      cinematicInspection: '구조물 정밀 점검',
      microRecon: '마이크로 드론 정찰',
    },
    results: {
      totalCapacityEnergy: '총 에너지 용량',
      usableEnergy: '임무 사용 가능 에너지',
      reserveEnergyBuffer: '안전 예비 에너지 버퍼',
      totalAutonomyTime: '총 비행 가능 시간',
      maxSafeMissionRadius: '복귀 불능 지점 반경',
      outboundLegTime: '가는 길 비행 시간',
      targetHoverTime: '목표 지역 체류 시간',
      returnLegTime: '오는 길 비행 시간',
      totalMissionTime: '총 이동 시간',
      remainingEnergyLanding: '착륙 시 예상 배터리 잔량',
      feasibilityStatus: '임무 수행 가능성 평가',
    },
    statusBadges: {
      optimal: '최적 예비 전력 마진',
      tight: '예비 전력 부족 경고',
      critical: '비상 에너지 경보 발령',
      exceeded: '안전 용량 초과 임무',
    },
    chart: {
      batteryProfileTitle: '배터리 에너지 소모 프로필',
      outboundSegment: '가는 길 비행 구간',
      targetSegment: '목표 상공 체류',
      returnSegment: '복귀 비행 구간',
      reserveSegment: '안전 예비 버퍼',
    },
  },
  seo: [
    {
      type: 'title',
      text: '맞바람 비행 시 공기역학적 전력 손실',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '맞바람 상황에서의 비행은 전진 속도를 유지하기 위해 기체 기울기가 커져 모터 소모 전력이 크게 증가합니다.',
    },
    {
      type: 'title',
      text: '목표 지역 체류 시간 고려',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '임무 수행 시 현장 정지 비행 체류 시간이 필요하며, 복귀 전 에너지를 일정량 소모합니다.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
