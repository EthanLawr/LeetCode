class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 1; nums.length > i; i++) {
            for (int j = i; nums.length > j; j++) {
                if (target == nums[j] + nums[j-i]) return new int[]{j,j-i};
            }
        }
        return null;
    }
}
