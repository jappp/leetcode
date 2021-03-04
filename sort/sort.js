// 冒泡排序
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
      throw 'type error';
  }
  var length = arr.length;
  for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - i - 1; j++) {
          if (arr[j] > arr[j+1]) {
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
      }
  }
  return arr;
}

// 快速排序
function quickSort(arr) {
  if (!Array.isArray(arr)) {
      return 'type error';
  } 
  if (arr.length <= 1) {
      return arr;
  }
  let pivotIndex = parseInt(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
          left.push(arr[i]) 
      } else {
          right.push(arr[i])
      }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}