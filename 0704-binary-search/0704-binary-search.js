/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 70 odd ms
/*
var search = function(nums, target) {
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
    return -1;
};
*/
var search = function(nums, target) {
    return helper(nums, target, 0, nums.length);
}

const helper = (nums, target, low, high) => {
    let middle = Math.floor((low + high) / 2);
    if (low == high) {
        return - 1;
    }
    if (nums[middle] > target) {
        return helper(nums, target, low, middle);
    }
    else if (nums[middle] < target) {
        return helper(nums, target, middle + 1, high);
    }
    else {
        return middle;
    }
}