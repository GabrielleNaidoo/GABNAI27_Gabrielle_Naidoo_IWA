import { TABLES, COLUMNS, state } from "./data.js";

/**
 * Takes any order as an object literal (as saved in state) and converts it a
 * HTML element that can be appended to the DOM. Creating order elements
 * individually prevents the JavaScript having to re-render the entire DOM every
 * time an new order is created.
 *
 * @param {object} order
 * @returns {HTMLElement}
 */

export const createOrderHtml = (order) => {
  //takes an order object as an argument
  const { id, title, table, created } = order; //extracts the id, title,table, and created properties from the order object

  const element = document.createElement("div"); //creates a <div> in the html
  element.className = "order"; //sets that elements class to "order"
  element.draggable = true; //lets the element be draggable
  element.dataset.id = id; //sets the data-id=id of the order object

  //Fetches the time that the order was created
  const hours = created.getHours().toString().padStart(2, "0");
  const minutes = created.getMinutes().toString().padStart(2, "0");

  //sets the inner HTML of the created element:
  element.innerHTML = /* html */ `
        <div class="order__title" data-order-title>${title}</div>
        
        <dl class="order__details">
            <div class="order__row">
                <dt>Table:</dt>
                <dd class="order__value" data-order-table>${table}</dd>
            </div>

            <div class="order__row">
                <dt>Ordered:</dt>
                <dd class="order__value">${hours}:${minutes}</dd>
            </div>
        </dl>
    `;

  return element;
};

/**
 * Since the tables in use, and their identification can be configured before
 * the start of the app (in data.js), the actual options returned should be
 * dynamically added to the respective "<select>" elements in the HTML after
 * JavaScript loads. This function executes the logic thar reads the current
 * tables and creates the HTML to select them.
 *
 * @returns {HTMLElement}
 */
const createTableOptionsHtml = () => {
  //creates a fragment
  const fragment = document.createDocumentFragment();

  //Loops over the TABLES array
  for (const singleTable of TABLES) {
    const option = document.createElement("option"); //creates an <option> element in html for each TABLES array element
    option.value = singleTable; //sets the value of the option to the current TABLES array element
    option.innerText = singleTable; //sets the textContent of the option to the current TABLES array element
    fragment.appendChild(option); //appends the option to the fragment
  }

  return fragment; //returns the fragment with the appended option element
};

/**
 * An object literal that contains references to all the HTML elements
 * referenced through the operation of the app either upon initialisation or
 * while its running (via event listeners). This ensure that all UI elements can
 * be accessed and seen in a structured manner in a single data structure.
 *
 * Note that the "column" and "area" properties created as empty and then added
 * dynamically by a loop that runs over the COLUMNS array.
 */
export const html = {
  columns: {},
  area: {},
  add: {
    overlay: document.querySelector("[data-add-overlay]"), //enitre overlay, holding entire form
    form: document.querySelector("[data-add-form]"), //entire add order form
    cancel: document.querySelector("[data-add-cancel]"), //cancel button
    title: document.querySelector("[data-add-title]"), //title of overlay
    table: document.querySelector("[data-add-table]"), //table of overlay
  },
  edit: {
    overlay: document.querySelector("[data-edit-overlay]"), //entire overlay element containing edit form
    form: document.querySelector("[data-edit-form]"), //entire form
    cancel: document.querySelector("[data-edit-cancel]"), //cancel button
    title: document.querySelector("[data-edit-title]"), //title of edit form
    table: document.querySelector("[data-edit-table]"), //table of edit form
    id: document.querySelector("[data-edit-id]"),
    column: document.querySelector("[data-edit-column]"),
    delete: document.querySelector("[data-edit-delete]"),
  },
  help: {
    overlay: document.querySelector("[data-help-overlay]"), //help overlay
    cancel: document.querySelector("[data-help-cancel]"), //close help button
  },
  other: {
    grid: document.querySelector("[data-grid]"),
    help: document.querySelector("[data-help]"), //help button
    add: document.querySelector("[data-add]"), //add order button
    order: document.querySelector("[data-order]"),
  },
};

for (const columnName of COLUMNS) {
  //This loops over the elements of the COLUMNS array and matches each element in the array to its column in the HTML and stores it in the originally empty nested columns object of the html object.
  html.columns[columnName] = document.querySelector(
    `[data-column="${columnName}"]`
  );
  //This loops throught the elements of the COLUMNS array and inserts the elements(from HTML) with data-area=columnName into the originally empty, nested area object.  eg. area:{ordered: html element with data-area="ordered",preparing: html element with data-area="preparing", served: html element with data-area="served"}
  html.area[columnName] = document.querySelector(`[data-area="${columnName}"]`);
}

/**
 * Maps over all columns in the HTML and removes any dragging hover effects
 * except for the current column that is being dragged over (if at all). If the
 * "over" value is not specified, then all columns will be cleared of any hover
 * effects.
 *
 * @param {object} newDragging
 */
export const updateDraggingHtml = (newDragging) => {
  //accepts an object containing over property with its value
  const { over = state.dragging.over } = newDragging; //deconstructs the object recieves and fetches the over property from it. It also assign this over property to the nested dragging object in the state object.

  for (const columnName of COLUMNS) {
    //loops over the elements of the COLUMNS array
    const value = columnName === over ? "rgba(0, 160, 70, 0.2)" : ""; //if the current element of the array is equal to the value of the over property:
    html.area[columnName].style.backgroundColor = value; //The background color of the property with the name corresponding to that current element, will have its backgorund color changed (eg. ig the current element of the columns array is "ordered" and variable over==="prepared", then the html.area["prepared"].style.background="that green" )
  }
};

/**
 * Takes a specific order HTML and clones it into memory. The original HTML
 * element is then removed from the DOM, while the cloned duplicate is added to
 * the bottom of the column that is specified.
 *
 * @param {string} id - The "id" value of a specific order object. Note that
 * only the "id" value is used, not the entire object.
 *
 * @param {string} newColumn - The name of the column that the order should be
 * moved to. This should coincide with one of the values present in the COLUMNS
 * array in "data.js"
 */
export const moveToColumn = (id, newColumn) => {
  const htmlSource = document.querySelector(`[data-id="${id}"]`);
  const duplicate = htmlSource.cloneNode(true);
  html.columns[newColumn].appendChild(duplicate);
  htmlSource.remove();
};

/**
 * Starts the app focused on the "add order" button. This means that users can
 * immediately started adding an order by pressing the enter or spacebar.
 */
html.other.add.focus();

html.add.table.appendChild(createTableOptionsHtml());
html.edit.table.appendChild(createTableOptionsHtml());
