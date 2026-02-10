import { describe, test, expect } from 'vitest';
import { hasBalancePoint } from '../src/has-balance-point';

describe('Test hasBlancePoint function', () => {
  test('hasBalancePoint([])', () => {
    expect(hasBalancePoint([])).toEqual(true);
  });

  test('hasBalancePoint([0])', () => {
    expect(hasBalancePoint([0])).toEqual(true);
  });

  test('hasBalancePoint([42,6,19,11,11,7])', () => {
    expect(hasBalancePoint([42, 6, 19, 11, 11, 7])).toEqual(true);
  });

  test('hasBalancePoint([1,2])', () => {
    expect(hasBalancePoint([1, 2])).toEqual(false);
  });
});
