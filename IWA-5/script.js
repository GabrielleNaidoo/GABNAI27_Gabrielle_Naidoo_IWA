const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

let customers = 5;
let country = "RSA";
let shipping = null;
let currency = null;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
let totalWithoutShipping = shoes + toys + shirts + batteries + pens;
console.log(totalWithoutShipping);

if (country === "RSA") {
  currency = "R";
  if (totalWithoutShipping > 1000 && customers === 1) {
    shipping = 0;
  } else if (totalWithoutShipping > 1000 && customers !== 1) {
    shipping = 400;
    console.log(FREE_WARNING);
  } else {
    shipping = 400;
  }
  console.log(`price: ${currency}${totalWithoutShipping + shipping}`);
} else if (country === "NAM") {
  currency = "$";
  if (totalWithoutShipping > 60 && customers === 1) {
    shipping = 0;
  } else if (totalWithoutShipping > 60 && customers !== 1) {
    shipping = 600;
    console.log(FREE_WARNING);
  } else {
    shipping = 600;
  }
  console.log(`price: ${currency}${totalWithoutShipping + shipping}`);
} else if (country === "NK") {
  console.log(BANNED_WARNING);
} else {
  shipping = 800;
  currency = "$";
  console.log(`price: ${currency}${totalWithoutShipping + shipping}`);
}
