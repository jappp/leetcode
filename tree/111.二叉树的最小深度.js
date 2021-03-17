/**
 * BFS求最小值
*/
const minDepth = (root) => {
  if (root == null) return 0;

  const queue = [root]; // 根节点入列
  let depth = 1;        // 当前层的深度

  while (queue.length) { // 直到清空队列
      const levelSize = queue.length; // 当前层的节点个数
      for (let i = 0; i < levelSize; i++) { // 遍历 逐个出列
          const cur = queue.shift();  // 出列
          if (cur.left == null && cur.right == null) { // 如果没有孩子，直接返回所在层数
              return depth;
          }
          if (cur.left) queue.push(cur.left); // 有孩子，让孩子入列
          if (cur.right) queue.push(cur.right);
      }
      depth++; // 肯定有下一层，如果没有早就return了
  }
};

/**
 * DFS求最小值
*/
var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);

  const leftminDepth = minDepth(root.left);
  const rightminDepth = minDepth(root.right);
  // 当前节点也要算一层
  return 1 + Math.min(leftminDepth, rightminDepth);
};