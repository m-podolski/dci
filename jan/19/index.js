
// Create a program with two variables: “item” and “times”.Create a program that repeats the “item” as many times as specified by “times”.The first variable(“item”) is the item that needs repeating while the second argument(“times”) is the number of times the item is to be repeated.Print the result in an array.Examples:
// (“example”, 3) ➞[“example”, “example”, “example”]

// const item = 'loop';
// const times = 4;
// const loop = [];

// for (let i = 0; i < times; i++) {
//   loop.push(item);
// }

// console.log(loop);

// The Greater Numbers.
// Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number.The function should return the elements of the array which are greater than the second argument.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

// function findGreatest(array, num) {

//   return array.filter((i) => i > num);
// }

// console.log(findGreatest([3, 4, 5], 4));
// console.log(findGreatest([10, 20, 30], 12));
// console.log(findGreatest([0, 10, 3], 4));

// AEIOU:
// Vowels.Create a function that takes a string in its parameters and counts the number of vowels(i.e.in English, “a, e, i, o, u”) in the string.
//   i.e.findVowels(“this is a string”) ➞ 4

// function vowels(string) {

//   let count = 0;
//   const test = ['a', 'e', 'i', 'o', 'u'];

//   for (let i = 0; i < string.length; i++) {

//     for (let j = 0; j < test.length; j++) {

//       if (test[j] == string[i]) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }

// console.log(vowels('inferiority complexes'));


// No Duplicates!
// A set is a collection of unique items.A set can be formed from an array by removing all duplicate items.Create a program which transforms an array into a set of unique values.See the examples below.Example:
// [1, 4, 4, 7, 7, 7]➞[1, 4, 7]
// [1, 6, 6, 9, 9]➞[1, 6, 9]
// [2, 2, 2, 2, 2, 2]➞[2]
// [5, 10, 15, 20, 25]➞[5, 10, 15, 20, 25]

function makeSet(array) {

  for (let i = 0; i < array.length; i++) {

    let previous = array.slice(0, i);
    // console.log('previous', previous);

    // for (let j = 0; j < previous.length; j++) {

    if (array[i] === array[i + 1]) {
      // if (previous[j] === array[i]) {

        array.splice(i + 1, 1)
        // previous = array.slice(0, i + 1);

        // join after splice
        // call recursively
          // makeSet(previous);

        // console.log('new previous', previous);
      }
    // }
  }
  return array;
}

console.log(makeSet([1, 4, 4, 4, 7, 7, 7, 7]));
console.log(makeSet([1, 4, 4, 7, 7, 7]));
console.log(makeSet([1, 6, 6, 9, 9]));
console.log(makeSet([2, 2, 2, 2, 2, 2]));
console.log(makeSet([5, 10, 15, 20, 25]));


// Dictionary. (take your time on this pls) also as tip you can use.includes()
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
//   Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
//   Examples:
// dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞[“button”]
// dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞[“triplet”, “tries”, trip”]
// dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞[]

// const dictionary = (str, arr) => {
//   let result = [];
//   let userInput = str.toLowerCase();

//   for (let i = 0; i < arr.length; i++) {
//     let currentValue = arr[i].toLowerCase();
//     if (currentValue.includes(userInput)) {
//       result.push(currentValue);
//     }
//   }
//   console.log(result);
// }

// dictionary('bu', ['button', 'breakfast', 'border'])
// dictionary('tri', ['triplet', 'tries', 'trip', 'piano', 'tree'])
// dictionary('beau', ['pastry', 'delicious', 'name', 'boring'])
