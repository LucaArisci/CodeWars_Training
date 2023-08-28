/* ----------------------------------------------------------------------------------------------------

    Write a function stringy that takes a size and returns a string of alternating 1s and 0s. The 
    string should start with a 1. A string with size 6 should return '101010', with size 12 should
    return '101010101010'. The size will always be positive and will only use whole numbers.

---------------------------------------------------------------------------------------------------- */

function stringy(size) {
  var res = "";

  for (var i = 0; i < size; i++) {
    res += i % 2;
  }

  return res;
}
