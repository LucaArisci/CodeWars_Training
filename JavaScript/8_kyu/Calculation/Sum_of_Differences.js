/* ----------------------------------------------------------------------------------------

    Your task is to sum the differences between consecutive pairs in the array in
    descending order.

    Example

    [2, 1, 10]  -->  9
    In descending order: [10, 2, 1]

    Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

    If the array is empty or the array has only one element the result should be 0.

---------------------------------------------------------------------------------------- */

/* 
    Array.prototype.sort(): sorts the elements of an array in place and returns the
                            reference to the same array, now sorted. The default sort
                            order is ascending
*/

function sumOfDifferences(arr) {
  if (arr.length > 0) {
    arr.sort((a, b) => b - a);
    acc = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      acc += arr[i] - arr[i + 1];
    }

    return acc;
  } else {
    return 0;
  }
}
