import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/valid-parentheses
 * @runtime 48 ms
 * @memory 44.94 mb
 */
const closeset: Record<string, string> = {
  ")": "(",
  "}": "{",
  "]": "[",
};

const isValid = (s: string): boolean => {
  const openers = Object.values(closeset);
  const stack: string[] = [];

  for (const c of s) {
    if (openers.includes(c)) {
      stack.push(c);
      continue;
    }

    if (stack.pop() === closeset[c]) {
      continue;
    }

    return false;
  }

  return stack.length === 0;
};

export const test = () => {
  new TestModule(isValid).test([
    new TestTarget("case 01", ["{}"], true),
    new TestTarget("case 02", ["()[]{}"], true),
    new TestTarget("case 03", ["(]"], false),
    new TestTarget("case 82", ["(([]){})"], true),
    new TestTarget("case 83", ["[({(())}[()])]"], true),
  ]);
};
