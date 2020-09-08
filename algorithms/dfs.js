// in-order depth-first search (left subtree => root => right subtree)
const DFS = (root, traversal = []) => {
  if (!root) return traversal;

  DFS(root.left, traversal);
  traversal.push(root.value);
  DFS(root.right, traversal);

  return traversal;
}
export default DFS;

// pre-order depth-first search (root => left subtree => right subtree)
export const DFSPreOrder = (root, traversal = []) => {
  if (!root) return traversal;

  traversal.push(root.value);
  DFSPreOrder(root.left, traversal);
  DFSPreOrder(root.right, traversal);

  return traversal;
}

// post-order depth-first search (left subtree => right subtree => root)
export const DFSPostOrder = (root, traversal = []) => {
  if (!root) return traversal;

  DFSPostOrder(root.left, traversal);
  DFSPostOrder(root.right, traversal);
  traversal.push(root.value);

  return traversal;
}

// in-order iterative depth-first search solution
export const DFSInOrderIterative = (root) => {
  let traversal = [];
  if (!root) return traversal;

  let stack = [];
  let node = root;

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      traversal.push(node.value);
      node = node.right;
    }
  }

  return traversal;
}

//  pre-order iterative depth-first search solution
export const DFSPreOrderIterative = (root) => {
  let traversal = [];
  if (!root) return traversal;

  let stack = [root];
  let node;

  while(stack.length) {
    node = stack.pop();
    traversal.push(node.value);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return traversal;
}

// post-order iterative depth-first search solution
export const DFSPostOrderIterative = (root) => {
  let traversal = [];
  if (!root) return traversal;

  let stack = [root];
  let node;

  while(stack.length) {
    node = stack.pop();
    traversal.push(node.value);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return traversal.reverse();
}

// one liners
export const DFS_In = root => root ? [...DFS_In(root.left), root.value, ...DFS_In(root.right)] : [];
export const DFS_Pre = root => root ? [root.value, ...DFS_Pre(root.left), ...DFS_Pre(root.right)] : [];
export const DFS_Post = root => root ? [...DFS_Post(root.left), ...DFS_Post(root.right), root.value] : [];

// export const DFSRightSide = (root, traversal = []) => {

// }