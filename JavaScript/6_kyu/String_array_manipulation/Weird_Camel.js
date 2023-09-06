/* ----------------------------------------------------------------------------------------

    Write a function that accepts a string, and returns the same string with all even
    indexed characters in each word upper cased, and all odd indexed characters in each
    word lower cased. The indexing just explained is zero based, so the zero-ith index
    is even, therefore that character should be upper cased and you need to start over
    for each word.

    The passed in string will only consist of alphabetical characters and spaces(' ').
    Spaces will only be present if there are multiple words. Words will be separated by
    a single space(' ').

---------------------------------------------------------------------------------------- */

/* 
   String.prototype.split():  creates an array of substrings of the given string (one element for every
                              character in this case)

   Array.prototype.map():     creates a new array populated with the results of calling the provided 
                              function on every element in the calling array

   Array.prototype.join():    creates and returns a new string by concatenating all of the elements in
                              this array, (whit a specified separator in this case)
*/

function toWeirdCase(string) {
  return string
    .split(" ")
    .map((element) =>
      element
        .split("")
        .map((char, index) =>
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
