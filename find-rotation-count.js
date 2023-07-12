/*
1. The function `findRotationCount` takes an array `arr` as input, 
along with optional parameters `low` and `high` that define the range of the array to consider.
If the range is invalid (i.e., `high` is less than `low`),
it returns 0. If the range contains only one element (`high` is equal to `low`), 
it returns the index of that element, indicating that there is no rotation.

2. Next, the function calculates the middle index of the current range by
using the formula `mid = Math.floor((low + high) / 2)`.
This index is used to divide the array into two halves.

3. The function checks if the element at `mid + 1` is smaller than the element at `mid`.
If this condition is true, it means that the rotation occurs at index `mid + 1`.
For example, in the array `[15, 18, 2, 3, 6, 12]`, 
the rotation occurs between 18 and 2, so the condition is true when `mid` is 1. In this case,
the function returns `mid + 1` (i.e., 2).

4. If the condition in step 3 is not true, 
the function checks if the element at `mid` is smaller than the element at `mid - 1`.
If this condition is true, it means that the rotation occurs at index `mid`. For example,
in the array `[7, 9, 11, 12, 5]`, the rotation occurs between 12 and 5,
so the condition is true when `mid` is 3. In this case, the function returns `mid` (i.e., 3).

5. If neither of the conditions in steps 3 and 4 is true,
it means that the rotation point lies in one of the remaining halves of the array.
The function determines the correct half based on the comparison between the element at `high` and the element at `mid`.
If the element at `high` is greater than the element at `mid`, the rotation point lies in the left half.
Otherwise, it lies in the right half.

6. The function recursively calls itself with the updated range, 
either `low` to `mid - 1` or `mid + 1` to `high`, depending on the determined half.

By repeatedly dividing the search space in half,
the function finds the rotation point with a time complexity of O(log n),
where n is the size of the input array. 
The function returns the index of the rotation point or 0 if no rotation is found.

Using the provided examples:
- `findRotationCount([15, 18, 2, 3, 6, 12])` returns 2, which is the index of the rotation point (i.e., the element 2).
- `findRotationCount([7, 9, 11, 12, 5])` returns 4, which is the index of the rotation point (i.e., the element 5).
- `findRotationCount([7, 9, 11, 12, 15])` returns 0 because there is no rotation in the array.
*/

// recursive
function findRotationCount(arr, low = 0, high = arr.length - 1) {
  if (high < low) return 0;
  if (high === low) return low;
  let mid = Math.floor((low + high) / 2);

  if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;

  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid;
  }

  if (arr[high] > arr[mid]) {
    return findRotationCount(arr, low, mid - 1);
  }

  return findRotationCount(arr, mid + 1, high);
}

// while loop
function findRotationCount(arr, low = 0, high = arr.length - 1) {
  let low = 0;
  let high = arr.length - 1;

  if (high < low) return 0;
  if (high === low) return low;

  let mid = Math.floor((low + high) / 2);

  if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;

  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid;
  }

  if (arr[high] > arr[mid]) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

findRotationCount([15, 18, 2, 3, 6, 12]);

module.exports = findRotationCount;
