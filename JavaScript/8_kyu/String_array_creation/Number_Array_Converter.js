/* ---------------------------------------------------------------------------------------

    Given a random non-negative number, you have to return the digits of this number
    within an array in reverse order.

    Example(Input => Output):

    35231 => [1,3,2,5,3]
    0 => [0]
    
--------------------------------------------------------------------------------------- */

/* 
    Array.prototype.toString(): returns a string representing the specified array and its
                                elements

    String.prototype.split():   takes a pattern and divides this string into an ordered list
                                of substrings by searching for the pattern, puts these
                                substrings into an array, and returns the array

    Array.prototype.reverse():  reverses an array in place and returns the reference to the
                                same array

    Array.prototype.map():  creates a new array populated with the results of calling a
                            provided function on every element in the calling array
*/

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

/*
    Alternative solution:

    Array.prototype.from(): creates a new, shallow-copied Array instance from an iterable or
                            array-like object

    Array.prototype.reverse():  reverses an array in place and returns the reference to the
                                same array
*/

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
