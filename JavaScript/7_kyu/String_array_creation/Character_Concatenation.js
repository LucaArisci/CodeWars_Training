/* ------------------------------------------------------------------------------------------

    Given a string, you progressively need to concatenate the first letter from the left
    and the first letter to the right and "1", then the second letter from the left and
    the second letter to the right and "2", and so on.

    If the string's length is odd drop the central element.

    For example:

    charConcat("abcdef")    == 'af1be2cd3'
    charConcat("abc!def")   == 'af1be2cd3' // same result
    
------------------------------------------------------------------------------------------ */

/*
    Number.parseInt():  parses a string argument and returns an integer of the specified
                        radix or base
*/

function charConcat(string) {
  let finalString = "";

  for (let i = 0; i < Number.parseInt(string.length / 2); i++) {
    finalString += string[i] + string[string.length - i - 1] + (i + 1);
  }

  return finalString;
}

/*
    Alternative solution:

    String.prototype.slice():   extracts a section of this string and returns it as a new
                                string, without modifying the original string

    Math.floor():   rounds down and returns the largest integer less than or equal to a
                    given number
    
    Array.prototype.map():  creates a new array populated with the results of calling
                            a provided function on every element in the calling array
                            
    Array.prototype.join():     creates and returns a new string by concatenating all of
                                the elements in this array, separated by commas or a
                                specified separator string
*/

function charConcat(s) {
  return [...s]
    .slice(0, Math.floor(s.length / 2))
    .map((e, i) => e + s[s.length - 1 - i] + (i + 1))
    .join("");
}
