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
    sections: {
      batteryPropulsion: '1. 배터리 및 추진 시스템',
      flightAtmosphere: '2. 비행 프로필 및 대기',
    },
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
      surveyMeta: '측량',
      scoutMeta: '정찰',
      hoverMeta: '체류',
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
      voltageSagSubLabel: '전압 강하 손실',
      maxRadiusSubLabel: '체류 시간 고려 최대 안전 반경',
      powerSubLabel: '전력',
    },
    statusBadges: {
      optimalTitle: '최적 예비 전력 마진',
      optimalSubtitle: '충분한 착륙 예비 전력을 갖춘 안전 비행 영역',
      tightTitle: '예비 전력 부족 경고',
      tightSubtitle: '착륙 예비 전력이 부족합니다. 전압 강하에 주의하세요',
      criticalTitle: '비상 에너지 경보 발령',
      criticalSubtitle: '예비 전력을 초과했습니다. 즉시 귀환을 시작하세요',
      exceededTitle: '안전 용량 초과 임무',
      exceededSubtitle: '안전하게 착륙하기 위한 배터리 전력이 부족합니다',
    },
    chart: {
      batteryProfileTitle: '비선형 배분 에너지 프로필',
      modelTitle: '공기역학 파워 및 풍속 모델',
      windLabel: '풍속',
      homeNode: '기지',
      targetNode: '목표',
      landNode: '착륙',
      launchPadLabel: '이륙 지점',
      surveyHoverLabel: '목표 체류',
      safeRadiusLabel: '안전 반경',
      outboundSegment: '가는 길 비행',
      targetSegment: '목표 체류',
      returnSegment: '오는 길 비행',
      reserveSegment: '예비 전력',
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
      html: '무인 항공기의 비행 안전은 비선형 공기역학 법칙에 기반합니다. 맞바람 상황에서의 비행은 전진 속도를 유지하기 위해 기체 기울기가 커져 모터 소모 전력이 크게 증가합니다.',
    },
    {
      type: 'paragraph',
      html: '계획기는 풍속과 풍향 조건에 따라 각 비행 구간의 소모 전력을 동적으로 계산합니다.',
    },
    {
      type: 'title',
      text: '목표 지역 체류 시간 고려',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '측량 및 점검 임무에서는 현장 상공에서의 정지 비행이 필요합니다. 이 에너지 소모량은 복귀 가능한 최대 반경을 계산하기 전에 차감됩니다.',
    },
    {
      type: 'list',
      items: [
        '임무 한계를 계산하기 전에 목표 체류 시간을 지정하세요.',
        '맞바람 구간에서의 전력 급증 현상을 고려하세요.',
        '고부하 시 LiPo 셀의 전압 강하를 추적하세요.',
        '설정한 예비 기준선에 도달하면 즉시 귀환을 시작하세요.',
      ],
    },
    {
      type: 'tip',
      title: 'LiPo 배터리 전압 강하 경고',
      html: '고전류 방전은 내부 저항으로 인한 전압 강하를 유발하여 실제 사용 가능한 와트시 에너지를 줄입니다.',
    },
    {
      type: 'title',
      text: '드론 배터리 예비 전력 계산 공식',
      level: 2,
    },
    {
      type: 'table',
      headers: ['파라미터', '계산 모델', '단위'],
      rows: [
        ['총 에너지 용량', '용량 (mAh) x 전압 (V) / 1000', '와트시 (Wh)'],
        ['전압 강하 손실', '총 에너지 x 전압강하 계수', '와트시 (Wh)'],
        ['맞바람 소모 전력', '기본 전력 x (1 + 0.65 x 바람비율)^1.3', '와트 (W)'],
        ['최대 안전 반경', '(사용 가능 에너지 - 체류 에너지) / Km당 소모량', '킬로미터 (km)'],
      ],
    },
    {
      type: 'title',
      text: 'UAV 비행 계획 베스트 프랙티스',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '상업적 운항 안전성을 유지하기 위해 사전 계산값과 실제 텔레메트리 로그를 항상 대조하세요.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
