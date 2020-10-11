const Quicksort = (arr, low, high) => {
  if (low < high) {
    const pivot = Partition(arr, low, high);
    Quicksort(arr, low, pivot - 1);
    Quicksort(arr, pivot + 1, high);
  }
}

const Partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1; 

  for (let j = low; j < high ; j++) {
    if (arr[j] <= pivot) {
      swap(arr, ++i, j);
    } 
  }

  swap(arr, ++i, high);
  return i;
}

const swap = (arr, firstIndex, secondIndex) => {
  const tempEl = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tempEl;
}

export default Quicksort;

// modified partition where i keeps track of the next index to swap numbers less than pivot or the pivot itself
const Partition2 = (arr, low, high) => {
  const pivot = arr[high];
  let i = low; 

  for (let j = low; j < high ; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i++, j);
    } 
  }

  swap(arr, i, high);
  return i;
}

// not a true quicksort algorithm as it does not sort in place and uses O(n) memory; however, this does have the same time complexity as the original quicksort
const qs = (arr) => {
  if (!arr.length) return [];
  const pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    if (arr[i] < pivot) left.push(arr[i]);
  }
  return [].concat(qs(left), pivot, qs(right));
};
