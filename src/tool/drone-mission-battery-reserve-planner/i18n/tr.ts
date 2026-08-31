import type { DroneMissionBatteryReservePlannerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'dron-gorev-pil-rezerv-planlayici';
const title = 'Dron Görev Pil Rezerv Planlayıcı';
const description = 'İHA görevleri için güvenli eve dönüş pil rezerv marjlarını, karşı rüzgar güç kayıplarını ve güvenli uçuş yarıçapını hesaplayın.';

const faqItems = [
  {
    question: 'Karşı rüzgara karşı uçmak neden daha fazla enerji tüketir?',
    answer: 'Karşı rüzgarda uçmak, hava direncini yenmek ve yer hızını korumak için daha dik bir eğim açısı gerektirir ve motor akım çekimini doğrusal olmayan şekilde artırır.',
  },
  {
    question: 'Hedef bölgedeki askıda kalma süresi geri dönüş noktasını nasıl etkiler?',
    answer: 'Hedefte harcanan askıda kalma süresi, kalan güvenli gidiş-dönüş menzili hesaplanmadan önce doğrudan kullanılabilir pil enerjisinden düşülür.',
  },
  {
    question: 'Yüksek yük altında LiPo pillerde voltaj düşüşüne ne sebep olur?',
    answer: 'Yüksek akım çekimi, lityum hücrelerinin iç direnç kayıplarını artırarak efektif kullanılabilir Watt-saat kapasitesini düşürür.',
  },
];

const howToSteps = [
  {
    name: 'Pil ve İtki Özelliklerini Girin',
    text: 'Pil kapasitesini mAh, nominal voltajı ve ortalama seyir akımını girin.',
  },
  {
    name: 'Mesafe ve Askıda Kalma Süresini Ayarlayın',
    text: 'Gidiş mesafesini ve hedef bölgedeki tahmini askıda kalma süresini belirtin.',
  },
  {
    name: 'Rüzgar Hızını ve Yönünü Yapılandırın',
    text: 'Rüzgar hızını ve gidiş yönüne göre açısını seçin.',
  },
  {
    name: 'Güvenli Yarıçapı ve Telemetriyi İnceleyin',
    text: 'Hesaplanan geri dönüş noktasını, bölüm bazında güç tüketimini ve inişteki pil seviyesini inceleyin.',
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
    subtitle: 'Güvenli eve dönüş rezervlerini ve uçuş yarıçapını hesaplayın',
    description: 'Rüzgar düzeltmeleri ve geri dönüş noktası eşikleri ile hassas İHA pil planlaması.',
    sections: {
      batteryPropulsion: '1. Pil ve İtki Sistemi',
      flightAtmosphere: '2. Uçuş Profili ve Atmosfer',
    },
    inputs: {
      unitSystemLabel: 'Birim Sistemi',
      metricLabel: 'Metrik',
      imperialLabel: 'İngiliz',
      presetLabel: 'Hızlı Görev Şablonları',
      batteryCapacityLabel: 'Pil Kapasitesi',
      batteryVoltageLabel: 'Nominal Voltaj',
      averageCurrentLabel: 'Ortalama Seyir Akımı',
      cruiseSpeedLabel: 'Hava Seyir Hızı',
      oneWayDistanceLabel: 'Tek Yön Hedef Mesafesi',
      targetHoverTimeLabel: 'Hedef Bölge Askı Süresi',
      windSpeedLabel: 'Rüzgar Hızı',
      windDirectionLabel: 'Gidişe Göre Rüzgar Yönü',
      windHeadwindLabel: 'Gidişte Karşı Rüzgar',
      windTailwindLabel: 'Gidişte Arka Rüzgar',
      windCrosswindLabel: 'Yan Rüzgar',
      reservePolicyLabel: 'Güvenlik Rezerv Tamponu',
    },
    presets: {
      mappingSurvey: 'Fotogrametri ve Haritalama',
      fpvRecon: 'FPV Uzun Menzil Keşif',
      cinematicInspection: 'Sinematik Yapı Denetimi',
      microRecon: 'Mikro Dron Görevi',
      surveyMeta: 'haritalama',
      scoutMeta: 'keşif',
      hoverMeta: 'askıda kalma',
    },
    results: {
      totalCapacityEnergy: 'Toplam Enerji Kapasitesi',
      usableEnergy: 'Kullanılabilir Görev Enerjisi',
      reserveEnergyBuffer: 'Yedek Enerji Tamponu',
      totalAutonomyTime: 'Toplam Uçuş Otonomisi',
      maxSafeMissionRadius: 'Geri Dönüş Noktası Yarıçapı',
      outboundLegTime: 'Gidiş Uçuş Süresi',
      targetHoverTime: 'Hedef Askı Süresi',
      returnLegTime: 'Dönüş Uçuş Süresi',
      totalMissionTime: 'Toplam Transit Süresi',
      remainingEnergyLanding: 'İnişte Tahmini Pil Seviyesi',
      feasibilityStatus: 'Görev Uygulanabilirlik Değerlendirmesi',
      voltageSagSubLabel: 'Voltaj düşüşü',
      maxRadiusSubLabel: 'Askı süresi dahil maks güvenli yarıçap',
      powerSubLabel: 'Güç',
    },
    statusBadges: {
      optimalTitle: 'OPTİMAL ENERJİ REZERV MARJI',
      optimalSubtitle: 'İniş için yeterli rezerv marjına sahip güvenli uçuş profili',
      tightTitle: 'DAR ENERJİ REZERV MARJI',
      tightSubtitle: 'Düşük iniş rezervi, pil voltajını yakından takip edin',
      criticalTitle: 'KRİTİK ENERJİ UYARISI',
      criticalSubtitle: 'Rezerv sınırı aşıldı, hemen eve dönüşü başlatın',
      exceededTitle: 'GÖREV GÜVENLİ KAPASİTEYİ AŞIYOR',
      exceededSubtitle: 'Görevi güvenle tamamlamak için yetersiz pil enerjisi',
    },
    chart: {
      batteryProfileTitle: 'DOĞRUSAL OLMAYAN ENERJİ DAĞILIM PROFİLİ',
      modelTitle: 'AERODİNAMİK GÜÇ VE RÜZGAR MODELİ',
      windLabel: 'Rüzgar',
      homeNode: 'EV',
      targetNode: 'HEDEF',
      landNode: 'İNİŞ',
      launchPadLabel: 'Kalkış noktası',
      surveyHoverLabel: 'Hedefte askı',
      safeRadiusLabel: 'Güvenli yarıçap',
      outboundSegment: 'Gidiş',
      targetSegment: 'Askıda kalma',
      returnSegment: 'Dönüş',
      reserveSegment: 'Rezerv',
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
      html: 'İHA uçuş güvenliği doğrusal olmayan fizik kurallarına dayanır. Karşı rüzgarda uçmak, sürtünmeyi yenmek ve yer hızını korumak için daha fazla açı gerektirir.',
    },
    {
      type: 'paragraph',
      html: 'Planlayıcımız rüzgar koşullarına göre her bölüm için güç tüketimini dinamik olarak hesaplar.',
    },
    {
      type: 'title',
      text: 'Hedef Bölgesindeki Askı Süresinin Hesaplanması',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Haritalama ve denetim görevleri hedef üzerinde askıda kalmayı gerektirir. Bu tüketim dönüş yarıçapı hesaplanmadan önce düşülür.',
    },
    {
      type: 'list',
      items: [
        'Uçuş sınırlarını hesaplamadan önce askı süresini girin.',
        'Karşı rüzgarda güç artışlarını dikkate alın.',
        'Yük altında LiPo hücre voltaj düşüşünü izleyin.',
        'Rezerv sınırına ulaşıldığında hemen dönüşü başlatın.',
      ],
    },
    {
      type: 'tip',
      title: 'LiPo Pillerde Voltaj Düşüşü Uyarısı',
      html: 'Yüksek akım çekimi iç direnç nedeniyle voltaj düşüşüne yol açarak kullanılabilir enerjiyi azaltır.',
    },
    {
      type: 'title',
      text: 'İHA Pil Rezervi Hesaplama Formülleri',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Parametre', 'Formül / Model', 'Birim'],
      rows: [
        ['Brüt Enerji', 'Kapasite (mAh) x Voltaj (V) / 1000', 'Watt-saat (Wh)'],
        ['Voltaj Düşüş Kaybı', 'Brüt Enerji x Sag Faktörü', 'Watt-saat (Wh)'],
        ['Rüzgarlı Güç', 'Baz Güç x (1 + 0.65 x RüzgarOranı)^1.3', 'Watt (W)'],
        ['Maks Güvenli Yarıçap', '(Kullanılabilir Enerji - Askı Enerjisi) / Km Başına Tüketim', 'Kilometre (km)'],
      ],
    },
    {
      type: 'title',
      text: 'İHA Uçuş Planlamasında En İyi Uygulamalar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En yüksek operasyonel güvenlik için uçuş öncesi hesaplamaları her zaman telemetri verileriyle doğrulayın.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
