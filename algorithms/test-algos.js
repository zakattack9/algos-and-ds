import Quicksort from './quicksort.js';
const UNSORTED_ARR = [1, 5, 2, 9, 4, 3, 7, 0, 6, 8];
console.log('UNSORTED ARRAY', UNSORTED_ARR);

let quicksortArr = UNSORTED_ARR;
Quicksort(quicksortArr, 0, quicksortArr.length - 1);
console.log('QUICKSORT', quicksortArr);