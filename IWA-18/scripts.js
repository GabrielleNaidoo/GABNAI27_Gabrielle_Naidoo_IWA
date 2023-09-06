import {
  createOrderHtml,
  html,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";

import {
  TABLES,
  COLUMNS,
  state,
  createOrderData,
  updateDragging,
} from "./data.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault(); //prevents default behaviour of the event
  const path = event.path || event.composedPath(); // fetches the path property of the event object
  let column = null;

  for (const element of path) {
    //loops over the array provided by the path property
    const { area } = element.dataset; //checks each element of the path array for the presence of the data-area property
    if (area) {
      //if there is an area property:
      column = area; //set the column variable to equal the area property
      break;
    }
  }

  if (!column) return; //If column is false(null,0,undefined), end the function
  updateDraggingHtml({ over: column }); //pass an object with over property set to column into the updateDraggingHtml function
  updateDragging({ over: column }); //pass an object with over property set to column into the updateDraggingfunction
};

//handleDragOver function must use the event object to get the target element that is being dragged over.
//if an element with a data area property is found, then the
//Should act this way till the order stops being dragged

const handleDragStart = (event) => {}; //Responsible for setting the source and the over properties in the state object. When the user starts dragging the order,
const handleDragEnd = (event) => {};
//Responsible for updating the column property of the order also in the state object.
//Get from the view.js and data.js files
const handleHelpToggle = (event) => {
  if (html.help.overlay.style.display === "none") {
    html.help.overlay.style.display = "block";
    html.other.help.style.display = "none";
  } else {
    html.help.overlay.style.display = "none";
    html.other.help.style.display = "block";
  }
};
const handleAddToggle = (event) => {
  if (html.add.overlay.style.display === "none") {
    html.add.overlay.style.display = "block";
  } else {
    html.add.overlay.style.display = "none";
  }
  html.other.add.focus();
};
const handleAddSubmit = (event) => {
  event.preventDefault();

  const title = html.add.title.value;
  const table = html.add.table.value;
  const column = html.columns.ordered;
  if (title && table) {
    //create the order data and then use it to create the order html to be displayed:
    const orderData = createOrderData({ title, table, column });
    const orderHtml = createOrderHtml(orderData);
    html.columns.ordered.appendChild(orderHtml); //adds it to the ordered column
  }

  //closes the overlay and returns the values to empty when reopened:
  html.add.overlay.style.display = "none";
  html.add.title.value = "";
  html.add.table.value = "";
};

const handleEditToggle = (event) => {
  const target = event.target;
  const id = target.dataset.id;

  if (id) {
    html.edit.overlay.style.display = "block";
    html.edit.title.focus();
    console.log(target);

    html.edit.title.value =
      target.querySelector("[data-order-title]").textContent;
    html.edit.table.value =
      target.querySelector("[data-order-table]").textContent;
    html.edit.column.value = target.querySelector(
      "[data-order-column]"
    ).textContent;
  }
  if (target === html.edit.cancel) {
    html.edit.overlay.style.display = "none";
  }
};
const handleEditSubmit = (event) => {
  event.preventDefault();

  const target = event.target;

  // const newTitle = html.edit.title;
  // const newColumn = html.edit.column;
  // const newTable = html.edit.table;

  // if (newTitle && newTable && newColumn) {
  //   target.title = newTitle;
  //   target.table = newTable;
  //   target.column = newColumn;

  //   moveToColumn(target.dataset.id, newColumn);
  //   html.edit.overlay.style.display = "none";
  // }
};
const handleDelete = (event) => {
  const deleteOrder = document.querySelector();
  console.log(deleteOrder);
};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
