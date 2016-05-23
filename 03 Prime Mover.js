/* Have the function PrimeMover(num) return the numth prime number.
The range will be from 1 to 10^4. For example: if num is 16 the output
should be 53 as 53 is the 16th prime number. */

function PrimeMover(num) {

  // "n" is the nubmer that we're checking for primeness.
  var n = 2;
  // all prime numbers we encounter will be pushed to "primes".
  var primes = [];

  // once the length of "primes" hits the value of "num", the loop will stop.
  while (primes.length < num) {
    // check if "n" is prime
    if (isPrime(n)) {
      // if so, push to "primes".
      primes.push(n);
    }
    // after "n" is checked, increment "n" to check the subsequent number.
    n++;
  }

  // function used to check if number is prime.
  function isPrime(number) {
    for (var i = 2; i < number; i++) {
      var quotient = number / i;

      if (quotient === Math.round(quotient)) {
        return false;
      }
    }

    return true;
  }

  // return the last item in "primes".
  return primes.pop();

}
