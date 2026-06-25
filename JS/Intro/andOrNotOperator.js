let mercy_age = 15;
let mercy_balance = 50000;
//is Mercy age greater than 18 and balance is greater than 20000
let is_greater_than_18 = mercy_age > 18;
console.log(`is Mercy age greater than 18, ${is_greater_than_18}`);
let has_more_than_20000 = mercy_balance > 20000;
console.log(`Mercy has more than 20000, ${has_more_than_20000}`);
console.log(
  `Mercy's age is greater than 18 and has a balance that is more than 20000: ${is_greater_than_18 && has_more_than_20000}`,
);
let_simplified = mercy_age > 18 && mercy_balance > 20000;
console.log(
  `Mercy's age is greater than 18 and has a balance that is more than 20000 simplified: ${let_simplified}`,
);

console.log(
  `Further simplification: ${mercy_age > 18 && mercy_balance > 20000}`,
);

console.log(
  `is Mercy age greater than 18 or balance is greater than 20000: ${is_greater_than_18 || has_more_than_20000}`,
);

console.log(`This is not true: ${!true}`);
console.log(`This is not false: ${!false}`);
