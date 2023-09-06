/* ----------------------------------------------------------------------------------------------

    Get ASCII value of a character.

---------------------------------------------------------------------------------------------- */

/*
    String.prototype.charCodeAt():  returns an integer between 0 and 65535 representing the
                                    UTF-16 code unit at the given index
*/

function getASCII(c) {
  return c.charCodeAt();
}
