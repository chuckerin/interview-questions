import { describe, test, expect } from 'vitest';
import { isPalindrome } from '../src/palindrome';

describe('Test palindrome function', () => {
  test('isPalindrome("racecar")', () => {
    expect(isPalindrome('racecar')).toEqual(true);
  });

  test('isPalindrome("kayak")', () => {
    expect(isPalindrome('kayak')).toEqual(true);
  });

  test('isPalindrome("radar")', () => {
    expect(isPalindrome('radar')).toEqual(true);
  });

  test('isPalindrome("hello")', () => {
    expect(isPalindrome('hello')).toEqual(false);
  });

  test('isPalindrome("phil")', () => {
    expect(isPalindrome('phil')).toEqual(false);
  });

  test('isPalindrome("Nurse, I spy gypsies, run!")', () => {
    expect(isPalindrome('Nurse, I spy gypsies, run!')).toEqual(true);
  });

  test('isPalindrome("Nurses run!")', () => {
    expect(isPalindrome('Nurses run!')).toEqual(true);
  });

  test('isPalindrome("A man, a plan, a canal, Panama!")', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama!')).toEqual(true);
  });

  test('isPalindrome("No lemon, no melon.")', () => {
    expect(isPalindrome('No lemon, no melon.')).toEqual(true);
  });

  test('isPalindrome("Mr. Owl ate my metal worm.")', () => {
    expect(isPalindrome('Mr. Owl ate my metal worm.')).toEqual(true);
  });

  test('isPalindrome("We hold these truths to be self-evident,")', () => {
    expect(isPalindrome('We hold these truths to be self-evident,')).toEqual(
      false,
    );
  });
});
