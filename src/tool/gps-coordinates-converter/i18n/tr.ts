import type { GpsCoordinatesConverterLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'gps-koordinat-donusturucu';
const title = 'ArduPilot ve INAV Icin GPS Koordinat Donusturucu';
const description = 'GPS koordinatlarını Ondalık Derece (DD), Derece Dakika Saniye (DMS) ve GPS donanım formatları arasında dönüştürün. ArduPilot ve INAV için gereklidir.';

const faqItems = [
  {
    question: 'What is the difference between DD and DMS?',
    answer: `DD (Decimal Degrees) uses a single number with decimals (e.g., 51.50). DMS (Degrees, Minutes, Seconds) divides the degree into sexagesimal fractions (e.g., 51° 30' 0").`,
  },
  {
    question: 'Why are negative coordinates used?',
    answer: 'In the Decimal system (DD), latitudes south of the Equator and longitudes west of Greenwich are indicated with a negative sign to facilitate mathematical calculations.',
  },
  {
    question: 'How much precision do I lose when converting?',
    answer: 'Our tool uses double-precision floating point. With 6 decimals in DD, the precision is about 11 centimeters, which is more than enough for drones and civil navigation.',
  },
  {
    question: 'Does this tool work offline?',
    answer: 'Yes, once the page is loaded, all conversion logic is local (client-side). Only the map requires a connection to download new tiles.',
  },
];

const schemas: GpsCoordinatesConverterLocaleContent['schemas'] = [
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
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Input Coordinates',
        text: 'Enter your coordinates in either Decimal Degrees (DD) or Degrees, Minutes, Seconds (DMS) format.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Review Conversion',
        text: 'The tool instantly displays the converted coordinates in all supported formats.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify on Map',
        text: 'Check the map visualization to ensure the coordinates point to the correct location.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Copy Result',
        text: 'Copy the converted coordinates to your clipboard for use in navigation systems or mission planning.',
      },
    ],
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


