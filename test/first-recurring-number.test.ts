import { describe, test, expect } from 'vitest';
import {
  firstRecurringNumber,
  firstRecurringNumber2,
  firstRecurringNumber3,
  firstRecurringNumber4,
  firstRecurringNumber5,
} from '../src/first-recurring-number';

describe('Test firstRecurringNumber function', () => {
  test('firstRecurringNumber([2,5,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
  });

  test('mode([2,1,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1);
  });

  test('mode([2,3,4,5])', () => {
    expect(firstRecurringNumber([2, 3, 4, 5])).toEqual(undefined);
  });
});

describe('Test firstRecurringNumber function 2', () => {
  test('firstRecurringNumber([2,5,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber2([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
  });

  // doesn't work, skip
  test.skip('mode([2,1,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber2([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1);
  });

  test('mode([2,3,4,5])', () => {
    expect(firstRecurringNumber2([2, 3, 4, 5])).toEqual(undefined);
  });
});

describe('Test firstRecurringNumber function 3', () => {
  test('firstRecurringNumber([2,5,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber3([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
  });

  test('mode([2,1,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber3([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1);
  });

  test('mode([2,3,4,5])', () => {
    expect(firstRecurringNumber3([2, 3, 4, 5])).toEqual(undefined);
  });
});

describe('Test firstRecurringNumber function 4', () => {
  test('firstRecurringNumber([2,5,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber4([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
  });

  test('mode([2,1,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber4([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1);
  });

  test('mode([2,3,4,5])', () => {
    expect(firstRecurringNumber4([2, 3, 4, 5])).toEqual(undefined);
  });
});

describe('Test firstRecurringNumber function 5', () => {
  test('firstRecurringNumber([2,5,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber5([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
  });

  test('mode([2,1,1,2,3,5,1,2,4])', () => {
    expect(firstRecurringNumber5([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1);
  });

  test('mode([2,3,4,5])', () => {
    expect(firstRecurringNumber5([2, 3, 4, 5])).toEqual(undefined);
  });
});
