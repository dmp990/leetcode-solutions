class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        leftPtr, rightPtr = 0, 1
        max_profit = 0
        
        while rightPtr < len(prices):
            if prices[leftPtr] < prices[rightPtr]:
                max_profit = max(max_profit, prices[rightPtr] - prices[leftPtr])
            else:
                leftPtr = rightPtr
            rightPtr += 1
        return max_profit
