/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
*/
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let max = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    let str = s[i];
    let index = arr.indexOf(str);

    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(str);
    max = Math.max(arr.length, max);
  }
  return max;
};

/**
 * 题解：
 * 核心思路：滑动端口
 * 滑动端口看成一个队列，例如abcbcbb，遍历字符串将字符不断加入队列，并且判断字符是否在队列中存在，若存在则删除相同字符和相同字符之前的字符。
 * 一直维持该无重复字符的队列，在遍历中保存并返回队列的最大值。
 * 如队列为abc时，下一个字符为b，此时[a,b,c,b]不满足条件，需要移除a,b变成[b,c]，依次反复类推得出结果
*/