/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// nums = [1, 3, 5, 6]
// target = 7
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (high - low > 1) {
        let middle = Math.floor((low + high) / 2);

        if (target > nums[middle]) {
            low = middle + 1;
        }
        else {
            high = middle;
        }
    }
    if (nums[low] == target) {
        return low;
    }
    if (nums[high] == target) {
        return high;
    }
    if (target > nums[high]) {
        return high + 1;
    }
    if (target > nums[low]) {
        return low + 1;
    }
    return low;
};