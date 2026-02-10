import { describe, test, expect } from 'vitest';
import { moveZeroes, moveZeroes2 } from '../src/move-zeroes';

describe('Test moveZeroes', () => {
  test('Use array [0]', () => {
    expect(moveZeroes([0])).toEqual([0]);
  });

  test('Use array [0,1,0,3,12]', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });

  test('Use array [0, 1, 0, 3, 12, 0, 23, 5, 0]', () => {
    expect(moveZeroes([0, 1, 0, 3, 12, 0, 23, 5, 0])).toEqual([
      1, 3, 12, 23, 5, 0, 0, 0, 0,
    ]);
  });
});

describe('Test moveZeroes2', () => {
  test('Use array [0]', () => {
    expect(moveZeroes2([0])).toEqual([0]);
  });

  test('Use array [0,1,0,3,12]', () => {
    expect(moveZeroes2([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });

  test('Use array [0, 1, 0, 3, 12, 0, 23, 5, 0]', () => {
    expect(moveZeroes2([0, 1, 0, 3, 12, 0, 23, 5, 0])).toEqual([
      1, 3, 12, 23, 5, 0, 0, 0, 0,
    ]);
  });
});
