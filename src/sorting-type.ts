// x is an array of at least 2 unique members
// return 0 if it's not sorted,
// 1 if it's ascending,
// -1 if it's descending

export function sortingType(x: number[]): number {
  function isAscending(x: number, y: number) {
    // console.log(x, y);
    return y > x;
  }

  function isDescending(x: number, y: number) {
    // console.log(x, y);
    return x > y;
  }

  let status = 0;

  if (isAscending(x[0], x[1])) {
    status = 1;
  } else if (isDescending(x[0], x[1])) {
    status = -1;
  } else {
    return status;
  }

  for (let i = 1; i < x.length - 1; i++) {
    if (status === 1 && !isAscending(x[i], x[i + 1])) {
      return 0;
    } else if (status === -1 && !isDescending(x[i], x[i + 1])) {
      return 0;
    }
  }

  return status;
}

export function sortingType2(x: number[]): number {
  // x is an array of at least 2 unique members
  // return 0 if it's not sorted, 1 if it's ascending,  -1 if it's descending

  let isAscending: (x: number, y: number) => boolean;
  let isDescending: (x: number, y: number) => boolean;

  isAscending = function (x, y) {
    return y > x;
  };

  isDescending = function (x, y) {
    return x > y;
  };

  let status = 0;

  if (isAscending(x[0], x[1])) {
    status = 1;
  } else if (isDescending(x[0], x[1])) {
    status = -1;
  } else {
    return status;
  }

  for (let i = 1; i < x.length - 1; i++) {
    if (status === 1 && !isAscending(x[i], x[i + 1])) {
      return 0;
    } else if (status === -1 && !isDescending(x[i], x[i + 1])) {
      return 0;
    }
  }

  return status;
}
