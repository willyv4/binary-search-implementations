// recursive

// function findFloor(arr, num, low = 0, high = arr.length - 1) {
//   if (low > high) return -1;
//   if (num >= arr[high]) return arr[high];

//   let mid = Math.floor((low + high) / 2);

//   if (arr[mid] === num) return arr[mid];

//   if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
//     return arr[mid - 1];
//   }

//   if (num < arr[mid]) {
//     return findFloor(arr, num, low, mid - 1);
//   }

//   return findFloor(arr, num, mid + 1, high);
// }

// WHILE Loop

function findFloor(arr, num) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    if (low > high) return -1;
    if (num >= arr[high]) return arr[high];

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === num) return arr[mid];

    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }

    if (num < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5)); // 2
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 14)); // 12
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1

module.exports = findFloor;
