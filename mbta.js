// want to calculate number of stops betwwen stations
// function should take following arguments (start_line, start_station, end_line, end_station)
// all lines intersect at parks tation


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

    console.log("Rider boards the train at " + startLine + " line, " + startStation);
    
    if (startLine === endLine) {        
        if (startStationIndex > endStationIndex) {
                // going left
                for (let i = startStationIndex; i > endStationIndex; i--) {
                    currentStation = subwayLines[startLine][i];
                    numOfStops++;        
                    console.log("Rider arrives at " + currentStation + ' station.');
                                
                } 
                console.log("Rider exits the train at " + endLine + ", " + endStation + " station.");
                return numOfStops + " stations";
        } else {
                // going right
                for (let i = startStationIndex; i < endStationIndex; i++) {
                    currentStation = subwayLines[startLine][i];
                    numOfStops++;
                    console.log("Rider arrives at " + currentStation + ' station.');       
                } 
                console.log("Rider exits the train at " + endLine + " line at " + endStation + " station.");
                return numOfStops + " stations";
        }
    } else { 
        // line switching
        let parkStreetIndex = subwayLines[startLine].indexOf("Park Street");

        // go to park street station
        if (startStationIndex > parkStreetIndex) {

            // going left to park street 
            for (let i = startStationIndex; i > parkStreetIndex; i--) {
                currentStation = subwayLines[startLine][i];
                numOfStops++;  
                console.log("Rider arrives at " + currentStation + ' station.');
            }
            // from end line park street to end station
            parkStreetIndex = subwayLines[endLine].indexOf("Park Street");
            console.log("Rider transfers from " + startLine + " to " + endLine + " line, at "+ currentStation + ' station.');
            

            // going left from end line park street
            if (parkStreetIndex > endStationIndex) {
                for (let i = parkStreetIndex; i > endStationIndex; i--) {
                    currentStation = subwayLines[endLine][i];
                    numOfStops++;    
                    console.log("Rider arrives at " + currentStation + ' station.');  
                                
                } 
                console.log("Rider exits the train at " + endLine + " line at " + endStation + " station.");
                return numOfStops + " stations";

            } else {

                // going right from end line park street
                for (let i = parkStreetIndex; i < endStationIndex; i++) {
                    currentStation = subwayLines[endLine][i];
                    numOfStops++;
                    console.log("Rider arrives at " + currentStation + ' station.');
                         
                } 
                console.log("Rider transfers from " + startLine + " to " + endLine + " line, at "+ currentStation + ' station.');
            }

        } else {

            // going right to park street
            for (let i = startStationIndex; i < parkStreetIndex; i++) {
                currentStation = subwayLines[startLine][i];
                numOfStops++;
                console.log("Rider arrives at " + currentStation + ' station.');
            }
            // from end line park station to end station
            parkStreetIndex = subwayLines[endLine].indexOf("Park Street");
            console.log("Rider transfers from " + startLine + " to " + endLine + " at "+ currentStation + ' station.');


            if (parkStreetIndex > endStationIndex) {
                for (let i = parkStreetIndex; i > endStationIndex; i--) {
                    currentStation = subwayLines[endLine][i];
                    numOfStops++;     
                    console.log("Rider arrives at " + currentStation + ' station.'); 
                                
                } 
                console.log("Rider exits the train at " + endLine + " line at " + endStation + " station.");
                return numOfStops + " stations";
            } else {

                // going right from end line park street
                for (let i = parkStreetIndex; i < endStationIndex; i++) {
                    currentStation = subwayLines[endLine][i];
                    numOfStops++;
                    console.log("Rider arrives at " + currentStation + ' station.');     
                } 
                console.log("Rider exits the train at " + endLine + " line at " + endStation + " station.");
                return numOfStops;
            }
        }
    }
}



// stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
// stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
// stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
// stopsBetweenStations('Red', 'Davis', 'Green', 'Kenmore') // 10 stops
