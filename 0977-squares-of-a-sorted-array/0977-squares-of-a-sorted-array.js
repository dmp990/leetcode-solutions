/**
 * @param {number[]} nums
 * @return {number[]}
 */

// nums = [-4, -1, 0, 3, 10]
// 2 pointers

var sortedSquares = function(nums) {
    // naive solution
    /*
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.pow(nums[i], 2);
    }
    nums.sort((a, b) => a - b);
    return nums;
    */
    // solution with two pointers
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