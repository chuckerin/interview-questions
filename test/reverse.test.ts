import { describe, test, expect } from 'vitest';
import { reverse, reverse2, reverse3, reverse4 } from '../src/reverse';

describe('Test the Reverse function', () => {
  test('Returns the param reversed', () => {
    expect(reverse('Phil Black')).toEqual('kcalB lihP');
  });

  test('Test with an empty string', () => {
    expect(reverse('')).toEqual('');
  });

  test('Test with a single character', () => {
    expect(reverse('A')).toEqual('A');
  });

  test('Test with a palindrome', () => {
    expect(reverse('racecar')).toEqual('racecar');
  });

  test('Test with special characters', () => {
    expect(reverse('!@#$$#@%!')).toEqual('!%@#$$#@!');
  });
});

describe('Test the Reverse function 2', () => {
  test('Returns the param reversed', () => {
    expect(reverse2('Phil Black')).toEqual('kcalB lihP');
  });

  test('Test with an empty string', () => {
    expect(reverse2('')).toEqual('');
  });

  test('Test with a single character', () => {
    expect(reverse2('A')).toEqual('A');
  });

  test('Test with a palindrome', () => {
    expect(reverse2('racecar')).toEqual('racecar');
  });

  test('Test with special characters', () => {
    expect(reverse2('!@#$$#@%!')).toEqual('!%@#$$#@!');
  });
});

describe('Test the Reverse function 3', () => {
  test('Returns the param reversed', () => {
    expect(reverse3('Phil Black')).toEqual('kcalB lihP');
  });

  test('Test with an empty string', () => {
    expect(reverse3('')).toEqual('');
  });

  test('Test with a single character', () => {
    expect(reverse3('A')).toEqual('A');
  });

  test('Test with a palindrome', () => {
    expect(reverse3('racecar')).toEqual('racecar');
  });

  test('Test with special characters', () => {
    expect(reverse3('!@#$$#@%!')).toEqual('!%@#$$#@!');
  });
});

describe('Test the Reverse function 4', () => {
  test('Returns the param reversed', () => {
    expect(reverse4('Phil Black')).toEqual('kcalB lihP');
  });

  test('Test with an empty string', () => {
    expect(reverse4('')).toEqual('');
  });

  test('Test with a single character', () => {
    expect(reverse4('A')).toEqual('A');
  });

  test('Test with a palindrome', () => {
    expect(reverse4('racecar')).toEqual('racecar');
  });

  test('Test with special characters', () => {
    expect(reverse4('!@#$$#@%!')).toEqual('!%@#$$#@!');
  });
});
