// Length of the longest substring without repeating characters
// Given a string str, find the length of the longest substring without repeating characters.

// Example:
// For “ABDEFGABEF”, the longest substring are “BDEFGA” and “DEFGAB”, with length 6.

// For “BBBB” the longest substring is “B”, with length 1.

// For “GEEKSFORGEEKS”, there are two longest substrings shown in the below diagrams, with length 7

const assert = require("assert");

function getSubstringMaxLengthWithoutRepeating(value) {
  const stringLength = String(value).length;
  let uniqueChars = [];
  let maxLengthWithoutRepeating = 0;

  // loop the role string
  for (let index = 0; index < stringLength; index++) {
    const char = value[index];
    // Has repeated chars

    if (uniqueChars.includes(char)) {
      if (uniqueChars.length > maxLengthWithoutRepeating) {
        maxLengthWithoutRepeating = uniqueChars.length;
      }
      uniqueChars = [char];
    } else {
      uniqueChars.push(char);
    }
  }

  return maxLengthWithoutRepeating === 0
    ? uniqueChars.length
    : maxLengthWithoutRepeating;
}

assert.equal(getSubstringMaxLengthWithoutRepeating("ABDEFGABEF"), 6);
assert.equal(getSubstringMaxLengthWithoutRepeating("BBBB"), 1);
assert.equal(getSubstringMaxLengthWithoutRepeating("GEEKSFORGEEKS"), 7);
assert.equal(getSubstringMaxLengthWithoutRepeating("ABC"), 3);
