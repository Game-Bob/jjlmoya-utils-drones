import { describe, it, expect } from 'vitest';
import { dronesCategory } from '../category';
import { droneFlightTime } from '../tool/drone-flight-time';
import { antennaLengthCalculator } from '../tool/antenna-length-calculator';
import { gpsCoordinatesConverter } from '../tool/gps-coordinates-converter';

// All supported SEO section types that should be rendered
const SUPPORTED_TYPES = new Set([
  'title',
  'paragraph',
  'list',
  'table',
  'tip',
  'card',
  'stats',
  'glossary',
  'code',
  'comparative',
  'diagnostic',
  'proscons',
  'summary',
  'grid',
  'message',
]);

const ENTRIES = [
  { id: 'dronesCategory', i18n: dronesCategory.i18n, isTool: false },
  { id: 'droneFlightTime', i18n: droneFlightTime.i18n, isTool: true },
  { id: 'antennaLengthCalculator', i18n: antennaLengthCalculator.i18n, isTool: true },
  { id: 'gpsCoordinatesConverter', i18n: gpsCoordinatesConverter.i18n, isTool: true },
];

describe('SEO Section Types Validation', () => {
  ENTRIES.forEach((entry) => {
    describe(`${entry.isTool ? 'Tool' : 'Category'}: ${entry.id}`, () => {
      Object.keys(entry.i18n).forEach((locale) => {
        it(`${locale}: All SEO section types should be supported and mapped`, async () => {
          const loader = (entry.i18n as Record<string, () => Promise<{ seo?: unknown[] }>>)[locale];
          const content = await loader();

          if (!content.seo || !Array.isArray(content.seo)) {
            return; // Skip if no SEO content
          }

          const foundTypes = new Set<string>();
          const unsupportedTypes: { type: string; section: unknown }[] = [];

          content.seo.forEach((section: any) => {
            const sectionType = section.type;
            if (!sectionType) {
              unsupportedTypes.push({ type: 'UNDEFINED', section });
              return;
            }

            foundTypes.add(sectionType);

            if (!SUPPORTED_TYPES.has(sectionType)) {
              unsupportedTypes.push({ type: sectionType, section });
            }
          });

          // Report what we found
          if (unsupportedTypes.length > 0) {
            const typesList = unsupportedTypes.map((u) => `"${u.type}"`).join(', ');
            expect.fail(
              `Found unmapped SEO section types in ${entry.id} (${locale}): ${typesList}\n` +
              `Please add handlers for these types in seo.astro or update SUPPORTED_TYPES if they're intentionally missing.\n` +
              `Unmapped sections:\n${JSON.stringify(unsupportedTypes, null, 2)}`
            );
          }

          // Verify we found at least one section
          expect(foundTypes.size).toBeGreaterThan(0);
        });
      });
    });
  });
});
