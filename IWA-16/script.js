const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
  //Destructuring the athletes object to get all the values for each property:
  const { firstName, surname, id, races } = data.response.data[athlete];

  //Getting latest race dates and times for athlete from object
  const latestRace = races[races.length - 1];
  const latestRaceDate = new Date(latestRace.date);
  const latestRaceDay = latestRaceDate.getDate();
  const latestRaceMonth = latestRaceDate.getMonth();
  const latestRaceYear = latestRaceDate.getFullYear();
  console.log(latestRaceDay);

  //**Getting the latest race time from the athletes object**

  //-Loop to get total time for latest race for athlete
  let total = 0;
  for (let i = 0; i < latestRace.time.length; i++) {
    total += latestRace.time[i];
  }
  //-Format for totalTime for athlete
  const latestTotalTime = total;
  const hours = Math.floor(latestTotalTime / 60);
  const minutes = latestTotalTime % 60;

  /**************************************************************************************************************************** */

  //Creating the DocumentFragment to work in:
  const fragment = document.createDocumentFragment();

  //Creating h2 element with athlete id:
  const title = document.createElement("h2");
  title.textContent = id;
  fragment.appendChild(title);

  //Creating the list (dl):
  const list = document.createElement("dl");

  //Creating the nameItem element as child of list element
  const nameItemLabel = document.createElement("dt");
  nameItemLabel.textContent = `Athlete:`;
  const nameItem = document.createElement("dd");
  nameItem.textContent = `${firstName} ${surname}`;
  list.appendChild(nameItemLabel);
  list.appendChild(nameItem);

  //Creating the totalRaces element as child of list element
  const totalRacesItemLabel = document.createElement("dt");
  totalRacesItemLabel.textContent = `Total Races:`;
  const totalRacesItem = document.createElement("dd");
  totalRacesItem.textContent = races.length;
  list.appendChild(totalRacesItemLabel);
  list.appendChild(totalRacesItem);

  //Creating the latestDate element as child of list element
  const latestDateItemLabel = document.createElement("dt");
  latestDateItemLabel.textContent = `Event Date (Latest):`;
  const latestDateItem = document.createElement("dd");
  latestDateItem.textContent = `${latestRaceDay} ${MONTHS[latestRaceMonth]} ${latestRaceYear}`;
  list.appendChild(latestDateItemLabel);
  list.appendChild(latestDateItem);

  //Creating the latestTime element as child of list element
  const latestTimeItemLabel = document.createElement("dt");
  latestTimeItemLabel.textContent = `Total Time (Latest):`;
  const latestTimeItem = document.createElement("dd");
  latestTimeItem.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  list.appendChild(latestTimeItemLabel);
  list.appendChild(latestTimeItem);

  /* Alternative:
  //Creating the list (dl):
  const list = document.createElement("dl");

  const dlItems = `<dt>Athlete:</dt>
  <dd>${firstName} ${surname}</dd>

  <dt>Total Races</dt>
  <dd>${races.length}</dd>

  <dt>Event Date (Latest):</dt>
  <dd>${latestRaceDay} ${MONTHS[latestRaceMonth]} ${latestRaceYear}</dd>

  <dt>Total Time (Latest):</dt>
  <dd>${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}</dd>
`;

  list.innerHTML = dlItems;

*/

  fragment.appendChild(list);
  return fragment;
};

document
  .querySelector(`[data-athlete="NM372"]`)
  .appendChild(createHtml("NM372"));
document
  .querySelector(`[data-athlete="SV782"]`)
  .appendChild(createHtml("SV782"));
