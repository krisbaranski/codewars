'use strict';

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  try {
    return text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/(.)\1+/g).length;
  } catch (e) {
    return 0;
  }
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(
  duplicateCount('Indivisibilities'),
  2,
  'characters may not be adjacent'
);

// This is an interesting problem. What we can do is turn the string to lower case using String.toLowerCase, and then split on "", so we get an array of characters.

// We will then sort it with Array.sort. After it has been sorted, we will join it using Array.join. We can then make use of the regex /(.)\1+/g which essentially means match a letter and subsequent letters if it's the same.

// When we use String.match with the stated regex, we will get an Array, whose length is the answer. Also used some try...catch to return 0 in case match returns null and results in TypeError.
