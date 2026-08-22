import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'drone-battery-c-rating-calculator';
const title = '드론 LiPo 배터리 C 레이트 및 연속 방전 계산기';
const description = '내부 저항과 모터 소모 전류를 바탕으로 드론 LiPo 배터리의 현실적인 연속 방전 전류, C 레이트, 전압 강하(볼티지 새그) 및 비행 안정성을 계산합니다.';

const ui = {
  title: '드론 LiPo 배터리 C 레이트 계산기',
  subtitle: '멀티콥터의 현실적인 연속 방전, 피크 요구량 및 전압 강하 분석',
  lipoSpecsHeader: '배터리 사양',
  capacityLabel: '용량 (mAh)',
  claimedCRatingLabel: '표기 C 레이트',
  cellCountLabel: '직렬 셀 수 (S)',
  chemistryLabel: '배터리 화학 유형',
  internalResistanceLabel: '셀당 내부 저항 (mΩ)',
  quadSpecsHeader: '드론 전력 소모량',
  motorCountLabel: '모터 개수',
  peakMotorCurrentLabel: '모터당 피크 전류 (A)',
  auxCurrentLabel: '보조 장치 소모 전류 (VTX, FC, 카메라) (A)',
  presetSelectLabel: '빠른 설정 프리셋',
  customPreset: '사용자 지정',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5인치 프리스타일',
  cinewhoopPreset: '4S 3인치 시네춥',
  longRange7Preset: '6S 7인치 롱레인지',
  racing5Preset: '6S 5인치 레이싱',
  resultsHeader: '전력 및 성능 분석',
  claimedMaxCurrentLabel: '표기 최대 전류',
  realisticCRatingLabel: '현실적인 연속 C 레이트',
  realisticMaxCurrentLabel: '현실적인 연속 방전 전류',
  totalPeakDrawLabel: '총 피크 소모 전류',
  voltageSagLabel: '예상 전압 강하 (새그)',
  sagNominalVoltageLabel: '부하 시 공헌 전압',
  flightTimeFullThrottleLabel: '최대 출력 비행 시간',
  flightTimeHoverLabel: '예상 제자리 비행 시간',
  safetyStatusLabel: '안전성 진단',
  statusOptimalTitle: '안전하고 최적화된 배터리 조합',
  statusOptimalDesc: '배터리가 과도한 발열이나 심한 전압 강하 없이 피크 전류를 여유 있게 공급할 수 있습니다. 셀 수명 연장이 기대됩니다.',
  statusWarningTitle: '중간 수준의 열 및 전압 스트레스',
  statusWarningDesc: '피크 소모 전류가 배터리의 현실적인 한계에 가깝습니다. 급가속 시 약간의 전압 강하가 발생할 수 있습니다.',
  statusDangerTitle: '과전류 및 전압 강하 위험 높음',
  statusDangerDesc: '피크 소모 전류가 배터리의 실제 방전 능력을 초과합니다. 과열, 심각한 전압 강하, 조기 성능 저하 위험이 있습니다.',
  lipoVisualizerTitle: '실시간 LiPo 상태 비주얼라이저',
  cellVoltageLabel: '셀당 전압',
  batteryHealthLabel: '배터리 부하 상태',
  burstRatingRequiredLabel: '요구되는 버스트 C 레이트',
  currentRatioLabel: '전력 부하 비율',
};

const faqItems = [
  {
    question: '드론 LiPo 배터리의 C 레이트란 무엇인가요?',
    answer: 'C 레이트는 배터리 용량 대비 최대 연속 방전 속도를 의미합니다. 예를 들어 1500mAh 100C 배터리는 이론적으로 최대 150A의 전류를 공급할 수 있습니다.',
  },
  {
    question: '표기 C 레이트가 실제 성능보다 높은 이유는 무엇인가요?',
    answer: '제조사들이 짧은 버스트 수치나 이상적인 실험실 환경의 수치를 마케팅에 활용하기 때문입니다. 실제 연속 방전은 셀의 내부 저항에 크게 좌우됩니다.',
  },
  {
    question: '내부 저항이 전압 강하와 발열에 미치는 영향은 무엇인가요?',
    answer: '높은 내부 저항은 셀 내부의 불필요한 저항으로 작용합니다. 큰 전류를 소모할 때 전압이 급격히 떨어지고 에너지가 열로 손실됩니다.',
  },
  {
    question: '프리스타일 비행 시 볼티지 새그를 줄이려면 어떻게 해야 하나요?',
    answer: '내부 저항이 낮은 고품질 셀을 사용하고, 피크 소모량 대비 최소 15% 이상의 안전 마이지를 확보하며, 셀당 3.5V 이하로 내려가지 않도록 하세요.',
  },
];

