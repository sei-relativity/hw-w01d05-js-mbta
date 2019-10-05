//subway lines have three lines and each line contain multiple stations
const subwayLines = {
    Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
    Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
    Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back boy", "Forest Hills"]
};

//old fashion function -- I used it to for practice.
function stopsBetweenStations(startLine, startStation, endLine, endStation) {
    const Journey = [];
    if (subwayLines.hasOwnProperty(startLine) && subwayLines.hasOwnProperty(endLine)) {
        Journey.push("Rider boards the train a " + startLine + "Line and " + startStation);

        //if both start and end line are the same for example: both red or green
        if (subwayLines[startLine] === subwayLines[endLine]) {
            let count = 0;
            if (subwayLines[startLine].indexOf(startStation) === subwayLines[endLine].indexOf(endStation)) {
                return count + " stops";
            }
            //if the start and end stations are the same. for example: both are park street or both Alewife
            if (subwayLines[startLine].indexOf(startStation) < subwayLines[endLine].indexOf(endStation)) {

                for (let i = subwayLines[startLine].indexOf(startStation); i < subwayLines[endLine].indexOf(endStation); i++) {

                    Journey.push("Rider arrives at " + subwayLines[startLine] + "Line and " + subwayLines[startLine][i]);
                    count++; // each loop will increment count so I can count the stops
                }
            } else {
                for (let i = subwayLines[startLine].indexOf(startStation); i > subwayLines[endLine].indexOf(endStation); i--) {
                    Journey.push("Rider arrives at " + subwayLines[startLine] + "Line and " + subwayLines[startLine][i]);
                    count++; // each loop will increment count so I can count the stops
                }
            }
            return count + " stops";
        }

        // if diffrent lines 
        if (subwayLines[startLine] !== subwayLines[endLine]) {
            const intersectionStartLine = subwayLines[startLine].indexOf("Park Street"); // to get the index of the park street train
            const intersectionEndLine = subwayLines[endLine].indexOf("Park Street"); // to get the index of the park street train
            const startStationIndex = subwayLines[startLine].indexOf(startStation); // to get the index of the first station that rider hop on
            const endStationIndex = subwayLines[endLine].indexOf(endStation); // to get the final distnation that the rider will get off
            let count = 0; // will help counting the stations

            //In order to know the first station and when user get off to catch the second station
            if (startStationIndex < intersectionStartLine) { //if the the station is before Park Street
                for (let i = startStationIndex; i < intersectionStartLine; i++) { //incrementing loop i++
                    count++;
                }
            } else if (startStationIndex > intersectionStartLine) { // if the station after Park street
                for (let i = startStationIndex; i > intersectionStartLine; i--) { //decremnting loop i--
                    count++;
                }
            }
            Journey.push("Rider transfers from " + startLine + " to " + endLine + " at " + subwayLines[startLine][intersectionStartLine]); 

            //Catching the second train
            if (endStationIndex < intersectionEndLine) {
                for (let i = endStationIndex; i < intersectionEndLine; i++) {
                    console.log("hrlkjglj ljlk klgr ***** " + endLine + "$$$$$$$$$");
                    Journey.push("Rider arrives at " + endLine + "Line and " + subwayLines[endLine][i]);
                    count++;
                }
            } else if (endStationIndex > intersectionEndLine) {
                for (let i = endStationIndex; i > intersectionEndLine; i--) {
                    
                    Journey.push("Rider arrives at " + endLine + "Line and " + subwayLines[endLine][i]);
                    count++;
                }
                Journey.push("Rider hop off at "+ endStation);
            }
            Journey.forEach(i => {
                console.log(i);
            });

            return count + " stops "
        }
    } else {
        return "plesse check the lines";
    }
}
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'); //0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'); //7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'); // 6 stops