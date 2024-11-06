/* ----------------------------------------------------------------------------------------

    Complete the function which will return the area of a circle with the given radius.

    Round the returned number to two decimal places (except for Haskell). If the radius
    is not positive or not a number, return false.

    Example:

    circleArea(-1485.86);    //returns false
    circleArea(0);           //returns false
    circleArea(43.2673);     //returns 5881.25
    circleArea(68);          //returns 14526.72
    circleArea("number");    //returns false

---------------------------------------------------------------------------------------- */

/*
    parseFloat():  parses a string argument and returns a floating point number

    Number.prototype.toFixed(): formats this number using fixed-point notation
*/

var circleArea = function (radius) {
  return typeof radius === "number" && radius > 0
    ? parseFloat((radius ** 2 * Math.PI).toFixed(2))
    : false;
};
