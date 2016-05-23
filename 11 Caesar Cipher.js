/* Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher
shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting
each letter in the string N places down in the alphabet (in this case N will be num). Punctuation,
spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and
num is 2 the output should be "Ecguct Ekrjgt". */

/* STRATEGY
This is similar to the Letter Change challenge from the easy questions.  However, we need to account for
the boundaries of the Unicode (like how we had to account for "z" changing to "z").  If a target Unicode
goes beyond the letter "Z", we need to find the difference between that target Unicode number and the Unicode
of Z and add that difference to the beginning of the alphabet, the Unicode number for which differs depending
on the case of the letter.
*/

function CaesarCipher(str,num) {

  var output = [];

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var targetCode = str.charCodeAt(i) + num;

    if (char.match(/[A-Z]/)) {
      if (targetCode > 90) {
        var diff = targetCode - 90;
        targetCode = 64 + diff;
      }
      output.push(String.fromCharCode(targetCode));
    } else if (char.match(/[a-z]/)) {
      if (targetCode > 122) {
        var diff = targetCode - 122;
        targetCode = 96 + diff;
      }
      output.push(String.fromCharCode(targetCode));
    } else {
      output.push(char);
    }
  }

  return output.join("");

}

// Y is 89 and num is 2
// code is 91
// if code > boundary
  // code - boundary
  // 64 + difference