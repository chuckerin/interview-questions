import { describe, test, expect } from 'vitest';
import {
  sumDigits,
  sumDigits2,
  sumDigits3,
  sumDigits4,
  sumDigits5,
  sumDigits6,
} from '../src/sum-digits';

describe('Sum Digits function using regex and reducing', () => {
  test('Sum Digits 2', () => {
    expect(sumDigits(2)).toEqual(2);
  });
  test('Sum Digits 412', () => {
    expect(sumDigits(412)).toEqual(7);
  });
  test('Sum Digits 8.19', () => {
    expect(sumDigits(8.19)).toEqual(18);
  });
  test('Sum Digits 4.12', () => {
    expect(sumDigits(4.12)).toEqual(7);
  });
  test('Sum Digits 0', () => {
    expect(sumDigits(0)).toEqual(0);
  });
  test('Sum Digits -14', () => {
    expect(sumDigits(-14)).toEqual(5);
  });
  test('Sum Digits -1.4', () => {
    expect(sumDigits(-1.4)).toEqual(5);
  });
});

describe('Sum Digits function using map and parseInt', () => {
  test('Sum Digits 2', () => {
    expect(sumDigits2(2)).toEqual(2);
  });
  test('Sum Digits 412', () => {
    expect(sumDigits2(412)).toEqual(7);
  });
  test('Sum Digits 8.19', () => {
    expect(sumDigits2(8.19)).toEqual(18);
  });
  test('Sum Digits 4.12', () => {
    expect(sumDigits2(4.12)).toEqual(7);
  });
  test('Sum Digits 0', () => {
    expect(sumDigits2(0)).toEqual(0);
  });
  test('Sum Digits -14', () => {
    expect(sumDigits2(-14)).toEqual(5);
  });
  test('Sum Digits -1.4', () => {
    expect(sumDigits2(-1.4)).toEqual(5);
  });
});

describe('Sum Digits function using for loop and regex', () => {
  test('Sum Digits 2', () => {
    expect(sumDigits3(2)).toEqual(2);
  });
  test('Sum Digits 412', () => {
    expect(sumDigits3(412)).toEqual(7);
  });
  test('Sum Digits 8.19', () => {
    expect(sumDigits3(8.19)).toEqual(18);
  });
  test('Sum Digits 4.12', () => {
    expect(sumDigits3(4.12)).toEqual(7);
  });
  test('Sum Digits 0', () => {
    expect(sumDigits3(0)).toEqual(0);
  });
  test('Sum Digits -14', () => {
    expect(sumDigits3(-14)).toEqual(5);
  });
  test('Sum Digits -1.4', () => {
    expect(sumDigits3(-1.4)).toEqual(5);
  });
});

describe('Sum Digits function using a spreader, a reducer and isNaN', () => {
  test('Sum Digits 2', () => {
    expect(sumDigits4(2)).toEqual(2);
  });
  test('Sum Digits 412', () => {
    expect(sumDigits4(412)).toEqual(7);
  });
  test('Sum Digits 8.19', () => {
    expect(sumDigits4(8.19)).toEqual(18);
  });
  test('Sum Digits 4.12', () => {
    expect(sumDigits4(4.12)).toEqual(7);
  });
  test('Sum Digits 0', () => {
    expect(sumDigits4(0)).toEqual(0);
  });
  test('Sum Digits -14', () => {
    expect(sumDigits4(-14)).toEqual(5);
  });
  test('Sum Digits -1.4', () => {
    expect(sumDigits4(-1.4)).toEqual(5);
  });
});

describe('Sum Digits function using a spreader, a reducer and isNaN', () => {
  test('Sum Digits 2', () => {
    expect(sumDigits5(2)).toEqual(2);
  });
  test('Sum Digits 412', () => {
    expect(sumDigits5(412)).toEqual(7);
  });
  test('Sum Digits 8.19', () => {
    expect(sumDigits5(8.19)).toEqual(18);
  });
  test('Sum Digits 4.12', () => {
    expect(sumDigits5(4.12)).toEqual(7);
  });
  test('Sum Digits 0', () => {
    expect(sumDigits5(0)).toEqual(0);
  });
  test('Sum Digits -14', () => {
    expect(sumDigits5(-14)).toEqual(5);
  });
  test('Sum Digits -1.4', () => {
    expect(sumDigits5(-1.4)).toEqual(5);
  });
});

describe('Sum Digits function using a spreader, a reducer and isNaN', () => {
  test('Sum Digits 2', () => {
    expect(sumDigits6(2)).toEqual(2);
  });
  test('Sum Digits 412', () => {
    expect(sumDigits6(412)).toEqual(7);
  });
  test('Sum Digits 8.19', () => {
    expect(sumDigits6(8.19)).toEqual(18);
  });
  test('Sum Digits 4.12', () => {
    expect(sumDigits6(4.12)).toEqual(7);
  });
  test('Sum Digits 0', () => {
    expect(sumDigits6(0)).toEqual(0);
  });
  test('Sum Digits -14', () => {
    expect(sumDigits6(-14)).toEqual(5);
  });
  test('Sum Digits -1.4', () => {
    expect(sumDigits6(-1.4)).toEqual(5);
  });
});
