/* Have the function FormattedDivision(num1,num2) take both parameters being passed,
divide num1 by num2, and return the result as a string with properly formatted commas and
4 significant digits after the decimal place. For example: if num1 is 123456789 and num2
is 10000 the output should be "12,345.6789". The output must contain a number in the one's
place even if it is a zero. */

function FormattedDivision(num1,num2) {

  // find quotient of num1 when divided by num2
  // and fix the number of trailing decimals to 4.
  var quotient = num1 / num2;
  quotient = quotient.toFixed(4);

  // convert quotient to string to split into an array, using period as separator.
  quotient = quotient.toString().split(".");

  // split the first item of "quotient" (the portion where we'll be inserting commas)
  // into array of individual digits.
  quotient[0] = quotient[0].split("");

  var digitCounter = 0;

  // insert commas appropriately.
  for (var i = quotient[0].length - 1; i >= 0; i--) {
    digitCounter++;
    if (digitCounter === 3) {
      quotient[0][i] = "," + quotient[0][i];
    }
  }

  // join all items in "quotient" and return.
  quotient[0] = quotient[0].join("");
  return quotient.join(".");

}

