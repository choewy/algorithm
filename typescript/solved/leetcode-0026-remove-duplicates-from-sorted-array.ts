import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array
 * @runtime 54 ms
 * @memory 45.55 mb
 * */
const removeDuplicates = (nums: number[]): number => {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      continue;
    }

    nums[k] = nums[i];
    k++;
  }

  return k;
};

/**
 * @runtime 111 ms
 * @memory 45.72 mb
 *  */
const removeDuplicatesWithSplice = (nums: number[]): number => {
  let k = 0;
  let last: number | null = null;

  while (k < nums.length) {
    const num = nums[k];

    if (last === num) {
      nums.splice(k, 1);
      continue;
    }

    last = num;
    k++;
  }

  return k;
};

export const test = () => {
  new TestModule(removeDuplicatesWithSplice).test([new TestTarget("case 01", [[1, 1, 2]], 2)]);
  new TestModule(removeDuplicatesWithSplice).test([new TestTarget("case 02", [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], 5)]);
};
