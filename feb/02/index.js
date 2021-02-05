// Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.
'use strict';
let person2 = {
  firstname: 'malte',
  lastname: 'podolski',
  age: 33,
};

for (const prop in person2) {
  console.log(`${ prop } of person2 is ${ person2[prop] }`);
}

// Create a function that returns an array of the properties of a javascript object.

(function propsToArray(object) {
  let array = [];
  for (const prop in object) {
    array.push(prop);
  }

  console.log(array);
})(person2);

(function valuesToArray(object) {
  let array = [];
  for (const prop in object) {
    array.push(object[prop]);
  }

  console.log(array);
})(person2);

// Given the following object
// Create a method that prints the following:
// "Zain Oil a student in class 48"

const student = {
  firstName: 'Zain',
  lastName: 'Oil',
  class: 48,
  info() {
    console.log(`${ this.firstName } ${ this.lastName } a student in class ${ this.class }`);
  },
};
student.info();
