from typing import List


class Solution:
    def mergeArrayWithSort(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums: List[int] = []

        n1 = None
        n2 = None

        while True:
            if nums1.__len__() == 0 and  n1 is None and nums2.__len__() == 0 and n2 is None:
                break

            if nums1.__len__() > 0 and n1 is None:
                n1 = nums1.pop(0)

            if nums2.__len__() > 0 and n2 is None:
                n2 = nums2.pop(0)

            if n1 is not None and n2 is None:
                nums.append(n1)
                n1 = None
                continue

            if n2 is not None and n1 is None:
                nums.append(n2)
                n2 = None
                continue
            
            if n1 == n2:
                nums.append(n1)
                nums.append(n2)
                n1 = None
                n2 = None
                continue
                
            if n1 > n2:
                nums.append(n2)
                n2 = None
                continue

            if n1 < n2:
                nums.append(n1)
                n1 = None
                continue
            
        return nums


    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = self.mergeArrayWithSort(nums1, nums2)
        length = nums.__len__()

        index = length // 2

        if length % 2 == 1:
            val = nums[index]
        else:
            val = (nums[index - 1] + nums[index]) / 2

        return val


def test() -> None:
    solution = Solution()

    print(solution.findMedianSortedArrays([1,3], [2]) == 2.0)
    print(solution.findMedianSortedArrays([1,2], [3,4]) == 2.5)


if __name__ == "__main__":
    test()
