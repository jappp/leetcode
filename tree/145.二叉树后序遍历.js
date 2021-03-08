var postorderTraversal = function(root) {
  let stack = [];
  let res = [];

  if (root) stack.push(root);
  while(stack.length > 0) {
    let node = stack.pop();
    res.unshift(node.val); // 反向插入顺序

    // 左右根 变成 根右左
    // 所以先进栈左字树,后进栈右字树
    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }

  return res;
};