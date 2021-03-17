/**
 * 广度优先遍历
 * 注意点: 每一层级先遍历完，再进入下一层级
*/
var levelOrder = function(root) {
  if (!root) return [];

  let queque = [];
  let result = [];
  queque.push(root);

  while(queque.length) {
    let len = queque.length;
    let curLevel = [];

    for (let i = 0; i < len; i++) {
      let node = queque.shift();
      curLevel.push(node.val);
      if (node.left) queque.push(node.left);
      if (node.right) queque.push(node.right);
    }
    result.push(curLevel);
  }

  return result;
};