import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-lap-timer';
const title = 'FPV 드론 레이싱 랩 및 스플릿 타이머';
const description = 'FAI 음향 스타트 시퀀스, 구간 스플릿 편차, 최고 랩 알림, 랩 일관성 지수 및 속도 텔레메트리를 지원하는 FPV 드론 레이싱 대화형 랩타이머.';

const ui = {
  setupHeading: '트랙 및 세션 설정',
  trackLengthLabel: '트랙 서킷 길이',
  trackLengthUnit: '미터',
  targetLapsLabel: '목표 랩 수',
  targetLapsUnit: '랩 (0 설정 시 무제한 연습)',
  batteryCapacityLabel: '배터리 용량',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: '음향 시그널 활성화',
  debounceThresholdLabel: '중복 입력 방지 시간',
  debounceThresholdUnit: '초',
  presetMultiGpLabel: 'MultiGP 규격 (250m / 3랩)',
  presetWhoopLabel: '타이니 웁 (65m / 5랩)',
  presetSprintLabel: '초고속 스프린트 (400m / 2랩)',
  startCountdownButton: 'FAI 카운트다운 시작',
  pauseTimerButton: '세션 일시정지',
  resumeTimerButton: '타이머 재개',
  resetTimerButton: '세션 초기화',
  recordLapButton: '랩 기록',
  spacebarHint: '게이트 통과 시 스페이스바를 누르거나 대형 버튼을 터치하세요',
  statusIdle: '출발 대기',
  statusCountdown: 'FAI 카운트다운 진행 중',
  statusRunning: '레이스 타이머 작동 중',
  statusPaused: '세션 일시정지됨',
  statusFinished: '레이스 완료',
  currentLapHeading: '현재 랩타임',
  lapNumberPrefix: '랩',
  lastLapHeading: '직전 랩',
  fastestLapHeading: '최고 랩타임',
  averageLapHeading: '평균 랩타임',
  deltaBestHeading: '최고 기록 대비 편차',
  consistencyIndexHeading: '랩 일관성 지수',
  estimatedSpeedHeading: '예상 평균 시속',
  estimatedBatteryHeading: '예상 배터리 소모량',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh 잔여',
  lapHistoryHeading: '랩 타임 및 페이스 비교',
  lapColumnHeader: '랩 #',
  timeColumnHeader: '시간',
  splitColumnHeader: '최고 대비 편차',
  speedColumnHeader: '평균 속도',
  batteryColumnHeader: '배터리 소모',
  noLapsRecordedNotice: '기록된 랩이 없습니다. 카운트다운을 시작하고 스페이스바를 눌러 첫 랩을 기록하세요.',
  consistencyRatingElite: '엘리트급 일관성',
  consistencyRatingPro: '프로 선수급 일관성',
  consistencyRatingClub: '클럽 레이서급 일관성',
  consistencyRatingNovice: '훈련 단계 일관성',
  fastestLapBadge: '최고 랩',
  sessionSummaryHeading: '세션 요약 및 내보내기',
  totalTimeLabel: '총 레이스 시간',
  completedLapsLabel: '완주한 랩',
  exportCsvButton: '랩 기록 CSV 내보내기',
  copySummaryButton: '텍스트 요약 복사',
  copiedNotice: '세션 요약이 클립보드에 복사되었습니다!',
};

const faqItems = [
  {
    question: 'FAI 음향 스타트 시퀀스는 어떻게 진행되나요?',
    answer: '국제항공연맹(FAI) CIAM F9U 드론 레이싱 공식 규정을 정확히 반영합니다. 1초 간격의 예비 신호음 4회가 울린 뒤 고주파 스타트 버저가 울리며 정밀하게 0초부터 타이머가 작동합니다.',
  },
  {
    question: '랩 일관성 지수는 어떻게 계산되나요?',
    answer: '완주한 각 랩타임의 표준 편차를 세션 평균 랩타임과 비교하여 산출합니다. 95% 이상은 정밀한 스로틀 제어와 균일한 비행 라인을 유지하고 있음을 나타냅니다.',
  },
  {
    question: '풋 페달이나 조종기 스위치로 랩을 기록할 수 있나요?',
    answer: '네. 스페이스바 키 입력을 전송할 수 있는 무선 키보드, 블루투스 발판 스위치 또는 조종기 스위치를 연결하면 화면을 보지 않고도 손쉽게 랩을 기록할 수 있습니다.',
  },
  {
    question: '중복 입력 방지(디바운스) 가드가 필요한 이유는 무엇인가요?',
    answer: '게이트는 매우 빠른 속도로 통과되지만 스위치 튐이나 손가락의 순간적인 두 번 터치로 찰나의 랩이 잘못 기록되는 것을 방지하기 위해 설정 시간(기본 3초) 이내의 입력을 무시합니다.',
  },
  {
    question: '예상 평균 시속은 얼마나 정확한가요?',
    answer: '입력된 트랙의 중심선 총 길이를 기록된 랩 소요 시간으로 나누어 계산합니다. 실제 코너 통과 속도는 선회 반경과 기체의 뱅크 각도에 따라 달라질 수 있습니다.',
  },
];

