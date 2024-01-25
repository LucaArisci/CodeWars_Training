/* ------------------------------------------------------------------------------------------

    Imagine a circle. To encode the word codewars, we could split the circle into 8 parts
    (as codewars has 8 letters):

    Then add the letters in a clockwise direction: Then remove the circle: 
    If we read the result from left to right, we get csordaew.

    Decoding is the same process in reverse. If we decode csordaew, we get codewars.

    Examples:

    encode "codewars" -> "csordaew"
    decode "csordaew" -> "codewars"
    encode "white" -> "wehti"
    decode "wehti" -> "white"
    
------------------------------------------------------------------------------------------ */

/*
    Array.prototype.map():  creates a new array populated with the results of calling a
                            provided function on every element in the calling array

    Array.prototype.join(): creates and returns a new string by concatenating all of
                            the elements in this array, separated by commas or a specified
                            separator string. If the array has only one item, then that
                            item will be returned without using the separator.
*/

function encode(formula) {
  return [...formula]
    .map((x, i, arr) => (i & 1 ? arr[arr.length - (i + 1) / 2] : arr[i / 2]))
    .join("");
}

function decode(formula) {
  return [...formula]
    .map((x, i, arr) =>
      i < arr.length / 2 ? arr[i * 2] : arr[2 * (arr.length - i) - 1]
    )
    .join("");
}
