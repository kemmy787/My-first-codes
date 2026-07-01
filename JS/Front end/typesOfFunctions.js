//Named Function
function areCircle(r) {
  return 3.14 * r * r;
}
let age = 23;
let SamsAge = 23;
let ac = areCircle; //statement,functio usage
console.log(`Area of Circle is ${ac} and its type is ${typeof ac}`);

//use named funtion
//assign that funtion a variable
//equate variable to function defination

let rA = function (l, w) {
  return l * w;
  console.log(l * w);
};

rA(10, 20);
console.log(`Area of Rectangle is ${rA} and its type is ${typeof rA}`);
