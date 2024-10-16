/* ----------------------------------------------------------------------------------------

    Complete the function that calculates the area of the red square, when the length of
    the circular arc A is given as the input. Return the result rounded to two decimals.
    
---------------------------------------------------------------------------------------- */

/*
    Number.prototype.toFixed(): formats this number using fixed-point notation
*/

function squareArea(A){
  return Number((((2 * A) / Math.PI) ** 2).toFixed(2));
}
