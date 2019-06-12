function breadthFirstArray(root) {
  let stack = [root];
  let vals = [];
  while (stack.length) {
    let node = stack.shift();
    vals.push(node.val);
    if ( node.left ) stack.push(node.left);
    if ( node.right ) stack.push(node.right);
  }
  return vals;
}

module.exports = {
    breadthFirstArray
};