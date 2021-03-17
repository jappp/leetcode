/**
 * 快速排序 
 * 1. 选择一个基数（通常为第一个或者最后一个），
 * 2. 重新排列数组元素，使基准左侧所有元素小于基准，右侧所有元素大于基准。（分区操作）
 * 3. 对左右区间重复第二步, 直到各区间只有一个数就停止。
 * 时间复杂度O(nlogn)  空间复杂度 O(logn)
 */

/* 交换法
1.选择数组中的第一个元素arr[startIndex]作为轴（pivot）
2.左指针为left，从最左边开始寻找第一个比pivot大的数
3.右指针为right，从最右面的一个元素开始向左寻找第一个小于等于pivot的数值
4.经过2，3两个步骤后，将会出现以下两种情况
​ （1）：left和right没有相遇，此时进行交换，swap（arr,left,right）;
​ （2）：left和right相遇，做swap（arr,startIndex,left），然后返回left
5.partition中返回pivot用于分割数组，下一次用于排序的数组被分割为(startIndex,pivot-1),(pivot+1,endIndex)两段，进行递归操作 
*/

function quickSort(nums) {
  // 分区, 将小于基数的放到基数左边，大于基数的放到基数右边, 并返回基数的位置
  function partition(arr, left, right) {
    let pivot = arr[left];
    let l = left;
    let r = right;
    while(l < r) {
      // 若右指针指向的数大于基数，则继续从右向左查找
      while(l < r && arr[r] > pivot) r--;
      // 若左指针指向的数小于基数，则继续从左向右查找
      while(l < r && arr[l] <= pivot) l++;
      if (l < r) {
        // 交换
        [arr[l], arr[r]] = [arr[r], arr[l]];
      }
    }
    console.log(l, r);
    // 交换基点位置和相遇点
    [arr[left], arr[r]] = [arr[r], arr[left]];
    return r;
  }
  // 递归基数左右两边序列
  function recursive(arr, left, right) {
    if (left >= right)  return arr;
    let index = partition(arr, left, right);
    recursive(arr, left, index - 1);
    recursive(arr, index + 1, right);

    return arr;
  }

  return recursive(nums, 0, nums.length - 1);
}
quickSort([4, 2, 5, 3, 1, 8, 7, 6]);

// 非标准实现，不是数组内部排序，引入了新数组
function quickSort2(arr) {
  if (!Array.isArray(arr)) {
    throw 'type error';
  }
  if (arr.length <= 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  // 递归
  return [...quickSort2(left), pivot, ...quickSort2(right)];
}
quickSort2([4, 2, 5, 3, 1, 8, 7, 6]);