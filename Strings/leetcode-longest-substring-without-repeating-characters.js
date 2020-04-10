/** 
 * Input: "abcabcbb"
 * Output: 3 
 * status: medium
 * link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Explanation: The answer is "abc", with the length of 3. 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let longestSub = 0;
    let start = 0;
    let seen = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        
        seen[char] = i + 1;
        
        longestSub = Math.max(longestSub, i - start + 1);
    }
    
    return longestSub;
};