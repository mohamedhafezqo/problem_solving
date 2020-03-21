/**
 * @link https://leetcode.com/problems/plus-one/
 * @Input: [1,2,3]
 * @Output: [1,2,4]
 * @Explanation: The array represents the integer 123.
 */
 
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    n = digits.length;
    for(i = n - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0;
     }

    digits = new Array(n+1).fill(0)
    digits[0] = 1
    return digits
};