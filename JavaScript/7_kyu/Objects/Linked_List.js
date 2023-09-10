/* ------------------------------------------------------------------------------------------

    Write push() and buildOneTwoThree() functions to easily update and initialize linked
    lists. Try to use the push() function within your buildOneTwoThree() function.

    Here's an example of push() usage:

    var chained = null
    chained = push(chained, 3)
    chained = push(chained, 2)
    chained = push(chained, 1)
    push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null

    The push function accepts head and data parameters, where head is either a node object
    or null/None/nil. Your push implementation should be able to create a new linked list/node
    when head is null/None/nil.

    The buildOneTwoThree function should create and return a linked list with three nodes:
    1 -> 2 -> 3 -> null
    
------------------------------------------------------------------------------------------ */

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let chained = new Node(data);

  chained.next = head;

  return chained;
}

function buildOneTwoThree() {
  return push(push(push(null, 3), 2), 1);
}

/*
    Alternative solution:
    
    Array.prototype.reduce(): executes a user-supplied "reducer" callback function on each
                              element of the array, in order, passing in the return value
                              from the calculation on the preceding element. The final result
                              of running the reducer across all elements of the array is a single
                              value. The first time that the callback is run there is no "return
                              value of the previous calculation". If supplied, an initial value
                              may be used in its place. Otherwise the array element at index 0
                              is used as the initial value and iteration starts from the next
                              element (index 1 instead of index 0). Perhaps the easiest-to-understand
                              case for reduce() is to return the sum of all the elements in an array

    Function.prototype.bind():  creates a new function that, when called, calls this function
                                with its this keyword set to the provided value, and a given
                                sequence of arguments preceding any provided when the new
                                function is called
*/

var push = (head, data) => new Node(data, head);

var build = (...args) => args.reduce(push, null);

var buildOneTwoThree = build.bind(null, 3, 2, 1);

var Node = (data, next = null) => ({ data, next });
