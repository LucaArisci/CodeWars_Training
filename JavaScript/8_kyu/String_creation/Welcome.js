/* ----------------------------------------------------------------------------------------

    Create a method that takes as input a name, city, and state to welcome a person.
    Note that name will be an array consisting of one or more values that should be
    joined together with one space between each, and the length of the name array
    in test cases will vary.

    Example:

    ['John', 'Smith'], 'Phoenix', 'Arizona'
    
    This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

---------------------------------------------------------------------------------------- */

/* 
    Array.prototype.toString(): returns a string representing the specified array and its
                                elements

    String.prototype.replaceAll():  returns a new string with all matches of a pattern 
                                    replaced by a replacement                      
*/

function sayHello(name, city, state) {
  return (
    "Hello, " +
    name.toString().replaceAll(",", " ") +
    "! Welcome to " +
    city +
    ", " +
    state +
    "!"
  );
}

/*
    Alternative solution:

    Array.prototype.join(): creates and returns a new string by concatenating all of the elements
                            in this array, (whit a specified separator in this case)
*/

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}
