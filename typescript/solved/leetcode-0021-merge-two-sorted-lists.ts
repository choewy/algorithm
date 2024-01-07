import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/merge-two-sorted-lists
 */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

const setNextValue = (
  node: ListNode,
  list1: ListNode | null,
  list2: ListNode | null
): [ListNode, ListNode | null, ListNode | null] => {
  if (list1 === null) {
    node.next = new ListNode(list2.val);

    return [node.next, list1, list2.next];
  }

  if (list2 === null) {
    node.next = new ListNode(list1.val);

    return [node.next, list1.next, list2];
  }

  if (list1.val === list2.val) {
    node.next = new ListNode(list1.val, new ListNode(list2.val));

    return [node.next.next, list1.next, list2.next];
  }

  if (list1.val < list2.val) {
    node.next = new ListNode(list1.val);

    return [node.next, list1.next, list2];
  }

  if (list1.val > list2.val) {
    node.next = new ListNode(list2.val);

    return [node.next, list1, list2.next];
  }

  return [node, null, null];
};

/**
 * @runtime 64 ms
 * @memory 45.90 mb
 */
const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  let list = new ListNode();
  let node = list;

  while (true) {
    if (list1 === null && list2 === null) {
      break;
    }

    [node, list1, list2] = setNextValue(node, list1, list2);
  }

  return list.next;
};

/**
 * @runtime 61 ms
 * @memory 44.57 mb
 */
const mergeTwoListsRecursive = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoListsRecursive(list1.next, list2);

    return list1;
  } else {
    list2.next = mergeTwoListsRecursive(list1, list2.next);

    return list2;
  }
};

export const test = () => {
  const createListNode = (values: number[]) => {
    const list = new ListNode();

    let node = list;

    for (const value of values) {
      node.next = new ListNode(value);
      node = node.next;
    }

    return list.next;
  };

  new TestModule(mergeTwoListsRecursive).test([
    new TestTarget(
      "case 01",
      [createListNode([1, 2, 4]), createListNode([1, 3, 4])],
      createListNode([1, 1, 2, 3, 4, 4])
    ),
    new TestTarget("case 02", [createListNode([]), createListNode([])], createListNode([])),
    new TestTarget("case 03", [createListNode([]), createListNode([0])], createListNode([0])),
  ]);
};
