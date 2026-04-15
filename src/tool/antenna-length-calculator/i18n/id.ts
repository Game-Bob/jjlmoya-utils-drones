import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'kalkulator-panjang-antena';
const title = 'Kalkulator Panjang Antena RF untuk FPV Dipol dan Whip';
const description = 'Hitung pengukuran yang tepat untuk antena 868MHz, 2.4GHz, dan 5.8GHz Anda. Tingkatkan jangkauan drone dan hindari pembakaran pemancar dengan SWR yang dioptimalkan.';

const faqItems = [
  {
    question: 'Mengapa kawat antena saya harus memiliki panjang spesifik?',
    answer: 'Gelombang radio beresonansi pada kelipatan panjang gelombang mereka. Jika kawat tidak cocok dengan resonansi ini, energi terpantul kembali ke pemancar daripada memancar, yang dapat membakar peralatan.',
  },
  {
    question: 'Apa itu Faktor Kecepatan (Vf)?',
    answer: 'Ini adalah rasio antara kecepatan sinyal berjalan melalui konduktor dan kecepatan cahaya. Dalam tembaga, biasanya 0,95, artinya gelombang bergerak 5% lebih lambat dan antena harus 5% lebih pendek.',
  },
  {
    question: 'Mana yang lebih baik, antena dipol atau whip?',
    answer: 'Dipol (1/2 gelombang) lebih efisien dan dapat diprediksi tetapi lebih besar. Whip (1/4 gelombang) ringkas dan ideal untuk penerima kecil, meskipun memerlukan ground plane untuk berfungsi dengan baik.',
  },
  {
    question: 'Bagaimana ketebalan kawat mempengaruhi antena?',
    answer: 'Kawat yang lebih tebal memiliki bandwidth lebih lebar (kurang kritis mengenai frekuensi yang tepat), tetapi faktor kecepatan mereka berubah sedikit. Untuk sebagian besar drone FPV, kawat standar 20-22AWG ideal.',
  },
];

const howToSteps = [
  {
    name: 'Pilih Frekuensi',
    text: 'Masukkan frekuensi yang tepat dalam MHz atau gunakan salah satu tombol cepat untuk 5,8GHz, 2,4GHz, atau 868MHz.',
  },
  {
    name: 'Pilih Jenis Antena',
    text: 'Tentukan apakah Anda akan membuat dipol penuh (1/2 gelombang) atau antena whip vertikal (1/4 gelombang).',
  },
  {
    name: 'Sesuaikan Material',
    text: 'Pilih jenis kawat yang akan Anda gunakan sehingga kalkulator menerapkan faktor kecepatan yang benar.',
  },
  {
    name: 'Potong dengan Presisi',
    text: 'Gunakan pengukuran "Panjang per lengan" untuk memotong setiap elemen. Ingat untuk mengukur dari titik solder.',
  },
];

