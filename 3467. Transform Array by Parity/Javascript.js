/**
 * @param {number[]} nums
 * @return {number[]}
 */
const transformArray = nums => {
    for (n in nums) nums[n] % 2 == 0 ? nums[n] = 0 : nums[n] = 1
    return nums.sort();
};