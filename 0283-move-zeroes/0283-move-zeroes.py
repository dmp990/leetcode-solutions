class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        rightPtr = len(nums) - 1
        leftPtr = 0
        
        while (leftPtr < rightPtr):
            if nums[leftPtr] == 0:
                del nums[leftPtr]
                nums.append(0)
                rightPtr -= 1
            else:
                leftPtr += 1