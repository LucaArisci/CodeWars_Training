/* ----------------------------------------------------------------------------------------

    Define a function that removes duplicates from an array of non negative numbers and
    returns it as a result.

    The order of the sequence has to stay the same.

    Examples:

    Input -> Output
    [1, 1, 2] -> [1, 2]
    [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

---------------------------------------------------------------------------------------- */

/* 
    Array.prototype.filter():   creates a shallow copy of a portion of a given array
                                filtered down to just the elements from the given array
                                that pass the test implemented by the provided function
    
    Array.prototype.indexOf():  returns the first index at which a given element can be
                                found in the array, or -1 if it is not present.
*/

function distinct(a) {
  return a.filter((element, index) => {
    return a.indexOf(element) === index;
  });
}

/* 
    Alternative solution:

    new Set():  use the Set class constructor passing the array as an iterable parameter
                in order to create a set of unique elements
*/

function distinct(a) {
  return [...new Set(a)];
}

/* 
    Alternative solution:

    Array.prototype.includes():    check if the parameter element is included in the array

    Array.prototype.push():        pushes a new element in the array
*/

function distinct(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
