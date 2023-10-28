package Leetcode.no_001_two_sum;


public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] arr = {-1, -1};

        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    arr[0] = i;
                    arr[1] = j;

                    break;
                }
            }
        }

        return arr;
    }

    public static void main(String[] args) {
        Target[] targets = {
            new Target("case 1", new int[] {2, 7, 11, 15}, 9, new int[] {0, 1}),
            new Target("case 2", new int[] {2, 7, 11, 15}, 9, new int[] {0, 1}) 
        };

        Solution solution = new Solution();

        for (Target target : targets) {
            target.compare(solution.twoSum(target.nums, target.value));
        }
    }
}
