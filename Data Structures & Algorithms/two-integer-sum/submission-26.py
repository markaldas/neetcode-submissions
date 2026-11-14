class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = {}

        for i in range(len(nums)):
            num = nums[i]
            if target - num in n:
                return [n[target - num], i]
            n[num] = i