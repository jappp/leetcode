// 暴力解法 O(n^2)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


/**
 * 空间换时间 时间复杂度O(n)
 * 遍历数组用表存储每一项key为数值, value为下标.
 * 计算出目标值减去当前值, 并去表中查找,如果查到则返回对应数值
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0, len = nums.length; i < len; i++) {
    let x = target - nums[i];
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(nums[i], i);
  }
};
