/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
    let sum = 0;
    nums.forEach((v,i)=>{
        nums[i] += sum;
        sum += v;
    })
    return nums;
};
