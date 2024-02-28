class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indexOne = 0
        indexTwo = 0
        for i in nums:
            for j in nums:
                if i + j == target and indexOne != indexTwo:
                    return [indexOne, indexTwo]
                indexTwo += 1
            indexTwo = 0
            indexOne += 1
