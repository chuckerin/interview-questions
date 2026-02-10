import { describe, test, expect } from 'vitest';
import { sumFibonacci } from '../src/sum-fibonacci';

describe('Sum Digits function using regex and reducing', () => {
  test('Test sumFibonacci function', () => {
    expect(
      sumFibonacci([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]),
    ).toEqual(212);
  });
});
