import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/merge-k-sorted-lists
 * */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

/**
 * @runtime 72 ms
 * @memory 49.41 mb
 * */
const getListsValues = (lists: Array<ListNode | null>) => {
  const values: number[] = [];

  while (lists.length > 0) {
    let ls = lists.pop();

    while (ls) {
      values.push(ls.val);
      ls = ls.next;
    }
  }

  return values;
};

const createSortedList = (values: number[]) => {
  values.sort((x, y) => x - y);

  const list = new ListNode();

  let node = list;

  for (const value of values) {
    node.next = new ListNode(value);
    node = node.next;
  }

  return list.next;
};

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  return createSortedList(getListsValues(lists));
};

export const test = () => {
  new TestModule(mergeKLists).test([
    new TestTarget(
      "case 01",
      [
        [
          [1, 4, 5],
          [1, 3, 4],
          [2, 6],
        ].map((values) => createSortedList(values)),
      ],
      createSortedList([1, 1, 2, 3, 4, 4, 5, 6])
    ),
    new TestTarget("case 02", [[].map((values) => createSortedList(values))], createSortedList([])),
    new TestTarget("case 03", [[[]].map((values) => createSortedList(values))], createSortedList([])),
  ]);
};
