package Leetcode.no_001_two_sum;

import java.util.Arrays;

public class Target {
   String name;
   int[] nums;
   int value;
   int[] expect;
   int[] output;
   Boolean result;

   public Target(String name, int[] nums, int value, int[] expect) {
    this.name = name;
    this.nums = nums;
    this.value = value;
    this.expect = expect;
   }

   public String toString() {
      return "{\n" 
         + "  name : " + this.name + ",\n"
         + "  nums : " + Arrays.toString(this.nums) + ",\n"
         + "  target : " + this.value + ",\n"
         + "  expect : " + Arrays.toString(this.expect) + ",\n"
         + "  output : " + Arrays.toString(this.output) + ",\n"
         + "  result : " + this.result
         + "\n}";
   }

   public void compare(int[] output) {
    this.output = output;
    this.result = this.expect == output;

    System.out.println(this.toString());
   }
}
