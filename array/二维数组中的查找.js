/**
 * 以二维数组左下角为原点，建立直角坐标轴。
 * 若当前数字大于了查找数，查找往上移一位。
 * 若当前数字小于了查找数，查找往右移一位。
*/
var findNumberIn2DArray = function(matrix, target) {
  let len = matrix.length;
  if (!len) return false;
  let x = len - 1;
  let y = 0;

  while(x >= 0 && y < matrix[0].length) {
    let now = matrix[x][y];
    if (now === target) {
      return true;
    } else if (now > target) {
      x--;
    } else {
      y++;
    }
  }

  return false;
};