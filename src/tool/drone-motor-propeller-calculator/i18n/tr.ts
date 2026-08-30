import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { DroneMotorPropellerLocaleContent } from '../entry';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'dron-motor-ve-pervane-hesaplayici';
const title = 'Dron Motor ve Pervane Hesaplayıcı';
const description = 'Motor KV değeri, pil voltajı, pervane geometrisi ve dron ağırlığından motor itiş kuvveti, yüklü RPM, adım hızı, güç ve akım çekimini hesaplayın.';

const ui = {
  "presetsHeader": "Bir uçuş profili seçin",
  "presetTinyCruiser": "Hafif micro cruiser 3.5 inç",
  "presetFreestyle": "Freestyle 5 inç",
  "presetLongRange": "Long range 7 inç",
  "presetCinelifter": "Cinelifter 8 motorlu",
  "unitHeader": "Görüntüleme birimleri",
  "metricUnit": "Metrik",
  "imperialUnit": "İmparatorluk",
  "setupHeader": "Motor sistemi ve gövde",
  "motorKvLabel": "Motor KV değeri (RPM/V)",
  "batteryVoltageLabel": "Pil voltajı",
  "propDiameterLabel": "Pervane çapı",
  "propPitchLabel": "Pervane adımı",
  "bladeCountLabel": "Kanat sayısı",
  "motorCountLabel": "Motor sayısı",
  "droneWeightLabel": "Uçuşa hazır ağırlık (RTF)",
  "benchDataHeader": "Üretici test noktası",
  "benchThrustLabel": "Motor başına itiş",
  "benchVoltageLabel": "Test voltajı",
  "optionalLabel": "İsteğe bağlı",
  "twoBlades": "2 kanatlı",
  "threeBlades": "3 kanatlı",
  "fourBlades": "4 kanatlı",
  "twoMotors": "2 motorlu",
  "fourMotors": "4 motorlu",
  "sixMotors": "6 motorlu",
  "eightMotors": "8 motorlu",
  "resultsHeader": "İtiş ve kaldırma dengesi",
  "estimatedLabel": "Fiziksel model tahmini.",
  "benchBasedLabel": "Test standı verisiyle kalibre.",
  "loadedRpmLabel": "Yüklü hız",
  "pitchSpeedLabel": "Teorik hatve hızı",
  "thrustPerMotorLabel": "Motor başına itiş",
  "totalThrustLabel": "Toplam statik itiş",
  "totalPowerLabel": "Tahmini güç",
  "totalCurrentLabel": "Tahmini akım",
  "thrustMarginLabel": "Kaldırma marjı",
  "hoverThrottleLabel": "Süzülme gazı",
  "sceneCaption": "yük altındaki pervane hızı",
  "underpoweredStatus": "Düşük marj",
  "workableStatus": "Kullanılabilir marj",
  "headroomStatus": "Güçlü marj",
  "underpoweredAdvice": "Toplam itiş kuvveti dron ağırlığının iki katından azdır. Rüzgarda ve ani manevralarda toparlanma kabiliyeti sınırlı olabilir.",
  "workableAdvice": "Normal uçuş için pratik yedek güç. Hesaplamaya güvenmeden önce uzun süreli süzülme sonrası motor sıcaklığını kontrol edin.",
  "headroomAdvice": "Cömert statik kaldırma rezervi. Kontrol tepkisini artırır ancak ESC lerden daha fazla akım çeker.",
  "sourceNote": "Test noktası yalnızca itişi kalibre eder. Güç ve akım model tahminleridir.",
  "modelSourceNote": "Test verisi yok. İtiş şeffaf katsayı modelini kullanır.",
  "manufacturerNote": "Mümkünse aynı motor ve pervane kombinasyonuna ait test verisini kullanın.",
  "modelNote": "Statik itiş, güç ve akım tahmindir. Gerçek sonuçlar hava yoğunluğu ve kayıplara bağlıdır.",
  "safetyNote": "Bu hesaplayıcıyı hiçbir zaman gerçek test standının yerine kullanmayın. Uçuştan önce sınırları doğrulayın.",
  "thrustAxisLabel": "İtiş yönü",
  "weightAxisLabel": "Dron ağırlığı",
  "clearBenchData": "Test verisini temizle"
};

