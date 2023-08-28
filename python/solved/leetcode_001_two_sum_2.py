'''
description https://leetcode.com/problems/two-sum/description
'''


class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        num1_cursor = -1
        num2_cursor = 0

        while True:
            if num1_cursor > -1 and num2_cursor > 0:
                break

            if nums.__len__() == 0:
                break

            num1_cursor += 1
            num1 = nums.pop(0)
            num2 = target - num1

            for i, num in enumerate(nums):
                if num == num2:
                    num2_cursor = num1_cursor + i + 1
                    break

        return [num1_cursor, num2_cursor]


def test() -> None:
    solution = Solution()

    print(solution.twoSum([2, 7, 11, 15], 9) == [0, 1])
    print(solution.twoSum([3, 2, 4], 6) == [1, 2])
    print(solution.twoSum([3, 3], 6) == [0, 1])


if __name__ == "__main__":
    test()
