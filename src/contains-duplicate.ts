// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.
export function containsDuplicate(nums: number[]): boolean {
  // console.log('Input array:', nums);
  for (let i = 0; i < nums.length; i++) {
    const count = nums.filter((item) => item === nums[i]).length;
    // console.log(`Number ${nums[i]} appears ${count} times`);
    if (count > 1) {
      return true;
    }
  }

  return false;
}

export function containsDuplicate2(nums: number[]): boolean {
  nums.sort();

  for (let i = 1; i < nums.length; i++) {
    // console.log(nums[i], nums[i - 1]);
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }

  return false;
}
