/**
 * 根据二叉搜索树性质，如果p和q的val都小于根节点，p，q肯定在root的左子树，递归左子树查找
 * p和q的val大于根节点，递归右子树
 * 那么如果p, q不同处在 root 的一个子树的时候，有这三种情况
 * 1. p，q分别处于root的左右子树
 * 2. p就是root
 * 3. q就是root
 * 
 * 这三种情况, p和q的最近公共祖先都是root,所以直接返回root
*/
var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q);
    }
    if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};