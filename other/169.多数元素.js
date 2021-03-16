var majorityElement = function(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i])+1 : 1);
  }
  for (let [key, value] of map.entries()) {
    if (value > nums.length / 2) {
      return key;
    }
  }
};

var majorityElement = function(nums) {
  let arr = nums.sort((a, b) => a - b);
  return arr[Math.floor(arr.length / 2)];
};