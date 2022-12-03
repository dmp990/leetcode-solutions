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
    /*
    const returnArray = [nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        let sum = nums[i];
        for (let j = 0; j < i; j++) {
            sum += nums[j];
        }
        returnArray.push(sum);
    }
    return returnArray;
    */
};