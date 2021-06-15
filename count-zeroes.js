// Given an array of 1s and 0s which has 
// all 1s first followed by all 0s, write 
// a function called countZeroes, which 
// returns the number of zeroes in the array.

function countZeroes(arr) {
  

  
}

function binaryIndex0(arr){
    let low = 0;
    let high = arr.length -1;

    while (low <= high) {
        let midI = low + Math.floor((low + high) / 2);

        if((midI === 0 || arr[midI - 1] === 1) && arr[midI] === 0){
            return midI;
        } else if (arr[midI] === 1){
            low = midI + 1;
        } else {
            high = midI - 1
        }
    }
    return -1;
}

// module.exports = countZeroes
module.exports = binaryIndex0;