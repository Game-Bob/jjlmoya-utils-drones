import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulator-rasio-daya-dorong-terhadap-berat-drone-fpv';
const title = 'Kalkulator Rasio Daya Dorong Terhadap Berat dan Telemetri Terbang Drone FPV';
const description = 'Hitung gaya dorong statis maksimum, kurva respons throttle non-linear, gaya G vertikal, titik hover, dan akselerasi 0 ke 100 untuk drone FPV.';

const ui = {
  title: 'Kalkulator Rasio Daya Dorong Terhadap Berat Drone FPV',
  subtitle: 'Analisis kurva dorong, respons throttle langsung, gaya G vertikal, dan klasifikasi kelincahan',
  presetsHeader: 'Profil Siap Pakai',
  customPreset: 'Kustom',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 Inci',
  freestyle5Preset: '6S Freestyle 5 Inci Pro',
  longrange7Preset: '6S Mountain LR 7 Inci',
  cinelifter8Preset: '8S Cinelifter Berat X8',
  specsHeader: 'Spesifikasi Drone dan Penggerak',
  auwGramsLabel: 'Berat Total dengan Baterai (g)',
  motorCountLabel: 'Konfigurasi Motor',
  thrustPerMotorLabel: 'Daya Dorong Maksimum per Motor (g)',
  propellerSizeLabel: 'Diameter Baling-baling (inci)',
  propellerPitchLabel: 'Pitch Baling-baling (inci)',
  bladeCountLabel: 'Jumlah Bilah Baling-baling',
  blade2Option: '2 Bilah (Bibilah - Efisiensi Maksimal)',
  blade3Option: '3 Bilah (Tribilah - Standar Freestyle)',
  blade4Option: '4 Bilah (Caturwilah - Cengkeraman Maksimal)',
  throttleStickHeader: 'Simulator Tuas Throttle Langsung',
  throttleStickLabel: 'Posisi Tuas Throttle (%)',
  snapIdleLabel: 'Idle (0%)',
  snapHoverLabel: 'Titik Hover',
  snapCruiseLabel: 'Jelajah (50%)',
  snapPunchLabel: 'Throttle Penuh (100%)',
  telemetryHeader: 'Telemetri Terbang FPV dan Diagnostik',
  twrRatioLabel: 'Rasio Daya Dorong ke Berat (TWR)',
  hoverThrottleLabel: 'Posisi Throttle Saat Hover',
  currentThrustLabel: 'Daya Dorong Saat Ini',
  instantGForceLabel: 'Gaya G Vertikal Instan',
  zeroToHundredLabel: 'Waktu Akselerasi 0 ke 100 km/j',
  recommendedCamAngleLabel: 'Sudut Kamera FPV Disarankan',
  windResistanceLabel: 'Batas Hambatan Angin',
  totalMaxThrustLabel: 'Total Daya Dorong Statis Maksimal',
  maxPitchAngleLabel: 'Sudut Kemiringan Maksimal',
  tuningHeader: 'Rekomendasi Setelan Betaflight dan PID',
  tpaRecommendationLabel: 'Atenuasi PID Throttle (TPA)',
  dynamicIdleLabel: 'Rekomendasi Dynamic Idle',
  propwashRiskLabel: 'Otoritas Kontrol Propwash',
  tierUnderpoweredTitle: 'Kurang Tenaga atau Risiko Terbawa Angin',
  tierUnderpoweredDesc: 'TWR di bawah 2 banding 1 tidak cukup kuat untuk menahan penurunan cepat. Hanya cocok untuk dalam ruangan tenang.',
  tierCinematicTitle: 'Penerbangan Sinematik Halus',
  tierCinematicDesc: 'TWR antara 2 banding 1 hingga 4 banding 1 memberikan kendali throttle mulus untuk rekaman video stabil.',
  tierFreestyleTitle: 'Freestyle Sporty dan Lincah',
  tierFreestyleDesc: 'TWR antara 4 banding 1 hingga 8 banding 1 menghasilkan respons cepat dan manuver akrobatik bersih.',
  tierAcroProTitle: 'Akrobatik Performa Tinggi dan Freestyle Bando',
  tierAcroProDesc: 'TWR antara 8 banding 1 hingga 13 banding 1 memberikan akselerasi vertikal eksplosif dan redaman propwash instan.',
  tierRacingExtremeTitle: 'Balap Drone FPV Ekstrem',
  tierRacingExtremeDesc: 'TWR di atas 13 banding 1 menghasilkan tenaga luar biasa untuk sirkuit balap kompetitif.',
  hudThrustCurveTitle: 'Kurva Respons Daya Dorong Non-Linear',
  hudHoverMarker: 'Titik Hover',
  hudCurrentStickMarker: 'Tuas Saat Ini',
  hudGForceLabel: 'Gaya G',
  hudTiltAngleLabel: 'Sudut Kamera',
  hudVectorPowerLabel: 'Telemetri Daya Langsung',
};

