'use strict';
// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
let hand = [
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 },
  { tile: 'E', score: 1 },
];

function falsificationImpossible(tiles) {
  let result = 0;
  for (const tile of tiles) {
    result += tile.score;
  }

  console.log(result);
}

falsificationImpossible(hand);


// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// Expected Output:
// {“John”: name, “teacher”: job}

function confirmationBias(object) {

  let arr = Object.entries(object);

  let out = arr
    .reduce((acc, val, ind) => {
      acc[val[1]] = arr[ind][0];
      return acc;
    }, {});

  return out;
}

let person = {
  name: 'John',
  job: 'teacher',
};

console.log(confirmationBias(person));

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]

function informationBias(object) {

  console.log(Object.entries(object));

  let keysValsArray = Object.entries(object)
    .reduce((acc, val, ind) => {
      acc[0].push(val[0]);
      acc[1].push(val[1]);
      return acc;
    }, [[], []]);

  return keysValsArray;
}

console.log(informationBias({ a: 1, b: 2, c: 3 }));
console.log(informationBias({ key: true }));
