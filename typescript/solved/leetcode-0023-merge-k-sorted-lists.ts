import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/merge-k-sorted-lists
 * */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

/**
 * @runtime 314 ms
 * @memory 47.74 mb
 * */
const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  const list = new ListNode();

  let node = list;

  while (true) {
    let index = -1;
    let value = null;

    for (let i = 0; i < lists.length; i++) {
      const ls = lists[i];

      if (ls === null) {
        continue;
      }

      if (value === null || value > ls.val) {
        index = i;
        value = ls.val;
      }
    }

    if (value === null) {
      break;
    }

    node.next = new ListNode(value);
    node = node.next;

    lists[index] = lists[index].next;
  }

  return list.next;
};

export const test = () => {
  const createLinkedList = (values: number[]) => {
    const list = new ListNode();

    let node = list;

    for (const value of values) {
      node.next = new ListNode(value);
      node = node.next;
    }

    return list.next;
  };

  new TestModule(mergeKLists).test([
    new TestTarget(
      "case 01",
      [
        [
          [1, 4, 5],
          [1, 3, 4],
          [2, 6],
        ].map((values) => createLinkedList(values)),
      ],
      createLinkedList([1, 1, 2, 3, 4, 4, 5, 6])
    ),
    new TestTarget("case 02", [[].map((values) => createLinkedList(values))], createLinkedList([])),
    new TestTarget("case 03", [[[]].map((values) => createLinkedList(values))], createLinkedList([])),
  ]);
};
