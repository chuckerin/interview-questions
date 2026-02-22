import { describe, test, expect } from 'vitest';
import { isBalanced, isBalanced2, isBalanced3 } from '../src/balanced-parans';

describe('Test Balanced Parans with a for loop and counters', () => {
  test('empty string', () => {
    expect(isBalanced('')).toEqual(true);
  });

  test('(', () => {
    expect(isBalanced('(')).toEqual(false);
  });

  test('()', () => {
    expect(isBalanced('()')).toEqual(true);
  });

  test('(1)', () => {
    expect(isBalanced('(1)')).toEqual(true);
  });

  test(')(', () => {
    expect(isBalanced(')(')).toEqual(false);
  });

  test('())(()', () => {
    expect(isBalanced('())(()')).toEqual(false);
  });

  test('((a()b)c(l(pnq))())', () => {
    expect(isBalanced('((a()b)c(l(pnq))())')).toEqual(true);
  });

  test('((a()b)c(l(pnq))()', () => {
    expect(isBalanced('((a()b)c(l(pnq))()')).toEqual(false);
  });
});

describe('Test Balanced Paran with a forEach on a split string', () => {
  test('empty string', () => {
    expect(isBalanced2('')).toEqual(true);
  });

  test('(', () => {
    expect(isBalanced2('(')).toEqual(false);
  });

  test('()', () => {
    expect(isBalanced2('()')).toEqual(true);
  });

  test('(1)', () => {
    expect(isBalanced2('(1)')).toEqual(true);
  });

  test(')(', () => {
    expect(isBalanced2(')(')).toEqual(false);
  });

  test('())(()', () => {
    expect(isBalanced2('())(()')).toEqual(false);
  });

  test('((a()b)c(l(pnq))())', () => {
    expect(isBalanced2('((a()b)c(l(pnq))())')).toEqual(true);
  });

  test('((a()b)c(l(pnq))()', () => {
    expect(isBalanced2('((a()b)c(l(pnq))()')).toEqual(false);
  });
});

describe('Test Balanced Parans with a for loop and counters using the spread operator', () => {
  test('empty string', () => {
    expect(isBalanced3('')).toEqual(true);
  });

  test('(', () => {
    expect(isBalanced3('(')).toEqual(false);
  });

  test('()', () => {
    expect(isBalanced3('()')).toEqual(true);
  });

  test('(1)', () => {
    expect(isBalanced3('(1)')).toEqual(true);
  });

  test(')(', () => {
    expect(isBalanced3(')(')).toEqual(false);
  });

  test('())(()', () => {
    expect(isBalanced3('())(()')).toEqual(false);
  });

  test('((a()b)c(l(pnq))())', () => {
    expect(isBalanced3('((a()b)c(l(pnq))())')).toEqual(true);
  });

  test('((a()b)c(l(pnq))()', () => {
    expect(isBalanced3('((a()b)c(l(pnq))()')).toEqual(false);
  });
});
