/**
 * 前序遍历: 根左右
 * 中序遍历: 左根右
 * 后序遍历: 左右根
 * 记忆口诀: 前中后是相对于根节点来说的。
*/

/**
 * 无论是前、中、后序遍历，都是先访问根节点，再访问它的左子树，再访问它的右子树。
 * 区别在哪里？比如中序遍历，它是将（处理当前节点）放在了访问完它的左子树之后。比方说，打印节点值，就会产生「左 根 右」的打印顺序。
*/

// 递归实现
var inorderTraversal = function(root) {
  let res = [];
  const inorder = (root) => {
    if (!root) return;

    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }

  inorder(root);
  return res;
};

// 迭代实现
var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  
  // 将全部左子节点压入执行栈
  while(root) {
    stack.push(root);
    root = root.left;
  }

  while(stack.length) {
    // 栈顶元素出栈
    let node = stack.pop();
    res.push(node.val);

    // 执行完左节点,根节点之后, 获取他的右子树
    node = node.right;
    // 右子树也将全部左节点压入栈,然后执行出栈操作
    while(node) {
      stack.push(node);
      node = node.left;
    }
  }

  return res;
};