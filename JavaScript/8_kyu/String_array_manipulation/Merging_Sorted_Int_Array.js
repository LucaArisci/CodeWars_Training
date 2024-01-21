/* ----------------------------------------------------------------------------------------

    Write a function that merges two sorted arrays into a single one. The arrays only
    contain integers. Also, the final outcome must be sorted and not have any duplicate.

---------------------------------------------------------------------------------------- */

/* 
    new Set():  use the Set class constructor passing the array as an iterable parameter
                in order to create a set of unique elements
    
    Array.prototype.concat():   used to merge two or more arrays. This method does not
                                change the existing arrays, but instead returns a new
                                array

    Array.prototype.sort(): sorts the elements of an array in place and returns the
                            reference to the same array, now sorted. The default sort
                            order is ascending
*/

function mergeArrays(a, b) {
  return [...new Set(a.concat(b).sort((el1, el2) => el1 - el2))];
}
