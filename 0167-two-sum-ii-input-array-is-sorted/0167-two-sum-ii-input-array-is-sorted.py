class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        
        # Hashmap: number: index
        hashmap = {}
        
        for i, n in enumerate(numbers):
            if target - n in hashmap:
                return [hashmap[target-n] + 1, i + 1]
            hashmap[n] = i
        