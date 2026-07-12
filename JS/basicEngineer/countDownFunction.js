number = Number(prompt("Which number would you like to countdown?"));
function countdown(number) {
  while (number > -1) {
    console.log(number);
    number = number - 1;
  }
}
countdown(number);
