function countdown() {
  let n = Number(prompt("Enter a number to start the countdown:"));
  while (true) {
    console.log(`n is ${n}`);
    n = n - 1;
    if (n < 0) {
      break;
    }
  }
}
