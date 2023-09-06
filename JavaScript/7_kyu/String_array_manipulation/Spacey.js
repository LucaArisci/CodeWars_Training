/* ----------------------------------------------------------------------------------------

    Kevin is noticing his space run out! Write a function that removes the spaces from
    the values and returns an array showing the space decreasing. 

    For example, running this function on the array ['i', 'have','no','space'] would
    produce ['i','ihave','ihaveno','ihavenospace']

---------------------------------------------------------------------------------------- */

function spacey(array) {
  let res = [array[0]];

  for (let i = 1; i < array.length; i++) {
    res.push(res[i - 1].concat(array[i]));
  }

  return res;
}

/* 
   Alternative solution:

   Array.prototype.map():   creates a new array populated with the results of calling a
                            provided function on every element in the calling array
*/

function spacey(array) {
  let string = "";
  return array.map((e) => (string += e));
}
