import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'perencana-cadangan-baterai-misi-drone';
const title = 'Perencana Cadangan Baterai Misi Drone';
const description = 'Hitung margin cadangan energi kembali ke rumah, penalti angin sakal, dan radius misi aman untuk operasi drone UAV.';

const faqItems = [
  {
    question: 'Mengapa terbang melawan angin mengonsumsi lebih banyak daya?',
    answer: 'Terbang melawan angin membutuhkan sudut kemiringan lebih curam untuk mengatasi hambatan udara dan mempertahankan kecepatan darat, yang meningkatkan arus motor secara non-linear.',
  },
  {
    question: 'Bagaimana waktu hover di target memengaruhi titik tidak bisa kembali?',
    answer: 'Waktu hover operasional di area target mengurangi energi baterai yang dapat digunakan sebelum menghitung sisa jarak jelajah aman.',
  },
  {
    question: 'Apa yang menyebabkan penurunan tegangan LiPo di bawah beban berat?',
    answer: 'Penarikan arus tinggi meningkatkan kerugian hambatan internal dalam sel litium, mengurangi Watt-jam efektif yang dapat digunakan.',
  },
];

const howToSteps = [
  {
    name: 'Masukkan Spesifikasi Baterai & Propulsi',
    text: 'Masukkan kapasitas baterai dalam mAh, tegangan nominal, dan konsumsi arus rata-rata.',
  },
  {
    name: 'Atur Jarak Misi & Waktu Hover Target',
    text: 'Tentukan jarak sekali jalan dan durasi hover di area target.',
  },
  {
    name: 'Konfigurasikan Kecepatan & Vektor Angin',
    text: 'Pilih kecepatan angin dan arahnya relatif terhadap jalur keberangkatan.',
  },
  {
    name: 'Tinjau Radius Aman & Telemetri',
    text: 'Analisis titik tidak bisa kembali, konsumsi daya per segmen, dan tingkat baterai saat mendarat.',
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
    subtitle: 'Hitung margin keselamatan kembali ke rumah dan radius penerbangan',
    description: 'Perencanaan penerbangan drone presisi dengan penyesuaian angin sakal dan ambang batas titik tidak bisa kembali.',
    sections: {
      batteryPropulsion: '1. Baterai & Propulsi',
      flightAtmosphere: '2. Profil Penerbangan & Atmosfer',
    },
    inputs: {
      unitSystemLabel: 'Sistem Unit',
      metricLabel: 'Metrik',
      imperialLabel: 'Imperial',
      presetLabel: 'Preset Misi Cepat',
      batteryCapacityLabel: 'Kapasitas Baterai',
      batteryVoltageLabel: 'Tegangan Nominal',
      averageCurrentLabel: 'Arus Jelajah Rata-rata',
      cruiseSpeedLabel: 'Kecepatan Udara Jelajah',
      oneWayDistanceLabel: 'Jarak Sekali Jalan',
      targetHoverTimeLabel: 'Durasi Operasional Target',
      windSpeedLabel: 'Kecepatan Angin',
      windDirectionLabel: 'Arah Angin Relatif terhadap Keberangkatan',
      windHeadwindLabel: 'Angin Sakal Saat Berangkat',
      windTailwindLabel: 'Angin Buritan Saat Berangkat',
      windCrosswindLabel: 'Angin Samping',
      reservePolicyLabel: 'Buffer Cadangan Keselamatan',
    },
    presets: {
      mappingSurvey: 'Pemetaan Fotogrametri',
      fpvRecon: 'Pengintaian FPV Jarak Jauh',
      cinematicInspection: 'Inspeksi Struktur Sinematik',
      microRecon: 'Misi Drone Mikro',
      surveyMeta: 'pemetaan',
      scoutMeta: 'pengintaian',
      hoverMeta: 'hover',
    },
    results: {
      totalCapacityEnergy: 'Kapasitas Energi Total',
      usableEnergy: 'Energi Misi Yang Dapat Digunakan',
      reserveEnergyBuffer: 'Buffer Energi Cadangan',
      totalAutonomyTime: 'Otonomi Penerbangan Total',
      maxSafeMissionRadius: 'Radius Titik Tidak Bisa Kembali',
      outboundLegTime: 'Durasi Penerbangan Keberangkatan',
      targetHoverTime: 'Durasi Hover Target',
      returnLegTime: 'Durasi Penerbangan Kepulangan',
      totalMissionTime: 'Durasi Transit Total',
      remainingEnergyLanding: 'Perkiraan Baterai Saat Mendarat',
      feasibilityStatus: 'Penilaian Kelayakan Misi',
      voltageSagSubLabel: 'Penurunan tegangan',
      maxRadiusSubLabel: 'Radius aman maks dengan hover target',
      powerSubLabel: 'Daya',
    },
    statusBadges: {
      optimalTitle: 'MARGIN CADANGAN ENERGI OPTIMAL',
      optimalSubtitle: 'Profil penerbangan aman dengan cadangan mendarat yang cukup',
      tightTitle: 'MARGIN CADANGAN ENERGI KETAT',
      tightSubtitle: 'Cadangan mendarat rendah, pantau tegangan baterai secara ketat',
      criticalTitle: 'PERINGATAN ENERGI KRITIS',
      criticalSubtitle: 'Cadangan terlampaui, segera mulai penerbangan kembali',
      exceededTitle: 'MISI MELEBIHI KAPASITAS AMAN',
      exceededSubtitle: 'Energi baterai tidak cukup untuk menyelesaikan misi dengan aman',
    },
    chart: {
      batteryProfileTitle: 'PROFIL ALOKASI ENERGI NON-LINEAR',
      modelTitle: 'MODEL DAYA AERODINAMIS & ANGIN',
      windLabel: 'Angin',
      homeNode: 'RUMAH',
      targetNode: 'TARGET',
      landNode: 'LANDAR',
      launchPadLabel: 'Lokasi lepas landas',
      surveyHoverLabel: 'Hover target',
      safeRadiusLabel: 'Radius aman',
      outboundSegment: 'Berangkat',
      targetSegment: 'Hover',
      returnSegment: 'Kembali',
      reserveSegment: 'Cadangan',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Penalti Daya Aerodinamis pada Angin Sakal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keselamatan penerbangan drone bergantung pada prinsip fisika aerodinamis non-linear. Terbang melawan angin membutuhkan sudut kemiringan lebih curam untuk mempertahankan kecepatan darat.',
    },
    {
      type: 'paragraph',
      html: 'Perencana kami secara dinamis menghitung variasi daya per segmen berdasarkan kondisi angin.',
    },
    {
      type: 'title',
      text: 'Perhitungan Waktu Hover di Area Target',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Misi pemetaan dan inspeksi membutuhkan waktu hover di area target. Konsumsi ini dikurangi sebelum menghitung radius perjalanan pulang pergi yang aman.',
    },
    {
      type: 'list',
      items: [
        'Masukkan durasi hover sebelum menghitung batas misi.',
        'Antisipasi lonjakan daya saat terbang melawan angin.',
        'Pantau penurunan tegangan LiPo di bawah beban.',
        'Mulai perjalanan kembali begitu mencapai batas cadangan.',
      ],
    },
    {
      type: 'tip',
      title: 'Peringatan Penurunan Tegangan Baterai LiPo',
      html: 'Penarikan arus tinggi menyebabkan penurunan tegangan sementara akibat hambatan internal, mengurangi energi efektif.',
    },
    {
      type: 'title',
      text: 'Formula Perhitungan Cadangan Baterai Drone',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parameter', 'Formula / Model', 'Unit'],
      rows: [
        ['Energi Bruto', 'Kapasitas (mAh) x Tegangan (V) / 1000', 'Watt-jam (Wh)'],
        ['Kerugian Sag', 'Energi Bruto x Faktor Sag', 'Watt-jam (Wh)'],
        ['Daya dengan Angin', 'Daya Dasar x (1 + 0.65 x RasioAngin)^1.3', 'Watt (W)'],
        ['Radius Aman Maks', '(Energi Utilitas - Energi Hover) / Konsumsi per Km', 'Kilometer (km)'],
      ],
    },
    {
      type: 'title',
      text: 'Praktik Terbaik Perencanaan Penerbangan Drone',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Selalu verifikasi data telemetri dengan perhitungan sebelum terbang untuk memastikan tingkat keselamatan terbaik.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
