import { TestModule, TestTarget } from "@/utils";

/**
 * @link https://leetcode.com/problems/remove-nth-node-from-end-of-list
 * @runtime 57 ms
 * @memory 44.92 mb
 */
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

const getListNodeLength = (listNode: ListNode) => {
  let length = 1;
  let node = listNode;

  while (true) {
    if (node.next === null) {
      break;
    }

    node = node.next;
    length += 1;
  }

  return length;
};

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
  const target = getListNodeLength(head) - n;

  let index = 0;
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (true) {
    if (index === target) {
      if (prev === null) {
        head = current.next;
        break;
      }

      prev.next = current?.next;
      break;
    }

    prev = current;
    current = current.next;

    index++;
  }

  return head;
};

export const test = () => {
  const createListNode = (values: number[]) => {
    let head: ListNode | null = null;
    let node: ListNode | null = null;

    while (values.length > 0) {
      if (head === null) {
        head = new ListNode(values.shift());
        node = head;
      } else {
        node.next = new ListNode(values.shift());
        node = node.next;
      }
    }

    return head;
  };

  new TestModule(removeNthFromEnd).test([
    new TestTarget("case 01", [createListNode([1, 2, 3, 4, 5]), 2], createListNode([1, 2, 3, 5])),
    new TestTarget("case 02", [createListNode([1]), 1], createListNode([])),
    new TestTarget("case 03", [createListNode([1, 2]), 1], createListNode([1])),
    new TestTarget("case 187", [createListNode([1, 2]), 2], createListNode([2])),
  ]);
};
