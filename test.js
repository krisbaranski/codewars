'use strict';
//
//
//

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// 1. Combine strings s1 and s2.
// 2. Split the new string into an array of characters.
// 3. Filter for unique values into a new array.
// 4. Sort the new array from a to z and join it together, removing the commas.

// - new sorted longest string, only letters, not repearting:
// - return strings include only letters (a-z)
// - letters taken only once
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join('');
}
// function longest(s1, s2) {
//   // combining two strings without repeating same elements
//   const c = (s1 += s2);
//   // using "(...) -> spread", similar to .split('');
//   const d = [...c];
//   // using filter
//   let e = d.filter(
//     (v, i, self) =>
//       // console.log(self.indexOf(v));
//       self.indexOf(v) === i
//   );
//   return e.sort().join('');
// }

console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');

function longest(s1, s2) {
  let str = new Set([...s1, ...s2]);
  return [...str].sort().join('');
}

// function findOdd(A) {
//   let odd = 0;

//   for (let i = 0; i < A.length; i++)
//     if (A) return a.map(), match(/(.)\1+/g).length;
//   return odd;
// }

// function doTest(a, n) {
//   console.log('A = ', a);
//   console.log('n = ', n);
//   Test.assertEquals(findOdd(a), n);
// }
// Test.describe('Example tests', function () {
//   doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
//   doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
//   doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
//   doTest([10], 10);
//   doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
//   doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
// });

// function duplicateEncode(word) {}

// console.log(duplicateEncode('din'), '(((');
// console.log(duplicateEncode('recede'), '()()()');
// Test.assertEquals(duplicateEncode('Success'), ')())())', 'should ignore case');
// Test.assertEquals(duplicateEncode('(( @'), '))((');

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

// 
// 
// 
// 
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
