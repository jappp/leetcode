/**
 * 插入排序 O(n^2)
 * 通过构建有序序列，在已排序序列从后向前扫描，找到相应位置并插入
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i;

    // 和已经排序好的序列进行比较，内循环中选中元素大于外循环元素,表示需要交换。
    while(j > 0 && arr[j - 1] > current) {
      // 已排序数列元素向右移动, 腾出位置
      arr[j] = arr[j - 1];
      j--;
    }
    // 结束循环, 得到最终插入位置
    arr[j] = current;
  }
  return arr;
}

insertionSort([5, 2, 4, 1])