//function 1
function inputValue1() {
  while (true) {
    number1 = Number(prompt("Enter the first number"));

    //we are using while loop to verify number1
    if (number1 > 0) {
      return number1;
    }
    alert("Invalid value.Enter a number greater than 0.");
  }
}
function inputValue2() {
  while (true) {
    number2 = Number(prompt("Enter the second number."));
    if (number2 > 0) {
      return number2;
    }
    alert("Invalid value.Enter a number greater than 0");
  }
}

function calculateValues(inputValue1, inputValue2) {
  console.log(`${inputValue1} table`);
  console.log(`${inputValue1} * 5= ${inputValue1 * 5}`);
  console.log(`${inputValue1} * 4= ${inputValue1 * 4}`);
  console.log(`${inputValue1} * 3= ${inputValue1 * 3}`);
  console.log(`${inputValue1} * 2= ${inputValue1 * 2}`);
  console.log(`${inputValue1} * 1= ${inputValue1 * 1}`);
  console.log(`${inputValue2} table`);
  console.log(`${inputValue2} * 5= ${inputValue2 * 5}`);
  console.log(`${inputValue2} * 4= ${inputValue2 * 4}`);
  console.log(`${inputValue2} * 3= ${inputValue2 * 3}`);
  console.log(`${inputValue2} * 2= ${inputValue2 * 2}`);
  console.log(`${inputValue2} * 1= ${inputValue2 * 1}`);
}

calculateValues(inputValue1(), inputValue2());
