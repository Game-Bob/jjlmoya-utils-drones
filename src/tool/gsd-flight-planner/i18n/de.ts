import type { GsdFlightPlannerLocaleContent } from '../index';
import type { WithContext, SoftwareApplication, FAQPage, HowTo } from 'schema-dts';
import { bibliography } from '../bibliography';

const slug = 'gsd-flugplaner';
const title = 'GSD Flugplaner: Bodenauflösungsrechner für Drohnen';
const description = 'Berechnen Sie die Bodenauflösung (GSD) für Photogrammetrie-Missionen. Unterstützung für DJI, Autel und benutzerdefinierte Kameras. Echtzeit-Flugplanung mit visuellen Qualitätsindikatoren.';

const faqItems = [
  {
    question: 'Was ist Ground Sample Distance (GSD)?',
    answer: 'GSD ist der Abstand auf dem Boden, der durch einen Pixel in Ihrem Bild dargestellt wird. Eine niedrigere GSD bedeutet höhere Auflösung und mehr Details. Zum Beispiel ermöglicht eine GSD von 1 cm/px das Erkennen von Details ab 1 Zentimeter Größe, was für Vermessungen entscheidend ist.',
  },
  {
    question: 'Wo finde ich die Kameraspezifikationen meiner Drohne?',
    answer: 'Überprüfen Sie das Handbuch Ihrer Drohne auf Sensorabmessungen und Brennweite. Alternativ können Sie unsere Kamera-Voreinstellungen für beliebte Modelle wie die DJI Mavic 3E oder Autel EVO II verwenden. Bei benutzerdefinierten Kameras messen Sie die Sensorgröße anhand der Linsenspezifikationen.',
  },
  {
    question: 'Welche GSD benötige ich für verschiedene Missionstypen?',
    answer: 'Hochpräzise Topographie: 1-2 cm/px. Standardkartierung: 2-5 cm/px. Inspektion und Überwachung: 5-10 cm/px. Visuelle Untersuchungen: 10+ cm/px. Wählen Sie basierend auf den Genauigkeitsanforderungen Ihres Projekts.',
  },
  {
    question: 'Was ist Bildüberlappung und warum ist sie wichtig?',
    answer: 'Überlappung ist der Prozentsatz der Fläche, der in aufeinanderfolgenden Fotos erscheint. Eine hohe Überlappung (60-80%) gewährleistet eine vollständige Abdeckung und verbessert die Qualität des 3D-Modells. Die Längsüberlappung beeinflusst den Fotoabstand; die Querüberlappung beeinflusst die Anzahl der Fluglinien.',
  },
  {
    question: 'Wie berechne ich die ideale Flughöhe?',
    answer: 'Verwenden Sie diesen Rechner: Gewünschte GSD × Brennweite ÷ Sensorbreite = Höhe. Der Rechner erledigt dies automatisch und zeigt die maximale sichere Höhe an, um Ihre Zielpräzision beizubehalten und Bewegungsunschärfe zu vermeiden.',
  },
];

const howToSteps = [
  {
    name: 'Kamera auswählen oder konfigurieren',
    text: 'Wählen Sie aus vorkonfigurierten Modellen (DJI Mavic 3E, Autel EVO II etc.) oder geben Sie Sensorabmessungen und Brennweite manuell ein. Voreinstellungen laden alle Parameter sofort.',
  },
  {
    name: 'Flughöhe einstellen',
    text: 'Verwenden Sie den Höhenschieberegler, um die Höhe über Grund (AGL) anzupassen. Beobachten Sie die GSD-Aktualisierung in Echtzeit, um zu sehen, wie die Höhe die Bildauflösung beeinflusst.',
  },
  {
    name: 'Überlappungsanforderungen definieren',
    text: 'Stellen Sie die Prozentsätze für Längs- und Querüberlappung ein. Eine höhere Überlappung gewährleistet eine vollständige Abdeckung, erhöht jedoch die Missionszeit und die Anzahl der Bilder.',
  },
  {
    name: 'Ergebnisse prüfen und exportieren',
    text: 'Überprüfen Sie GSD, Abdeckungsbereich und Präzisionsklassifizierung. Erstellen Sie einen Kurzbericht als Anlage zu Ihrem offiziellen Flugplan.',
  },
];

