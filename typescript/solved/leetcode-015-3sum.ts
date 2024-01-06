import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/3sum
 * @runtime 1086 ms
 * @memory 68.20 mb
 */
const threeSum = (nums: number[]): number[][] => {
  nums = nums.sort((x, y) => x - y);

  const len = nums.length;
  const rows: Record<string, number[]> = {};

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const x = nums[i];
      const y = nums[left];
      const z = nums[right];

      const row = [x, y, z];
      const sum = x + y + z;

      if (sum === 0) {
        rows[row.join()] = row;
      }

      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return Object.values(rows);
};

export const test = () => {
  new TestModule(threeSum).test([
    new TestTarget(
      "case 1",
      [[-1, 0, 1, 2, -1, -4]],
      [
        [-1, -1, 2],
        [-1, 0, 1],
      ]
    ),
    new TestTarget("case 2", [[0, 1, 1]], [[]]),
    new TestTarget("case 3", [[0, 0, 0]], [[0, 0, 0]]),
  ]);
};
