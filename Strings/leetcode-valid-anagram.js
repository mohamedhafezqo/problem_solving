/**
 * @link: https://leetcode.com/problems/valid-anagram/
 * @Input: s = "anagram", t = "nagaram"
 * @Output: true
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  if(s.length !== t.length) {
    return false;
  }

  aLetter = {};

  for(let val of s) {
    aLetter[val] = (aLetter[val] || 0 ) + 1;
  }

  for(let val of t) {
    if(!aLetter[val]) {
      return false;
    }
    aLetter[val] -= 1;
  }

  return true;
};