/**
 * @link https://leetcode.com/problems/remove-element
 * @runtime 58 ms
 * @memory 43.22 mb
 * */
const removeElement = (nums: number[], val: number): number => {
  let i = 0;
  let k = nums.length - 1;

  while (i < k) {
    const num = nums[i];

    if (num === val) {
      const temp = nums[k];

      nums[k] = num;
      nums[i] = temp;

      k--;
    } else {
      i++;
    }
  }

  if (nums[k] === val) {
    nums.pop();
    k--;
  }

  return k + 1;
};

const judge = (
  func: (nums: number[], val: number) => number,
  nums: number[],
  val: number,
  expected: number[]
): boolean => {
  const k = func(nums, val);

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
  console.log("case 01", judge(removeElement, [3, 2, 2, 3], 3, [2, 2]));
  console.log("case 02", judge(removeElement, [0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 4, 0, 3]));
  console.log("case 03", judge(removeElement, [1], 1, []));
};
