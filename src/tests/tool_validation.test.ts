import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { dronesCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 5 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(5);
    });

    it('dronesCategory should be defined', () => {
      expect(dronesCategory).toBeDefined();
      expect(dronesCategory.i18n).toBeDefined();
    });
  });
});

