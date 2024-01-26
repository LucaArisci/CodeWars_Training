/* ----------------------------------------------------------------------------------------

    Your goal is to return multiplication table for number that is always an integer
    from 1 to 10.

    For example, a multiplication table (string) for number == 5 looks like below:

    1 * 5 = 5
    2 * 5 = 10
    3 * 5 = 15
    4 * 5 = 20
    5 * 5 = 25
    6 * 5 = 30
    7 * 5 = 35
    8 * 5 = 40
    9 * 5 = 45
    10 * 5 = 50

    P. S. You can use \n in string to jump to the next line.

    Note: newlines should be added between rows, but there should be no trailing
    newline at the end. If you're unsure about the format, look at the sample tests.

---------------------------------------------------------------------------------------- */

/*
    Array.prototype.keys():     returns a new array iterator object that contains the
                                keys for each index in the array
    
    Array.prototype.map():  creates a new array populated with the results of calling a
                            provided function on every element in the calling array

    Array.prototype.join(): creates and returns a new string by concatenating all of
                            the elements in this array, separated by commas or a specified
                            separator string. If the array has only one item, then that
                            item will be returned without using the separator.
*/

function multiTable(n) {
  return [...Array(10).keys()]
    .map((x) => `${x + 1} * ${n} = ${(x + 1) * n}`)
    .join("\n");
}

/*
    Alternative solution:

    Array.prototype.map():  creates a new array populated with the results of calling a
                            provided function on every element in the calling array

    Array.prototype.join(): creates and returns a new string by concatenating all of
                            the elements in this array, separated by commas or a specified
                            separator string. If the array has only one item, then that
                            item will be returned without using the separator.
*/

function multiTable(n) {
  return [...Array(10)]
    .map((_, x) => `${x + 1} * ${n} = ${(x + 1) * n}`)
    .join("\n");
}
