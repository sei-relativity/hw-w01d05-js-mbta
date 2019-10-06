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
      let route = cityLines[startLine].slice(locationStart + 1, locationEnd);
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
            startChangeLocatoin
          ));
      console.log(`You board the train in ${startStation} at ${startLine}`);
      console.log(
        `You must travel through the following stops on the ${startLine} line: ${startRoute.join(
          ", "
        )}.`
      );
      console.log(`Change at Union Square.`);
      let endChangeLocatoin = cityLines[endLine].indexOf("Union Square");
      let endLocation = cityLines[endLine].indexOf(endStation);
      let endStops = Math.abs(endChangeLocatoin - endLocation);
      let allStops = startStops + endStops;
      let endRoute;
      console.log(endLocation);
      endLocation > endChangeLocatoin
        ? (endRoute = cityLines[endLine]).slice(endChangeLocatoin, endLocation)
        : (endRoute = cityLines[endLine].slice(
            endChangeLocatoin,
            endLocation
          )).reverse();
      // console.log(
      //   ` endLocation ${endLocation} and endChangeLocation ${endChangeLocatoin}`,
      //   endRoute
      // );

      console.log("this is end route", endRoute);
      console.log(
        `Your journey continues on ${endLine} through the following stops: ${endRoute.join(
          ", "
        )}`
      );
      // console.log(`Rider boards the train a ${startLine} and ${startStation}.`);
      // let i = startLocation;
      // while (i !== startChangeLocatoin) {
      //   if (startLocation > startChangeLocatoin) {
      //     console.log(cityLines[startLine][i]);
      //     i--;
      //   } else if (startLocation < startChangeLocatoin) {
      //     // console.log(cityLines[startLine][i]);
      //     i++;
      //   }
      // }
      console.log(`${allStops} stops in total`);
    }
  }
};
// planTrip("N", "34th", "N", "8th");

planTrip("N", "Times Square", "6", "Astor Place");
