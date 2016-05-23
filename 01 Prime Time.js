/* Have the function PrimeTime(num) take the num parameter being passed and return the string
true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16. */

function PrimeTime(num) {

  // divide "num" by every number between it and 1.
  for (var i = 2; i < num; i++) {
    var quotient = num / i;
    // if that quotient is a whole number, then "num" is not prime.
    if (Math.floor(quotient) === quotient) {
      return false;
    }
  }

  return true;
}