import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'penganalisis-daya-drone';
const title = 'Penganalisis Daya Drone: Kalkulator Rasio Dorong terhadap Berat untuk FPV';
const description = 'Hitung rasio dorong terhadap berat yang kritis untuk rakitan drone FPV Anda. Dapatkan rekomendasi profil penerbangan instan, pengukur daya visual, dan optimalkan untuk cinematic, freestyle, atau balapan.';

const faqItems = [
  {
    question: 'Apa itu rasio dorong terhadap berat dan mengapa itu penting?',
    answer: 'Rasio dorong terhadap berat (thrust-to-weight ratio) adalah total gaya dorong yang dapat dihasilkan drone Anda dibagi dengan berat total saat lepas landas (AUW). Ini adalah metrik terpenting yang menentukan bagaimana drone Anda akan terasa saat diterbangkan - dari lambat dan stabil (sinematografi) hingga ultra-responsif (balapan).',
  },
  {
    question: 'Berapa rasio "titik ideal" (sweet spot) untuk terbang freestyle?',
    answer: 'Untuk terbang freestyle yang mulus, titik idealnya adalah antara 4:1 dan 6:1. Rasio 4:1 memberikan kelincahan yang sangat baik dengan stabilitas yang baik, sementara 6:1 sangat responsif tetapi membutuhkan kemahiran throttle lebih di ruang sempit.',
  },
  {
    question: 'Dapatkah saya menggunakan ini untuk rakitan sinematografi?',
    answer: 'Ya. Untuk pengambilan gambar sinematografi yang mulus dan lambat, targetkan rasio 2:1 hingga 3:1. Ini menjaga drone tetap stabil dan dapat diprediksi. Rasio yang lebih rendah akan sulit dikendalikan; rasio yang lebih tinggi akan terasa terlalu sensitif untuk gerakan lambat.',
  },
  {
    question: 'Apa yang terjadi jika rasio saya di atas 8:1?',
    answer: 'Di atas 8:1, drone Anda secara efektif adalah mesin balap - sangat reaktif dan menuntut keahlian terbang tinggi. Hanya pilot berpengalaman yang boleh mencoba rakitan ini. Sangat bagus untuk gate balapan dan adu kecepatan, tetapi berbahaya di dalam ruangan.',
  },
  {
    question: 'Apakah saya harus menyertakan berat baterai dalam AUW?',
    answer: 'Ya. AUW (All-Up Weight) adalah berat total drone Anda dengan semua komponen terpasang: rangka, motor, ESC, flight controller, kamera, baterai, baling-baling - semuanya. Gunakan tombol preset baterai untuk penambahan berat secara instan.',
  },
];

const howToSteps = [
  {
    name: 'Pilih Konfigurasi Motor',
    text: 'Pilih apakah rakitan Anda adalah konfigurasi motor Quad (4), Hexa (6), atau Octo (8). Pengganda ini sangat penting untuk total gaya dorong.',
  },
  {
    name: 'Input Gaya Dorong Motor',
    text: 'Masukkan gaya dorong maksimum yang dapat dihasilkan setiap motor (dalam gram). Anda dapat menemukannya di spesifikasi motor atau gunakan preset cepat.',
  },
  {
    name: 'Atur Berat Total',
    text: 'Masukkan berat total lepas landas (AUW) drone Anda - rangka, motor, baterai, kamera, semuanya. Gunakan preset baterai untuk penyesuaian berat instan.',
  },
  {
    name: 'Baca Hasil Anda',
    text: 'Kalkulator akan langsung menunjukkan rasio dorong terhadap berat Anda, kesesuaian profil penerbangan (Cinematic, Freestyle, Racing), dan rekomendasi pribadi untuk rakitan Anda.',
  },
];

