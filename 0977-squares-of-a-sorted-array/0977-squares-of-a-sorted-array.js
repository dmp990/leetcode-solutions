/**
 * @param {number[]} nums
 * @return {number[]}
 */

// nums = [-4, -1, 0, 3, 10]
// 2 pointers

var sortedSquares = function(nums) {
    
    let resultArray = [];
    let leftPtr = 0;
    let rightPtr = nums.length - 1;
    
    nums.forEach(() => {
        if (Math.abs(nums[leftPtr]) > Math.abs(nums[rightPtr])) {
            resultArray.unshift(nums[leftPtr++] ** 2);
        } else {
            resultArray.unshift(nums[rightPtr--] ** 2);
        }
    })
    return resultArray;
};