import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @runtime 53 ms
 * @memory  43.50 mb
 */
const map: Record<string, string> = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

const recursive = (digits: string, output: string[], str: string, i: number) => {
  const length = digits.length;

  if (str.length === length) {
    return output.push(str);
  }

  for (const char of map[digits[i]]) {
    recursive(digits, output, str + char, i + 1);
  }
};

const letterCombinations = (digits: string): string[] => {
  const output: string[] = [];

  if (digits.length > 0) {
    recursive(digits, output, "", 0);
  }

  return output;
};

export const test = () => {
  new TestModule(letterCombinations).test([
    new TestTarget("case 01", ["23"], ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]),
    new TestTarget("case 02", [""], []),
    new TestTarget("case 03", ["2"], ["a", "b", "c"]),
  ]);
};
