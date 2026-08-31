import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'perencana-cadangan-baterai-misi-drone';
const title = 'Perencana Cadangan Baterai Misi Drone';
const description = 'Hitung margin keselamatan baterai Return-to-Home, dampak angin sakal, dan radius jangkauan aman drone UAV.';

const faqItems = [
  {
    question: 'Mengapa terbang melawan angin sakal mengonsumsi lebih banyak energi?',
    answer: 'Terbang melawan angin memerlukan sudut kemiringan lebih curam untuk mengatasi hambatan udara dan mempertahankan kecepatan darat, sehingga meningkatkan konsumsi arus motor.',
  },
  {
    question: 'Bagaimana durasi terbang di area target memengaruhi titik tanpa kembali?',
    answer: 'Waktu melayang di lokasi target mengonsumsi energi baterai, yang secara langsung mengurangi radius perjalanan pulang-pergi yang aman.',
  },
  {
    question: 'Apa yang menyebabkan penurunan tegangan baterai LiPo saat beban tinggi?',
    answer: 'Konsumsi arus tinggi meningkatkan kerugian hambatan dalam pada sel litium, mengurangi Watt-jam yang dapat digunakan secara efektif.',
  },
];

const howToSteps = [
  {
    name: 'Masukkan Spesifikasi Baterai dan Propulsi',
    text: 'Masukkan kapasitas baterai dalam mAh, tegangan nominal, dan rata-rata konsumsi arus.',
  },
  {
    name: 'Atur Jarak dan Durasi di Target',
    text: 'Tentukan jarak sekali jalan dan perkiraan durasi melayang di area target.',
  },
  {
    name: 'Konfigurasi Kecepatan dan Arah Angin',
    text: 'Pilih kecepatan angin dan arahnya relatif terhadap jalur keberangkatan.',
  },
  {
    name: 'Tinjau Radius Aman dan Telemetri',
    text: 'Periksa titik tanpa kembali yang dihitung, konsumsi daya per tahap, dan sisa baterai saat mendarat.',
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Perencana Cadangan Baterai Misi Drone',
    subtitle: 'Hitung margin keselamatan pulang, dampak angin, dan radius penerbangan',
    description: 'Kalkulator cadangan baterai drone presisi dengan koreksi angin sakal dan ambang batas titik tanpa kembali.',
    inputs: {
      unitSystemLabel: 'Sistem Satuan',
      metricLabel: 'Metrik',
      imperialLabel: 'Imperial',
      presetLabel: 'Preset Misi Cepat',
      batteryCapacityLabel: 'Kapasitas Baterai',
      batteryVoltageLabel: 'Tegangan Nominal',
      averageCurrentLabel: 'Rata-rata Arus Jelajah',
      cruiseSpeedLabel: 'Kecepatan Jelajah Udara',
      oneWayDistanceLabel: 'Jarak Sekali Jalan',
      targetHoverTimeLabel: 'Durasi Operasi di Target',
      windSpeedLabel: 'Kecepatan Angin',
      windDirectionLabel: 'Arah Angin Relatif terhadap Keberangkatan',
      windHeadwindLabel: 'Angin Sakal saat Berangkat',
      windTailwindLabel: 'Angin Buritan saat Berangkat',
      windCrosswindLabel: 'Angin Samping',
      reservePolicyLabel: 'Buffer Cadangan Keselamatan',
    },
    presets: {
      mappingSurvey: 'Pemetaan & Fotogrametri',
      fpvRecon: 'Pengintaian Jarak Jauh FPV',
      cinematicInspection: 'Inspeksi Bangunan Sinematik',
      microRecon: 'Misi Pengintaian Mikro Drone',
    },
    results: {
      totalCapacityEnergy: 'Total Energi Kapasitas',
      usableEnergy: 'Energi Misi yang Dapat Digunakan',
      reserveEnergyBuffer: 'Buffer Energi Cadangan',
      totalAutonomyTime: 'Total Otonomi Penerbangan',
      maxSafeMissionRadius: 'Radius Titik Tanpa Kembali',
      outboundLegTime: 'Durasi Penerbangan Berangkat',
      targetHoverTime: 'Durasi Melayang di Target',
      returnLegTime: 'Durasi Penerbangan Pulang',
      totalMissionTime: 'Total Waktu Transit',
      remainingEnergyLanding: 'Perkiraan Tingkat Baterai saat Mendarat',
      feasibilityStatus: 'Penilaian Kelayakan Misi',
    },
    statusBadges: {
      optimal: 'Margin Cadangan Energi Optimal',
      tight: 'Peringatan Cadangan Ketat',
      critical: 'Peringatan Energi Kritis Dipicu',
      exceeded: 'Misi Melebihi Kapasitas Aman',
    },
    chart: {
      batteryProfileTitle: 'Profil Konsumsi Energi Baterai',
      outboundSegment: 'Tahap Penerbangan Berangkat',
      targetSegment: 'Melayang di Area Target',
      returnSegment: 'Penerbangan Pulang ke Pangkalan',
      reserveSegment: 'Buffer Cadangan Keselamatan',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Kerugian Daya Aerodinamis saat Angin Sakal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Terbang melawan angin memerlukan kemiringan lebih besar untuk mempertahankan kecepatan darat.',
    },
    {
      type: 'title',
      text: 'Perhitungan Durasi Melayang di Area Target',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Drone pemetaan dan inspeksi melayang di lokasi kerja dan mengonsumsi energi sebelum penerbangan pulang.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
