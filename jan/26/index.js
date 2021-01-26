
// Write a function that it returns  “Two for me and one for you” when no arguments are passed
// e.g
// console.log(twofer("Fran"))-- -> "Two for me and one for Fran"
// console.log(twofer())-- -> "Two for me and one for you"

// function twofer(name = 'you') {

//   return `Two for me and one for ${name}`;
// }

// console.log(twofer('Fran'));
// console.log(twofer());

// Write a function that it still calculates the power of a number even if the exp argument is not passed to it.The default exp should be set to 2.
// e.g
// console.log(exponent(3, 3))-- -> 27
// console.log(exponent(3))-- -> 9

// function exponent(base, exp = 2) {

//   return base ** exp;
// }

// console.log(exponent(3, 3));
// console.log(exponent(3));

// Write a function that it returns the total amount of arguments passed to it.
//   e.g
// console.log(howManyArgs())-- -> 0
// console.log(howManyArgs(1, false, "hello"))-- -> 3
// console.log(howManyArgs("better"))-- -> 1

// function howManyArgs(...args) {

//   let result = 0;
//   args.forEach(() => result++)

//   return result;
// }

// console.log('---');
// console.log(howManyArgs());
// console.log(howManyArgs(1, false, "hello"));
// console.log(howManyArgs("better"));

// Write a function which accepts any amount of numbers and return the sum of their addition
// e.g
// console.log(sum(1))-- -> 1
// console.log(sum(1, 15))-- -> 16
// console.log(sum(25, 25, 20))-- -> 70

// function sum(...nums) {

//   return nums.reduce((carry, num) => carry + num);
// }

// console.log('---');
// console.log(sum(1));
// console.log(sum(1, 15));
// console.log(sum(25, 25, 20));

// Bonus: Write a function which accepts any amount of numbers and returns the average.
//   e.g
// console.log(average(0))-- -> 0
// console.log(average(1, 2))-- -> 1.5
// console.log(average(1, 3, 6, 10))-- -> 5
// console.log(average(12, 14, 16))-- -> 14

// function average(...nums) {

//   return nums.reduce((carry, num) => carry + num) / nums.length;
// }

// console.log('---');
// console.log(average(0));
// console.log(average(1, 2));
// console.log(average(1, 3, 6, 10));
// console.log(average(12, 14, 16));

// hackerSpeak
console.log('** c4n y0u r34d th15 ?**');

// possible with objects and computed properties
function hackerSpeak(phrase) {

  let code = [];
  code['a'] = '4';
  code['e'] = '3';
  code['i'] = '1';
  code['o'] = '0';
  code['s'] = '5';
  // return code;
  return phrase
  .split('')
  .map((char) => {
      return code.includes(char) ?
        code[char] : 'x'
        // code[char] : char
    })
    .join('');

  // return encoded.join('');
}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));

// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
// how many chr in a str(not case sens)
// howManyStr(“I like pizza”,“p”) -> 1
