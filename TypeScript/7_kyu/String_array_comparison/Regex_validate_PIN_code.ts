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
    RegExp.prototype.test():  executes a search with this regular expression for a match
                              between a regular expression and a specified string. Returns
                              true if there is a match; false otherwise.
*/

export class Kata {
  static pinFormat: RegExp = new RegExp(/^\d{4}(\d{2})?$/);

  static validatePin(pin: string): boolean {
    return Kata.pinFormat.test(pin);
  }
}
