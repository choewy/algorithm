import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/integer-to-roman/
 * @description pure conditions
 * @constraints 1 <= num <= 3999
 * @runtime 113 ms
 * @memory 53.09 mb
 */
const intToRoman = (num: number): string => {
  const map: [number, string, (num: number) => number][] = [
    [1000, "M", (num: number) => num % 1000],
    [900, "CM", (num: number) => num - 900],
    [500, "D", (num: number) => num - 500],
    [400, "CD", (num: number) => num - 400],
    [100, "C", (num: number) => num % 100],
    [90, "XC", (num: number) => num - 90],
    [50, "L", (num: number) => num - 50],
    [40, "XL", (num: number) => num - 40],
    [10, "X", (num: number) => num % 10],
    [9, "IX", (num: number) => num - 9],
    [5, "V", (num: number) => num - 5],
    [4, "IV", (num: number) => num - 4],
    [1, "I", (num: number) => num],
  ];

  let roman = "";

  for (const [over, symbol, next] of map) {
    if (num < over) {
      continue;
    }

    roman += new Array(Math.floor(num / over)).fill(symbol).join("");
    num = next(num);
  }

  return roman;
};

export const test = () => {
  new TestModule(intToRoman).test([
    new TestTarget("case 1", [3], "III"),
    new TestTarget("case 2", [58], "LVIII"),
    new TestTarget("case 3", [1994], "MCMXCIV"),
  ]);
};
