//  Sager Alarifi
//  SEI - hw-w01d05

//  Main function
const stopsBetweenStations = function (sLine, sStation, eLine, eStation) {
    //  Declaring and defining lines as an object of arrays, and stops are strings in that array
    const linesArr = {
        Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard",
            "Porter", "Davis", "Alewife"],
        Green: ["Government Center", "Park Street", "Boylston", "Arlington",
            "Copley", "Hynes", "Kenmore"],
        Orange: ["North Station", "Haymarket", "Park Street", "State",
            "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
    }

    //  Handeling wrong line input
    if (sLine != "Red" && sLine != "Green" && sLine != "Orange") {
        console.log("invalid starting line input");
        return
    }
    if (eLine != "Red" && eLine != "Green" && eLine != "Orange") {
        console.log("invalid ending line input");
        return
    }

    //  build arrays for input
    const sArr = linesArr[sLine];
    const eArr = linesArr[eLine];

    //  handling for wrong station input
    if(sArr.indexOf(sStation)== -1){
        console.log("invalid starting station input");
        return
    }

    if(eArr.indexOf(eStation)== -1){
        console.log("invalid ending station input");
        return
    }

    //  initializing number of stops
    let stopsNum = 0;

    //  case passenger on same line
    if (eLine == sLine) {
        stopsNum = Math.abs(eArr.indexOf(eStation) - sArr.indexOf(sStation));
    } else {
            stopsNum += Math.abs(sArr.indexOf("Park Street") - sArr.indexOf(sStation));
            stopsNum += Math.abs(eArr.indexOf("Park Street") - eArr.indexOf(eStation));
    }

    //  print out the number of stops
    console.log("" + stopsNum + " stops");
}