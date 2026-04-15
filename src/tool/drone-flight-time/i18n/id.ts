import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'kalkulator-waktu-terbang-drone';
const title = 'Kalkulator Waktu Terbang Drone untuk Estimasi Autonomi LiPo LiIon';
const description = 'Hitung berapa lama drone Anda bisa terbang berdasarkan kapasitas mAh dan konsumsi arus. Optimalkan baterai LiPo Anda untuk penerbangan yang aman.';

const faqItems = [
  {
    question: 'Mengapa waktu penerbangan aktual lebih rendah dari yang dihitung?',
    answer: 'Kalkulator mengasumsikan konsumsi konstan. Manuver tajam, angin sakal, dan keausan baterai dapat mengurangi waktu penerbangan yang sebenarnya hingga 30%.',
  },
  {
    question: 'Pada tegangan berapa saya harus mendaratkan drone saya?',
    answer: 'Idealnya, mendaratlah saat tegangan turun menjadi 3.5V - 3.6V per sel (saat istirahat). Ini sesuai dengan rekomendasi 20% kapasitas yang tersisa.',
  },
  {
    question: 'Apakah baterai LiPo atau Li-Ion lebih baik untuk drone?',
    answer: 'LiPo menawarkan tenaga seketika yang tinggi (ideal untuk balapan dan akrobatik). Sel Li-Ion memiliki daya tahan lebih lama tetapi output daya lebih rendah (ideal untuk penerbangan yang panjang dan stabil).',
  },
  {
    question: 'Bagaimana jumlah sel (S) memengaruhi waktu penerbangan?',
    answer: 'Lebih banyak sel meningkatkan tegangan dan tenaga, tetapi juga menambah berat. Jika motor dioptimalkan untuk tegangan tersebut, mereka bisa menjadi lebih efisien, namun jumlah sel saja tidak menjamin waktu yang lebih lama.',
  },
];

const howToSteps = [
  {
    name: 'Identifikasi Kapasitas',
    text: 'Periksa label baterai Anda dan cari nilai mAh (misalnya, 1500, 2200, 4500).',
  },
  {
    name: 'Perkirakan Konsumsi Arus',
    text: 'Masukkan rata-rata ampere yang dikonsumsi drone Anda. Anda dapat menemukannya di telemetri OSD Anda setelah uji penerbangan.',
  },
  {
    name: 'Sesuaikan Batas Keamanan',
    text: 'Kami menyarankan untuk menyisakan 20% (ditetapkan ke 80%) untuk melindungi baterai dan memberikan margin pendaratan.',
  },
  {
    name: 'Dapatkan Hasil',
    text: 'Lihat waktu pasti dalam menit dan detik di tempat Anda dapat dengan aman berada di udara.',
  },
];

