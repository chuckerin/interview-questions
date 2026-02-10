export function firstRecurringNumber(arr: number[]): number | undefined {
  const seen: Set<number> = new Set();
  for (let num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
  return undefined;
}

// doesn't work correctly for all test cases
export function firstRecurringNumber2(arr: number[]): number | undefined {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log('Comparing', arr[i], arr[j]);
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}

export function firstRecurringNumber3(arr: number[]): number | undefined {
  let map: any = {};
  for (let i = 0; i < arr.length; i++) {
    // console.log(map);
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
  return undefined;
}

export function firstRecurringNumber4(arr: number[]): number | undefined {
  let map: Map<number, number> = new Map();
  for (let i = 0; i < arr.length; i++) {
    // console.log(map);
    if (map.get(arr[i]) !== undefined) {
      return arr[i];
    } else {
      map.set(arr[i], i);
    }
  }
  return undefined;
}

export function firstRecurringNumber5(arr: number[]): number | undefined {
  let arr2: number[] = [];

  for (let num of arr) {
    if (arr2.includes(num)) {
      return num;
    }
    arr2.push(num);
  }

  return undefined;
}
