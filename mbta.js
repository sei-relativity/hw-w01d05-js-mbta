let start = 0;
let end = 0;
let theNumberOfStops = end - start;
const Stations = {
    Red: [
            "South Station" , "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"
        ]
        ,
    Green: [
            "Government Center" , "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"
        ]
        ,
    Orange: [
            "North Station" , "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"
        ]
};

const stopsBetweenStations = function(StartLine, StartStation, EndLine, EndStation) {
    for(var i = 0; i < Stations.Red; i++) {
        if(StartLine == Stations.Red[i]) {
            Stations.Red.indexOf(Stations.Red[i]) += start;
        }
           else if(EndLine == Stations.Red[i]) {
            Stations.Red.indexOf(Stations.Red[i]) += end
           }
        }
        return theNumberOfStops + " Stops";
};



stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
// stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
// stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