const schemas: GsdFlightPlannerLocaleContent['schemas'] = [
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

export const content: GsdFlightPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    configuration: 'Konfiguration',
    cameraSelection: 'Kameraauswahl',
    manualMode: 'Manueller Modus',
    sensorConfig: 'Sensorkonfiguration',
    width: 'Breite',
    height: 'Höhe',
    focalLength: 'Brennweite',
    imageResolution: 'Bildauflösung',
    w: 'B',
    h: 'H',
    px: 'px',
    altitudeAgl: 'Höhe (AGL)',
    overlapSettings: 'Überlappungskonfiguration',
    forward: 'Längs',
    lateral: 'Quer',
    missionArea: 'Missionsgebiet',
    totalAreaToSurvey: 'Gesamtfläche der Vermessung',
    hectareHint: '1 ha = 10.000 m²',
    inverseCalc: 'Rückwärtsberechnung',
    targetGsd: 'Ziel-GSD',
    maxAltitude: 'Max. Höhe',
    reset: 'Zurücksetzen',
    results: 'Ergebnisse',
    gsdResult: 'Bodenauflösung (GSD)',
    gsdValue: 'GSD',
    gsdUnit: 'cm/px',
    highPrec: 'Hohe Präz.',
    standard: 'Standard',
    inspection: 'Inspektion',
    visual: 'Visuell',
    coveragePerImage: 'Abdeckung pro Bild',
    area: 'Fläche',
    spacing: 'Abstand',
    flightDir: 'Flug →',
    missionMetrics: 'Missionsdaten',
    images: 'Bilder',
    shots: 'Aufnahmen',
    flightLines: 'Fluglinien',
    lines: 'Linien',
    flightTime: 'Flugzeit',
    min: 'Min',
    dataVolume: 'Datenvolumen',
    gb: 'GB',
    copyShareLink: 'Link kopieren',
    downloadReport: 'Bericht herunterladen',
    copiedToClipboard: 'Kopiert!',
    metric: 'Metrisch',
    imperial: 'Imperial',
    classHighPrecision: 'Hochpräzise Topographie',
    classStandard: 'Standardkartierung',
    classInspection: 'Inspektion & Überwachung',
    classVisual: 'Visuelle Untersuchung',
    ultraHighResAlert: 'Ultrahoche Auflösung: Stellen Sie ausreichend Speicher und Rechenleistung sicher',
    lowOverlapAlert: 'Längsüberlappung unter 60%: Kann die Qualität des 3D-Modells beeinträchtigen',
    largeDatasetAlert: 'Sehr großer Datensatz: Erwägen Sie die Aufteilung in mehrere Flüge',
    presetDjiMavic3e: 'DJI Mavic 3E',
    presetDjiMatrice300: 'DJI Matrice 300 RTK',
    presetAutelEvoII: 'Autel EVO II',
    presetDjiAir3s: 'DJI Air 3S',
  },
  seo: [
    {
      type: 'title',
      text: 'GSD-Flugplaner: Der vollständige Photogrammetrie-Rechner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die <strong>Bodenauflösung (GSD)</strong> ist die wichtigste Kennzahl in der Drohnenphotogrammetrie. Ein Rechenfehler kann einen ganzen Flugtag verschwenden und Tausende an verlorener Produktivität kosten. Dieser Rechner eliminiert dieses Risiko.',
    },
    {
      type: 'title',
      text: 'Warum GSD für Profis entscheidend ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ob Sie Land vermessen, 3D-Modelle erstellen oder Infrastruktur überwachen – die GSD bestimmt den Detailgrad, den Sie erfassen können. Eine Mission mit 1 cm/px erfasst Details, die eine Mission mit 5 cm/px übersieht. Aber zu niedriges Fliegen verschwendet Akku und verlängert die Missionszeit unnötig.',
    },
    {
      type: 'title',
      text: 'GSD nach Missionstyp',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Hochpräzise Topographie (1-2 cm/px):</strong> Vermessungsgenauigkeit für Parzellen, Minenstandorte und Ingenieurprojekte.',
        '<strong>Standardkartierung (2-5 cm/px):</strong> Orthomosaike, landwirtschaftliches Monitoring und universelle Karten.',
        '<strong>Inspektion und Überwachung (5-10 cm/px):</strong> Gebäudeinspektionen, Stromleitungsprüfungen und Veränderungserkennung.',
        '<strong>Visuelle Untersuchungen (10+ cm/px):</strong> Großflächige Erkundung und visuelle Bewertung.',
      ],
    },
    {
      type: 'title',
      text: 'Die GSD-Formel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>GSD (cm/px) = (Höhe × Sensorbreite) / (Brennweite × Bildbreite) × 100</code><br/>Dieser Rechner übernimmt die Mathematik. Sie konzentrieren sich auf die Mission.',
    },
    {
      type: 'title',
      text: 'Überlappung: Warum 60-80% das Optimum sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Geringe Überlappung (20-40%) spart Akku, birgt aber das Risiko von Lücken in der Abdeckung. Hohe Überlappung (80%+) garantiert vollständige Abdeckung, verlängert aber die Missionszeit. Der <strong>Bereich von 60-80%</strong> ist der professionelle Standard: Er gewährleistet eine vollständige 3D-Rekonstruktion ohne übermäßige Redundanz.',
    },
    {
      type: 'title',
      text: 'Bessere Missionen mit realen Daten planen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie vor jedem Flug diesen Rechner, um zu bestimmen: die exakte Höhe für Ihre benötigte GSD, wie viele Fotos Sie benötigen, die Gesamtmissionszeit und ob Bewegungsunschärfe ein Risiko darstellt. Mit diesen Daten führen Sie präzise Missionen aus und vermeiden kostspielige Fehler.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToSteps,
  schemas,
};
