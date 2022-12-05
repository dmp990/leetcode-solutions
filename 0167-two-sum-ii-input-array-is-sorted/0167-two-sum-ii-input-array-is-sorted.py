class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        
        # Hashmap: number: index
        hashmap = {}
        
        for i, n in enumerate(numbers):
            if target - n in hashmap:
                # print(f"about to return {hashmap[target-n]} and {i}")
                return [hashmap[target-n] + 1, i + 1]
            hashmap[n] = i
        