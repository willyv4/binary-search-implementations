function sortedFrequency(arr, val) {
  const left = findLeftIdx(arr, val);
  const right = findRightIdx(arr, val);

  return left === -1 ? left : right - left + 1;
}

function findLeftIdx(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let res = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      res = mid;
      right = mid - 1;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}

function findRightIdx(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let res = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      res = mid;
      left = mid + 1;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1

module.exports = sortedFrequency;
