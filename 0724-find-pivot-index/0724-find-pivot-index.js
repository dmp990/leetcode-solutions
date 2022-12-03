/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = nums.reduce((c, n) => c + n, 0);
    let ls = 0;
    for (let i = 0; i < nums.length; i++) {
        if (ls == (sum - ls - nums[i])) {
            return i;
        }
        ls += nums[i];
    }
    return -1;
};