const howToSteps = [
  {
    name: '트랙 길이 및 목표 랩 수 설정',
    text: '미터 단위의 서킷 길이와 완주할 랩 수를 입력하거나 MultiGP와 같은 프리셋을 선택합니다.',
  },
  {
    name: 'FAI 음향 카운트다운 시작',
    text: '카운트다운 시작 버튼을 누르고 예비 신호음에 이어 울리는 출발 버저에 맞춰 출발합니다.',
  },
  {
    name: '피니시 게이트 통과 시 랩 기록',
    text: '드론이 출발/도착 게이트를 통과할 때마다 화면 버튼이나 스페이스바를 누릅니다.',
  },
  {
    name: '텔레메트리, 편차 및 일관성 분석',
    text: '페이스 차트, 최고 랩 대비 시간차, 일관성 지수를 확인하고 측정 기록을 CSV로 저장합니다.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'FPV 멀티로터 드론 레이싱에서 고정밀 랩타임 계측의 중요성',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '고성능 FPV 드론 레이싱 경기는 밀리초 단위의 정밀성과 흔들림 없는 비행 라인을 필요로 합니다. 5인치 레이싱 드론은 140 km/h가 넘는 속도로 3차원 게이트와 깃발을 가로지릅니다. 효과적인 실전 연습을 위해서는 표준화된 사운드 스타트, 즉각적인 게이트 통과 체크, 여러 랩에 걸친 페이스 저하 분석이 필수적입니다.',
  },
  {
    type: 'title',
    text: '드론 레이싱 규격별 트랙 제원 및 타이밍 파라미터 비교',
    level: 2,
  },
  {
    type: 'table',
    headers: ['규격 / 클래스', '일반적인 트랙 길이', '히트당 랩 수', '평균 랩타임', '최고 시속 범위', '권장 방지 시간'],
    rows: [
      ['타이니 웁 (65mm 1S)', '50m - 80m', '5랩', '8.5초 - 13.0초', '35 - 55 km/h', '2.0초'],
      ['마이크로 3.5인치 (4S)', '120m - 180m', '4랩', '12.0초 - 18.0초', '70 - 110 km/h', '2.5초'],
      ['MultiGP 5인치 (6S)', '200m - 300m', '3랩', '14.0초 - 22.0초', '100 - 150 km/h', '3.0초'],
      ['오픈 필드 스프린트 (6S/8S)', '350m - 500m', '2랩', '20.0초 - 32.0초', '130 - 180 km/h', '4.0초'],
    ],
  },
  {
    type: 'title',
    text: '출발 음향 시퀀스와 FAI F9U 스포츠 규정',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'FAI CIAM 섹션 4 드론 레이싱 규정에 따라 FPV 고글을 착용한 조종사 간의 공평한 반응 시간을 보장하기 위해 깃발 대신 공인된 음향 신호로 경기를 시작합니다. 1초 간격의 440Hz 톤 4회에 이어 모터를 가동하는 880Hz 스타트 톤으로 전환됩니다.',
  },
  {
    type: 'list',
    items: [
      '예비 신호음: 스로틀 위치를 안정화하고 첫 코너 진입 시야를 확보하기 위한 알림음.',
      '출발 신호음 (Go): 즉시 가속하여 날아오르는 신호로 정확히 t = 0부터 계측이 시작됩니다.',
      '통과 확인음: 고글에서 시선을 떼지 않고도 랩이 정상 기록되었음을 확인시켜 주는 알림음.',
      '최고 기록 멜로디: 세션 내 최고 랩타임을 경신했을 때 울리는 경쾌한 화음 차임.',
    ],
  },
  {
    type: 'title',
    text: '랩 일관성 지수와 레이스 전략 운영',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '단 한 번의 폭발적인 랩타임도 훌륭하지만 대회 승패는 꾸준함이 좌우합니다. 일관성 지수는 기록의 편차를 평가합니다. 랩 편차가 0.3초 미만인 조종사는 후류 와류를 피하고 배터리 전압을 마지막 랩까지 안정적으로 유지할 수 있습니다.',
  },
  {
    type: 'tip',
    title: '비행 연습 현장 활용 팁',
    html: '조종석 가까이 태블릿이나 스마트폰을 소리가 잘 들리도록 배치하세요. 블루투스 풋 스위치나 작은 무선 패드를 바닥에 놓으면 조종기 스틱을 놓지 않고도 발로 랩을 기록할 수 있습니다.',
  },
];

const schemas: FpvDroneLapTimerLocaleContent['schemas'] = [
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

export const content: FpvDroneLapTimerLocaleContent = {
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
