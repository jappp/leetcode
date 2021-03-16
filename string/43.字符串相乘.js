var multiply = function(num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;
  let res = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    let n1 = +num1[i];
    for (let j = len2 - 1; j >= 0; j--) {
      let n2 = +num2[j];
      let sum = n1 * n2 + res[i + j + 1];

      res[i + j + 1] = sum % 10;
      res[i + j] += Math.floor(sum / 10);
    }
  }
  // 去除前面的0
  while(res[0] === 0) {
    res.shift();
  }

  return res.length ? res.join('') : '0';
};