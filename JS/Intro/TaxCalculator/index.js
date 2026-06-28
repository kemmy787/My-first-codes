let grossMonthlySalary = null;
while (true) {
  let gross = prompt("Enter your gross monthly salary:");
  if (!isNaN(gross) && gross > 0) {
    grossMonthlySalary = gross;
    break;
  }
  alert("Please enter a valid number greater than 0");
}
