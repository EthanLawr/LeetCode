public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for (int i = 0; nums.Length > i; i++) {
            for (int j = 1; nums.Length > j; j++) {
                if (i != j && nums[i] + nums[j] == target) return [i,j];
            }
        }
        return [0,0];
    }
}
