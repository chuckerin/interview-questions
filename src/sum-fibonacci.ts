export function sumFibonacci(array: number[]): number {
  //sum all the 2 digit numbers in the fibonacci sequence
  return array.reduce(
    (acc, num) => (num >= 10 && num < 100 ? acc + num : acc),
    0
  );
}
