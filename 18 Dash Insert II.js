/* Have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert
asterisks ('*') between each two even numbers in str. For example: if str is 4546793 the output
should be 454*67-9-3. Don't count zero as an odd or even number. */

function DashInsertII(num) {

  num = num.toString().split("");

  var output = [];

  // since we want to disregard 0 as being an even number,
  // we'll test each item using regexp to see if it's even or odd.
  for (var i = 0; i < num.length; i++) {
    if (/[13579]/.test(num[i]) && /[13579]/.test(num[i + 1])) {
      output.push(num[i] + "-");
    } else if (/[2468]/.test(num[i]) && /[2468]/.test(num[i + 1])) {
      output.push(num[i] + "*");
    } else {
      output.push(num[i]);
    }
  }

  return output.join("");

}