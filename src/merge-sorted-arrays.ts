export function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const merged: number[] = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}

export function mergeSortedArrays2(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

export function mergeSortedArrays3(
  array1: number[],
  array2: number[]
): number[] {
  const mergedArray = [];

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

export function mergeSortedArrays4(
  array1: number[],
  array2: number[]
): number[] {
  const mergedArray = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j <= array2.length; j++) {
      if (array1[i] <= array2[j] || j === array2.length) {
        mergedArray.push(array1[i]);
        break;
      } else {
        mergedArray.push(array2[j]);
      }
    }
  }

  return mergedArray;
}

export function mergeSortedArrays5(arr1: number[], arr2: number[]): number[] {
  const mergedArray: number[] = [];
  mergedArray.push(...arr1, ...arr2);
  mergedArray.sort((a, b) => a - b);
  // console.log('mergedArray -> ', mergedArray);
  return mergedArray;
}
