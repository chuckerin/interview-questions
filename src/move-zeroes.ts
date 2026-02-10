// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
export function moveZeroes(nums: number[]): number[] {
  let insertPos = 0;
  for (let num of nums) {
    if (num !== 0) {
      nums[insertPos] = num;
      insertPos++;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }

  // console.log('Final array:', nums);
  return nums;
}

export function moveZeroes2(nums: number[]): number[] {
  // count the number of zeroes
  const zeroCount = nums.filter((item) => item === 0).length;
  // console.log('zeroCount -> ', zeroCount);
  const filteredNums = nums.filter((num) => num !== 0);

  for (let i = 0; i < zeroCount; i++) {
    filteredNums.push(0);
  }

  // console.log('filteredNums -> ', filteredNums);
  return filteredNums;
}
