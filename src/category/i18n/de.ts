import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'drones',
  title: 'Drohnen und Funkamateur Tools & Rechner',
  description: 'Optimieren Sie Ihre Flüge und Kommunikation mit kostenlosen Online-Tools. Flugzeitrechner, Akkulaufzeit-Schätzer, GPS-Koordinaten-Konverter und Antennenlängen-Rechner für Hochfrequenz.',
  seo: [
    {
      type: 'title',
      text: 'HF-Ingenieurwesen und Präzisionsflug: Werkzeuge für Piloten und Funker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Amateurfunk und der Drohnenflug im Jahr 2026 sind Bereiche, in denen handwerkliches Geschick auf Hochfrequenztechnik (HF) trifft. In diesem Bereich bieten wir eine Suite von <strong>kostenlosen Online-Tools</strong> an, die für FPV-Enthusiasten, kommerzielle RPAS-Piloten und Funkband-Betreiber entwickelt wurden. Die Grenzen Ihrer mobilen Ausrüstung und die Gesetze der Wellenausbreitung zu verstehen, macht den Unterschied zwischen einer erfolgreichen Mission und einem kostspieligen technischen Ausfall aus.',
    },
    {
      type: 'paragraph',
      html: 'Von der Planung der Flugautonomie bis zum Bau kundenspezifischer Antennen und der geopräzisen Navigation geben Ihnen unsere Dienstprogramme die Datensicherheit, um Ihre Projekte in die Luft oder auf die Wellen zu bringen.',
    },
    {
      type: 'title',
      text: 'Flugplanung: Zeit und Akku-Autonomie (mAh / Amps)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Wissen um das reale Betriebsfenster Ihrer Drohne ist lebenswichtig für die Sicherheit. Unser <strong>Flugzeitrechner</strong> schätzt die Gesamtautonomie basierend auf den Milliamperestunden (mAh) des Akkus und dem Durchschnittsverbrauch der Motoren. Lassen Sie sich von der Telemetrie nicht durch kritische Spannungen weit weg von zu Hause überraschen.',
    },
    {
      type: 'title',
      text: 'Antennentechnik: Wellenlänge und Funkfrequenz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Übertragungseffizienz hängt von der Resonanz ab. Der <strong>Antennenrechner</strong> ermittelt die exakte physische Länge, die für Dipole, 1/2- und 1/4-Wellen-Stabantennen je nach gewünschter Betriebsfrequenz (VHF, UHF, ISM-Bänder) erforderlich ist. Maximieren Sie die Reichweite und reduzieren Sie das SWR (Stehwellenverhältnis) Ihrer Kommunikationssysteme.',
    },
    {
      type: 'title',
      text: 'Geo-präzise Navigation: GPS-Koordinaten-Konverter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Unverzichtbar für Suchmissionen, Kartierung oder Funkpeilung. Der <strong>Koordinatenkonverter</strong> übersetzt Formate von Dezimalgraden in DMS (Grad, Minuten, Sekunden) bidirektional und bietet eine Kartenansicht, um die Genauigkeit Ihres Point of Interest vor dem Start zu bestätigen.',
    },
    {
      type: 'list',
      items: [
        '<strong>RPAS-Sicherheit:</strong> Vermeiden Sie Notlandungen aufgrund unvorhergesehener Batteriezyklen-Erschöpfung.',
        '<strong>HF-Optimierung:</strong> Bauen Sie Ihre eigenen Hochleistungsantennen mit präzisen physischen Maßen basierend auf der Lichtgeschwindigkeit im Leiter.',
        '<strong>Geo-referenzierte Missionen:</strong> Arbeiten Sie flüssig mit verschiedenen Kartenstandards und internationalen Koordinaten.',
        '<strong>Privatsphäre in der Luft:</strong> Ihre Flugpläne und Koordinaten werden lokal verarbeitet; wir laden keine sensiblen Daten in Drittanbieter-Clouds hoch.',
      ],
    },
    {
      type: 'title',
      text: 'Luftfahrtregulierung und Betreiberzertifizierung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Drohnenfliegen erfordert heute ein Verständnis der Regulierung. In der EU erfordert die EASA (European Union Aviation Safety Agency) Zertifizierungen für verschiedene Betriebskategorien. In den USA verlangt die FAA (Federal Aviation Administration) eine Part-107-Lizenz. Jede Gerichtsbarkeit hat Höhenbegrenzungen, Flugverbotszonen (NOTAM), Versicherungsanforderungen und Registrierungspflichten.',
    },
    {
      type: 'paragraph',
      html: 'Unsere Planungstools helfen Ihnen bei der Überprüfung von Autonomie, Sichtwinkeln für Kartierungen und Flugzeiten. Wenn Sie dies mit Daten aus Flugbeschränkungsgebieten kombinieren, können Sie Missionen planen, die technisch optimal UND legal sind. Das Fliegen ohne Beachtung der Vorschriften ist kostspielig (Bußgelder von über 1000 € in Europa), weshalb eine gründliche Planung obligatorisch ist.',
    },
    {
      type: 'title',
      text: 'Gewerbliche Anwendungen: Photogrammetrische Kartierung und Inspektion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Drohnen haben die industrielle Inspektion und Topographie revolutioniert. Ein Dachinspektor kann eine Drohne einsetzen, um Schäden zu identifizieren, ohne sein Leben zu riskieren. Ein Agraringenieur nutzt Drohnen, um Wasserstress in Kulturen mittels Wärmebildkameras zu kartieren. Ein Bauunternehmen nutzt Drohnen-Photogrammetrie, um den Baufortschritt in 3D zu dokumentieren.',
    },
    {
      type: 'paragraph',
      html: 'Jede Anwendung erfordert unterschiedliche Autonomie, Nutzlast und Reichweiten. Eine Photogrammetrie-Mission in 100 Metern Höhe über einem 10 Hektar großen Gelände kann mehr als 20 Minuten autonomen Flug erfordern. Unsere Autonomierechner ermöglichen es Ihnen zu modellieren: Gewicht der Last (Kamera, Sensor), Anzahl der Batterien, Flugzyklen pro Tag. Daraus berechnen Sie den ROI: Wenn Sie 5 Batterien mit 4500 mAh zu je 50 € benötigen, beträgt Ihre Anfangsinvestition in Batterien 250 €. Rechtfertigt die Mission dies? Unsere Tools helfen Ihnen bei dieser Berechnung.',
    },
    {
      type: 'title',
      text: 'Funkamateur-Gemeinschaft: HF-, VHF-, UHF-Bänder und Satelliten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Funkamateure (HAM-Radio) sind eine globale Gemeinschaft von über 2 Millionen Betreibern, die ohne Internet kommunizieren. Sie nutzen Frequenzbänder, die von internationalen Gremien (IARU - International Amateur Radio Union) zugewiesen werden. VHF (144-146 MHz im 2-Meter-Band) ist das zugänglichste Band für den Einstieg, mit typischen Reichweiten von 20-100 km je nach Antenne.',
    },
    {
      type: 'paragraph',
      html: 'Das Verständnis für die Berechnung von Antennen für Ihr Band ist essenziell. Ein Amateur, der auf 2 Metern (144-146 MHz) senden möchte, benötigt eine Halbwellenantenne von etwa 1 Meter Länge. Unser Generator berechnet dies: Sie geben einfach die Frequenz ein, geben an, ob Sie 1/4, 1/2 oder volle Wellenlänge wünschen, und erhalten das exakte Maß. Bauen Sie Ihre Antenne, stimmen Sie sie ab und verbinden Sie sich mit der Welt, nur mit einem Funkgerät und einer selbstgebauten Antenne. Es ist eine zugängliche und bescheidene Technologie, die Kriege, Katastrophen und Stromausfälle überlebt.',
    },
    {
      type: 'title',
      text: 'Die Zukunft der persönlichen Luftmobilität 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im Jahr 2026 ist die Integration von Drohnen in den gemeinsamen Luftraum eine geregelte Realität. Die Fähigkeit von Amateuren, unter professionellen Standards der Wartung und technischen Planung zu operieren, ist der Schlüssel für das Zusammenleben. Diese Werkzeuge sind Teil des Engagements für Exzellenz und Sicherheit, das jeder Pilot und Funkamateur aufrechterhalten sollte.',
    },
  ],
};
