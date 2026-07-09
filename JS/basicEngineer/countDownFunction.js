number = Number(prompt("Which number would you like to countdown?"));
function countdown(number) {
  while (number > 0) {
    console.log(number);
    number = number - 1;
    if (number < 0) {
      number = false;
    }
  }
}
countdown(number);
