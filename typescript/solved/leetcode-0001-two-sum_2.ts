/**
 * @description https://leetcode.com/problems/two-sum/description
 * */

export const twoSum = (nums: number[], target: number): number[] => {
  let s = -1;
  let e = -1;

  while (nums.length > 0) {
    if (s < e) {
      break;
    }

    const num = nums.shift();

    if (num === undefined) {
      break;
    }

    s += 1;
    e += 1;

    for (let i = 0; i < nums.length; i++) {
      if (num + nums[i] === target) {
        e += i + 1;
        break;
      }
    }
  }

  return [s, e];
};
