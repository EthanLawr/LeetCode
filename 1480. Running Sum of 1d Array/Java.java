class Solution {
    public int[] runningSum(int[] nums) {
        int sum = 0;
        for (int i = 0; nums.length > i; i++) {
            int tempVar = nums[i];
            nums[i] += sum;
            sum += tempVar;
        }
        return nums;
    }
}
