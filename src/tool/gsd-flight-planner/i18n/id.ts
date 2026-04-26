import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'perencana-terbang-gsd';
const title = 'Perencana Terbang GSD: Kalkulator Jarak Sampel Tanah';
const description = 'Hitung Jarak Sampel Tanah (GSD) untuk misi fotogrametri. Dukungan untuk DJI, Autel, dan kamera khusus. Perencanaan penerbangan real-time dengan indikator kualitas visual.';

const faqItems = [
  {
    question: 'Apa itu Ground Sample Distance (GSD)?',
    answer: 'GSD adalah jarak di lapangan yang diwakili oleh satu piksel dalam gambar Anda. GSD yang lebih rendah berarti resolusi dan detail yang lebih tinggi. Sebagai contoh, GSD 1 cm/px memungkinkan Anda melihat detail sekecil 1 sentimeter, yang sangat penting untuk pemetaan.',
  },
  {
    question: 'Bagaimana cara menemukan spesifikasi kamera drone saya?',
    answer: 'Periksa manual drone Anda untuk dimensi sensor dan panjang fokus. Atau, gunakan preset kamera kami untuk model populer seperti DJI Mavic 3E atau Autel EVO II. Untuk kamera khusus, ukur ukuran sensor dari spesifikasi lensa Anda.',
  },
  {
    question: 'GSD apa yang saya butuhkan untuk jenis misi yang berbeda?',
    answer: 'Topografi presisi tinggi: 1-2 cm/px. Pemetaan standar: 2-5 cm/px. Inspeksi dan pemantauan: 5-10 cm/px. Survei visual: 10+ cm/px. Pilih berdasarkan persyaratan akurasi proyek Anda.',
  },
  {
    question: 'Apa itu overlap gambar dan mengapa itu penting?',
    answer: 'Overlap adalah persentase area yang muncul di foto berturut-turut. Overlap yang tinggi (60-80%) memastikan cakupan lengkap e meningkatkan kualitas model 3D. Overlap depan memengaruhi jarak foto; overlap samping memengaruhi jumlah garis terbang.',
  },
  {
    question: 'Bagaimana cara menghitung ketinggian terbang ideal?',
    answer: 'Gunakan kalkulator ini: GSD yang Diinginkan × panjang fokus ÷ lebar sensor = ketinggian. Kalkulator melakukan ini secara otomatis e menunjukkan ketinggian aman maksimum untuk menjaga presisi target Anda dan menghindari motion blur.',
  },
];

