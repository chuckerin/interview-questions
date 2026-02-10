export function hasBalancePoint(array: number[]): boolean {
  // array is an array of numbers. return whether there is an index where the sum
  // before (excluding) it is equal to the sum after (including) it.

  // console.log(array);
  // array.map((num) => {});
  let leftArray = [];
  let rightArray = [];

  if (array.length < 2) {
    return true;
  }
  for (let i = 0; i < array.length; i++) {
    if (array.length > 0) {
      leftArray = array.slice(0, i);
      rightArray = array.slice(i, array.length + i);
      // console.log('leftArray -> ', leftArray, ' rightArray -> ', rightArray);
      if (leftArray.length > 0 && rightArray.length > 0) {
        if (
          leftArray.reduce((a, b) => a + b) ===
          rightArray.reduce((a, b) => a + b)
        ) {
          // console.log(
          //   'leftArray sum -> ',
          //   leftArray.reduce((a, b) => a + b),
          //   'rightArray sum -> ',
          //   rightArray.reduce((a, b) => a + b)
          // );
          return true;
        }
      }
    }
  }

  return false;
}
