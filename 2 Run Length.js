/* Have the function RunLength(str) take the str parameter being passed and return a compressed
version of the string using the Run-length encoding algorithm. This algorithm works by taking the
occurrence of each repeating character and outputting that number along with a single character of
the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any
numbers, punctuation, or symbols. */

function RunLength(str) {

  // "tracker" keeps track of the occurrences of each letter.
  var tracker = [];
  // "output" will contain the final output that is returned.
  var output = [];

  // loop through all characters in "str".
  for (var i = 0; i < str.length; i++) {
    // push current item to "tracker" array.
    tracker.push(str[i]);

    // check to see if subsequent item is the same as current item.
    // if not, push the current length of "tracker" to "output".
    // then, push the first item of "tracker" (the letter) to "output".
    // reset "tracker" to an empty array to collect info for next letter group.
    if (str[i + 1] !== str[i]) {
      output.push(tracker.length);
      output.push(tracker[0]);
      tracker = [];
    }
  }

  // return "output" as a string.
  return output.join("");

}