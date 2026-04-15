import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'konverter-koordinat-gps';
const title = 'Konverter Koordinat GPS untuk Waypoint ArduPilot dan INAV';
const description = 'Konversi koordinat GPS antara Derajat Desimal (DD), Derajat Menit Detik (DMS), dan format perangkat keras GPS. Sangat penting untuk waypoint ArduPilot dan INAV.';

const faqItems = [
  {
    question: 'What is the difference between DD and DMS?',
    answer: `DD (Decimal Degrees) uses a single number with decimals (e.g., 51.50). DMS (Degrees, Minutes, Seconds) divides the degree into sexagesimal fractions (e.g., 51° 30' 0").`,
  },
  {
    question: 'Why are negative coordinates used?',
    answer: 'In the Decimal system (DD), latitudes south of the Equator and longitudes west of Greenwich are indicated with a negative sign to facilitate mathematical calculations.',
  },
  {
    question: 'How much precision do I lose when converting?',
    answer: 'Our tool uses double-precision floating point. With 6 decimals in DD, the precision is about 11 centimeters, which is more than enough for drones and civil navigation.',
  },
  {
    question: 'Does this tool work offline?',
    answer: 'Yes, once the page is loaded, all conversion logic is local (client-side). Only the map requires a connection to download new tiles.',
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
        name: 'Input Coordinates',
        text: 'Enter your coordinates in either Decimal Degrees (DD) or Degrees, Minutes, Seconds (DMS) format.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Review Conversion',
        text: 'The tool instantly displays the converted coordinates in all supported formats.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify on Map',
        text: 'Check the map visualization to ensure the coordinates point to the correct location.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Copy Result',
        text: 'Copy the converted coordinates to your clipboard for use in navigation systems or mission planning.',
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
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Referensi Bibliografi',
  ui: {
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi Bibliografi',
    latitude: 'Garis Lintang',
    longitude: 'Garis Bujur',
    decimalDegrees: 'Derajat Desimal (DD)',
    degreesMinutesSeconds: 'Derajat, Menit, Detik (DMS)',
    gpsHardware: 'Format Perangkat Keras GPS (Raw)',
    copy: 'Salin',
    copied: 'Disalin!',
    invalidCoordinate: 'Koordinat Tidak Valid',
    pasteHardwareMapFormat: 'Tempel data perangkat keras (contoh: 404306300, -739981800)',
    validation: {
      latRange: 'Garis lintang harus berada di antara -90 dan 90.',
      lonRange: 'Garis bujur harus berada di antara -180 dan 180.',
      invalidFormat: 'Format tidak dikenali. Silakan periksa masukan Anda.',
    },
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
  ],
  faq: faqItems,
  bibliography: [
    { name: 'Ardupilot Panduan Pemetaan Posisi Standart.', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: 'Pemahaman Degrees decimal Dalam Catatan Wiki', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
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
