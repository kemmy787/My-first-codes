//counter
let n = 0;
let condition = true;
while (condition) {
  n = n + 1;
  console.log("n is ", n);
  if (n > 100) {
    condition = false;
  }
}
