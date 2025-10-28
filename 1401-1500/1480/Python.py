class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        sum = 0
        for index in range(len(nums)):
            tempNum = nums[index]
            nums[index] += sum
            sum += tempNum
        return nums
