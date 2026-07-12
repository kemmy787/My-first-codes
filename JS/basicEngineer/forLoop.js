//it has a starting point,has a condition and ending point in the same statement
//while loop
/*let k = 0;
while (k < 20) {
  //condition
  console.log(`k is${k}`);
  k = k + 1; //what happens after an iteration.
}
//for loop version
for (let k = 0; k < 20; k = k + 1) {
  console.log(`k is ${k}`);
}*/

function promptStudent() {
  while (true) {
    num1 = Number(prompt("Enter the first number."));
    if (isNaN(num1 && num1 < 0)) {
      //continue; //restarts the loop
      alert("Invalid value");
      console.error("Ensure number 1 is greater than 0 ");
    }
    num2 = Number(prompt("Enter the second number."));
    if (isNaN(num2 && num2 < 0)) {
      // continue; //restart the loop
      alert("Invalid value");
      console.error("Ensure number 2 is greater than 0.");
    }

    break;
  }
  console.log(`Got valid numbers${num1},${num2}`);
  mathsTable(num1, num2);
}
function mathsTable(num1, num2) {
  /* if(!num1||num1<0||!num2||num2<0)
        console.error("Ensure numbers 1 or 2 are greater than 0.")*/
  let outerloop = num1;
  for (i = num1; i >= 1; i--) {
    for (j = num2; j >= 0; j--) {
      console.log(`outerloop=${outerloop}innerloop=${innerloop}`);
      console.log(`${innerloop}*${outerloop}=${innerloop * outerloop}`);
    }
  }
} //for loop is just similar as while loop ,ni vile for loop used for syntatic sugar.
promptStudent();
