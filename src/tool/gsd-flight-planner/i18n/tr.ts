import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gsd-ucus-planlayici';
const title = 'GSD Uçuş Planlayıcı: Yer Örnekleme Mesafesi Hesaplayıcı';
const description = 'Fotogrametri görevleri için Yer Örnekleme Mesafesini (GSD) hesaplayın. DJI, Autel ve özel kameralar için destek. Görsel kalite göstergeleriyle gerçek zamanlı uçuş planlama.';

const faqItems = [
  {
    question: 'Yer Örnekleme Mesafesi (GSD) nedir?',
    answer: 'GSD, görüntünüzdeki bir pikselin yerdeki karşılığı olan mesafedir. Daha düşük bir GSD, daha yüksek çözünürlük ve detay anlamına gelir. Örneğin, 1 cm/px GSD, haritacılık için kritik olan 1 santimetre kadar küçük detayları ayırt etmenizi sağlar.',
  },
  {
    question: 'Dronumun kamera özelliklerini nasıl bulabilirim?',
    answer: 'Sensör boyutları ve odak uzaklığı için dronunuzun kılavuzuna bakın. Alternatif olarak, DJI Mavic 3E veya Autel EVO II gibi popüler modeller için kamera ön ayarlarımızı kullanın. Özel kameralar için sensör boyutunu lens özelliklerinizden ölçün.',
  },
  {
    question: 'Farklı görev türleri için hangi GSD\'ye ihtiyacım var?',
    answer: 'Yüksek hassasiyetli topografya: 1-2 cm/px. Standart haritalama: 2-5 cm/px. Denetim ve izleme: 5-10 cm/px. Görsel incelemeler: 10+ cm/px. Projenizin doğruluk gereksinimlerine göre seçim yapın.',
  },
  {
    question: 'Görüntü bindirmesi nedir ve neden önemlidir?',
    answer: 'Bindirme (overlap), birbirini takip eden fotoğraflarda görünen alanın yüzdesidir. Yüksek bindirme (%60-80), tam kapsama sağlar ve 3D model kalitesini artırır. Boyuna bindirme fotoğraf aralığını etkiler; enine bindirme uçuş hattı sayısını etkiler.',
  },
  {
    question: 'İdeal uçuş irtifasını nasıl hesaplarım?',
    answer: 'Bu hesaplayıcıyı kullanın: İstenen GSD × odak uzaklığı ÷ sensör genişliği = irtifa. Hesaplayıcı bunu otomatik olarak yapar ve hedef hassasiyetinizi korumak ve hareket bulanıklığını önlemek için maksimum güvenli irtifayı gösterir.',
  },
];

