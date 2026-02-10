import { describe, test, expect } from 'vitest';
import { twoSum } from '../src/two-sum';

describe('Test twoSum function using two inner for loops', () => {
  test('Returns correct indicies based on the numeric array and target sum', () => {
    expect(twoSum([], 0)).toEqual([]);
  });

  test('Returns correct indicies based on the numeric array [2, 7, 11, 15] and target sum 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('Returns correct indicies based on the numeric array [2, 7, 11, 15] and target sum 22', () => {
    expect(twoSum([2, 7, 11, 15], 22)).toEqual([1, 3]);
  });

  test('Returns correct indicies based on the numeric array [3, 2, 4] and target sum 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('Returns correct indicies based on the numeric array [3, 3] and target sum 6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('Returns correct indicies based on the numeric array [1, 4, 9, 13, 15, 22, 40, 60, 71, 89] and target sum 90', () => {
    expect(twoSum([1, 4, 9, 13, 15, 22, 40, 60, 71, 89], 90)).toEqual([0, 9]);
  });
});
