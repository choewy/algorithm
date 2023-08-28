from typing import List


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max = 0
        
        for i, c in enumerate(s):
            val = c

            for v in s[i+1:]:
                if v in val:
                    break

                val += v

            cnt = val.__len__()

            if max < cnt:
                max = cnt

        return max


def test() -> None:
    solution = Solution()

    print('(1)', solution.lengthOfLongestSubstring('abcabcbb') == 3)
    print('(2)', solution.lengthOfLongestSubstring('bbbbb') == 1)
    print('(3)', solution.lengthOfLongestSubstring('pwwkew') == 3)
    print('(4)', solution.lengthOfLongestSubstring('dvdf') == 3)
    print('(5)', solution.lengthOfLongestSubstring('cdd') == 2)
    print('(6)', solution.lengthOfLongestSubstring('anviaj') == 5)
    print('(7)', solution.lengthOfLongestSubstring('asljlj') == 4)
    print('(8)', solution.lengthOfLongestSubstring('wobgrovw') == 6)
    print('(9)', solution.lengthOfLongestSubstring('hkcpmprxxxqw') == 5)
    print('(10)', solution.lengthOfLongestSubstring('ckilbkd') == 5)


if __name__ == "__main__":
    test()
