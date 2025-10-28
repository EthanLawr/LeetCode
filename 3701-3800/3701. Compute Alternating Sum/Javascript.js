/**
 * @param {number[]} nums
 * @return {number}
 */
const alternatingSum = nums => {
    let x = 0;
    for (n in nums) n % 2 == 0 ? x += nums[n] : x -= nums[n];
    return x
};