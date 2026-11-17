class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        pre = 1
        post = 1
        for n in nums:
            res.append(pre)
            pre *= n
        
        for n in range(len(nums) -1, -1, -1):
            res[n] *= post
            post *= nums[n]

        return res