import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/longest-common-prefix
 * @runtime 42 ms
 * @memory 44.48 mb
 */
const longestCommonPrefix = (strs: string[]): string => {
  let prefix = "";
  let index = 0;

  while (true) {
    let char = "";
    let end = false;

    for (const str of strs) {
      if (str.length < index + 1) {
        end = true;
        break;
      }

      const s = str[index];

      if (char === "") {
        char = s;
        continue;
      }

      if (char !== s) {
        end = true;
        break;
      }
    }

    if (end) {
      break;
    }

    index += 1;
    prefix += char;
  }

  return prefix;
};

export const test = () => {
  new TestModule(longestCommonPrefix).test([
    new TestTarget("case 1", [["flower", "flow", "flight"]], "fl"),
    new TestTarget("case 1", [["dog", "racecar", "car"]], ""),
  ]);
};
