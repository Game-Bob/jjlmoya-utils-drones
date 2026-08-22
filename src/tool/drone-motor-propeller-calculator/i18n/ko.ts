import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'drone-motor-propeller-calculator';
const title = '드론 모터 및 프로펠러 추력 계산기';
const description = 'KV 값, 배터리 전압, 프로펠러 규격 및 드론 무게를 바탕으로 모터 추력, 부하 RPM, 피드 스피드, 소비 전력 및 전류를 추정합니다.';

const ui = {
  "presetsHeader": "비행 프로필 선택",
  "presetTinyCruiser": "경량 마이크로 크루저 3.5인치",
  "presetFreestyle": "프리스타일 5인치",
  "presetLongRange": "롱레인지 7인치",
  "presetCinelifter": "시네리프터 8모터",
  "unitHeader": "표시 단위",
  "metricUnit": "미터법",
  "imperialUnit": "야드파운드법",
  "setupHeader": "파워트레인 및 기체",
  "motorKvLabel": "모터 KV (RPM/V)",
  "batteryVoltageLabel": "배터리 전압",
  "propDiameterLabel": "프로펠러 직경",
  "propPitchLabel": "프로펠러 피치",
  "bladeCountLabel": "날개 수",
  "motorCountLabel": "모터 수",
  "droneWeightLabel": "비행 이륙 중량 (RTF)",
  "benchDataHeader": "제조사 벤치 테스트 데이터",
  "benchThrustLabel": "모터당 추력",
  "benchVoltageLabel": "테스트 전압",
  "optionalLabel": "선택사항",
  "twoBlades": "2엽",
  "threeBlades": "3엽",
  "fourBlades": "4엽",
  "twoMotors": "2모터",
  "fourMotors": "4모터",
  "sixMotors": "6모터",
  "eightMotors": "8모터",
  "resultsHeader": "추력 및 양력 균형",
  "estimatedLabel": "물리 모델 추정치.",
  "benchBasedLabel": "벤치 데이터 교정됨.",
  "loadedRpmLabel": "부하 회전수",
  "pitchSpeedLabel": "이론 피치 속도",
  "thrustPerMotorLabel": "모터당 추력",
  "totalThrustLabel": "총 정적 추력",
  "totalPowerLabel": "추정 소비 전력",
  "totalCurrentLabel": "추정 소비 전류",
  "thrustMarginLabel": "양력 마진",
  "hoverThrottleLabel": "호버링 스로틀",
  "sceneCaption": "부하 시 프로펠러 회전 속도",
  "underpoweredStatus": "마진 부족",
  "workableStatus": "사용 가능한 마진",
  "headroomStatus": "충분한 마진",
  "underpoweredAdvice": "총 추력이 이륙 중량의 2배 미만입니다. 바람이나 배터리 전압 강하 시 제어력이 제한될 수 있습니다.",
  "workableAdvice": "일반 비행에 적합한 실용적인 마진입니다. 실제 비행 전 장시간 호버링 후 모터와 ESC 온도를 확인하세요.",
  "headroomAdvice": "충분한 정적 양력 마진을 확보했습니다. 제어 응답성이 뛰어나지만 ESC와 배터리에 더 많은 전류 부담을 줍니다.",
  "sourceNote": "테스트 데이터는 추력만 교정하며 전력과 전류는 모델 추정치입니다.",
  "modelSourceNote": "테스트 데이터 없음. 투명 물리 계수 모델 사용.",
  "manufacturerNote": "가급적 동일한 모터와 프로펠러의 제조사 벤치 데이터를 사용하세요.",
  "modelNote": "정적 추력, 전력, 전류는 추정치입니다. 실제 성능은 공기 밀도와 손실에 따라 달라집니다.",
  "safetyNote": "비행 전 추력 스탠드에서 실제 전류와 온도를 확인하세요.",
  "thrustAxisLabel": "추력 방향",
  "weightAxisLabel": "드론 무게",
  "clearBenchData": "테스트 데이터 삭제"
};

