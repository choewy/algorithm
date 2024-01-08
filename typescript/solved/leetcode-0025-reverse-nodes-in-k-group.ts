import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/reverse-nodes-in-k-group
 * @runtime 76 ms
 * @memory 47.56 mb
 * */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

const createListNode = (values: number[]): ListNode => {
  const list = new ListNode();

  let node = list;

  for (const value of values) {
    node.next = new ListNode(value);
    node = node.next;
  }

  return list.next;
};

const getListNodeValuesRecursive = (list: ListNode, k: number, values: number[], arr: number[], seq: number) => {
  if (list === null) {
    return values.concat(arr);
  }

  arr.push(list.val);

  if (k === seq) {
    arr = arr.reverse();
    values = values.concat(arr);

    arr = [];
    seq = 0;
  }

  return getListNodeValuesRecursive(list.next, k, values, arr, seq + 1);
};

const reverseKGroup = (head: ListNode | null, k: number): ListNode | null => {
  return createListNode(getListNodeValuesRecursive(head, k, [], [], 1));
};

export const test = () => {
  new TestModule(reverseKGroup).test([
    new TestTarget("case 01", [createListNode([1, 2, 3, 4, 5]), 2], createListNode([2, 1, 4, 3, 5])),
    new TestTarget("case 02", [createListNode([1, 2, 3, 4, 5]), 3], createListNode([3, 2, 1, 4, 5])),
    new TestTarget(
      "case 03",
      [createListNode([1, 7, 3, 2, 7, 0, 1, 0, 0]), 4],
      createListNode([2, 3, 7, 1, 0, 1, 0, 7, 0])
    ),
  ]);
};
