/**
 * 思路: 分治
 * 
 * n为偶数时, y = x ^ n/2, result = y * y;
 * n为奇数时, y = x ^ (n-1)/2, result = y * y * x; 
*/
var myPow = function(x, n) {
  if (!n) return 1;
  
  if (n < 0) return 1 / myPow(x, -n);

  return n % 2 === 1 ? x * myPow(x, n - 1) : myPow(x * x, n / 2);
};