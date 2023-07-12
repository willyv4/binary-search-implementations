function countZeroes(arr) {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[right] === 0) {
      right = right - 1;
      count += 1;
    } else {
      return count;
    }
  }

  return count;
}

module.exports = countZeroes;
