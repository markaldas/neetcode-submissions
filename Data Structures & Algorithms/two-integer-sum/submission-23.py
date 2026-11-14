class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # if len(nums) <= 1:
        #     return 
        indices = []
        n = {}

        for i in range(len(nums)):
            num = nums[i]

            if target - num in n:
                return [n[target - num], i]
            n[num] = i