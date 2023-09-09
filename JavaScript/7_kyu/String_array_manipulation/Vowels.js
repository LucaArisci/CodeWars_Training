/* ----------------------------------------------------------------------------------------

    This Kata is intended as a small challenge for my students

    Create a function that takes a string argument and returns that same string with all
    vowels removed (vowels are "a", "e", "i", "o", "u").

    Example (Input --> Output)

    "drake" --> "drk"
    "aeiou" --> ""

---------------------------------------------------------------------------------------- */

/* 
   String.prototype.replaceAll():   returns a new string with all matches of a pattern replaced
                                    by a replacement. The pattern can be a string or a RegExp,
                                    and the replacement can be a string or a function to be called
                                    for each match. The original string is left unchanged
*/

var removeVowels = function (str) {
  return str.replaceAll(/[aeiou]/gm, "");
};
