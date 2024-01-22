/* ----------------------------------------------------------------------------------------

    You'll be given a string, and have to return the sum of all characters as an int.
    The function should be able to handle all printable ASCII characters.

    Examples:

    uniTotal("a") == 97
    uniTotal("aaa") == 291

---------------------------------------------------------------------------------------- */

/*
    String.prototype.split():   takes a pattern and divides this string into an ordered
                                list of substrings by searching for the pattern, puts
                                these substrings into an array, and returns the array

    Array.prototype.reduce():   executes a user-supplied "reducer" callback function on
                                each element of the array, in order, passing in the return
                                value from the calculation on the preceding element. The
                                final result of running the reducer across all elements
                                of the array is a single value

    String.prototype.charCodeAt():  returns an integer between 0 and 65535 representing
                                    the UTF-16 code unit at the given index
*/

function uniTotal(string) {
  return string.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
}

/*
    Alternative solution

    Array.prototype.reduce():   executes a user-supplied "reducer" callback function on
                                each element of the array, in order, passing in the return
                                value from the calculation on the preceding element. The
                                final result of running the reducer across all elements
                                of the array is a single value

    String.prototype.charCodeAt():  returns an integer between 0 and 65535 representing
                                    the UTF-16 code unit at the given index
*/

const uniTotal = (str) =>
  [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
