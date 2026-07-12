//print an alert for the current time

/*function showCurrentTime() {
  const time = new Date();
  alert(`Current Time is ${time} and its type is ${typeof time}`);
  console.log(`Current Time is ${time} and its type is ${typeof time}`);
}*/

//anonymous function
/*const showCurrentTimeAnonymous = function () {
  const time = new Date();
  alert(`Current Time is ${time} and its type is ${typeof time}`);
  console.log(`Current Time is ${time} and its type is ${typeof time}`);
};*/
//arrow function
/*const showCurrentTimeArrow = () => {
  const time = new Date();
  alert(`Current Time is ${time} and its type is ${typeof time}`);
  console.log(`Current Time is ${time} and its type is ${typeof time}`);
};*/
//callback time
//showCurrentTimeArrow();

setInterval(() => {
  const time = new Date();
  alert(`Current Time is ${time} and its type is ${typeof time}`);
  console.log(`Current Time is ${time} and its type is ${typeof time}`);
}, 6000);
