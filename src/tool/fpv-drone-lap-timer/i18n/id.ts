import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'penghitung-waktu-putaran-balap-drone-fpv';
const title = 'Penghitung Waktu Putaran dan Sektor Balap Drone FPV';
const description = 'Penghitung waktu interaktif untuk balapan drone FPV dengan urutan awal akustik FAI, analisis selisih sektor, notifikasi putaran tercepat, indeks konsistensi, dan telemetri kecepatan.';

const ui = {
  setupHeading: 'Konfigurasi Lintasan dan Sesi',
  trackLengthLabel: 'Panjang Sirkuit',
  trackLengthUnit: 'meter',
  targetLapsLabel: 'Target Jumlah Putaran',
  targetLapsUnit: 'putaran (0 untuk latihan bebas)',
  batteryCapacityLabel: 'Kapasitas Baterai',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Aktifkan Nada Akustik',
  debounceThresholdLabel: 'Pelindung Pemicu Ganda',
  debounceThresholdUnit: 'detik',
  presetMultiGpLabel: 'Spek MultiGP (250m / 3 Putaran)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Putaran)',
  presetSprintLabel: 'Sprint Kecepatan Tinggi (400m / 2 Putaran)',
  startCountdownButton: 'Mulai Hitung Mundur FAI',
  pauseTimerButton: 'Jeda Sesi',
  resumeTimerButton: 'Lanjutkan Timer',
  resetTimerButton: 'Atur Ulang Sesi',
  recordLapButton: 'CATAT PUTARAN',
  spacebarHint: 'Tekan SPASI atau ketuk tombol besar untuk menandai lintasan garis finis',
  statusIdle: 'Siap untuk Mulai',
  statusCountdown: 'Hitung Mundur FAI Sedang Berjalan',
  statusRunning: 'Timer Balap Aktif',
  statusPaused: 'Sesi Dijeda',
  statusFinished: 'Balapan Selesai',
  currentLapHeading: 'Waktu Putaran Saat Ini',
  lapNumberPrefix: 'Putaran',
  lastLapHeading: 'Putaran Terakhir',
  fastestLapHeading: 'Putaran Tercepat',
  averageLapHeading: 'Rata-rata Putaran',
  deltaBestHeading: 'Selisih ke Terbaik',
  consistencyIndexHeading: 'Indeks Konsistensi Putaran',
  estimatedSpeedHeading: 'Estimasi Kecepatan Rata-rata',
  estimatedBatteryHeading: 'Estimasi Konsumsi Baterai',
  speedUnitKmh: 'km/jam',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh tersisa',
  lapHistoryHeading: 'Waktu Putaran dan Perbandingan Ritme',
  lapColumnHeader: 'Putaran #',
  timeColumnHeader: 'Waktu',
  splitColumnHeader: 'Selisih Terbaik',
  speedColumnHeader: 'Kecepatan Rata-rata',
  batteryColumnHeader: 'Baterai',
  noLapsRecordedNotice: 'Belum ada putaran tercatat. Mulai hitung mundur dan tekan Spasi untuk merekam putaran pertama.',
  consistencyRatingElite: 'Konsistensi Elite',
  consistencyRatingPro: 'Konsistensi Pembalap Pro',
  consistencyRatingClub: 'Konsistensi Tingkat Klub',
  consistencyRatingNovice: 'Konsistensi Pemula',
  fastestLapBadge: 'PUTARAN TERCEPAT',
  sessionSummaryHeading: 'Ringkasan Sesi dan Ekspor',
  totalTimeLabel: 'Total Durasi Balapan',
  completedLapsLabel: 'Putaran Selesai',
  exportCsvButton: 'Ekspor Putaran ke CSV',
  copySummaryButton: 'Salin Ringkasan Teks',
  copiedNotice: 'Ringkasan sesi berhasil disalin ke papan klip!',
};

const faqItems = [
  {
    question: 'Bagaimana urutan awal akustik FAI bekerja pada timer ini?',
    answer: 'Urutan start mencerminkan aturan resmi balap drone FAI CIAM F9U. Empat nada bip awal dengan jeda satu detik mempersiapkan pembalap, diikuti dengan nada tinggi start yang memulai penghitung waktu pada titik nol mutlak.',
  },
  {
    question: 'Bagaimana Indeks Konsistensi Putaran dihitung?',
    answer: 'Skor konsistensi mengevaluasi standar deviasi waktu putaran yang diselesaikan terhadap waktu rata-rata sesi. Nilai di atas 95 persen menunjukkan pengendalian throttle dan jalur terbang yang sangat presisi.',
  },
  {
    question: 'Bisakah memakai pedal kaki atau tombol radio kontrol?',
    answer: 'Bisa. Semua keyboard nirkabel, pedal kaki Bluetooth, atau tombol pemancar yang dipetakan untuk mengirim penekanan tombol Spasi dapat mencatat putaran tanpa menyentuh layar perangkat.',
  },
  {
    question: 'Mengapa terdapat pelindung pemicu ganda (debounce)?',
    answer: 'Gerbang balap dilewati dalam kecepatan tinggi, namun sentuhan ganda yang tidak disengaja dapat mencatat waktu palsu dalam pecahan detik. Pelindung ini mengabaikan sinyal di bawah ambang batas (standar 3 detik).',
  },
  {
    question: 'Seberapa akurat perkiraan kecepatan rata-rata?',
    answer: 'Kecepatan dihitung dari pembagian panjang garis tengah sirkuit dengan waktu putaran. Kecepatan riil pada tikungan akan bervariasi bergantung pada radius jalur terbang dan sudut kemiringan drone.',
  },
];

