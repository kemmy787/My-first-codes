function salaryGrossPromptProcess() {
  let gross = prompt("Enter your gross monthly salary:");
  if (!isNaN(gross) && gross > 0) {
    grossMonthlySalary = gross;
    console.log("You have entered this amount", grossMonthlySalary);
    return grossMonthlySalary;
  }
  alert("Invalid,Enter a valid number greater than 0");
}
