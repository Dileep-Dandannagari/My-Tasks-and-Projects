//A function that takes another function as an argument or return a function is known as Higher order function

const radius = [1, 4, 3, 2];

//Area of the cirlcle(Pi*r*r)

const calcualteArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calcualteArea(radius));

//Circumferance of circle (Pi*2r)
const calculateCircumferance = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * 2 * radius[i]);
  }
  return output;
};
console.log(calculateCircumferance(radius));

//Diameter of circle(2r)
const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
console.log(calculateDiameter(radius));
