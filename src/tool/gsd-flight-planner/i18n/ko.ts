import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gsd-flight-planner';
const title = 'GSD 플라이트 플래너: 드론 지상 화소 해상도 계산기';
const description = '사진측량 미션을 위한 지상 화소 해상도(GSD)를 계산하세요. DJI, Autel 및 맞춤형 카메라를 지원합니다. 시각적 품질 지표를 통한 실시간 비행 계획을 제공합니다.';

const faqItems = [
  {
    question: '지상 화소 해상도(GSD)란 무엇인가요?',
    answer: 'GSD는 이미지의 한 픽셀이 지상에서 나타내는 거리입니다. GSD가 낮을수록 해상도와 세밀함이 높아집니다. 예를 들어, 1 cm/px GSD는 1센티미터 크기의 세부 사항을 식별할 수 있게 해주며, 이는 측량에 있어 매우 중요합니다.',
  },
  {
    question: '내 드론의 카메라 사양은 어디서 찾을 수 있나요?',
    answer: '드론 매뉴얼에서 센서 크기와 초점 거리를 확인하세요. 또는 DJI Mavic 3E나 Autel EVO II와 같은 인기 모델을 위한 카메라 프리셋을 사용하세요. 맞춤형 카메라의 경우, 렌즈 사양에서 센서 크기를 측정하세요.',
  },
  {
    question: '미션 유형별로 어떤 GSD가 필요한가요?',
    answer: '고정밀 지형 측량: 1-2 cm/px. 표준 매핑: 2-5 cm/px. 점검 및 모니터링: 5-10 cm/px. 시각적 조사: 10+ cm/px. 프로젝트의 정확도 요구 사항에 따라 선택하세요.',
  },
  {
    question: '이미지 중첩이란 무엇이며 왜 중요한가요?',
    answer: '중첩(Overlap)은 연속된 사진에 나타나는 영역의 백분율입니다. 높은 중첩(60-80%)은 완전한 커버리지를 보장하고 3D 모델 품질을 향상시킵니다. 전방 중첩은 사진 간격에 영향을 미치고, 측방 중첩은 비행 코스 수에 영향을 미칩니다.',
  },
  {
    question: '이상적인 비행 고도는 어떻게 계산하나요?',
    answer: '이 계산기를 사용하세요: 원하는 GSD × 초점 거리 ÷ 센서 폭 = 고도. 계산기가 이를 자동으로 수행하며, 목표 정밀도를 유지하고 모션 블러를 피하기 위한 최대 안전 고도를 보여줍니다.',
  },
];

