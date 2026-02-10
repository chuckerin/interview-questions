import { describe, test, expect } from 'vitest';
import { playground } from '../src/playground';

describe('playground', () => {
  test('Use an empty string', () => {
    expect(playground()).toEqual('');
  });
});
