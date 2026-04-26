import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Locale Completeness Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(tool.entry.i18n).forEach((locale) => {
        describe(`Locale: ${locale}`, () => {
          it('content should load without errors', async () => {
            const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
            const content = (await loader?.()) as ToolLocaleContent;
            expect(content).toBeDefined();
          });
        });
      });
    });
  });

  it('all 5 tools registered', () => {
    expect(ALL_TOOLS.length).toBe(5);
  });
});

