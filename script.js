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

//
// - function return count of distinct case-inses

// first try
// function duplicateCount(text) {
// return text.split('').reduce((prev, curr) => {
//   prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
//   return prev;
// }, {});

// second try
function duplicateCount(text) {
  try {
    return text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/()\1+/g)
      .length();
  } catch (e) {
    return 0;
  }
}

console.log(typeof duplicateCount('aaassd'), 2);
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

/*
// didnt have any idea for solution, will manage later
function friend(friends) {
  //Create new array called "myFriends" for add your friends

  var i,
    len = friends.length,
    myFriends = [];

  for (i = 0; i < len; i++) {
    //Check for names with length equal to four and it is not a number
    if (friends[i].length == 4 && isNaN(friends[i])) {
      myFriends.push(friends[i]);
    }
  }
  return myFriends;
}

console.log(myFriends[('Kris', 'Michael', 'Ollo', 'Petra')]);
// function friend(friends) {
//   let n = ('Kris', 'Michael', 'Ollo', 'Petra');
//   return friends.filter(n => n.length === 4);
// }

// console.log(friend);


// another task, !!!SOLVED!!!
// You can make an object that maps the values:
/
function letterValue(str) {
  const aNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  if (str.length === 1) return aNum[str];

  return str.toLowerCase().split('').map(letterValue).filter(Boolean);
}
letterValue('zoo'); //returns: (Array) [26,15,15]

letterValue('z'); //returns: (Number) 26
console.log(letterValue('Elisabeth Koch'));
//
 */
