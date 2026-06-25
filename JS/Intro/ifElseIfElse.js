let age = Number(prompt("What's your age?"));
console.log(`age is ${age}typeof ${typeof age}`);
alert(`You entered age ${age}`);

if (age < 12) {
  alert("You are just a baby.");
  console.log("You are just a baby.");
} else if (age < 18) {
  alert("You are a teen");
  console.log("You are a teen.");
} else if (age < 27) {
  alert("You are free to drink and smoke.");
  console.log("You are free to drink and smoke.");
} else if (age < 35) {
  alert("You can get married now");
  console.log("You can get married now.");
} else if (age < 65) {
  alert("Best age for retirement");
  console.log("Best age for retirement.");
} else {
  alert("You are now an ancestor");
  console.log("You are now an ancestor.");
}
