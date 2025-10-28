public class Solution {
    public int[] RunningSum(int[] nums) {
        int sum = 0;
        for (int i = 0; nums.Length > i; i++) {
            int tempVar = nums[i];
            nums[i] += sum;
            sum += tempVar;
        }
        return nums;
    }
}
