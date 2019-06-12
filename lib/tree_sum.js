function treeSum(root) {
  if (!root) return 0;
  let sum = 0;
  let stack = [root];
  while ( stack.length ) {
    let node = stack.pop();
    sum = sum + node.val;
    if ( node.right ) stack.push(node.right);
    if ( node.left ) stack.push(node.left);
  }
  return sum;
}


module.exports = {
  treeSum
};