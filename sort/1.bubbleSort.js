/**
 * 思路：两层循环，
 * 外循环遍历整个数组，内循环依次比较相邻两项大小，如果反序则交换，最终第一次内循环结束时,最大的数冒泡升到最后面.
 * 注意内循环终止条件是小于数组长度-1再减去i，减i,第i次表示有i个数排序到数组后面,这些数字就不用重复排序了。
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
    }
    console.log(`第${i+1}次循环`, arr);
  }

  return arr;
}

// 标记优化, 定义一个mark标记，如果一轮交换中mark标记没有改变，说明数组已经有序, 终止外层遍历。
function bubbleSort2(arr) {
  if (!Array.isArray(arr)) {
    throw 'type error';
  }
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let mark = true;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        mark = false;
      }
    }
    console.log(mark);
    console.log(`第${i+1}次循环`, arr);
    if (mark) return;
  }

  return arr;
}

/**
 * 双向冒泡
 * 普通的冒泡在一轮循环中只找出最大值的最小值，双向冒泡是双向比较，同时找出最大值和最小值
 * 采用双指针向中间压缩
*/
function bubbleSort3(arr) {
  if (!Array.isArray(arr)) {
    throw 'type error';
  }
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    // 一轮循环找完最大值, 右指针左移
    right--;

    for(let j = right; j > left; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
    // 同理找完最小值, 左指针右移
    left++
  }
    
  return arr;
}

bubbleSort3([4, 2, 5, 3, 1])