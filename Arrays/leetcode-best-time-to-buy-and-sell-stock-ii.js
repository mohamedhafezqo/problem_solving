/**
 * @link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @status: easy
 * @Input: [7,1,5,3,6,4]
 * @Output: 7
 */

 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let i = 0;
    let j = 1;
    let profit = 0;
    let length = prices.length;
    
    while (j < length) {
        // how I solve it

        // profit = 4 + 3
        //          i   
        // [7,1,5,3,6,4]
        //            j 

        // profit = 1 + 1 + 1 + 1
        //        i
        // [1,2,3,4,5]
        //          j

        // profit = 0
        //        i
        // [7,6,4,3,1]
        //          j

        // profit = 2 + 3 + 3
        //              i
        // [3,3,5,0,0,3,1,4]
        //                j

        
        let diff = prices[j] - prices[i];
        
        if (diff <= 0) {
            i++;
        } else if (diff > 0) {
            profit += diff;
            i++;
        }
        
        j++;
    } 
    
    return profit;
};