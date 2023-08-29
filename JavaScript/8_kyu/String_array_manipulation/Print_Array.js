/* ----------------------------------------------------------------------------------------

    Input: Array of elements

    ["h","o","l","a"]

    Output: String with comma delimited elements of the array in th same order.

    "h,o,l,a"

---------------------------------------------------------------------------------------- */

/* 
    Array.prototype.toString(): returns a string representing the specified array
                                and its elements.
*/

function printArray(array) {
  return array.toString();
}

/*
    Alternative solution
*/

function printArray(array) {
  return "" + [...array];
}
