import Quicksort from './quicksort.js';
import BFS, { BFSRightSide, BFSLeftSide } from './bfs.js';
import { buildBinaryTree } from '../data-structures/binarytreenode.js';

const UNSORTED_ARR = [1, 5, 2, 9, 4, 3, 7, 0, 6, 8];
console.log('UNSORTED ARRAY', UNSORTED_ARR);

const quicksortArr = [...UNSORTED_ARR];
Quicksort(quicksortArr, 0, quicksortArr.length - 1);
console.log('QUICKSORT', quicksortArr);

// tree traversal
const root = buildBinaryTree(quicksortArr);

const bfsTraversal = BFS(root);
console.log('BFS TRAVERSAL', bfsTraversal);

const bfsRightSideTraversal = BFSRightSide(root);
console.log('BFS RIGHT SIDE TRAVERSAL', bfsRightSideTraversal);

const bfsLeftSideTraversal = BFSLeftSide(root);
console.log('BFS LEFT SIDE TRAVERSAL', bfsLeftSideTraversal);