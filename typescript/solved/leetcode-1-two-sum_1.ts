/** @description https://leetcode.com/problems/two-sum/description */

export const twoSum = (nums: number[], target: number): number[] => {
  const results: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (results.length === 2) {
      break;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        results.push(i, j);
        break;
      }
    }
  }

  return results;
};
