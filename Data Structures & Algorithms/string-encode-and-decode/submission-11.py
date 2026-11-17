class Solution:

    def encode(self, strs: List[str]) -> str:
        
        encoded_string = str(len(strs)) + ","

        for i in range(len(strs)):
            encoded_string += str(len(strs[i])) + ","

        for s in strs:
            encoded_string += s
        
        print(encoded_string)
        return encoded_string

    def decode(self, s: str) -> List[str]:
        i = 0
        j = s.index(",", i)
        n = int(s[i:j])
        i = j + 1
        len_of_str = []

        for _ in range(n):
            j = s.index(",", i)
            len_of_str.append(int(s[i:j]))
            i = j + 1

        decoded_strs = []

        for l in len_of_str:
            decoded_strs.append(s[i: i + l])
            i += l

        return decoded_strs
        
