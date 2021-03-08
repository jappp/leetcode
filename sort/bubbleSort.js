/**
 * 思路：两层循环，
 * 外循环遍历整个数组，内循环依次比较相邻两项大小，如果反序则交换，最终第一次内循环结束时,最大的数冒泡升到最后面.
 * 注意内循环终止条件是小于数组长度减一再减i，长度减一就是没有可供比较的后面的数了。
 * 减i,第i次表示有i个数排序到数组后面,这些数字就不用重复排序了。
 * 时间O(n^2) 空间O(1)
*/
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    throw 'type error';
  }
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      console.log(j + ':' + arr)
    }
  }

  return arr;
}

bubbleSort([4, 2, 5, 3, 1])