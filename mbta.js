const cityLines = {
  Red: [
    "South Station",
    "Park Street",
    "Kendall",
    "Central",
    "Harvard",
    "Porter",
    "Davis",
    "Alewife"
  ],
  Green: [
    "Government Center",
    "Park Street",
    "Boylston",
    "Arlington",
    "Copley",
    "Hynes",
    "Kenmore"
  ],
  Orange: [
    "North Station",
    "Haymarket",
    "Park Street",
    "State",
    "Downtown Crossing",
    "Chinatown",
    "Back Bay",
    "Forest Hills"
  ]
};
// All station interesect @ Park Street

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
  let one = false;
  if (
    !(startLine in cityLines) ||
    !(endLine in cityLines) ||
    !cityLines[startLine].includes(startStation) ||
    !cityLines[endLine].includes(endStation)
  ) {
    console.log("wrong entry");
  } else {
    if (startLine === endLine) {
      let locationStart = cityLines[startLine].indexOf(startStation);
      let locationEnd = cityLines[endLine].indexOf(endStation);
      let res = Math.abs(locationStart - locationEnd);
      console.log(`${res} stops. `);
    } else {
      let startLocation = cityLines[startLine].indexOf(startStation);
      let startChangeLocatoin = cityLines[startLine].indexOf("Park Street");
      let startStops = Math.abs(startLocation - startChangeLocatoin);
      let endChangeLocatoin = cityLines[endLine].indexOf("Park Street");
      let endLocation = cityLines[endLine].indexOf(endStation);
      let endStops = Math.abs(endChangeLocatoin - endLocation);
      let allStops = startStops + endStops;
      // console.log(`Rider boards the train a ${startLine} and ${startStation}.`);
      let i = startLocation;
      while (i !== startChangeLocatoin) {
        if (startLocation > startChangeLocatoin) {
          console.log(cityLines[startLine][i]);
          i--;
        } else if (startLocation < startChangeLocatoin) {
          // console.log(cityLines[startLine][i]);
          i++;
        }
      }
      console.log(`${allStops} stops`);
    }
  }
};
stopsBetweenStations("Red", "Alewife", "Red", "Alewife"); // 0 stops
stopsBetweenStations("Red", "Alewife", "Red", "South Station"); // 7 stops
stopsBetweenStations("Red", "South Station", "Green", "Kenmore"); // 6 stops
