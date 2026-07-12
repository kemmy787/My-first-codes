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
  while (outerloop > 0) {
    let innerloop = num2;
    while (innerloop > 0) {
      console.log(`outerloop=${outerloop}innerloop=${innerloop}`);
      console.log(`${innerloop}*${outerloop}=${innerloop * outerloop}`);
      innerloop--;
    }
  }
  outerloop--;
}
promptStudent();
