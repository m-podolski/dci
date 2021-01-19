
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

function vowels(string) {

  let count = 0;
  const test = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i++) {

    for (let j = 0; j < test.length; j++) {

      if (test[j] == string[i]) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(vowels('inferiority complexes'));
