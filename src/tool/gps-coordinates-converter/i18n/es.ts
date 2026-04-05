import type { GpsCoordinatesConverterLocaleContent } from '../index';

const slug = 'conversor-coordenadas-gps';
const title = 'Conversor Coordenadas GPS | Decimal a GMS Online Gratis';
const description = 'Convierte coordenadas GPS de Decimal a Grados, Minutos y Segundos (GMS) al instante. Herramienta visual con mapa para drones, náutica y geolocalización.';

export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias Bibliográficas',
    decimalDD: 'Decimal (DD)',
    degreesGMS: 'Grados (GMS)',
    useLocation: 'Usar mi ubicación',
    lat: 'Latitud',
    lng: 'Longitud',
    latGMS: 'Latitud (GMS)',
    lngGMS: 'Longitud (GMS)',
    gmsTraditional: 'GMS Tradicional',
    nauticalDM: 'Grados y Min. Dec. (Náutica)',
    googleMapsFormat: 'Formato Google Maps',
    copy: 'Copiar',
    copied: '¡Copiado!',
    recentHistory: 'Historial Reciente',
    clear: 'Borrar',
    noHistory: 'No hay conversiones recientes.',
    load: 'Cargar',
    delete: 'Eliminar',
  },
  seo: [
    {
      type: 'title',
      text: 'Conversor de Coordenadas GPS: De Decimal a Grados, Minutos y Segundos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La geolocalización es la piedra angular de la navegación moderna. Desde el vuelo de drones FPV hasta la náutica profesional, la capacidad de interpretar y convertir coordenadas entre diferentes formatos es una habilidad esencial. Nuestra <strong>calculadora de coordenadas GPS</strong> está diseñada para simplificar este proceso, permitiendo una transición fluida entre los Grados Decimales (DD), el formato estándar de Google Maps, y los Grados, Minutos y Segundos (GMS), el lenguaje universal de la cartografía clásica.',
    },
    {
      type: 'title',
      text: 'Entendiendo los Formatos de Coordenadas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aunque la posición en la superficie terrestre es única, existen diversas formas de expresarla matemáticamente. Cada sector ha adoptado un estándar basado en sus herramientas y necesidades históricas. Los dos sistemas principales que manejamos en esta herramienta son los pilares de la geolocalización actual.',
    },
    {
      type: 'paragraph',
      html: '<strong>1. Grados Decimales (DD):</strong> Es el formato más utilizado en entornos digitales, informática y APIs web. Representa la latitud y longitud como números reales. Por ejemplo, la Puerta del Sol en Madrid se encuentra cerca de los 40.4168° N. La simplicidad de este formato lo hace ideal para cálculos matemáticos directos en GPS de drones y software de telemetría.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Grados, Minutos y Segundos (GMS):</strong> Es el formato tradicional heredado de la astronomía y la navegación antigua. Divide cada grado en 60 minutos y cada minuto en 60 segundos. Es el estándar utilizado en cartas náuticas físicas y en muchos equipos de aviación civil. Ver una coordenada como 40° 25\' 0.48" N aporta una sensación de escala y precisión histórica que los decimales a veces omiten.',
    },
    {
      type: 'title',
      text: 'La Importancia de la Conversión en el Sector de Drones',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para un piloto de drones, la precisión no es negociable. Muchos planes de misión se diseñan en Google Earth o Google Maps usando decimales, pero al transferir esos puntos a un Ground Control Station (GCS) antiguo o al configurar un "Home Point" manualmente en ciertos transmisores de radiofrecuencia, se puede requerir el formato GMS.',
    },
    {
      type: 'list',
      items: [
        'Planificación de Misiones: Cruzar datos de aplicaciones móviles de vuelo con mapas topográficos oficiales.',
        'Rescate y Salvamento: Comunicar la posición de un objetivo a equipos de emergencia que usan radiofrecuencia y coordenadas GMS.',
        'Fotogrametría: Verificación de los metadatos EXIF de las imágenes capturadas por el sensor del dron.',
        'Navegación FPV Long Range: Configuración de antenas direccionales basadas en coordenadas exactas de puntos geográficos destacados.'
      ],
    },
    {
      type: 'title',
      text: 'Cómo Realizar la Conversión Manual',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aunque nuestra herramienta automatiza el cálculo por ti, entender la matemática subyacente es fundamental para cualquier navegante. El proceso se basa en el sistema sexagesimal (base 60).',
    },
    {
      type: 'paragraph',
      html: 'Para pasar de <strong>Decimal a GMS</strong>, tomamos la parte entera como los grados. La parte decimal sobrante se multiplica por 60 para obtener los minutos. De ese resultado, la parte decimal restante se vuelve a multiplicar por 60 para obtener los segundos finales. Es un proceso de cascada que garantiza que ninguna fracción de precisión se pierda por el camino.',
    },
    {
      type: 'paragraph',
      html: 'A la inversa, de <strong>GMS a Decimal</strong>, dividimos los segundos entre 3600 y los minutos entre 60, sumando ambos resultados a los grados enteros. Es vital recordar que las latitudes S (Sur) y longitudes W (Oeste) se representan con signo negativo en el sistema decimal para mantener la coherencia en el eje de coordenadas cartesianas.',
    },
    {
      type: 'title',
      text: 'Precisión Decimal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cinco decimales en una coordenada DD ofrecen una precisión de aproximadamente 1,1 metros en el ecuador. Seis decimales bajan esa precisión a unos 11 centímetros. Para la mayoría de usos con drones comerciales, 6 decimales son el estándar de oro.',
    },
    {
      type: 'title',
      text: 'Latitud y Longitud: Los Ejes de la Tierra',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La <strong>Latitud</strong> mide la distancia al norte o al sur del Ecuador. Sus valores oscilan entre 0° en el Ecuador y 90° en los polos. Es el eje "Y" de nuestro mapa global. Equivocar una latitud N por una S te transportaría instantáneamente al hemisferio opuesto, un error crítico que nuestra herramienta ayuda a evitar mediante la validación visual en el mapa.',
    },
    {
      type: 'paragraph',
      html: 'La <strong>Longitud</strong> mide la distancia al este o al oeste del Meridiano de Greenwich. Sus valores van de 0° a 180°. Es el eje "X". La combinación de ambos puntos crea una cuadrícula única que permite identificar cualquier objeto, desde un centímetro cuadrado de bosque hasta la cima del Everest, con total exactitud.',
    },
    {
      type: 'title',
      text: 'El Formato Náutico: Grados y Minutos Decimales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existe un formato híbrido muy popular en la comunidad marina y náutica: los Grados y Minutos Decimales (DM). En este sistema, se mantienen los grados enteros pero el resto se expresa como minutos con decimales, omitiendo los segundos. Ejemplo: 40° 25.016\' N.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra calculadora también ofrece este resultado, ya que muchos receptores GPS náuticos antiguos y modernos (como los Garmin de mano usados en senderismo) vienen configurados por defecto con esta nomenclatura. Tener esta conversión a mano evita confusiones peligrosas durante la navegación en tiempo real.',
    },
    {
      type: 'title',
      text: 'Datum y Elipsoides',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Casi todo el GPS moderno utiliza el estándar WGS84. Nuestra herramienta asume este datum por defecto. Si estás usando planos topográficos muy antiguos (anteriores a 1980), podrías encontrar ligeras desviaciones de pocos metros debido a la forma en que se modelaba la curvatura terrestre en aquella época.',
    },
    {
      type: 'title',
      text: 'Uso del Historial y Privacidad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Entendemos que un piloto a menudo trabaja con múltiples puntos de interés (POIs) en una misma sesión. Por ello, hemos implementado un sistema de historial local. Tus últimas 5 conversiones se guardan en la memoria de tu navegador (localStorage), permitiéndote alternar entre puntos de despegue y aterrizaje sin tener que reintroducir los datos.',
    },
    {
      type: 'paragraph',
      html: 'Este proceso ocurre íntegramente en tu dispositivo. Ninguna coordenada es enviada a servidores externos, garantizando la <strong>privacidad total</strong> de tus ubicaciones de vuelo. Esto es especialmente relevante para profesionales que trabajan en zonas restringidas o sensibles.',
    },
    {
      type: 'title',
      text: 'Consejos para una Geolocalización Exitosa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Verificación visual:</strong> Siempre utiliza el mini-mapa integrado para confirmar que el "pin" cae donde esperas. Un error común es intercambiar Latitud por Longitud, lo que suele situar el punto en medio del océano o en un continente equivocado.',
    },
    {
      type: 'paragraph',
      html: '<strong>Cuidado con los signos:</strong> Si usas DD, recuerda que el Oeste (W) es negativo. En Madrid (-3.70), olvidar el signo menos te situaría en el interior de Argelia en lugar de España.',
    },
    {
      type: 'paragraph',
      html: 'En resumen, dominar las coordenadas es dominar tu entorno. Ya sea que estés configurando el Failsafe de tu dron o trazando una ruta de navegación marítima, nuestra herramienta está aquí para asegurarte de que cada grado, minuto y segundo cuente. ¡Explora el mundo con la precisión que tus misiones merecen!',
    },
  ],
  faq: [
    {
      question: '¿Qué diferencia hay entre DD y GMS?',
      answer: 'DD (Grados Decimales) usa un solo número con decimales (ej. 40.41). GMS (Grados, Minutos, Segundos) divide el grado en fracciones sexagesimales (ej. 40° 25\' 0"").',
    },
    {
      question: '¿Por qué se usan coordenadas negativas?',
      answer: 'En el sistema Decimal (DD), las latitudes al sur del Ecuador y las longitudes al oeste de Greenwich se indican con signo negativo para facilitar el cálculo matemático.',
    },
    {
      question: '¿Cuánta precisión pierdo al convertir?',
      answer: 'Nuestra herramienta usa precisión de doble coma flotante. Con 6 decimales en DD, la precisión es de unos 11 centímetros, más que suficiente para drones y navegación civil.',
    },
    {
      question: '¿Funciona esta herramienta sin conexión?',
      answer: 'Sí, una vez cargada la página, toda la lógica de conversión es local (client-side). Solo el mapa requiere conexión para descargar las nuevas teselas (tiles).',
    },
  ],
  bibliography: [
    {
      name: 'WGS 84 (World Geodetic System 1984): El estándar técnico global para cartografía y GPS.',
      url: 'https://es.wikipedia.org/wiki/WGS84',
    },
    {
      name: 'IGN (Instituto Geográfico Nacional): Guía sobre sistemas de coordenadas y proyecciones en España.',
      url: 'https://www.ign.es/web/resources/cartografiaEnsenanza/conceptosCarto/descargas/Conceptos_Cartograficos_def.pdf',
    },
  ],
  howTo: [],
  schemas: [],
};
