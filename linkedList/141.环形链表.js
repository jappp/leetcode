
// 利用set数据结构存储并判断相同节点，若存在相同则回环
var hasCycle = function(head) {
    let set = new Set();

    while(head && head.next) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};

// 标记法，设置标记下次找到该标记证明回环
var hasCycle = function(head) {
    while(head && head.next) {
        if (head.flag) {
            return true;
        } else {
            head.flag = true;
            head = head.next;
        }
    }
    return false;
};

/**
 * 快慢指针
 * 慢指针每次走一步，快指针每次走两步，若快慢指针指向同一个节点，表示存在回环
*/

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};

