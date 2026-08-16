import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'konverter-koordinat-gps';
const title = 'Konverter Koordinat GPS untuk Waypoint ArduPilot dan INAV';
const description = 'Konversi koordinat GPS antara Derajat Desimal (DD), Derajat Menit Detik (DMS), dan format perangkat keras GPS. Sangat penting untuk waypoint ArduPilot dan INAV.';

const faqItems = [
  {
    question: 'Apa perbedaan antara DD dan DMS?',
    answer: `DD (Decimal Degrees) menggunakan satu angka dengan desimal (misalnya, 51.50). DMS (Degrees, Minutes, Seconds) membagi derajat menjadi pecahan seksagesimal (misalnya, 51° 30' 0").`,
  },
  {
    question: 'Mengapa koordinat negatif digunakan?',
    answer: 'Dalam sistem Desimal (DD), garis lintang di sebelah selatan Khatulistiwa dan garis bujur di sebelah barat Greenwich ditunjukkan dengan tanda negatif untuk memudahkan perhitungan matematis.',
  },
  {
    question: 'Berapa banyak presisi yang hilang saat mengonversi?',
    answer: 'Alat kami menggunakan titik mengambang presisi ganda. Dengan 6 desimal di DD, presisinya sekitar 11 sentimeter, yang sudah lebih dari cukup untuk drone dan navigasi sipil.',
  },
  {
    question: 'Apakah alat ini berfungsi secara offline?',
    answer: 'Ya, setelah halaman dimuat, semua logika konversi bersifat lokal (sisi klien). Hanya peta yang memerlukan koneksi untuk mengunduh ubin baru.',
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
        name: 'Masukkan Koordinat',
        text: 'Masukkan koordinat Anda dalam format Derajat Desimal (DD) oder Derajat, Menit, Detik (DMS).',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Tinjau Konversi',
        text: 'Alat ini secara instan menampilkan koordinat yang dikonversi dalam semua format yang didukung.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verifikasi di Peta',
        text: 'Periksa visualisasi peta untuk memastikan koordinat menunjuk ke lokasi yang benar.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Salin Hasil',
        text: 'Salin koordinat yang dikonversi ke papan klip Anda untuk digunakan dalam sistem navigasi atau perencanaan misi.',
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
  ui: {
    decimalDD: 'Desimal (DD)',
    degreesGMS: 'Derajat (DMS)',
    useLocation: 'Gunakan Lokasi Saya',
    lat: 'Lintang',
    lng: 'Bujur',
    latGMS: 'Lintang (DMS)',
    lngGMS: 'Bujur (DMS)',
    gmsTraditional: 'DMS Tradisional',
    nauticalDM: 'Derajat & Men. Des. (Nautika)',
    googleMapsFormat: 'Format Google Maps',
    mapVisualization: 'Visualisasi Peta',
    mapHint: 'Klik pada peta untuk mengambil koordinat secara langsung.',
    copy: 'Salin',
    copied: 'Tersalin!',
    recentHistory: 'Riwayat Terbaru',
    clear: 'Hapus',
    noHistory: 'Tidak ada konversi terbaru.',
    load: 'Muat',
    delete: 'Hapus',
  },
  seo: [
    {
      type: 'title',
      text: 'Memahami Koordinat GPS: Alat yang Sangat Diperlukan untuk Navigasi Drone',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ketika berbicara tentang penerbangan drone otonom, pemetaan udara, atau pemulihan peralatan yang hilang, presisi dan keseragaman adalah kuncinya. Koordinat GPS membentuk tulang punggung navigasi tersebut, tetapi berbagai sistem (seperti Betaflight, INAV, ArduPilot, dan Google Maps) menggunakan format yang berbeda-beda. <strong>Konverter Koordinat GPS</strong> kami menjembatani kesenjangan tersebut, memastikan bahwa titik jalan (waypoint) Anda selalu mendarat tepat di tempat yang Anda inginkan.',
    },
    {
      type: 'title',
      text: 'Tiga Format GPS Utama yang Perlu Diketahui',
      level: 3,
    },
    {
      type: 'title',
      text: '1. Derajat Desimal (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Saat ini, ini adalah format yang paling umum di dunia dan diadopsi secara luas oleh <strong>Google Maps</strong>, ponsel pintar modern, dan sebagian besar layanan pemetaan web. Ini menyatakan posisi sebagai angka desimal sederhana (misalnya, <code>40.7128, -74.0060</code>). Jenis ini sangat mudah untuk disalin, ditempel, dan diproses oleh komputer.',
    },
    {
      type: 'list',
      items: [
        'Garis lintang (latitude) positif berada di belahan bumi utara; negatif di selatan.',
        'Garis bujur (longitude) positif berada di sebelah timur Meridian Utama; negatif di sebelah barat.',
      ],
    },
    {
      type: 'title',
      text: '2. Derajat, Menit, Detik (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Ini adalah format tradisional yang digunakan dalam navigasi laut, penerbangan, dan peta topografi lama (misalnya, <code>40° 42\' 46.08" U, 74° 0\' 21.6" B</code>). Ini lebih intuitif untuk navigasi manusia pada peta cetak karena membagi bumi menjadi 360 derajat, setiap derajat menjadi 60 menit, dan setiap menit menjadi 60 detik. Namun, simbol spesifiknya sering kali membuatnya merepotkan untuk dimasukkan secara digital saat memprogram penerbangan.',
    },
    {
      type: 'title',
      text: '3. Perangkat Keras GPS / Format Mentah (ArduPilot / INAV)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Saat mengekstrak log langsung dari CLI (Command Line Interface), mempelajari catatan penerbangan Blackbox mentah, atau berinteraksi dengan sistem seperti ArduPilot melalui MAVLink, Anda akan sering melihat koordinat direpresentasikan sebagai bilangan bulat yang sangat besar (misalnya, <code>407128000, -740060000</code>).',
    },
    {
      type: 'paragraph',
      html: 'Hal ini dilakukan karena mikrokontroler dapat menghitung bilangan bulat jauh lebih cepat dan lebih tepat dibandingkan dengan angka desimal (titik mengambang). Pada dasarnya format tersebut dihasilkan dengan mengalikan nilai Derajat Desimal (DD) dengan <strong>10.000.000 (1e7)</strong>. Alat kami secara mulus melakukan konversi dari atau kembali ke format ini, menjadikannya sangat ideal untuk analisis data Blackbox.',
    },
    {
      type: 'title',
      text: 'Mengapa Pilot Drone Membutuhkan Konversi Ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ada beberapa skenario kritis di mana alat konverter ini akan menjadi sahabat terbaik Anda:',
    },
    {
      type: 'list',
      items: [
        '<strong>Pemulihan Drone yang Hilang (Lost Drone Recovery):</strong> Tampilan Layar (OSD) atau pemancar jarak jauh (Transmitter) Taranis/Radiomaster Anda sering kali menampilkan koordinat terakhir yang diketahui dalam format DD atau DMS. Anda dapat mengubahnya dengan cepat untuk meletakkan pin pelacakan di Google Maps agar Anda bisa menemukan mesin mahal tersebut.',
        '<strong>Perencanaan Waypoint:</strong> Perencanaan misi (Mission Planning) pada perangkat lunak seperti Mission Planner atau QGroundControl menuntut ketelitian terbaik. Mengubah koordinat survei DMS dari denah proyek geografi memastikan drone Anda terbang dalam bidang wilayah yang akurat untuk menghindari penerbangan batas lahan yang ilegal.',
        '<strong>Konfigurasi Firmware Tingkat Lanjut:</strong> Setiap kali menetapkan pangkalan kembali atau Return to Home (RTH) secara keras melalui CLI firmware, kode tersebut kaku dan harus menggunakan serangkaian bilangan bulat dari bentuk Raw Hardware format.',
      ],
    },
    {
      type: 'title',
      text: 'Memahami Presisi Koordinat: Berapa Banyak Desimal yang Anda Butuhkan?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Seberapa besar kisaran nilai angka di belakang koma (desimal) mempengaruhi hitungan jarak riil sesungguhnya (di ukur sejajar batas khatulistiwa)?',
    },
    {
      type: 'list',
      items: [
        '<strong>1 Angka Desimal</strong> (contoh: 40.1): Memiliki margin kesalahan sejauh sekitar 111 kilometer. Sangat tidak bisa diandalkan.',
        '<strong>3 Angka Desimal</strong> (contoh: 40.123): Secara akurasi jaraknya mendekati 110 meter (Area sebesar 1 kelurahan atau pemukiman warga).',
        '<strong>5 Angka Desimal</strong> (contoh: 40.12345): Menghasilkan akurasi mendekati jarak 1.1 meter. (Menjadi parameter sempurna untuk sebagian besar fungsi RTH pesawat komersial amatir)',
        '<strong>7 Angka Desimal</strong> (contoh: 40.1234567): Keakuratan hingga 11 milimeter (Akurasi level Pro / Standart Peta RTK udara murni).',
      ],
    },
    {
      type: 'paragraph',
      html: 'Kebanyakan alat standar M8N atau Modul Gps seri penerusnya M10 memiliki kapasitas pengunci koordinat dalam kisaran antara level digit ke 5 hingga 6 (di bawah langit yg bersih, yang artinya memiliki ketepatan akurasi radius 1-2 meter saja). Pastikan copy semua minimal s/d digit batas titik ke 6 untuk mempermudah mencari posisi presisi barang anda.',
    },
    { type: 'title', text: 'Sistem Referensi Geografis', level: 2 },
    { type: 'paragraph', html: 'Setiap koordinat menggunakan sistem referensi tertentu. Data GPS biasanya memakai WGS84, jadi datum yang berbeda harus dikonversi sebelum dibandingkan.' },
    { type: 'title', text: 'Periksa Lintang dan Bujur', level: 2 },
    { type: 'paragraph', html: 'Lintang berada antara 90° selatan dan 90° utara, sedangkan bujur berada antara 180° barat dan 180° timur. Jangan menerapkan tanda negatif dan arah mata angin dua kali.' },
    { type: 'title', text: 'Ketelitian yang Masuk Akal', level: 2 },
    { type: 'paragraph', html: 'Banyak angka desimal tidak selalu berarti pengukuran lebih akurat. Ketelitian yang tepat bergantung pada perangkat GPS, kualitas sinyal, dan kebutuhan peta.' },
    { type: 'title', text: 'Menggunakan Hasil pada Peta', level: 2 },
    { type: 'paragraph', html: 'Hasil konversi dapat dimasukkan ke aplikasi peta atau GIS. Pastikan sistem tujuan mengharapkan derajat desimal atau derajat-menit-detik.' },
    { type: 'title', text: 'Arah dan Tanda Koordinat', level: 2 },
    { type: 'paragraph', html: 'Utara dan timur biasanya bernilai positif, sementara selatan dan barat bernilai negatif. Pada format dengan huruf, arah tersebut menggantikan tanda angka.' },
    { type: 'title', text: 'Lindungi Data Lokasi', level: 2 },
    { type: 'paragraph', html: 'Proses koordinat sensitif secara lokal jika memungkinkan dan bagikan hanya kepada orang yang berwenang. Periksa juga metadata GPS yang mungkin tersimpan dalam foto.' },
  ],
  faq: faqItems,
  bibliography,
  howTo: [
    {
      name: 'Meneliti Asal Usul Format.',
      text: 'Identifikasikan dulu tipe GPS-mu. Baris 40.7128 yaitu tipe (DD), Berlambang komapas dan bola 40°42\'46"U Adalah murni (DMS). Tulisan deret sangat gendut seperti ratusan juta yaitu 404306300 yakni Hardware/Raw Firmware format.',
    },
    {
      name: 'Tempel Angkamu ke Penampungan',
      text: 'Setelah yakin salah satunya, Silahkan mengetikan salinan data copy yang dipunya langsung ke kotak kolom yg bersangkutan.',
    },
    {
      name: 'Proses Otomatis Sekejap Terlihat',
      text: 'Tidak Menunggu Hitungan klik , karena sistem real timenya selalu hidup jadi sisa text box lain secara simultan segera terurai dalam data selaranya dengan instan.',
    },
    {
      name: 'Gunakan Klik "Copy" Disamping.',
      text: 'Tombol biru disebelah hasil sangat bisa mempercepat. Segera tuju pada terminal setting Inav/ mission / Map online dan selesaikan pekerjaaan itu.',
    },
  ],
  schemas,
};
