/**
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * status: easy
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * link: https://leetcode.com/problems/maximum-subarray/
 */
 
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let i = 0;
    
    if (nums.length == 1) {
        return maxSum;
    }
    
    while (i < nums.length) {
        let tempSum = nums[i] + nums[i-1];

        if (nums[i] < tempSum) {
            nums[i] = tempSum;
        } else if (nums[i] > nums[i-1] && nums[i] < tempSum) {
            nums[i] = tempSum;
        }

        maxSum = Math.max(maxSum, nums[i]);
        
        i++;
    }
    
    return maxSum;
};