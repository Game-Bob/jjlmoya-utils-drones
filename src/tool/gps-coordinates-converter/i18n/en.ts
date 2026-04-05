import type { GpsCoordinatesConverterLocaleContent } from '../index';

const slug = 'gps-coordinates-converter';
const title = 'GPS Coordinates Converter | Decimal to DMS Online Free';
const description = 'Convert GPS coordinates from Decimal to Degrees, Minutes, and Seconds (DMS) instantly. Visual tool with map for drones, sailing, and geolocation.';

export const content: GpsCoordinatesConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliographic References',
    decimalDD: 'Decimal (DD)',
    degreesGMS: 'Degrees (DMS)',
    useLocation: 'Use my location',
    lat: 'Latitude',
    lng: 'Longitude',
    latGMS: 'Latitude (DMS)',
    lngGMS: 'Longitude (DMS)',
    gmsTraditional: 'Traditional DMS',
    nauticalDM: 'Degrees & Dec. Min. (Nautical)',
    googleMapsFormat: 'Google Maps Format',
    copy: 'Copy',
    copied: 'Copied!',
    recentHistory: 'Recent History',
    clear: 'Clear',
    noHistory: 'No recent conversions.',
    load: 'Load',
    delete: 'Delete',
  },
  seo: [
    {
      type: 'title',
      text: 'GPS Coordinates Converter: From Decimal to Degrees, Minutes, and Seconds',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Geolocation is the cornerstone of modern navigation. From FPV drone flight to professional sailing, the ability to interpret and convert coordinates between different formats is an essential skill. Our <strong>GPS coordinates calculator</strong> is designed to simplify this process, allowing a seamless transition between Decimal Degrees (DD), the standard format for Google Maps, and Degrees, Minutes, and Seconds (DMS), the universal language of classic cartography.',
    },
    {
      type: 'title',
      text: 'Understanding Coordinate Formats',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Although a position on the Earth\'s surface is unique, there are several ways to express it mathematically. Each sector has adopted a standard based on its tools and historical needs. The two main systems we handle in this tool are the pillars of current geolocation.',
    },
    {
      type: 'paragraph',
      html: '<strong>1. Decimal Degrees (DD):</strong> This is the most widely used format in digital environments, computer science, and web APIs. It represents latitude and longitude as real numbers. For example, the center of London is near 51.5074° N. The simplicity of this format makes it ideal for direct mathematical calculations in drone GPS and telemetry software.',
    },
    {
      type: 'paragraph',
      html: '<strong>2. Degrees, Minutes, and Seconds (DMS):</strong> This is the traditional format inherited from astronomy and ancient navigation. It divides each degree into 60 minutes and each minute into 60 seconds. It is the standard used in physical nautical charts and in many civil aviation equipment. Seeing a coordinate like 51° 30\' 26" N provides a sense of scale and historical precision that decimals sometimes omit.',
    },
    {
      type: 'title',
      text: 'The Importance of Conversion in the Drone Sector',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For a drone pilot, precision is non-negotiable. Many mission plans are designed in Google Earth or Google Maps using decimals, but when transferring those points to an old Ground Control Station (GCS) or setting a "Home Point" manually on certain radio transmitters, the DMS format may be required.',
    },
    {
      type: 'list',
      items: [
        'Mission Planning: Cross-referencing data from mobile flight apps with official topographic maps.',
        'Search and Rescue: Communicating a target\'s position to emergency teams using radio frequency and DMS coordinates.',
        'Photogrammetry: Verifying EXIF metadata of images captured by the drone\'s sensor.',
        'Long Range FPV Navigation: Configuring directional antennas based on exact coordinates of prominent geographic points.',
      ],
    },
    {
      type: 'title',
      text: 'How to Perform Manual Conversion',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'While our tool automates the calculation for you, understanding the underlying mathematics is fundamental for any navigator. The process is based on the sexagesimal system (base 60).',
    },
    {
      type: 'paragraph',
      html: 'To convert from <strong>Decimal to DMS</strong>, we take the integer part as the degrees. The remaining decimal part is multiplied by 60 to get the minutes. From that result, the remaining decimal part is multiplied again by 60 to get the final seconds. It is a cascading process that ensures no fraction of precision is lost along the way.',
    },
    {
      type: 'paragraph',
      html: 'Inversely, from <strong>DMS to Decimal</strong>, we divide the seconds by 3600 and the minutes by 60, adding both results to the whole degrees. It is vital to remember that S (South) latitudes and W (West) longitudes are represented with a negative sign in the decimal system to maintain consistency in the Cartesian coordinate axis.',
    },
    {
      type: 'title',
      text: 'Decimal Precision',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Five decimal places in a DD coordinate offer a precision of approximately 1.1 meters at the equator. Six decimal places bring that precision down to about 11 centimeters. For most commercial drone uses, 6 decimal places are the gold standard.',
    },
    {
      type: 'title',
      text: 'Latitude and Longitude: The Axes of the Earth',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Latitude</strong> measures the distance north or south of the Equator. Its values range from 0° at the Equator to 90° at the poles. It is the "Y" axis of our global map. Mistaking an N latitude for an S latitude would instantly transport you to the opposite hemisphere, a critical error that our tool helps avoid through visual validation on the map.',
    },
    {
      type: 'paragraph',
      html: '<strong>Longitude</strong> measures the distance east or west of the Greenwich Meridian. Its values go from 0° to 180°. It is the "X" axis. The combination of both points creates a unique grid that allows any object to be identified, from a square centimeter of forest to the summit of Everest, with total accuracy.',
    },
    {
      type: 'title',
      text: 'The Nautical Format: Decimal Degrees and Minutes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'There is a hybrid format very popular in the marine and nautical community: Decimal Degrees and Minutes (DM). In this system, whole degrees are kept but the rest is expressed as minutes with decimals, omitting seconds. Example: 51° 30.443\' N.',
    },
    {
      type: 'paragraph',
      html: 'Our calculator also offers this result, as many old and modern nautical GPS receivers (like handheld Garmin units used for hiking) are configured by default with this nomenclature. Having this conversion at hand avoids dangerous confusion during real-time navigation.',
    },
    {
      type: 'title',
      text: 'Datum and Ellipsoids',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Almost all modern GPS uses the WGS84 standard. Our tool assumes this datum by default. If you are using very old topographic plans (pre-1980), you might find slight deviations of a few meters due to how the Earth\'s curvature was modeled at that time.',
    },
    {
      type: 'title',
      text: 'History Usage and Privacy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'We understand that a pilot often works with multiple points of interest (POIs) in a single session. Therefore, we have implemented a local history system. Your last 5 conversions are stored in your browser\'s memory (localStorage), allowing you to switch between takeoff and landing points without re-entering data.',
    },
    {
      type: 'paragraph',
      html: 'This process happens entirely on your device. No coordinate is sent to external servers, ensuring <strong>total privacy</strong> for your flight locations. This is particularly relevant for professionals working in restricted or sensitive areas.',
    },
    {
      type: 'title',
      text: 'Tips for Successful Geolocation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Visual verification:</strong> Always use the integrated mini-map to confirm the "pin" falls where you expect. A common mistake is swapping Latitude and Longitude, which usually places the point in the middle of the ocean or on the wrong continent.',
    },
    {
      type: 'paragraph',
      html: '<strong>Watch the signs:</strong> If you use DD, remember that West (W) is negative. In New York (-74.00), forgetting the minus sign would place you in central Asia instead of the USA.',
    },
    {
      type: 'paragraph',
      html: 'In summary, mastering coordinates is mastering your environment. Whether you are configuring your drone\'s Failsafe or plotting a maritime navigation route, our tool is here to ensure that every degree, minute, and second counts. Explore the world with the precision your missions deserve!',
    },
  ],
  faq: [
    {
      question: 'What is the difference between DD and DMS?',
      answer: 'DD (Decimal Degrees) uses a single number with decimals (e.g., 51.50). DMS (Degrees, Minutes, Seconds) divides the degree into sexagesimal fractions (e.g., 51° 30\' 0").',
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
  ],
  bibliography: [
    {
      name: 'WGS 84 (World Geodetic System 1984): The global technical standard for mapping and GPS.',
      url: 'https://en.wikipedia.org/wiki/World_Geodetic_System',
    },
    {
      name: 'USGS: Using GPS and Coordinate Systems.',
      url: 'https://www.usgs.gov/faqs/how-do-i-find-latitude-and-longitude-a-location',
    },
  ],
  howTo: [],
  schemas: [],
};
