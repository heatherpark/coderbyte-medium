/* Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor.
That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16
both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. */

function Division(num1,num2) {

  // regardless of the number we choose to start the loop from (num1 or num2),
  // whichever is the first number that we encounter that is a factor for both
  // num1 and num2 will be returned, as that one is the greatest.
  for (var i = num1; i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }

}