const faq = [
  {
    "question": "Bu dron motor ve pervane hesaplayıcısı neleri hesaplar?",
    "answer": "Yüklü RPM, teorik adım hızı, motor başına ve toplam statik itiş, güç ve akımı KV, voltaj, pervane ve ağırlık verilerinden tahmin eder."
  },
  {
    "question": "Dron motoru ile pervane nasıl eşleştirilir?",
    "answer": "Üreticinin önerdiği KV ve pervane boyutlarıyla başlayın. Toplam itişi uçuş ağırlığıyla karşılaştırın ve uçuştan önce test standında kontrol edin."
  },
  {
    "question": "Üretici test verisi neden teorik modelden daha iyidir?",
    "answer": "Gerçek pervane geometrisini ve kayıpları içerir. Hesaplayıcı bu veriyi seçilen voltaja uyarlar."
  },
  {
    "question": "Pervane boyutu dron itiş kuvvetini nasıl etkiler?",
    "answer": "Statik itiş doğrudan çapa ve dönme hızına bağlıdır. Daha büyük pervane daha fazla hava iter ancak motordan daha fazla tork talep eder."
  },
  {
    "question": "Bu hesaplayıcı dronun güvenle uçacağını garanti eder mi?",
    "answer": "Hayır. Bu bir planlama aracıdır. Uçuştan önce gerçek akım ve sıcaklık değerlerini test standında doğrulayın."
  }
];

const howTo = [
  {
    "name": "Bir uçuş profili seçin",
    "text": "Başlangıç değerlerini yüklemek için dronunuza en yakın hazır ayarı seçin."
  },
  {
    "name": "Gövde ve pervane verilerini girin",
    "text": "Uçuş ağırlığını ve motor pervane özelliklerini metrik veya imparatorluk birimlerinde girin."
  },
  {
    "name": "Ölçülen test noktasını ekleyin",
    "text": "Test standı veriniz varsa, modeli kalibre etmek için motor başına itiş ve voltajı girin."
  }
];

const seo: SEOSection[] = [
  {
    type: 'title',
    text: 'Dron motoru ve pervane uyumu nasıl çalışır',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Motor ve pervane eşleşmesi dönme hızı, çap, adım, pil voltajı ve tork arasındaki dengedir. Bu araç statik kaldırma ve elektrik gereksinimini hesaplar.',
  },
  {
    type: 'title',
    text: 'Hesaplayıcının gösterdiği sonuçlar',
    level: 2,
  },
  {
    type: 'table',
    headers: ["Sonuç","Ne anlama gelir"],
    rows: [["Yüklü hız","Yük faktörü ile düşürülmüş boşta RPM tahmini"],["Statik itiş","Motor başına itiş ve toplam kaldırma gücü"],["Kaldırma marjı","Toplam statik itişin uçuş ağırlığına oranı"],["Güç ve akım","Seçilen voltaj için tahmini elektrik çekimi"]],
  },
  {
    type: 'title',
    text: 'Dron motor hesaplayıcısı nasıl kullanılır',
    level: 2,
  },
  {
    type: 'list',
    items: ["Motor KV ve pil voltajını girin.","Pervane çapı, adımı, kanat ve motor sayısını seçin.","Varsa üretici test standı verisini ekleyin.","Uçuştan önce akım ve sıcaklığı test standında doğrulayın."],
  },
  {
    type: 'title',
    text: 'Test verisinin önemi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Pervane itişi hava yoğunluğuna ve geometriye bağlıdır. Ölçülen test verileri en doğru kalibrasyonu sağlar. Sonucu aynı koşullarda motor ve pervane seçeneklerini karşılaştırmak için kullanın. Toplam ağırlık, yük altındaki voltaj, hız kontrol cihazı ve montaj şekli itişi ve akımı değiştirir. Test standında sıcaklık ile tüketimi ölçün ve ilk uçuştan önce güvenli bir pay bırakın. Başka bir modelin verilerini yalnızca referans kabul ederek kendi kurulumunuzu ayrıca doğrulayın.',
  },
  {
    type: 'tip',
    title: 'Test planı hazırlama',
    html: 'İlk uçuştan önce motor sıcaklığını ve akım çekimini test standında kontrol edin.',
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
