// 两层循环hash 时间O(n^2) 空间O(n)
var threeSum = function(nums) {
  let hash = new Set();
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          let target = -(nums[i] + nums[j]);
          if (hash.has(target)) {
              arr.push([target, nums[i], nums[j]]);
          }
          hash.add(nums[i], nums[j]);
      }
  }

  return arr;
};


// 外循环遍历, 内循环left,right双指针寻找满足三数之和为0的两个元素
// 先排序数组，如果当前元素和前一个元素相同，跳过
// 外层遍历i值a，left指针指向i+1, 值b, right指针指向数组末位，值c
// 若a+b+c==0表示找到一个解，left和right同时收缩（注意这时候要判断指向不重复的元素）
// 若a+b+c>0 表示值超过了,那么右指针需要左移取更小的值, 同理a+b+c<0 左指针右移
// 排序后, 若外层a值大于0,则后面的两个值一定大于0,直接break

var threeSum = function(nums) {
  nums = nums.sort((a, b) => a -b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    if (a > 0) break;
    if (i - 1 >= 0 && a === nums[i - 1]) continue; // 后面遍历到重复的数，跳过

    let left = i + 1;
    let right = nums.length - 1;

    while(left < right) {
      let b = nums[left];
      let c = nums[right];
      if (a + b + c === 0) {
        res.push([a, b, c]);
        while(left < right && nums[left] === b) left++;
        while(left < right && nums[right] === c) right--;
      } else if (a + b + c > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};