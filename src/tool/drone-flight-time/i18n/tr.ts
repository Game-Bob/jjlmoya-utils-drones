import type { DroneFlightTimeLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'drone-ucus-suresi-hesaplayici';
const title = 'LiPo LiIon Otonomisi Tahmini icin Drone Ucus Suresi Hesaplayici';
const description = 'mAh kapasitesine ve akım tüketimine göre dronunuzun uçuş süresini hesaplayın. Güvenli uçuşlar için LiPo pillerinizi optimize edin.';

const faqItems = [
  {
    question: 'Gerçek uçuş süresi neden hesaplanandan daha kısadır?',
    answer: 'Hesaplayıcı sabit tüketim varsayar. Sert manevralar, karşı rüzgar ve pil aşınması gerçek uçuş süresini %30\'a kadar azaltabilir.',
  },
  {
    question: 'Drone\'umu hangi voltajda indirmeliyim?',
    answer: 'İdeal olarak, dinlenme halinde hücre başına voltaj 3,5 V - 3,6 V seviyesine düştüğünde inin. Bu, önerilen %20 kalan kapasiteye karşılık gelir.',
  },
  {
    question: 'Drone\'lar için LiPo mu yoksa Li-Ion piller mi daha iyidir?',
    answer: 'LiPo piller yüksek anlık güç sağlar ve yarış ile akrobasi için idealdir. Li-Ion hücreler daha uzun dayanır ancak daha düşük çıkış gücüne sahiptir ve uzun, dengeli uçuşlara uygundur.',
  },
  {
    question: 'Hücre sayısı (S) uçuş süresini nasıl etkiler?',
    answer: 'Daha fazla hücre voltajı ve gücü artırır, ancak ağırlığı da artırır. Motorlar bu voltaja göre optimize edilmişse daha verimli olabilirler, fakat hücre sayısı tek başına daha uzun süreyi garanti etmez.',
  },
];

const howToSteps = [
  {
    name: 'Kapasiteyi belirleyin',
    text: 'Pil etiketini kontrol edin ve mAh değerini bulun (örneğin 1500, 2200 veya 4500).',
  },
  {
    name: 'Akım tüketimini tahmin edin',
    text: 'Drone\'unuzun ortalama akım tüketimini girin. Bu değeri bir test uçuşundan sonra OSD telemetrisinde bulabilirsiniz.',
  },
  {
    name: 'Güvenlik payını ayarlayın',
    text: 'Pili korumak ve iniş payı bırakmak için %20 ayırmanızı öneririz (değeri %80 olarak ayarlayın).',
  },
  {
    name: 'Sonucu görüntüleyin',
    text: 'Havada güvenle kalabileceğiniz kesin süreyi dakika ve saniye olarak görüntüleyin.',
  },
];

const schemas: DroneFlightTimeLocaleContent['schemas'] = [
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
];


export const content: DroneFlightTimeLocaleContent = {
  slug,
  title,
  description,
  ui: {
    batterySpecs: 'Pil Özellikleri',
    capacity: 'Kapasite',
    voltage: 'Voltaj (S Hücre)',
    safetyMargin: 'Güvenlik Marjı',
    landingHint: 'Hücre başına 3.5V - 3.7V\'de iniş yapın.',
    consumptionDynamics: 'Tüketim Dinamikleri',
    averageConsumption: 'Ortalama Tüketim',
    powerWatts: 'Güç (Watt)',
    efficiencyHint: 'Amper değiştiğinde, Watt\'lar S voltajına göre yeniden hesaplanır.',
    estimatedEfficiency: 'Tahmini Verimlilik',
    typicalEfficiencyHint: 'Tipik: 4-6 (Yarış), 8-12 (Sinematik/Uzun Mesafe).',
    safeFlight: 'Güvenli Uçuş',
    totalEnergy: 'Toplam Enerji',
    theoreticalTime: 'Teorik Süre (%0)',
    co2Footprint: 'CO2 Ayak İzi',
    autonomyChart: 'Otonomi Grafiği',
    chartSubtitle: 'Amper (A) vs. Zaman (dk)',
    chartLabel: 'Dakika',
  },
  seo: [
    {
      type: 'title',
      text: 'Drone Uçuş Süresi Hesaplayıcı: Tam Bir Otonomi Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Otonomi, insansız hava araçlarının tasarımı ve işletiminde tartışmasız en kritik faktördür. İster bir FPV yarış dronu pilotu, ister profesyonel hava fotoğrafçısı veya uzun mesafe tutkunu olun, ekipmanınızın havada ne kadar süre kalabileceğini tam olarak bilmek, görev güvenliği ve başarısı için hayati önem taşır. <strong>Uçuş süresi hesaplayıcımız</strong>, gerçekçi ve güvenli bir tahmin sağlamak için pil kapasitesi ve akım tüketimi gibi temel değişkenleri kullanır.',
    },
    {
      type: 'title',
      text: 'Pil Kapasitesi: mAh Açıklaması',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pil kapasitesi genellikle miliamper-saat (mAh) olarak ölçülür. Bu rakam, pilin ne kadar elektrik yükü depolayabileceğini gösterir. Örneğin, 1500 mAh\'lik bir pil, teorik olarak bir saat boyunca 1500 miliamper sağlayabilir. Tüketimin son derece yüksek olduğu drone dünyasında genellikle Amper (A) üzerinden konuşuruz. 1000 mAh tam olarak 1 Ah\'ye (Amper-saat) eşittir.',
    },
    {
      type: 'paragraph',
      html: 'Ancak sadece brüt kapasite tek faktör değildir. Voltaj (hücre veya \'S\' sayısı ile belirlenir) toplam gücü (Watt) doğrudan etkiler, ancak motor tüketimine dayalı zaman hesaplaması için Ah/Amper oranı, uçuş mühendisleri tarafından kullanılan en doğrudan metriktir.',
    },
    {
      type: 'title',
      text: 'Akım Tüketimi: Uçuş Sırasında Amper',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Motor tüketimi, uçuş sırasında en çok dalgalanan değişkendir. Bir drone\'u asılı tutmak (hover) ile agresif akrobatik manevralar yapmak aynı şey değildir. Her motor ve pervane kombinasyonunun bir verimlilik eğrisi vardır. Gaza sonuna kadar bastığınızda amper yükselir ve pilin ömrü önemli ölçüde kısalır.',
    },
    {
      type: 'list',
      items: [
        'Askıda Uçuş: Tüketim asgari ve sabittir, fotoğrafçılık için idealdir.',
        'Seyir Uçuşu: Aerodinamik direnç nedeniyle biraz artan tüketim.',
        'Agresif/FPV Uçuş: Tüketim zirveleri, ortalama tüketimi saniyeler içinde üç katına çıkarabilir.',
        'Drone Ağırlığı: Eklenen her bir gram, kaldırma kuvveti oluşturmak için motorun dönme hızının (RPM) artmasını gerektirir ve bu da amperi yükseltir.',
      ],
    },
    {
      type: 'title',
      text: 'Yüzde 80 Güvenlik Kuralı: LiPo Kimyasını Korumak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir LiPo (Lityum Polimer) pilini kapasitesinin %0\'ına kadar deşarj etmek, onu yok etmenin ve daha da kötüsü çökmeye neden olmanın en hızlı yoludur. Kimyasal olarak, pillerin voltajı kritik bir eşiğin (genellikle hücre başına 3.0V - 3.2V) altına düşerse geri dönüşü olmayan bir hasara uğrar.',
    },
    {
      type: 'paragraph',
      html: 'Bu nedenle her zaman bir <strong>güvenlik marjı kuralı</strong> uygularız. Hesaplayıcımız bu değeri ayarlamanıza izin verir, ancak şarjın %20\'si kaldığında iniş yapmanız önerilir. Bu, yalnızca pahalı pillerinizin ömrünü yüzlerce döngü uzatmakla kalmaz, aynı zamanda beklenmedik rüzgarlar durumunda veya inişi iptal edip tekrar denemeniz gerektiğinde hayati bir güç rezervi garanti eder.',
    },
    {
      type: 'tip',
      html: 'Drone pilleri soğuğa karşı çok hassastır. Kışın LiPo\'nun iç direnci artar ve bu da ortam sıcaklığı 15 derecenin altındaysa voltajın daha hızlı düşmesine neden olur. Kalkıştan önce pillerinizi daima ısıtın.',
    },
    {
      type: 'title',
      text: 'Matematiksel Uçuş Formülü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aracımız ağır işi sizin için yapsa da, hesaplamanın ardındaki mantığı bilmek önemlidir. Temel formül şudur:',
    },
    {
      type: 'paragraph',
      html: '<strong>Zaman (dk) = ((Kapasite mAh / 1000) * Güvenlik Faktörü) / Amper Tüketimi * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'Örneğin, 2200 mAh piliniz varsa, %20\'de iniş yapmak isterseniz (0.8 güvenlik) ve dronunuz ortalama 15 amper tüketirse: (2.2 * 0.8) / 15 * 60 = 7.04 dakikalık güvenli uçuşunuz olur.',
    },
    {
      type: 'title',
      text: 'Ağırlık Optimizasyonu ve Verimlilik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Daha büyük piller eklemenin getirdiği azalan bir verim noktası vardır. Pilin kendisi ağırlık kattığından, pil kapasitesini iki katına çıkarmak uçuş süresini iki katına çıkarmaz. Bu ekstra ağırlık, motorların daha hızlı dönmesini ve dolayısıyla daha fazla tüketmesini gerektirir. Bir noktada, eklenen ağırlık sağladığından daha fazla akım tüketerek genel sistem verimliliğini düşürür.',
    },
    {
      type: 'paragraph',
      html: 'Deneyimli pilotlar, "faydalı görev süresi" dediğimiz şeyi en üst düzeye çıkarmak için <em>Disc Loading</em> (pervane disk alanı ağırlık oranı) ve pil kapasitesi arasında mükemmel dengeyi ararlar.',
    },
    {
      type: 'title',
      text: 'Drone Türleri Arasındaki Farklılıklar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Mikro Dronlar (Whoops):</strong> Sadece 2-5 amper tüketirler, ancak pilleri 300-500 mAh civarındadır. Süreleri, düşük atalet ve yüksek devir nedeniyle genellikle kısadır (3-4 dk).',
    },
    {
      type: 'paragraph',
      html: '<strong>5 İnç Yarış Dronları:</strong> Yarış sırasında (120A pik değere kadar) acımasız tüketim yaparlar ve 1300 mAh\'lik bir pili sadece 2 dakika içinde tüketirler.',
    },
    {
      type: 'paragraph',
      html: '<strong>Uzun Mesafe Dronlar (Long Range):</strong> Verimlilik için optimize edilmiştir. LiPo\'lardan daha yüksek enerji yoğunluğuna sahip Lityum İyon (Li-Ion) hücreler kullanırlar ve bu da çok düşük tüketimle 30 ila 60 dakikalık uçuşlara izin verir.',
    },
    {
      type: 'tip',
      html: 'Daha az adımlı (pitch) pervanelere geçmek uçuş sürenizi artırabilir ancak maksimum hız ve tepkime süresinden ödün verirsiniz. %10-15 daha fazla otonomi elde etmek için en etkili ve en ucuz değişikliktir.',
    },
    {
      type: 'title',
      text: 'Bakım ve Depolama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hesaplamalarınızın doğru olması için pillerinizin iyi durumda olması gerekir. İç direnci yüksek bir pil çok ısınır ve gerçek kapasitesi hakkında "yalan" söyler. 48 saatten daha uzun süre uçmayacaksanız, pillerinizi her zaman depolama voltajında (hücre başına 3.8V-3.85V) saklayın.',
    },
    {
      type: 'paragraph',
      html: 'Sonuç olarak enerji yönetimi, fizik, kimya ve matematiği dengeleme sanatıdır. Uçuş seanslarınızı planlamak için hesaplayıcımızı düzenli olarak kullanın ve havadayken zamanın en değerli kaynağınız olduğunu asla unutmayın. İyi uçuşlar ve güvenli inişler dileriz!',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
