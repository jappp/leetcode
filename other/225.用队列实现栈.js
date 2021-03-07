/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = [];
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  let queue2 = [];
  // 循环到队列元素只剩一
  while(this.queue.length > 1) {
    queue2.push(this.queue.shift());
  }
  let pop = this.queue.shift(); // 删除队列首个元素，即模拟栈的栈顶
  while(queue2.length) { // 又把元素放回队列
    this.queue.push(queue2.shift());
  }

  return pop;
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.queue[this.queue.length - 1];
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return !this.queue.length;
};  

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/