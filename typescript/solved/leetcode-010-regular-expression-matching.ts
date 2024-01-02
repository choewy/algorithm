import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/regular-expression-matching/
 * @desc_1 . matches any single character.
 * @desc_2 * matches zero or more of the preceding element.
 * @desc_3 str contains only lowercase English letters.
 * @runtime 239 ms
 * @memory 44.12 mb
 */
const isMatch = (str: string, ptn: string): boolean => {
  while (ptn.includes("**")) {
    ptn = ptn.replaceAll("**", "*");
  }

  const regexp = new RegExp(ptn);
  const result = str.match(regexp);

  return result ? result[0] === str : false;
};

export const test = () => {
  new TestModule(isMatch).test([
    new TestTarget("case 1", ["aa", "a"], false),
    new TestTarget("case 2", ["aa", "a*"], true),
    new TestTarget("case 3", ["ab", ".*"], true),
    new TestTarget("case 4", ["mississippi", "mis*is*p*.*"], false),
    new TestTarget("case 5", ["aab", "c*a*b"], true),
    new TestTarget("case 6", ["abc", "a***abc"], true),
    new TestTarget("case 7", ["ab", ".*c"], true),
  ]);
};
