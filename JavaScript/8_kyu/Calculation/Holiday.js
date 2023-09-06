/* ----------------------------------------------------------------------------------------

    The purpose of this kata is to work out just how many bottles of duty free whiskey
    you would have to buy such that the savings over the normal high street price would
    effectively cover the cost of your holiday.

    You will be given the high street price (normPrice, in £ (Pounds)), the duty free
    discount (discount, in percent) and the cost of the holiday (in £).

    For example, if a bottle costs £10 normally and the duty free discount is 10%,
    you would save £1 per bottle. If your holiday will cost £500, you would have to
    purchase 500 bottles to save £500, so the answer you return should be 500.

    All inputs will be integers. Please return an integer. Round down.

---------------------------------------------------------------------------------------- */

/*
    Math.floor():   always rounds down and returns the largest integer less than or
                    equal to a given number
*/

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}
