// Link https://leetcode.com/problems/sort-array-by-parity

/**
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 */

// time complexity O(n)
// space complexity O(n)
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let newArray = [];
    let j = 0;
    for (let i = 0; i <= A.length -1; i++) {
        if(A[i] % 2 == 0) {
            newArray[j] = A[i]
            j++;
        }
    }
    
    for (let i = 0; i <= A.length -1; i++) {
        if(A[i] % 2 != 0) {
            newArray[j] = A[i]
            j++;
        }
    }
    
    return newArray;
};

// time complexity O(n)
// space complexity O(n)
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let i = 0;
    let j = A.length - 1;
    let newArray = Array.from({length: j});

    for (element of A) {
        if(element % 2 == 0) {
            newArray[i] = element
            i++;
        } else {
        	newArray[j] = element
            j--;
        }
    }
    
    return newArray;
};

// time complexity O(n)
// space complexity O(1)
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let j = 0;

    for(i = 0; i < A.length; i++) {
      if(A[i] % 2 == 0) {
        let temp = A[i];
        A[i] = A[j]
        A[j] = temp;
        console.log(temp)

        j++;
      }
    }
    return A;
};
