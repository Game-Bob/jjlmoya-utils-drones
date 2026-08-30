import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'kalkulator-motor-dan-baling-baling-drone';
const title = 'Kalkulator Motor dan Baling Baling Drone';
const description = 'Estimasi daya dorong motor drone, RPM berbeban, kecepatan pitch, daya dan konsumsi arus dari KV, tegangan baterai, geometri baling baling dan bobot drone.';

const ui = {
  "presetsHeader": "Pilih profil penerbangan",
  "presetTinyCruiser": "Micro cruiser ringan 3.5 inci",
  "presetFreestyle": "Freestyle 5 inci",
  "presetLongRange": "Long range 7 inci",
  "presetCinelifter": "Cinelifter 8 motor",
  "unitHeader": "Unit tampilan",
  "metricUnit": "Metrik",
  "imperialUnit": "Imperial",
  "setupHeader": "Sistem penggerak dan rangka",
  "motorKvLabel": "Konstanta motor KV (RPM/V)",
  "batteryVoltageLabel": "Tegangan baterai",
  "propDiameterLabel": "Diameter baling baling",
  "propPitchLabel": "Pitch baling baling",
  "bladeCountLabel": "Jumlah bilah",
  "motorCountLabel": "Jumlah motor",
  "droneWeightLabel": "Bobot siap terbang (RTF)",
  "benchDataHeader": "Titik uji pabrikan",
  "benchThrustLabel": "Daya dorong per motor",
  "benchVoltageLabel": "Tegangan pengujian",
  "optionalLabel": "Opsional",
  "twoBlades": "2 bilah",
  "threeBlades": "3 bilah",
  "fourBlades": "4 bilah",
  "twoMotors": "2 motor",
  "fourMotors": "4 motor",
  "sixMotors": "6 motor",
  "eightMotors": "8 motor",
  "resultsHeader": "Daya dorong dan keseimbangan angkat",
  "estimatedLabel": "Estimasi model fisika murni.",
  "benchBasedLabel": "Dikalibrasi dengan bangku tes.",
  "loadedRpmLabel": "Kecepatan berbeban",
  "pitchSpeedLabel": "Kecepatan pitch teoritis",
  "thrustPerMotorLabel": "Daya dorong per motor",
  "totalThrustLabel": "Total daya dorong statis",
  "totalPowerLabel": "Estimasi daya",
  "totalCurrentLabel": "Estimasi arus",
  "thrustMarginLabel": "Margin daya angkat",
  "hoverThrottleLabel": "Throttle saat hovering",
  "sceneCaption": "kecepatan baling baling berbeban",
  "underpoweredStatus": "Margin rendah",
  "workableStatus": "Margin aman",
  "headroomStatus": "Margin melimpah",
  "underpoweredAdvice": "Total daya dorong kurang dari dua kali bobot drone. Kemampuan pemulihan terbatas dan resiko tinggi terhadap angin.",
  "workableAdvice": "Cadangan praktis untuk penerbangan normal. Periksa suhu motor dan ESC setelah hovering cukup lama.",
  "headroomAdvice": "Cadangan daya dorong statis sangat baik. Meningkatkan respon kontrol tetapi membutuhkan arus lebih besar dari ESC.",
  "sourceNote": "Titik uji hanya mengkalibrasi daya dorong. Daya dan arus tetap merupakan estimasi model.",
  "modelSourceNote": "Tanpa data tes. Daya dorong menggunakan model koefisien fisika.",
  "manufacturerNote": "Gunakan data uji pabrikan dari kombinasi motor dan baling baling yang sama jika ada.",
  "modelNote": "Daya dorong statis, daya dan arus adalah estimasi. Hasil nyata tergantung pada kerapatan udara dan kerugian.",
  "safetyNote": "Jangan pernah gunakan kalkulator ini sebagai pengganti pengujian nyata. Periksa batas arus sebelum terbang.",
  "thrustAxisLabel": "Arah dorongan",
  "weightAxisLabel": "Bobot drone",
  "clearBenchData": "Hapus titik uji"
};

