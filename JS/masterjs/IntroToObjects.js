car = {
  //create properties called name ,model,topspeed
  name: "X5",
  model: "BMW",
  topspeed: `${155}mph`,
  engine_information: {
    engineNumber: "N55",
    numberOfCylinders: 6,
  },
  manufacturer: { name: "Gillian", country: "Kisii" },
  1: "The best Car in history",
  alert_info: function () {
    alert(
      `${this.name},${this.model},${this.topSpeed},engineinformation${this.engine_information},the manufacturer info is ${this.manufacturer}`,
    ); //anonymous function in use,this is used to tel js to look at model inside the js
  },
};
console.log(`Car data type is${car}`);
console.log(car);
console.log("--using console.log table");
console.table(car);
