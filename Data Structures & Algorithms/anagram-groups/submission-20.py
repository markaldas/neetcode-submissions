class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ana_list = []
        sorted_map = {}

        for i in range(len(strs)):
            sorted_w = "".join(sorted(strs[i]))
            w = strs[i]
            if sorted_w not in sorted_map:
                ana_list.append([w])
                sorted_map[sorted_w] = len(ana_list) - 1
            elif sorted_w in sorted_map:
                ana_list[sorted_map[sorted_w]].append(w)
        
        return ana_list
