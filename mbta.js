// want to calculate number of stops betwwen stations
// function should take following arguments (start_line, start_station, end_line, end_station)
// all lines intersect at parkstation


const subwayLines = {
    Red:["South Station", "Park Street", "kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
    Green:["Government Center","Park Street", "Boylston", "Arlington", "Copley", "Hynes","Kenmore"],
    Orange:["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing","Chinatown","Back Bay", "Forest Hills"]
};


const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {
    let numOfStops = 0;
    let currentStation = startStation;    

    const startStationIndex = subwayLines[startLine].indexOf(startStation);
    const endStationIndex = subwayLines[endLine].indexOf(endStation);

    if (startLine === endLine) {        
        if (startStationIndex > endStationIndex) {
                // going left
                for (let i = startStationIndex; i > endStationIndex; i--) {
                    currentStation = subwayLines[startLine][i];
                    numOfStops++;        
                                
                } return numOfStops;
        } else {
                // going right
                for (let i = startStationIndex; i < endStationIndex; i++) {
                    currentStation = subwayLines[startLine][i];
                    numOfStops++;
                         
                } return numOfStops;
        }
    } else { 
        // line switching
        return "line switching";
    }

}



// stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
// stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
// stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