const howToSteps = [
  {
    name: '카메라 선택 또는 구성',
    text: '사전 구성된 모델(DJI Mavic 3E, Autel EVO II 등) 중에서 선택하거나 센서 크기와 초점 거리를 수동으로 입력하세요. 프리셋은 모든 매개변수를 즉시 로드합니다.',
  },
  {
    name: '비행 고도 설정',
    text: '고도 슬라이더를 사용하여 지표면으로부터의 높이(AGL)를 조정하세요. 고도가 이미지 해상도에 미치는 영향을 실시간으로 확인하면서 GSD 업데이트를 지켜보세요.',
  },
  {
    name: '중첩 요구 사항 정의',
    text: '전방 및 측방 중첩 백분율을 설정하세요. 중첩이 높을수록 완전한 커버리지가 보장되지만 미션 시간과 이미지 수가 증가합니다.',
  },
  {
    name: '결과 검토 및 내보내기',
    text: 'GSD, 커버리지 영역 및 정밀도 분류를 확인하세요. 공식 비행 계획에 첨부할 수 있는 빠른 보고서를 생성하세요.',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: '설정',
    cameraSelection: '카메라 선택',
    manualMode: '수동 모드',
    sensorConfig: '센서 설정',
    width: '너비',
    height: '높이',
    focalLength: '초점 거리',
    imageResolution: '이미지 해상도',
    w: '가로',
    h: '세로',
    px: 'px',
    altitudeAgl: '고도 (AGL)',
    overlapSettings: '중첩 설정',
    forward: '전방',
    lateral: '측방',
    missionArea: '미션 영역',
    totalAreaToSurvey: '총 조사 면적',
    hectareHint: '1 ha = 10,000 m²',
    inverseCalc: '역계산',
    targetGsd: '목표 GSD',
    maxAltitude: '최대 고도',
    reset: '초기화',
    results: '결과',
    gsdResult: '지상 화소 해상도 (GSD)',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: '고정밀',
    standard: '표준',
    inspection: '점검',
    visual: '조사',
    coveragePerImage: '이미지당 커버리지',
    area: '면적',
    spacing: '간격',
    flightDir: '비행 방향 →',
    missionMetrics: '미션 지표',
    images: '이미지',
    shots: '컷',
    flightLines: '비행 코스 수',
    lines: '코스',
    flightTime: '비행 시간',
    min: '분',
    dataVolume: '데이터량',
    gb: 'GB',
    copyShareLink: '링크 복사',
    downloadReport: '보고서 다운로드',
    copiedToClipboard: '복사되었습니다!',
    metric: '미터법',
    imperial: '야드파운드법',
    classHighPrecision: '고정밀 지형 측량',
    classStandard: '표준 매핑',
    classInspection: '점검 및 모니터링',
    classVisual: '시각적 조사',
    ultraHighResAlert: '초고해상도: 충분한 저장 공간과 처리 능력을 확보하세요',
    lowOverlapAlert: '전방 중첩 60% 미만: 3D 모델 품질에 영향을 줄 수 있습니다',
    largeDatasetAlert: '매우 큰 데이터셋: 여러 비행으로 나누는 것을 고려하세요',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'GSD 플라이트 플래너: 완벽한 사진측량 계산기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>지상 화소 해상도(GSD)</strong>는 드론 사진측량에서 가장 중요한 지표입니다. 계산 오류는 하루 종일의 비행을 헛되게 하고 수천 달러의 생산성 손실을 초래할 수 있습니다. 이 계산기는 그 위험을 제거합니다.',
    },
    {
      type: 'title',
      text: '전문가에게 GSD가 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '토지 측량, 3D 모델 제작, 인프라 모니터링 중 무엇을 하든 GSD가 캡처할 수 있는 세밀함을 결정합니다. 1 cm/px 미션은 5 cm/px 미션이 놓치는 세부 사항을 캡처합니다. 하지만 너무 낮게 비행하면 배터리를 낭비하고 미션 시간을 불필요하게 연장합니다.',
    },
    {
      type: 'title',
      text: '미션 유형별 GSD',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>고정밀 지형 측량 (1-2 cm/px):</strong> 필지, 광산 현장 및 엔지니어링 프로젝트를 위한 지형 등급 정확도.',
        '<strong>표준 매핑 (2-5 cm/px):</strong> 정사영상, 농업 모니터링 및 일반 목적 지도.',
        '<strong>점검 및 모니터링 (5-10 cm/px):</strong> 건물 점검, 전력선 검토 및 변화 탐지.',
        '<strong>시각적 조사 (10+ cm/px):</strong> 광범위한 지역 정찰 및 시각적 평가.',
      ],
    },
    {
      type: 'title',
      text: 'GSD 공식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (고도 × 센서 너비) / (초점 거리 × 이미지 너비) × 100</code><br/>이 계산기가 수학적 처리를 담당합니다. 당신은 미션에 집중하세요.',
    },
    {
      type: 'title',
      text: '중첩: 왜 60-80%가 최적의 범위인가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '낮은 중첩(20-40%)은 배터리를 절약하지만 커버리지에 공백이 생길 위험이 있습니다. 높은 중첩(80%+)은 완전한 커버리지를 보장하지만 미션 시간을 연장합니다. <strong>60-80% 범위</strong>가 전문가 표준입니다. 과도한 중복 없이 완전한 3D 재구성을 보장합니다.',
    },
    {
      type: 'title',
      text: '실제 데이터로 더 나은 미션 계획하기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '비행 전마다 이 계산기를 사용하여 다음을 결정하세요: 필요한 GSD에 대한 정확한 고도, 필요한 사진 수, 총 미션 시간, 모션 블러 위험 여부. 이 데이터를 통해 정밀한 미션을 수행하고 비용이 많이 드는 실수를 피할 수 있습니다.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
