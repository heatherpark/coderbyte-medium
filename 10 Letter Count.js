/* Have the function LetterCount(str) take the str parameter being passed and return the
first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!"
should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
If there are no words with repeating letters return -1. Words will be separated by spaces. */

function LetterCount(str) {

  str = str.split(" ");
  var letterCounts = {};

  for (var i = 0; i < str.length; i++) {
    var word = str[i];
    letterCounts[word] = {};

    for (var j = 0; j < word.length; j++) {
      var letter = word[j];

      if (!letterCounts[word][letter]) {
        letterCounts[word][letter] = 1;
      } else {
        letterCounts[word][letter]++;
      }
    }
  }

  var maxCounts = {};

  for (var w in letterCounts) {
    maxCounts[w] = 0;

    for (var l in letterCounts[w]) {
      if (letterCounts[w][l] > maxCounts[w]) {
        maxCounts[w] = letterCounts[w][l];
      }
    }
  }

  var output = {
    word: "",
    count: 1
  };

  for (var word in maxCounts) {
    if (maxCounts[word] > output.count) {
      output.word = word;
      output.count = maxCounts[word];
    }
  }

  return output.word || -1;

}

// convert "str" into an array of words
// create empty object to hold words, letters, and letter counts

// loop through all words in "str"
  // add word to object
  // loop through all letters in word
    // add letters and their counts to object

// create object for words and their highest letter counts
// loop through first object to add word and highest letter count

// create other empty object to hold output