/* ----------------------------------------------------------------------------------------------

    Your task is to find the maximum number of queens that can be put on the board so that
    there would be one single unbeaten square (ie. threatened by no queen on the board).
    
    The Queen can move any distance vertically, horizontally and diagonally.

    The queens(n) function takes the size of the chessboard. n is a BigInt and it can be 
    negative.
    
    Output: The maximum number of queens to leave one single unbeaten square. Return 0
    if n is negative.

    Examples:

    n = 4 -> quens = 6
    n = 5 -> quens = 12

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
