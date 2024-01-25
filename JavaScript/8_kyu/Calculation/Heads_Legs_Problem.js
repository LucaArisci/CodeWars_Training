/* ------------------------------------------------------------------------------------------

    Everybody has probably heard of the animal heads and legs problem from the earlier
    years at school. It goes:

    “A farm contains chickens and cows. There are x heads and y legs. How many chickens
    and cows are there?” 

    Where x <= 1000 and y <=1000

    Assuming there are no other types of animals, work out how many of each animal are
    there.

    Return an array list - [chickens, cows]

    If either the heads & legs is negative, the result of your calculation is negative or
    the calculation is a float return "No solutions" (no valid cases).

    However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must
    give zero animals.
    
------------------------------------------------------------------------------------------ */

/*
   Number.isInteger():   determines whether the passed value is an integer
*/

function animals(heads, legs) {
  let pair = [2 * heads - legs / 2, legs / 2 - heads];

  return heads < 0 ||
    legs < 0 ||
    pair[0] < 0 ||
    pair[1] < 0 ||
    !Number.isInteger(pair[0]) ||
    !Number.isInteger(pair[1])
    ? "No solutions"
    : pair;
}

/*
   Alternative Solution
*/

function animals(heads, legs) {
  const cows = legs / 2 - heads;
  const chickens = heads - cows;

  if (legs & 1 || chickens > heads || cows > heads) return "No solutions";
  else return [chickens, cows];
}
