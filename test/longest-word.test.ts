import { describe, test, expect } from 'vitest';
import { longestWord } from '../src/longest-word';

describe('Test longestWord function', () => {
  test('Use an empty string', () => {
    expect(longestWord('')).toEqual('');
  });

  test('Use "fun&!! time"', () => {
    expect(longestWord('fun&!! time')).toEqual('time');
  });

  test('Use "I love dogs"', () => {
    expect(longestWord('I love dogs')).toEqual('love');
  });

  test('Use "The quick brown fox jumped over the lazy dog"', () => {
    expect(longestWord('The quick brown fox jumped over the lazy dog')).toEqual(
      'jumped',
    );
  });

  test('Use "Hello world123 567"', () => {
    expect(longestWord('Hello world123 567')).toEqual('Hello');
  });

  test('Use "A b cde fg!"', () => {
    expect(longestWord('A b cde fg!')).toEqual('cde');
  });

  test('Use "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights."', () => {
    expect(
      longestWord(
        'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights.',
      ),
    ).toEqual('unalienable');
  });
});
