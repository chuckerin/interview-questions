import { describe, test, expect } from 'vitest';
import { sortingType, sortingType2 } from '../src/sorting-type';

describe('Test sortingType function', () => {
  test('sortingType([0,1])', () => {
    expect(sortingType([0, 1])).toEqual(1);
  });

  test('sortingType([-1,4,2])', () => {
    expect(sortingType([-1, 4, 2])).toEqual(0);
  });

  test('sortingType([10,1,100])', () => {
    expect(sortingType([10, 1, 100])).toEqual(0);
  });

  test('sortingType([0,-1,-100])', () => {
    expect(sortingType([0, -1, -100])).toEqual(-1);
  });

  test('sortingType([-2,4,10,19])', () => {
    expect(sortingType([-2, 4, 10, 19])).toEqual(1);
  });

  test('sortingType([1,11,101])', () => {
    expect(sortingType([1, 11, 101])).toEqual(1);
  });

  test('sortingType([101,11,1])', () => {
    expect(sortingType([101, 11, 1])).toEqual(-1);
  });

  test('sortingType([14,-2,1.5])', () => {
    expect(sortingType([14, -2, 1.5])).toEqual(0);
  });

  test('sortingType([18,18.1,19])', () => {
    expect(sortingType([18, 18.1, 19])).toEqual(1);
  });

  test('sortingType([0.9,0.4,-0.1,-0.12,-1])', () => {
    expect(sortingType([0.9, 0.4, -0.1, -0.12, -1])).toEqual(-1);
  });
});

describe('Test sortingType function 2 using annotated functions', () => {
  test('sortingType([0,1])', () => {
    expect(sortingType2([0, 1])).toEqual(1);
  });

  test('sortingType([-1,4,2])', () => {
    expect(sortingType2([-1, 4, 2])).toEqual(0);
  });

  test('sortingType([10,1,100])', () => {
    expect(sortingType2([10, 1, 100])).toEqual(0);
  });

  test('sortingType([0,-1,-100])', () => {
    expect(sortingType2([0, -1, -100])).toEqual(-1);
  });

  test('sortingType([-2,4,10,19])', () => {
    expect(sortingType2([-2, 4, 10, 19])).toEqual(1);
  });

  test('sortingType([1,11,101])', () => {
    expect(sortingType2([1, 11, 101])).toEqual(1);
  });

  test('sortingType([101,11,1])', () => {
    expect(sortingType2([101, 11, 1])).toEqual(-1);
  });

  test('sortingType([14,-2,1.5])', () => {
    expect(sortingType2([14, -2, 1.5])).toEqual(0);
  });

  test('sortingType([18,18.1,19])', () => {
    expect(sortingType2([18, 18.1, 19])).toEqual(1);
  });

  test('sortingType([0.9,0.4,-0.1,-0.12,-1])', () => {
    expect(sortingType2([0.9, 0.4, -0.1, -0.12, -1])).toEqual(-1);
  });
});
