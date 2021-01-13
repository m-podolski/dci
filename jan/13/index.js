
// let print = '';
// for (let i = 0; i < 4; i++) {

//   print += 'T';
//   console.log(print);
// }


// for (let i = 4; i > 0; i--) {

//   let print = '';

//   for (let j = 0; j < i; j++) {

//     print += '*';
//   }
//   console.log(print);
// }

// 11. XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// isEqualNumXandO(“ooxx”) ➞ true
// isEqualNumXandO(“xooxx”) ➞ false
// isEqualNumXandO(“ooxXm”) ➞ true (case insensitive)
// isEqualNumXandO(“zpzpzpp”) ➞ true (returns true if no x and o)
// isEqualNumXandO(“zzoo”) ➞ false

function isEqualNumXandO(string) {

  let countX = 0;
  let countO = 0;

  for (let i = 0; i < string.length; i++) {

    countX = string[i].toLowerCase() === 'x' ? countX + 1 : countX;
    countO = string[i].toLowerCase() === 'o' ? countO + 1 : countO;
  }

  return countX === countO ? true : false;
}

console.log(isEqualNumXandO('ooxx'));
console.log(isEqualNumXandO('xooxx'));
console.log(isEqualNumXandO('ooxXm'));
console.log(isEqualNumXandO('zpzpzpp'));
console.log(isEqualNumXandO('zzoo'));

