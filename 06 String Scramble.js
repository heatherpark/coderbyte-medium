/* Have the function StringScramble(str1,str2) take both parameters being passed and return the
string true if a portion of str1 characters can be rearranged to match str2, otherwise return the
string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true.
Punctuation and symbols will not be entered with the parameters. */

/* STRATEGY
Basically, if all of the characters in "str2" are found in "str1", the function should return true.
Thus, looping through all the characters in "str2" and finding a character that is not in "str1"
would automatically return false.
*/

function StringScramble(str1,str2) {

  for (var i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      return false;
    }
  }

  return true;

}