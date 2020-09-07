import Queue from './queue.js';
import Stack from './stack.js';
import { buildBinaryTree } from './binarytreenode.js';

let queue = new Queue([1, 2, 3]);
console.log(queue.pop())
console.log(queue.queue);

let stack = new Stack([1, 2, 3]);
console.log(stack.pop());
console.log(stack.stack);

let levelOrderedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let root = buildBinaryTree(levelOrderedArr);
console.log("BT", root)