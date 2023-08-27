/**
 * @description https://leetcode.com/problems/median-of-two-sorted-arrays/description
 */

const makeNumberArray = (nums1: number[], nums2: number[]): number[] => {
  const nums: number[] = [];

  let num1 = null;
  let num2 = null;

  while (true) {
    if (num1 === null) {
      num1 = nums1.shift();
    }

    if (num2 === null) {
      num2 = nums2.shift();
    }

    if (num1 === undefined && num2 === undefined) {
      break;
    }

    if (num1 === undefined) {
      nums.push(num2);
      num2 = null;
      continue;
    }

    if (num2 === undefined) {
      nums.push(num1);
      num1 = null;
      continue;
    }

    if (num1 === num2) {
      nums.push(num1, num2);
      num1 = null;
      num2 = null;
      continue;
    }

    if (num1 < num2) {
      nums.push(num1);
      num1 = null;
      continue;
    }

    if (num1 > num2) {
      nums.push(num2);
      num2 = null;
      continue;
    }
  }

  return nums;
};

export const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[],
): number => {
  let value: number;

  const nums = makeNumberArray(nums1, nums2);
  const numsLength = nums.length;
  const index = Math.floor(numsLength / 2);

  if (numsLength % 2 === 1) {
    value = nums[index];
  } else {
    value = (nums[index - 1] + nums[index]) / 2;
  }

  return value;
};
