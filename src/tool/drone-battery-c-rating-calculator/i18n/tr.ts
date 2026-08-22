import type { DroneBatteryCRatingCalculatorLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'dron-lipo-pil-c-degeri-hesaplayici';
const title = 'Dron LiPo Pil C Değeri ve Sürekli Deşarj Hesaplayıcı';
const description = 'İç direnç ve motor akım tüketimine dayanarak dron LiPo pillerinin gerçekçi sürekli deşarj akımını, C değerini, voltaj düşüşünü ve uçuş güvenliğini hesaplayın.';

const ui = {
  title: 'Dron LiPo Pil C Değeri Hesaplayıcı',
  subtitle: 'Multirotorlar için gerçekçi sürekli deşarjı, anlık pik gereksinimlerini ve voltaj düşüşünü analiz edin',
  lipoSpecsHeader: 'Pil Özellikleri',
  capacityLabel: 'Kapasite (mAh)',
  claimedCRatingLabel: 'Beyan Edilen C Değeri',
  cellCountLabel: 'Hücre Sayısı (Seri S)',
  chemistryLabel: 'Pil Kimyası',
  internalResistanceLabel: 'Hücre Başına İç Direnç (mΩ)',
  quadSpecsHeader: 'Dron Akım Tüketimi',
  motorCountLabel: 'Motor Sayısı',
  peakMotorCurrentLabel: 'Motor Başına Pik Akım (Amper)',
  auxCurrentLabel: 'Yardımcı Donanım Tüketimi (VTX, FC, Kamera) (Amper)',
  presetSelectLabel: 'Hızlı Ayarlar',
  customPreset: 'Özel',
  whoopPreset: '1S TinyWhoop',
  freestyle5Preset: '6S 5 İnç Serbest Uçuş',
  cinewhoopPreset: '4S 3 İnci CineWhoop',
  longRange7Preset: '6S 7 İnç Uzun Menzil',
  racing5Preset: '6S 5 İnç Yarış',
  resultsHeader: 'Güç ve Performans Analizi',
  claimedMaxCurrentLabel: 'Beyan Edilen Maksimum Akım',
  realisticCRatingLabel: 'Gerçekçi Sürekli C Değeri',
  realisticMaxCurrentLabel: 'Gerçekçi Sürekli Akım',
  totalPeakDrawLabel: 'Toplam Pik Akım Tüketimi',
  voltageSagLabel: 'Tahmini Voltaj Düşüşü',
  sagNominalVoltageLabel: 'Yük Altındaki Nominal Voltaj',
  flightTimeFullThrottleLabel: 'Tam Gaz Uçuş Süresi',
  flightTimeHoverLabel: 'Tahmini Askıda Kalma Süresi',
  safetyStatusLabel: 'Güvenlik Teşhisi',
  statusOptimalTitle: 'Güvenli ve Optimal Pil Uyumu',
  statusOptimalDesc: 'Pil, aşırı ısınma veya şiddetli voltaj düşüşü olmadan pik akımı kolayca sağlar. Uzun hücre ömrü garantilidir.',
  statusWarningTitle: 'Orta Düzey Termal ve Voltaj Stresi',
  statusWarningDesc: 'Pik akım tüketimi pilin gerçekçi sınırına yakındır. Ani gaz vermelerde hafif voltaj düşüşü beklenir.',
  statusDangerTitle: 'Yüksek Aşırı Akım ve Voltaj Düşüşü Riski',
  statusDangerDesc: 'Pik tüketim pilin gerçek kapasitesini aşıyor. Yüksek ısınma, şiddetli voltaj düşüşü ve erken yıpranma riski.',
  lipoVisualizerTitle: 'Canlı LiPo Durum Görselleştirici',
  cellVoltageLabel: 'Hücre Başına Voltaj',
  batteryHealthLabel: 'Pil Stres Durumu',
  burstRatingRequiredLabel: 'Gerekli Anlık Peak C Değeri',
  currentRatioLabel: 'Güç Yük Oranı',
};

const faqItems = [
  {
    question: 'Dron LiPo pillerinde C değeri nedir?',
    answer: 'C değeri, pil kapasitesine oranla maksimum sürekli deşarj hızını temsil eder. Örneğin 1500mAh 100C bir pil teorik olarak 150 Amper akım sağlayabilir.',
  },
  {
    question: 'Beyan edilen C değeri neden gerçekte daha düşüktür?',
    answer: 'Üreticiler genellikle pazarlama amaçlı anlık zirve değerlerini yansıtır. Gerçek sürekli deşarj doğrudan iç dirence bağlıdır.',
  },
  {
    question: 'İç direnç voltaj düşüşünü ve ısınmayı nasıl etkiler?',
    answer: 'Yüksek iç direnç hücre içinde istenmeyen bir direnç gibi çalışır. Yüksek akım çekildiğinde voltaj aniden düşer ve enerji ısıya dönüşür.',
  },
  {
    question: 'Freestyle uçuşta voltaj düşüşünü nasıl önlerim?',
    answer: 'Düşük iç dirençli piller kullanın, pik tüketime karşı en az yüzde 15 güvenlik marjı bırakın ve hücre başına 3.5V altına inmeyin.',
  },
];

const howToSteps = [
  {
    name: 'Ayarı seçin veya verileri girin',
    text: 'mAh kapasitesini, beyan edilen C değerini, hücre sayısını ve ortalama iç direnci girin.',
  },
  {
    name: 'Motor tüketimini yapılandırın',
    text: 'Motor sayısını, tam gazdaki motor başına pik akımı ve yardımcı donanım tüketimini girin.',
  },
  {
    name: 'Güvenlik teşhisini inceleyin',
    text: 'Güvenli uçuş için gerçekçi sürekli akım ile dronun pik tüketimini karşılaştırın.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Dron LiPo C Değeri ve Gerçek Güç Çıkışını Anlamak',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'FPV dronlar için doğru LiPo pili seçmek kapasite, C değeri ve motor akım tüketimi arasındaki ilişkiyi anlamayı gerektirir. Üreticiler 100C veya üzeri değerler belirtse de gerçek sürekli deşarj iç direnç ve ısı dağılımı ile sınırlıdır. Bu hesaplayıcı gerçekçi güvenlik marjları sunar.',
  },
  {
    type: 'title',
    text: 'RC Pil Kimyaları Karşılaştırma Tablosu',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Kimya', 'Nominal V', 'Maks V', 'Enerji Yoğunluğu', 'Pik Deşarj', 'Önerilen Kullanım'],
    rows: [
      ['LiPo (Standart)', '3.7V', '4.20V', 'Yüksek', '100C - 150C', '5 İnç FPV Yarış ve Serbest Uçuş'],
      ['LiHV (Yüksek Voltaj)', '3.8V', '4.35V', 'Çok Yüksek', '80C - 120C', 'TinyWhoop ve Mikro Dronlar'],
      ['Li-Ion (18650/21700)', '3.6V', '4.20V', 'Maksimum', '15C - 35C', '7 İnç Uzun Menzil Dronlar'],
      ['LiFePO4', '3.3V', '3.65V', 'Orta', '30C - 50C', 'Saha Şarj İstasyonları'],
    ],
  },
  {
    type: 'title',
    text: 'Voltaj Düşüşü ve İç Direncin Performansa Etkisi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Voltaj düşüşü (voltage sag), ani gaz vermelerde voltajın aniden düşmesidir. Akım yüksek iç dirençten geçerken enerji itme gücü yerine ısıya dönüşür. Yıpranmış bir pil OSD ekranında erken düşük voltaj uyarısına yol açar.',
  },
  {
    type: 'list',
    items: [
      'Düşük İç Direnç (Hücre başı 1-4 mΩ): Harika tepki, minimum voltaj düşüşü ve serin çalışma.',
      'Orta İç Direnç (Hücre başı 5-10 mΩ): Serbest uçuş için standart performans.',
      'Yüksek İç Direnç (Hücre başı >12 mΩ): Belirgin güç kaybı, şiddetli düşüş ve hızlı ısınma.',
    ],
  },
  {
    type: 'title',
    text: 'Serbest Uçuş Yarış ve Uzun Menzil Pil Optimizasyonu',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Farklı uçuş tarzları farklı güç profilleri gerektirir. 5 inç serbest uçuş dronları 120 Amper üzeri ani akım sıçramaları oluştururken 7 inç uzun menzil dronları sabit verimlilik arar. Doğru pil eşleşmesi havadaki ani kapanmaları önler.',
  },
  {
    type: 'tip',
    title: 'LiPo Bakım İpucu',
    html: 'Kullanılmadığında LiPo pillerinizi her zaman hücre başına 3.80V ile 3.85V depolama voltajında saklayın. Pilleri 48 saatten fazla tam dolu bırakmak iç direnci kalıcı olarak artırır.',
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
      priceCurrency: 'TRY',
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
