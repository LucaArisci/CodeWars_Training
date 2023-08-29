/* ----------------------------------------------------------------------------------------------

    Given a list of unique numbers sorted in ascending order, return a new list so that the
    values increment by 1 for each index from the minimum value up to the maximum value
    (both included).

    Example

    Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

---------------------------------------------------------------------------------------------- */

/*
    This solution works even whit unordered arrays

    Math.min():   returns the smallest element given as input parameter

    Math.max():   returns the biggest element given as input parameter

    Array.prototype.push(): adds the specified elements to the end of an array and returns
                            the new length of the array
*/

function pipeFix(numbers) {
  let min = Math.min(...numbers);
  let arr = [];
  let acc = 0;

  for (let i = min; i <= Math.max(...numbers); i++) {
    arr.push(min + acc);
    acc++;
  }

  return arr;
}

/*
    Alternative solution
*/

function pipeFix(numbers) {
  var first = numbers[0];
  var last = numbers[numbers.length - 1];

  var arr = [];
  for (var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}