const howToSteps = [
  {
    name: '프리셋 선택 또는 배터리 사양 입력',
    text: '용량(mAh), 표기 C 레이트, 직렬 셀 수 및 셀당 평균 내부 저항을 입력합니다.',
  },
  {
    name: '드론 전력 소모량 설정',
    text: '모터 개수, 풀 스로틀 시 모터당 피크 전류, 보조 장치 소모 전류를 입력합니다.',
  },
  {
    name: '안전성 진단 및 실제 방전 전류 확인',
    text: '계산된 현실적인 연속 방전 전류와 드론의 피크 소모 전류를 비교하여 안정성을 검증합니다.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: '드론 LiPo 배터리 C 레이트와 실제 출력 전력의 이해',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'FPV 드론에 적합한 LiPo 배터리를 선택하려면 용량, C 레이트, 모터 전류 소모량 간의 관계를 이해해야 합니다. 제조사가 100C 이상을 표기하더라도 실제 연속 방전 능력은 내부 저항과 열 방출 한계에 의해 결정됩니다. 이 계산기는 안전한 마진을 제공합니다.',
  },
  {
    type: 'title',
    text: 'RC 배터리 화학 유형 비교표',
    level: 2,
  },
  {
    type: 'table',
    headers: ['화학 유형', '공칭 전압', '최대 전압', '에너지 밀도', '피크 방전', '추천 용도'],
    rows: [
      ['LiPo (표준)', '3.7V', '4.20V', '높음', '100C - 150C', '5인치 FPV 레이싱 및 프리스타일'],
      ['LiHV (고전압)', '3.8V', '4.35V', '매우 높음', '80C - 120C', 'TinyWhoop 및 마이크로 드론'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', '최고', '15C - 35C', '7인치 롱레인지 비행'],
      ['LiFePO4', '3.3V', '3.65V', '보통', '30C - 50C', '야외 충전용 파워뱅크'],
    ],
  },
  {
    type: 'title',
    text: '볼티지 새그와 내부 저항이 드론 비행에 미치는 영향',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '볼티지 새그는 급가속 시 배터리 전압이 순간적으로 떨어지는 현상입니다. 내부 저항이 높은 노후 배터리는 전력이 열로 손실되어 FPV OSD 화면에 조기 저전압 경고를 유발합니다.',
  },
  {
    type: 'list',
    items: [
      '낮은 내부 저항 (셀당 1-4 mΩ): 우수한 출력, 최소한의 새그, 낮은 발열.',
      '보통 내부 저항 (셀당 5-10 mΩ): 표준 프리스타일 비행 성능.',
      '높은 내부 저항 (셀당 >12 mΩ): 현저한 출력 감소, 심각한 새그, 빠른 발열.',
    ],
  },
  {
    type: 'title',
    text: '프리스타일 레이싱 및 롱레인지 드론 배터리 최적화',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '비행 스타일에 따라 요구되는 전력 특성이 다릅니다. 5인치 프리스타일 드론은 120A 이상의 순간 전류를 요구하는 반면, 7인치 롱레인지 드론은 지속적인 효율이 중요합니다. 정확한 매칭으로 비행 중 전원 차단을 방지하세요.',
  },
  {
    type: 'tip',
    title: 'LiPo 배터리 보관 관리 팁',
    html: '배터리를 사용하지 않을 때는 항상 셀당 3.80V ~ 3.85V 스토리지 전압으로 보관하세요. 완충 상태로 48시간 이상 방치하면 내부 저항이 영구적으로 증가합니다.',
  },
];

const schemas: DroneBatteryCRatingCalculatorLocaleContent['schemas'] = [
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

export const content: DroneBatteryCRatingCalculatorLocaleContent = {
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
