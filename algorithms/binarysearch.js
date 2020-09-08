// binary search a sorted arr for a specific num and return index
const BinarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === num) return mid;

    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export default BinarySearch;