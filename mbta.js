const stopsBetweenStations = function(StartLine, StartStation, EndLine, EndStation) {
    const Stations = {
        red: [
                "south station" , "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"
            ]
            ,
        green: [
                "Government Center" , "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"
            ]
            ,
        orange: [
                "North Station" , "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"
            ]
    };

let totalStops = 0;
    if(StartLine == EndLine){
       totalStops = Math.abs(Stations[EndLine].indexOf(EndStation) - Stations[StartLine].indexOf(StartStation))
    } else {
        let firstTrip =  Math.abs(Stations[StartLine].indexOf(StartStation) - Stations[StartLine].indexOf("Park Street"));
        let secondTrip = Math.abs(Stations[EndLine].indexOf(EndStation) - Stations[StartLine].indexOf("Park Street"));
        totalStops = firstTrip + secondTrip;
    }
return totalStops;
};


stopsBetweenStations('red', 'Alewife', 'red', 'Alewife') // 0 stops
stopsBetweenStations('red', 'Alewife', 'red', 'South Station') // 7 stops
stopsBetweenStations('red', 'South Station', 'green', 'Kenmore') // 6 stops
