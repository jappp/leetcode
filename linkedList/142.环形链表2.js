// 哈希表 时间复杂度O(n), 空间复杂度O(n)
var detectCycle = function(head) {
  let visited = new Set();

  while(head && head.next) {
    if (visited.has(head)) {
      return head;
    }
    visited.add(head);
    head = head.next;
  }
  return null;
};

/***
 * 快慢指针思路
 * fast指针和slow指针有环必相遇, a为头节点到入环点的距离, b:入环点到首次相遇点的距离 c:首次相遇点到入环点的距离
 * 首次相遇时slow一定还没走完一环,相对速度slow静止，fast速度为1，当slow静止在入环口时，fast一定在环内。
 * 设首次相遇时fast绕环n次, fast行走距离是slow两倍
 * 2(a+b) = a+n(b+c)+b 即 a = (n-1)b + nc; 当n=1时 a = c;
 * 为了确定「入环点」，我们「人为制造」快慢指针在入环点相遇。让快指针从头节点出发，速度改为和慢指针一样，慢指针留在首次相遇点，同时出发。
 * 因为 a = c，二者速度相同，所以会同时到达入环点
*/

var detectCycle = function(head) {
  let slow = fast = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (fast === slow) { 
      fast = head;
      while(true) {
        slow = slow.next;
        fast = fast.next;
        if (fast === slow) {
          return fast;
        }
      }
    }
  }

  return null;
};
