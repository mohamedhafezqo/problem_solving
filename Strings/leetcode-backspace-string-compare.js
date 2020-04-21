/**
    link: https://leetcode.com/problems/backspace-string-compare/
    status: easy
    Input: S = "ab#c", T = "ad#c"
    Output: true
    Explanation: Both S and T become "ac".
*/
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let Sstart = 0;
    let Tstart = 0;
    let a = [];
    let b = [];    
    
    for(let i = 0; i < S.length; i++) {
        if (S.charAt(i) == '#' && Sstart) {
            Sstart--;
            a.pop();
        } else if (S.charAt(i) !== '#') {
            a.push(S.charAt(i));
            Sstart++;
        } 
        
    }
    
    for(let i = 0; i < T.length; i++) {
        if (T.charAt(i) == '#' && Tstart) {
            b.pop();
            Tstart--;
        } else if (T.charAt(i) !== '#') {
            b.push(T.charAt(i))
            Tstart++;
        } 
        
    }

    return a.join('') == b.join('');
};