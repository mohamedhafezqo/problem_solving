/**
 * Link: https://leetcode.com/problems/flipping-an-image
 * Input: [[1,1,0],[1,0,1],[0,0,0]]
 * Output: [[1,0,0],[0,1,0],[1,1,1]]
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(let row = 0; row < A.length; row++) {
        let left = 0;
        let right = A[row].length -1;

        while (left <= right) {
            if (A[row][left] == A[row][right]) {
                A[row][left] = A[row][right] == 1 ? 0 : 1;
                A[row][right] = A[row][left];
            }
            
            left++;
            right--;
        }
    }
    
    return A;
};
