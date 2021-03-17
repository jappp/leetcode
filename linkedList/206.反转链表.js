/* 反转一个单链表。 */

// 循环实现
/**
 * 定义两个指针，prev为null，cur为head
 * 遍历链表，将cur.next倒转方向指向prev，然后cur和 prev分别往前一步
 * 原理是循环，每次反转一个节点，循环完成后prev变成反转后的head节点
*/
var reverseList = function(head) {
  let prev = null;
  let cur = head;
  
  while(cur) {
      [cur.next, prev, cur] = [prev, cur, cur.next];
  }

  return prev;
};


// 递归实现
/**
 * 最先调用的函数会在递归过程中最后被执行，而最后调用的会最先执行
 * 
 * 将链表分成两个部分：1. 第一个节点 2. 余下的部分
 * 假设余下部分已经反转完成，余下部分的最后一个节点指向第一个节点，然后返回余下部分的head。
 * 余下部分也能分成相同的两个部分，这样就有递归的思路。
 * 当余下部分只有最后一个节点时，就是递归出口终止递归。
*/
var reverseList = function(head) {
  // 步骤二，确定递归出口，
  // 只有一个节点或者递归到了尾节点，返回当前节点
  if (!head || !head.next) return head;

  // 步骤一 递归下个节点
  let last = reverseList(head.next);
  // 步骤三，反转操作
  head.next.next = head; // 原 head.next 指向head，即是反转
  head.next = null; // 将原 head 指向head.next的指针断开

  return last;
}