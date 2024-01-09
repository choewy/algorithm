import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/substring-with-concatenation-of-all-words
 * @runtime 803 ms
 * @memory 49.72 mb
 **/
const findSubstring = (s: string, words: string[]): number[] => {
  const indexes: number[] = [];

  const substr = words.join("");
  const sublen = substr.length;
  const wordlen = substr.length / words.length;
  const end = s.length - sublen + 1;

  let index = 0;

  while (index < end) {
    const str = s.slice(index, index + sublen);
    const clone = [...words];

    if (str === clone.join("")) {
      indexes.push(index);
      index++;

      continue;
    }

    for (let i = 0; i < str.length; i += wordlen) {
      const word = str.slice(i, i + wordlen);
      const wordIndex = clone.findIndex((w) => w === word);

      if (wordIndex < 0) {
        break;
      }

      clone.splice(wordIndex, 1);
    }

    if (clone.length === 0) {
      indexes.push(index);
    }

    index++;
  }

  return indexes;
};

export const test = () => {
  new TestModule(findSubstring).test([
    new TestTarget("case 01", ["barfoothefoobarman", ["foo", "bar"]], [0, 9]),
    new TestTarget("case 02", ["wordgoodgoodgoodbestword", ["word", "good", "best", "word"]], []),
    new TestTarget("case 03", ["barfoofoobarthefoobarman", ["bar", "foo", "the"]], [6, 9, 12]),
    new TestTarget(
      "case 114",
      ["lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo", "barr", "wing", "ding", "wing"]],
      [13]
    ),
    new TestTarget("case 121", ["wordgoodgoodgoodbestword", ["word", "good", "best", "good"]], [8]),
    new TestTarget("case 161", ["ababaab", ["ab", "ba", "ba"]], [1]),
  ]);
};
