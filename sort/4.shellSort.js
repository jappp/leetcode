/**
 * 希尔排序-> 优化版插入排序
 * 基本思想：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序。
 * 时间O(nlogn)  空间O(1)
*/

function shellSort(arr) {
  let len = arr.length;
  let gap = parseInt(len / 2);

  while(gap) {
    // 从第gap个元素，逐个对其所在组进行直接插入排序操作
    for (let i = gap; i < len; i++) {
      // 和前面的，根据gap分组的成员进行比较
      for (let j = i; j >= 0; j -= gap) {
        // 如果前面组成员大于当前项, 交换
        if (arr[j - gap] > arr[j]) {
          [arr[j - gap], arr[j]] = [arr[j], arr[j - gap]];
        } else {
          break;
        }
      } 
    }
    gap = parseInt(gap / 2);
  }

  return arr;
}

shellSort([4, 2, 5, 3, 1, 8, 7, 6]);