const faqItems = [
  {
    question: 'Berapa rasio daya dorong terhadap berat yang ideal untuk drone freestyle FPV?',
    answer: 'Untuk drone freestyle, TWR antara 8 banding 1 hingga 12 banding 1 memberikan akselerasi eksplosif yang diperlukan untuk menahan dive dan bermanuver tajam.',
  },
  {
    question: 'Bagaimana kurva throttle non-linear memengaruhi kemampuan hover?',
    answer: 'Motor brushless menghasilkan daya dorong sebanding dengan kuadrat putaran RPM. Pada drone bertenaga tinggi titik hover biasanya berada di kisaran 20 hingga 35 persen tuas.',
  },
  {
    question: 'Mengapa sudut kamera FPV bergantung pada rasio daya dorong?',
    answer: 'Drone dengan TWR tinggi melaju lebih cepat dengan sudut condong ke depan yang lebih curam. Pilot memiringkan kamera 35 hingga 50 derajat agar horizon tetap berada di tengah kacamata.',
  },
  {
    question: 'Bagaimana jumlah bilah baling-baling memengaruhi sensasi terbang?',
    answer: 'Baling-baling 2 bilah memberikan waktu terbang terlama dan kecepatan puncak tinggi. 3 bilah adalah standar seimbang untuk freestyle, sedangkan 4 bilah memberi cengkeraman maksimal di tikungan.',
  },
];

const howToSteps = [
  {
    name: 'Masukkan berat drone atau pilih profil',
    text: 'Isi total berat siap terbang dalam gram termasuk baterai dan kamera aksi.',
  },
  {
    name: 'Konfigurasikan motor dan baling-baling',
    text: 'Tentukan jumlah motor, bilah, dan data dorong statis maksimal dari pabrikan.',
  },
  {
    name: 'Atur simulator tuas throttle langsung',
    text: 'Geser tuas throttle untuk melihat daya dorong yang dihasilkan, gaya G, dan posisi pada kurva tenaga.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Aerodinamika Rasio Daya Dorong Terhadap Berat Drone FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Rasio daya dorong terhadap berat (TWR) menentukan akselerasi dan kelincahan terbang multirotor. Pada freestyle dan balap FPV, cadangan daya yang memadai memungkinkan pilot menghentikan dive bebas dan bermanuver di celah sempit dengan presisi.',
  },
  {
    type: 'title',
    text: 'Klasifikasi Drone FPV dan Tolok Ukur Kinerja',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Platform', 'Berat AUW Tipikal', 'Target TWR', 'Throttle Saat Hover', 'Akselerasi 0 ke 100', 'Sudut Kamera'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 banding 1', '35 persen', '1.20 s', '15 hingga 25 derajat'],
      ['4S Freestyle 3.5"', '250g', '12.0 banding 1', '24 persen', '0.28 s', '35 hingga 45 derajat'],
      ['6S Freestyle 5" Pro', '680g', '11.5 banding 1', '25 persen', '0.30 s', '35 hingga 50 derajat'],
      ['6S Mountain LR 7"', '1150g', '8.3 banding 1', '30 persen', '0.45 s', '20 hingga 30 derajat'],
      ['8S Cinelifter X8', '4200g', '6.1 banding 1', '38 persen', '0.70 s', '15 hingga 25 derajat'],
    ],
  },
  {
    type: 'title',
    text: 'Respons Throttle Non-Linear dan Karakteristik Motor',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Motor listrik menghasilkan gaya dorong secara eksponensial. Rentang 20 persen teratas dari pergerakan tuas throttle menghasilkan lebih dari 40 persen total daya dorong yang tersedia.',
  },
  {
    type: 'list',
    items: [
      'Zona hover (20 hingga 35 persen): Resolusi halus untuk kendali posisi dekat tanah.',
      'Zona jelajah (35 hingga 65 persen): Penerbangan maju stabil dengan konsumsi daya efisien.',
      'Zona throttle penuh (70 hingga 100 persen): Akselerasi vertikal maksimal dengan gaya G tinggi.',
    ],
  },
  {
    type: 'title',
    text: 'Pemilihan Baling-baling dan Penyetelan Betaflight',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Untuk drone dengan TWR di atas 10 banding 1, disarankan mengaktifkan Throttle PID Attenuation (TPA) pada Betaflight guna mencegah osilasi motor pada kecepatan tinggi.',
  },
  {
    type: 'tip',
    title: 'Tips Penyetelan Betaflight TPA',
    html: 'Atur breakpoint TPA pada 1250 atau 1350 dengan nilai atenuasi 0.65 untuk menghilangkan getaran pada tarikan throttle penuh.',
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
      priceCurrency: 'USD',
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
