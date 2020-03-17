// Link https://www.hackerrank.com/challenges/arrays-ds/problem
// Complete the reverseArray function below.
function reverseArray(a) {

   let reversedArrays = [];
    let j = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        reversedArrays[j]= a[i];
        j++;
    }
    return reversedArrays;
}