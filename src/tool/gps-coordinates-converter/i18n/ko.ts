import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'gps-coordinates-converter';
const title = 'ArduPilot 및 INAV 웨이포인트용 GPS 좌표 변환기';
const description = 'GPS 좌표를 십진수 도(DD), 도분초(DMS) 및 GPS 하드웨어 형식 간에 변환합니다. ArduPilot 및 INAV 웨이포인트에 필수적입니다.';

const faqItems = [
  {
    question: 'DD와 DMS의 차이점은 무엇인가요?',
    answer: `DD (십진 도수)는 소수점이 있는 단일 숫자를 사용합니다(예: 51.50). DMS (도, 분, 초)는 도를 육십진법 분수로 나눕니다(예: 51° 30' 0").`,
  },
  {
    question: '음수 좌표가 왜 사용되나요?',
    answer: '십진 시스템(DD)에서는 적도 남쪽의 위도와 그리니치 자오선 서쪽의 경도를 음수로 표시하여 수학적 계산을 편리하게 합니다.',
  },
  {
    question: '변환할 때 정밀도를 얼마나 잃나요?',
    answer: '당사의 도구는 배정밀 부동소수점을 사용합니다. DD에서 소수점 6자리를 사용하면 정밀도는 약 11센티미터로, 드론과 민간 항법에는 충분합니다.',
  },
  {
    question: '이 도구는 오프라인으로 작동하나요?',
    answer: '네, 페이지가 로드되면 모든 변환 로직이 로컬(클라이언트 측)에서 실행됩니다. 지도만 새로운 타일을 다운로드하기 위해 연결이 필요합니다.',
  },
];

const schemas: GpsCoordinatesConverterLocaleContent['schemas'] = [
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
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: '좌표 입력',
        text: '십진 도수(DD) 또는 도, 분, 초(DMS) 형식으로 좌표를 입력합니다.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: '변환 검토',
        text: '이 도구는 지원되는 모든 형식으로 변환된 좌표를 즉시 표시합니다.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: '지도에서 확인',
        text: '지도 시각화를 확인하여 좌표가 올바른 위치를 가리키는지 확인합니다.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: '결과 복사',
        text: '변환된 좌표를 클립보드에 복사하여 항법 시스템이나 미션 계획에 사용합니다.',
      },
    ],
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


