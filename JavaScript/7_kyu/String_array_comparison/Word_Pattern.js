/* ------------------------------------------------------------------------------------------

    In cryptanalysis, words patterns can be a useful tool in cracking simple ciphers.

    A word pattern is a description of the patterns of letters occurring in a word, where
    each letter is given an integer code in order of appearance. So the first letter is
    given the code 0, and second is then assigned 1 if it is different to the first letter
    or 0 otherwise, and so on.

    As an example, the word "hello" would become "0.1.2.2.3". For this task
    case-sensitivity is ignored, so "hello", "helLo" and "heLlo" will all return the same
    word pattern.

    Your task is to return the word pattern for a given word. All words provided will be
    non-empty strings of alphabetic characters only, i.e. matching the regex "[a-zA-Z]+".

------------------------------------------------------------------------------------------ */

/*
    String.prototype.toLowerCase():  returns this string converted to lower case

    String.prototype.slice():   extracts a section of this string and returns it as a
                                new string, without modifying the original string
    
    String.prototype.includes():    performs a case-sensitive search to determine whether
                                    a given string may be found within this string, returning
                                    true or false as appropriate
    
    String.prototype.indexOf():     searches this string and returns the index of the first
                                    occurrence of the specified substring

    Array.prototype.push():     adds the specified elements to the end of an array and
                                returns the new length of the array
    
    Array.prototype.join():     creates and returns a new string by concatenating all of
                                the elements in this array, separated by commas or a
                                specified separator string
*/

function wordPattern(word) {
  let pattern = [0];

  word = word.toLowerCase();

  for (let i = 1; i < word.length; i++) {
    word.slice(0, i).includes(word[i])
      ? pattern.push(pattern[word.indexOf(word[i])])
      : pattern.push(Math.max(...pattern) + 1);
  }

  return pattern.join(".");
}

/*
    Alternative solution:
    
    String.prototype.toLowerCase():  returns this string converted to lower case

    String.prototype.split():   takes a pattern and divides this string into an ordered
                                list of substrings by searching for the pattern, puts
                                these substrings into an array, and returns the array

    Array.prototype.map():  creates a new array populated with the results of calling the
                            provided function on every element in the calling array
    
    String.prototype.indexOf():     searches this string and returns the index of the first
                                    occurrence of the specified substring
                                        
    Array.prototype.join():     creates and returns a new string by concatenating all of
                                the elements in this array, separated by commas or a
                                specified separator string
*/

const wordPattern = (word) => {
  word = word.toLowerCase();
  const set = [...new Set(word)];
  return word
    .split("")
    .map((e) => set.indexOf(e))
    .join(".");
};
