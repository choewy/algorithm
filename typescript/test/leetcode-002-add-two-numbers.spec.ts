import { ListNode, addTwoNumbers } from "typescript/solved/leetcode-002-add-two-numbers";

const makeListNode = (values: number[]): ListNode | null => {
  let node: null | ListNode = null;
  let last: null | ListNode = null;

  for (const value of values) {
    if (node === null) {
      node = new ListNode(value);
      continue;
    }

    if (last === null) {
      node.next = new ListNode(value);
      last = node.next;
    } else {
      last.next = new ListNode(value);
      last = last.next;
    }
  }

  return node;
};

const getNodeValues = (node: ListNode | null) => {
  const values: number[] = [];

  while (node) {
    values.push(node.val);
    node = node.next;
  }

  return values;
};

describe("leetcode 02. Add Two Numbers", () => {
  it("tc1", () => {
    const l1 = makeListNode([2, 4, 9]);
    const l2 = makeListNode([5, 6, 4, 9]);
    const res = addTwoNumbers(l1, l2);
    const values = getNodeValues(res);

    expect(JSON.stringify(values)).toEqual(JSON.stringify([7, 0, 4, 0, 1]));
  });

  it("tc2", () => {
    const l1 = makeListNode([
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    ]);
    const l2 = makeListNode([5, 6, 4]);
    const res = addTwoNumbers(l1, l2);
    const values = getNodeValues(res);

    expect(JSON.stringify(values)).toEqual(
      JSON.stringify([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    );
  });

  it("tc3", () => {
    const l1 = makeListNode([5]);
    const l2 = makeListNode([5]);
    const res = addTwoNumbers(l1, l2);
    const values = getNodeValues(res);

    expect(JSON.stringify(values)).toEqual(JSON.stringify([0, 1]));
  });
});
