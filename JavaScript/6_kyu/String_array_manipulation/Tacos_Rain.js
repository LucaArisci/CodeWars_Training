/* ------------------------------------------------------------------------------------------

    A line of tacos is falling out of the sky onto the landscape.

    Your task is to predict what the landscape will look like when the tacos fall on it.

                    
    INPUT:             
                *********
                    
    OUTPUT:     TACOTACOT
                *********

    The landscape is represented as any ASCII character, with the air being represented
    as whitespaces. The rows are separated by newline characters.

    Tacos fall from left to right, distributing the word TACO repeadetly over the
    landscape. Each letter falls on the topmost part of the landscape in that area.

    If there are no characters in that location, the taco falls all the way to the bottom.
            
    INPUT:
                 *  ** 
                *** **** 

    OUTPUT:       C  AC
                TA* T**O
                ***O****T

    If there is no space for tacos to fall, then that space is skipped. The next letter
    still continues forward in the TACO sequence.

    INPUT:      **      
                ****    
                ******

 
    OUTPUT:     **CO
                ****TA  
                ******COT

    Tacos cannot fall through solid material. If there is a floating island, TACO should
    be placed on the island, not below it.
  
    INPUT:      
                  *****

                        
    OUTPUT:       COTAC
                  ***** 
                TA     OT

    The width and height of the landscape can be anywhere from 1 to 100.

    In the case of an empty string, return an empty string.
    
------------------------------------------------------------------------------------------ */

/*
    String.prototype.split():   takes a pattern and divides this string into an ordered
                                list of substrings by searching for the pattern, puts these
                                substrings into an array, and returns the array

    Array.prototype.map():  creates a new array populated with the results of calling a
                            provided function on every element in the calling array    

    Array.prototype.join():     creates and returns a new string by concatenating all of
                                the elements in this array, separated by commas or a specified
                                separator string. If the array has only one item, then that
                                item will be returned without using the separator
*/

function rainTacos(landscape) {
  if (landscape) {
    landscape = landscape.split("\n").map((el) => el.split(""));

    for (let j = 0; j < landscape[0].length; j++) {
      for (let i = 0; i < landscape.length; i++) {
        if (landscape[i][j] !== " ") {
          if (i === 0) break;
          else {
            landscape[i - 1][j] = "TACO"[j % 4];
            break;
          }
        } else if (i === landscape.length - 1) {
          landscape[i][j] = "TACO"[j % 4];
        }
      }
    }

    return landscape.map((el) => el.join("")).join("\n");
  } else {
    return landscape;
  }
}
