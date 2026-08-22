import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulator-rating-c-baterai-lipo-drone';
const title = 'Kalkulator Rating C Baterai LiPo dan Arus Discas Kontinu Drone';
const description = 'Hitung arus discas kontinu realistis, rating C aktual, penurunan tegangan voltage sag, dan keamanan terbang baterai LiPo drone berdasarkan hambatan dalam dan konsumsi motor.';

const ui = {
  title: 'Kalkulator Rating C Baterai LiPo Drone',
  subtitle: 'Analisis arus discas kontinu realistis, kebutuhan beban puncak, dan voltage sag untuk quadcopter',
  lipoSpecsHeader: 'Spesifikasi Baterai',
  capacityLabel: 'Kapasitas (mAh)',
  claimedCRatingLabel: 'Rating C Klaim Pabrik',
  cellCountLabel: 'Jumlah Sel (Seri)',
  chemistryLabel: 'Kimia Baterai',
  internalResistanceLabel: 'Hambatan Dalam per Sel (mΩ)',
  quadSpecsHeader: 'Konsumsi Daya Quadcopter',
  motorCountLabel: 'Jumlah Motor',
  peakMotorCurrentLabel: 'Arus Puncak per Motor (Ampere)',
  auxCurrentLabel: 'Konsumsi Aux (VTX, FC, Kamera) (Ampere)',
  presetSelectLabel: 'Setelan Cepat',
  customPreset: 'Kustom',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5-Inci Freestyle',
  cinewhoopPreset: '4S 3-Inci CineWhoop',
  longRange7Preset: '6S 7-Inci Long Range',
  racing5Preset: '6S 5-Inci Balap',
  resultsHeader: 'Analisis Daya dan Performa',
  claimedMaxCurrentLabel: 'Arus Maksimum Klaim',
  realisticCRatingLabel: 'Rating C Kontinu Realistis',
  realisticMaxCurrentLabel: 'Arus Kontinu Realistis',
  totalPeakDrawLabel: 'Total Beban Arus Puncak',
  voltageSagLabel: 'Estimasi Penurunan Tegangan',
  sagNominalVoltageLabel: 'Tegangan Nominal saat Beban',
  flightTimeFullThrottleLabel: 'Waktu Terbang Throttle Penuh',
  flightTimeHoverLabel: 'Estimasi Waktu Terbang Hover',
  safetyStatusLabel: 'Diagnosis Keamanan',
  statusOptimalTitle: 'Baterai Aman dan Optimal',
  statusOptimalDesc: 'Baterai mampu menyuplai beban puncak dengan lancar tanpa panas berlebih atau penurunan tegangan parah. Umur baterai terjamin panjang.',
  statusWarningTitle: 'Stres Termal dan Tegangan Sedang',
  statusWarningDesc: 'Konsumsi arus puncak mendekati batas realistis baterai. Akan terjadi penurunan tegangan saat akselerasi mendadak.',
  statusDangerTitle: 'Risiko Tinggi Overcurrent dan Voltage Sag',
  statusDangerDesc: 'Konsumsi arus puncak melebihi kemampuan baterai. Risiko tinggi panas berlebih, penurunan tegangan parah, dan kerusakan sel.',
  lipoVisualizerTitle: 'Visualisasi Status LiPo Real-Time',
  cellVoltageLabel: 'Tegangan per Sel',
  batteryHealthLabel: 'Status Beban Baterai',
  burstRatingRequiredLabel: 'Rating C Burst yang Dibutuhkan',
  currentRatioLabel: 'Rasio Beban Daya',
};

const faqItems = [
  {
    question: 'Apa itu rating C pada baterai LiPo drone?',
    answer: 'Rating C menunjukkan kecepatan discas maksimum relatif terhadap kapasitas baterai. Baterai 1500mAh dengan 100C secara teoritis bisa menyuplai arus hingga 150 Ampere.',
  },
  {
    question: 'Mengapa rating C klaim pabrik sering lebih tinggi dari fakta?',
    answer: 'Produsen sering memasarkan angka burst atau pengujian laboratorium ideal. Performa discas kontinu sangat bergantung pada hambatan dalam sel.',
  },
  {
    question: 'Bagaimana hambatan dalam mempengaruhi voltage sag dan panas?',
    answer: 'Hambatan dalam bekerja seperti resistor internal. Saat beban arus tinggi, hambatan ini menyebabkan penurunan tegangan dan membuang energi menjadi panas.',
  },
  {
    question: 'Bagaimana cara mencegah voltage sag saat freestyle?',
    answer: 'Gunakan baterai berkualitas dengan hambatan dalam rendah, pilih margin keamanan 15 persen di atas beban puncak, dan hindari terbang di bawah 3.5V per sel.',
  },
];

