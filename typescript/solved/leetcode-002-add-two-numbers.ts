/**
 * @description https://leetcode.com/problems/add-two-numbers/description
 * */

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  let plus = 0;

  let node: ListNode | null = null;
  let next: ListNode | null = null;

  while (true) {
    if (l1 === null && l2 === null) {
      if (next && plus > 0) {
        next.next = new ListNode(plus);
      }

      break;
    }

    let val = plus;

    if (l1) {
      val += l1.val || 0;
      l1 = l1.next;
    }

    if (l2) {
      val += l2.val || 0;
      l2 = l2.next;
    }

    if (val > 9) {
      val -= 10;
      plus = 1;
    } else {
      plus = 0;
    }

    if (node === null) {
      node = new ListNode(val);
      next = node;
      continue;
    }

    if (next === null) {
      node.next = new ListNode(val);
      next = node.next;
    } else {
      next.next = new ListNode(val);
      next = next.next;
    }
  }

  return node;
};
