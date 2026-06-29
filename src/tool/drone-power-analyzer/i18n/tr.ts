import type { DronePowerAnalyzerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'insansiz-guc-analizi';
const title = 'Drone Güç Analizörü: FPV için İtme ve Ağırlık Oranı Hesaplayıcı';
const description = 'FPV drone kurulumunuz için kritik itme-ağırlık oranını hesaplayın. Anında uçuş profili önerileri, görsel güç göstergesi alın ve sinematik, freestyle veya yarış için optimize edin.';

const faqItems = [
  {
    question: 'İtme-ağırlık oranı nedir ve neden önemlidir?',
    answer: 'İtme-ağırlık oranı, dronunuzun üretebileceği toplam itme kuvvetinin toplam kalkış ağırlığına (AUW) bölünmesidir. Dronunuzun uçuş sırasında nasıl hissettireceğini belirleyen en önemli metriktir - yavaş ve stabil (sinematografi) ile ultra-tepkisel (yarış) arasında değişir.',
  },
  {
    question: 'Freestyle uçuş için ideal oran ("sweet spot") nedir?',
    answer: 'Akıcı freestyle uçuşu için ideal nokta 4:1 ile 6:1 arasındadır. 4:1 oranı iyi bir stabilite ile mükemmel çeviklik sağlarken, 6:1 oranı son derece tepkiseldir ancak dar alanlarda hassas gaz kontrolü gerektirir.',
  },
  {
    question: 'Bunu sinematik çekim kurulumları için kullanabilir miyim?',
    answer: 'Evet. Akıcı ve yavaş sinematik çekimler için 2:1 ile 3:1 arasında bir oran hedefleyin. Bu, dronun stabil ve öngörülebilir kalmasını sağlar. Daha düşük oranların kontrolü zorlaşırken, daha yüksek oranlar yavaş hareketler için fazla "hırçın" hissettirecektir.',
  },
  {
    question: 'Oranım 8:1\'in üzerindeyse ne olur?',
    answer: '8:1\'in üzerindeki oranlarda dronunuz tam bir yarış makinesidir - son derece tepkisel ve uçurması zordur. Sadece deneyimli pilotlar bu kurulumları denemelidir. Yarış kapıları ve hız denemeleri için harikadır, ancak iç mekanlarda tehlikelidir.',
  },
  {
    question: 'Batarya ağırlığını AUW\'ye dahil etmeli miyim?',
    answer: 'Evet. AUW (Toplam Kalkış Ağırlığı), tüm bileşenlerin kurulu olduğu dronun toplam ağırlığıdır: gövde, motorlar, ESC\'ler, uçuş kontrol kartı, kamera, batarya, pervaneler - her şey. Anında ağırlık eklemek için batarya hazır ayarlarını kullanın.',
  },
];

const howToSteps = [
  {
    name: 'Motor Konfigürasyonunu Seçin',
    text: 'Kurulumunuzun Quad (4), Hexa (6) veya Octo (8) motor konfigürasyonu olup olmadığını seçin. Bu çarpan, toplam itme kuvveti için kritiktir.',
  },
  {
    name: 'Motor İtme Kuvvetini Girin',
    text: 'Her bir motorun üretebileceği maksimum itme kuvvetini (gram cinsinden) girin. Bunu motor teknik özelliklerinde bulabilir veya hızlı hazır ayarları kullanabilirsiniz.',
  },
  {
    name: 'Toplam Ağırlığı Ayarlayın',
    text: 'Dronunuzun toplam kalkış ağırlığını (AUW) girin - gövde, motorlar, batarya, kamera, her şey. Anında ağırlık ayarı için batarya hazır ayarlarını kullanın.',
  },
  {
    name: 'Sonuçları Okuyun',
    text: 'Hesaplayıcı anında itme-ağırlık oranınızı, uçuş profili uygunluğunu (Sinematik, Freestyle, Yarış) ve kurulumunuz için kişiselleştirilmiş bir öneri gösterir.',
  },
];

const schemas: DronePowerAnalyzerLocaleContent['schemas'] = [
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

export const content: DronePowerAnalyzerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    motorConfiguration: 'Motor Konfigürasyonu',
    motorCount: 'Motor Sayısı',
    thrustPerMotor: 'Motor Başına İtme (maks)',
    thrustUnit: 'g',
    quad: 'Quad (4)',
    hexa: 'Hexa (6)',
    octo: 'Octo (8)',
    motorPresets: 'Hızlı Motor Hazır Ayarları',
    presetMotor450: '2204 2300kv (4S) ~450g',
    presetMotor600: '2306 2450kv (4S) ~600g',
    presetMotor850: '2306 2450kv (6S) ~850g',
    presetMotor1000: '2507 1850kv (6S) ~1000g',
    weightConfiguration: 'Ağırlık Konfigürasyonu',
    auwLabel: 'Toplam Kalkış Ağırlığı (AUW)',
    weightUnit: 'g',
    switchToLbs: 'lbs\'ye Geç',
    switchToGrams: 'g\'ye Geç',
    batteryPresets: 'Batarya Ağırlığı Ekle',
    presetTattu4s: 'Tattu 4S 1550mAh (+182g)',
    presetTattu6s: 'Tattu 6S 1100mAh (+231g)',
    presetGnb4s: 'GNB 4S 850mAh (+118g)',
    presetGnb6s: 'GNB 6S 1100mAh (+205g)',
    totalThrust: 'Toplam İtme',
    twRatio: 'İtme-Ağırlık Oranı',
    powerMeter: 'Güç Göstergesi',
    flightProfiles: 'Uçuş Profili Değerlendirmesi',
    cinematicLabel: 'Sinematik',
    freestyleLabel: 'Freestyle',
    racingLabel: 'Yarış',
    proRacingLabel: 'Pro Yarış',
    suitable: 'Uygun',
    notSuitable: 'Uygun Değil',
    recommendationLabel: 'Uçuş Stili Önerisi',
    recommendation_low: '2:1\'in altındaki bir oranla dronunuz stabilite sorunları yaşayacaktır. Daha iyi performans için ağırlığı azaltmayı veya motorları yükseltmeyi düşünün.',
    recommendation_cinematic: '{ratio}:1 oranıyla bu, yumuşak ve kontrollü hareketlere sahip ağır sinematik çekimler için idealdir. Yavaş ve planlı kamera çalışmaları için mükemmeldir.',
    recommendation_freestyle: '{ratio}:1 oranı, freestyle uçuş için ideal noktadır. Hareketler için stabiliteyi korurken mükemmel çeviklik sağlar.',
    recommendation_racing: '{ratio}:1 oranıyla performans freestyle alanındasınız. Dar alanlarda ve yüksek hızlı manevralarda gaz kontrolü kritiktir.',
    recommendation_extreme: '{ratio}:1 oranıyla bu bir yarış makinesidir. Son derece tepkiseldir - sadece açık alanlarda deneyimli pilotlar içindir.',
    compareMode: 'Kurulumları Karşılaştır',
    scenario1: 'Kurulum A',
    scenario2: 'Kurulum B',
    addComparison: 'Karşılaştırma Ekle',
    tooltipTWRatio: 'İtme-ağırlık oranı, toplam itme kuvvetinin dronun ağırlığına bölünmesidir. Daha yüksek bir oran, daha hızlı ivmelenme ve daha tepkisel kontrol anlamına gelir.',
    tooltipFreestyle: 'Freestyle uçuş için "ideal nokta" 4:1 ile 6:1 arasıdır; bu, çeviklik ve kontrol arasındaki en iyi dengeyi sağlar.',
    badge_unstable: 'Stabil Değil',
    badge_cinematic: 'Sinematik',
    badge_sweetSpot: 'İdeal Nokta',
    badge_racing: 'Yarış',
    badge_extreme: 'Ekstrem',
    batteryName_tattu4s: 'Tattu 4S',
    batteryName_tattu6s: 'Tattu 6S',
    batteryName_gnb4s: 'GNB 4S',
    batteryName_gnb6s: 'GNB 6S',
  },
  seo: [
    {
      type: 'title',
      text: 'FPV Dronlar için İtme-Ağırlık Oranını Anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>İtme-ağırlık oranı</strong>, FPV drone yapımında belki de en kritik metriklerden biridir. Ancak birçok pilot bunu göz ardı eder, bu da beklenen gibi davranmayan kurulumlara yol açar. Bu hesaplayıcı, hesaplamayı basitleştirir ve kurulumunuzun uçarken nasıl hissettireceğini size tam olarak gösterir.',
    },
    {
      type: 'title',
      text: 'İtme-Ağırlık Oranı Neden Önemlidir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dronunuzun oranı üç temel şeyi belirler: <strong>stabilite</strong>, <strong>tepkisellik</strong> ve <strong>hız</strong>. 2:1 oranı hantal ve stabil hissettirir. 6:1 oranı hırçın ve çevik hissettirir. 10:1 oranı ise tam bir yarış makinesidir. Kurulumunuzun bu spektrumda nerede olduğunu anlamak, doğru uçuş stilini seçmenize yardımcı olur.',
    },
    {
      type: 'title',
      text: 'Uçuş Profilleri Açıklaması',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sinematik (2:1 - 4:1)</strong>: Ağır, stabil, yavaş. Yumuşak kamera hareketleri ve yük taşıyan kurulumlar için idealdir.',
        '<strong>Freestyle (3.5:1 - 6.5:1)</strong>: Dengeli ideal nokta. Hareketler için yeterince tepkisel, kontrol için yeterince stabildir.',
        '<strong>Yarış (5:1 - 8:1)</strong>: Hızlı ve çevik. Yarış kapıları ve agresif manevralar için tasarlanmıştır.',
        '<strong>Pro Yarış (7:1+)</strong>: Ekstrem performans. Sadece açık alanlarda uzman pilotlar içindir.',
      ],
    },
    {
      type: 'title',
      text: 'İtme-Ağırlık Oranı Nasıl Hesaplanır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Formül basittir: <strong>oran = (Motor Başına İtme × Motor Sayısı) / Toplam Kalkış Ağırlığı</strong>. Örneğin, 800g ağırlığında, 600g itme gücüne sahip motorları olan bir Quad (2.400g toplam itme) 3:1 oranına sahiptir. Bu freestyle alanıdır.',
    },
    {
      type: 'title',
      text: 'Kurulumunuz İçin Doğru Oranı Seçmek',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kendinize şunu sorun: <em>Nasıl uçacağım?</em> Yavaş sinematik çekimler mi? Agresif freestyle hareketleri mi? Yüksek hızlı yarış mı? Yanıtınız ideal oranınızı belirler. Çoğu FPV pilotu, kontrol ve heyecan arasındaki en iyi dengeyi sunduğu için 4:1 ile 6:1 arasında karar kılar.',
    },
    {
      type: 'paragraph',
      html: 'Unutmayın: daha yüksek bir oran "daha iyi" anlamına gelmez. "Daha tepkisel" anlamına gelir. Yarış dronunda bu esastır. Sinematik bir kurulumda ise bu bir dezavantajdır. Bilinçli seçim yapın.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
