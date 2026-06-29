//define function and then we call it
function timeAlert() {
  const date = new Date();
  alert(`Current time is: ${date.toISOString()}`);
}

function areaOfTriangle(base, height) {
  console.log(`Base is${base} and its type is ${typeof base}`);
  console.log(`Height is${height} and its type is ${typeof height}`);
  const area = 0.5 * base * height;

  console.log(`Area of triangle is ${area} and its type is ${typeof area}`);
}

//scenario 1: calling function with no arguments
areaOfTriangle();
//scenario 2:calling the function base only
areaOfTriangle(20);
//scenario 3: calling the function with both arguments
areaOfTriangle(20, 10);
//scenario 4: calling the function with variables
const base1 = 50;
const height1 = 60;
areaOfTriangle(base1, height1);

//scenario 5: calling the function with string values
const base2 = "hello";
const height2 = "world";
areaOfTriangle(base2, height2);
