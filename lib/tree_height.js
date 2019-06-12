function treeHeight(root) {
  if ( !root ) return -1;
  if ( !root.left && !root.right ) return 0;
  let left = 0;
  let right = 0;
  if (root.left) left = treeHeight(root.left) + 1;
  if (root.right) right = treeHeight(root.right) + 1;

  return Math.max(left, right);
}


module.exports = {
  treeHeight
};




