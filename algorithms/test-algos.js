import Quicksort from './quicksort.js';
import BFS, { BFSRightSide, BFSLeftSide } from './bfs.js';
import DFS, { DFSPreOrder, DFSPostOrder } from './dfs.js';
import { buildBinaryTree } from '../data-structures/binarytreenode.js';

const UNSORTED_ARR = [1, 5, 2, 9, 4, 3, 7, 0, 6, 8];
console.log('UNSORTED ARRAY', UNSORTED_ARR);

const quicksortArr = [...UNSORTED_ARR];
Quicksort(quicksortArr, 0, quicksortArr.length - 1);
console.log('QUICKSORT', quicksortArr);

// tree traversals
const root = buildBinaryTree([1, 2, 3, 4, 5]);

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