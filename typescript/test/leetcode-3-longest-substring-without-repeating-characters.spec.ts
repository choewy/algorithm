import { lengthOfLongestSubstring } from 'typescript/solved/leetcode-3-longest-substring-without-repeating-characters';

describe('leetcode 03. Longest Substring Without Repeating Characters', () => {
  it('tc1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  it('tc2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  });

  it('tc3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });

  it('tc4', () => {
    expect(lengthOfLongestSubstring('aab')).toEqual(2);
  });

  it('tc5', () => {
    expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
  });
});
