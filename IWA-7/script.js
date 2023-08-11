//Challenge 1:

const value = "3";
console.log(parseInt(value) + 4 + parseInt(value));

/************************************************************* */
//Challenge 2:

const nickname = "Timmy";
const firstname = "Timothy";

if (nickname || firstname) {
  console.log(`Good Morning, ${nickname || firstname}!`);
}

if (!nickname && !firstname) {
  console.log("Good Morning!");
}

/************************************************************/
//Challenge 3:

const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const combinedBalance = parseFloat(leoBalance) + parseFloat(sarahBalance);

const owed = `R${-1 * combinedBalance.toFixed(2)}`;
console.log(owed);
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${parseFloat(
  leoBalance
)})`;

const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${parseFloat(
  sarahBalance
)})`;
const total = "Total amount owed: ";
const result = `${leo}\n${sarah}\n\n${divider}\n\t${total}${owed}\n${divider}`;

console.log(result);
