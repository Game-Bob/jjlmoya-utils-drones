import type { FpvDroneLapTimerLocaleContent } from '../entry';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import type { SEOSection } from '../../../types';
import { BIBLIOGRAPHY_ITEMS } from '../bibliography';

const slug = 'fpv-drone-lap-timer';
const title = 'FPV Drone Race Lap and Split Timer';
const description = 'Interactive lap timer for FPV drone racing with FAI acoustic start sequence, split delta pacing, fastest lap alerts, lap consistency index, and speed telemetry.';

const ui = {
  setupHeading: 'Track and Session Configuration',
  trackLengthLabel: 'Track Circuit Length',
  trackLengthUnit: 'meters',
  targetLapsLabel: 'Target Laps Count',
  targetLapsUnit: 'laps (0 for open practice)',
  batteryCapacityLabel: 'Battery Pack Capacity',
  batteryCapacityUnit: 'mAh',
  soundEnabledLabel: 'Enable Acoustic Tones',
  debounceThresholdLabel: 'Lap Trigger Debounce Guard',
  debounceThresholdUnit: 'seconds',
  presetMultiGpLabel: 'MultiGP Spec (250m / 3 Laps)',
  presetWhoopLabel: 'Tiny Whoop (65m / 5 Laps)',
  presetSprintLabel: 'High Speed Sprint (400m / 2 Laps)',
  startCountdownButton: 'Start FAI Race Countdown',
  pauseTimerButton: 'Pause Session',
  resumeTimerButton: 'Resume Timer',
  resetTimerButton: 'Reset Session',
  recordLapButton: 'RECORD LAP',
  spacebarHint: 'Press SPACEBAR or tap the giant button to mark lap finish',
  statusIdle: 'Ready for Start',
  statusCountdown: 'FAI Countdown in Progress',
  statusRunning: 'Race Timer Active',
  statusPaused: 'Session Paused',
  statusFinished: 'Race Completed',
  currentLapHeading: 'Current Lap Time',
  lapNumberPrefix: 'Lap',
  lastLapHeading: 'Last Lap',
  fastestLapHeading: 'Fastest Lap',
  averageLapHeading: 'Average Lap',
  deltaBestHeading: 'Delta to Session Best',
  consistencyIndexHeading: 'Lap Consistency Index',
  estimatedSpeedHeading: 'Estimated Average Speed',
  estimatedBatteryHeading: 'Estimated Battery Used',
  speedUnitKmh: 'km/h',
  speedUnitMph: 'mph',
  batteryUsedUnit: 'mAh',
  batteryRemainingUnit: 'mAh remaining',
  lapHistoryHeading: 'Lap Times and Pace Comparison',
  lapColumnHeader: 'Lap #',
  timeColumnHeader: 'Lap Time',
  splitColumnHeader: 'Delta to Best',
  speedColumnHeader: 'Average Speed',
  batteryColumnHeader: 'Est. Battery Drain',
  noLapsRecordedNotice: 'No laps recorded yet. Start the countdown and press Spacebar or tap to register your first lap.',
  consistencyRatingElite: 'Elite Consistency',
  consistencyRatingPro: 'Pro Racer Consistency',
  consistencyRatingClub: 'Club Racer Consistency',
  consistencyRatingNovice: 'Training Consistency',
  fastestLapBadge: 'FASTEST LAP',
  sessionSummaryHeading: 'Session Summary & Export',
  totalTimeLabel: 'Total Race Duration',
  completedLapsLabel: 'Completed Laps',
  exportCsvButton: 'Export Laps to CSV',
  copySummaryButton: 'Copy Text Summary',
  copiedNotice: 'Session summary copied to clipboard!',
};

const faqItems = [
  {
    question: 'How does the FAI acoustic start sequence work in this timer?',
    answer: 'The start sequence mirrors official Fédération Aéronautique Internationale (FAI) CIAM F9U drone racing rules. Four distinct countdown beeps spaced one second apart prepare the pilot, followed by an immediate high-frequency buzzer tone signaling the race start and triggering timer zero.',
  },
  {
    question: 'How is the Lap Consistency Index calculated?',
    answer: 'The consistency score evaluates the standard deviation of your completed lap times relative to your session average lap time. A score above 95 percent represents exceptional line consistency, while wider fluctuations indicate throttle or line inconsistency.',
  },
  {
    question: 'Can I use a physical controller or flight radio button to trigger laps?',
    answer: 'Yes. Any wireless keyboard, Bluetooth foot pedal, or mapped gamepad switch that sends a Spacebar keypress will trigger lap recording instantly without requiring you to look at or touch the screen.',
  },
  {
    question: 'Why is there a debounce guard on the lap record button?',
    answer: 'FPV race gates are traversed in seconds, but accidental double-touches or switch bounce can register false split-second laps. The debounce guard rejects triggers occurring under a user-defined threshold (default 3 seconds).',
  },
  {
    question: 'How accurate is the estimated average speed calculation?',
    answer: 'The speed estimate calculates the linear velocity based on the declared track center-line length divided by the recorded lap duration. Actual drone speed through corners will vary based on racing line radius and banking angle.',
  },
];

