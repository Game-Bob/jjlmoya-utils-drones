import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-dron-yarisi-tur-kronometresi';
const title = 'FPV Dron Yarışı Tur ve Sektör Kronometresi';
const description = 'FPV dron yarışları için FAI sesli başlangıç dizisi, sektör farkı analizi, en hızlı tur uyarıları, tur tutarlılık endeksi ve hız telemetrisi içeren interaktif kronometre.';

const ui = {
  setupHeading: 'Pist ve Seans Yapılandırması',
  trackLengthLabel: 'Pist Uzunluğu',
  trackLengthUnit: 'metre',
  targetLapsLabel: 'Hedef Tur Sayısı',
  targetLapsUnit: 'tur (0 serbest antrenman)',
  batteryCapacityLabel: 'Batarya Kapasitesi',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Sesli Sinyalleri Etkinleştir',
  debounceThresholdLabel: 'Yanlış Tetikleme Önleme Eşiği',
  debounceThresholdUnit: 'saniye',
  presetMultiGpLabel: 'MultiGP Özelliği (250m / 3 Tur)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Tur)',
  presetSprintLabel: 'Yüksek Hızlı Sprint (400m / 2 Tur)',
  startCountdownButton: 'FAI Geri Sayımını Başlat',
  pauseTimerButton: 'Seansı Duraklat',
  resumeTimerButton: 'Zamanlayıcıyı Sürdür',
  resetTimerButton: 'Seansı Sıfırla',
  recordLapButton: 'TURU KAYDET',
  spacebarHint: 'Bitiş kapısından geçerken BOŞLUK tuşuna basın veya dev butona dokunun',
  statusIdle: 'Çıkışa Hazır',
  statusCountdown: 'FAI Geri Sayımı Sürüyor',
  statusRunning: 'Yarış Kronometresi Aktif',
  statusPaused: 'Seans Duraklatıldı',
  statusFinished: 'Yarış Tamamlandı',
  currentLapHeading: 'Geçerli Tur Süresi',
  lapNumberPrefix: 'Tur',
  lastLapHeading: 'Son Tur',
  fastestLapHeading: 'En Hızlı Tur',
  averageLapHeading: 'Ortalama Tur',
  deltaBestHeading: 'En İyiye Göre Fark',
  consistencyIndexHeading: 'Tur Tutarlılık Endeksi',
  estimatedSpeedHeading: 'Tahmini Ortalama Hız',
  estimatedBatteryHeading: 'Tahmini Batarya Tüketimi',
  speedUnitKmh: 'km/s',
  speedUnitMph: 'mil/s',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh kalan',
  lapHistoryHeading: 'Tur Zamanları ve Tempo Kıyaslaması',
  lapColumnHeader: 'Tur #',
  timeColumnHeader: 'Süre',
  splitColumnHeader: 'En İyi Farkı',
  speedColumnHeader: 'Ort. Hız',
  batteryColumnHeader: 'Batarya Tüketimi',
  noLapsRecordedNotice: 'Henüz tur kaydedilmedi. Geri sayımı başlatın ve ilk turu kaydetmek için Boşluk tuşuna basın.',
  consistencyRatingElite: 'Seçkin Tutarlılık',
  consistencyRatingPro: 'Profesyonel Pilot Tutarlılığı',
  consistencyRatingClub: 'Kulüp Pilotu Tutarlılığı',
  consistencyRatingNovice: 'Gelişme Düzeyi Tutarlılık',
  fastestLapBadge: 'EN HIZLI TUR',
  sessionSummaryHeading: 'Seans Özeti ve Dışa Aktarma',
  totalTimeLabel: 'Toplam Yarış Süresi',
  completedLapsLabel: 'Tamamlanan Tur',
  exportCsvButton: 'Turları CSV Olarak Aktar',
  copySummaryButton: 'Metin Özetini Kopyala',
  copiedNotice: 'Seans özeti panoya kopyalandı!',
};

const faqItems = [
  {
    question: 'Bu kronometredeki FAI akustik başlangıç dizisi nasıl çalışır?',
    answer: 'Başlangıç dizisi, Uluslararası Havacılık Federasyonu (FAI) CIAM F9U dron yarış kurallarını birebir uygular. Birer saniye aralıklarla çalan dört uyarı tonunun ardından yüksek frekanslı start tonu verilir ve kronometre tam sıfırdan başlar.',
  },
  {
    question: 'Tur Tutarlılık Endeksi nasıl hesaplanır?',
    answer: 'Puanlama, tamamlanan turların seans ortalamasına göre standart sapmasını değerlendirir. Yüzde 95 üzerindeki değerler olağanüstü hat tutarlılığı ve gaz kontrolü anlamına gelir.',
  },
  {
    question: 'Tur kaydı için ayak pedalı veya kumanda anahtarı kullanılabilir mi?',
    answer: 'Evet. Boşluk tuşu sinyali gönderen herhangi bir kablosuz klavye, Bluetooth ayak pedalı veya gamepad düğmesi ekrana dokunmaya gerek kalmadan turu kaydeder.',
  },
  {
    question: 'Tur butonunda neden bir önleme eşiği bulunuyor?',
    answer: 'Dron kapıları yüksek hızla geçilir ancak yanlışlıkla iki kez dokunulması hatalı salise turları kaydedebilir. Filtre, belirlenen sürenin (varsayılan 3 saniye) altındaki tetiklemeleri reddeder.',
  },
  {
    question: 'Tahmini ortalama hız ne kadar doğrudur?',
    answer: 'Hesaplama, pistin beyan edilen merkez hat uzunluğunun tur süresine bölünmesiyle yapılır. Virajlardaki gerçek hız dönüş yarıçapına ve yatış açısına göre farklılık gösterir.',
  },
];

