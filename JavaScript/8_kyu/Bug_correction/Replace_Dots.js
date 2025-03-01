/* ----------------------------------------------------------------------------------------

    The code provided is supposed replace all the dots '.' in the specified String str
    with dashes '-' but it's not working properly.

    Task:   Fix the bug so we can all go home early.

    Notes:  String str will never be null.

---------------------------------------------------------------------------------------- */

/*
    Starter code:    

    var replaceDots = function (str) {
        return str.replace(/./, "-");
    };
*/

/*
    String.prototype.replaceAll():  returns a new string with all matches of a pattern
                                    replaced by a replacement
*/

var replaceDots = function (str) {
  return str.replaceAll(".", "-");
};

/*
    String.prototype.replace(): returns a new string with one, some, or all matches
                                of a pattern replaced by a replacement. The pattern
                                can be a string or a RegExp, and the replacement can
                                be a string or a function called for each match
*/

var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};
