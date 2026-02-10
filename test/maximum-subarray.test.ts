import { describe, test, expect } from 'vitest';
import { maxSubArray } from '../src/maximum-subarray';

describe('Test maxSubArray', () => {
  test('Use an empty array [] and find the subarray with the largest sum 0', () => {
    expect(maxSubArray([])).toEqual(0);
  });

  test('Use [-2,1,-3,4,-1,2,1,-5,4] and find the subarray with the largest sum 6', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  test('Use [1] and find the subarray with the largest sum 1', () => {
    expect(maxSubArray([1])).toEqual(1);
  });

  test('Use [5,4,-1,7,8] and find the subarray with the largest sum 23', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });
});
