import type { AntennaLengthCalculatorLocaleContent } from '../index';

const slug = 'calculadora-longitud-antena';
const title = 'Calculadora de Longitud de Antena RF | Dipolos y Látigos FPV';
const description = 'Calcula la medida exacta para tus antenas de 868MHz, 2.4GHz y 5.8GHz. Mejora el alcance de tu dron y evita quemar tu transmisor con un SWR optimizado.';

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Referencias Bibliográficas',
  ui: {
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias Bibliográficas',
    signalParameters: 'Parámetros de Señal',
    antennaType: 'Tipo de Antena',
    dipole: 'Dipolo (1/2 λ)',
    whip: 'Látigo (1/4 λ)',
    conductorMedium: 'Medio Conductor',
    totalLength: 'Longitud Total',
    branchLength: 'Longitud por Brazo',
    secondaryResonance: 'Puntos de Resonancia Secundarios',
    swrIdeal: 'SWR Ideal',
    impedance: 'Impedancia',
    criticalNotice: 'Aviso Crítico',
    criticalNoticeText: 'Una antena mal cortada genera un ROE (SWR) alto que puede sobrecalentar y destruir los finales de potencia de tu transmisor en segundos.',
    dynamicScheme: 'Esquema Dinámico (mm)',
    harmonicLabel: 'Armónica',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Cobre desnudo (0.95)',
    materialPvcInsulated: 'Cable aislado / PVC (0.92)',
    materialSolidRod: 'Cobre sólido (0.97)',
    materialCoaxial: 'Cable Coaxial (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: '¿Por qué es crítica la longitud de tu antena de radiofrecuencia?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si alguna vez te has preguntado por qué las antenas de los drones de carreras (FPV), los mandos de largo alcance (ELRS/Crossfire) o incluso tu router Wi-Fi tienen longitudes tan específicas, la respuesta está en la física de la resonancia. Una antena no es simplemente un trozo de cable conductor; es un componente que debe "entrar en sintonía" con la frecuencia de la onda electromagnética que está manejando.',
    },
    {
      type: 'paragraph',
      html: 'Cuando fabricas tu propia antena, ya sea un <strong>dipolo</strong> para 868MHz o un <strong>antena de látigo</strong> para 5.8GHz, la precisión se mide en milímetros. Un error de apenas 2 o 3 mm puede hacer que la antena deje de ser eficiente, provocando lo que conocemos como un SWR (Standing Wave Ratio) o ROE (Relación de Onda Estacionaria) alto.',
    },
    {
      type: 'title',
      text: 'Conceptos Fundamentales: Longitud de Onda y Resonancia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La radiofrecuencia (RF) viaja a la velocidad de la luz (aproximadamente 300.000 kilómetros por segundo). Para que una antena emita o reciba energía de manera óptima, su tamaño físico debe estar directamente relacionado con la distancia que recorre un ciclo completo de la onda, denominada <strong>longitud de onda (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'La fórmula básica para calcular la longitud de onda es λ = v / f, donde \'v\' es la velocidad de propagación y \'f\' es la frecuencia. Sin embargo, en el mundo real, la electricidad viaja un poco más despacio a través de los metales que por el vacío. Aquí es donde entra en juego el <strong>Factor de Velocidad (Vf)</strong>.',
    },
    {
      type: 'list',
      items: [
        'Cobre desnudo: Tiene un Vf de aproximadamente 0.95.',
        'Cables aislados (PVC): El aislamiento ralentiza la onda, bajando el factor a 0.92 o menos.',
        'Varillas de cobre sólido: Al ser más gruesas y conductoras, el factor sube ligeramente a 0.97.'
      ],
    },
    {
      type: 'title',
      text: 'Tipos de Antenas Comunes en Drones y Maker',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Antena Dipolo de Media Onda (1/2 λ):</strong> Es el estándar de oro para muchas aplicaciones. Consiste en dos brazos (elementos radiantes) que, sumados, forman la mitad de la longitud de onda de la frecuencia de trabajo. Es una antena equilibrada que ofrece un patrón de radiación en forma de "donut" y es muy fácil de fabricar con cable coaxial.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Antena de Látigo o Monopolo de Cuarto de Onda (1/4 λ):</strong> Es la que solemos ver en los receptores de radio o en drones pequeños. Solo tiene un elemento radiante y utiliza el chasis del aparato o un plano de tierra para "reflejar" la otra mitad de la onda. Su longitud es exactamente la mitad de un dipolo, de ahí su nombre de cuarto de onda.',
    },
    {
      type: 'title',
      text: 'Frecuencias Críticas y Aplicaciones',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada banda de frecuencia tiene sus particularidades. Con nuestra calculadora, puedes ajustar las medidas para las bandas más utilizadas en el hobby:',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (Vídeo FPV): Las longitudes son minúsculas (entorno a los 12-13 mm para el radiador). Cualquier exceso de soldadura puede arruinar el rendimiento.',
        '2.4 GHz (Control y Wi-Fi): Una banda saturada donde la eficiencia de la antena es clave para no perder el enlace (failsafe).',
        '868 MHz / 915 MHz (Long Range): Utilizada por sistemas como Team BlackSheep Crossfire o ExpressLRS. Las antenas aquí son más grandes (unos 8cm por brazo) y permiten atravesar obstáculos con mayor facilidad.',
        '433 MHz (UHF): El antiguo estándar de largo alcance, con antenas de gran tamaño ideales para vuelos de muchos kilómetros.'
      ],
    },
    {
      type: 'title',
      text: 'Referencia Técnica: Tabla de ROE (SWR) y Pérdidas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para un rendimiento óptimo, el ROE debería ser lo más cercano posible a 1.0. Aquí tienes una referencia de cómo afecta el ROE a la potencia de tu transmisión:',
    },
    {
      type: 'table',
      headers: ['ROE (SWR)', 'Pérdida de Retorno', 'Potencia Reflejada', 'Estado'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Perfecto</strong>'],
        ['1.2:1', '-21 dB', '0.8%', 'Excelente'],
        ['1.5:1', '-14 dB', '4.0%', 'Bueno'],
        ['2.0:1', '-9.5 dB', '11.1%', 'Límite Aceptable'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>Peligroso</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'La importancia de los 50 Ohmios',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Casi todos los sistemas de radio utilizados en drones y radiocontrol (VTx, receptores, mandos) están diseñados para una <strong>impedancia característica de 50 Ohmios</strong>. Una antena dipolo perfectamente resonante suele tener una impedancia cercana a los 73 Ohmios en el espacio libre, pero al instalarla en un dron o ajustarle el ángulo de los brazos (V-Inversa), se aproxima a los 50 Ohmios ideales. Usar cables coaxiales de 75 Ohmios (como los de TV antigua) provocará un desajuste que degradará la señal sin importar lo bien que cortes la antena.',
    },
    {
      type: 'title',
      text: 'El Peligro del SWR Alto: Protege tu VTx',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '¿Por qué insistimos tanto en la exactitud? Si la antena no tiene la longitud correcta, no podrá irradiar toda la energía que le envía el transmisor de vídeo (VTx). Esa energía "rebota" y vuelve hacia el transmisor en forma de calor.',
    },
    {
      type: 'paragraph',
      html: 'Un SWR alto es la causa número uno de transmisores quemados. Si vuelas sin antena o con una mal cortada, los componentes internos se sobrecalentarán en cuestión de segundos, dejando tu equipo inservible. Usar esta herramienta para verificar tus cortes es la mejor inversión en seguridad para tu dron.',
    },
    {
      type: 'title',
      text: 'Armónicos: Comprendiendo las Interferencias',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una antena cortada para 868MHz no solo resuena en esa frecuencia. Debido a la naturaleza de las ondas senoidales, también tendrá puntos de resonancia en sus múltiplos impares (3ª, 5ª, 7ª armónica).',
    },
    {
      type: 'paragraph',
      html: 'Esto es vital saberlo porque, aunque tu antena esté emitiendo en 868MHz, podrías estar generando "ruido" o interferencias en frecuencias superiores si el transmisor no está bien filtrado. La calculadora de armónicos te ayuda a predecir dónde podrían aparecer estas señales fantasma.',
    },
  ],
  faq: [
    {
      question: '¿Por qué el cable de mi antena debe tener una longitud específica?',
      answer: 'Las ondas de radio resuenan en múltiplos de su longitud de onda. Si el cable no coincide con esta resonancia, la energía se refleja hacia el transmisor en lugar de irradiarse, lo que puede quemar el equipo.',
    },
    {
      question: '¿Qué es el Factor de Velocidad (Vf)?',
      answer: 'Es la relación entre la velocidad a la que viaja la señal por un conductor y la velocidad de la luz. En el cobre suele ser 0.95, lo que significa que la onda viaja un 5% más lento y la antena debe ser un 5% más corta.',
    },
    {
      question: '¿Es mejor un dipolo o una antena de látigo?',
      answer: 'Un dipolo (1/2 onda) es más eficiente y predecible, pero más voluminoso. Un látigo (1/4 onda) es compacto e ideal para receptores pequeños, aunque requiere un plano de tierra para funcionar bien.',
    },
    {
      question: '¿Cómo afecta el grosor del cable a la antena?',
      answer: 'Cables más gruesos tienen un ancho de banda mayor (son menos críticos con la frecuencia exacta), pero su factor de velocidad cambia ligeramente. Para la mayoría de drones FPV, el cable estándar de 20-22AWG es ideal.',
    },
  ],
  bibliography: [
    { name: 'The Quarter-Wave Monopole', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Velocity Factor of Transmission Lines', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Selecciona la Frecuencia',
      text: 'Introduce la frecuencia exacta en MHz o usa uno de los botones rápidos para 5.8GHz, 2.4GHz o 868MHz.',
    },
    {
      name: 'Elige el Tipo de Antena',
      text: 'Decide si vas a fabricar un dipolo completo (1/2 onda) o una antena vertical de látigo (1/4 onda).',
    },
    {
      name: 'Ajusta el Material',
      text: 'Elige el tipo de cable que vas a usar para que la calculadora aplique el factor de velocidad correcto.',
    },
    {
      name: 'Corta con Precisión',
      text: 'Usa la medida "Longitud por brazo" para cortar cada elemento. Recuerda medir desde el punto de soldadura.',
    },
  ],
  schemas: [],
};
