
// Math.random()

console.log(Math.random());
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(7));

// Math.pi

console.log(Math.PI);
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}
function calculateRadius(circumference) {
  return circumference / (2 * Math.PI);
}
function calculateSurface(radius) {
  return Math.PI * (radius * 2);
}
console.log(calculateCircumference(10));
console.log(calculateRadius(calculateCircumference(10)));
console.log(calculateSurface(5));
