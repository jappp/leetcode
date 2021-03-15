/**
 * 迭代 
 * 设置虚拟头节点dummy, 真实头结点需要交换，根据虚拟头结点next可以获取头结点
 */
var swapPairs = function(head) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let temp = dummyNode;

  while (temp.next && temp.next.next) {
    let start = temp.next;
    let end = temp.next.next;

    temp.next = end;
    start.next = end.next;
    end.next = start;
    temp = start;
  }

  return dummyNode.next;
};

/**
 * 注意一下，分析递归问题的时候，要观察本级递归的解决过程，形成抽象模型，
 * 因为递归本质就是不断重复相同的事情。而不是去思考完整的调用栈，一级又一级，无从下手
 * 我们只要确定递归的终止条件，返回结果，以及中间的处理逻辑就可以了
*/
/**
 * 递归三要素：返回值，调用单元做了什么，终止条件
 * 返回值：交换完成的子链表
 * 调用单元：设需要交换的两个点为 head 和 next，head 连接后面交换完成的子链表，next 连接 head，完成交换
 * 终止条件：head 为空指针或者 next 为空指针，也就是当前无节点或者只有一个节点，无法进行交换
*/
var swapPairs = function(head) {
  if (!head || !head.next) return head;

  let nextNode = head.next;
  // 两两交换，步长为2
  let last = swapPairs(head.next.next);

  head.next = last;
  nextNode.next = head;

  return nextNode;
};