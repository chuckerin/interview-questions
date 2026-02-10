// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// A subarray is a contiguous non-empty sequence of elements within an array.
export function maxSubArray(nums: number[]): number {
  let largestSum = 0;
  let currentSum = 0;

  // const subarray = [];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > largestSum) {
      largestSum = currentSum;
      // subarray.push(nums[i]);
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  // console.log('Subarray with largest sum:', subarray);
  // console.log('Largest sum:', largestSum);
  return largestSum;
}
