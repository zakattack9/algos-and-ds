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
  if (!arr) return [];
  if (i < arr.length) {
    root = new BinaryTreeNode(arr[i]);
    // console.log(arr[i], "ROOT", root, "LEFT", arr[2*i+1], "RIGHT", arr[2*i+2]);
    root.left = buildBinaryTree(arr, 2 * i + 1, root.left);
    root.right = buildBinaryTree(arr, 2 * i + 2, root.right);
  }
  // console.log("RETURNING ROOT", root)
  return root;
}

// given a sorted array create a balanced binary search tree O(N)
export const sortedArrayToBST = (nums) => {
  if (!nums.length) return null;
  const construct = (left, right) => {
    if (left > right) return null;
    const mid = left + Math.floor((right - left) / 2);
    let node = new BinaryTreeNode(nums[mid]);
    node.left = construct(left, mid - 1);
    node.right = construct(mid + 1, right);
    return node;
  }
  return construct(0, nums.length - 1);
};
