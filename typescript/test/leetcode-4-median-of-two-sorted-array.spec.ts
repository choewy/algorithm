import { findMedianSortedArrays } from 'typescript/solved/leetcode-4-median-of-two-sorted-arrays';

describe('leetcode 04. Median of Two Sorted Arrays', () => {
  it('tc1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2.0);
  });

  it('tc2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });
});
