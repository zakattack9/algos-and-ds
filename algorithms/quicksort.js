const Quicksort = (arr, low, high) => {
  if (low < high) {
    const pivot = Partition(arr, low, high);
    // console.log("PIVOT", pivot, "ARR", arr)
    Quicksort(arr, low, pivot - 1);
    Quicksort(arr, pivot + 1, high);
  }
}

const Partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1; 
  // console.log("\nPIVOT", pivot, "LOW", low, "HIGH", high);

  for (let j = low; j <= high - 1; j++) {
    // console.log(`\ni === ${i}; arr[j] ${arr[j]} <= pivot ${pivot}`);
    if (arr[j] <= pivot) {
      i++;
      // console.log(`i === ${i}; swap arr[i] ${arr[i]} with arr[j] ${arr[j]}`);
      swap(arr, i, j);
    } 
  }

  // console.log(`\ni === ${i}; swap arr[i + 1] ${arr[i + 1]} with arr[high] ${arr[high]}`);
  swap(arr, i + 1, high);
  return i + 1;
}

const swap = (arr, firstIndex, secondIndex) => {
  const firstEl = arr[firstIndex];
  const secondEl = arr[secondIndex];
  arr[firstIndex] = secondEl;
  arr[secondIndex] = firstEl;
}

export default Quicksort;