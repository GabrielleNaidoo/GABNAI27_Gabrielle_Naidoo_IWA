const date = 2050;
let count = 0;
const role = "student";

console.log("January: New Year’s Day");
console.log("March: Human Rights Day");
let month = "April";
console.log(`${month}: Family Day`);
console.log(`${month}: Freedom Day`);
count += 4;
if (role === "student") {
  console.log("June: Youth Day");
  count++;
}
console.log("August: Women’s Day");
console.log("September: Heritage Day");
month = "December";
console.log(`${month}: Day of Reconciliation`);
count += 3;
console.log(`${month}: Day of GoodWill`);
count++;
if (role === "parent") {
  console.log(`${month}: Christmas Day`);
  count++;
}

console.log(`Your status is: ${role}`);
console.log(`The year is: ${date}`);
console.log(`The total number of holidays is: ${count}`);
