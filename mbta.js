const subwayStation = {

    lines: {

        red: 
        ["South Station", 
        "Park Street",
         "Kendall",
          "Central",
           "Harvard",
            "Porter", 
            "Davis",
             "Alewife"],
        green: 
        ["Government Center",
         "Park Street",
          "Boylston",
          "Arlington", 
          "Copley", 
          "Hynes",
           "Kenmore"],
        orange: 
        ["North Station",
         "Haymarket",
          "Park Street",
           "State", 
           "Downtown Crossing",
            "Chinatown", 
            "Back Bay",
             "Forest Hills"]
    },

    stopsBetweenStations:
     function (startLine,
                startStation,
                endLine, endStation)
      {
        const print = "Rider boards the train a " + startLine + " Line " +
              " and " + startStation +
            " arrives at " + endLine + " line " + 
              " and " + endStation + ".";

        let stops = subwayLines.lines[endLine].indexOf(endStation);
        let count = 0;
    if (subwayLines.lines[startLine].indexOf(startStation) > stops)
        for (i = count; i < ssubwayLines.lines[startLine].indexOf(startStation); i++) {
                
             
            stops = count - subwayLines.lines[startLine].indexOf(startStation) * -1;
            }
     } return print + " Stops " + stops;

    }
}

subwayLines.stopsBetweenStations("red", "South Station", "red", "Alewife");
