import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/container-with-most-water
 * @description brute force
 * @runtime Time Limit Exceeded
 * @memory unknown
 */
const maxAreaWithBruteForce = (heights: number[]): number => {
  let max = 0;

  for (let left = 0; left < heights.length - 1; left++) {
    for (let right = left + 1; right < heights.length; right++) {
      const width = right - left;
      const height = Math.min(heights[left], heights[right]);
      const area = width * height;

      if (area > max) {
        max = area;
      }
    }
  }

  return max;
};

/**
 * @link https://leetcode.com/problems/container-with-most-water
 * @description Two Pointer
 * @runtime 136 ms
 * @memory 51.09 mb
 */

const maxArea = (heights: number[]): number => {
  const cursor = { left: 0, right: heights.length - 1 };

  let max = 0;

  while (cursor.left < cursor.right) {
    const left = heights[cursor.left];
    const right = heights[cursor.right];

    const height = Math.min(left, right);
    const width = cursor.right - cursor.left;
    const area = height * width;

    if (area > max) {
      max = area;
    }

    if (left > right) {
      cursor.right -= 1;
    } else {
      cursor.left += 1;
    }
  }

  return max;
};

export const test = () => {
  new TestModule(maxArea).test([new TestTarget("case 1", [[1, 8, 6, 2, 5, 4, 8, 3, 7]], 49)]);
  new TestModule(maxArea).test([new TestTarget("case 2", [[1, 1]], 1)]);
};
