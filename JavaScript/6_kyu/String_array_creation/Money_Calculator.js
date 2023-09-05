/* ------------------------------------------------------------------------------------------------------------------

    I always thought that my old friend John was rather richer than he looked, but I never knew
    exactly how much money he actually had. One day (as I was plying him with questions) he said:

    "Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
    "If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
    "And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."
    
    Could you tell me in each possible case:

    how much money f he could possibly have?
    the cost c of a car?
    the cost b of a boat?
    
    So, I will have a better idea about his fortune. Note that if m-n is big enough, you might
    have a lot of possible answers.

    Each answer should be given as ["M: f", "B: b", "C: c"] and all the answers as
    [ ["M: f", "B: b", "C: c"], ... ]. "M" stands for money, "B" for boats, "C" for cars.

    Note: m, n, f, b, c are positive integers, where 0 <= m <= n or m >= n >= 0. m and n are inclusive.

    Examples:

    howmuch(1, 100)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
    howmuch(1000, 1100)  => [["M: 1045", "B: 149", "C: 116"]]
    howmuch(10000, 9950) => [["M: 9991", "B: 1427", "C: 1110"]]
    howmuch(0, 200)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]

    See "Sample Tests" to know the format of the return.

------------------------------------------------------------------------------------------------------------------ */

/*
    Math.min():   returns the smallest element given as input parameter

    Math.max():   returns the biggest element given as input parameter

    Array.prototype.push(): adds the specified elements to the end of an array and returns
                            the new length of the array
*/

function howMuch(m, n) {
  let money;
  let boats;
  let cars;

  let combinations = [];

  for (money = Math.min(m, n); money <= Math.max(m, n); money++) {
    if ((money - 1) % 9 === 0 && (money - 2) % 7 === 0) {
      cars = (money - 1) / 9;
      boats = (money - 2) / 7;
      combinations.push([`M: ${money}`, `B: ${boats}`, `C: ${cars}`]);
    }
  }

  return combinations;
}

/*
    Alternative solution:

    Math.min():   returns the smallest element given as input parameter

    Math.max():   returns the biggest element given as input parameter

    Number.isSafeInteger():   determines whether the provided value is a number
                              that is a safe integer
*/

function howMuch(m, n) {
  const moneyMin = Math.min(m, n);
  const moneyMax = Math.max(m, n);
  const carAmnt = 9;
  const boatAmnt = 7;
  const results = [];

  for (let money = moneyMin; money <= moneyMax; money++) {
    const carCost = (money - 1) / carAmnt;
    const boatCost = (money - 2) / boatAmnt;

    if (Number.isSafeInteger(carCost) && Number.isSafeInteger(boatCost)) {
      results.push([`M: ${money}`, `B: ${boatCost}`, `C: ${carCost}`]);
    }
  }

  return results;
}
