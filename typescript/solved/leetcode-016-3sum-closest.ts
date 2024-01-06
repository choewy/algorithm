import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/3sum-closest
 * @runtime 74 ms
 * @memory 45.01 mb
 */
const threeSumClosest = (nums: number[], target: number): number => {
  nums.sort((x, y) => x - y);

  const len = nums.length;
  const result = { abs: Number.POSITIVE_INFINITY, closeset: 0 };

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const x = nums[i];
      const y = nums[left];
      const z = nums[right];

      const sum = x + y + z;

      if (sum === target) {
        return sum;
      }

      const diff = target - sum;
      const abs = Math.abs(diff);

      if (result.abs > abs) {
        result.abs = abs;
        result.closeset = sum;
      }

      if (diff < 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result.closeset;
};

export const test = () => {
  new TestModule(threeSumClosest).test([
    new TestTarget("case 01", [[-1, 2, 1, -4], 1], 2),
    new TestTarget("case 02", [[0, 0, 0], 1], 0),
  ]);
};
