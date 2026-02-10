import { describe, test, expect } from 'vitest';
import { flatten, flatten2, flatten3 } from '../src/flatten';

describe('Flatten function using for loop and recursion', () => {
  test('Flatten []', () => {
    expect(flatten([])).toEqual([]);
  });

  test('Flatten [0,1,2]', () => {
    expect(flatten([0, 1, 2])).toEqual([0, 1, 2]);
  });

  test('Flatten [[],0,[1]]', () => {
    expect(flatten([[], 0, [1]])).toEqual([0, 1]);
  });

  test('Flatten [0,[[[[[1,[2]]]]],3],[4,[5]]]', () => {
    expect(flatten([0, [[[[[1, [2]]]]], 3], [4, [5]]])).toEqual([
      0, 1, 2, 3, 4, 5,
    ]);
  });
});

describe('Flatten function using ES6 cheat', () => {
  test('Flatten []', () => {
    expect(flatten2([])).toEqual([]);
  });

  test('Flatten [0,1,2]', () => {
    expect(flatten2([0, 1, 2])).toEqual([0, 1, 2]);
  });

  test('Flatten [[],0,[1]]', () => {
    expect(flatten2([[], 0, [1]])).toEqual([0, 1]);
  });

  test('Flatten [0,[[[[[1,[2]]]]],3],[4,[5]]]', () => {
    expect(flatten2([0, [[[[[1, [2]]]]], 3], [4, [5]]])).toEqual([
      0, 1, 2, 3, 4, 5,
    ]);
  });
});

describe('Flatten function using map and recursion', () => {
  test('Flatten []', () => {
    expect(flatten3([])).toEqual([]);
  });

  test('Flatten [0,1,2]', () => {
    expect(flatten3([0, 1, 2])).toEqual([0, 1, 2]);
  });

  test('Flatten [[],0,[1]]', () => {
    expect(flatten3([[], 0, [1]])).toEqual([0, 1]);
  });

  test('Flatten [0,[[[[[1,[2]]]]],3],[4,[5]]]', () => {
    expect(flatten3([0, [[[[[1, [2]]]]], 3], [4, [5]]])).toEqual([
      0, 1, 2, 3, 4, 5,
    ]);
  });
});
