import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/swap-nodes-in-pairs
 * @runtime 49ms
 * @memory 44.85 mb
 * */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

const getListNodeValus = (node: ListNode | null, values: number[], row: number[], flag: boolean) => {
  if (node === null) {
    return values.concat(row);
  }

  if (flag) {
    row.push(node.val);
  } else {
    row.unshift(node.val);
  }

  if (row.length === 2) {
    values.push(...row);
    row = [];
  }

  return getListNodeValus(node.next, values, row, !flag);
};

const createList = (values: number[]) => {
  const list = new ListNode();

  let node = list;

  for (const value of values) {
    node.next = new ListNode(value);
    node = node.next;
  }

  return list.next;
};

const swapPairs = (head: ListNode | null): ListNode | null => {
  return createList(getListNodeValus(head, [], [], true));
};

export const test = () => {
  new TestModule(swapPairs).test([
    new TestTarget("case 01", [createList([1, 2, 3, 4])], createList([2, 1, 4, 3])),
    new TestTarget("case 02", [createList([])], createList([])),
    new TestTarget("case 03", [createList([1])], createList([1])),
  ]);
};
