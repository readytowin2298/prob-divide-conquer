// Write a function called findRotationCount which 
// accepts an array of distinct numbers sorted in 
// increasing order. The array has been rotated 
// counter-clockwise n number of times. Given such 
// an array, find the value of n.

function findRotationCount(arr, low = 0, high = arr.length - 1) {
    if (high < low) return 0;
    if (high === low) return low;
    let mid = Math.floor((low + high) / 2)
  

    if (mid < high && arr[mid + 1] < arr[mid])
      return mid + 1;
  
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid;
    }
  
    if (arr[high] > arr[mid]) {
      return findRotationCount(arr, low, mid - 1);
    }
  
    return findRotationCount(arr, mid + 1, high);
}

module.exports = findRotationCount