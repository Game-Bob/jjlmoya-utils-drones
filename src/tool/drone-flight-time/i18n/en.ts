import type { DroneFlightTimeLocaleContent } from '../index';

const slug = 'drone-flight-time-calculator';
const title = 'Drone Flight Time Calculator | Estimate LiPo/Li-Ion Endurance';
const description = 'Calculate how long your drone can fly based on mAh capacity and current draw. Optimize your LiPo batteries for safe flights and maximum duration.';

export const content: DroneFlightTimeLocaleContent = {
  slug,
  title,
  description,
  ui: {
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliographic References',
    batterySpecs: 'Battery Specifications',
    capacity: 'Capacity',
    voltage: 'Voltage (S Cells)',
    safetyMargin: 'Safety Margin',
    landingHint: 'Land at 3.5V - 3.7V per cell.',
    consumptionDynamics: 'Consumption Dynamics',
    averageConsumption: 'Average Current Draw',
    powerWatts: 'Power (Watts)',
    efficiencyHint: 'When Amps change, Watts are recalculated based on S voltage.',
    estimatedEfficiency: 'Estimated Efficiency',
    typicalEfficiencyHint: 'Typical: 4-6 (Racing), 8-12 (Cinematic/Long Range).',
    safeFlight: 'Safe Flight',
    totalEnergy: 'Total Energy',
    theoreticalTime: 'Theoretical Time (0%)',
    co2Footprint: 'CO2 Footprint',
    autonomyChart: 'Endurance Chart',
    chartSubtitle: 'Amps (A) vs. Time (min)',
    chartLabel: 'Minutes',
  },
  seo: [
    {
      type: 'title',
      text: 'Drone Flight Time Calculator: A Complete Guide to Endurance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Endurance is arguably the most critical factor in the design and operation of any unmanned aircraft. Whether you are a racing FPV drone pilot, an aerial photography professional, or a long-range enthusiast, knowing exactly how long your equipment can stay in the air is vital for mission safety and success. Our <strong>flight time calculator</strong> uses the fundamental variables of battery capacity and current draw to provide a realistic and safe estimation.',
    },
    {
      type: 'title',
      text: 'Battery Capacity: mAh Explained',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Battery capacity is typically measured in milliamp-hours (mAh). This figure indicates how much electrical charge the battery can store. For example, a 1500 mAh battery can theoretically supply 1500 milliamps for one full hour. In the drone world, where current draw is extremely high, we usually speak in Amps (A). 1000 mAh is exactly 1 Ah (Amp-hour).',
    },
    {
      type: 'paragraph',
      html: 'However, raw capacity isn\'t the only factor. Voltage (determined by the number of cells or \'S\') directly influences total power (Watts), but for calculating time based on motor consumption, the Ah/Amps ratio is the most direct metric used by flight engineers.',
    },
    {
      type: 'title',
      text: 'Current Draw: In-Flight Amperage',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Motor consumption is the most fluctuating variable during flight. Maintaining a hover is not the same as performing aggressive acrobatic maneuvers. Every motor and propeller combination has an efficiency curve. When you go full throttle, amperage spikes, drastically reducing battery life.',
    },
    {
      type: 'list',
      items: [
        'Hovering Flight: Minimum and constant consumption, ideal for photography.',
        'Cruising Flight: Slightly increased consumption due to aerodynamic drag.',
        'Aggressive/FPV Flight: Current peaks can triple the average consumption in seconds.',
        'Drone Weight: Every additional gram requires higher motor RPMs to generate lift, raising amperage.',
      ],
    },
    {
      type: 'title',
      text: 'The 80% Safety Rule: Protecting LiPo Chemistry',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Flying a LiPo (Lithium Polymer) battery down to 0% capacity is the fastest way to destroy it and, worse, cause a crash. Chemically, cells suffer irreversible damage if their voltage drops below a critical threshold (typically 3.0V - 3.2V per cell).',
    },
    {
      type: 'paragraph',
      html: 'Therefore, we always apply a <strong>safety margin rule</strong>. While our calculator allows you to adjust this value, we recommend landing when 20% of the charge remains. This not only extends the lifespan of your expensive batteries by hundreds of cycles but also guarantees a vital power reserve in case of unexpected wind gusts or if you need to abort a landing and try again.',
    },
    {
      type: 'tip',
      html: 'Drone batteries are very sensitive to cold. In winter, LiPo internal resistance increases, causing faster voltage drops. Always warm your batteries before takeoff if the ambient temperature is below 15°C (59°F).',
    },
    {
      type: 'title',
      text: 'The Mathematical Flight Formula',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'While our tool does the heavy lifting, it\'s useful to know the logic behind the calculation. The basic formula is:',
    },
    {
      type: 'paragraph',
      html: '<strong>Time (min) = ((Capacity mAh / 1000) * Safety Factor) / Amps Draw * 60</strong>',
    },
    {
      type: 'paragraph',
      html: 'For instance, if you have a 2200 mAh battery, want to land at 20% (0.8 safety factor), and your drone draws an average of 15 Amps: (2.2 * 0.8) / 15 * 60 = 7.04 minutes of safe flight.',
    },
    {
      type: 'title',
      text: 'Weight Optimization and Efficiency',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'There is a point of diminishing returns when adding larger batteries. Doubling battery capacity does not double flight time because the battery itself adds weight. That extra weight requires motors to spin faster, consuming more current. At some point, the added weight consumes more energy than it contributes, reducing overall system efficiency.',
    },
    {
      type: 'paragraph',
      html: 'Experienced pilots look for the perfect balance between <em>Disc Loading</em> (propeller surface weight ratio) and battery capacity to maximize what we call "useful mission time."',
    },
    {
      type: 'title',
      text: 'Differences Between Drone Types',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Micro Drones (Whoops):</strong> These draw just 2-5 Amps, but use 300-500 mAh batteries. Flight time is usually short (3-4 min) due to low inertia and high RPMs.',
    },
    {
      type: 'paragraph',
      html: '<strong>5" Racing Drones:</strong> Brutal consumption during races (up to 120A peaks), exhausting a 1300 mAh battery in barely 2 minutes of pure adrenaline.',
    },
    {
      type: 'paragraph',
      html: '<strong>Long Range Drones:</strong> Optimized for efficiency. They often use Lithium-Ion (Li-Ion) cells which have higher energy density than LiPos, enabling 30 to 60-minute flights with very low current draw.',
    },
    {
      type: 'tip',
      html: 'Switching to propellers with lower pitch can increase flight time at the cost of top speed and responsiveness. It is the cheapest and most effective way to gain 10-15% more endurance.',
    },
    {
      type: 'title',
      text: 'Maintenance and Storage',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For this tool\'s calculations to be accurate, your batteries must be in good condition. A battery with high internal resistance will overheat and "lie" about its actual capacity. Always store your batteries at storage voltage (3.8V-3.85V per cell) if you won\'t be flying for more than 48 hours.',
    },
    {
      type: 'paragraph',
      html: 'In conclusion, energy management is the art of balancing physics, chemistry, and mathematics. Use our calculator regularly to plan your flight sessions, and never forget that in the air, time is your most precious resource. Happy flying and safe landings!',
    },
  ],
  faq: [
    {
      question: 'Why is actual flight time lower than calculated?',
      answer: 'The calculator assumes constant consumption. Sharp maneuvers, headwinds, and battery wear can reduce actual flight time by up to 30%.',
    },
    {
      question: 'At what voltage should I land my drone?',
      answer: 'Ideally, land when the voltage drops to 3.5V - 3.6V per cell (at rest). This corresponds to the recommended 20% remaining capacity.',
    },
    {
      question: 'Are LiPo or Li-Ion batteries better for drones?',
      answer: 'LiPos offer high instantaneous power (ideal for racing and acrobatics). Li-Ion cells have longer endurance but lower power output (ideal for long, steady flights).',
    },
    {
      question: 'How does the cell count (S) affect flight time?',
      answer: 'More cells increase voltage and power, but also weight. If motors are optimized for that voltage, they can be more efficient, but cell count alone does not guarantee more time.',
    },
  ],
  bibliography: [
    { name: 'EASA - Drone Regulations', url: 'https://www.easa.europa.eu/en/domains/civil-drones' },
    { name: 'ArduPilot Wiki', url: 'https://ardupilot.org/copter/' },
    { name: 'Battery University', url: 'https://batteryuniversity.com/' },
  ],
  howTo: [
    {
      name: 'Identify Capacity',
      text: 'Check your battery label and look for the mAh value (e.g., 1500, 2200, 4500).',
    },
    {
      name: 'Estimate Current Draw',
      text: 'Enter the average amperage your drone consumes. You can find this in your OSD telemetry after a test flight.',
    },
    {
      name: 'Adjust Safety Margin',
      text: 'We recommend leaving 20% (set to 80%) to protect the battery and provide a landing buffer.',
    },
    {
      name: 'Get the Result',
      text: 'View the exact time in minutes and seconds that you can safely stay in the air.',
    },
  ],
  schemas: [],
};
