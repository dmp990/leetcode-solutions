class Solution:
    # abccccdd
    # 7 -> dccaccd
    # total no of palindromes: all pairs of same characters
    # + 1 (if there are chars that are not in pairs)
    # O(n)
    def longestPalindrome(self, s: str) -> int:
        
        # handle edge cases
        if len(s) == 1:
            return 1
        elif len(s) == 0:
            return 0
        
        count = 0
        hashmap = {} # char: count
        for character in s:
            if character in hashmap:
                del hashmap[character]
                count += 1
            else:
                hashmap[character] = 1
        if hashmap:
            return count * 2 + 1
        return count * 2