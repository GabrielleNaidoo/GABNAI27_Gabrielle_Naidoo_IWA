const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); //This returns it wihtout need for return statement
//It takes the current date and returns the year, month, and ;last day of that month

// Only edit below

//This function creates and array with the number of elements= "length" argument that should be specified:
const createArray = (length) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(i);
  }

  return result;
};

const createData = () => {
  const current = new Date();
  current.setDate(1); //To set to the first date of the month
  const startDay = current.getDay(); //actual day of first date of the month(eg. Thursday, Wednesday,etc)
  const daysInMonth = getDaysInMonth(current); //number of days in the current month

  const weeks = createArray(5); //number of weeks in the month
  const daysOfWeek = createArray(7); //number of days in the week
  let result = []; // create result array that will hold all data

  //Loops through the indexes of the weeks array, and pushes an object with 2 properties to the array for each item of the weeks array to the originally empty result array
  for (const weekIndex of weeks) {
    result.push({
      week: weekIndex + 1, //+1 so that it shows as more readable
      days: [],
    }); //eg: result=[{week: 0+1,days:[]},{week:1+1,days:[]},{week:2+1,days:[]}...]

    //Loops through the indexes of the days array and pushes an object to the days array with 2 properties for each item of the days array that it loops over.
    for (const dayIndex of daysOfWeek) {
      const day = weekIndex * 7 + dayIndex - startDay + 1; //To calculate the exact day in the current month
      const isValid = day > 0 && day <= daysInMonth;

      result[weekIndex].days.push({
        //Accesses specific week within the result array. Then accesses the days property within that weeks object(an array where we store information about each day in a week).
        dayOfWeek: dayIndex + 1, //eg.result=[{week:1,days:[{dayOfWeek:,value:,},{dayOfWeek:,Value:}]]//Has a day of week and value property nested inside the days array, for each day of the week. The value property decides whether that day exists for that specific week of that specific month and should be shown.
        value: isValid ? day : "",
      });
    }
  }

  return result;
};

const addCell = (existing, classString, value) => {
  const result = /* html */ `
      ${existing}

      <td class="${classString}">
          &nbsp; ${value} &nbsp;
      </td>
  `;

  return result;
};

const createHtml = (data) => {
  let result = "";

  for (const { week, days } of data) {
    let inner = "";
    inner = addCell(inner, "table__cell table__cell_sidebar ", `Week ${week}`);

    for (const { dayOfWeek, value } of days) {
      const isToday = new Date().getDate() === value; //if today's date is equal to the value of the current iteration of today
      const isWeekend = (dayOfWeek === 1) | (dayOfWeek === 7); //if the value of the iteration is equal to 1 or to 7(corresponds to sunday or saturday)
      const isAlternate = dayOfWeek % 2 === 0; //even days(Monday,Wednesday,Friday)

      let classString = "table__cell table_cell_sidebar";
      const isTodayClass = "table__cell_today";
      const isWeekendClass = "table__cell_weekend";
      const isAlternateClass = "table__cell_alternate";

      if (isToday) classString += ` ${isTodayClass}`;
      if (isWeekend) classString += ` ${isWeekendClass}`;
      if (isAlternate) classString += ` ${isAlternateClass}`;

      inner = addCell(inner, classString, `${value}`);
    }

    result = `
          ${result}
          <tr>${inner}</tr>
      `;
  }

  return result;
};

// Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);
