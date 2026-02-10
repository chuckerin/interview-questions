export function mode(array: unknown[]): any {
  // x is an array of at least 1 item.
  // return the most frequent item (there won't be collisions)
  let maxFreq = 0;
  let modeValue: any = null;

  const sortedArray = array.sort();

  for (let i = 0; i < sortedArray.length; i++) {
    const freq = sortedArray.filter((item) => item === sortedArray[i]).length;
    if (freq > maxFreq) {
      maxFreq = freq;
      modeValue = sortedArray[i];
    }
  }

  return modeValue;
}

export function mode2(array: unknown[]): any {
  // x is an array of at least 1 item.
  // return the most frequent item (there won't be collisions)
  let maxFreq = 0;
  let modeValue: any = null;

  array.map((thing) => {
    const freq = array.filter((item) => item === thing).length;
    if (freq > maxFreq) {
      maxFreq = freq;
      modeValue = thing;
    }
  });

  return modeValue;
}

export function mode3(array: unknown[]): any {
  // x is an array of at least 1 item.
  // return the most frequent item (there won't be collisions)
  let maxFreq = 0;
  let freq = 1;
  let modeValue: any = null;

  const sortedArray = array.slice().sort();

  // console.log('array -> ', array);
  // console.log('sortedArray -> ', sortedArray);

  if (sortedArray.length === 1) {
    return sortedArray[0];
  }

  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i - 1]) {
      freq++;
    }
    if (freq > maxFreq) {
      maxFreq = freq;
      modeValue = sortedArray[i];
    }
  }

  // console.log(
  //   'freq -> ',
  //   freq,
  //   'maxFreq -> ',
  //   maxFreq,
  //   'modeValue -> ',
  //   modeValue
  // );

  return modeValue;
}
