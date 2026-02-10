import { describe, test, expect } from 'vitest';

import {
  mergeSortedArrays,
  mergeSortedArrays2,
  mergeSortedArrays3,
  mergeSortedArrays4,
  mergeSortedArrays5,
} from '../src/merge-sorted-arrays';

describe('Test mergeSortedArrays', () => {
  test('Returns sorted array from empty arrays', () => {
    expect(mergeSortedArrays([], [])).toEqual([]);
  });

  test('Returns sorted array from 2 sorted arrays using 3 while loops', () => {
    expect(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])).toEqual([
      0, 3, 4, 4, 6, 30, 31,
    ]);
  });
});

describe('Test mergeSortedArrays 2', () => {
  test('Returns sorted array from empty arrays', () => {
    expect(mergeSortedArrays2([], [])).toEqual([]);
  });

  test('Returns sorted array from 2 sorted arrays using the spread operator', () => {
    expect(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30])).toEqual([
      0, 3, 4, 4, 6, 30, 31,
    ]);
  });
});

describe('Test mergeSortedArrays 3', () => {
  test('Returns sorted array from empty arrays', () => {
    expect(mergeSortedArrays3([], [])).toEqual([]);
  });

  test('Returns sorted array from 2 sorted arrays using a while loop', () => {
    expect(mergeSortedArrays3([0, 3, 4, 31], [4, 6, 30])).toEqual([
      0, 3, 4, 4, 6, 30, 31,
    ]);
  });
});

describe('Test mergeSortedArrays 4', () => {
  test('Returns sorted array from empty arrays', () => {
    expect(mergeSortedArrays4([], [])).toEqual([]);
  });

  test('Returns sorted array from 2 sorted arrays using a for loop in a for loop', () => {
    expect(mergeSortedArrays4([0, 3, 4, 31], [4, 6, 30])).toEqual([
      0, 3, 4, 4, 6, 30, 31,
    ]);
  });
});

describe('Test mergeSortedArrays 5', () => {
  test('Returns sorted array from empty arrays', () => {
    expect(mergeSortedArrays5([], [])).toEqual([]);
  });

  test('Returns sorted array from 2 sorted arrays using push and sort', () => {
    expect(mergeSortedArrays5([0, 3, 4, 31], [4, 6, 30])).toEqual([
      0, 3, 4, 4, 6, 30, 31,
    ]);
  });
});