const faq = [
  {
    "question": "Apa yang dihitung oleh kalkulator motor dan baling baling drone ini?",
    "answer": "Estimasi RPM berbeban, kecepatan pitch teoritis, daya dorong per motor dan total, daya serta arus berdasarkan KV, tegangan, baling baling dan bobot."
  },
  {
    "question": "Bagaimana cara mencocokkan motor drone dan baling baling?",
    "answer": "Mulai dengan rekomendasi pabrikan. Bandingkan total daya dorong dengan bobot siap terbang dan verifikasi arus serta suhu pada bangku tes."
  },
  {
    "question": "Mengapa titik uji pabrikan lebih akurat daripada model teoritis?",
    "answer": "Karena memperhitungkan geometri baling baling nyata dan kerugian aerodinamis. Kalkulator menyesuaikan angka tersebut ke tegangan yang dipilih."
  },
  {
    "question": "Bagaimana ukuran baling baling mempengaruhi daya dorong drone?",
    "answer": "Daya dorong statis sangat bergantung pada diameter dan RPM. Baling baling lebih besar mendorong lebih banyak udara tetapi butuh torsi motor lebih tinggi."
  },
  {
    "question": "Apakah kalkulator ini menjamin drone aman untuk terbang?",
    "answer": "Tidak. Ini adalah alat perencanaan. Verifikasi arus dan suhu nyata pada bangku uji sebelum terbang."
  }
];

const howTo = [
  {
    "name": "Pilih profil penerbangan",
    "text": "Pilih preset untuk memuat nilai awal yang sesuai untuk KV, tegangan, baling baling dan bobot."
  },
  {
    "name": "Masukkan data rangka dan baling baling",
    "text": "Masukkan bobot siap terbang serta spesifikasi motor dan baling baling dalam unit metrik atau imperial."
  },
  {
    "name": "Tambahkan titik pengukuran",
    "text": "Jika memiliki data bangku tes, masukkan daya dorong terukur dan tegangan pengujian untuk kalibrasi."
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Prinsip pencocokan motor drone dan baling baling',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Pasangan motor dan baling baling adalah keseimbangan antara kecepatan putar, diameter, pitch, tegangan dan torsi. Alat ini mengestimasi daya angkat statis dan beban listrik.',
  },
  {
    type: 'title',
    text: 'Hasil yang ditampilkan',
    level: 2,
  },
  {
    type: 'table',
    headers: ["Hasil","Arti teknis"],
    rows: [["Kecepatan berbeban","Estimasi RPM tanpa beban dikurangi faktor beban"],["Daya dorong statis","Daya dorong per motor dan total daya angkat"],["Margin daya angkat","Total daya dorong statis dibandingkan dengan bobot drone"],["Daya dan arus","Kebutuhan listrik terestimasi pada tegangan yang dipilih"]],
  },
  {
    type: 'title',
    text: 'Cara menggunakan kalkulator',
    level: 2,
  },
  {
    type: 'list',
    items: ["Masukkan KV motor dan tegangan baterai.","Pilih diameter baling baling, pitch, jumlah bilah dan motor.","Tambahkan data uji pabrikan jika tersedia.","Verifikasi suhu dan arus pada bangku uji sebelum terbang."],
  },
  {
    type: 'title',
    text: 'Pentingnya data pengujian nyata',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Daya dorong baling baling bergantung pada kerapatan udara dan bentuk bilah. Data uji nyata memberikan kalibrasi paling akurat. Gunakan hasil ini untuk membandingkan motor dan baling-baling dalam kondisi yang sama. Berat total, tegangan saat dibebani, pengendali, dan pemasangan dapat mengubah daya dorong serta arus. Ukur suhu dan konsumsi di bangku uji, sisakan cadangan sebelum penerbangan pertama, dan verifikasi konfigurasi Anda sendiri.',
  },
  {
    type: 'tip',
    title: 'Rencana pengujian',
    html: 'Lakukan pengujian pada bangku tes dengan mengukur arus dan suhu sebelum penerbangan pertama.',
  },
];

const schemas: DroneMotorPropellerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
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
    step: howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMotorPropellerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography: BIBLIOGRAPHY_ITEMS,
  howTo,
  schemas,
};
