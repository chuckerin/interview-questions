import { describe, test, expect } from 'vitest';
import { square, square2 } from '../src/square';

describe('First Square function', () => {
  test('Square 2', () => {
    expect(square(2)).toEqual(4);
  });

  test('Square 4', () => {
    expect(square(4)).toEqual(16);
  });

  test('Square 1.5', () => {
    expect(square(1.5)).toEqual(2.25);
  });

  test('Square -12', () => {
    expect(square(-12)).toEqual(144);
  });

  test('Square -1.5', () => {
    expect(square(-1.5)).toEqual(2.25);
  });
});

describe('Second Square function', () => {
  test('Square 2', () => {
    expect(square2(2)).toEqual(4);
  });

  test('Square 4', () => {
    expect(square2(4)).toEqual(16);
  });

  test('Square 1.5', () => {
    expect(square2(1.5)).toEqual(2.25);
  });

  test('Square -12', () => {
    expect(square2(-12)).toEqual(144);
  });

  test('Square -1.5', () => {
    expect(square2(-1.5)).toEqual(2.25);
  });
});
