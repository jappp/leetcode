/**
 * 思路: 链表加法
 * 首先创建一个链表头节点,并且保存下来，方便链表遍历加完之后返回该链表头节点。
 * cur为加法进位，加法进位存在时也需要进行一次相加操作
 * 当l1或者l2存在时，进行相加操作，并且对加法取余，得到计算值a并创建一个新链表节点node.next，值为a
 * node = node.next进行结果遍历
 * l1和l2存在时,一直向下遍历,直到两个节点都为null，并且加法进位为0时结束循环
*/
var addTwoNumbers = function(l1, l2) {
  let node = new ListNode('0');
  // 保存头结点
  let head = node; 
  let cur = 0;

  while(cur || l1 || l2) {
      let val1 = l1 ? l1.val : 0;
      let val2 = l2 ? l2.val : 0;
      let nodeVal = val1 + val2 + cur;
      cur = nodeVal >= 10 ? 1 : 0;

      node.next = new ListNode(nodeVal % 10);
      node = node.next;
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next
  }
  return head.next;
};