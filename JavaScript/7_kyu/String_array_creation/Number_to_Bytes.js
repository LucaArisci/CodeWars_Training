/* ----------------------------------------------------------------------------------------

    In this kata, your task is to write a function to_bytes(n) (or toBytes(n) depending
    on language) that produces a list of bytes that represent a given non-negative
    integer n. Each byte in the list is represented by a string of '0' and '1' of length
    8. The most significant byte is first in the list. The example test cases should
    provide you with all the details. You may assume that the argument n is valid.

---------------------------------------------------------------------------------------- */

/* 
    Number.prototype.toString():  returns a string representing this number value in different
                                  radixes (parameter)

    String.prototype.repeat():  constructs and returns a new string which contains the specified
                                number of copies of this string, concatenated together

    Array.prototype.slice():    returns a shallow copy of a portion of an array into a new array
                                object selected from start to end (end not included) where start
                                and end represent the index of items in that array. The original
                                array will not be modified.
*/

function toBytes(n) {
  let bytes = [];
  let completeString = new Number(n).toString(2);

  if (completeString.length % 8 !== 0) {
    completeString =
      "0".repeat(8 - (completeString.length % 8)) + completeString;
  }

  for (let i = 0; i < completeString.length / 8; i++) {
    bytes.push(completeString.slice(8 * i, 8 * (i + 1)));
  }

  return bytes;
}

/*
    Alternative solution:

    Number.parseInt():  parses a string argument and returns an integer of the specified radix
                        or base.

    Number.prototype.toString():  returns a string representing this number value in different
                                  radixes (parameter)

    String.prototype.padStart():  pads this string with another string (multiple times, if needed)
                                  until the resulting string reaches the given length. The padding
                                  is applied from the start of this string

    String.prototype.match(): retrieves the result of matching this string against a regular
                              expression
*/

function toBytes(n) {
  const result = Number.parseInt(n, 10).toString(2);
  return (
    result.padStart(8 * Math.ceil(result.length / 8), "0").match(/.{1,8}/g) ||
    []
  );
}
