/*
exit code
return any required data
*/

function sayMyName() {
  let firstname = "Gillian";
  console.log(`First Name is ${firstname}`); //statement 2

  let secondname = "Kemunto";
  console.log(`Second Name is ${secondname}`); //statement 4

  let fullName = `${firstname}${secondname}`;
  console.log(`Names are ${fullName}`);
  return fullName;
}

let sayMyNameValue = sayMyName();
console.log(
  `Function returned ${sayMyNameValue} its type is ${typeof sayMyName}`,
);

//return after the statement 2
//return after statement 4
// return a string