const schemas: DroneFlightTimeLocaleContent['schemas'] = [
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

export const content: DroneFlightTimeLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Referensi Bibliografi',
  ui: {
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi Bibliografi',
    batterySpecs: 'Spesifikasi Baterai',
    capacity: 'Kapasitas',
    voltage: 'Tegangan (Sel S)',
    safetyMargin: 'Batas Keamanan',
    landingHint: 'Mendarat di 3.5V - 3.7V per sel.',
    consumptionDynamics: 'Dinamika Konsumsi',
    averageConsumption: 'Rata-rata Konsumsi Arus',
    powerWatts: 'Daya (Watt)',
    efficiencyHint: 'Saat Ampere berubah, Watt akan dihitung ulang berdasarkan tegangan S.',
    estimatedEfficiency: 'Estimasi Efisiensi',
    typicalEfficiencyHint: 'Umumnya: 4-6 (Balapan), 8-12 (Sinematik/Jarak Jauh).',
    safeFlight: 'Penerbangan Aman',
    totalEnergy: 'Total Energi',
    theoreticalTime: 'Waktu Teoritis (0%)',
    co2Footprint: 'Jejak Karbon CO2',
    autonomyChart: 'Grafik Otonomi',
    chartSubtitle: 'Ampere (A) vs. Waktu (menit)',
    chartLabel: 'Menit',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Waktu Terbang Drone: Panduan Lengkap untuk Otonomi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Otonomi mungkin adalah faktor paling penting dalam desain dan pengoperasian pesawat nirawak apa pun. Baik Anda seorang pilot drone balap FPV, fotografer udara profesional, atau penggemar jarak jauh, mengetahui dengan tepat berapa lama peralatan Anda dapat bertahan di udara sangat penting untuk keselamatan dan keberhasilan misi. <strong>Kalkulator waktu terbang</strong> kami menggunakan variabel dasar kapasitas baterai dan konsumsi arus untuk memberikan perkiraan yang realistis dan aman.',
    },
    {
      type: 'title',
      text: 'Kapasitas Baterai: Penjelasan mAh',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kapasitas baterai biasanya diukur dalam miliampere-jam (mAh). Angka ini menunjukkan berapa banyak muatan listrik yang dapat disimpan baterai. Misalnya, baterai 1500 mAh secara teoritis dapat memasok 1500 miliampere selama satu jam penuh. Di dunia drone, di mana konsumsi arus sangat tinggi, kita biasanya berbicara dalam Ampere (A). 1000 mAh tepatnya sama dengan 1 Ah (Ampere-jam).',
    },
    {
      type: 'paragraph',
      html: 'Namun, kapasitas mentah bukan satu-satunya faktor. Tegangan (ditentukan oleh jumlah sel atau \'S\') secara langsung memengaruhi daya total (Watt), tetapi untuk menghitung waktu berdasarkan konsumsi motor, rasio Ah/Ampere adalah metrik yang paling langsung digunakan oleh mekanik penerbangan.',
    },
    {
      type: 'title',
      text: 'Konsumsi Arus: Ampere dalam Penerbangan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Konsumsi motor adalah variabel yang paling berfluktuasi selama penerbangan. Menjaga drone melayang (hover) tidak sama dengan melakukan manuver akrobatik yang agresif. Setiap kombinasi motor dan baling-baling memiliki kurva efisiensi. Saat Anda memberikan tenaga penuh, ampere melonjak, secara drastis mengurangi masa pakai baterai.',
    },
    {
      type: 'list',
      items: [
        'Penerbangan Melayang (Hovering): Konsumsi minimum dan konstan, ideal untuk fotografi.',
        'Penerbangan Penjelajahan (Cruising): Konsumsi sedikit meningkat karena hambatan aerodinamis.',
        'Penerbangan Agresif/FPV: Puncak arus dapat melipatgandakan konsumsi rata-rata dalam hitungan detik.',
        'Berat Drone: Setiap gram tambahan membutuhkan RPM motor yang lebih tinggi untuk menghasilkan daya angkat, yang meningkatkan ampere.',
      ],
    },
    {
      type: 'title',
      text: 'Aturan Keamanan 80 Persen: Melindungi Bahan Kimia LiPo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Melepaskan baterai LiPo (Lithium Polymer) hingga kapasitas 0% adalah cara tercepat untuk menghancurkannya dan, lebih parah lagi, menyebabkan kecelakaan. Secara kimia, sel mengalami kerusakan permanen jika tegangannya turun di bawah ambang batas kritis (biasanya 3.0V - 3.2V per sel).',
    },
    {
      type: 'paragraph',
      html: 'Oleh karena itu, kami selalu menerapkan <strong>aturan batas keamanan</strong>. Kalkulator kami memungkinkan Anda menyesuaikan nilai ini, tetapi disarankan untuk mendarat ketika tersisa 20% daya. Ini tidak hanya memperpanjang umur baterai mahal Anda hingga ratusan siklus, tetapi juga menjamin cadangan daya vital jika terjadi hembusan angin tak terduga atau jika Anda harus membatalkan pendaratan dan mencoba lagi.',
    },
    {
      type: 'tip',
      html: 'Baterai drone sangat sensitif terhadap dingin. Di musim dingin, hambatan internal LiPo meningkat, menyebabkan penurunan tegangan yang lebih cepat. Selalu hangatkan baterai Anda sebelum lepas landas jika suhu lingkungan di bawah 15 derajat Celcius.',
    },
    {
      type: 'title',
      text: 'Rumus Penerbangan Matematika',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Meskipun alat kami melakukan pekerjaan berat untuk Anda, ada baiknya mengetahui logika di balik perhitungan. Rumus dasarnya adalah:',
    },
    {
      type: 'paragraph',
      html: '<strong>Waktu (mnt) = ((Kapasitas mAh / 1000) * Faktor Keamanan) / Konsumsi Ampere * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Misalnya, jika Anda memiliki baterai 2200 mAh, ingin mendarat pada sisa 20% (faktor keamanan 0,8), dan konsumsi rata-rata drone Anda adalah 15 Ampere: (2,2 * 0,8) / 15 * 60 = 7,04 menit waktu terbang yang aman.',
    },
    {
      type: 'title',
      text: 'Optimalisasi Berat dan Efisiensi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ada titik hasil yang semakin berkurang (diminishing returns) saat menambahkan baterai yang lebih besar. Menggandakan kapasitas baterai tidak menggandakan waktu terbang, karena baterai itu sendiri menambah berat. Berat ekstra itu mengharuskan motor berputar lebih cepat dan karena itu mengkonsumsi lebih banyak arus. Pada titik tertentu, berat tambahan mengkonsumsi lebih banyak energi daripada yang disumbangkannya, sehingga mengurangi efisiensi sistem secara keseluruhan.',
    },
    {
      type: 'paragraph',
      html: 'Pilot berpengalaman mencari keseimbangan sempurna antara <em>Disc Loading</em> (rasio berat terhadap area baling-baling) dan kapasitas baterai untuk memaksimalkan apa yang kami sebut "waktu misi yang berguna".',
    },
    {
      type: 'title',
      text: 'Perbedaan Antar Jenis Drone',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Drone Mikro (Whoops):</strong> Hanya mengkonsumsi 2-5 Ampere, tetapi baterainya sekitar 300-500 mAh. Waktunya biasanya singkat (3-4 mnt) karena inersia yang rendah dan putaran yang tinggi.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drone Balap 5":</strong> Konsumsi brutal selama balapan (hingga puncak 120A), yang menghabiskan baterai 1300 mAh hanya dalam 2 menit adrenalin murni.',
    },
    {
      type: 'paragraph',
      html: '<strong>Drone Jarak Jauh (Long Range):</strong> Dioptimalkan untuk efisiensi. Mereka sering menggunakan sel Lithium-Ion (Li-Ion) yang memiliki kepadatan energi lebih tinggi daripada LiPo, memungkinkan penerbangan 30 hingga 60 menit dengan konsumsi arus yang sangat rendah.',
    },
    {
      type: 'tip',
      html: 'Beralih ke baling-baling dengan jarak (pitch) yang lebih rendah dapat meningkatkan waktu terbang Anda dengan mengorbankan kecepatan maksimum dan responsivitas. Ini adalah cara termurah dan paling efektif untuk mendapatkan otonomi 10-15% lebih banyak.',
    },
    {
      type: 'title',
      text: 'Pemeliharaan dan Penyimpanan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Agar perhitungan alat ini akurat, baterai Anda harus dalam kondisi baik. Baterai dengan resistansi internal yang tinggi akan menjadi terlalu panas dan "berbohong" tentang kapasitas aslinya. Selalu simpan baterai Anda pada tegangan penyimpanan (3.8V-3.85V per sel) jika Anda tidak akan terbang selama lebih dari 48 jam.',
    },
    {
      type: 'paragraph',
      html: 'Kesimpulannya, manajemen energi adalah seni menyeimbangkan fisika, kimia, dan matematika. Gunakan kalkulator kami secara teratur untuk merencanakan sesi penerbangan Anda, dan jangan pernah lupa bahwa di udara, waktu adalah sumber daya Anda yang paling berharga. Selamat terbang dan semoga pendaratan Anda aman!',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'EASA - Regulasi Drone', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot Wiki', url: 'https://ardupilot.org/copter/' },
    { name: 'Battery University', url: 'https://batteryuniversity.com/' },
  ],
  howTo: howToSteps,
  schemas,
};
