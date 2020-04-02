/**
 * @Link https://leetcode.com/problems/is-subsequence
 * @input s = "abc", t = "ahbgdc"
 * @output true
 * @status {Easy}
 */
 
 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(sub, str) {
    let i = 0;
    let j = 0;
    
    if (!sub && !str) {
        return true;
    }
        
    while (j < str.length) {
        if (sub[i] === str[j]) {
            i++;
        }
        
        if (i === sub.length) {
            return true
        }
        
        j++;
    }
    
    return false;
};