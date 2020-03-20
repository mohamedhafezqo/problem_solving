/**
 * Link: https://leetcode.com/problems/add-to-array-form-of-integer/
 * input: A = [1,2,0,0], K = 34
 * output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 */ 

/**
 * @param [int] array
 * @param int K
 * @return {boolean}
 */

var addToArrayForm = function(A, K) {

K = String(K).split("");
i = A.length - 1;
j = K.length - 1;
carry = 0;

while(j >=  0 || i >= 0 || carry > 1) {

        number = sum(K[j], A[i]) + carry;

        if (number <= 9) {
            A[i] = number;
            if(i<0) {
              A.unshift(number)
            }
            carry = 0;        
        } else if (number > 9 ) {
            A[i] = number-10;
            if(i<0) {
              A.unshift(number-10)
            }
            carry = 1;
        }

        i--;
        j--;

        if (carry == 1 && i < 0 && j < 0) {
          A.unshift(1)
        }
    }
    return A
}

sum = function(a, b) {
  number = isNaN(parseInt(a)) ? 0 : parseInt(a);
  number = isNaN(parseInt(b)) ? number + 0 : number + parseInt(b);

  return number;
}
