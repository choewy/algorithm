/**
 * @description  https://leetcode.com/problems/longest-substring-without-repeating-characters/description
 * */

export const lengthOfLongestSubstring = (s: string): number => {
  let chars: string = '';
  let index = 0;
  let max = 0;

  while (s.length > index) {
    const char = s[index];

    index += 1;

    if (chars.includes(char)) {
      chars = chars.substring(chars.search(char) + 1) + char;
      continue;
    }

    chars += char;

    if (max < chars.length) {
      max = chars.length;
    }
  }

  return max;
};
