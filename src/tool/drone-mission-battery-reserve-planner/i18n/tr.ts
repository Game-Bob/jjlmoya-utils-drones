import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'dron-gorev-pil-rezerv-planlayici';
const title = 'Dron Görev Pil Rezerv Planlayıcı';
const description = 'İHA uçuşları için güvenli eve dönüş pil rezerv marjlarını, karşı rüzgar güç kayıplarını ve dönüşsüz nokta yarıçapını hesaplayın.';

const faqItems = [
  {
    question: 'Karşı rüzgara karşı uçmak neden daha fazla güç tüketir?',
    answer: 'Karşı rüzgar, sürüklenmeyi yenmek ve yer hızını korumak için daha dik bir yatış açısı gerektirir ve motor akımını üssel olarak artırır.',
  },
  {
    question: 'Hedef bölgedeki çalışma süresi dönüşsüz noktayı nasıl etkiler?',
    answer: 'Hedef bölgedeki askıda kalma süresi doğrudan pil enerjisi tüketir ve güvenli gidiş-dönüş yarıçapını azaltır.',
  },
  {
    question: 'LiPo pillerde yük altında voltaj düşüşüne ne sebep olur?',
    answer: 'Yüksek deşarj akımı, lityum hücrelerindeki iç direnç kayıplarını artırarak kullanılabilir Watt-saat kapasitesini düşürür.',
  },
];

const howToSteps = [
  {
    name: 'Pil ve İtki Bilgilerini Girin',
    text: 'Miliamper-saat cinsinden pil kapasitesini, nominal voltajı ve ortalama akımı girin.',
  },
  {
    name: 'Mesafe ve Hedef Süresini Belirleyin',
    text: 'Tek yön mesafeyi ve hedef bölgedeki tahmini askıda kalma süresini girin.',
  },
  {
    name: 'Rüzgar Hızını ve Yönünü Ayarlayın',
    text: 'Gidiş rotasına göre rüzgar hızını ve yönünü seçin.',
  },
  {
    name: 'Güvenli Yarıçapı ve Telemetriyi İnceleyin',
    text: 'Hesaplanan dönüşsüz noktayı, etap bazlı güç tüketimini ve inişteki pil seviyesini inceleyin.',
  },
];

const schemas: DroneMissionBatteryReservePlannerLocaleContent['schemas'] = [
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
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  } as WithContext<SoftwareApplication>,
];

export const content: DroneMissionBatteryReservePlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Dron Görev Pil Rezerv Planlayıcı',
    subtitle: 'Güvenli dönüş marjlarını, rüzgar etkilerini ve uçuş yarıçapını hesaplayın',
    description: 'Rüzgar düzeltmesi ve dönüşsüz nokta eşikleri ile hassas İHA uçuş pil rezervi hesaplayıcısı.',
    inputs: {
      unitSystemLabel: 'Birim Sistemi',
      metricLabel: 'Metrik',
      imperialLabel: 'İngiliz Ölçü',
      presetLabel: 'Hızlı Görev Presetleri',
      batteryCapacityLabel: 'Pil Kapasitesi',
      batteryVoltageLabel: 'Nominal Voltaj',
      averageCurrentLabel: 'Ortalama Seyir Akımı',
      cruiseSpeedLabel: 'Hava Seyir Hızı',
      oneWayDistanceLabel: 'Tek Yön Hedef Mesafesi',
      targetHoverTimeLabel: 'Hedef Bölge Çalışma Süresi',
      windSpeedLabel: 'Rüzgar Hızı',
      windDirectionLabel: 'Gidişe Göre Rüzgar Yönü',
      windHeadwindLabel: 'Gidişte Karşı Rüzgar',
      windTailwindLabel: 'Gidişte Arka Rüzgar',
      windCrosswindLabel: 'Yan Rüzgar',
      reservePolicyLabel: 'Güvenlik Rezervi Tamponu',
    },
    presets: {
      mappingSurvey: 'Haritalama ve Fotogrametri',
      fpvRecon: 'FPV Uzun Menzil Keşif',
      cinematicInspection: 'Sinematik Yapı Denetimi',
      microRecon: 'Mikro Dron Keşif Görevi',
    },
    results: {
      totalCapacityEnergy: 'Toplam Kapasite Enerjisi',
      usableEnergy: 'Kullanılabilir Görev Enerjisi',
      reserveEnergyBuffer: 'Yedek Enerji Tamponu',
      totalAutonomyTime: 'Toplam Uçuş Otonomisi',
      maxSafeMissionRadius: 'Dönüşsüz Nokta Yarıçapı',
      outboundLegTime: 'Gidiş Uçuş Süresi',
      targetHoverTime: 'Hedefte Askıda Kalma Süresi',
      returnLegTime: 'Dönüş Uçuş Süresi',
      totalMissionTime: 'Toplam Transit Süresi',
      remainingEnergyLanding: 'İnişte Tahmini Pil Seviyesi',
      feasibilityStatus: 'Görev Uygulanabilirlik Değerlendirmesi',
    },
    statusBadges: {
      optimal: 'Optimum Enerji Rezerv Marjı',
      tight: 'Kısıtlı Rezerv Uyarısı',
      critical: 'Kritik Enerji Alarmı',
      exceeded: 'Güvenli Kapasiteyi Aşan Görev',
    },
    chart: {
      batteryProfileTitle: 'Pil Enerji Tüketim Profili',
      outboundSegment: 'Gidiş Uçuş Etabı',
      targetSegment: 'Hedefte Askıda Kalma',
      returnSegment: 'Eve Dönüş Uçuşu',
      reserveSegment: 'Güvenlik Rezervi Tamponu',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'Karşı Rüzgarda Aerodinamik Güç Kayıpları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Karşı rüzgara karşı uçuş, yer hızını korumak için daha fazla açı gerektirir ve motorların güç tüketimini artırır.',
    },
    {
      type: 'title',
      text: 'Hedef Bölgede Çalışma Süresinin Hesaplanması',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Haritalama ve denetim dronları hedef üzerinde askıda kalır ve dönüş uçuşundan önce enerji tüketir.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
