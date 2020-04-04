/**
 * @link: https://leetcode.com/problems/happy-number/
 * @status: easy
 * @Input: 19
 * @Output: true
 */

 /**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n = String(n);
    nLength = n.length;
    
    if (parseInt(n) === 1) {
        return true;
    }
    if (parseInt(n) < 1 || parseInt(n) == 4) { //|| nLength < 2
        return false;
    }
    
    let newN = 0;
    for (let i = 0; i < nLength; i++) {
        newN += Math.pow(parseInt(n[i]), 2)
    }

    return isHappy(parseInt(newN));
};

console.log(isHappy(7))