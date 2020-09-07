export default class BinaryTreeNode {
  value;
  right;
  left;

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// arr must be level ordered
export const buildBinaryTree = (arr, i = 0, root = null) => {
  if (i < arr.length) {
    root = new BinaryTreeNode(arr[i]);
    // console.log(arr[i], "ROOT", root, "LEFT", arr[2*i+1], "RIGHT", arr[2*i+2]);
    root.left = buildBinaryTree(arr, 2 * i + 1, root.left);
    root.right = buildBinaryTree(arr, 2 * i + 2, root.right);
  }
  // console.log("RETURNING ROOT", root)
  return root;
}