/* Have the function SimpleMode(arr) take the array of numbers stored in arr and return
the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4]
the output should be 4. If there is more than one mode return the one that appeared in the array first
(ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1.
The array will not be empty. */

/* SOLUTION
Instead of using an object to hold the numbers and their counts like I've done before, I'll be using
nested arrays this time.  I'm doing this because order matters (if there are two modes, the one that
first occurs is returned) and using objects can interfere with the order in which we insert items into
them.
*/

function SimpleMode(arr) {

  // make a copy of "arr".
  // this array, "counts", will later hold each
  // number/count pair.
  var counts = arr.slice(0);

  // remove any duplicates from "counts".
  for (var i = 0; i < arr.length; i++) {
    if (counts.indexOf(arr[i]) !== i) {
      counts.splice(i, 1);
    }
  }

  // loop through "counts" again and make a
  // nested array for each number, along with
  // its count, starting at 0.
  for (var i = 0; i < counts.length; i++) {
    counts[i] = [counts[i], 0];
  }

  // loop through "arr", which has remained unchanged.
  for (var i = 0; i < arr.length; i++) {
    // every time you encounter a number, increment
    // its value in "counts".
    for (var j = 0; j < counts.length; j++) {
      if (arr[i] === counts[j][0]) {
        counts[j][1]++;
      }
    }
  }

  // this object will hold the final result to be returned.
  var result = {
    number: -1,
    count: 1
  };

  // looping through "counts", assign the appropriate
  // number and its count to the "results" object.
  for (var i = 0; i < counts.length; i++) {
    if (counts[i][1] > result.count) {
      result.number = counts[i][0];
      result.count = counts[i][1];
    }
  }

  return result.number;

}