const howToSteps = [
  {
    name: 'Pilih atau Konfigurasi Kamera',
    text: 'Pilih dari model yang sudah dikonfigurasi (DJI Mavic 3E, Autel EVO II, dll) atau masukkan dimensi sensor dan panjang fokus secara manual. Preset memuat semua parameter secara instan.',
  },
  {
    name: 'Atur Ketinggian Terbang',
    text: 'Gunakan slider ketinggian untuk menyesuaikan tinggi di atas permukaan tanah (AGL). Lihat pembaruan GSD secara real-time untuk melihat bagaimana ketinggian memengaruhi resolusi gambar.',
  },
  {
    name: 'Tentukan Persyaratan Overlap',
    text: 'Atur persentase overlap depan dan samping. Overlap yang lebih tinggi memastikan cakupan lengkap tetapi meningkatkan waktu misi dan jumlah gambar.',
  },
  {
    name: 'Tinjau Hasil dan Ekspor',
    text: 'Periksa GSD, area cakupan, dan klasifikasi presisi. Buat laporan cepat untuk dilampirkan pada rencana penerbangan resmi Anda.',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: 'Konfigurasi',
    cameraSelection: 'Pemilihan Kamera',
    manualMode: 'Mode Manual',
    sensorConfig: 'Konfigurasi Sensor',
    width: 'Lebar',
    height: 'Tinggi',
    focalLength: 'Panjang Fokus',
    imageResolution: 'Resolusi Gambar',
    w: 'L',
    h: 'T',
    px: 'px',
    altitudeAgl: 'Ketinggian (AGL)',
    overlapSettings: 'Konfigurasi Overlap',
    forward: 'Depan',
    lateral: 'Samping',
    missionArea: 'Area Misi',
    totalAreaToSurvey: 'Total Area Survei',
    hectareHint: '1 ha = 10.000 m²',
    inverseCalc: 'Kalkulasi Terbalik',
    targetGsd: 'Target GSD',
    maxAltitude: 'Ketinggian Maks',
    reset: 'Reset',
    results: 'Hasil',
    gsdResult: 'Jarak Sampel Tanah (GSD)',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Presisi Tinggi',
    standard: 'Standar',
    inspection: 'Inspeksi',
    visual: 'Visual',
    coveragePerImage: 'Cakupan per Gambar',
    area: 'Area',
    spacing: 'Jarak',
    flightDir: 'Terbang →',
    missionMetrics: 'Metrik Misi',
    images: 'Gambar',
    shots: 'foto',
    flightLines: 'Garis Terbang',
    lines: 'garis',
    flightTime: 'Waktu Terbang',
    min: 'menit',
    dataVolume: 'Volume Data',
    gb: 'GB',
    copyShareLink: 'Salin Tautan',
    downloadReport: 'Unduh Laporan',
    copiedToClipboard: 'Tersalin!',
    metric: 'Metrik',
    imperial: 'Imperial',
    classHighPrecision: 'Topografi Presisi Tinggi',
    classStandard: 'Pemetaan Standar',
    classInspection: 'Inspektion & Pemantauan',
    classVisual: 'Survei Visual',
    ultraHighResAlert: 'Resolusi ultra-tinggi: Pastikan penyimpanan dan daya proses yang cukup',
    lowOverlapAlert: 'Overlap depan di bawah 60%: Dapat memengaruhi kualitas model 3D',
    largeDatasetAlert: 'Dataset sangat besar: Pertimbangkan untuk membagi menjadi beberapa penerbangan',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'Perencana Terbang GSD: Kalkulator Fotogrametri Lengkap',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Ground Sample Distance (GSD)</strong> adalah metrik terpenting dalam fotogrametri drone. Kesalahan kalkulasi dapat membuang waktu terbang seharian dan merugikan jutaan rupiah dalam produktivitas yang hilang. Kalkulator ini menghilangkan risiko tersebut.',
    },
    {
      type: 'title',
      text: 'Mengapa GSD Penting bagi Profesional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Baik Anda memetakan lahan, membuat model 3D, atau memantau infrastruktur, GSD menentukan tingkat detail yang dapat Anda tangkap. Misi 1 cm/px menangkap detail yang terlewatkan oleh misi 5 cm/px. Namun terbang terlalu rendah menghabiskan baterai dan memperpanjang waktu misi secara tidak perlu.',
    },
    {
      type: 'title',
      text: 'GSD Berdasarkan Jenis Misi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Topografi Presisi Tinggi (1-2 cm/px):</strong> Akurasi tingkat topografi untuk bidang tanah, lokasi tambang, e proyek teknik.',
        '<strong>Pemetaan Standar (2-5 cm/px):</strong> Ortomosaik, pemantauan pertanian, e peta tujuan umum.',
        '<strong>Inspeksi dan Pemantauan (5-10 cm/px):</strong> Inspeksi bangunan, peninjauan saluran listrik, e deteksi perubahan.',
        '<strong>Survei Visual (10+ cm/px):</strong> Pengintaian area luas e penilaian visual.',
      ],
    },
    {
      type: 'title',
      text: 'Formula GSD',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Ketinggian × Lebar Sensor) / (Panjang Fokus × Lebar Gambar) × 100</code><br/>Kalkulator ini menangani matematikanya. Anda fokus pada misi.',
    },
    {
      type: 'title',
      text: 'Overlap: Mengapa 60-80% adalah Titik Ideal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Overlap rendah (20-40%) menghemat baterai tetapi berisiko adanya celah dalam cakupan. Overlap tinggi (80%+) menjamin cakupan lengkap tetapi memperpanjang waktu misi. <strong>Rentang 60-80%</strong> adalah standar profesional: ini memastikan rekonstruksi 3D lengkap tanpa redundansi berlebih.',
    },
    {
      type: 'title',
      text: 'Rencanakan Misi Lebih Baik dengan Data Nyata',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebelum setiap penerbangan, gunakan kalkulator ini untuk menentukan: ketinggian tepat untuk GSD yang Anda butuhkan, berapa banyak foto yang Anda perlukan, total waktu misi, e apakah ada risiko motion blur. Dengan data ini, Anda akan menjalankan misi yang presisi e menghindari kesalahan yang mahal.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
