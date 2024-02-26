function runningSum(nums: number[]): number[] {
    let sum = 0;
    for (let i = 0; nums.length > i; i++) {
        let tempNum = nums[i];
        nums[i] += sum;
        sum += tempNum;
    }
    return nums;
};