const howToSteps = [
  {
    name: 'Atur jarak sirkuit dan target putaran',
    text: 'Masukkan panjang sirkuit dalam meter dan jumlah putaran sasaran atau gunakan preset seperti MultiGP Spec.',
  },
  {
    name: 'Mulai hitung mundur nada akustik FAI',
    text: 'Klik Mulai Hitung Mundur. Dengarkan nada persiapan dan bunyi start lepas landas.',
  },
  {
    name: 'Catat putaran saat melewati gerbang finis',
    text: 'Tekan tombol Spasi pada keyboard atau ketuk tombol layar setiap kali drone melewati gerbang awal/akhir.',
  },
  {
    name: 'Analisis telemetri, selisih waktu, dan konsistensi',
    text: 'Periksa grafik ritme balap, selisih terhadap rekor tercepat, serta skor konsistensi, lalu ekspor ke file CSV.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Prinsip pencatatan waktu putaran presisi tinggi pada balap drone multirotor FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Kompetisi balap drone FPV menuntut presisi milidetik dan konsistensi manuver yang ketat. Multirotor 5 inci melaju di atas 140 km/jam melewati susunan gerbang rintangan dan tiang bendera. Latihan efektif memerlukan sinyal suara saat start, pencatatan waktu cepat saat melintas, dan pemantauan penurunan performa di setiap putaran.',
  },
  {
    type: 'title',
    text: 'Perbandingan kelas balap drone dan parameter pencatatan waktu',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Kelas / Standar', 'Panjang Sirkuit Lazim', 'Putaran per Sesi', 'Waktu Putaran Rata-rata', 'Rentang Kecepatan', 'Jeda Anti Ganda Disarankan'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m - 80m', '5 putaran', '8.5s - 13.0s', '35 - 55 km/jam', '2.0 detik'],
      ['Mikro 3.5 Inci (4S)', '120m - 180m', '4 putaran', '12.0s - 18.0s', '70 - 110 km/jam', '2.5 detik'],
      ['MultiGP Spec 5 Inci (6S)', '200m - 300m', '3 putaran', '14.0s - 22.0s', '100 - 150 km/jam', '3.0 detik'],
      ['Sprint Lapangan Terbuka (6S/8S)', '350m - 500m', '2 putaran', '20.0s - 32.0s', '130 - 180 km/jam', '4.0 detik'],
    ],
  },
  {
    type: 'title',
    text: 'Urutan nada suara start dan regulasi olahraga FAI F9U',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Berdasarkan regulasi FAI CIAM Bagian 4 untuk balapan drone, lomba dimulai dengan sinyal suara terstandarisasi ketimbang bendera visual demi kesetaraan reaksi pilot di dalam kacamata FPV. Urutan menggunakan nada 440 Hz setiap detik dan ditutup nada 880 Hz untuk mulai terbang.',
  },
  {
    type: 'list',
    items: [
      'Nada Persiapan: Peringatan akustik guna menstabilkan posisi tuas throttle dan memusatkan fokus penglihatan.',
      'Nada Start (Go): Sinyal instan yang mengaktifkan penghitungan waktu tepat pada detik t = 0.',
      'Konfirmasi Suara: Bunyi konfirmasi saat mencatat putaran tanpa mengalihkan pandangan dari jalur terbang.',
      'Melodi Putaran Tercepat: Nada harmonik khusus saat catatan waktu melewati rekor terbaik sesi saat itu.',
    ],
  },
  {
    type: 'title',
    text: 'Pentingnya Indeks Konsistensi dan strategi balapan',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Mencetak satu putaran kilat memang membanggakan, tetapi kejuaraan diraih dengan konsistensi. Indeks ini mengukur fluktuasi waktu: pilot dengan deviasi di bawah 0.3 detik mampu mengendalikan baterai lebih awet dan memiliki tenaga ekstra untuk sprint putaran akhir.',
  },
  {
    type: 'tip',
    title: 'Tips praktis di lapangan terbang',
    html: 'Letakkan tablet atau ponsel dalam jangkauan suara yang jelas di samping tempat duduk Anda. Pasang pedal Bluetooth atau tombol nirkabel di lantai dekat tas penerbangan untuk merekam putaran memakai kaki tanpa melepaskan jemari dari stik kendali.',
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
      priceCurrency: 'IDR',
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
