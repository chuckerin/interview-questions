import { describe, test, expect } from 'vitest';
import {
  invertCase,
  invertCase2,
  invertCase3,
  invertCase4,
  invertCase5,
  invertCase6,
} from '../src/invert-case';

describe('Test Invert Case', () => {
  test('funkey monkey', () => {
    expect(invertCase('funkey monkey')).toEqual('FUNKEY MONKEY');
  });

  test('MONKEY MAGIC', () => {
    expect(invertCase('MONKEY MAGIC')).toEqual('monkey magic');
  });

  test('FlIrPyDuck', () => {
    expect(invertCase('FlIrPyDuck')).toEqual('fLiRpYdUCK');
  });

  test('', () => {
    expect(invertCase('')).toEqual('');
  });
});

describe('Test Invert Case using Bitwise XOR code', () => {
  test('funkey monkey', () => {
    expect(invertCase2('funkey monkey')).toEqual('FUNKEY MONKEY');
  });

  test('MONKEY MAGIC', () => {
    expect(invertCase2('MONKEY MAGIC')).toEqual('monkey magic');
  });

  test('FlIrPyDuck', () => {
    expect(invertCase2('FlIrPyDuck')).toEqual('fLiRpYdUCK');
  });

  test('', () => {
    expect(invertCase2('')).toEqual('');
  });
});

describe('Test Invert Case using ineffecient version using an array to hold inverted characters', () => {
  test('funkey monkey', () => {
    expect(invertCase3('funkey monkey')).toEqual('FUNKEY MONKEY');
  });

  test('MONKEY MAGIC', () => {
    expect(invertCase3('MONKEY MAGIC')).toEqual('monkey magic');
  });

  test('FlIrPyDuck', () => {
    expect(invertCase3('FlIrPyDuck')).toEqual('fLiRpYdUCK');
  });

  test('', () => {
    expect(invertCase3('')).toEqual('');
  });
});

describe('Test Invert Case using regex', () => {
  test('funkey monkey', () => {
    expect(invertCase4('funkey monkey')).toEqual('FUNKEY MONKEY');
  });

  test('MONKEY MAGIC', () => {
    expect(invertCase4('MONKEY MAGIC')).toEqual('monkey magic');
  });

  test('FlIrPyDuck', () => {
    expect(invertCase4('FlIrPyDuck')).toEqual('fLiRpYdUCK');
  });

  test('', () => {
    expect(invertCase4('')).toEqual('');
  });
});

describe('Test Invert Case using dopest bitwise XOR solution', () => {
  test('funkey monkey', () => {
    expect(invertCase5('funkey monkey')).toEqual('FUNKEY MONKEY');
  });

  test('MONKEY MAGIC', () => {
    expect(invertCase5('MONKEY MAGIC')).toEqual('monkey magic');
  });

  test('FlIrPyDuck', () => {
    expect(invertCase5('FlIrPyDuck')).toEqual('fLiRpYdUCK');
  });

  test('', () => {
    expect(invertCase5('')).toEqual('');
  });
});

describe('Test Invert Case using a verbose bitwise XOR solution', () => {
  test('funkey monkey', () => {
    expect(invertCase6('funkey monkey')).toEqual('FUNKEY MONKEY');
  });

  test('MONKEY MAGIC', () => {
    expect(invertCase6('MONKEY MAGIC')).toEqual('monkey magic');
  });

  test('FlIrPyDuck', () => {
    expect(invertCase6('FlIrPyDuck')).toEqual('fLiRpYdUCK');
  });

  test('', () => {
    expect(invertCase6('')).toEqual('');
  });
});
