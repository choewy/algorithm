import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
 * @runtime 53 ms
 * @memory 42.34 mb
 * */
const strStr = (haystack: string, needle: string): number => {
  return haystack.match(needle)?.index ?? -1;
};

export const test = () => {
  new TestModule(strStr).test([
    new TestTarget("case 01", ["sadbutsad", "sad"], 0),
    new TestTarget("case 02", ["leetcode", "leeto"], -1),
    new TestTarget("case 59", ["hello", "ll"], 2),
  ]);
};
