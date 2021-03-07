/**
 * 题解: 利用执行栈
 * 1. 先判断左右括号, 如果是左括号push进栈
 * 2. 如果是右括号, 和栈顶元素判断是否匹配，如果匹配，移除栈顶元素。若不匹配表示无效
 * 3. 最后判断完成后，两两对应的话，栈的长度应为0。
 */
var isValid = function (s) {
  let stack = [];
  let stringMap = { ")": "(", "]": "[", "}": "{" };

  let arr = s.split("");
  for (let i = 0, len = arr.length; i < len; i++) {
    let item = arr[i];
    if (!(item in stringMap)) {
      stack.push(item);
    } else if (!stack.length || stringMap[item] !== stack.pop()) {
      return false;
    }
  }
  return !stack.length;
};
