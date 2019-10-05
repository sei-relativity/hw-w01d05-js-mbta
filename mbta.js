const Lines = {
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
    Green: ["Government Center",
      "Park Street",
      "Bolyston",
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

  const stopsOnOneLine = function(line, start, end) {
    let stops = Lines[line].indexOf(start) - Lines[line].indexOf(end);
    if (stops <0 ) 
    return -stops ; 
    else 
    return stops ;  };

  const  stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
    let stops = 0;
    if (startLine === endLine) {
      stops = stopsOnOneLine(startLine, startStation, endStation);
    } else {
      stops = stopsOnOneLine(startLine, startStation, 'Park Street') +
        stopsOnOneLine(endLine, endStation, 'Park Street');
    }
  
    return stops; }  
