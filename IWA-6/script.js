//Challenge 1 :

/*****Attempt 1:*****/
const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

//Can also create a separate variable and parseInt primaryPhone and secondaryPhone variables before validating.

const primaryValid = parseInt(primaryPhone) + 0 === parseInt(primaryPhone);
const secondaryValid =
  parseInt(secondaryPhone) + 0 === parseInt(secondaryPhone);

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);

/*****Attempt 2:*****/
// const primaryPhone = "O748105141";
// const secondaryPhone = "0219131568";

// const primaryNumber = parseInt(primaryPhone);
// const secondaryNumber = parseInt(secondaryPhone);

// const primaryValid = isNaN(primaryNumber) === false;
// const secondaryValid = isNaN(secondaryNumber) === false;

// console.log("Primary phone is valid numerical string:", primaryValid);
// console.log("Secondary phone is valid numerical string:", secondaryValid);

/**************************************************************************************************** */

//Challenge 2 :
const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (
  hourOfDay !== null &&
  minuteOfDay !== null &&
  hourOfDay !== undefined &&
  minuteOfDay !== undefined &&
  hourOfDay == "00" &&
  minuteOfDay == "00"
) {
  const taxAsDecimal = parseInt(tax) / "100";
  const startingAfterTax = salary - salary * taxAsDecimal;
  const balance = startingAfterTax - transport - food - rent;
  console.log(`R${balance.toFixed(2)}`);
}
