
// Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// Store Mark’s and John’s mass and height in variables.
// Calculate both their BMIs and store their BMIs in variables.
// Create a boolean variable containing information about whether Mark has a higher BMI than John.
// Print a string to the console containing the variable from step 3 using string interpolation. (e.g.“Is Mark’s BMI higher than John’s ? Why yes, it’s[boolean], it is”).
// Create an if statement which prints the name and BMI of the person with the highest BMI.

// const markWeight = 72.5;
// const markHeight = 1.65;
// const johnWeight = 82.5;
// const johnHeight = 1.25;

// const markBMI = markWeight / (markHeight ** 2);
// const johnBMI = johnWeight / (johnHeight ** 2);

// const highestBMI = markBMI > johnBMI ? 'Mark' : 'John';

// console.log(`Is Mark’s BMI higher than John’s ? Why yes, it’s ${highestBMI}, it is`)

// if (markBMI > johnBMI) {
//   console.log('Mark', markBMI);
// } else {
//   console.log('John', johnBMI);
// }

// Make a variable for firstName and age and give each variable values.Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult”.

// const firstname = 'Malte';
// const age = 33;

// if (age < 13) {
//   console.log(`${firstname} is a child`);
// } else if (20 > age > 13) {
//   console.log(`${firstname} is a teenager`);
// } else if (30 > age > 20) {
//   console.log(`${firstname} is a young adult`);
// } else {
//   console.log(`${firstname} is an adult`);
// }

// Capitalize.
// Create a program that capitalizes the first letter of each element in an array of names.Examples:
// [“matt”, “sara”, “lara”]➞[“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”]➞[“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”]➞[“Cynthia”, “Karen”, “Jane”, “Carrie”]


function ucFirst(array) {

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array[i].length; j++) {

      if (j === 0) {
        console.log(j);
        // j.toUpperCase();
      } else {
        console.log('J');
        // j.toLowerCase();
      }
    }
  }
  return array;
}

// console.log(ucFirst(['matt', 'sara', 'lara']));
// console.log(ucFirst(['samuel', 'MARIA', 'luke', 'mary']));
// console.log(ucFirst(['Cynthia', 'Karen', 'Jane', 'Carrie']));

// City Names.
// Create an array of city names.Loop through the array and add the city names to a string.Examples:
// [Berlin, Paris, Prague, Rome]➞ expected output: “Berlin, Paris, Prague, Rome”.

function arrayToString(array) {

  let resultString = '';

  for (let index = 0; index < array.length; index++) {

    resultString += array[index] + ', ';
  }
  return resultString;
}

console.log(arrayToString(['Berlin', 'Paris', 'Prague', 'Rome']));

// Hello
// Create an array filled with your friends’ or family’s names.Loop over the array and greet each friend.Bonus: Print the indexes of each item in the array.Examples:
// [Maria, Mike, Paul, Doven]➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
// Bonus[Susan, Rezvane, Mark]➞ expected bonus output: “Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”.

const names = ['Maria', 'Mike', 'Paul', 'Doven'];

names.forEach(element => console.log(`Hello ${element} !`));

// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.Examples:
// [3, 5, 2, 4]➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20]➞ expected output: [5, 10, 9, 19]

function mutateOddEven(array) {

  for (let i = 0; i < array.length; i++) {

    let item = array[i];

    array[i] = array[i] % 2 === 1 ? array[i] += 1 : array[i] -= 1;
  }
  return array;
}

console.log(mutateOddEven([3, 5, 2, 4]));
console.log(mutateOddEven([6, 9, 10, 20]));
