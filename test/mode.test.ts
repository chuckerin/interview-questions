import { describe, test, expect } from 'vitest';
import { mode, mode2, mode3 } from '../src/mode';

describe('Test mode function', () => {
  test('mode([0])', () => {
    expect(mode([0])).toEqual(0);
  });

  test('mode([0,1,1,2])', () => {
    expect(mode([0, 1, 1, 2])).toEqual(1);
  });

  test('mode([{},0,[1],"foo",true,false,null,true])', () => {
    expect(mode([{}, 0, [1], 'foo', true, false, null, true])).toEqual(true);
  });
});

describe('Test mode function 2', () => {
  test('mode([0])', () => {
    expect(mode2([0])).toEqual(0);
  });

  test('mode([0,1,1,2])', () => {
    expect(mode2([0, 1, 1, 2])).toEqual(1);
  });

  test('mode([{},0,[1],"foo",true,false,null,true])', () => {
    expect(mode2([{}, 0, [1], 'foo', true, false, null, true])).toEqual(true);
  });
});

describe('Test mode function 3', () => {
  test('mode([0])', () => {
    expect(mode3([0])).toEqual(0);
  });

  test('mode([0,1,1,2])', () => {
    expect(mode3([0, 1, 1, 2])).toEqual(1);
  });

  test('mode([{},0,[1],"foo",true,false,null,true])', () => {
    expect(mode3([{}, 0, [1], 'foo', true, false, null, true])).toEqual(true);
  });
});
