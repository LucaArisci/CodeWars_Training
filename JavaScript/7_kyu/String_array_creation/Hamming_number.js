/* ----------------------------------------------------------------------------------------

    The Hamming weight of a string is the number of symbols that are different from the
    zero-symbol of the alphabet used. There are several algorithms for efficient
    computing of the Hamming weight for numbers. In this Kata, speaking technically,
    you have to find out the number of '1' bits in a binary representation of a number.

    hammingWeight(10) // 1010  => 2
    hammingWeight(21) // 10101 => 3

    The interesting part of this task is that you have to do it without string operation
    (hey, it's not really interesting otherwise)

---------------------------------------------------------------------------------------- */

/* 
    Math.floor():   rounds down and returns the largest integer less than or equal to
                    a given number
*/

function hammingWeight(x) {
  let hamming = 0;

  while (x > 0) {
    if (x % 2 !== 0) hamming++;

    x = Math.floor(x / 2);
  }

  return hamming;
}

/* 
    Alternative solution:
*/

function hammingWeight(x) {
  return x ? (x % 2) + hammingWeight(x >> 1) : x;
}

/* 
    Alternative solution:

    Number.prototype.toString():  returns a string representing this number value in different
                                  radixes (parameter)

    String.prototype.match():   retrieves the result of matching this string against a
                                regular expression
*/

function hammingWeight(x) {
  return new Number(x).toString(2).match(/[1]/g).length;
}
