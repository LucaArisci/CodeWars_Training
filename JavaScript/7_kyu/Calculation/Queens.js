/* ----------------------------------------------------------------------------------------------

    Write a function that takes an integer as input, and returns the number of bits that are
    equal to one in the binary representation of that number. You can guarantee that input
    is non-negative.

    Example:  The binary representation of 1234 is 10011010010, so the function should 
              return 5 in this case

---------------------------------------------------------------------------------------------- */

function queens(n) {
  return n > 0n ? n * n - (1n + 3n * (n - 1n)) : 0n;
}

/*
    Alternative solution
*/

function queens(n) {
  return n >= 3n ? (n - 2n) * (n - 1n) : 0n;
}

/*
    Alternative solution
*/

function queens(n) {
  return n > 2 ? queens(n - 1n) + (n - 2n) * 2n : 0n;
}

/*
    Alternative solution:
*/

function queens(n) {
  let queens = 0n;

  if (n > 1) {
    for (let i = 0n; i < n - 2n; i++) {
      queens += (n - 2n - i) * 2n;
    }
    return queens;
  }

  return 0n;
}
