class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_map = {}
        k_nums = []

        for num in nums:
            num_map[num] = num_map.get(num, 0) + 1
        sorted_n = sorted(num_map.items(), key=lambda item: item[1], reverse=True)
        for t in range(len(sorted_n)) :
            k_nums.append(sorted_n[t][0])
            if len(k_nums) == k:
                return k_nums