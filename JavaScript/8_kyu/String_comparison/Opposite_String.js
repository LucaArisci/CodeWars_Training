/* ------------------------------------------------------------------------

    Give you two strings: s1 and s2. If they are opposite, return true;
    otherwise, return false. Note: The result should be a boolean value,
    instead of a string.

    The opposite means: All letters of the two strings are the same, but
    the case is opposite. you can assume that the string only contains
    letters or it's a empty string. Also take note of the edge case - 
    if both strings are empty then you should return false/False.

    Examples (input -> output)

    "ab","AB"     -> true
    "aB","Ab"     -> true
    "aBcd","AbCD" -> true
    "AB","Ab"     -> false
    "",""         -> false

------------------------------------------------------------------------ */

/*
    String.prototype.charAt():  returns a new string consisting of character
                                at the given index.

    String.prototype.toLowerCase(): returns the string converted to lower case

    String.prototype.toUpperCase(): returns the string converted to upper case
*/

function isOpposite(s1, s2) {
  if (s1.length === 0 && s2.length === 0) {
    return false;
  } else {
    for (let i = 0; i < s1.length; i++) {
      if (
        (s1.charAt(i) == s1.charAt(i).toUpperCase() &&
          s2.charAt(i) != s1.charAt(i).toLowerCase()) ||
        (s1.charAt(i) == s1.charAt(i).toLowerCase() &&
          s2.charAt(i) != s1.charAt(i).toUpperCase())
      ) {
        return false;
      }
    }

    return true;
  }
}

/*
    Alternative solution
*/

function isOpposite(s1, s2) {
  if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;

  for (var i = 0; i < s1.length; i++) {
    if (s1.charAt(i) === s2.charAt(i)) return false;
  }

  return true;
}
