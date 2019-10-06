const cityLines = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};
// All station interesect @ Union Square

const planTrip = (startLine, startStation, endLine, endStation) => {
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
      let route;
      locationStart > locationEnd
        ? (route = cityLines[startLine].slice(locationStart, locationEnd))
        : (route = cityLines[startLine]
            .slice(locationEnd, locationStart)
            .reverse());

      console.log(`You board the train in ${startStation} at ${startLine}`);
      console.log(
        `You must travel through the following stops on the ${startLine} line: ${route.join(
          ", "
        )}. `
      );
      console.log(`${res} stops in total`);
    } else {
      let startLocation = cityLines[startLine].indexOf(startStation);
      let startChangeLocatoin = cityLines[startLine].indexOf("Union Square");
      let startStops = Math.abs(startLocation - startChangeLocatoin);
      let startRoute;
      startLocation > startChangeLocatoin
        ? (startRoute = cityLines[startLine]
            .slice(startChangeLocatoin, startLocation)
            .reverse())
        : (startRoute = cityLines[startLine].slice(
            startLocation,
            startChangeLocatoin + 1
          ));
      console.log(`You board the train in ${startStation} at ${startLine}`);
      console.log(
        `You must travel through the following stops on the ${startLine} line: ${startRoute.join(
          ", "
        )}.`
      );
      console.log(`Change at Union Square to ${endLine} line.`);

      // --------- end line ----------

      let endChangeLocation = cityLines[endLine].indexOf("Union Square");
      let endLocation = cityLines[endLine].indexOf(endStation);
      let endStops = Math.abs(endChangeLocation - endLocation);
      let allStops = startStops + endStops;
      let endRoute;
      endChangeLocation > endLocation
        ? (endRoute = cityLines[endLine]
            .slice(endLocation, endChangeLocation)
            .reverse())
        : (endRoute = cityLines[endLine].slice(endChangeLocation, endLocation));
      console.log(
        `Your journey continues on ${endLine} through the following stops: ${endRoute.join(
          ", "
        )}`
      );

      console.log(`${allStops} stops in total`);
    }
  }
};

// planTrip("N", "8th", "L", "1st"); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

planTrip("N", "Times Square", "6", "33rd");
