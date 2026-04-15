import type { AntennaLengthCalculatorLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';

const slug = 'rf-anten-uzunlugu-hesaplayici';
const title = 'FPV Dipol ve Kamci Icin RF Anten Uzunlugu Hesaplayici';
const description = '868MHz, 2.4GHz ve 5.8GHz antenleriniz için tam ölçümü hesaplayın. Drone menzilinizi artırın ve optimize edilmiş SWR (Durak Dalga Oranı) ile vericinizi yanmaktan koruyun.';

const faqItems = [
  {
    question: 'Niye tam belirlenen milimetrelere sadık anten oluşturulması istenmektedir?',
    answer: 'Çünkü gönderilen verinin sinyalleri dalga boyları çerçevesinde katlarıyla uyumlu salkımlar olarak eşlenirler, Şayet senin bakır veya tel bu rezonansın dengesine ebatınca sığmaz ve katılaşmazsa havaya gidecek yayılan veri veya enerji iletilemediğinde yuvadan gidemediyle, geri vericine darbe / çarpma vurdurtarak anında ölüm / cihaz yanığına sebebiyet verir.',
  },
  {
    question: 'Kısaltması Vf olan Velocity Fabtörü Hız İndisi Tam Manada Ne İşe Yarar?',
    answer: 'Şöyle söylemek mümkündür vericindeki hızların bir iletken kablodaki yada borudaykenki yol alış ivmesinin boşluk yani uzay-hava atmosferindeki en süratli ışık limitleri denkleminin bölünmesinin değeridir . Ebatlama kaba düzeltmeyle iletkende geciken saniye sapması oranıyla  ( %5 yavaşsa iletim ) anteni de %5 ufaltarak hizalamayı sağlar',
  },
  {
    question: 'Hangisinden Daha Çok Randuman Çıkarılır Dipol Mü Yoksa Çeyreklik Kamçı mı?',
    answer: 'Yarım dalgadan ibaret kollar şeklindeki Dipol net ve öngörü ile randuman verir, kamçı tabiri dedikleri sadece alıcının alt gövdesinde yararlanan toprak zemine güdümlü kısadır ancak drone veya aracında alan hacmi kalmadığında iyi tercih olarak o biçilir .',
  },
  {
    question: 'Bu iletken anten tellerini ince veyahut da kalın şeçimi anten sinyal yayılımımı oynatır değiştirirmi ?',
    answer: 'Tabiki  daha tok, geniş ve kalın yapılı olması iletilen frekansı bir az da olsa esnetme yapar yani ufak milimetrelik traşlama hatanızı da o esneklikle telafisini yedirmeye de yardımcı olabildiği üzere hafifçenden o iletken yüzü  Vf nize de dokunur oynatır.  Çoğu amatör ve maker 20 ve  22 numara ( Awg çap türüyle) gayet stabil neticeler barındırırlar',
  },
];

const howToSteps = [
  {
    name: 'Pek Tabi Önce Frekans',
    text: 'Doğrudan Megahertz (Mhz) veya yanda sunduğu en popüler Wi-Fi gibi Fpv gibi kolay tık kısa atamaları frekanstan tayin et ve seç.',
  },
  {
    name: 'Nasıl Kurulacağına Kararılma Tipi',
    text: 'Oluşturulacak türden seçeceğin için : Tam Takım ( ikiye oranlı dalgalık) 1 yada 2, mi Yoksam da sade basit Tek uç( çeyreklik yagıya denk gelen dikey düz) 1 veya 4  ü onayla.',
  },
  {
    name: 'Kaplama Veya Kablonun Kendi Menşei Seçimi',
    text: 'Kullandığın elemanın Çıplaklığı mı plastik kaplamasının (Pvc ) yoğunluğunu veya düz bakır metal boru cinsiyetini tıklayarak yazılımın sana Hız faktörünün daralmasını pay etmesini ver .',
  },
  {
    name: 'Sonuçtaki Ölçü ve Keskin Hassasiyetle Traşlama Makaslama',
    text: 'Bulduğun kolda kullanacağı ebat  uzunluğu hesabından kolu traşla. Daimi hatırla ki o boy lehime dayanan ( başucu uçundan kablo kaplamanın uç kök hizasına) kadarki tam traşlanmış açık kısımdır, lehimli plastkli kısmı katlama .',
  },
];

const schemas: AntennaLengthCalculatorLocaleContent['schemas'] = [
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

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Bibliyografik Referanslar',
  ui: {
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Bibliyografik Referanslar',
    signalParameters: 'Sinyal Parametreleri',
    antennaType: 'Anten Tipi',
    dipole: 'Dipol (1/2 λ)',
    whip: 'Kamçı (1/4 λ)',
    conductorMedium: 'İletken Malzemesi',
    totalLength: 'Toplam Uzunluk',
    branchLength: 'Kol Başına Uzunluk',
    secondaryResonance: 'İkincil Rezonans Noktaları',
    swrIdeal: 'İdeal SWR',
    impedance: 'Empedans',
    criticalNotice: 'Kritik Uyarı',
    criticalNoticeText: 'Kötü kesilmiş bir anten yüksek SWR üretir ve bu da vericinizin güç kademelerini saniyeler içinde aşırı ısıtıp tahrip edebilir.',
    dynamicScheme: 'Dinamik Şema (mm)',
    harmonicLabel: 'Harmonik',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Çıplak Bakır (0.95)',
    materialPvcInsulated: 'PVC İzoleli Kablo (0.92)',
    materialSolidRod: 'Katı Çubuk (0.97)',
    materialCoaxial: 'Koaksiyel Kablo (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Radyo Frekans (RF) Anten Uzunluğunuz Neden Önemlidir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Yarış dronlarının (FPV), uzun menzilli kumandaların (ELRS/Crossfire) ve hatta Wi-Fi yönlendiricinizin antenlerinin neden bu kadar spesifik uzunluklara sahip olduğunu merak ettiyseniz, cevap rezonans fiziğinde yatar. Anten sadece iletken bir tel parçası değildir; idare ettiği elektromanyetik dalga frekansı ile "uyum içinde" olması gereken bir bileşendir.',
    },
    {
      type: 'paragraph',
      html: 'Kendi anteninizi inşa ederken, ister 868MHz için bir <strong>dipol</strong>, ister 5.8GHz için bir <strong>kamçı anten</strong> olsun, hassasiyet milimetre ile ölçülür. Sadece 2 veya 3 mm\'lik bir hata, antenin verimsizleşmesine neden olarak Yüksek SWR (Durak Dalga Oranı) olarak bilinen duruma yol açabilir.',
    },
    {
      type: 'title',
      text: 'Temel Kavramlar: Dalga Boyu ve Rezonans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Radyo Frekansı (RF) ışık hızında hareket eder (saniyede yaklaşık 300.000 kilometre). Bir antenin enerjiyi optimum seviyede yayabilmesi veya alabilmesi için, fiziksel boyutları, dalganın tek bir tam döngüsünde katedilen mesafeyle, yani <strong>dalga boyu (λ)</strong> ile doğrudan bağlantılı olmalıdır.',
    },
    {
      type: 'paragraph',
      html: 'Dalga boyunu hesaplamanın temel formülü λ = v / f şeklindedir, burada \'v\' yayılma hızı, \'f\' ise frekanstır. Ancak gerçek dünyada elektrik, metallerde boşluğa göre biraz daha yavaş hareket eder. İşte <strong>Hız Faktörü (Vf)</strong> burada devreye girer.',
    },
    {
      type: 'list',
      items: [
        'Çıplak bakır: Vf değeri yaklaşık 0.95\'tir.',
        'İzoleli kablolar (PVC): Yalıtım dalgayı yavaşlatarak faktörü 0.92\'ye veya altına çeker.',
        'Katı bakır çubuklar: Daha kalın ve oldukça iletken olduklarından faktör 0.97\'ye kadar çok hafif bir artış gösterir.',
      ],
    },
    {
      type: 'title',
      text: 'Drone ve Maker Projelerinde Genel Anten Çeşitleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Yarım Dalga Dipol Anten (1/2 λ):</strong> Bu, birçok uygulama için altın standarttır. Çalışma frekansı dalga boyunun yarısını oluşturmak için birleşen iki koldan (radyasyon elemanları) müteşekkildir. "Donut" biçiminde ışıma paterni sunan dengeli bir antendir ve koaksiyel kablodan üretilmesi oldukça kolaydır.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Çeyrek Dalga Kamçı veya Monopol (1/4 λ):</strong> Bu tip tipik olarak radyo alıcılarında veya küçük boyutlu dronlarda görülür. Yalnızca tek bir radyasyon elemanı yer alır ve dalganın diğer yarısını "yansıtmak" üzere cihazın kendi şasesini veya toprak düzlemini (ground plane) kullanır. Uzunluğu tam olarak bir dipolün yarısına karşılık gelir ve "çeyrek dalga" adını buradan alır.',
    },
    {
      type: 'title',
      text: 'Kritik Frekanslar ve Uygulama Alanları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Her bir frekans bandı kendi özelliklerine sahiptir. Aracımız sayesinde ölçümleri hobide en çok kullanılan bantlar için düzenleyebilirsiniz:',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (FPV Video): Uzunluklar çok küçüktür (radyatör elemanda yaklaşık 12-13 mm civarı). Uçtarafta kalacak herhangi bir minik lehim fazlası bile performansı bozabilir.',
        '2.4 GHz (Kontrol ve Wi-Fi): Bağlantı kopmalarını (failsafe) engellemek adına anten performansının kilit rol oynadığı oldukça doygun bir banttır.',
        '868 MHz / 915 MHz (Özellikle Uzun Menzil): Team BlackSheep Crossfire ve ExpressLRS sistemlerince kullanılır. Antenler burada daha uzundur (kolların her biri yaklaşık 8 cm) ve maniaları daha kolay delebilir.',
        '433 MHz (UHF Haddi): Uzun yıllardaki menzil aşım standartı; Büyük boyutlu antenlerle km\'lerce uçuşlar için bir hayli uugundur.',
      ],
    },
    {
      type: 'title',
      text: 'Teknik Referans: SWR ve Kayıp Tablo Karşılıkları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tam verimli bir işlerlik için SWR oranı olabildiğince 1.0 \'a (Bire Bir) yanaşmalıdır, Aktarım gücünün SWR üzerinden etkilendiğinin grafiği buradadır:',
    },
    {
      type: 'table',
      headers: ['SWR (ROE Oranı)', 'Return Kaybı', 'Geri Yansıma Enerjisi', 'Durum-Karakteri'],
      rows: [
        ['1.0:1', '-∞ dB', '%0', '<strong>Mükemmel</strong>'],
        ['1.2:1', '-21 dB', '%0.8', 'Fazlasıyla İyi'],
        ['1.5:1', '-14 dB', '%4.0', 'Geçerli İş Görür'],
        ['2.0:1', '-9.5 dB', '%11.1', 'Tolere Edilir Son Limitler'],
        ['3.0:1', '-6.0 dB', '%25.0', '<strong>Can Alıcı-Riskli Hat</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'Ohm İfadesinin 50 Üzerindeki Önemi Nedir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dronlar üzerinde kumanda ve vtx elemanlarının oluşturduğu radyo devre bütünlükleri tam olarak karakteristik anlamda bir yapı olarak eşlenikken <strong>50 Ohm Empedans </strong> yapısı üzere tasarım kazanmışlardır.. Tüm açıklığı serbest alana sahip bir serbest alandaki rezonans tam randıman veren dipol anten tipik değeriyle 73 Ohmlar da direnç sergiler ama, onu dron üzerine dahil ettiğimiz zamanda yada kanat-kol açı ( Ters duran V tarzında) duruş açısınca yer değiştiği gibi 50 Ohm yapısında olan ve hedeflenen yollara evrilir yaklarşırlar, Ancak ve lakin 75 Ohm (TV eski anten girişlerinde bulunan klasik  ) bir takım teller kullanımları, cihaz donanım ve frekansa uygunluğu bozarak ne derece de iyi ölçümden kesin iseniz kesin gene bozulan uyum nedeniyle sinyal degradelerine iter..',
    },
    {
      type: 'title',
      text: 'Yüksek Durak Dalga Vurumu ( Yüksek SWR- ROE Tehlikeleri) ve Cihaz Güvencesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Buradaki değerlere niye bir ölçü için önem gösteriliyor: Eğer gereken uygun orana ve ölçüye dahil olmazsa yayınlanan ve verici modülde yanan bu RF Enerji gücü tam dış yayım yapılarak salanamaz ve vericinizin devresinin kalbine  " sekerek / geri basarak " isı-sıcaklık şeklinde çökercektir.',
    },
    {
      type: 'paragraph',
      html: 'Yanan VTx modülünün arka fondaki gizli eli SWR artış oranındaki yansıyan güçleridir... Bir anten bağlanmaksızın güç vermek ne kadar çabuk ölümse, ölçüsüzlük ve kısa-uzun anten iletimindeki kayıp payları saniyede ısı üretim ve saniyelerde o güzel malzemeyi çöpe çıkartma sürecidir... Kestirmede bulunduğunuz cihazınızı şu vasıta üzerindeki süzgeç ile koruma bandında kesmeniz en verimi canlandıran güvendir...',
    },
    {
      type: 'title',
      text: 'Harmonikler Arasındaki Fantomlar ve Yankı Sinyalini Tanımlama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir RF teli veyahut çubuk sadece ve  yek-pare örneğin 868\'e kestiniz diye yalnız ama yalnız "sadece onda rezonans ile uyarılıp titremez." Bir takım matematik formüllü frekans sinüs yasası  gereğidir ki... Kendi kestiğiniz hattın üzerinde " tek sayıdan ibaret katlama katlarında " yankı verici parazit titremeler mevcuttur (buna üçüncü katta, ve dahi beş vs yedinci katları diye tabir edilebilir.',
    },
    {
      type: 'paragraph',
      html: 'Gerçeğinin izini burda sürme önemlidir ; çünkü sizinki orjinalinde güzel ve net çıksa da, kullandığını cihaz arkada düzgün süzüp, sınırlandırma yapmayan veya ucuz üretim kalibreyse "diğer kanala-üste veya bir başkasına atlayarak yansımalar " saçabilirler, Siz bu cihaz aracı ile aslında yayılım yankı ucu nun da diğer neleri tetiklediğinin tahminlerini önden görerek başkasına veya kendinize kirlenme engeli tasarlarsınız ',
    },
  ],
  faq: [
    {
      question: 'Niye tam belirlenen milimetrelere sadık anten oluşturulması istenmektedir?',
      answer: 'Çünkü gönderilen verinin sinyalleri dalga boyları çerçevesinde katlarıyla uyumlu salkımlar olarak eşlenirler, Şayet senin bakır veya tel bu rezonansın dengesine ebatınca sığmaz ve katılaşmazsa havaya gidecek yayılan veri veya enerji iletilemediğinde yuvadan gidemediyle, geri vericine darbe / çarpma vurdurtarak anında ölüm / cihaz yanığına sebebiyet verir.',
    },
    {
      question: 'Kısaltması Vf olan Velocity Fabtörü Hız İndisi Tam Manada Ne İşe Yarar?',
      answer: 'Şöyle söylemek mümkündür vericindeki hızların bir iletken kablodaki yada borudaykenki yol alış ivmesinin boşluk yani uzay-hava atmosferindeki en süratli ışık limitleri denkleminin bölünmesinin değeridir . Ebatlama kaba düzeltmeyle iletkende geciken saniye sapması oranıyla  ( %5 yavaşsa iletim ) anteni de %5 ufaltarak hizalamayı sağlar',
    },
    {
      question: 'Hangisinden Daha Çok Randuman Çıkarılır Dipol Mü Yoksa Çeyreklik Kamçı mı?',
      answer: 'Yarım dalgadan ibaret kollar şeklindeki Dipol net ve öngörü ile randuman verir, kamçı tabiri dedikleri sadece alıcının alt gövdesinde yararlanan toprak zemine güdümlü kısadır ancak drone veya aracında alan hacmi kalmadığında iyi tercih olarak o biçilir .',
    },
    {
      question: 'Bu iletken anten tellerini ince veyahut da kalın şeçimi anten sinyal yayılımımı oynatır değiştirirmi ?',
      answer: 'Tabiki  daha tok, geniş ve kalın yapılı olması iletilen frekansı bir az da olsa esnetme yapar yani ufak milimetrelik traşlama hatanızı da o esneklikle telafisini yedirmeye de yardımcı olabildiği üzere hafifçenden o iletken yüzü  Vf nize de dokunur oynatır.  Çoğu amatör ve maker 20 ve  22 numara ( Awg çap türüyle) gayet stabil neticeler barındırırlar',
    },
  ],
  bibliography: [
    { name: 'Çeyrek Dalga Teorik Bakış Açısı', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Transmisyon hatları Hız Faktörü Wiki ', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Pek Tabi Önce Frekans',
      text: 'Doğrudan Megahertz (Mhz) veya yanda sunduğu en popüler Wi-Fi gibi Fpv gibi kolay tık kısa atamaları frekanstan tayin et ve seç.',
    },
    {
      name: 'Nasıl Kurulacağına Kararılma Tipi',
      text: 'Oluşturulacak türden seçeceğin için : Tam Takım ( ikiye oranlı dalgalık) 1 yada 2, mi Yoksam da sade basit Tek uç( çeyreklik yagıya denk gelen dikey düz) 1 veya 4  ü onayla.',
    },
    {
      name: 'Kaplama Veya Kablonun Kendi Menşei Seçimi',
      text: 'Kullandığın elemanın Çıplaklığı mı plastik kaplamasının (Pvc ) yoğunluğunu veya düz bakır metal boru cinsiyetini tıklayarak yazılımın sana Hız faktörünün daralmasını pay etmesini ver .',
    },
    {
      name: 'Sonuçtaki Ölçü ve Keskin Hassasiyetle Traşlama Makaslama',
      text: 'Bulduğun kolda kullanacağı ebat  uzunluğu hesabından kolu traşla. Daimi hatırla ki o boy lehime dayanan ( başucu uçundan kablo kaplamanın uç kök hizasına) kadarki tam traşlanmış açık kısımdır, lehimli plastkli kısmı katlama .',
    },
  ],
  schemas,
};
