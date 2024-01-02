import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/roman-to-integer/
 * @runtime 117 ms
 * @memory 51.40 mb
 */
const romanToInt = (s: string): number => {
  const map: [string, number][] = [
    ["CM", 900],
    ["CD", 400],
    ["XC", 90],
    ["XL", 40],
    ["IX", 9],
    ["IV", 4],
    ["D", 500],
    ["L", 50],
    ["V", 5],
    ["M", 1000],
    ["C", 100],
    ["X", 10],
    ["I", 1],
  ];

  let int = 0;

  for (const [symbol, num] of map) {
    int += (s.split(symbol).length - 1) * num;
    s = s.replaceAll(symbol, "");
  }

  return Number(int);
};

export const test = () => {
  new TestModule(romanToInt).test([new TestTarget("case 1", ["III"], 3)]);
  new TestModule(romanToInt).test([new TestTarget("case 2", ["LVIII"], 58)]);
  new TestModule(romanToInt).test([new TestTarget("case 3", ["MCMXCIV"], 1994)]);
};
