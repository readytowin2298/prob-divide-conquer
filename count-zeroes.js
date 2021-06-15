// Given an array of 1s and 0s which has 
// all 1s first followed by all 0s, write 
// a function called countZeroes, which 
// returns the number of zeroes in the array.

function countZeroes(arr) {
    // Find first 0 
    let first = binaryIndex0(arr)

    // Return 0 if no 0 is found
    if (first === -1) return 0

    // Return num of 0's
    return arr.length - first;
}

function binaryIndex0(arr, low = 0, high = arr.length - 1) {
    // Catch if no 0 is found
    if (high >= low) {
    
        let mid = low + Math.floor((high - low) / 2)
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;
        } else if (arr[mid] === 1) {
            return binaryIndex0(arr, mid + 1, high)
        }
        return binaryIndex0(arr, low, mid - 1)
        }
    return -1;
  }
  

// module.exports = countZeroes
module.exports = countZeroes;