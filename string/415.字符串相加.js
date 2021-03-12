/**
 * 倒序相加,注意进位即可
*/
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let ans = [];
  let add = 0;

  while(add !== 0 || i >=0 || j >= 0) {
    let n1 = i >= 0 ? +num1.charAt(i) : 0;
    let n2 = j >= 0 ? +num2.charAt(j) : 0;
    let sum = n1 + n2 + add;
    ans.unshift(sum % 10);
    add = Math.floor(sum / 10);

    i--;
    j--;
  }

  return ans.join('');
};