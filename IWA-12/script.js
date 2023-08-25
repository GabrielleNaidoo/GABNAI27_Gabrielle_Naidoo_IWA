const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

// Color property for all buttons
const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.color = "";
}

// Book1:
let book1 = document.querySelector("#book1");
let book1Status = book1.getElementsByClassName("status")[0];
let book1Reserve = book1.getElementsByClassName("reserve")[0];
let book1Checkout = book1.getElementsByClassName("checkout")[0];
let book1Checkin = book1.getElementsByClassName("checkin")[0];

// Book2:
let book2 = document.querySelector("#book2");
let book2Status = book2.getElementsByClassName("status")[0];
let book2Reserve = book2.getElementsByClassName("reserve")[0];
let book2Checkout = book2.getElementsByClassName("checkout")[0];
let book2Checkin = book2.getElementsByClassName("checkin")[0];

// Book3:
let book3 = document.querySelector("#book3");
let book3Status = book3.getElementsByClassName("status")[0];
let book3Reserve = book3.getElementsByClassName("reserve")[0];
let book3Checkout = book3.getElementsByClassName("checkout")[0];
let book3Checkin = book3.getElementsByClassName("checkin")[0];

/********************************************** */
const statusName1 = book1Status.textContent;
book1Status.style.color = STATUS_MAP[statusName1].color;
book1Reserve = STATUS_MAP[statusName1].canReserve
  ? (book1Reserve.disabled = false)
  : (book1Reserve.disabled = true);
book1Checkout = STATUS_MAP[statusName1].canCheckout
  ? (book1Checkout.disabled = false)
  : (book1Checkout.disabled = true);
book1Checkin = STATUS_MAP[statusName1].canCheckin
  ? (book1Checkin.disabled = false)
  : (book1Checkin.disabled = true);

const statusName2 = book2Status.textContent;
book2Status.style.color = STATUS_MAP[statusName2].color;
book2Reserve = STATUS_MAP[statusName2].canReserve
  ? (book2Reserve.disabled = false)
  : (book2Reserve.disabled = true);
book2Checkout = STATUS_MAP[statusName2].canCheckout
  ? (book2Checkout.disabled = false)
  : (book2Checkout.disabled = true);
book2Checkin = STATUS_MAP[statusName2].canCheckin
  ? (book2Checkin.disabled = false)
  : (book2Checkin.disabled = true);

const statusName3 = book3Status.textContent;
book3Status.style.color = STATUS_MAP[statusName3].color;
book3Reserve = STATUS_MAP[statusName3].canReserve
  ? (book3Reserve.disabled = false)
  : (book3Reserve.disabled = true);
book3Checkout = STATUS_MAP[statusName3].canCheckout
  ? (book3Checkout.disabled = false)
  : (book3Checkout.disabled = true);
book3Checkin = STATUS_MAP[statusName3].canCheckin
  ? (book3Checkin.disabled = false)
  : (book3Checkin.disabled = true);

/*-To get all the buttons to not have any color: 
   *Access all buttons through getElementsByTagName property
   *Use a for loop to loop through each iteration and ensure that their style.color="" (empty string)
  -To make the buttons disabled or enabled according to the STATUS_MAP object: 
  -create a variable to store the textContent of each status element
  -Use this variable as an input in the square brackets when accessing the corresponding color in the STATUS_MAP object.
  Use .disabled=true/false, to correspond to each of the canReserve/Checkout/Checkin properties
   -*/

// let disableOrEnable = function (
//   bookStatusNumber,
//   statusNameNumber,
//   bookReserveNumber
// ) {
//   let statusNameNumber = bookStatusNumber.textContent;
//   bookStatusNumber.style.color = STATUS_MAP[statusNameNumber].color;
//   bookReserveNumber = STATUS_MAP[statusNameNumber].canReserve
//     ? (bookReserveNumber.disabled = true)
//     : (bookReserveNumber.disabled = false);
// };
// disableOrEnable();
// disableOrEnable(book1Status, statusName1, book1Reserve);
