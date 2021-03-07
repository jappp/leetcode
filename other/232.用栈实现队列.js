/**
 * 栈和队列是两个相反思想的数据结构，根据数学思维负负得正
 * 我们维护一个input输入栈和output输出栈，所有的队列push直接push入输入栈
 * 当队列pop和peek时，首先将输入栈内容依次放入输出栈，然后在pop或者peek；
 * 即input：1->2->3, 栈先进后出所以output: 3->2->1;
 * 每个元素都要入两个栈倒腾一下顺序实现队列先入先出
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.inStack.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  while(!this.outStack.length) {
      this.inToOut();
  }
  return this.outStack.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  while(!this.outStack.length) {
      this.inToOut();
  }
  return this.outStack[this.outStack.length - 1];
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.inStack.length === 0 && this.outStack.length === 0;
};

MyQueue.prototype.inToOut = function() {
  while(this.inStack.length) {
      this.outStack.push(this.inStack.pop());
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/