export function flatten(array: unknown[]): number[] {
  // x is an arbitrarily nested, multidimensional array.
  // return x flattened (all items in 1 dimension)
  const flattened: number[] = [];
  for (let i = 0; i < array.length; ++i) {
    const item = array[i];
    if (Array.isArray(item)) {
      // recursively flatten nested arrays
      // console.log('item is array -> ', item);
      flattened.push(...flatten(item as unknown[]));
    } else {
      flattened.push(item as number);
    }
  }
  return flattened;
}

export function flatten2(array: unknown[]): number[] {
  // x is an arbitrarily nested, multidimensional array.
  // return x flattened (all items in 1 dimension)
  return array.flat(Infinity) as number[];
}

export function flatten3(x: unknown[]): number[] {
  // Solution 2
  let arr: unknown[] = [];
  x.map((item) => {
    if (item instanceof Array) {
      arr.push(...flatten(item));
    } else {
      arr.push(item);
    }
  });

  return arr as number[];
}
