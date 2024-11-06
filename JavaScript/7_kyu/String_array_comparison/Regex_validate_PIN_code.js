/* ----------------------------------------------------------------------------------------

    ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but
    exactly 4 digits or exactly 6 digits.

    If the function is passed a valid PIN string, return true, else return false.

    Examples (Input --> Output)

    "1234"   -->  true
    "12345"  -->  false
    "a234"   -->  false

---------------------------------------------------------------------------------------- */

/*
    String.prototype.match(): retrieves the result of matching this string against a
                              regular expression
*/

function validatePIN(pin) {
  if (pin) {
    const res = pin.match(/\d/g).length;

    return (pin.length === 4 && res === 4) || (pin.length === 6 && res === 6)
      ? true
      : false;
  }

  return false;
}

/*
    Alternative solution:

    RegExp.prototype.test():  executes a search with this regular expression for a match
                              between a regular expression and a specified string. Returns
                              true if there is a match; false otherwise.
*/

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
