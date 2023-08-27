/* ----------------------------------------------------------------------------------------

    Given a string, you have to return a string in which each character (case-sensitive)
    is repeated once.

    Ex:     "String" -> "SSttrriinngg"

---------------------------------------------------------------------------------------- */

function doubleChar(str) {
  let str2 = "";

  for (let i = 0; i < str.length; i++) {
    str2 += str[i] + str[i];
  }

  return str2;
}

/* 
   Alternative solution:

   .split(""):  creates an array of substrings of str (one element for every character in this case)

   .map((c) => c + c):  creates a new array populated with the results of calling the provided 
                        function on every element in the calling array

   .join(""):   creates and returns a new string by concatenating all of the elements in this array,
                (whit a specified separator in this case)
*/

const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
