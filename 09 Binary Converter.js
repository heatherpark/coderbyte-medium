/* Have the function BinaryConverter(str) return the decimal form of the binary value.
For example: if 101 is passed return 5, or if 1000 is passed return 8. */

/* SOLUTION
example: 111001 = 1·2^5 + 1·2^4 + 1·2^3 + 0·2^2 + 0·2^1 + 1·2^0 = 57
Following the pattern above, loop through "str" from end to beginning.
If digit is zero, there's no need to add anything to the sum, but the exponent
will still need to be incremented by 1.  If digit is 1, add the appropriate
number to the sum and increment exponent.
*/

function BinaryConverter(str) {

  var exponent = 0;
  var sum = 0;

  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] == 0) {
      exponent++;
    } else {
      sum += Math.pow(2, exponent);
      exponent++;
    }
  }

  return sum;

}