import { describe, test, expect } from 'vitest';
import { sum } from '../src';

describe('Sum function', () => {
  test('Returns correct sum', () => {
    expect(sum(3, 4)).toEqual(7);
  });

  test('Sum should be 7 and not 8', () => {
    expect(sum(3, 4)).not.toEqual(8);
  });
});