const howToSteps = [
  {
    name: 'Pist mesafesini ve tur hedefini belirleyin',
    text: 'Pist uzunluğunu metre cinsinden ve tur hedefini girin veya MultiGP Spec gibi bir hazır ayar seçin.',
  },
  {
    name: 'FAI sesli geri sayımını başlatın',
    text: 'Geri sayımı başlat düğmesine basın. Hazırlık tonlarını ve kalkış start sinyalini dinleyin.',
  },
  {
    name: 'Bitiş kapısından geçerken turları kaydedin',
    text: 'Dron başlangıç/bitiş kapısını her aştığında Boşluk tuşuna veya büyük butona basın.',
  },
  {
    name: 'Telemetriyi, farkları ve tutarlılığı inceleyin',
    text: 'Tempo çubuk grafiğini, en iyi tura göre farkları ve tutarlılık endeksini analiz edip CSV çıktısı alın.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'FPV yarış dronlarında yüksek hassasiyetli tur zamanlaması ilkeleri',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Rekabetçi FPV yarışlarında milisaniye düzeyinde hassasiyet ve sarsılmaz hat istikrarı gerekir. 5 inçlik yarış dronları engeller arasında 140 km/s hızın üzerine çıkar. Doğru antrenman, sesli kalkış bildirimleri, anlık kapı geçiş kaydı ve seans temposundaki gerilemelerin analizini zorunlu kılar.',
  },
  {
    type: 'title',
    text: 'Dron yarış sınıfları ve zamanlama parametreleri karşılaştırması',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Sınıf / Standart', 'Tipik Pist Boyu', 'Yarış Tur Sayısı', 'Ortalama Tur Süresi', 'Azami Hız', 'Önerilen Eşik'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m - 80m', '5 tur', '8.5s - 13.0s', '35 - 55 km/s', '2.0 saniye'],
      ['Micro 3.5 İnç (4S)', '120m - 180m', '4 tur', '12.0s - 18.0s', '70 - 110 km/s', '2.5 saniye'],
      ['MultiGP Spec 5 İnç (6S)', '200m - 300m', '3 tur', '14.0s - 22.0s', '100 - 150 km/s', '3.0 saniye'],
      ['Açık Arazi Sprinti (6S/8S)', '350m - 500m', '2 tur', '20.0s - 32.0s', '130 - 180 km/s', '4.0 saniye'],
    ],
  },
  {
    type: 'title',
    text: 'Akustik başlangıç dizileri ve FAI F9U spor kuralları',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'FAI CIAM Bölüm 4 kuralları gereğince, FPV gözlükleri takan pilotlar arasında eşit tepki süresi sağlamak amacıyla görsel bayraklar yerine standart ses tonları kullanılır. Dizi, saniyede bir verilen 440 Hz tonlar ve kalkış anını belirten 880 Hz ton ile tamamlanır.',
  },
  {
    type: 'list',
    items: [
      'Hazırlık Tonları: Gaz kolunu sabitlemek ve ilk viraja odaklanmak için sesli uyarılar.',
      'Kalkış Sinyali (Go): Kronometrenin tam t = 0 anında çalışmasını sağlayan anlık ton.',
      'Sesli Onay: Gözlüğü çıkarmadan turun kaydedildiğini doğrulayan net bildirim sesi.',
      'Rekor Tur Akordu: Seansın en hızlı turu aşıldığında çalan özel armonik ton.',
    ],
  },
  {
    type: 'title',
    text: 'Tur Tutarlılık Endeksinin önemi ve yarış taktiği',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Tek bir rekor tur atmak heyecan vericidir ancak şampiyonlukları tutarlılık kazandırır. Endeks, turlar arasındaki dalgalanmayı ölçer: 0.3 saniyeden az sapan bir pilot türbülanstan kaçınır ve batarya voltajını son tura saklar.',
  },
  {
    type: 'tip',
    title: 'Uçuş sahası için pratik ipucu',
    html: 'Kronometre cihazınızı duyulabilir bir ses düzeyinde yakınınızda bulundurun. Ayak altına yerleştirilen bir Bluetooth pedal ile ellerinizi kumandadan çekmeden turları kolayca kaydedebilirsiniz.',
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
      priceCurrency: 'TRY',
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
