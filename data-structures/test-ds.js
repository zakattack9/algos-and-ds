import Queue from './queue.js';
import Stack from './stack.js';

let queue = new Queue([1, 2, 3]);
console.log(queue.pop())
console.log(queue.queue);

let stack = new Stack([1, 2, 3]);
console.log(stack.pop());
console.log(stack.stack);