const howToSteps = [
  {
    name: 'Set Track Length and Practice Mode',
    text: 'Enter your track circuit length in meters and target lap count, or choose a preset like MultiGP Spec or Tiny Whoop.',
  },
  {
    name: 'Initiate FAI Acoustic Start Countdown',
    text: 'Click Start Countdown. Listen to the 4 preparatory beeps followed by the high-pitch tone at race start.',
  },
  {
    name: 'Record Laps as You Cross the Finish Gate',
    text: 'Tap the giant on-screen trigger button or tap Spacebar on your keyboard each time your drone clears the start/finish gate.',
  },
  {
    name: 'Analyze Telemetry, Splits, and Consistency',
    text: 'Inspect the pace comparison chart, split deltas, and consistency index score, then export your telemetry data to CSV.',
  },
];

const seoSections: SEOSection[] = [
  {
    type: 'title',
    text: 'Principles of High-Precision Lap Timing in FPV Multirotor Drone Racing',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Competitive FPV drone racing demands sub-second precision and unflinching line consistency. Pilots piloting 5-inch multirotors reach speeds in excess of 140 km/h through complex three-dimensional gates, flags, and dive loops. Training effectively requires immediate auditory feedback at the start line, split-second lap marking, and analytical insight into pace degradation across multi-lap heats.',
  },
  {
    type: 'title',
    text: 'Comparison of Multirotor Racing Track Classes and Timing Parameters',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Class / Spec', 'Typical Circuit Length', 'Target Heat Laps', 'Average Lap Time', 'Top Speed Range', 'Recommended Debounce'],
    rows: [
      ['Tiny Whoop (65mm 1S)', '50m to 80m', '5 laps', '8.5s to 13.0s', '35 to 55 km/h', '2.0 seconds'],
      ['Micro 3.5-Inch (4S)', '120m to 180m', '4 laps', '12.0s to 18.0s', '70 to 110 km/h', '2.5 seconds'],
      ['MultiGP Spec 5-Inch (6S)', '200m to 300m', '3 laps', '14.0s to 22.0s', '100 to 150 km/h', '3.0 seconds'],
      ['Open Field Sprint (6S/8S)', '350m to 500m', '2 laps', '20.0s to 32.0s', '130 to 180 km/h', '4.0 seconds'],
    ],
  },
  {
    type: 'title',
    text: 'Acoustic Countdown Sequences and FAI F9U Sporting Regulations',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Under the Fédération Aéronautique Internationale (FAI) CIAM Section 4 regulations for drone racing, races commence with standardized acoustic signals rather than visual flags to ensure equitable pilot reaction times across video goggles. The standard countdown consists of four 440 Hz tones at one-second intervals, culminating in a 880 Hz high tone upon which pilots arm and launch.',
  },
  {
    type: 'list',
    items: [
      'Tone 1 to 4: Pre-arm acoustic alerts for pilots to settle throttle positions and establish situational focus.',
      'Tone 5 (Go): Instant launch signal where timing registers immediately at t = 0.',
      'Acoustic Confirmation: High-contrast audio chirps verify lap registration without forcing pilots to break goggle line-of-sight.',
      'Personal Best Chime: Harmonic alert triggers when the current lap beats the existing session benchmark.',
    ],
  },
  {
    type: 'title',
    text: 'Understanding the Lap Consistency Index and Race Strategy',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'While setting a blistering single lap is thrilling, multirotor championship heats are won by consistency. The Lap Consistency Index quantifies variance across heats. A pilot whose laps vary by less than 0.3 seconds maintains smooth throttle management, avoids turbulent propwash lines, and preserves battery voltage for the final sprint.',
  },
  {
    type: 'tip',
    title: 'Field Practice Tip for Gate Timing',
    html: 'Position your timing tablet or mobile phone within clear audio reach near your pilot station. Use a Bluetooth media button or wireless keyboard resting on your flight case to trigger laps effortlessly with your foot or thumb.',
  },
];

const schemas: FpvDroneLapTimerLocaleContent['schemas'] = [
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
    description,
    step: howToSteps.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.name,
      text: s.text,
    })),
  } as WithContext<HowTo>,
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  } as WithContext<SoftwareApplication>,
];

export const content: FpvDroneLapTimerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo: seoSections,
  faq: faqItems,
  howTo: howToSteps,
  bibliography: BIBLIOGRAPHY_ITEMS,
  schemas,
};