const howToSteps = [
  {
    name: 'Kamerayı Seçin veya Yapılandırın',
    text: 'Önceden yapılandırılmış modellerden (DJI Mavic 3E, Autel EVO II vb.) seçin veya sensör boyutlarını ve odak uzaklığını manuel olarak girin. Ön ayarlar tüm parametreleri anında yükler.',
  },
  {
    name: 'Uçuş İrtifasını Ayarlayın',
    text: 'Yerden yüksekliği (AGL) ayarlamak için irtifa sürgüsünü kullanın. İrtifanın görüntü çözünürlüğünü nasıl etkilediğini görmek için GSD güncellemesini gerçek zamanlı izleyin.',
  },
  {
    name: 'Bindirme Gereksinimlerini Tanımlayın',
    text: 'Boyuna ve enine bindirme yüzdelerini ayarlayın. Daha yüksek bindirme tam kapsama sağlar ancak görev süresini ve görüntü sayısını artırır.',
  },
  {
    name: 'Sonuçları İnceleyin ve Dışa Aktarın',
    text: 'GSD, kapsama alanı ve hassasiyet sınıflandırmasını kontrol edin. Resmi uçuş planınıza eklemek için hızlı bir rapor oluşturun.',
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  } as WithContext<SoftwareApplication>,
];

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: 'Yapılandırma',
    cameraSelection: 'Kamera Seçimi',
    manualMode: 'Manuel Mod',
    sensorConfig: 'Sensör Yapılandırması',
    width: 'Genişlik',
    height: 'Yükseklik',
    focalLength: 'Odak Uzaklığı',
    imageResolution: 'Görüntü Çözünürlüğü',
    w: 'G',
    h: 'Y',
    px: 'px',
    altitudeAgl: 'İrtifa (AGL)',
    overlapSettings: 'Bindirme Yapılandırması',
    forward: 'Boyuna',
    lateral: 'Enine',
    missionArea: 'Görev Alanı',
    totalAreaToSurvey: 'Toplam Ölçüm Alanı',
    hectareHint: '1 ha = 10.000 m²',
    inverseCalc: 'Ters Hesaplama',
    targetGsd: 'Hedef GSD',
    maxAltitude: 'Maks. İrtifa',
    reset: 'Sıfırla',
    results: 'Sonuçlar',
    gsdResult: 'Yer Örnekleme Mesafesi (GSD)',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Yüksek Hassas.',
    standard: 'Standart',
    inspection: 'Denetim',
    visual: 'Görsel',
    coveragePerImage: 'Görüntü Başına Kapsama',
    area: 'Alan',
    spacing: 'Aralık',
    flightDir: 'Uçuş →',
    missionMetrics: 'Görev Verileri',
    images: 'Görüntü',
    shots: 'çekim',
    flightLines: 'Uçuş Hattı',
    lines: 'hat',
    flightTime: 'Uçuş Süresi',
    min: 'dk',
    dataVolume: 'Veri Hacmi',
    gb: 'GB',
    copyShareLink: 'Bağlantıyı Kopyala',
    downloadReport: 'Raporu İndir',
    copiedToClipboard: 'Kopyalandı!',
    metric: 'Metrik',
    imperial: 'İmparatorluk',
    classHighPrecision: 'Yüksek Hassasiyetli Topografya',
    classStandard: 'Standart Haritalama',
    classInspection: 'Denetim ve İzleme',
    classVisual: 'Görsel İnceleme',
    ultraHighResAlert: 'Ultra yüksek çözünürlük: Yeterli depolama ve işlem gücü olduğundan emin olun',
    lowOverlapAlert: 'Boyuna bindirme %60\'ın altında: 3D model kalitesini etkileyebilir',
    largeDatasetAlert: 'Çok büyük veri seti: Birden fazla uçuşa bölmeyi düşünün',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'GSD Uçuş Planlayıcı: Tam Fotogrametri Hesaplayıcı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Yer Örnekleme Mesafesi (GSD)</strong>, dron fotogrametrisindeki en önemli ölçüttür. Bir hesaplama hatası tüm bir uçuş gününü boşa harcayabilir ve binlerce liralık verimlilik kaybına neden olabilir. Bu hesaplayıcı bu riski ortadan kaldırır.',
    },
    {
      type: 'title',
      text: 'GSD Neden Profesyoneller İçin Kritik?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İster arazi ölçümü yapın, ister 3D modeller oluşturun veya altyapı izleyin, GSD yakalayabileceğiniz detay seviyesini belirler. 1 cm/px\'lik bir görev, 5 cm/px\'lik bir görevin kaçırdığı detayları yakalar. Ancak çok alçaktan uçmak pil tüketir ve görev süresini gereksiz yere uzatır.',
    },
    {
      type: 'title',
      text: 'Görev Türüne Göre GSD',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Yüksek Hassasiyetli Topografya (1-2 cm/px):</strong> Parseller, maden sahaları ve mühendislik projeleri için harita kalitesinde doğruluk.',
        '<strong>Standart Haritalama (2-5 cm/px):</strong> Ortopanikler, tarımsal izleme ve genel amaçlı haritalar.',
        '<strong>Denetim ve İzleme (5-10 cm/px):</strong> Bina denetimleri, enerji hattı incelemeleri ve değişim tespiti.',
        '<strong>Görsel İncelemeler (10+ cm/px):</strong> Geniş alan keşfi ve görsel değerlendirme.',
      ],
    },
    {
      type: 'title',
      text: 'GSD Formülü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (İrtifa × Sensör Genişliği) / (Odak Uzaklığı × Görüntü Genişliği) × 100</code><br/>Bu hesaplayıcı matematiği halleder. Siz göreve odaklanın.',
    },
    {
      type: 'title',
      text: 'Bindirme: Neden %60-80 İdeal Noktadır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Düşük bindirme (%20-40) pil tasarrufu sağlar ancak kapsama alanında boşluk riski taşır. Yüksek bindirme (%80+) tam kapsamayı garanti eder ancak görev süresini uzatır. <strong>%60-80 aralığı</strong> profesyonel standarttır: aşırı yedeklilik olmadan tam 3D rekonstrüksiyon sağlar.',
    },
    {
      type: 'title',
      text: 'Gerçek Verilerle Daha İyi Görevler Planlayın',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Her uçuştan önce, bu hesaplayıcıyı kullanarak şunları belirleyin: gerekli GSD için tam irtifa, kaç fotoğrafa ihtiyacınız olacağı, toplam görev süresi ve hareket bulanıklığı riski olup olmadığı. Bu verilerle hassas görevler yürütecek ve maliyetli hatalardan kaçınacaksınız.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
