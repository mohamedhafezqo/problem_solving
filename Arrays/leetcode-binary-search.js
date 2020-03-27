/**
 * @Input: nums = [-1,0,3,5,9,12], target = 9
 * @Output: 4
 * @Explanation: 9 exists in nums and its index is 4
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    if (nums.length == 0) {
        return -1;
    }
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2);

        console.log(left,right, mid)
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
};