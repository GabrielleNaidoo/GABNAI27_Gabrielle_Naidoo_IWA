//Order1:
const root1 = document.querySelector('[data-key="order1"]');
// Biscuits1:
let biscuits1 = root1
  .getElementsByClassName("biscuits")[0]
  .getElementsByClassName("count")[0];
biscuits1.textContent = root1.dataset.biscuits;
// Donuts1:
let donuts1 = root1
  .getElementsByClassName("donuts")[0]
  .getElementsByClassName("count")[0];
donuts1.textContent = root1.dataset.donuts;
// Pancakes1:
let pancakes1 = root1
  .getElementsByClassName("pancakes")[0]
  .getElementsByClassName("count")[0];
pancakes1.textContent = root1.dataset.pancakes;
// Status of Order1:
let statusOfOrder1 = root1
  .getElementsByClassName("status")[0]
  .getElementsByTagName("dd")[0];
// statusOfOrder1.textContent = root1.dataset.delivered ? "Delivered" : "Pending";

if (root1.dataset.delivered === "true") {
  statusOfOrder1.textContent = "delivered";
}
if (root1.dataset.delivered === "false") {
  statusOfOrder1.textContent = "pending";
}

//Order2:
const root2 = document.querySelector('[data-key="order2"]');
// Biscuits2:
let biscuits2 = root2
  .getElementsByClassName("biscuits")[0]
  .getElementsByClassName("count")[0];
biscuits2.textContent = root2.dataset.biscuits;
// Donuts2:
let donuts2 = root2
  .getElementsByClassName("donuts")[0]
  .getElementsByClassName("count")[0];
donuts2.textContent = root2.dataset.donuts;
// Pancakes2:
let pancakes2 = root2
  .getElementsByClassName("pancakes")[0]
  .getElementsByClassName("count")[0];
pancakes2.textContent = root2.dataset.pancakes;
// Status of Order2:
let statusOfOrder2 = root2
  .getElementsByClassName("status")[0]
  .getElementsByTagName("dd")[0];

// statusOfOrder2.textContent = root2.dataset.delivered ? "Delivered" : "Pending";

if (root2.dataset.delivered === "true") {
  statusOfOrder2.textContent = "delivered";
}
if (root2.dataset.delivered === "false") {
  statusOfOrder2.textContent = "pending";
}

//Order3:
const root3 = document.querySelector('[data-key="order3"]');
// Biscuits3:
let biscuits3 = root3
  .getElementsByClassName("biscuits")[0]
  .getElementsByClassName("count")[0];
biscuits3.textContent = root3.dataset.biscuits;
// Donuts3:
let donuts3 = root3
  .getElementsByClassName("donuts")[0]
  .getElementsByClassName("count")[0];
donuts3.textContent = root3.dataset.donuts;
// Pancakes3:
let pancakes3 = root3
  .getElementsByClassName("pancakes")[0]
  .getElementsByClassName("count")[0];
pancakes3.textContent = root3.dataset.pancakes;
// Status of Order3:
let statusOfOrder3 = root3
  .getElementsByClassName("status")[0]
  .getElementsByTagName("dd")[0];
statusOfOrder3.textContent = root3.dataset.delivered ? "Delivered" : "Pending";

// statusOfOrder3.textContent = root3.dataset.delivered ? "Delivered" : "Pending";

if (root3.dataset.delivered === "true") {
  statusOfOrder3.textContent = "delivered";
}
if (root3.dataset.delivered === "false") {
  statusOfOrder3.textContent = "pending";
}

/*dl->div1->dd->textContent 
 -Start by accessing the first dl element(representing order 1). 
  -Then go inside this and get the div property element(representing biscuits) by using getElementByClassName method, with index
  -Go inside that div element and access the dd element by using getElementByClassName method, with index
  -Go inside the dd element and access it text Content by using getElementByClassName method, with index
  -Change the text content to correspond to the data value in the dataset of the parent dl element
  -For the status element:
   *Access the dd element using getElementByTagName, since this element was not given a class 
  -For the statusOfDelivery, use actual strings as conditions because the attribute points to a string that is not empty and will therefore always evaluate to a truthy value, causing complications in the code.*/
