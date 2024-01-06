import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/4sum
 * @runtime 343 ms
 * @memory 48.88 mb
 */
const fourSum = (nums: number[], target: number): number[][] => {
  nums.sort((x, y) => x - y);

  const rows: Record<string, number[]> = {};

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const a = nums[i];
        const b = nums[j];
        const c = nums[left];
        const d = nums[right];
        const sum = a + b + c + d;
        const row = [a, b, c, d];

        if (sum === target) {
          rows[row.join()] = row;
        }

        if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return Object.values(rows);
};

export const test = () => {
  new TestModule(fourSum).test([
    new TestTarget(
      "case 01",
      [[1, 0, -1, 0, -2, 2], 0],
      [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ]
    ),
    new TestTarget("case 02", [[2, 2, 2, 2, 2], 8], [[2, 2, 2, 2]]),
  ]);
};
