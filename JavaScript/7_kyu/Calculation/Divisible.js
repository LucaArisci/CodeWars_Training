/* ----------------------------------------------------------------------------------------

    In this kata, your task is to write a function to_bytes(n) (or toBytes(n) depending
    on language) that produces a list of bytes that represent a given non-negative
    integer n. Each byte in the list is represented by a string of '0' and '1' of length
    8. The most significant byte is first in the list. The example test cases should
    provide you with all the details. You may assume that the argument n is valid.

---------------------------------------------------------------------------------------- */

/*
    arguments:  is an array-like object accessible inside functions that contains the
                values of the arguments passed to that function.
*/

function isDivisible() {
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[0] % arguments[i] !== 0) return false;
  }

  return true;
}

/*
    Alternative solution:

    Array.prototype.every():    tests whether all elements in the array pass the test implemented
                                by the provided function. It returns a Boolean value
*/

function isDivisible(firstN, ...otherN) {
  return otherN.every((n) => firstN % n === 0);
}
