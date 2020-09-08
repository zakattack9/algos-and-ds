// breadth-first search for trees
const BFS = (root) => {
  let traversal = [];
  if (!root) return traversal;

  let queue = [root];
  while (queue.length > 0) {
    // grab queue length (tree level length) before any elements are dequeued
    const treeLevelLength = queue.length;
    // loop through and queue each node at a single tree level
    for (let i = 0; i < treeLevelLength; i++) {
      const head = queue.shift();
      traversal.push(head.value);
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
  }

  return traversal;
}
export default BFS;

// returns only rightmost nodes at each tree level
export const BFSRightSide = (root) => {
  let traversal = [];
  if (!root) return traversal;

  let queue = [root];
  while (queue.length > 0) {
    const treeLevelLength = queue.length;
    for (let i = 0; i < treeLevelLength; i++) {
      const head = queue.shift();
      // check if we have looped to the last element of a tree level
      if (i === treeLevelLength - 1) {
        traversal.push(head.value);
      }
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
  }

  return traversal;
}

// returns only leftmost nodes at each tree level
export const BFSLeftSide = (root) => {
  let traversal = [];
  if (!root) return traversal;

  let queue = [root];
  while (queue.length > 0) {
    const treeLevelLength = queue.length;
    for (let i = 0; i < treeLevelLength; i++) {
      const head = queue.shift();
      // check if we are at the first element of a tree level
      if (i === 0) {
        traversal.push(head.value);
      }
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
  }

  return traversal;
}