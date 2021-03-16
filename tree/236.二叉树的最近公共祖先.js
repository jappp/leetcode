/**
 * 思路: 
 * 如果root就是 p 或者 q的话，那么 LCA 就是root
 * 否则我们分别进入左子树和右子树中递归查找
 * 当左子树返回null时,表示没有找到p或者q, 那么p或者q一定在右子树, return 递归右子树返回的p或者q
 * 当左子树和右子树都查到了p或者q，那么root其实就是LCA了
*/
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) {  // 遇到null，返回null 没有LCA
    return null;
  }
  if (root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left === null) {
    return right;
  }
  if (right === null) {
    return left;
  }
  return root;
};