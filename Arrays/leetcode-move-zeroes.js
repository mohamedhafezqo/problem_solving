/**
 * @Input: [0,1,0,3,12]
 * @Output: [1,3,12,0,0]
 * @status: easy
 * @link: https://leetcode.com/problems/move-zeroes/
 */
 
 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let j = 1;
    let length = nums.length;
    
    while(j < length) {
        if (nums[i] == 0 && nums[j] != 0) {
            nums[i] = nums[j];
            nums[j] = 0;
            i++;
        } else if (nums[i] != 0) {
            i++;
        }

        j++;
    }
    
    return nums;
};