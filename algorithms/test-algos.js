import Quicksort from './quicksort.js';
import Mergesort from './mergesort.js';

import { buildBinaryTree } from '../data-structures/binarytreenode.js';
import BFS, { BFSRightSide, BFSLeftSide } from './bfs.js';
import DFS, { DFSPreOrder, DFSPostOrder, DFSInOrderIterative, DFSPreOrderIterative, DFSPostOrderIterative } from './dfs.js';
import BinarySearch from './binarysearch.js';

const UNSORTED_ARR = [1, 5, 2, 9, 4, 3, 7, 0, 6, 8];
console.log('UNSORTED ARRAY', UNSORTED_ARR);

// sorting
const quicksortArr = [...UNSORTED_ARR];
Quicksort(quicksortArr, 0, quicksortArr.length - 1);
console.log('QUICKSORT', quicksortArr);

const mergesortArr = [...UNSORTED_ARR];
const sortedArr = Mergesort(mergesortArr);
console.log('MERGESORT', sortedArr);

// tree traversals
const root = buildBinaryTree(UNSORTED_ARR);

const bfsTraversal = BFS(root);
console.log('BFS TRAVERSAL', bfsTraversal);

const bfsRightSideTraversal = BFSRightSide(root);
console.log('BFS RIGHT SIDE TRAVERSAL', bfsRightSideTraversal);

const bfsLeftSideTraversal = BFSLeftSide(root);
console.log('BFS LEFT SIDE TRAVERSAL', bfsLeftSideTraversal);

const dfsTraversal = DFS(root);
console.log('DFS INORDER TRAVERSAL', dfsTraversal);

const dfsPreOrderTraversal = DFSPreOrder(root);
console.log('DFS PREORDER TRAVERSAL', dfsPreOrderTraversal);

const dfsPostOrderTraversal = DFSPostOrder(root);
console.log('DFS POSTORDER TRAVERSAL', dfsPostOrderTraversal);

const dfsInOrderIterativeTraversal = DFSInOrderIterative(root);
console.log('DFS INORDER ITERATIVE TRAVERSAL', dfsInOrderIterativeTraversal);

const dfsPreOrderIterativeTraversal = DFSPreOrderIterative(root);
console.log('DFS PREORDER ITERATIVE TRAVERSAL', dfsPreOrderIterativeTraversal);

const dfsPostOrderIterativeTraversal = DFSPostOrderIterative(root);
console.log('DFS POSTORDER ITERATIVE TRAVERSAL', dfsPostOrderIterativeTraversal);

// binary search
const bsIndex = BinarySearch(quicksortArr, 2);
console.log('BINARY SEARCH INDEX', bsIndex);