from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    @staticmethod
    def make(nums: List[int]):
        node = None
        next = None

        for num in nums:
            if next is None:
                node = ListNode(num)
                next = node
            else:
                next.next = ListNode(num)
                next = next.next

        return node


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        val = l1.val + l2.val

        if val > 9:
            val -= 10
            carry = 1
        
        node = ListNode(val)
        next = None

        l1 = l1.next
        l2 = l2.next

        while True:
            if l1 is None and l2 is None and carry == 0:
                break

            val = carry

            if l1 is not None:
                val += l1.val
                l1 = l1.next
            
            if l2 is not None:
                val += l2.val
                l2 = l2.next

            if val > 9:
                val -= 10
                carry = 1
            else:
                carry = 0

            if node.next is None:
                node.next = ListNode(val)
                next = node.next
            else:
                next.next = ListNode(val)
                next = next.next

        return node


class Testing:
    def make(self, nums: List[int]) -> ListNode:
        node = None
        next = None

        for num in nums:
            if next is None:
                node = ListNode(num)
                next = node
            else:
                next.next = ListNode(num)
                next = next.next
        
        return node
    
    def get_values(self, node: ListNode) -> List[int]:
        values = []
        
        while True:
            if node is None:
                break

            values.append(node.val)
            node = node.next

        return values
    
    def compare(self, node: ListNode, nums: List[int], logging=False) -> bool:
        values = self.get_values(node)

        if logging:
            print(values, nums)

        return values == nums
    


def test() -> None:
    testing = Testing()
    solution = Solution()

    print(testing.compare(solution.addTwoNumbers(testing.make([2,4,3]),testing.make([5,6,4])), [7,0,8], True))
    print(testing.compare(solution.addTwoNumbers(testing.make([0]), testing.make([0])), [0], True))
    print(testing.compare(solution.addTwoNumbers(testing.make([9,9,9,9,9,9,9]), testing.make([9,9,9,9])), [8,9,9,9,0,0,0,1], True))


if __name__ == "__main__":
    test()
