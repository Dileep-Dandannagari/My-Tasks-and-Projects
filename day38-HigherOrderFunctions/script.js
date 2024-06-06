//A function that takes another function as an argument or return a function is known as Higher order function

const radius = [1, 4, 3, 2];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return Math.PI * 2 * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
//Generic Function(A function that can be resused with multiple data)
const calcualte = function (arr, logic) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calcualte(radius, area));
console.log(calcualte(radius, circumference));
console.log(calcualte(radius, diameter));

