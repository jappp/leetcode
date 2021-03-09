/**
 * 选择排序 时间O(n^2)
 * 1. 首先找到最小元素, 放到排序序列的起始位置
 * 2. 再从剩余未排序元素中找到最小元素, 放到已排序序列的末尾。
 * 3. 重复第二步，直到所有元素均排序完毕
 * 直观明了,循环选择出最小元素
*/
function selectionSor(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    // 交换找到的最小元素和循环项元素
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

selectionSor([4, 2, 5, 3, 1])