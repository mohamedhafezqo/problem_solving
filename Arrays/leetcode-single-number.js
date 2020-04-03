/**
 * @link: https://leetcode.com/problems/single-number/
 * @input [2,2,1]
 * @output 1
 */
 
 /**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let collection = {};
    let numsLength = nums.length;
    
    for (let i = 0; i < numsLength; i++) {
        collection[nums[i]] = (collection[nums[i]] || 0) + 1;
    }
    
    for (key in collection) {
        if (collection[key] < 2) {            
            return key;
        }
    }
};