import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/generate-parentheses
 * @runtime 60 ms
 * @memory 45.08 mb
 */
const recursive = (n: number, parentheses: string[], str: string, opener: number, closer: number) => {
  if (str.length === n * 2) {
    return parentheses.push(str);
  }

  if (opener < n) {
    recursive(n, parentheses, str + "(", opener + 1, closer);
  }

  if (closer < opener) {
    recursive(n, parentheses, str + ")", opener, closer + 1);
  }
};

const generateParenthesis = (n: number): string[] => {
  const parentheses: string[] = [];

  recursive(n, parentheses, "", 0, 0);

  return parentheses;
};

export const test = () => {
  new TestModule(generateParenthesis).test([
    new TestTarget("case 01", [3], ["((()))", "(()())", "(())()", "()(())", "()()()"]),
    new TestTarget("case 02", [1], ["()"]),
  ]);
};
