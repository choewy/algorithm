import * as brootForce from "typescript/solved/leetcode-005-longest-palindromic-substring_1";

describe("leetcode 05. Longest Palindromic Substring", () => {
  describe("using brute force", () => {
    it("tc1", () => {
      expect(brootForce.longestPalindrome("babad")).toEqual("bab");
    });

    it("tc2", () => {
      expect(brootForce.longestPalindrome("abad")).toEqual("aba");
    });

    it("tc3", () => {
      expect(brootForce.longestPalindrome("cbbd")).toEqual("bb");
    });

    it("tc4", () => {
      expect(brootForce.longestPalindrome("abccba")).toEqual("abccba");
    });

    it("tc5", () => {
      expect(brootForce.longestPalindrome("ac")).toEqual("a");
    });

    it("tc6", () => {
      expect(brootForce.longestPalindrome("aacabdkacaa")).toEqual("aca");
    });
  });
});
