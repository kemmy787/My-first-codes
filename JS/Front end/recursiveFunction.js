//This function doesnto include attempt number
/*function salaryGrossPromptProcess() {
  let gross = prompt("Enter your gross monthly salary:");
  if (!isNaN(gross) && gross > 0) {
    grossMonthlySalary = gross;
    console.log("You have entered this amount", grossMonthlySalary);
    return grossMonthlySalary;
  }
  alert("Invalid,Enter a valid number greater than 0.Try again");
  salaryGrossPromptProcess();
}*/

//Here is a modified version of the function that includes attempt number
function salaryGrossPromptProcess(attempt = 0) {
  let gross = null;
  if (attempt == 0) {
    gross = prompt("Enter your gross monthly salary:");
  } else {
    gross = prompt(`Invalid.Attempt ${attempt}. Please try again.`);
  }
  if (isNaN(Number(gross)) === false && gross > 0) {
    console.log(`You have entered this amount: ${gross}`);
    return;
  }
  salaryGrossPromptProcess(attempt + 1);
}
salaryGrossPromptProcess();

/*userInput = prompt(`Enter a number to get is factorial.`);
number = Number(userInput);
function factorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(`The factorial of the number${number}is${factorial(number)}`);*/

number = Number(prompt("Enter a number to get its factorial."));
function factorial(number = 1, lastSolution = 1) {
  if (number <= 1) {
    return lastSolution;
  }
  const newNumber = number - 1;
  const newSolution = n * lastSolution;
  factorial(newNumber, newSolution);
}
