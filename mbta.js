//  Sager Alarifi
//  SEI - hw-w01d05

//  Main function
const stopsBetweenStations = function (sLine, sStation, eLine, eStation) {
    //  Declaring and defining lines as an array, and stops are strings in that array
    const redLine = ["South Station", "Park Street", "Kendall", "Central", "Harvard",
        "Porter", "Davis", "Alewife"];
    const greenLine = ["Government Center", "Park Street", "Boylston", "Arlington",
        "Copley", "Hynes", "Kenmore"]
    const orangeLine = ["North Station", "Haymarket", "Park Street", "State",
        "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]

    let indexS; //  index of the start station
    let indexE; //  index of the end station

    //  logic to get the index of the user input
    //  Starting station
    if(sLine == "Red")
    indexS = redLine.indexOf(sStation);
    if(sLine == "Green")
    indexS = greenLine.indexOf(sStation);
    if(sLine == "Orange")
    indexS = orangeLine.indexOf(sStation);
    
    //  Ending Station
    if(eLine == "Red")
    indexE = redLine.indexOf(eStation);
    if(eLine == "Green")
    indexE = greenLine.indexOf(eStation);
    if(eLine == "Orange")
    indexE = orangeLine.indexOf(eStation);
    
    //  initializing number of stops
    let stopsNum = 0;
    //  case passenger on same line
    if(eLine == sLine){
        stopsNum = 0;
        stopsNum = Math.abs(indexE - indexS);
    } else{
        stopsNum = 0;
        stopsNum += Math.abs(sLine.indexOf("Park Street") - indexS)
        stopsNum += Math.abs(eLine.indexOf("Park Street") - indexE);
    }

    //  print out the number of stops
    console.log("" + sLine.indexOf("Park Street") + " stops");
}