var preorderTraversal = function(root) {
  let stack = [];
  let res = [];

  if (root) stack.push(root);
  while(stack.length) {
      const node = stack.pop();
      res.push(node.val);

      // 根左右,栈先入后出所以先把右节点压入栈
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
  }

  return res;
};