const schemas: DronePowerAnalyzerLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DronePowerAnalyzerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    motorConfiguration: 'Konfigurasi Motor',
    motorCount: 'Jumlah Motor',
    thrustPerMotor: 'Dorongan per Motor (maks)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Preset Motor Cepat',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Konfigurasi Berat',
    auwLabel: 'Berat Total Lepas Landas (AUW)',
    weightUnit: 'g',
    switchToLbs: 'Ganti ke lbs',
    switchToGrams: 'Ganti ke g',
    batteryPresets: 'Tambah Berat Baterai',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Total Gaya Dorong',
    twRatio: 'Rasio Dorong terhadap Berat',
    powerMeter: 'Pengukur Daya',
    flightProfiles: 'Penilaian Profil Penerbangan',
    cinematicLabel: 'Sinematik',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Balapan',
    proRacingLabel: 'Balapan Pro',
    suitable: 'Cocok',
    notSuitable: 'Tidak Cocok',
    recommendationLabel: 'Rekomendasi Gaya Terbang',
    recommendation_low: 'Dengan rasio di bawah 2:1, drone Anda akan kesulitan dengan stabilitas. Pertimbangkan untuk mengurangi berat atau meningkatkan motor untuk performa yang lebih baik.',
    recommendation_cinematic: 'Dengan rasio {ratio}:1, ini ideal untuk sinematografi beban berat dengan gerakan yang mulus dan terkendali. Sempurna untuk kerja kamera yang lambat dan terencana.',
    recommendation_freestyle: 'Dengan rasio {ratio}:1, ini adalah titik ideal untuk terbang freestyle. Kelincahan yang sangat baik dengan stabilitas yang tetap terjaga untuk trik.',
    recommendation_racing: 'Dengan rasio {ratio}:1, ini masuk wilayah performa freestyle. Manajemen throttle sangat kritis di ruang sempit dan manuver kecepatan tinggi.',
    recommendation_extreme: 'Dengan rasio {ratio}:1, ini adalah mesin balap. Sangat reaktif - hanya untuk pilot berpengalaman di area terbuka.',
    compareMode: 'Bandingkan Rakitan',
    scenario1: 'Rakitan A',
    scenario2: 'Rakitan B',
    addComparison: 'Tambah Perbandingan',
    tooltipTWRatio: 'Rasio dorong terhadap berat adalah total gaya dorong dibagi dengan berat drone. Rasio yang lebih tinggi berarti akselerasi lebih cepat dan kontrol lebih responsif.',
    tooltipFreestyle: '"Titik ideal" untuk terbang freestyle adalah rasio 4:1 hingga 6:1, memberikan keseimbangan terbaik antara kelincahan dan kontrol.',
    badge_unstable: 'Tidak Stabil',
    badge_cinematic: 'Sinematik',
    badge_sweetSpot: 'Titik Ideal',
    badge_racing: 'Balapan',
    badge_extreme: 'Ekstrem',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'Memahami Rasio Dorong terhadap Berat untuk Drone FPV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Rasio dorong terhadap berat</strong> mungkin adalah metrik paling kritis dalam perakitan drone FPV. Namun banyak pilot yang mengabaikannya, sehingga menghasilkan rakitan yang tidak berperilaku sesuai harapan. Kalkulator ini membantu memperjelas perhitungan dan menunjukkan dengan tepat bagaimana rakitan Anda akan terasa saat diterbangkan.',
    },
    {
      type: 'title',
      text: 'Mengapa Rasio Dorong terhadap Berat itu Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rasio drone Anda menentukan tiga hal mendasar: <strong>stabilitas</strong>, <strong>responsivitas</strong>, dan <strong>kecepatan</strong>. Rasio 2:1 terasa lamban dan stabil. Rasio 6:1 terasa lincah dan sensitif. Rasio 10:1 adalah mesin balap. Memahami di mana rakitan Anda berada dalam spektrum ini membantu Anda memilih gaya terbang yang tepat.',
    },
    {
      type: 'title',
      text: 'Profil Penerbangan Dijelaskan',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sinematik (2:1 - 4:1)</strong>: Berat, stabil, lambat. Ideal untuk gerakan kamera yang mulus dan rakitan yang membawa beban.',
        '<strong>Freestyle (3.5:1 - 6.5:1)</strong>: Titik ideal yang seimbang. Cukup responsif untuk trik, cukup stabil untuk kontrol.',
        '<strong>Balapan (5:1 - 8:1)</strong>: Cepat dan lincah. Dirancang untuk gate balapan dan manuver agresif.',
        '<strong>Balapan Pro (7:1+)</strong>: Performa ekstrem. Hanya untuk pilot ahli di area terbuka.',
      ],
    },
    {
      type: 'title',
      text: 'Cara Menghitung Rasio Dorong terhadap Berat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rumusnya sederhana: <strong>rasio = (Gaya Dorong per Motor × Jumlah Motor) / Berat Total Lepas Landas</strong>. Sebagai contoh, sebuah Quad dengan motor 600g (total dorong 2.400g) dengan berat 800g menghasilkan rasio 3:1. Ini adalah wilayah freestyle.',
    },
    {
      type: 'title',
      text: 'Memilih Rasio yang Tepat untuk Rakitan Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tanyakan pada diri Anda: <em>Bagaimana saya akan terbang?</em> Pengambilan gambar sinematik yang lambat? Trik freestyle agresif? Balapan kecepatan tinggi? Jawaban Anda menentukan rasio ideal Anda. Kebanyakan pilot FPV berakhir di antara 4:1 dan 6:1 karena menawarkan kompromi terbaik antara kontrol dan keseruan.',
    },
    {
      type: 'paragraph',
      html: 'Ingat: rasio yang lebih tinggi bukan berarti "lebih baik". Itu berarti "lebih responsif". Pada quad balap, itu esensial. Pada rakitan sinematik, itu bisa menjadi hambatan. Pilih dengan sengaja.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
