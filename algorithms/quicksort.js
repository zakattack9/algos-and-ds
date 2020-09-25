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

  swap(arr, i + 1, high);
  return i + 1;
}

const swap = (arr, firstIndex, secondIndex) => {
  const tempEl = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tempEl;
}

export default Quicksort;