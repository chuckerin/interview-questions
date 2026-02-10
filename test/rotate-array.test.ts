import { describe, test, expect } from 'vitest';
import { rotateArray, rotateArray2 } from '../src/rotate-array';

describe('Test rotateArray function', () => {
  test('Use array [] and steps 0', () => {
    expect(rotateArray([], 0)).toEqual([]);
  });

  test('Use array [1,2,3,4,5,6,7] and steps 3', () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5, 6, 7, 1, 2, 3, 4,
    ]);
  });

  test('Use array [-1,-100,3,99] and steps 2', () => {
    expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
  });
});

describe('Test rotateArray function 2', () => {
  test('Use array [] and steps 0', () => {
    expect(rotateArray2([], 0)).toEqual([]);
  });

  test('Use array [1,2,3,4,5,6,7] and steps 3', () => {
    expect(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5, 6, 7, 1, 2, 3, 4,
    ]);
  });

  test('Use array [-1,-100,3,99] and steps 2', () => {
    expect(rotateArray2([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
  });
});
