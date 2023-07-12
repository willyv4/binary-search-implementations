const findRotatedIndex = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;
  let res = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currVal = arr[mid];

    if (currVal === val) {
      res = mid;
      return res;
    }

    if (count === 0) {
      if (val < arr[right] && val <= currVal) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (currVal < val) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    count++;
  }

  return res;
};

module.exports = findRotatedIndex;
