const binaryTreeSum = (tree) => {
  let sum = tree.value;
  if (tree.left) sum += binaryTreeSum(tree.left);
  if (tree.right) sum += binaryTreeSum(tree.right);
  return sum;
};

module.exports = binaryTreeSum;
