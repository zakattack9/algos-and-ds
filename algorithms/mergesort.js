const Mergesort = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(Mergesort(left), Mergesort(right));
}

const merge = (left, right) => {
  let arr = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr.push(left[leftIndex++]);
    } else {
      arr.push(right[rightIndex++]);
    }
  }

  return arr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export default Mergesort;