export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고 문헌',
  ui: {
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌',
    latitude: '위도',
    longitude: '경도',
    decimalDegrees: '십진 도수 (DD)',
    degreesMinutesSeconds: '도, 분, 초 (DMS)',
    gpsHardware: 'GPS 하드웨어 형식 (Raw)',
    copy: '복사',
    copied: '복사되었습니다!',
    invalidCoordinate: '잘못된 좌표',
    pasteHardwareMapFormat: '원본 데이터 붙여넣기 (예: 404306300, -739981800)',
    validation: {
      latRange: '위도는 -90에서 90 사이여야 합니다.',
      lonRange: '경도는 -180에서 180 사이여야 합니다.',
      invalidFormat: '형식을 인식할 수 없습니다. 입력을 확인해 주세요.',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'GPS 좌표의 이해: 드론 내비게이션을 위한 필수 도구',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '자율 비행 드론, 항공 측량 또는 분실된 장비 회수에 있어 정밀도와 일관성은 핵심입니다. GPS 좌표는 내비게이션의 중추를 형성하지만, 다양한 시스템(예: Betaflight, INAV, ArduPilot, Google Maps)에서 다른 형식을 사용합니다. 당사의 <strong>GPS 좌표 변환기</strong>는 이러한 차이를 연결하여 웨이포인트가 항상 의도한 위치에 정확히 설정되도록 보장합니다.',
    },
    {
      type: 'title',
      text: '알아야 할 세 가지 주요 GPS 형식',
      level: 3,
    },
    {
      type: 'title',
      text: '1. 십진 도수 (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '오늘날 전 세계적으로 가장 널리 사용되는 형식으로, <strong>Google Maps</strong>, 최근 스마트폰 및 대부분의 웹 매핑 서비스에서 널리 채택되어 있습니다. 위치를 단순한 소수로 표현합니다 (예: <code>40.7128, -74.0060</code>). 복사 및 붙여넣기가 매우 쉬우며 컴퓨터에서 처리하기에 이상적입니다.',
    },
    {
      type: 'list',
      items: [
        '양수 위도는 북반구를, 음수는 남반구를 나타냅니다.',
        '양수 경도는 본초 자오선의 동쪽을, 음수는 서쪽을 나타냅니다.',
      ],
    },
    {
      type: 'title',
      text: '2. 도, 분, 초 (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '이것은 항해, 항공 및 구형 지형도에서 사용되는 전통적인 형식입니다 (예: <code>40° 42\' 46.08" N, 74° 0\' 21.6" W</code>). 이 형식은 지구를 360도로 나누고(1도는 60분, 1분은 60초) 하므로 종이 지도를 사용한 인간의 내비게이션에는 더 직관적일 수 있지만, 특정 기호를 포함하기 때문에 비행 및 경로를 프로그래밍할 때 디지털로 입력하기가 번거로울 수 있습니다.',
    },
    {
      type: 'title',
      text: '3. GPS 하드웨어 / Raw 형식 (ArduPilot / INAV)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'CLI(Command Line Interface)에서 직접 설정을 읽거나, 원시 Blackbox 플라이트 로그를 검토하거나, MAVLink를 통해 ArduPilot과 같은 시스템과 상호 작용할 때 좌표가 큰 정수로 표시되는 경우가 많습니다 (예: <code>407128000, -740060000</code>).',
    },
    {
      type: 'paragraph',
      html: '이것은 마이크로컨트롤러가 부동 소수점 수(소수)보다 정수를 훨씬 빠르고 정확하게 계산할 수 있기 때문입니다. 일반적으로 십진 도수 값에 <strong>10,000,000 (1e7)</strong>을 곱한 값이 사용됩니다. 이 변환 도구는 이 형식으로 원활하게 변환(및 역변환)할 수 있으므로 Blackbox 데이터 분석에 이상적입니다.',
    },
    {
      type: 'title',
      text: '드론 조종사에게 이 변환 도구가 필요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 변환기가 가장 유용하게 쓰이는 몇 가지 중요한 시나리오가 있습니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>분실된 드론 복구 (Lost Drone Recovery):</strong> OSD(On-Screen Display)나 Taranis/Radiomaster 송신기에는 마지막으로 확인된 좌표가 DD 또는 DMS 형식으로 표시되는 경우가 많습니다. 이를 빠르게 변환하여 Google Maps에 핀을 설정하고 장비를 찾을 수 있습니다.',
        '<strong>웨이포인트 계획 (Waypoint Planning):</strong> Mission Planner나 QGroundControl 등의 소프트웨어를 사용한 미션 계획에는 최고의 정밀도가 필요합니다. 기존 측량 도면의 DMS 좌표를 DD로 변환하여 드론이 정확한 안전 경계 내에서 비행하도록 하고 예상치 못한 사유지 침입을 방지합니다.',
        '<strong>펌웨어 설정 (Terminal CLI):</strong> CLI에서 RTH(Return to Home) 위치를 직접 설정할 때 일부 펌웨어에서는 천만분의 일 도의 정확도를 가진 원시 GPS 하드웨어 형식(Raw integer)이 필요합니다.',
      ],
    },
    {
      type: 'title',
      text: '좌표 정밀도의 이해: 소수점 몇 자리가 필요할까?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '소수점 자릿수는 실제 거리에 어느 정도 영향을 미칠까요? 적도 근처에서의 대략적인 기준은 다음과 같습니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>소수점 1자리</strong> (예: 40.1): 약 111킬로미터 오차 (거의 쓸모없음).',
        '<strong>소수점 3자리</strong> (예: 40.123): 약 110미터 (인근 동네 수준).',
        '<strong>소수점 5자리</strong> (예: 40.12345): 약 1.1미터 (일반적인 상업용/취미용 비행 및 RTH에 매우 적합).',
        '<strong>소수점 7자리</strong> (예: 40.1234567): 약 11밀리미터 (전문 RTK 측량).',
      ],
    },
    {
      type: 'paragraph',
      html: '개방된 환경에서 대부분의 표준 M8N 또는 M10 GPS 모듈은 소수점 5자리에서 6자리(약 1~2미터)의 정밀도를 제공합니다. 데이터의 손실을 막기 위해 복사할 때는 가능한 한 소수점 6자리 이상을 항상 유지하십시오.',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'ArduPilot GPS 연동 기초', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: '십진 도 대 DMS (위키백과)', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: '형식 확인',
      text: '변환하려는 좌표의 형식을 확인하십시오. 40.7128, -74.0060과 같은 형식이면 DD(십진 도수)입니다. 40°42\'46"N과 같은 형식이면 DMS(도분초)입니다. 407128000과 같은 길고 큰 숫자만 있다면 하드웨어(Raw) 형식입니다.',
    },
    {
      name: '좌표 입력',
      text: '위에서 확인하고 결정한 형식에 해당하는 3개의 입력 필드 중 한 곳에 값을 직접 입력하거나 붙여넣어 주십시오.',
    },
    {
      name: '변환 실행 및 확인',
      text: '별도의 버튼 클릭 없이, 입력하는 즉시 변환기가 다른 형식들을 실시간으로 자동 계산하여 보여줍니다.',
    },
    {
      name: '결과 복사',
      text: '우측 또는 하단에 있는 \'복사\'버튼을 클릭하여 원하는 형식의 결과값을 로컬 클립보드로 전송합니다. 이후 목적지 앱(Google Maps, Mission Planner, CLI 터미널)에 활용하시기 바랍니다.',
    },
  ],
  schemas,
};
