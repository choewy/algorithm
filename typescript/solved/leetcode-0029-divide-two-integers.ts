import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/divide-two-integers
 * @runtime 66 ms
 * @memory 44.51 mb
 * */
const divide = (dividend: number, divisor: number): number => {
  const [MIN, MAX] = [2 ** 31 * -1, 2 ** 31 - 1];

  let minus = (dividend < 0 ? 1 : 0) + (divisor < 0 ? 1 : 0) === 1;
  let value = dividend / divisor;

  value = Math.floor(minus ? -1 * value : value);
  value = minus ? -1 * value : value;
  value = minus ? Math.max(MIN, value) : Math.min(MAX, value);

  return value;
};

export const test = () => {
  new TestModule(divide).test([
    new TestTarget("case 01", [10, 3], 3),
    new TestTarget("case 02", [7, -3], -2),
    new TestTarget("case 03", [-2147483648, -1], 2147483647),
  ]);
};
