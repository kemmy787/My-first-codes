//Declare a variable in the global scope
let name = "Gillian";
//create a functiom called sayMyName
//declaer variable name in the start of the function and assign a different name
//create an if statement inside function
//
function sayMyName() {
  let name = "John";
  console.log(`Name is ${name} and line  is ${7}`);
  if (123) {
    let name = "Peter";
    console.log(`Name is ${name} and line  is ${10}`);
  }
  console.log(`Name is ${name} and line  is ${13}`);
}

sayMyName();
