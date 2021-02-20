'use strict';

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
//

//
// first solution
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
// //

// // second solution
// function longest(s1, s2) {
//     return Array.from(new Set(s1 + s2))
//       .sort()
//       .join('');
//   }
//

// //   third solution
// function longest(s1, s2) {
//     let str = new Set([...s1, ...s2]);
//     return [...str].sort().join('');
//   }

// forth solution
// function longest(s1, s2) {
//   return (s1 + s2)
//     .split('')
//     .sort()
//     .join('')
//     .replace(/(.)\1+/g, '$1');
// }

// // fifth  solution
const longest = ($1, $2) => [...new Set([...$1, ...$2])].sort().join('');

console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
