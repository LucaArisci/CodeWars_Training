/* ----------------------------------------------------------------------------------------------

    Write a function that takes an integer as input, and returns the number of bits that are
    equal to one in the binary representation of that number. You can guarantee that input
    is non-negative.

    Example:  The binary representation of 1234 is 10011010010, so the function should 
              return 5 in this case

---------------------------------------------------------------------------------------------- */

/*

    Math.floor(): rounds down and returns the largest integer less than or equal to a given number

*/

var countBits = function (number) {
  let one_counter = 0;

  while (number > 0) {
    if (number % 2 != 0) {
      one_counter++;
    }
    number = Math.floor(number / 2);
  }

  return one_counter;
};

/*
    Alternative solution:

    Number.prototype.toString(): returns a string representing this number value (base of the parameter)

    String.prototype.split(): takes a pattern and divides this string into an ordered list of substrings
                              by searching for the pattern, puts these substrings into an array, and 
                              returns the array

    Array.prototype.join():   creates and returns a new string by concatenating all of the elements in
                              this array, separated by commas or a specified separator string
*/

var countBits = (n) => n.toString(2).split("0").join("").length;
