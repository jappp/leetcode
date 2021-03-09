/**
 * 归并排序
 * 递归将数组分为两个序列，有序合并这两个序列。作为一种典型的分而治之思想的算法应用
 * 时间O(nlogn)  空间O(n)
*/

function mergeSort(arr) {
  let len = arr.length;

  if (len < 2) {
    return arr;
  }
  let middle = Math.floor(len / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let res = [];

  // 左序列和右序列同时存在时, 根据大小决定入队顺序
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while(left.length) {
    res.push(left.shift());
  }
  while(right.length) {
    res.push(right.shift());
  }

  return res;
}

mergeSort([4, 2, 5, 3, 1, 8, 7, 6]);

// 归并排序的处理过程是由下而上的，先处理子问题，然后再合并。
// 而快排正好相反，它的处理过程是由上而下的，先分区，然后再处理子问题。
// 归并排序虽然是稳定的、时间复杂度为 O(nlogn) 的排序算法，但是它是非原地排序算法。
// 归并之所以是非原地排序算法，主要原因是合并函数无法在原地执行。
// 快速排序通过设计巧妙的原地分区函数，可以实现原地排序，解决了归并排序占用太多内存的问题。
