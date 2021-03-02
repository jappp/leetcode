/**
 * 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 */

var reverse = function (x) {
  let result = 0;
  let y = Math.abs(x);

  while (y !== 0) {
    // 取余得到末位，乘算赋值给result
    result = result * 10 + (y % 10);
    // 向下取整去除末位
    y = Math.floor(y / 10);
  }

  if (x < 0) {
    return -result >= Math.pow(-2, 31) ? -result : 0;
  }
  return result <= Math.pow(2, 31) - 1 ? result : 0;
};

/**
 * 题解：取余法
 */
