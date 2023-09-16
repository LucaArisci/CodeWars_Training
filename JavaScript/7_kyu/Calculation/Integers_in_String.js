/* ------------------------------------------------------------------------------------------

    Your task in this kata is to implement a function that calculates the sum of the
    integers inside a string. For example, in the string
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers
    is 3635.

    Note: only positive integers will be tested.
    
------------------------------------------------------------------------------------------ */

/*
    String.prototype.match():   retrieves the result of matching this string against a
                                regular expression

    Array.prototype.map():  creates a new array populated with the results of calling a
                            provided function on every element in the calling array    

    Number.parseInt():  parses a string argument and returns an integer of the specified
                        radix or base

    Array.prototype.reduce():   executes a user-supplied "reducer" callback function on
                                each element of the array, in order, passing in the return
                                value from the calculation on the preceding element. The
                                final result of running the reducer across all elements of
                                the array is a single value
*/

function sumOfIntegersInString(s) {
  let arr = s.match(/\d+/g);

  return arr !== null
    ? arr.map((el) => parseInt(el)).reduce((acc, cur) => acc + cur)
    : 0;
}

/*
    Alternative solution:

    String.prototype.match():   retrieves the result of matching this string against a
                                regular expression

    Array.prototype.reduce():   executes a user-supplied "reducer" callback function on
                                each element of the array, in order, passing in the return
                                value from the calculation on the preceding element. The
                                final result of running the reducer across all elements of
                                the array is a single value
*/

function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
}
