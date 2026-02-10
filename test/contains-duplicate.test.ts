import { describe, test, expect } from 'vitest';
import {
  containsDuplicate,
  containsDuplicate2,
} from '../src/contains-duplicate';

describe('Test containsDuplicates using filter in a for loop', () => {
  test('Test array [1,2,3,1]', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
  });

  test('Test array [1,2,3,4]', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  });

  test('Test array [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });
});

describe('Test containsDuplicates2 by sorting and looping through the array', () => {
  test('Test array [1,2,3,1]', () => {
    expect(containsDuplicate2([1, 2, 3, 1])).toEqual(true);
  });

  test('Test array [1,2,3,4]', () => {
    expect(containsDuplicate2([1, 2, 3, 4])).toEqual(false);
  });

  test('Test array [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });
});
