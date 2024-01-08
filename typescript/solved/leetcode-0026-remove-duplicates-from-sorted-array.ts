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

const judge = (func: (nums: number[]) => number, nums: number[], expected: number[]): boolean => {
  const k = func(nums);

  if (k !== expected.length) {
    return false;
  }

  for (let i = 0; i < k; i++) {
    if (nums[i] === expected[i]) {
      continue;
    }

    return false;
  }

  return true;
};

export const test = () => {
  console.log("case 01", judge(removeDuplicates, [1, 1, 2], [1, 2]));
  console.log("case 02", judge(removeDuplicates, [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]));
};