const schemas: AntennaLengthCalculatorLocaleContent['schemas'] = [
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

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Referensi Bibliografi',
  ui: {
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi Bibliografi',
    signalParameters: 'Parameter Sinyal',
    antennaType: 'Jenis Antena',
    dipole: 'Dipol (1/2 λ)',
    whip: 'Whip (1/4 λ)',
    conductorMedium: 'Medium Konduktor',
    totalLength: 'Panjang Total',
    branchLength: 'Panjang Cabang',
    secondaryResonance: 'Titik Resonansi Sekunder',
    swrIdeal: 'SWR Ideal',
    impedance: 'Impedansi',
    criticalNotice: 'Pemberitahuan Kritis',
    criticalNoticeText: 'Antena yang dipotong dengan buruk menghasilkan SWR (ROE) tinggi yang dapat memanaskan dan menghancurkan tahap output daya pemancar Anda dalam hitungan detik.',
    dynamicScheme: 'Skema Dinamis (mm)',
    harmonicLabel: 'Harmonik',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Tembaga Polos (0.95)',
    materialPvcInsulated: 'Kabel Berisolasi PVC (0.92)',
    materialSolidRod: 'Batang Padat (0.97)',
    materialCoaxial: 'Kabel Koaksial (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Mengapa Panjang Antena Frekuensi Radio Anda Sangat Penting?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda pernah bertanya-tanya mengapa antena drone balap (FPV), pengontrol jarak jauh (ELRS/Crossfire), atau bahkan router Wi-Fi Anda memiliki panjang spesifik, jawabannya terletak pada fisika resonansi. Antena bukan sekadar sepotong kawat konduktif; ini adalah komponen yang harus "sesuai" dengan frekuensi gelombang elektromagnetik yang ditangani.',
    },
    {
      type: 'paragraph',
      html: 'Saat membangun antena Anda sendiri, baik itu <strong>dipol</strong> untuk 868MHz atau <strong>antena whip</strong> untuk 5.8GHz, presisi diukur dalam milimeter. Kesalahan hanya 2 atau 3 mm dapat membuat antena tidak efisien, menyebabkan apa yang dikenal sebagai SWR tinggi (Standing Wave Ratio) atau ROE.',
    },
    {
      type: 'title',
      text: 'Konsep Fundamental: Panjang Gelombang dan Resonansi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Frekuensi radio (RF) berjalan dengan kecepatan cahaya (sekitar 300.000 kilometer per detik). Agar antena memancarkan atau menerima energi secara optimal, ukuran fisiknya harus berhubungan langsung dengan jarak satu siklus gelombang yang lengkap, disebut <strong>panjang gelombang (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Rumus dasar untuk menghitung panjang gelombang adalah λ = v / f, di mana \'v\' adalah kecepatan propagasi dan \'f\' adalah frekuensi. Namun, dalam dunia nyata, listrik bergerak sedikit lebih lambat melalui logam daripada melalui vakum. Di sinilah <strong>Faktor Kecepatan (Vf)</strong> berperan.',
    },
    {
      type: 'list',
      items: [
        'Tembaga polos: Memiliki Vf sekitar 0,95.',
        'Kabel berisolasi (PVC): Isolasi memperlambat gelombang, menurunkan faktor menjadi 0,92 atau lebih rendah.',
        'Batang tembaga padat: Karena lebih tebal dan sangat konduktif, faktor naik sedikit menjadi 0,97.',
      ],
    },
    {
      type: 'title',
      text: 'Jenis Antena Umum dalam Drone dan Proyek Pembuat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Antena Dipol Setengah Gelombang (1/2 λ):</strong> Ini adalah standar emas untuk banyak aplikasi. Terdiri dari dua lengan (elemen radiasi) yang bersama-sama membentuk setengah panjang gelombang frekuensi operasi. Ini adalah antena seimbang yang menawarkan pola radiasi berbentuk "donat" dan sangat mudah dibuat dengan kabel koaksial.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Antena Whip Seperempat Gelombang atau Monopole (1/4 λ):</strong> Inilah yang biasanya kita lihat pada penerima radio atau drone kecil. Ini memiliki hanya satu elemen radiasi dan menggunakan chassis perangkat atau ground plane untuk "mencerminkan" setengah gelombang lainnya. Panjangnya tepat setengah dari dipol, karenanya nama quarter-wave.',
    },
    {
      type: 'title',
      text: 'Frekuensi Kritis dan Aplikasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Setiap pita frekuensi memiliki keunikan tersendiri. Dengan kalkulator kami, Anda dapat menyesuaikan pengukuran untuk pita yang paling umum digunakan dalam hobi:',
    },
    {
      type: 'list',
      items: [
        '5,8 GHz (Video FPV): Panjangnya sangat kecil (sekitar 12-13 mm untuk radiator). Solder berlebih dapat merusak performa.',
        '2,4 GHz (Kontrol dan Wi-Fi): Pita yang jenuh di mana efisiensi antena sangat penting untuk menghindari kehilangan koneksi (failsafe).',
        '868 MHz / 915 MHz (Jarak Jauh): Digunakan oleh sistem seperti Team BlackSheep Crossfire atau ExpressLRS. Antena di sini lebih besar (sekitar 8cm per lengan) dan memungkinkan penetrasi hambatan yang lebih baik.',
        '433 MHz (UHF): Standar jarak jauh lama, dengan antena besar yang ideal untuk penerbangan multi-kilometer.',
      ],
    },
    {
      type: 'title',
      text: 'Referensi Teknis: Tabel SWR dan Kerugian',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk performa optimal, SWR harus sedekat mungkin dengan 1,0. Berikut adalah referensi bagaimana SWR mempengaruhi daya transmisi Anda:',
    },
    {
      type: 'table',
      headers: ['SWR (ROE)', 'Return Loss', 'Daya Terefleksi', 'Status'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Sempurna</strong>'],
        ['1.2:1', '-21 dB', '0,8%', 'Sangat Baik'],
        ['1.5:1', '-14 dB', '4,0%', 'Baik'],
        ['2.0:1', '-9,5 dB', '11,1%', 'Batas Dapat Diterima'],
        ['3.0:1', '-6,0 dB', '25,0%', '<strong>Berbahaya</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'Pentingnya 50 Ohm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hampir semua sistem radio yang digunakan dalam drone dan RC (VTx, receiver, controller) dirancang untuk <strong>impedansi karakteristik 50 Ohm</strong>. Antena dipol yang sempurna beresonansi biasanya memiliki impedansi dekat dengan 73 Ohm di ruang bebas, tetapi saat dipasang pada drone atau dengan menyesuaikan sudut lengan (Inverted-V), mendekati 50 Ohm ideal. Menggunakan kabel koaksial 75 Ohm (seperti kabel TV lama) akan menyebabkan ketidaksesuaian yang menurunkan sinyal terlepas dari seberapa baik Anda memotong antena.',
    },
    {
      type: 'title',
      text: 'Bahaya SWR Tinggi: Lindungi VTx Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mengapa kami begitu bersikeras tentang akurasi? Jika antena tidak memiliki panjang yang benar, ia tidak dapat memancarkan semua energi yang dikirim oleh pemancar video (VTx). Energi itu "memantul" kembali ke pemancar sebagai panas.',
    },
    {
      type: 'paragraph',
      html: 'SWR tinggi adalah penyebab utama pembakaran pemancar. Jika Anda terbang tanpa antena atau dengan yang dipotong dengan buruk, komponen internal akan terlalu panas dalam hitungan detik, membuat peralatan Anda tidak berguna. Menggunakan alat ini untuk memverifikasi potongan Anda adalah investasi keamanan terbaik untuk drone Anda.',
    },
    {
      type: 'title',
      text: 'Harmonik: Memahami Interferensi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antena yang dipotong untuk 868MHz tidak hanya beresonansi pada frekuensi tersebut. Karena sifat gelombang sinus, ini juga akan memiliki titik resonansi pada kelipatan ganjil (harmonik ke-3, ke-5, ke-7).',
    },
    {
      type: 'paragraph',
      html: 'Ini penting untuk diketahui karena bahkan jika antena Anda memancarkan pada 868MHz, Anda bisa menghasilkan "kebisingan" atau interferensi pada frekuensi lebih tinggi jika pemancar tidak tersaring dengan baik. Kalkulator harmonik membantu Anda memprediksi di mana sinyal hantu ini mungkin muncul.',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'The Quarter-Wave Monopole', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Velocity Factor of Transmission Lines', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: howToSteps,
  schemas,
};