export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Referans Kılavuzları',
  ui: {
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Referans Kılavuzları',
    latitude: 'Enlem',
    longitude: 'Boylam',
    decimalDegrees: 'Ondalık Derece (DD)',
    degreesMinutesSeconds: 'Derece, Dakika, Saniye (DMS)',
    gpsHardware: 'GPS Donanım Formatı (Raw)',
    copy: 'Kopyala',
    copied: 'Kopyalandı!',
    invalidCoordinate: 'Geçersiz Koordinat',
    pasteHardwareMapFormat: 'Ham (raw) donanım verisini yapıştırın (örn. 404306300, -739981800)',
    validation: {
      latRange: 'Enlem -90 ile 90 arasında olmalıdır.',
      lonRange: 'Boylam -180 ile 180 arasında olmalıdır.',
      invalidFormat: 'Format tanınamadı. Lütfen girişinizi kontrol edin.',
    },
  },
  seo: [
    {
      type: 'title',
      text: 'GPS Koordinatlarını Anlamak: Drone Navigasyonu İçin Vazgeçilmez Bir Araç',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Otonom drone uçuşu, havadan haritalama veya kaybolan ekipmanı kurtarma söz konusu olduğunda hassasiyet ve tekdüzelik (standartlaşma) çok önemlidir. GPS koordinatları navigasyonun omurgasını oluşturur, ancak farklı sistemler (Betaflight, INAV, ArduPilot, Google Haritalar gibi) farklı formatlar kullanır. <strong>GPS Koordinat Dönüştürücümüz</strong> bu boşluğu kapatarak ara noktalarınızın (waypoint\'lerinizin) tam olarak istediğiniz yere inmesini sağlar.',
    },
    {
      type: 'title',
      text: 'Bilmeniz Gereken Üç Temel GPS Formatı',
      level: 3,
    },
    {
      type: 'title',
      text: '1. Ondalık Derece (Decimal Degrees - DD)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Günümüzde <strong>Google Haritalar</strong>, modern akıllı telefonlar ve çoğu web tabanlı harita hizmeti tarafından yaygın olarak benimsenen, dünyadaki en yaygın formattır. Konumu basit bir ondalık sayı olarak ifade eder (örn. <code>40.7128, -74.0060</code>). Bilgisayarlar tarafından kopyalanması, yapıştırılması ve işlenmesi son derece kolaydır.',
    },
    {
      type: 'list',
      items: [
        'Pozitif enlemler (latitude) kuzey yarımkürededir; negatifler güneydedir.',
        'Pozitif boylamlar (longitude) Başlangıç Meridyeni\'nin (Prime Meridian) doğusundadır; negatifler ise batısındadır.',
      ],
    },
    {
      type: 'title',
      text: '2. Derece, Dakika, Saniye (Degrees, Minutes, Seconds - DMS)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Denizcilik, havacılık navigasyonu ve eski topografik haritalarda kullanılan geleneksel formattır (örn. <code>40° 42\' 46.08" K, 74° 0\' 21.6" B</code>). Dünyayı 360 dereceye ayırarak basılı haritalarda insan navigasyonuna daha sezgisel bir yaklaşım sunar (her derece 60 dakikaya ve her dakika 60 saniyeye bölünür). Ancak, özel sembollerinden dolayı otonom uçuşları programlarken dijital olarak yazmak zahmetli olabilir.',
    },
    {
      type: 'title',
      text: '3. GPS Donanım (Hardware) / Ham (Raw) Format (ArduPilot / INAV)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'CLI (Komut Satırı Arayüzü) üzerinden doğrudan yapılandırmalar aldığınızda, ham Blackbox (Karatahta) uçuş loglarını incelediğinizde veya ArduPilot gibi sistemlerle MAVLink aracılığıyla etkileşime girdiğinizde, koordinatların genellikle büyük tam sayılar olarak temsil edildiğini görürsünüz (örn. <code>407128000, -740060000</code>).',
    },
    {
      type: 'paragraph',
      html: 'Bunun nedeni, mikro denetleyicilerin virgüllü sayılar (float) yerine tam sayıları (integer) çok daha hızlı ve hassas bir şekilde hesaplayabilmesidir. Temel olarak ondalık derece değerinin <strong>10.000.000 (1e7)</strong> ile çarpılmasıyla oluşturulur. Bu aracımız, verileri zahmetsizce bu formata ve bu formattan DD/DMS\'e dönüştürebildiği için Blackbox verilerinin analizinde ideal çözüm sunar.',
    },
    {
      type: 'title',
      text: 'Drone Pilotlarının Bu Dönüştürücüye Neden İhtiyacı Var?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu dönüştürücünün en iyi dostunuz haline geleceği birkaç kritik senaryo şunlardır:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kayıp Drone Kurtarma:</strong> OSD\'niz (Ekran Üstü Gösterge) veya Taranis/Radiomaster vericiniz (kumandanız) çoğu zaman bilinen son koordinatları DD veya DMS formatında gösterir. Pahalı drone\'unuzu bulmak için bunu hızlıca Google Haritalar formatına çevirip bir iğne (pin) atabilirsiniz.',
        '<strong>Ara Nokta (Waypoint) Planlaması:</strong> Mission Planner veya QGroundControl gibi yazılımlarda görev (mission) planlamak yüksek hassasiyet gerektirir. Klasik bir ölçüm haritasındaki DMS koordinatlarını dönüştürmek, drone\'unuzun tam olarak özel mülk sınırlarının dışından dolaşarak güvenli ölçüm yapmasını sağlar.',
        '<strong>Yazılım (Firmware) Ayarları:</strong> CLI üzerinden ev konumu (RTH/Return to Home) ayarlarken, bazı yazılımlar sadece ham GPS formatına (derecenin on milyonda biri hassasiyetinde tam sayılarla) izin verir.',
      ],
    },
    {
      type: 'title',
      text: 'Koordinat Hassasiyetini Çözmek: Kaç Ondalık Basamağa İhtiyacınız Var?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ondalık sayıların gerçek dünya mesafelerine etkisi (ekvatorda) şu şekildedir:',
    },
    {
      type: 'list',
      items: [
        '<strong>1 Ondalık Basamak</strong> (örn. 40.1): Yaklaşık 111 kilometre hata payı.',
        '<strong>3 Ondalık Basamak</strong> (örn. 40.123): Yaklaşık 110 metre (Bir mahalle büyüklüğü).',
        '<strong>5 Ondalık Basamak</strong> (örn. 40.12345): Yaklaşık 1.1 metre (Güvenli eve dönüş (RTH) ve standart tüketici dronlarını bulmak için yeterli).',
        '<strong>7 Ondalık Basamak</strong> (örn. 40.1234567): Yaklaşık 11 milimetre (Profesyonel RTK haritalama/ölçüm sınıfı hassasiyet).',
      ],
    },
    {
      type: 'paragraph',
      html: 'Açık bir alanda uçarken, çoğu standart M8N veya M10 GPS modülü virgülden sonra 5. veya 6. basamağa (yaklaşık 1-2 metre) kadar hassasiyet sağlar. Tam ve doğru bir kurtarma operasyonu için kopyalama/kaydetme işlemi yaparken en az 6 basamağı tuttuğunuzdan emin olun.',
    },
  ],
  faq: faqItems,
  bibliography: [
    { name: 'ArduPilot GPS Entagrasyon Belgesi', url: 'https://ardupilot.org/copter/docs/common-positioning-landing-page.html' },
    { name: 'Ondalık Yüzdeler (Decimal Degrees) ve Dönüşüm (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Decimal_degrees' },
  ],
  howTo: [
    {
      name: 'Formatı Tanımlayın',
      text: 'Verinizin neye benzediğini bulun. 40.7128, -74.0060 (şeklindeyse DD formatı), derece işareti varsa 40°42\'46"N (DMS formatı), noktasız safi 407128000 gibi dev bir sayıysa Raw donanım formatıdır.',
    },
    {
      name: 'Koordinat Girişinizi Yapın',
      text: 'Mevcut verinizi az önce formatını bulduğunuz 3 kutudan uygun olana sadece yazın veya yapıştırın.',
    },
    {
      name: 'Anlık Dönüşümü Gözlemleyin',
      text: 'Butona basmanıza gerek kalmaz, siz veriyi kutulardan birine girdiğiniz an diğer iki kutu canlı olarak sonucu hesaplayıp ekranda size sunar.',
    },
    {
      name: 'Kopyalayın ve Kullanın',
      text: 'Çıktı almak istediğiniz sonucun kutusunun dibindeki "kopyala" (copy) ikonuna basıp ardından Maps, Mission Planner veya CLI ekranına yapıştırabilirsiniz.',
    },
  ],
  schemas,
};
