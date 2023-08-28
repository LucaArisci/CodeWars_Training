/* ----------------------------------------------------------------------------------------------

    You can print your name on a billboard ad. Find out how much it will cost you. Each
    character has a default price of £30, but that can be different if you are given 2 
    parameters instead of 1.

    You CAN'T use multiplier "*" operator.

    If your name would be Jeong-Ho Aristotelis, ad would cost £600. 
    20 leters * 30 = 600 (Space counts as a character).

---------------------------------------------------------------------------------------------- */

function billboard(name, price = 30) {
  let finalPrice = 0;

  for (let i = 0; i < name.length; i++) finalPrice += price;

  return finalPrice;
}

/*
    Alternative solution:

    .split(""):  creates an array of substrings of name (one element for every character in this case)

    .reduce((sum, letter) => sum + price, 0)    executes a user-supplied "reducer" callback function on
                                                each element of the array, in order, passing in the return
                                                value from the calculation on the preceding element
*/

function billboard(name, price = 30) {
  return name.split("").reduce((sum, letter) => sum + price, 0);
}
