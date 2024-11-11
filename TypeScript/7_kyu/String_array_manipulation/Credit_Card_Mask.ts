/* ------------------------------------------------------------------------------------------

    Usually when you buy something, you're asked whether your credit card number, phone
    number or answer to your most secret question is still correct. However, since someone
    could look over your shoulder, you don't want that shown on your screen. Instead, we
    mask it.

    Your task is to write a function maskify, which changes all but the last four
    characters into '#'.

    Examples (input --> output):

    "4556364607935616"  --> "############5616"
    "64607935616"       --> "#######5616"
    "1"                 --> "1"
    ""                  --> ""

------------------------------------------------------------------------------------------ */

/*
    Array.prototype.slice():   extracts a section of this string and returns it as a new string

    String.prototype.padStart():  pads this string with another string (multiple times, if needed)
                                  until the resulting string reaches the given length. The padding
                                  is applied from the start of this string
*/

export function maskify1(cc: string): string {
  return cc.slice(-4).padStart(cc.length, "#");
}

/*
    String.prototype.replace(): returns a new string with one, some, or all matches
                                of a pattern replaced by a replacement. The pattern
                                can be a string or a RegExp, and the replacement can
                                be a string or a function called for each match
*/

export function maskify2(cc: string): string {
  return cc.replace(/.(?=.{4})/g, "#");
}
