// Link https://www.hackerrank.com/challenges/2d-array/problem
// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let maxValue = -63;
    for(let row = 0; row <=3; row++) {
        for(let column = 0; column <=3; column++) {
            let currentValue = arr[row][column] + arr[row][column+1] + arr[row][column+2]
            + arr[row+1][column+1]
            + arr[row+2][column] + arr[row+2][column+1] + arr[row+2][column+2];
            
            maxValue = maxValue <= currentValue ? currentValue : maxValue;
        }
    }

    return maxValue;
}