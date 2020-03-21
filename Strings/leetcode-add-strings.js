/**
 * @link https://leetcode.com/problems/add-strings/submissions/
 * @input {string} num1
 * @output {string} num2
 */

 /**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {

    if (num1.length < 1 || num2.length < 1) {
      return num1.length > num2.length ? num1 : num2;
    }

    num1 = num1.split("");
    num2 = num2.split("");
    
    i = num1.length - 1
    j = num2.length - 1
    carry = 0;
    
   while (i >= 0 || j >= 0 || carry > 1) {
       
       total = sum(num1[i], num2[j]) + carry;
       if (total <= 9) {
           num1[i] = total;

           if(i<0) {
             num1.unshift(total)
           }

           carry = 0;
       } else if (total > 9) {
           num1[i] = total - 10;

           if(i<0) {
             console.log(total)
             num1.unshift(total-10)
           }

           console.log(total)
           carry = 1;
       }
       
       i--;
       j--;

         if (carry == 1 && i < 0 && j < 0) {
          num1.unshift(1)
        }
   }
   
   return num1.join("")
};

function sum(a,b) {
    a = isNaN(parseInt(a)) ? 0 : parseInt(a);
    b = isNaN(parseInt(b)) ? 0 : parseInt(b);

    return a + b;
}