const howToSteps = [
  {
    name: 'Pilih Preset atau Masukkan Spesifikasi Baterai',
    text: 'Masukkan kapasitas mAh, rating C klaim, jumlah sel seri, dan hambatan dalam rata-rata per sel.',
  },
  {
    name: 'Atur Beban Daya Quadcopter',
    text: 'Tentukan jumlah motor, arus puncak per motor saat full throttle, dan konsumsi komponen pendukung.',
  },
  {
    name: 'Tinjau Diagnosis Keamanan dan Arus Realistis',
    text: 'Bandingkan arus kontinu realistis dengan beban puncak quadcopter untuk memastikan stabilitas penerbangan.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Memahami Rating C Baterai LiPo dan Output Daya Nyata',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Memilih baterai LiPo yang tepat untuk drone FPV memerlukan pemahaman hubungan antara kapasitas baterai, rating C, dan konsumsi arus motor. Meskipun pabrikan sering mengklaim rating 100C atau lebih, performa discas kontinu sebenarnya dibatasi oleh hambatan dalam dan disipasi panas. Kalkulator ini mengukur arus kontinu realistis secara akurat.',
  },
  {
    type: 'title',
    text: 'Tabel Perbandingan Jenis Kimia Baterai RC',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Kimia', 'Tegangan Nominal', 'Tegangan Maksimal', 'Densitas Energi', 'Discas Puncak', 'Penggunaan Ideal'],
    rows: [
      ['LiPo (Standar)', '3.7V', '4.20V', 'Tinggi', '100C - 150C', 'Drone FPV Freestyle dan Balap 5"'],
      ['LiHV (High Voltage)', '3.8V', '4.35V', 'Sangat Tinggi', '80C - 120C', 'TinyWhoop dan Mikro Quad'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Maksimal', '15C - 35C', 'Drone Jelajah Long Range 7"'],
      ['LiFePO4', '3.3V', '3.65V', 'Sedang', '30C - 50C', 'Stasiun Charger Lapangan'],
    ],
  },
  {
    type: 'title',
    text: 'Dampak Voltage Sag dan Hambatan Dalam pada Drone FPV',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Voltage sag adalah penurunan tegangan mendadak saat akselerasi cepat. Ketika arus melewati hambatan dalam, sebagian energi berubah menjadi panas alih-alih daya dorong. Baterai tua dengan hambatan dalam tinggi akan memicu peringatan low voltage lebih cepat pada OSD.',
  },
  {
    type: 'list',
    items: [
      'Hambatan Dalam Rendah (1-4 mΩ per sel): Respon luar biasa, sag minimal, dan baterai tetap dingin.',
      'Hambatan Dalam Sedang (5-10 mΩ per sel): Performa standar untuk penerbangan freestyle.',
      'Hambatan Dalam Tinggi (>12 mΩ per sel): Kehilangan tenaga signifikan, sag parah, dan cepat panas.',
    ],
  },
  {
    type: 'title',
    text: 'Optimasi Baterai untuk Freestyle Balap dan Long Range',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Gaya terbang yang berbeda membutuhkan karakteristik daya yang berbeda. Drone freestyle 5 inci membutuhkan lonjakan arus hingga di atas 120 Ampere, sedangkan drone 7 inci long range membutuhkan efisiensi kontinu. Penyesuaian baterai yang pas mencegah mati mendadak di udara.',
  },
  {
    type: 'tip',
    title: 'Tips Perawatan Baterai LiPo',
    html: 'Simpan selalu baterai LiPo Anda pada tegangan storage 3.80V hingga 3.85V per sel jika tidak digunakan. Membiarkan baterai terisi penuh lebih dari 48 jam akan meningkatkan hambatan dalam secara permanen.',
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
      priceCurrency: 'USD',
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
