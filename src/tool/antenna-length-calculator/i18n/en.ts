import type { AntennaLengthCalculatorLocaleContent } from '../index';

const slug = 'antenna-length-calculator';
const title = 'RF Antenna Length Calculator | FPV Dipoles and Whips';
const description = 'Calculate the exact measurement for your 868MHz, 2.4GHz, and 5.8GHz antennas. Improve your drone\'s range and avoid burning your transmitter with optimized SWR.';

export const content: AntennaLengthCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliographic References',
    signalParameters: 'Signal Parameters',
    antennaType: 'Antenna Type',
    dipole: 'Dipole (1/2 λ)',
    whip: 'Whip (1/4 λ)',
    conductorMedium: 'Conductor Medium',
    totalLength: 'Total Length',
    branchLength: 'Branch Length',
    secondaryResonance: 'Secondary Resonance Points',
    swrIdeal: 'Ideal SWR',
    impedance: 'Impedance',
    criticalNotice: 'Critical Notice',
    criticalNoticeText: 'A poorly cut antenna generates a high SWR (ROE) that can overheat and destroy your transmitter\'s power output stages in seconds.',
    dynamicScheme: 'Dynamic Scheme (mm)',
    harmonicLabel: 'Harmonic',
    presetFpv: '5.8 GHz (FPV)',
    presetWifi: '2.4 GHz (Wi-Fi)',
    presetElrs: '915 MHz (ELRS)',
    presetLrs: '868 MHz (LRS)',
    presetUhf: '433 MHz (UHF)',
    presetMbus: '169 MHz (M-Bus)',
    materialBareCopper: 'Bare Copper (0.95)',
    materialPvcInsulated: 'PVC Insulated Cable (0.92)',
    materialSolidRod: 'Solid Rod (0.97)',
    materialCoaxial: 'Coaxial Cable (0.66)',
  },
  seo: [
    {
      type: 'title',
      text: 'Why Is Your Radio Frequency Antenna Length Critical?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'If you have ever wondered why racing drone (FPV) antennas, long-range controllers (ELRS/Crossfire), or even your Wi-Fi router have such specific lengths, the answer lies in the physics of resonance. An antenna is not just a piece of conductive wire; it is a component that must be "in tune" with the frequency of the electromagnetic wave it is handling.',
    },
    {
      type: 'paragraph',
      html: 'When building your own antenna, whether it is a <strong>dipole</strong> for 868MHz or a <strong>whip antenna</strong> for 5.8GHz, precision is measured in millimeters. An error of just 2 or 3 mm can make the antenna inefficient, causing what is known as high SWR (Standing Wave Ratio) or ROE.',
    },
    {
      type: 'title',
      text: 'Fundamental Concepts: Wavelength and Resonance',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Radio frequency (RF) travels at the speed of light (approximately 300,000 kilometers per second). For an antenna to emit or receive energy optimally, its physical size must be directly related to the distance a complete cycle of the wave travels, called the <strong>wavelength (λ)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'The basic formula for calculating wavelength is λ = v / f, where \'v\' is the velocity of propagation and \'f\' is the frequency. However, in the real world, electricity travels slightly slower through metals than through a vacuum. This is where the <strong>Velocity Factor (Vf)</strong> comes into play.',
    },
    {
      type: 'list',
      items: [
        'Bare copper: Has a Vf of approximately 0.95.',
        'Insulated cables (PVC): The insulation slows the wave, lowering the factor to 0.92 or less.',
        'Solid copper rods: Since they are thicker and highly conductive, the factor rises slightly to 0.97.',
      ],
    },
    {
      type: 'title',
      text: 'Common Antenna Types in Drones and Maker Projects',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>1. Half-Wave Dipole Antenna (1/2 λ):</strong> This is the gold standard for many applications. It consists of two arms (radiating elements) that together form half the wavelength of the operating frequency. It is a balanced antenna offering a "donut" shaped radiation pattern and is very easy to make with coaxial cable.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Quarter-Wave Whip or Monopole Antenna (1/4 λ):</strong> This is what we typically see on radio receivers or small drones. It has only one radiating element and uses the device\'s chassis or a ground plane to "reflect" the other half of the wave. Its length is exactly half that of a dipole, hence the name quarter-wave.',
    },
    {
      type: 'title',
      text: 'Critical Frequencies and Applications',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Each frequency band has its peculiarities. With our calculator, you can adjust the measurements for the most commonly used bands in the hobby:',
    },
    {
      type: 'list',
      items: [
        '5.8 GHz (FPV Video): Lengths are tiny (around 12-13 mm for the radiator). Any excess solder can ruin performance.',
        '2.4 GHz (Control and Wi-Fi): A saturated band where antenna efficiency is key to avoiding link loss (failsafe).',
        '868 MHz / 915 MHz (Long Range): Used by systems like Team BlackSheep Crossfire or ExpressLRS. Antennas here are larger (about 8cm per arm) and allow for easier obstacle penetration.',
        '433 MHz (UHF): The old long-range standard, with large antennas ideal for multi-kilometer flights.',
      ],
    },
    {
      type: 'title',
      text: 'Technical Reference: SWR and Loss Table',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For optimal performance, SWR should be as close to 1.0 as possible. Here is a reference of how SWR affects your transmission power:',
    },
    {
      type: 'table',
      headers: ['SWR (ROE)', 'Return Loss', 'Reflected Power', 'Status'],
      rows: [
        ['1.0:1', '-∞ dB', '0%', '<strong>Perfect</strong>'],
        ['1.2:1', '-21 dB', '0.8%', 'Excellent'],
        ['1.5:1', '-14 dB', '4.0%', 'Good'],
        ['2.0:1', '-9.5 dB', '11.1%', 'Acceptable Limit'],
        ['3.0:1', '-6.0 dB', '25.0%', '<strong>Dangerous</strong>'],
      ],
    },
    {
      type: 'title',
      text: 'The Importance of 50 Ohms',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Almost all radio systems used in drones and RC (VTx, receivers, controllers) are designed for a <strong>characteristic impedance of 50 Ohms</strong>. A perfectly resonant dipole antenna typically has an impedance close to 73 Ohms in free space, but when installed on a drone or by adjusting the arm angle (Inverted-V), it approaches the ideal 50 Ohms. Using 75 Ohm coaxial cables (like old TV cables) will cause a mismatch that degrades the signal regardless of how well you cut the antenna.',
    },
    {
      type: 'title',
      text: 'The Danger of High SWR: Protect Your VTx',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Why do we insist so much on accuracy? If the antenna is not the correct length, it cannot radiate all the energy sent by the video transmitter (VTx). That energy "bounces" back to the transmitter as heat.',
    },
    {
      type: 'paragraph',
      html: 'High SWR is the number one cause of burnt transmitters. If you fly without an antenna or with a poorly cut one, internal components will overheat in seconds, leaving your equipment useless. Using this tool to verify your cuts is the best security investment for your drone.',
    },
    {
      type: 'title',
      text: 'Harmonics: Understanding Interference',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'An antenna cut for 868MHz does not only resonate at that frequency. Due to the nature of sine waves, it will also have resonance points at its odd multiples (3rd, 5th, 7th harmonics).',
    },
    {
      type: 'paragraph',
      html: 'This is vital to know because even if your antenna is emitting at 868MHz, you could be generating "noise" or interference at higher frequencies if the transmitter is not well-filtered. The harmonics calculator helps you predict where these ghost signals might appear.',
    },
  ],
  faq: [
    {
      question: 'Why must my antenna wire have a specific length?',
      answer: 'Radio waves resonate at multiples of their wavelength. If the wire doesn\'t match this resonance, energy reflects back to the transmitter instead of radiating, which can burn the equipment.',
    },
    {
      question: 'What is the Velocity Factor (Vf)?',
      answer: 'It is the ratio between the speed at which a signal travels through a conductor and the speed of light. In copper, it is typically 0.95, meaning the wave travels 5% slower and the antenna must be 5% shorter.',
    },
    {
      question: 'Is a dipole or a whip antenna better?',
      answer: 'A dipole (1/2 wave) is more efficient and predictable but bulkier. A whip (1/4 wave) is compact and ideal for small receivers, though it requires a ground plane to function well.',
    },
    {
      question: 'How does wire thickness affect the antenna?',
      answer: 'Thicker wires have a wider bandwidth (they are less critical regarding exact frequency), but their velocity factor changes slightly. For most FPV drones, standard 20-22AWG wire is ideal.',
    },
  ],
  bibliography: [
    { name: 'The Quarter-Wave Monopole', url: 'https://www.antenna-theory.com/antennas/monopole.php' },
    { name: 'Velocity Factor of Transmission Lines', url: 'https://en.wikipedia.org/wiki/Velocity_factor' },
  ],
  howTo: [
    {
      name: 'Select Frequency',
      text: 'Enter the exact frequency in MHz or use one of the quick buttons for 5.8GHz, 2.4GHz, or 868MHz.',
    },
    {
      name: 'Choose Antenna Type',
      text: 'Decide whether you will make a full dipole (1/2 wave) or a vertical whip antenna (1/4 wave).',
    },
    {
      name: 'Adjust Material',
      text: 'Choose the type of wire you will use so the calculator applies the correct velocity factor.',
    },
    {
      name: 'Cut with Precision',
      text: 'Use the "Length per arm" measurement to cut each element. Remember to measure from the solder point.',
    },
  ],
  schemas: [],
};