const faq = [
  {
    "question": "이 드론 모터 및 프로펠러 계산기는 무엇을 추정하나요?",
    "answer": "KV, 전압, 프로펠러 및 무게 정보를 통해 부하 RPM, 피치 속도, 모터당 및 총 정적 추력, 소비 전력 및 전류를 추정합니다."
  },
  {
    "question": "드론 모터와 프로펠러를 어떻게 매칭해야 하나요?",
    "answer": "제조사 권장 사양으로 시작하여 총 추력과 이륙 중량을 비교하고, 비행 전 테스트 스탠드에서 전류와 온도를 검증하세요."
  },
  {
    "question": "왜 제조사 벤치 데이터가 물리 모델보다 정확한가요?",
    "answer": "실제 프로펠러 형상과 손실이 반영되어 있기 때문입니다. 계산기는 이 데이터를 선택한 전압에 맞게 보정합니다."
  },
  {
    "question": "프로펠러 크기가 추력에 어떤 영향을 미치나요?",
    "answer": "정적 추력은 직경과 회전수에 크게 의존합니다. 직경이 클수록 더 많은 공기를 밀어내지만 더 높은 토크가 필요합니다."
  },
  {
    "question": "이 계산기로 안전한 비행이 보장되나요?",
    "answer": "아니요. 설계 기획용 도구입니다. 첫 비행 전 테스트 스탠드에서 실제 전류와 온도를 검증하세요."
  }
];

const howTo = [
  {
    "name": "비행 프로필 선택",
    "text": "프리셋을 선택하여 KV, 전압, 프로펠러 및 무게의 적절한 초기값을 로드합니다."
  },
  {
    "name": "기체 및 프로펠러 정보 입력",
    "text": "비행 이륙 중량과 모터/프로펠러 사양을 미터법 또는 야드파운드법으로 입력합니다."
  },
  {
    "name": "측정 데이터 추가",
    "text": "벤치 테스트 데이터가 있는 경우 측정 추력과 전압을 입력하여 모델을 교정합니다."
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: '드론 모터 및 프로펠러 매칭 원리',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '모터와 프로펠러의 조합은 회전수, 직경, 피치, 전압 및 토크 간의 균형입니다. 이 도구는 정적 양력과 전기적 부하를 산출합니다.',
  },
  {
    type: 'title',
    text: '계산기 출력 항목',
    level: 2,
  },
  {
    type: 'table',
    headers: ["항목","의미"],
    rows: [["부하 회전수","무부하 KV 추정치에 부하 요소를 적용한 RPM"],["정적 추력","모터 단체 추력 및 전체 총 양력"],["양력 마진","이륙 중량 대비 총 정적 추력 비율"],["전력 및 전류","선택한 전압에서의 추정 전기 소비량"]],
  },
  {
    type: 'title',
    text: '계산기 사용 방법',
    level: 2,
  },
  {
    type: 'list',
    items: ["모터 KV 및 배터리 전압 입력.","프로펠러 직경, 피치, 날개 수 및 모터 수 선택.","필요시 제조사 벤치 테스트 데이터 추가.","비행 전 테스트 스탠드에서 전류와 온도 검증."],
  },
  {
    type: 'title',
    text: '실측 데이터의 중요성',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '프로펠러 추력은 공기 밀도와 형상에 따라 달라집니다. 실측 데이터를 사용하면 가장 정확한 교정이 가능합니다.',
  },
  {
    type: 'tip',
    title: '테스트 팁',
    html: '첫 비행 전 테스트 스탠드에서 각 스롯틀별 전류와 온도를 측정하세요.',
  },
];

const schemas: DroneMotorPropellerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
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
    step: howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMotorPropellerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography: BIBLIOGRAPHY_ITEMS,
  howTo,
  schemas,
};
