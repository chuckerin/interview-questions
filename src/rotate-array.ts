// Given an integer array nums, rotate the array
// to the right by k steps, where k is non-negative.
export function rotateArray(nums: number[], k: number): number[] {
  for (let step = 0; step < k; step++) {
    const lastElement = nums.pop();
    if (lastElement !== undefined) {
      nums.unshift(lastElement);
    }
  }

  return nums;
}

export function rotateArray2(nums: number[], k: number): number[] {
  for (let i = nums.length; i > nums.length - k; i--) {
    const lastElement = nums.pop();
    if (lastElement !== undefined) {
      nums.unshift(lastElement);
    }
  }
  return nums;
}
