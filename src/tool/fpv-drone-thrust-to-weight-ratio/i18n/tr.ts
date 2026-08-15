import type { FpvDroneThrustToWeightRatioLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-dron-itme-agirlik-orani-hesaplayici';
const title = 'FPV Dron İtme Ağırlık Oranı ve Uçuş Telemetrisi Hesaplayıcı';
const description = 'Maksimum statik itme kuvveti, doğrusal olmayan gaz tepki eğrisi, dikey G kuvveti, hover noktası ve 0 dan 100 e hızlanma süresini hesaplayın.';

const ui = {
  title: 'FPV Dron İtme Ağırlık Oranı Hesaplayıcı',
  subtitle: 'İtme eğrilerini, canlı gaz kolu tepkisini, dikey G kuvvetlerini ve çeviklik sınıflarını analiz edin',
  presetsHeader: 'Hızlı Hazır Ayarlar',
  customPreset: 'Özel Ayar',
  whoop1sPreset: '1S TinyWhoop (65mm)',
  freestyle35Preset: '4S Freestyle 3.5 İnç',
  freestyle5Preset: '6S Freestyle 5 İnç Pro',
  longrange7Preset: '6S Mountain LR 7 İnç',
  cinelifter8Preset: '8S Ağır Cinelifter X8',
  specsHeader: 'Dron ve Güç Sistemi Özellikleri',
  auwGramsLabel: 'Batarya Dahil Toplam Ağırlık (g)',
  motorCountLabel: 'Motor Yapılandırması',
  thrustPerMotorLabel: 'Motor Başına Maksimum Statik İtme (g)',
  propellerSizeLabel: 'Pervane Çapı (inç)',
  propellerPitchLabel: 'Pervane Hatvesi (inç)',
  bladeCountLabel: 'Pervane Kanat Sayısı',
  blade2Option: '2 Kanat (Çift Kanat - Maksimum Verimlilik)',
  blade3Option: '3 Kanat (Üç Kanat - Freestyle Standardı)',
  blade4Option: '4 Kanat (Dört Kanat - Maksimum Tutuş)',
  throttleStickHeader: 'Canlı Gaz Kolu Simülatörü',
  throttleStickLabel: 'Gaz Kolu Konumu (%)',
  snapIdleLabel: 'Rölanti (0%)',
  snapHoverLabel: 'Hover Noktası',
  snapCruiseLabel: 'Seyir (50%)',
  snapPunchLabel: 'Tam Güç (100%)',
  telemetryHeader: 'FPV Uçuş Telemetrisi ve Tanılama',
  twrRatioLabel: 'İtme Ağırlık Oranı (TWR)',
  hoverThrottleLabel: 'Hover Gaz Seviyesi',
  currentThrustLabel: 'Üretilen Anlık İtme Kuvveti',
  instantGForceLabel: 'Anlık Dikey G Kuvveti',
  zeroToHundredLabel: '0 dan 100 km/s Hızlanma Süresi',
  recommendedCamAngleLabel: 'Önerilen FPV Kamera Açısı',
  windResistanceLabel: 'Rüzgar Direnç Hızı',
  totalMaxThrustLabel: 'Toplam Maksimum Statik İtme',
  maxPitchAngleLabel: 'Maksimum Eğilme Açısı',
  tuningHeader: 'Betaflight PID ve Yazılım Önerileri',
  tpaRecommendationLabel: 'Gaz PID Zayıflatması (TPA)',
  dynamicIdleLabel: 'Önerilen Dinamik Rölanti',
  propwashRiskLabel: 'Türbülans Kontrol Gücü',
  tierUnderpoweredTitle: 'Düşük Güç veya Rüzgarda Sürüklenme Riski',
  tierUnderpoweredDesc: '2 ye 1 in altındaki TWR ani dalışları durdurmak için yetersiz güç sunar. Sadece sakin kapalı alanlar için uygundur.',
  tierCinematicTitle: 'Akıcı Sinematik Uçuş',
  tierCinematicDesc: '2 ye 1 ile 4 e 1 arasındaki TWR hassas gaz kontrolü ve sarsıntısız video çekimleri sağlar.',
  tierFreestyleTitle: 'Sportif ve Çevik Freestyle',
  tierFreestyleDesc: '4 e 1 ile 8 e 1 arasındaki TWR hızlı tepki ve temiz akrobasi manevraları sunar.',
  tierAcroProTitle: 'Yüksek Performanslı Akrobasi ve Bando Freestyle',
  tierAcroProDesc: '8 e 1 ile 13 e 1 arasındaki TWR patlayıcı dikey ivmelenme ve anında türbülans sönümlemesi sağlar.',
  tierRacingExtremeTitle: 'Ekstrem Dron Yarışı',
  tierRacingExtremeDesc: '13 e 1 in üzerindeki TWR profesyonel FPV yarış pistleri için gerekli yüksek gücü sağlar.',
  hudThrustCurveTitle: 'Doğrusal Olmayan İtme Tepki Eğrisi',
  hudHoverMarker: 'Hover Noktası',
  hudCurrentStickMarker: 'Mevcut Kol',
  hudGForceLabel: 'G Kuvvetleri',
  hudTiltAngleLabel: 'Kamera Açısı',
  hudVectorPowerLabel: 'Canlı Güç Telemetrisi',
};

const faqItems = [
  {
    question: 'Freestyle FPV dron için ideal itme ağırlık oranı nedir?',
    answer: 'Freestyle dronlar için 8 e 1 ile 12 ye 1 arasındaki TWR degeri serbest dususleri durdurmak ve keskin donusler yapmak icin gereken gucu saglar.',
  },
  {
    question: 'Doğrusal olmayan gaz eğrisi hover uçuşunu nasıl etkiler?',
    answer: 'Fırçasız motorlar devir sayısının karesiyle orantılı itme üretir. Güçlü dronlarda hover noktası genellikle yüzde 20 ile 35 gaz kolu aralığındadır.',
  },
  {
    question: 'FPV kamera açısı neden dronun itme oranına bağlıdır?',
    answer: 'Yüksek TWR a sahip dronlar daha yüksek seyir hızlarında daha dik bir ileri eğimle uçar. Ufku ortalamak için pilotlar kamerayı 35 ile 50 derece yukarı eğer.',
  },
  {
    question: 'Pervane kanat sayısı uçuş hissini nasıl değiştirir?',
    answer: 'İki kanatlı pervaneler en uzun uçuş süresini ve son hızı sunar. Üç kanatlılar freestyle için en iyi dengeyi sağlar, dört kanatlılar ise virajlarda maksimum tutuş üretir.',
  },
];

const howToSteps = [
  {
    name: 'Dron ağırlığını girin veya hazır ayar seçin',
    text: 'Batarya ve HD kamera dahil toplam uçuş ağırlığını gram cinsinden yazın.',
  },
  {
    name: 'Motor ve pervane parametrelerini yapılandırın',
    text: 'Motor sayısını, kanat adedini ve üreticinin tam gazdaki statik itme verisini belirtin.',
  },
  {
    name: 'Canlı gaz kolunu ayarlayın',
    text: 'Gaz kolunu kaydırarak üretilen itme kuvvetini, G kuvvetlerini ve eğri üzerindeki konumu inceleyin.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'FPV Dronlarda İtme Ağırlık Oranının Aerodinamik Temelleri',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'İtme ağırlık oranı (TWR), çok rotorlu hava araçlarının ivmelenme ve kontrol kabiliyetini belirler. FPV freestyle uçuşlarda yeterli güç rezervi ani dalışları durdurmayı ve engeller arasında hassas manevralar yapmayı mümkün kılar.',
  },
  {
    type: 'title',
    text: 'FPV Dron Sınıflandırması ve Performans Standartları',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Platform', 'Tipik AUW Ağırlık', 'Hedef TWR', 'Hover Gaz Oranı', '0 dan 100 e Hızlanma', 'Kamera Açısı'],
    rows: [
      ['1S TinyWhoop (65mm)', '32g', '4.5 e 1', 'yüzde 35', '1.20 s', '15 ile 25 derece'],
      ['4S Freestyle 3.5"', '250g', '12.0 ye 1', 'yüzde 24', '0.28 s', '35 ile 45 derece'],
      ['6S Freestyle 5" Pro', '680g', '11.5 e 1', 'yüzde 25', '0.30 s', '35 ile 50 derece'],
      ['6S Mountain LR 7"', '1150g', '8.3 e 1', 'yüzde 30', '0.45 s', '20 ile 30 derece'],
      ['8S Cinelifter X8', '4200g', '6.1 e 1', 'yüzde 38', '0.70 s', '15 ile 25 derece'],
    ],
  },
  {
    type: 'title',
    text: 'Doğrusal Olmayan Gaz Tepkisi ve Motor Dinamiği',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Elektrik motorları itme kuvvetini üstel olarak üretir. Gaz kolunun son yüzde 20 lik hareketi toplam itme gücünün yüzde 40 ından fazlasını oluşturur.',
  },
  {
    type: 'list',
    items: [
      'Hover aralığı (yüzde 20 ile 35): Hassas irtifa koruma bölgesi.',
      'Seyir aralığı (yüzde 35 ile 65): Dengeli akım tüketimli ileri uçuş.',
      'Tam gaz aralığı (yüzde 70 ile 100): Yüksek G kuvvetli maksimum dikey ivmelenme.',
    ],
  },
  {
    type: 'title',
    text: 'Pervane Seçimi ve Betaflight Ayarları',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'TWR si 10 a 1 in üzerinde olan dronlar için tam gazdaki titreşimleri önlemek adına Betaflight Throttle PID Attenuation (TPA) özelliğinin etkinleştirilmesi önerilir.',
  },
  {
    type: 'tip',
    title: 'Betaflight TPA Ayar İpucu',
    html: 'Yüksek hız düzlüklerinde pürüzsüz uçuş için TPA eşik değerini 1250 veya 1350 ye, katsayısını 0.65 e ayarlayın.',
  },
];

const schemas: FpvDroneThrustToWeightRatioLocaleContent['schemas'] = [
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
      priceCurrency: 'USD',
    },
  } as WithContext<SoftwareApplication>,
];

export const content: FpvDroneThrustToWeightRatioLocaleContent = {
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
