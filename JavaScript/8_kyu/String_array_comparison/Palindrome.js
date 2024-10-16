/* ----------------------------------------------------------------------------------------

    Write a function that checks if a given string (case insensitive) is a palindrome.

    A palindrome is a word, number, phrase, or other sequence of symbols that reads the
    same backwards as forwards, such as madam or racecar.
    
---------------------------------------------------------------------------------------- */

/*
    Array.prototype.reverse():  returns the reference to the same array, the first
                                array element now becoming the last, and the last
                                array element becoming the first

    String.prototype.replace(): returns a new string with one, some, or all matches
                                of a pattern replaced by a replacement. The pattern
                                can be a string or a RegExp, and the replacement can
                                be a string or a function called for each match

    String.prototype.toLowerCase():  returns this string converted to lower case
*/

function isPalindrome(x) {
  return x.toLowerCase() === [...x].reverse().toString().replace(/,/g, "").toLowerCase();
}
