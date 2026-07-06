//area of circle<named>
function areaCircle(r) {
  const area = 3.142 * r * r;
  return area;
}
//area of rectangle<arrow>
const areaRectangle = (l, w) => {
  const area = l * w;
  return area;
};
console.log("The area of the rectangle is", areaRectangle(10, 5));

function areaTriangle(b, h) {
  const area = 0.5 * b * h;
  return area;
}

//create a super functio shape
function shape(shapeFunction, shapeName, side1, side2) {
  console.log(
    `The shapeName is ${shapeName} and its type is ${typeof shapeName}`,
  );
  console.log(
    `The shapeFunction is ${shapeFunction} and its type is ${typeof shapeFunction}`,
  );
  console.log(`Side1 is ${side1} and its type is ${typeof side1}`);
  console.log(`Side 2 is ${side2} and its type is ${typeof side2}`);
  result = shapeFunction(side1, side2);
  console.log(`The area of the ${shapeName} is ${result}`);
}

shape(areaCircle, "circle", 5);
