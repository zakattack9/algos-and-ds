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

  console.log(traversal)
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