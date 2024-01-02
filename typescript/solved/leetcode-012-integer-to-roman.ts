import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/integer-to-roman/
 * @description pure conditions
 * @constraints 1 <= num <= 3999
 * @runtime 99 ms
 * @memory 49.13 mb
 */
const helper = (num: number, over: number): [number, string] => {
  let symbol = "";

  switch (over) {
    case 1000:
      symbol = new Array(Math.floor(num / over)).fill("M").join("");
      num = num % over;
      break;

    case 900:
      symbol = "CM";
      num -= over;
      break;

    case 500:
      symbol = "D";
      num -= over;
      break;

    case 400:
      symbol = "CD";
      num -= over;
      break;

    case 100:
      symbol = new Array(Math.floor(num / over)).fill("C").join("");
      num = num % over;
      break;

    case 90:
      symbol = "XC";
      num -= over;
      break;

    case 50:
      symbol = "L";
      num -= over;
      break;

    case 40:
      symbol = "XL";
      num -= over;
      break;

    case 10:
      symbol = new Array(Math.floor(num / over)).fill("X").join("");
      num = num % over;
      break;

    case 9:
      symbol = "IX";
      num -= over;
      break;

    case 5:
      symbol = "V";
      num -= over;
      break;

    case 4:
      symbol = "IV";
      num -= over;
      break;

    case 1:
      symbol = new Array(num).fill("I").join("");
      num = 0;
      break;
  }

  return [num, symbol];
};

const intToRoman = (num: number): string => {
  let roman = "";

  for (const over of [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]) {
    if (num < over) {
      continue;
    }

    const [next, symbol] = helper(num, over);

    roman += symbol;
    num = next;
  }

  return roman;
};

export const test = () => {
  new TestModule(intToRoman).test([new TestTarget("case 1", [3], "III")]);
  new TestModule(intToRoman).test([new TestTarget("case 2", [58], "LVIII")]);
  new TestModule(intToRoman).test([new TestTarget("case 2", [1994], "MCMXCIV")]);
};
