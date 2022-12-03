/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let sum = 0;
    const returnArr = [];
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        returnArr.push(sum);
    }
    
    return returnArr;
};